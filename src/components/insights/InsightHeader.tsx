// src/components/insights/InsightHeader.tsx

import Image from 'next/image';
import { Insight } from '@/types/content';
import { getInsightCategoriesByIds } from '@/data/insightCategories';
import { formatInsightNumber } from '@/lib/utils';

interface InsightHeaderProps {
  insight: Insight;
}

export default function InsightHeader({ insight }: InsightHeaderProps) {
  const categories = getInsightCategoriesByIds(insight.categories);

  return (
    <header className="mb-12">
      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-x-3 mb-8 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
        <span className="text-xl md:text-base text-gray-900 tracking-[0.15em]">
          Insight #{formatInsightNumber(insight.number)}
        </span>
        {categories.length > 0 && (
          <>
            <span>·</span>
            <span>{categories.map(c => c.label).join(', ')}</span>
          </>
        )}
        <span>·</span>
        <time dateTime={insight.publishedAt}>
          {new Date(insight.publishedAt).toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric',
            year: 'numeric',
            timeZone: 'UTC'
          })}
        </time>
      </div>

      {/* Featured Image */}
      {insight.featuredImage && (
        <div className="relative aspect-[16/9] mb-12 overflow-hidden rounded-none bg-gray-100">
          <Image
            src={insight.featuredImage}
            alt={`Insight #${insight.number}`}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      )}
    </header>
  );
}