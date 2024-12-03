// src/components/article/ArticleEndSection.tsx
'use client'

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

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
      return "Continue to Next Article";
    case "Practitioner's Door":
      return "Continue to Next Article";
    default:
      return "Continue to Next Article";
  }
};

export default function ArticleEndSection({ door, navigation, className = '' }: ArticleEndSectionProps) {
  return (
    <div className={`space-y-6 mt-12 mb-6 md:mb-8 ${className}`}>
      
      {/* Subtle divider dots */}
      <div className="flex justify-center gap-4 mb-14">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-gray-200"
          />
        ))}
      </div>

      {/* Continue Journey Button */}
      {navigation.next && door && (
        <div className="flex justify-end">
          <Link href={navigation.next.href} className="no-underline">
            <div className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-50 text-gray-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-0.5">
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative font-semibold text-base">
                {getDoorText(door)}
              </span>
              
              <ChevronRight className="relative h-5 w-5" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}