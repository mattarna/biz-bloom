import { MetadataRoute } from 'next';
import { locales } from '@/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bizbloom.singapore';
  
  const routes = [
    '',
    '/membership',
    '/blue-room',
    '/b2b-room',
    '/brainy-box',
    '/digital-stores',
    '/parlour',
    '/contact',
  ];

  const sitemapData: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapData.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemapData;
}
