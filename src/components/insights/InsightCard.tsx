// src/components/insights/InsightCard.tsx

import Link from 'next/link';
import Image from 'next/image';
import { Insight } from '@/types/content';
import { getInsightCategoriesByIds } from '@/data/insightCategories';
import { formatInsightNumber } from '@/lib/utils';

interface InsightCardProps {
  insight: Insight;
}

function renderMarkdownItalics(text: string) {
  // This allows your internal markdown *emphasis* to shine through
  return text.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
}

export default function InsightCard({ insight }: InsightCardProps) {
  const categories = getInsightCategoriesByIds(insight.categories);
  const axiomHtml = renderMarkdownItalics(insight.axiom);

  return (
    <article className="group py-8 md:py-10 border-b border-gray-50 last:border-0">
      <Link href={`/insights/${insight.slug}`} className="flex flex-col md:flex-row gap-8 md:items-start">
        
        {/* Optimized Next.js Image */}
        {insight.featuredImage && (
          <div className="relative shrink-0 w-full md:w-32 aspect-video md:aspect-square overflow-hidden bg-gray-100 rounded-sm">
            <Image 
              src={insight.featuredImage} 
              alt=""
              fill
              className="object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              sizes="(max-width: 768px) 100vw, 128px"
            />
          </div>
        )}

        <div className="flex-1">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-x-3 mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
            <span className="text-gray-900 tracking-[0.2em]">
              Insight #{formatInsightNumber(insight.number)}
            </span>
            <span>·</span>
            {categories.length > 0 && (
              <>
                <span className="text-gray-500">{categories[0].label}</span>
                <span>·</span>
              </>
            )}
            <time dateTime={insight.publishedAt}>
              {new Date(insight.publishedAt).getFullYear()}
            </time>
          </div>

          {/* The Axiom: Restored to Garamond with proper breathing room */}
          <p 
            className="text-xl md:text-2xl text-gray-900 font-insight leading-relaxed group-hover:text-gray-600 transition-colors duration-300 mb-6"
            dangerouslySetInnerHTML={{ __html: axiomHtml }}
          />

          {/* Minimal CTA */}
          <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-gray-900 transition-colors">
            <span>View Insight</span>
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>
    </article>
  );
}