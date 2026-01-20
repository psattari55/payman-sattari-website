// src/lib/content.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  Writing,
  WritingFrontmatter,
  ContentFilters,
  WritingType,
} from '@/types/content';
import { 
    Insight,
    InsightFrontmatter,
    InsightFilters,
} from '@/types/content';

// ============================================================================
// Constants
// ============================================================================

const CONTENT_DIR = path.join(process.cwd(), 'content');
const WRITINGS_DIR = path.join(CONTENT_DIR, 'writings');

// Average reading speed (words per minute)
const WORDS_PER_MINUTE = 200;

// ============================================================================
// Core Reading Functions
// ============================================================================

/**
 * Get all markdown files from a directory
 */
function getMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));
}

/**
 * Calculate word count from markdown content
 */
function calculateWordCount(content: string): number {
  // Remove markdown syntax for accurate count
  const plainText = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]+`/g, '') // Remove inline code
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Convert links to text
    .replace(/[#*_~`]/g, '') // Remove markdown symbols
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  return plainText.split(/\s+/).length;
}

/**
 * Calculate reading time based on word count
 */
function calculateReadTime(wordCount: number): number {
  return Math.ceil(wordCount / WORDS_PER_MINUTE);
}

/**
 * Parse a markdown file and return Writing object
 */
function parseWritingFile(filePath: string, slug: string): Writing {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Validate required frontmatter fields
  const frontmatter = data as WritingFrontmatter;
  
  if (!frontmatter.title) {
    throw new Error(`Missing title in ${slug}`);
  }
  if (!frontmatter.excerpt) {
    throw new Error(`Missing excerpt in ${slug}`);
  }
  if (!frontmatter.publishedAt) {
    throw new Error(`Missing publishedAt in ${slug}`);
  }
  if (!frontmatter.type) {
    throw new Error(`Missing type in ${slug}`);
  }
  if (!frontmatter.category) {
    throw new Error(`Missing category in ${slug}`);
  }

  // Calculate metrics
  const wordCount = calculateWordCount(content);
  const readTime = calculateReadTime(wordCount);

  return {
    ...frontmatter,
    slug,
    content,
    wordCount,
    readTime,
    status: frontmatter.status || 'published',
    tags: frontmatter.tags || [],
  };
}

// ============================================================================
// Public API - Writings
// ============================================================================

/**
 * Get all published writings
 * @param includeContent - Whether to include full markdown content (default: false)
 */
export async function getAllWritings(
  includeContent = false
): Promise<Writing[]> {
  const files = getMarkdownFiles(WRITINGS_DIR);

  const writings = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '');
    const filePath = path.join(WRITINGS_DIR, filename);
    const writing = parseWritingFile(filePath, slug);

    // Optionally strip content to reduce payload size
    if (!includeContent) {
      return { ...writing, content: '' };
    }

    return writing;
  });

  // Filter out drafts
  const published = writings.filter((w) => w.status === 'published');

  // Sort by publication date (newest first)
  return published.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

/**
 * Get a single writing by slug
 */
export async function getWritingBySlug(slug: string): Promise<Writing | null> {
  const filePath = path.join(WRITINGS_DIR, `${slug}.md`);
  const mdxFilePath = path.join(WRITINGS_DIR, `${slug}.mdx`);

  let targetPath: string | null = null;

  if (fs.existsSync(filePath)) {
    targetPath = filePath;
  } else if (fs.existsSync(mdxFilePath)) {
    targetPath = mdxFilePath;
  }

  if (!targetPath) {
    return null;
  }

  return parseWritingFile(targetPath, slug);
}

/**
 * Get writings filtered by criteria
 */
export async function getFilteredWritings(
  filters: ContentFilters,
  includeContent = false
): Promise<Writing[]> {
  const allWritings = await getAllWritings(includeContent);

  return allWritings.filter((writing) => {
    if (filters.category && writing.category !== filters.category) {
      return false;
    }

    if (filters.type && writing.type !== filters.type) {
      return false;
    }

    if (filters.tags && filters.tags.length > 0) {
      const hasAllTags = filters.tags.every((tag) =>
        writing.tags.includes(tag)
      );
      if (!hasAllTags) {
        return false;
      }
    }

    if (filters.featured !== undefined && writing.featured !== filters.featured) {
      return false;
    }

    return true;
  });
}

/**
 * Get featured writings
 */
export async function getFeaturedWritings(): Promise<Writing[]> {
  return getFilteredWritings({ featured: true }, false);
}

/**
 * Get related writings based on category and tags
 */
export async function getRelatedWritings(
  writing: Writing,
  limit = 3
): Promise<Writing[]> {
  const allWritings = await getAllWritings(false);

  // Exclude the current writing
  const others = allWritings.filter((w) => w.slug !== writing.slug);

  // Score writings based on relevance
  const scored = others.map((other) => {
    let score = 0;

    // Same category = +3 points
    if (other.category === writing.category) {
      score += 3;
    }

    // Shared tags = +1 point each
    const sharedTags = other.tags.filter((tag) =>
      writing.tags.includes(tag)
    );
    score += sharedTags.length;

    return { writing: other, score };
  });

  // Sort by score and return top N
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.writing);
}

