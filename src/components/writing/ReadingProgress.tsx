// src/components/writing/ReadingProgress.tsx

'use client';

import { useEffect, useState } from 'react';

/**
 * Reading Progress Bar
 * 
 * Displays a thin progress bar at the top of the viewport that grows
 * as the user scrolls through the article content.
 * 
 * Features:
 * - Reflects current scroll position immediately (even on mid-page load)
 * - Fixed to top of viewport
 * - Minimal, unintrusive design
 * - Only appears when there's content to scroll
 */

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      // Get total scrollable height
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;

      // Prevent division by zero on very short pages
      if (scrollableHeight <= 0) {
        setProgress(0);
        return;
      }

      // Calculate current scroll position as percentage
      const scrolled = window.scrollY;
      const progressPercentage = (scrolled / scrollableHeight) * 100;

      setProgress(Math.min(progressPercentage, 100));
    };

    // Calculate on mount (handles mid-page loads, anchor links, etc.)
    calculateProgress();

    // Update on scroll
    window.addEventListener('scroll', calculateProgress, { passive: true });

    // Update on resize (content height might change)
    window.addEventListener('resize', calculateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', calculateProgress);
      window.removeEventListener('resize', calculateProgress);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-neutral-200"
      aria-hidden="true"
    >
      <div
        className="h-full bg-neutral-700 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}