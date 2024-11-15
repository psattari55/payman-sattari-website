// src/components/article/ArticleHeader.tsx
'use client'

import { motion } from 'framer-motion';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface ArticleHeaderProps {
    title: string;
    subtitle?: string;
    date: string;
    readTime: string;
    category: string;
    door?: string;
}

export default function ArticleHeader({ 
    title, 
    subtitle,
    date, 
    readTime, 
    door,
    category 
}: ArticleHeaderProps) {
  return (
    <header className="mb-8 border-b border-gray-200 pb-7">
      <div className="text-sm text-gray-500 mb-6">
      <span className="text-blue-600">{door || category}</span>
        <span className="mx-2">·</span>
        <time>{date}</time>
        <span className="mx-2">·</span>
        <span>{readTime}</span>
      </div>
      <motion.h1 
        className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}{subtitle && ': '}{subtitle}
      </motion.h1>
    </header>
  );
}