/**
 * Get all unique categories used in writings
 */
export async function getUsedCategories(): Promise<string[]> {
  const writings = await getAllWritings(false);
  const categories = new Set(writings.map((w) => w.category));
  return Array.from(categories);
}

/**
 * Get all unique tags used in writings
 */
export async function getUsedTags(): Promise<string[]> {
  const writings = await getAllWritings(false);
  const tags = new Set(writings.flatMap((w) => w.tags));
  return Array.from(tags);
}

/**
 * Get writings count by type
 */
export async function getWritingsByType(): Promise<
  Record<WritingType, number>
> {
  const writings = await getAllWritings(false);

  return writings.reduce(
    (acc, writing) => {
      acc[writing.type] = (acc[writing.type] || 0) + 1;
      return acc;
    },
    {} as Record<WritingType, number>
  );
}

// ============================================================================
// Insights
// ============================================================================

const INSIGHTS_DIR = path.join(CONTENT_DIR, 'insights');

// Maximum axiom length (characters)
const MAX_AXIOM_LENGTH = 275;

/**
 * Parse insight markdown file
 * Format: First paragraph = axiom, rest = expansion
 */
function parseInsightFile(filePath: string, slug: string): Insight {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Validate required frontmatter
  const frontmatter = data as InsightFrontmatter;
  
  if (typeof frontmatter.number !== 'number') {
    throw new Error(`Missing or invalid number in ${slug}`);
  }
  if (!frontmatter.publishedAt) {
    throw new Error(`Missing publishedAt in ${slug}`);
  }
  if (!frontmatter.categories || frontmatter.categories.length === 0) {
    throw new Error(`Missing categories in ${slug}`);
  }

  // Split content: first paragraph = axiom, rest = expansion
  const parts = content.split(/\n---\n/);
  
  if (parts.length < 2) {
    throw new Error(`Invalid format in ${slug}: Must have axiom and expansion separated by ---`);
  }

  const axiom = parts[0].trim();
  const expansion = parts.slice(1).join('\n---\n').trim();

  // Validate axiom length (warn, don't fail)
  const axiomLength = axiom.replace(/[*_]/g, '').length; // Strip markdown for count
  if (axiomLength > MAX_AXIOM_LENGTH) {
    console.warn(
      `⚠️  Axiom in ${slug} exceeds ${MAX_AXIOM_LENGTH} characters (${axiomLength} chars)`
    );
  }

  // Calculate metrics (expansion only)
  const wordCount = calculateWordCount(expansion);
  const readTime = calculateReadTime(wordCount);

  return {
    ...frontmatter,
    slug,
    axiom,
    expansion,
    wordCount,
    readTime,
    published: frontmatter.published ?? true,
    featured: frontmatter.featured ?? false,
  };
}

/**
 * Get all published insights
 * @param includeExpansion - Whether to include full expansion text (default: false)
 */
export async function getAllInsights(
  includeExpansion = false
): Promise<Insight[]> {
  const files = getMarkdownFiles(INSIGHTS_DIR);

  const insights = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '');
    const filePath = path.join(INSIGHTS_DIR, filename);
    const insight = parseInsightFile(filePath, slug);

    // Optionally strip expansion to reduce payload
    if (!includeExpansion) {
      return { ...insight, expansion: '' };
    }

    return insight;
  });

  // Filter published only
  const published = insights.filter((i) => i.published);

  // Sort by number (newest first)
  return published.sort((a, b) => b.number - a.number);
}

/**
 * Get single insight by slug
 */
export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  const filePath = path.join(INSIGHTS_DIR, `${slug}.md`);
  const mdxFilePath = path.join(INSIGHTS_DIR, `${slug}.mdx`);

  let targetPath: string | null = null;

  if (fs.existsSync(filePath)) {
    targetPath = filePath;
  } else if (fs.existsSync(mdxFilePath)) {
    targetPath = mdxFilePath;
  }

  if (!targetPath) {
    return null;
  }

  return parseInsightFile(targetPath, slug);
}

/**
 * Get filtered insights
 */
export async function getFilteredInsights(
  filters: InsightFilters,
  includeExpansion = false
): Promise<Insight[]> {
  const allInsights = await getAllInsights(includeExpansion);

  return allInsights.filter((insight) => {
    if (filters.category && !insight.categories.includes(filters.category)) {
      return false;
    }

    if (filters.categories && filters.categories.length > 0) {
      const hasAnyCategory = filters.categories.some((cat) =>
        insight.categories.includes(cat)
      );
      if (!hasAnyCategory) {
        return false;
      }
    }

    if (filters.featured !== undefined && insight.featured !== filters.featured) {
      return false;
    }

    return true;
  });
}

/**
 * Get featured insights
 */
export async function getFeaturedInsights(): Promise<Insight[]> {
  return getFilteredInsights({ featured: true }, false);
}

/**
 * Get all unique categories used in insights
 */
export async function getUsedInsightCategories(): Promise<string[]> {
  const insights = await getAllInsights(false);
  const categories = new Set(insights.flatMap((i) => i.categories));
  return Array.from(categories);
}