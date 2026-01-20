// src/components/writing/WritingFooter.tsx

'use client';

import { useState } from 'react';
import { Share2 } from 'lucide-react';
import { Writing } from '@/types/content';
import { ShareModal } from './ShareModal';

interface WritingFooterProps {
  writing: Writing;
}

export function WritingFooter({ writing }: WritingFooterProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const updatedDate = writing.updatedAt
    ? new Date(writing.updatedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      })
    : null;

  // Generate full URL for sharing
  const fullUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : `https://www.oreliosattari.com/writing/${writing.slug}`;

  return (
    <>
      <footer className="mt-12 pt-4 md:pt-6 border-t border-gray-200">
        {/* Author info with Share button */}
        <div className="flex items-center justify-between gap-2 mb-4 whitespace-nowrap">
        <p className="text-sm md:text-md text-gray-600 truncate">
            Author: <span className="font-medium text-gray-900">P. Orelio Sattari</span>
        </p>
        
        <button
            onClick={() => setIsShareModalOpen(true)}
            className="flex items-center gap-1.5 py-2 pr-2 text-gray-700 hover:text-gray-900 transition-colors shrink-0"
            aria-label="Share this essay"
        >
            <span className="text-[0.9375rem] md:text-md font-medium">Share</span>
            <Share2 size={18} />
        </button>
        </div>

        {/* Last updated */}
        {updatedDate && (
          <p className="text-sm text-gray-500">
            Last updated: {updatedDate}
          </p>
        )}

        {/* Purchase link for minibooks */}
        {writing.isPurchasable && writing.purchaseLink && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <a
              href={writing.purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Purchase Full Version
            </a>
          </div>
        )}
      </footer>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        url={fullUrl}
        title={writing.title}
      />
    </>
  );
}