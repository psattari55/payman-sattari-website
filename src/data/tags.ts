// src/data/tags.ts

import { Tag } from '@/types/content';

/**
 * Master Tags
 * 
 * Granular, specific keywords for content classification.
 * Multiple tags can be assigned to each piece of writing.
 * 
 * Organized by domain for maintainability.
 */

/**
 * All available tags
 * 
 * Organized chronologically by essay for traceability.
 */

export const TAGS: Tag[] = [
  
  // General tags
  
    { id: 'systems-thinking', label: 'Systems Thinking' },
    { id: 'ontology', label: 'Ontology' },
    { id: 'first-principles', label: 'First Principles' },
    { id: 'reality', label: 'Reality' },

    { id: 'healthcare', label: 'Healthcare' },
    { id: 'security', label: 'Security' },

    // Healthcare and Security: Why Some Industries Cannot Functionally Be For-Profit

    { id: 'public-health', label: 'Public Health' },
    { id: 'criminal-justice', label: 'Criminal Justice' },
    { id: 'maintenance-functions', label: 'Maintenance Functions' },
    { id: 'profit-motive', label: 'Profit Motive' },
    { id: 'systems-thinking', label: 'Systems Thinking' },
    { id: 'institutional-design', label: 'Institutional Design' },
    { id: 'healthcare-systems', label: 'Healthcare Systems' },
    { id: 'healthcare-reform', label: 'Healthcare Reform' },
    { id: 'for-profit-incentives', label: 'For-Profit Incentives' },
    { id: 'security-apparatus', label: 'Security Apparatus' },
    { id: 'chronic-disease-management', label: 'Chronic Disease Management' },
    { id: 'market-logic', label: 'Market Logic' },

  // AI and the Performance of Neutrality

    { id: 'artificial-intelligence', label: 'Artificial Intelligence' },
    { id: 'neutrality', label: 'Neutrality' },
    { id: 'objectivity', label: 'Objectivity' },
    { id: 'power-asymmetry', label: 'Power Asymmetry' },
    { id: 'language-and-reality', label: 'Language and Reality' },
    { id: 'form-and-substance', label: 'Form and Substance' },
    { id: 'both-sidesism', label: 'Both-Sidesism' },
    { id: 'epistemology', label: 'Epistemology' },
    { id: 'philosophy-of-technology', label: 'Philosophy of Technology' },
];

/**
 * Tag lookup helper
 */
export function getTagById(id: string): Tag | undefined {
  return TAGS.find((tag) => tag.id === id);
}

/**
 * Get multiple tags by IDs
 */
export function getTagsByIds(ids: string[]): Tag[] {
  return ids
    .map((id) => getTagById(id))
    .filter((tag): tag is Tag => tag !== undefined);
}

/**
 * Validate that all tags exist
 */
export function areValidTags(ids: string[]): boolean {
  return ids.every((id) => TAGS.some((tag) => tag.id === id));
}