// src/components/writing/WritingCard.tsx

import Link from 'next/link';
import Image from 'next/image';
import { Writing } from '@/types/content';
import { getCategoryById } from '@/data/categories';
import { getTagsByIds } from '@/data/tags';

interface WritingCardProps {
  writing: Writing;
}

export function WritingCard({ writing }: WritingCardProps) {
  const category = getCategoryById(writing.category);
  const tags = getTagsByIds(writing.tags);
  
  // Format date
  const publishedDate = new Date(writing.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <article className="group">
      <Link href={`/writing/${writing.slug}`} className="block">
        {/* Featured Image */}
        {writing.featuredImage && (
          <div className="relative aspect-[16/9] mb-6 overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={writing.featuredImage}
              alt={writing.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Category Badge */}
        {category && (
          <div className="mb-3">
            <span className="inline-block text-xs font-medium uppercase tracking-wider text-gray-600">
              {category.label}
            </span>
          </div>
        )}

        {/* Title */}
        <h2 className="mb-3 text-2xl font-semibold leading-tight text-gray-900 transition-colors group-hover:text-gray-600">
          {writing.title}
        </h2>

        {/* Subtitle */}
        {writing.subtitle && (
          <p className="mb-3 text-lg text-gray-600">
            {writing.subtitle}
          </p>
        )}

        {/* Excerpt */}
        <p className="mb-4 text-gray-700 leading-relaxed">
          {writing.excerpt}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <time dateTime={writing.publishedAt}>{publishedDate}</time>
          <span>·</span>
          <span>{writing.readTime} min read</span>
          {writing.type === 'minibook' && (
            <>
              <span>·</span>
              <span className="font-medium">Minibook</span>
            </>
          )}
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag.id}
                className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
              >
                {tag.label}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                +{tags.length - 4} more
              </span>
            )}
          </div>
        )}
      </Link>
    </article>
  );
}