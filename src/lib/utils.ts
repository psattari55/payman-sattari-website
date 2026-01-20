// src/lib/utils.ts

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format insight number with leading zeros (e.g., 47 → "047")
 */
export function formatInsightNumber(num: number): string {
  return num.toString().padStart(3, '0');
}