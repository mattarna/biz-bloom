const { XMLParser } = require('fast-xml-parser');

async function testFeeds() {
  const feeds = [
    { url: 'https://gulfbusiness.com/feed/', source: 'Gulf Business' },
    { url: 'https://www.arabianbusiness.com/rss/', source: 'Arabian Business' },
    { url: 'https://www.khaleejtimes.com/news/uae/rss', source: 'Khaleej Times' },
    { url: 'https://www.wam.ae/en/rss/1', source: 'WAM' },
    { url: 'https://gulfnews.com/rss', source: 'Gulf News Root' },
  ];

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
  });

  for (const feed of feeds) {
    console.log(`\nTesting ${feed.source} (${feed.url})...`);
    try {
      const res = await fetch(feed.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
          'Accept': 'application/rss+xml, application/xml, text/xml',
        },
      });

      console.log(`Status: ${res.status}`);
      if (!res.ok) continue;

      const xml = await res.text();
      console.log(`XML Length: ${xml.length}`);
      const parsed = parser.parse(xml);
      
      const items = parsed?.rss?.channel?.item || parsed?.feed?.entry || [];
      const itemsArray = Array.isArray(items) ? items : [items];
      
      console.log(`Items found: ${itemsArray.length}`);
      if (itemsArray.length > 0) {
        console.log(`Sample Item Link:`, itemsArray[0].link);
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
}

testFeeds();
