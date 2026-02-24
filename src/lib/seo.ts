// src/lib/seo.ts

import { Metadata } from 'next';
import { Writing } from '@/types/content';

// ============================================================================
// Constants
// ============================================================================

const SITE_URL = 'https://www.oreliosattari.com';
const SITE_NAME = 'P. Orelio Sattari';
const SITE_TAGLINE = 'Reality from First Principles';
const AUTHOR_NAME = 'P. Orelio Sattari';
const TWITTER_HANDLE = '@oreliosattari';

// ============================================================================
// Next.js Metadata Generation
// ============================================================================

/**
 * Generate Next.js metadata for a writing piece
 */
export function generateWritingMetadata(writing: Writing): Metadata {
  const canonicalUrl = `${SITE_URL}/writing/${writing.slug}`;
  const imageUrl = writing.featuredImage
    ? `${SITE_URL}${writing.featuredImage}`
    : `${SITE_URL}/images/og-image.jpg`;

  return {
    title: `${writing.title} | ${SITE_NAME}`,
    description: writing.excerpt,
    authors: [{ name: AUTHOR_NAME }],
    
    // Open Graph
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: writing.title,
      description: writing.excerpt,
      siteName: SITE_NAME,
      publishedTime: writing.publishedAt,
      modifiedTime: writing.updatedAt,
      authors: [AUTHOR_NAME],
      tags: writing.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: writing.title,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: writing.title,
      description: writing.excerpt,
      images: [imageUrl],
    },

    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },

    // Additional metadata
    keywords: writing.tags,
    category: writing.category,
  };
}

/**
 * Generate Next.js metadata for the writing index page
 */
export function generateWritingIndexMetadata(): Metadata {
  const canonicalUrl = `${SITE_URL}/writing`;

  return {
    title: `Writing | ${SITE_NAME}`,
    description: `Essays and long-form explorations by ${AUTHOR_NAME} on physics, consciousness, systems, and the nature of reality.`,
    
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: `Writing | ${SITE_NAME}`,
      description: `Essays and long-form explorations by ${AUTHOR_NAME} on physics, consciousness, systems, and the nature of reality.`,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
    },

    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// ============================================================================
// JSON-LD Structured Data
// ============================================================================

/**
 * Generate Schema.org Article structured data
 */
export function generateArticleJsonLd(writing: Writing) {
  const canonicalUrl = `${SITE_URL}/writing/${writing.slug}`;
  const imageUrl = writing.featuredImage
    ? `${SITE_URL}${writing.featuredImage}`
    : `${SITE_URL}/images/og-image.jpg`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: writing.title,
    description: writing.excerpt,
    image: imageUrl,
    datePublished: writing.publishedAt,
    dateModified: writing.updatedAt || writing.publishedAt,
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    wordCount: writing.wordCount,
    keywords: writing.tags.join(', '),
    articleSection: writing.category,
    inLanguage: 'en-US',
  };
}

/**
 * Generate Schema.org BreadcrumbList structured data
 */
export function generateBreadcrumbJsonLd(writing: Writing) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Writing',
        item: `${SITE_URL}/writing`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: writing.title,
        item: `${SITE_URL}/writing/${writing.slug}`,
      },
    ],
  };
}

/**
 * Generate complete JSON-LD for a writing page
 */
export function generateWritingJsonLd(writing: Writing) {
  return [
    generateArticleJsonLd(writing),
    generateBreadcrumbJsonLd(writing),
  ];
}

// ============================================================================
// RSS Feed Helpers
// ============================================================================

/**
 * Format writing for RSS feed
 */
export function formatWritingForRSS(writing: Writing) {
  return {
    title: writing.title,
    description: writing.excerpt,
    url: `${SITE_URL}/writing/${writing.slug}`,
    guid: `${SITE_URL}/writing/${writing.slug}`,
    date: new Date(writing.publishedAt),
    categories: [writing.category, ...writing.tags],
  };
}


// ============================================================================
// Insights
// ============================================================================

import { Insight } from '@/types/content';
import { formatInsightNumber } from '@/lib/utils';

/**
 * Extract clean preview snippet from expansion text
 * Strips markdown, limits to ~150 chars, ends at sentence boundary
 */

