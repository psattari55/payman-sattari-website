// src/types/content.ts

/**
 * Content Type Definitions
 * 
 * Core types for the markdown-based content system.
 * Used across writings, insights, and research sections.
 */

// ============================================================================
// Writing Types
// ============================================================================

export type WritingType = 'short-essay' | 'long-essay' | 'minibook';

export type ContentStatus = 'draft' | 'published';

export interface WritingFrontmatter {
  // Core metadata
  title: string;
  subtitle?: string;
  excerpt: string;
  
  // Publication info
  publishedAt: string;
  updatedAt?: string;
  status?: ContentStatus; // defaults to 'published' if not specified
  
  // Content classification
  type: WritingType;
  category: string;
  tags: string[];
  
  // Visual elements
  featuredImage?: string;
  featured?: boolean;
  
  // Optional purchase info (for minibooks)
  isPurchasable?: boolean;
  purchaseLink?: string;
}

export interface Writing extends WritingFrontmatter {
  slug: string;
  content: string;
  wordCount: number;
  readTime: number; // in minutes
}

// ============================================================================
// Category & Tag Types
// ============================================================================

export interface Category {
  id: string;
  label: string;
  description?: string;
}

export interface Tag {
  id: string;
  label: string;
}

// ============================================================================
// SEO & Metadata Types
// ============================================================================

export interface SEOMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  openGraph: {
    type: 'article';
    title: string;
    description: string;
    image?: string;
    publishedTime: string;
    modifiedTime?: string;
    authors: string[];
    tags: string[];
  };
  jsonLd: object; // Schema.org structured data
}

// ============================================================================
// Utility Types
// ============================================================================

export interface ContentFilters {
  category?: string;
  tags?: string[];
  type?: WritingType;
  featured?: boolean;
}

export interface PaginationParams {
  page: number;
  perPage: number;
}

export interface PaginatedResults<T> {
  items: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

// ============================================================================
// Insights
// ============================================================================

export interface InsightFrontmatter {
  number: number;
  publishedAt: string;
  updatedAt?: string;
  categories: string[];
  featuredImage?: string;
  featured?: boolean;
  published: boolean;
}

export interface Insight extends InsightFrontmatter {
  slug: string;           // Auto-generated from filename
  axiom: string;          // First paragraph (≤275 chars)
  expansion: string;      // Rest of content (markdown)
  wordCount: number;      // Expansion only
  readTime: number;       // Based on expansion
}

export interface InsightFilters {
  category?: string;
  categories?: string[];
  featured?: boolean;
}