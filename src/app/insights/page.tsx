// src/app/insights/page.tsx

import { Metadata } from 'next';
import { getAllInsights } from '@/lib/content';
import { generateInsightsIndexMetadata } from '@/lib/seo';
import InsightCard from '@/components/insights/InsightCard';

export const metadata: Metadata = generateInsightsIndexMetadata();

export default async function InsightsPage() {
  const insights = await getAllInsights(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-24">
        
        <header className="mb-8 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">
            Andarz
          </span>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Insights
          </h1>
          <p className="mt-6 text-lg text-gray-500 font-serif italic max-w-lg mx-auto">
            Contemplative aphorisms grounded in lived insight.
          </p>
        </header>

        {insights.length === 0 ? (
          <p className="text-center text-gray-400 font-medium uppercase tracking-widest text-xs">
            Archive currently empty.
          </p>
        ) : (
          <div className="border-t border-gray-50">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}