function getExpansionSnippet(expansion: string, maxLength = 150): string {
  // Strip markdown
  const clean = expansion
    .replace(/\*(.*?)\*/g, '$1')  // Remove italic markers
    .replace(/\*\*(.*?)\*\*/g, '$1')  // Remove bold markers
    .replace(/\n/g, ' ')  // Replace newlines with spaces
    .trim();

  if (clean.length <= maxLength) {
    return clean;
  }

  // Find last sentence boundary within maxLength
  const truncated = clean.substring(0, maxLength);
  const lastPeriod = truncated.lastIndexOf('.');
  const lastQuestion = truncated.lastIndexOf('?');
  const lastExclamation = truncated.lastIndexOf('!');
  
  const lastSentence = Math.max(lastPeriod, lastQuestion, lastExclamation);
  
  if (lastSentence > 50) {
    // End at sentence if we found one reasonably far in
    return clean.substring(0, lastSentence + 1);
  } else {
    // Otherwise truncate at word boundary and add ellipsis
    const lastSpace = truncated.lastIndexOf(' ');
    return clean.substring(0, lastSpace) + '...';
  }
}

/**
 * Generate Next.js metadata for an insight
 */

export function generateInsightMetadata(insight: Insight): Metadata {
  const canonicalUrl = `${SITE_URL}/insights/${insight.slug}`;
  const imageUrl = insight.featuredImage
    ? `${SITE_URL}${insight.featuredImage}`
    : `${SITE_URL}/images/og-image.jpg`;

  // Strip markdown for clean SEO snippets
  const cleanAxiom = insight.axiom.replace(/\*(.*?)\*/g, '$1');
  
  // Create richer description: axiom + expansion snippet
  const expansionSnippet = getExpansionSnippet(insight.expansion, 150);
  const fullDescription = `${cleanAxiom} — ${expansionSnippet}`;

  return {
    title: `Insight #${formatInsightNumber(insight.number)}`, 
    description: fullDescription,
    authors: [{ name: AUTHOR_NAME }],
    
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: `Insight #${formatInsightNumber(insight.number)}`,
      description: fullDescription,  // Updated
      siteName: SITE_NAME,
      publishedTime: insight.publishedAt,
      modifiedTime: insight.updatedAt || insight.publishedAt,
      authors: [AUTHOR_NAME],
      tags: insight.categories,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Insight #${formatInsightNumber(insight.number)}`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: `Insight #${formatInsightNumber(insight.number)}`,
      description: fullDescription,  // Updated
      images: [imageUrl],
    },

    alternates: {
      canonical: canonicalUrl,
    },

    keywords: insight.categories,
  };
}

/**
 * Generate metadata for insights index page
 */

export function generateInsightsIndexMetadata(): Metadata {
  const canonicalUrl = `${SITE_URL}/insights`;

  return {
    title: 'Insights', // Template makes this "Insights | P. Orelio Sattari"
    description: `Contemplative aphorisms grounded in lived insight by ${AUTHOR_NAME}.`,
    
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: 'Insights',
      description: `Contemplative aphorisms grounded in lived insight by ${AUTHOR_NAME}.`,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
    },

    alternates: {
      canonical: canonicalUrl,
    },
  };
}

/**
 * Generate JSON-LD for insight
 */

export function generateInsightJsonLd(insight: Insight) {
  const canonicalUrl = `${SITE_URL}/insights/${insight.slug}`;
  const imageUrl = insight.featuredImage
    ? `${SITE_URL}${insight.featuredImage}`
    : `${SITE_URL}/images/og-image.jpg`;
  
  const cleanAxiom = insight.axiom.replace(/\*(.*?)\*/g, '$1');
  const formattedNumber = formatInsightNumber(insight.number);

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      // Schema headlines can be slightly more descriptive than browser tabs
      headline: `Insight #${formattedNumber}: ${cleanAxiom}`,
      description: cleanAxiom,
      image: imageUrl,
      datePublished: insight.publishedAt,
      dateModified: insight.updatedAt || insight.publishedAt,
      author: {
        '@type': 'Person',
        name: AUTHOR_NAME,
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Person',
        name: AUTHOR_NAME,
        url: SITE_URL,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
      wordCount: insight.wordCount,
      keywords: insight.categories.join(', '),
      articleSection: 'Insights',
      inLanguage: 'en-US',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Insights',
          item: `${SITE_URL}/insights`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `No. ${formattedNumber}`,
          item: canonicalUrl,
        },
      ],
    },
  ];
}