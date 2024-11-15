// src/components/article/ArticleNavigation.tsx
'use client'

import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import InteractiveLink from '@/components/ui/InteractiveLink';

interface ArticleNavigationProps {
  previous?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
}

export default function ArticleNavigation({ previous, next }: ArticleNavigationProps) {
  return (
    <div className="rounded-lg border border-gray-200">
      <div className="px-6 py-4 bg-stone-100 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [-5, 0, 5, 0, -5],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Eye 
              className="w-5 h-5 text-blue-600" 
              strokeWidth={1.5}
            />
          </motion.div>
          <motion.h3 
            className="text-lg font-medium text-gray-800"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Observer's Road
          </motion.h3>
        </div>
      </div>
      <div className="bg-white p-6 space-y-6">
        {previous && (
          <div className="text-sm">
            <p className="text-gray-500 mb-2">Previous</p>
            <InteractiveLink href={previous.href} className="text-gray-900 hover:text-blue-600">
              {previous.title}
            </InteractiveLink>
          </div>
        )}
        {next && (
          <div className="text-sm">
            <p className="text-gray-500 mb-2">Next</p>
            <InteractiveLink href={next.href} className="text-gray-900 hover:text-blue-600">
              {next.title}
            </InteractiveLink>
          </div>
        )}
      </div>
    </div>
  );
}