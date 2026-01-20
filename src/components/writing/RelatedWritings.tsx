// src/components/writing/RelatedWritings.tsx

import Link from 'next/link';
import { Writing } from '@/types/content';
import { getRelatedWritings } from '@/lib/content';

interface RelatedWritingsProps {
  currentWriting: Writing;
}

export async function RelatedWritings({ currentWriting }: RelatedWritingsProps) {
  const relatedWritings = await getRelatedWritings(currentWriting, 3);

  if (relatedWritings.length === 0) return null;

  return (
    <aside className="mt-16 pb-16">
      {/* Editorial Label - Unified with Footer style */}
      <h2 className="mb-12 text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400 text-center">
        Related Writing
      </h2>
      
      {/* Single Column List - More formal than a grid */}
      <div className="max-w-2xl mx-auto space-y-12">
        {relatedWritings.map((writing) => (
          <article key={writing.slug} className="group relative">
            <Link href={`/writing/${writing.slug}`} className="block">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                {/* Title: Serif or Bold Sans depending on your preference */}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-500 transition-colors duration-300">
                  {writing.title}
                </h3>
                
                {/* Metadata as a subtle anchor */}
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-gray-300">
                  {writing.readTime} MIN READ
                </span>
              </div>
              
              {/* Excerpt: Shorter and more secondary */}
              <p className="mt-3 text-sm leading-relaxed text-gray-500 max-w-xl line-clamp-2">
                {writing.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </aside>
  );
}