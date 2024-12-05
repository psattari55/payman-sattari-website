// src/lib/articleHelpers.ts

import { scholarsDoorSequence, observersDoorSequence, practitionersDoorSequence } from '@/data/sequences';

export function getArticleNavigation(currentPath: string) {
  const allSequences = {
    scholar: scholarsDoorSequence,
    observer: observersDoorSequence,
    practitioner: practitionersDoorSequence
  };

  for (const sequence of Object.values(allSequences)) {
    const currentIndex = sequence.findIndex(article => article.slug === currentPath);
    
    if (currentIndex !== -1) {
      return {
        previous: currentIndex > 0 
          ? { 
              title: sequence[currentIndex - 1].title,
              href: sequence[currentIndex - 1].slug
            } 
          : undefined,
        next: currentIndex < sequence.length - 1 
          ? {
              title: sequence[currentIndex + 1].title,
              href: sequence[currentIndex + 1].slug
            }
          : undefined
      };
    }
  }
  
  return { previous: undefined, next: undefined };
}