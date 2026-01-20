// src/lib/mdx.tsx

import React from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';

// ============================================================================
// Custom MDX Components
// ============================================================================

/**
 * Custom Image component that uses Next.js Image optimization
 */
function MDXImage({ src, alt, ...props }: any) {
  // Handle relative paths (images in /public)
  const imageSrc = src.startsWith('/') ? src : `/${src}`;

  return (
    <span className="block my-8">
      <Image
        src={imageSrc}
        alt={alt || ''}
        width={1200}
        height={675}
        className="rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        {...props}
      />
    </span>
  );
}

/**
 * Custom Pull Quote component for visually distinct quotations
 */
interface PullQuoteProps {
  text: string;
  author?: string;
}

function PullQuote({ text, author }: PullQuoteProps) {
  return (
    <aside className="my-12 pl-8 border-l-[3px] border-gray-900">
      <blockquote className="text-2xl font-serif italic text-gray-800 leading-relaxed">
        {text}
      </blockquote>
      {author && (
        <cite className="block mt-4 text-sm font-sans not-italic text-gray-600">
          — {author}
        </cite>
      )}
    </aside>
  );
}

/**
 * Custom blockquote styling (for standard markdown quotes)
 */
function Blockquote({ children, ...props }: any) {
  return (
    <blockquote
      className="my-6 pl-6 border-l-2 border-neutral-300 dark:border-neutral-700 italic text-neutral-700 dark:text-neutral-300"
      {...props}
    >
      {children}
    </blockquote>
  );
}

/**
 * Custom paragraph component with drop cap support
 */
function Paragraph({ children, ...props }: ComponentPropsWithoutRef<'p'>) {
  return (
    <p className="prose-paragraph" {...props}>
      {children}
    </p>
  );
}

// ============================================================================
// MDX Component Mapping
// ============================================================================

/**
 * Map standard markdown elements to custom React components
 */
const components: MDXComponents = {
  // Replace img with optimized Next.js Image
  img: MDXImage,
  
  // Custom pull quote component
  PullQuote,
  
  // Style standard blockquotes
  blockquote: Blockquote,
  
  // Paragraph with drop cap support
  p: Paragraph,
};

// ============================================================================
// MDX Compilation
// ============================================================================

export interface CompiledMDX {
  content: React.ReactElement;
  frontmatter: Record<string, any>;
}

/**
 * Compile MDX content with custom components and plugins
 * 
 * @param source - Raw MDX/markdown string
 * @returns Compiled React component and frontmatter
 */
export async function compileMDXContent(source: string): Promise<CompiledMDX> {
  const { content, frontmatter } = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [
          // GitHub Flavored Markdown (tables, strikethrough, etc.)
          remarkGfm,
        ],
        rehypePlugins: [
          // Add IDs to headings
          rehypeSlug,
          
          // Add anchor links to headings
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                className: ['anchor-link'],
              },
            },
          ],
        ],
      },
    },
  });

  return {
    content,
    frontmatter: frontmatter as Record<string, any>,
  };
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Extract reading time estimate from content
 * (Alternative to calculating in lib/content.ts if needed)
 */
export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Strip markdown syntax for plain text preview
 */
export function stripMarkdown(content: string): string {
  return content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]+`/g, '') // Remove inline code
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Convert links to text
    .replace(/[#*_~`]/g, '') // Remove markdown symbols
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}

/**
 * Generate table of contents from markdown headers
 */
export interface TOCItem {
  level: number;
  text: string;
  slug: string;
}

export function generateTableOfContents(content: string): TOCItem[] {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const toc: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const slug = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    toc.push({ level, text, slug });
  }

  return toc;
}