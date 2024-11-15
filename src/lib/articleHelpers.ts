// src/lib/articleHelpers.ts

import { scholarsDoorSequence, observersDoorSequence, practitionersDoorSequence } from '@/data/sequences';

interface NavigationItem {
  title: string;
  href: string;  // Note: we'll convert 'path' to 'href' for compatibility
}

export function getArticleNavigation(currentPath: string): {
  previous: NavigationItem | undefined;
  next: NavigationItem | undefined;
} {
  const allSequences = {
    scholar: scholarsDoorSequence,
    observer: observersDoorSequence,
    practitioner: practitionersDoorSequence
  };

  for (const sequence of Object.values(allSequences)) {
    const currentIndex = sequence.findIndex(article => article.path === currentPath);
    
    if (currentIndex !== -1) {
      return {
        previous: currentIndex > 0 
          ? { 
              title: sequence[currentIndex - 1].title,
              href: sequence[currentIndex - 1].path  // Convert path to href
            } 
          : undefined,
        next: currentIndex < sequence.length - 1 
          ? {
              title: sequence[currentIndex + 1].title,
              href: sequence[currentIndex + 1].path  // Convert path to href
            }
          : undefined
      };
    }
  }
  
  return { previous: undefined, next: undefined };
}