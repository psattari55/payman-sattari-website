// src/components/article/ArticleContent.tsx
'use client'

import { motion } from 'framer-motion';

interface ArticleContentProps {
  children: React.ReactNode;
}

export default function ArticleContent({ children }: ArticleContentProps) {
  return (
    <motion.div 
      className="lg:w-2/3 border-l border-r border-gray-100 px-4 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <article className="prose prose-lg max-w-none">
        {children}
      </article>
    </motion.div>
  );
}