// src/components/writing/WritingHeader.tsx

import Image from 'next/image';
import { Writing } from '@/types/content';
import { getCategoryById } from '@/data/categories';
import { getTagsByIds } from '@/data/tags';
import { ActionBar } from './ActionBar';

interface WritingHeaderProps {
  writing: Writing;
}

export function WritingHeader({ writing }: WritingHeaderProps) {
  const category = getCategoryById(writing.category);
  const tags = getTagsByIds(writing.tags);

  // Format dates
  const publishedDate = new Date(writing.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  const updatedDate = writing.updatedAt
    ? new Date(writing.updatedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  // Generate full URL for sharing
  const fullUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : `https://www.oreliosattari.com/writing/${writing.slug}`;

  return (
    <header className="mb-12">
      {/* Category */}
      {category && (
        <div className="mb-4">
          <span className="inline-block text-sm font-medium uppercase tracking-wider text-gray-400">
            {category.label}
          </span>
        </div>
      )}

      {/* Title */}
      <h1 className="mb-4 text-3xl md:text-5xl font-bold leading-tight text-gray-800">
        {writing.title}
      </h1>

      {/* Subtitle */}
      {writing.subtitle && (
        <p className="mb-6 text-xl md:text-2xl text-gray-500 leading-relaxed">
          {writing.subtitle}
        </p>
      )}

      {/* Metadata */}
      <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-gray-500">
        <time dateTime={writing.publishedAt}>Published {publishedDate}</time>
        {updatedDate && (
          <>
            <span>·</span>
            <time dateTime={writing.updatedAt}>Updated {updatedDate}</time>
          </>
        )}
        <span>·</span>
        <span>{writing.readTime} min read</span>
        <span>·</span>
        <span>{writing.wordCount.toLocaleString()} words</span>
      </div>

      {/* Featured Image */}
      {writing.featuredImage && (
        <div className="relative aspect-[16/9] mb-7 overflow-hidden rounded-none bg-gray-100">
          <Image
            src={writing.featuredImage}
            alt={writing.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-6 pb-6 border-t border-b border-gray-200">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="inline-block rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}

      {/* Action Bar */}
      <ActionBar 
        title={writing.title} 
        url={fullUrl}
        hasAudio={false}
      />

    </header>
  );
}