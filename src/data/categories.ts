// src/data/categories.ts

import { Category } from '@/types/content';

/**
 * Master Categories
 * 
 * Broad content buckets that align with the site's main themes.
 * Each piece of writing must belong to exactly one category.
 * 
 */

export const CATEGORIES: Category[] = [
  {
    id: 'natural-science',
    label: 'Natural Science & Philosophy',
    description: 'Ontology, physics, metaphysics, the nature of reality, and first principles.',
  },
  {
    id: 'technology',
    label: 'AI & Technology',
    description: 'Applied logic, artificial intelligence, and the engineering of information and tools.',
  },
  {
    id: 'health',
    label: 'Health & Medicine',
    description: 'Human biology, medicine, food, evolution, and the mechanics of living systems.',
  },
  {
    id: 'history',
    label: 'History',
    description: 'Historical patterns, historiography, and the deep lineage of human civilization.',
  },
  {
    id: 'governance',
    label: 'Politics & Governance',
    description: 'Institutional design, power dynamics, and the systems we use to organize the collective.',
  },
  {
    id: 'society',
    label: 'Society & Culture',
    description: 'Education, social norms, and the emergent patterns of how we live together.',
  },
  {
    id: 'inner-development',
    label: 'Practice & Inner Development',
    description: 'The discipline of the self, inner work, "spirituality," and the observer\'s experience',
  },
];

/**
 * Category lookup helper
 */
export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}

/**
 * Validate that a category exists
 */
export function isValidCategory(id: string): boolean {
  return CATEGORIES.some((cat) => cat.id === id);
}