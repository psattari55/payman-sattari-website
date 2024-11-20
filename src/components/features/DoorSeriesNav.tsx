// src/components/features/DoorSeriesNav.tsx
'use client'

import React from 'react'
import InteractiveLink from '@/components/ui/InteractiveLink'
import { scholarsDoorSequence, observersDoorSequence, practitionersDoorSequence } from '@/data/sequences'

interface DoorSeriesNavProps {
  doorType: 'scholars-door' | 'observers-door' | 'practitioners-door';
}

const DoorSeriesNav = ({ doorType }: DoorSeriesNavProps) => {
  const getSequence = () => {
    switch (doorType) {
      case 'scholars-door':
        return scholarsDoorSequence;
      case 'observers-door':
        return observersDoorSequence;
      case 'practitioners-door':
        return practitionersDoorSequence;
    }
  }

  const sequence = getSequence();
  const firstArticle = sequence[0];
  const secondArticle = sequence[1];

  // Get the hover color based on door type
  const getHoverColor = () => {
    switch (doorType) {
      case 'scholars-door':
        return 'hover:text-emerald-600';
      case 'observers-door':
        return 'hover:text-blue-600';
      case 'practitioners-door':
        return 'hover:text-amber-600';
    }
  }

  return (
    <div className="bg-white rounded-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Article Series</h3>
      <div className="space-y-4">
        <div className="text-sm">
          <p className="text-gray-600 mb-2">First Article</p>
          <InteractiveLink 
            href={firstArticle.slug}
            className={`text-gray-900 ${getHoverColor()}`}
          >
            {firstArticle.title}
            {firstArticle.subtitle && `: ${firstArticle.subtitle}`}
          </InteractiveLink>
        </div>
        <div className="text-sm">
          <p className="text-gray-600 mb-2">Next</p>
          <InteractiveLink 
            href={secondArticle.slug}
            className={`text-gray-900 ${getHoverColor()}`}
          >
            {secondArticle.title}
            {secondArticle.subtitle && `: ${secondArticle.subtitle}`}
          </InteractiveLink>
        </div>
      </div>
    </div>
  )
}

export default DoorSeriesNav