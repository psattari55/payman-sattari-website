// src/app/insights/[slug]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllInsights, getInsightBySlug } from '@/lib/content';
import { generateInsightMetadata, generateInsightJsonLd } from '@/lib/seo';
import InsightHeader from '@/components/insights/InsightHeader';
import InsightAxiom from '@/components/insights/InsightAxiom';
import InsightContent from '@/components/insights/InsightContent';
import InsightFooter from '@/components/insights/InsightFooter';

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths
export async function generateStaticParams() {
  const insights = await getAllInsights(false);
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  
  if (!insight) {
    return {
      title: 'Insight Not Found',
    };
  }

  return generateInsightMetadata(insight);
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);

  if (!insight) notFound();

  const jsonLd = generateInsightJsonLd(insight);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-12 md:py-16 max-w-3xl">
          <InsightHeader insight={insight} />
          
          <div className="max-w-2xl mx-auto">
            <InsightAxiom axiom={insight.axiom} />
            <InsightContent expansion={insight.expansion} />
            <InsightFooter insight={insight} />
          </div>
        </div>
      </article>
    </>
  );
}