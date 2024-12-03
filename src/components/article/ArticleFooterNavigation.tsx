// src/components/article/ArticleFooterNavigation.tsx
'use client'

import { motion } from 'framer-motion';
import InteractiveLink from '@/components/ui/InteractiveLink';

interface ArticleFooterNavigationProps {
  previousArticle?: {
    title: string;
    href: string;
  };
  nextArticle?: {
    title: string;
    href: string;
  };
  isLastInSequence?: boolean;
  doorHref?: string;  // For returning to the doors page
}

export default function ArticleFooterNavigation({ 
  previousArticle,
  nextArticle,
  isLastInSequence,
  doorHref
}: ArticleFooterNavigationProps) {
  return (
    <div className="hidden md:block mt-4 pt-4 border-t border-gray-100">
      <div className="grid md:grid-cols-2 gap-8">
        {previousArticle && (
          <motion.div
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm text-gray-500 mb-2">Previous Article</p>
            <InteractiveLink 
              href={previousArticle.href}
              className="text-base font-normal text-gray-900 hover:text-blue-600"
            >
              {previousArticle.title}
            </InteractiveLink>
          </motion.div>
        )}
        
        {isLastInSequence ? (
          <motion.div
            className="text-right"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm text-gray-500 mb-2">Return to Doors</p>
            <InteractiveLink 
              href={doorHref ?? '/'}
              className="text-base font-normal text-gray-900 hover:text-blue-600"
            >
              Begin a New Journey
            </InteractiveLink>
          </motion.div>
        ) : nextArticle && (
          <motion.div
            className="text-right"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm text-gray-500 mb-2">Next Article</p>
            <InteractiveLink 
              href={nextArticle.href}
              className="text-base font-normal text-gray-900 hover:text-blue-600"
            >
              {nextArticle.title}
            </InteractiveLink>
          </motion.div>
        )}
      </div>
    </div>
  );
}