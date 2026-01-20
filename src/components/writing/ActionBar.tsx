// src/components/writing/ActionBar.tsx

'use client';

import { useState } from 'react';
import { Share2, Play } from 'lucide-react';
import { ShareModal } from './ShareModal';

interface ActionBarProps {
  title: string;
  url: string;
  hasAudio?: boolean;
}

export function ActionBar({ title, url, hasAudio = false }: ActionBarProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between py-6 border-b border-gray-200">
        
        {/* Left Side: Audio Utility */}
        <div className="flex items-center gap-4 flex-1">
          {hasAudio ? (
            /* Active State */
            <button className="flex items-center gap-3 text-gray-700 hover:text-black transition-all group">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white transition-transform group-hover:scale-105">
                <Play size={14} fill="currentColor" />
              </div>
              <div className="hidden sm:block h-1 w-32 md:w-48 rounded-full bg-gray-100 relative">
                <div className="absolute h-full w-1/4 rounded-full bg-gray-900" />
              </div>
              <span className="text-sm font-medium">Listen</span>
            </button>
          ) : (
            /* Premium Ghost State */
            <div className="flex items-center gap-3 select-none">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 text-gray-300">
                <Play size={14} />
              </div>
              <div className="hidden sm:block h-1 w-32 md:w-48 rounded-full bg-gray-50" />
              <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">
                <span className="text-[10px] uppercase opacity-60">Audio Currently Unavailable</span>
              </span>
            </div>
          )}
        </div>

        {/* Right Side: Share button */}
        <button
          onClick={() => setIsShareModalOpen(true)}
          className="flex items-center gap-2 px-4 text-gray-500 hover:text-gray-900 transition-colors group"
          aria-label="Share this essay"
        >
          <span className="text-sm font-medium">Share</span>
          <Share2 size={18} className="transition-transform group-hover:scale-110" />
        </button>
      </div>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        url={url}
        title={title}
      />
    </>
  );
}