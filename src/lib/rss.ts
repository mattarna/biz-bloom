import { XMLParser } from 'fast-xml-parser';

export interface FeedItem {
  title: string;
  link: string;
  source: string;
  pubDate: string;
  description: string;
}

interface RSSFeedConfig {
  url: string;
  source: string;
}

const RSS_FEEDS: Record<string, RSSFeedConfig[]> = {
  uae: [
    { url: 'https://gulfbusiness.com/feed/', source: 'Gulf Business' },
    { url: 'https://www.wam.ae/en/rss/1', source: 'WAM News' },
  ],
  ksa: [
    { url: 'https://saudigazette.com.sa/rss/business', source: 'Saudi Gazette' },
    { url: 'https://www.arabnews.com/rss/business', source: 'Arab News' },
  ],
  singapore: [
    { url: 'https://www.channelnewsasia.com/api/v1/rss-outbound-feed?_format=xml&category=6511', source: 'CNA Business' },
    { url: 'https://www.straitstimes.com/news/business/rss.xml', source: 'Straits Times' },
  ],
};

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
});

async function fetchFeed(config: RSSFeedConfig): Promise<FeedItem[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(config.url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; BizBloom/1.0)',
        'Accept': 'application/rss+xml, application/xml, text/xml',
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) return [];

    const xml = await res.text();
    const parsed = parser.parse(xml);

    // Handle both RSS 2.0 and Atom formats
    const items =
      parsed?.rss?.channel?.item ||
      parsed?.feed?.entry ||
      [];

    const feedItems: FeedItem[] = (Array.isArray(items) ? items : [items])
      .slice(0, 6)
      .map((item: any) => ({
        title: item.title?.toString()?.replace(/<[^>]*>/g, '')?.trim() || '',
        link: item.link?.['@_href'] || item.link?.toString() || '',
        source: config.source,
        pubDate: item.pubDate || item.published || item.updated || '',
        description: (item.description || item.summary || '')
          .toString()
          .replace(/<[^>]*>/g, '')
          .trim()
          .slice(0, 200),
      }))
      .filter((item: FeedItem) => item.title && item.link);

    return feedItems;
  } catch {
    // Silently fail for individual feeds - we aggregate multiple sources
    return [];
  }
}

export async function fetchRegionNews(region: string): Promise<FeedItem[]> {
  const feeds = RSS_FEEDS[region];
  if (!feeds) return [];

  const results = await Promise.allSettled(
    feeds.map((config) => fetchFeed(config))
  );

  const allItems: FeedItem[] = results
    .filter((r): r is PromiseFulfilledResult<FeedItem[]> => r.status === 'fulfilled')
    .flatMap((r) => r.value);

  // Sort by date (newest first) and take top 4
  return allItems
    .sort((a, b) => {
      const dateA = new Date(a.pubDate).getTime() || 0;
      const dateB = new Date(b.pubDate).getTime() || 0;
      return dateB - dateA;
    })
    .slice(0, 4);
}

export function getValidRegions(): string[] {
  return Object.keys(RSS_FEEDS);
}
