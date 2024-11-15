// src/components/article/ExploreArticles.tsx
'use client'

import { motion } from 'framer-motion';
import InteractiveLink from '@/components/ui/InteractiveLink';

interface ExploreArticle {
  title: string;
  href: string;
}

interface ExploreArticlesProps {
  articles: ExploreArticle[];
}

export default function ExploreArticles({ articles }: ExploreArticlesProps) {
  return (
    <div className="bg-gray-50 bg-opacity-10 rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-normal text-gray-900 mb-4">Explore Articles</h3>
      <div className="divide-y divide-gray-200">
        {articles.map((article) => (
          <div key={article.href} className="py-3">
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <InteractiveLink href={article.href} className="block text-sm">
                {article.title}
              </InteractiveLink>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}