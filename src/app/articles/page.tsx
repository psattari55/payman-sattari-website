import React from 'react';
import Link from 'next/link';
import { Newspaper, Lightbulb, MessageSquare, Film } from 'lucide-react';
import { articles, getArticlesByCategory } from '@/data/articles';
import { insights } from '@/data/insights'; // Import your insights
import { conversations } from '@/data/conversations'; // Import your conversations
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export default function ArticlesInsightsHub() {
  const scientificArticles = getArticlesByCategory('scientific').slice(0, 3);
  const metaphysicalArticles = getArticlesByCategory('metaphysical').slice(0, 3);
  const developmentArticles = getArticlesByCategory('development').slice(0, 3);
  const thoughtsArticles = getArticlesByCategory('thoughts').slice(0, 3);
  
  // Get latest insights and conversations
  const latestInsights = insights.slice(0, 4);
  const latestConversation = conversations[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Section width="default" className="pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Articles & Insights</h1>
            <p className="text-xl text-gray-600">Explore different perspectives on consciousness, reality, and human potential</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-8">
            {/* Articles Section */}
            <div className="col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Newspaper className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold">Articles</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Scientific Insights",
                    description: "Research-based articles exploring physics and consciousness",
                    articles: scientificArticles,
                    path: "/articles/scientific"
                  },
                  {
                    title: "Metaphysical Concepts",
                    description: "Deep dives into the nature of reality and experience",
                    articles: metaphysicalArticles,
                    path: "/articles/metaphysical"
                  },
                  {
                    title: "Personal Development",
                    description: "Practical applications of energy principles",
                    articles: developmentArticles,
                    path: "/articles/development"
                  },
                  {
                    title: "Latest Thoughts",
                    description: "Recent explorations and insights",
                    articles: thoughtsArticles,
                    path: "/articles/thoughts"
                  }
                ].map((category) => (
                  <div key={category.title} className="space-y-4">
                    <Link href={category.path}>
                      <div className="group p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <h3 className="text-lg font-medium mb-2 group-hover:text-blue-600 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{category.description}</p>
                      </div>
                    </Link>
                    <div className="space-y-2">
                      {category.articles.map((article) => (
                        <Link key={article.slug} href={article.slug}>
                          <div className="p-3 rounded-lg bg-white hover:bg-gray-50 transition-colors border border-gray-100">
                            <p className="text-sm text-gray-600">{article.title}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Insights */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold">Daily Insights</h2>
              </div>
              <p className="text-gray-600 mb-6">Bite-sized wisdom and reflections for daily contemplation</p>
              <Link href="/insights/daily">
                <div className="grid grid-cols-2 gap-4">
                  {latestInsights.map((insight, i) => (
                    <div key={insight.id} className="aspect-square bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                      <p className="text-sm text-gray-600 line-clamp-4">{insight.mainQuote}</p>
                    </div>
                  ))}
                </div>
              </Link>
            </div>

            {/* AI Conversations */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold">AI Conversations</h2>
              </div>
              <Link href="/insights/ai-conversations">
                <Card hoverable>
                  <h3 className="text-lg font-medium mb-2">{latestConversation.title}</h3>
                  <p className="text-gray-600 mb-4">{latestConversation.summary}</p>
                  <div className="flex gap-2">
                    {latestConversation.themes.map((theme) => (
                      <span key={theme} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                        {theme}
                      </span>
                    ))}
                  </div>
                </Card>
              </Link>
            </div>

            {/* Multimedia Preview */}
            <div className="bg-gray-900 text-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Film className="w-6 h-6" />
                <h2 className="text-2xl font-semibold">Multimedia Content</h2>
              </div>
              <p className="text-gray-300 mb-6">Coming soon: Audio and video explorations of consciousness and reality</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-video bg-gray-800 rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}