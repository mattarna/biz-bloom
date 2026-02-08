import { NextRequest, NextResponse } from 'next/server';
import { fetchRegionNews, getValidRegions } from '@/lib/rss';

export const revalidate = 21600; // 6 hours ISR cache

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get('region');

  if (!region || !getValidRegions().includes(region)) {
    return NextResponse.json(
      { error: 'Invalid region. Use: uae, ksa, or singapore' },
      { status: 400 }
    );
  }

  try {
    const items = await fetchRegionNews(region);
    return NextResponse.json({ region, items }, {
      headers: {
        'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=43200',
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch news', region, items: [] },
      { status: 500 }
    );
  }
}
