// src/app/articles/layout.tsx

import { Metadata } from 'next'
import { siteConfig } from '@/config/metadata'
import { articles } from '@/data/articles'

type Props = {
  params: {
    slug: string[]
  }
}

export async function generateMetadata(
  props: Props
): Promise<Metadata> {
  // Get the current path
  const currentPath = props.params.slug?.join('/') || '';
  
  // Find the article that matches this path
  const article = articles.find(article => 
    article.slug.replace(/^\/articles\//, '') === currentPath
  );

  if (!article) {
    return {}; // Return empty metadata if no article found
  }

  return {
    title: article.subtitle 
      ? `${article.title}: ${article.subtitle} | ${siteConfig.name}`
      : `${article.title} | ${siteConfig.name}`,
    description: article.description,
    openGraph: {
      type: 'article',
      title: article.subtitle 
        ? `${article.title}: ${article.subtitle}`
        : article.title,
      description: article.description,
      url: `${siteConfig.url}${article.slug}`,
      siteName: siteConfig.name,
      images: [{
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: article.title,
      }],
      authors: ['Payman Sattari'],
      publishedTime: article.publishDate,
      section: article.category,
      tags: article.door ? [article.door] : [],
    },
    facebook: {
      appId: '1100997351655107'
    },
  }
}

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}