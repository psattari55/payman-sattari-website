// src/app/writing/rss.xml/route.ts

import { getAllWritings } from '@/lib/content';

const SITE_URL = 'https://www.oreliosattari.com';
const SITE_NAME = 'P. Orelio Sattari';
const SITE_DESCRIPTION = 'Essays on physics, consciousness, systems, and the nature of reality';

export async function GET() {
  const writings = await getAllWritings();
  
  // Get the 20 most recent writings
  const recentWritings = writings.slice(0, 20);

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE_NAME} - Writing</title>
    <description>${SITE_DESCRIPTION}</description>
    <link>${SITE_URL}/writing</link>
    <atom:link href="${SITE_URL}/writing/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${recentWritings
      .map((writing) => {
        const pubDate = new Date(writing.publishedAt).toUTCString();
        const url = `${SITE_URL}/writing/${writing.slug}`;
        
        return `
    <item>
      <title><![CDATA[${writing.title}]]></title>
      <description><![CDATA[${writing.excerpt}]]></description>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      ${writing.category ? `<category>${writing.category}</category>` : ''}
      ${writing.tags.map((tag) => `<category>${tag}</category>`).join('\n      ')}
    </item>`;
      })
      .join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}