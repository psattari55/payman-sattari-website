// src/app/articles/layout.tsx

import { Metadata } from 'next'
import { siteConfig } from '@/config/metadata'

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      type: 'article',
      title: siteConfig.title,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [{
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      }],
    },
    facebook: {
      appId: '1100997351655107'
    }
  }
}

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}