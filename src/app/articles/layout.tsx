// src/app/articles/layout.tsx

import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  // For articles layout, we'll just ensure og:type is 'article'
  // The specific article metadata will be handled by the page components
  return {
    openGraph: {
      type: 'article'
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