// src/components/article/ArticleEndSection.tsx
'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ArticleEndSectionProps {
  door?: string;  // Optional - only present for door sequence articles
  navigation: {
    next?: {
      href: string;
      title: string;
    };
  };
  className?: string;
}

const getDoorText = (door: string) => {
  switch (door) {
    case "Scholar's Door":
      return "Continue to Next Article";
    case "Observer's Door":
      return "Continue Your Journey";
    case "Practitioner's Door":
      return "Continue Your Practice";
    default:
      return "Continue Your Journey";
  }
};

export default function ArticleEndSection({ door, navigation, className = '' }: ArticleEndSectionProps) {
  return (
    <div className={`space-y-6 mt-12 mb-8 ${className}`}>
      {/* Subtle divider dots */}
      <div className="flex justify-center gap-4 mb-16">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          />
        ))}
      </div>

      {/* Continue Journey Button - only show if there's a next article and we're in a door sequence */}
      {navigation.next && door && (
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href={navigation.next.href} passHref>
            <motion.div
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-50 text-gray-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
              whileHover={{ y: -2 }}
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-100 to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              
              <span className="relative font-semibold text-base">
                {getDoorText(door)}
              </span>
              
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="relative h-5 w-5"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path 
                  fill="none" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </motion.svg>
            </motion.div>
          </Link>
        </motion.div>
      )}
    </div>
  );
}