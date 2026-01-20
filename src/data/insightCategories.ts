// src/data/insightCategories.ts

export interface InsightCategory {
  id: string;
  label: string;
  description: string;
}

export const insightCategories: InsightCategory[] = [
  {
    id: 'first-principles',
    label: 'First Principles',
    description: 'Foundational understanding',
  },
  {
    id: 'internal-dynamics',
    label: 'Internal Dynamics',
    description: 'The dynamics of interiority',
  },
  {
    id: 'relational-dynamics',
    label: 'Relational Dynamics',
    description: 'The field of relation',
  },
  {
    id: 'natural-order',
    label: 'The Natural Order',
    description: 'Reality\'s inherent structure and coherence',
  },
  {
    id: 'attention-focus',
    label: 'Attention & Focus',
    description: 'Perception, awareness, and directed consciousness',
  },
  {
    id: 'time-growth-change',
    label: 'Time, Growth, & Change',
    description: 'Evolution, transformation, and temporal dynamics',
  },
];

/**
 * Get category by ID
 */
export function getInsightCategoryById(id: string): InsightCategory | undefined {
  return insightCategories.find(cat => cat.id === id);
}

/**
 * Get multiple categories by IDs
 */
export function getInsightCategoriesByIds(ids: string[]): InsightCategory[] {
  return ids
    .map(id => getInsightCategoryById(id))
    .filter((cat): cat is InsightCategory => cat !== undefined);
}