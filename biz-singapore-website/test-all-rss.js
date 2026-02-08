const { XMLParser } = require('fast-xml-parser');

async function testCurrentFeeds() {
  const RSS_FEEDS = {
    uae: [
      { url: 'https://gulfnews.com/business/rss', source: 'Gulf News' },
      { url: 'https://www.thenationalnews.com/business/rss', source: 'The National' },
    ],
    ksa: [
      { url: 'https://www.arabnews.com/rss/business', source: 'Arab News' },
      { url: 'https://saudigazette.com.sa/rss/business', source: 'Saudi Gazette' },
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

  for (const [region, feeds] of Object.entries(RSS_FEEDS)) {
    console.log(`\n--- Region: ${region} ---`);
    for (const feed of feeds) {
      console.log(`Testing ${feed.source} (${feed.url})...`);
      try {
        const res = await fetch(feed.url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
          },
        });
        console.log(`Status: ${res.status}`);
        if (res.ok) {
          const xml = await res.text();
          console.log(`XML Length: ${xml.length}`);
        }
      } catch (err) {
        console.error(`Error: ${err.message}`);
      }
    }
  }
}

testCurrentFeeds();
