// src/app/writing/page.tsx

import { Metadata } from 'next';
import { getAllWritings } from '@/lib/content';
import { generateWritingIndexMetadata } from '@/lib/seo';
import { getCategoryById } from '@/data/categories';
import Link from 'next/link';

export const metadata: Metadata = generateWritingIndexMetadata();

export default async function WritingPage() {
  const writings = await getAllWritings();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-24">
        
        {/* Simplified Editorial Header */}
        <header className="mb-8 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">
            Index
          </span>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Writing
          </h1>
          <p className="mt-6 text-lg text-gray-500 font-serif italic">
            Essays and explorations on first principles.
          </p>
        </header>

        {/* The Archive List */}
        {writings.length === 0 ? (
          <p className="text-center text-gray-400 font-medium uppercase tracking-widest text-xs">
            Archive currently empty.
          </p>
        ) : (

        
        <div>
        {writings.map((writing) => (
        <article key={writing.slug} className="group py-8 md:py-10 border-b border-gray-50 last:border-0">
        <Link href={`/writing/${writing.slug}`} className="flex flex-col md:flex-row gap-8 md:items-center">
            
            {/* Thumbnail on left */}
            {writing.featuredImage && (
                <div className="shrink-0 w-full md:w-44 aspect-video md:aspect-square overflow-hidden bg-gray-200 rounded-sm">
                    <img 
                    src={writing.featuredImage} 
                    alt=""
                    className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                </div>
                )}

            <div className="flex-1">
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-x-3 mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                {writing.category && (
                <>
                    {/* The category is highlighted slightly to denote its importance */}
                    <span className="text-gray-900 tracking-[0.2em]">
                        {getCategoryById(writing.category)?.label || writing.category}
                    </span>
                    
                    <span>·</span>
                </>
                )}
                <time dateTime={writing.publishedAt || writing.updatedAt}>
                {new Date(writing.publishedAt || writing.updatedAt || '').toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric',
                    timeZone: 'UTC'
                })}
                </time>
                <span>·</span>
                <span>{writing.readTime} MIN READ</span>
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-gray-500 transition-colors duration-300 mb-3">
                {writing.title}
            </h2>
            
            {/* Excerpt */}
            <p className="text-sm leading-relaxed text-gray-500 max-w-xl line-clamp-3 mb-4">
                {writing.excerpt}
            </p>

            {/* Minimal CTA */}
            <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-gray-900 transition-colors">
                <span>Full Analysis</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
            </div>
        </Link>
        </article>
        ))}
        </div>
        )}
      </div>
    </div>
  );
}