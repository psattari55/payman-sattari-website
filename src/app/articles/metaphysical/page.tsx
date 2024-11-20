// src/app/articles/metaphysical/page.tsx

'use client'

import { articles, getArticlesByCategory } from '@/data/articles'
import PageTransition from '@/components/ui/PageTransition'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Link from 'next/link'

const categoryTitles = {
  scientific: "Scientific Insights",
  metaphysical: "Metaphysical Concepts",
  development: "Personal Development",
  thoughts: "Latest Thoughts"
} as const;

export default function MetaphysicalPage() {
    const categoryArticles = getArticlesByCategory('metaphysical');
    const title = "Metaphysical Concepts";

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24 pb-16">
          <h1 className="text-4xl font-bold mb-8">{title}</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <Link key={article.slug} href={article.slug}>
                <Card hoverable className="h-full">
                  {article.door && (
                    <div className="text-sm text-blue-600 mb-2">
                      {article.door.charAt(0).toUpperCase() + article.door.slice(1)}'s Door
                    </div>
                  )}
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  {article.subtitle && (
                    <p className="text-gray-600 mb-2">{article.subtitle}</p>
                  )}
                  <p className="text-gray-600">{article.description}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    {article.readTime}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}