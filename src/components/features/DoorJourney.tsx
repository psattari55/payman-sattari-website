// src/components/features/DoorJourney.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import InteractiveLink from '@/components/ui/InteractiveLink'

interface DoorJourneyConfig {
  title: string
  firstArticle: {
    title: string
    href: string
  }
  color: string
  gradientVia: string
}

const journeyConfigs: Record<string, DoorJourneyConfig> = {
  'observers-door': {
    title: "Walk the Observer's Road",
    firstArticle: {
      title: "The Significance of the Observer",
      href: "/articles/metaphysical/significance-of-observer"
    },
    color: "blue",
    gradientVia: "blue-50"
  },
  'scholars-door': {
    title: "Enter Scholar's Door",
    firstArticle: {
      title: "The History of Truth",
      href: "/articles/scientific/history-of-truth"
    },
    color: "emerald",
    gradientVia: "emerald-50"
  },
  'practitioners-door': {
    title: "Enter the Practitioner's Road",
    firstArticle: {
      title: "The Importance of Integration",
      href: "/articles/development/importance-of-integration"
    },
    color: "amber",
    gradientVia: "amber-50"
  }
}

interface DoorJourneyProps {
  doorType?: string;
  customTitle?: string;
  customArticle?: {
    title: string;
    href: string;
  };
}

const DoorJourney = ({ 
  doorType = 'observers-door',
  customTitle,
  customArticle
}: DoorJourneyProps) => {
  const config = journeyConfigs[doorType]
  const title = customTitle || config.title
  const article = customArticle || config.firstArticle

  return (
    <motion.div 
      className="relative rounded-lg overflow-hidden"
      whileHover={{ 
        y: -2,
        boxShadow: '0 0 25px rgba(241, 245, 249, 0.5)'
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Gradient border effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-slate-100 via-${config.gradientVia} to-slate-50`} />
      
      {/* Inner content */}
      <div className="relative m-[1px] bg-white rounded-lg p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-light mb-8 text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">
            Begin your journey with:
          </p>
          
          <div className={`mb-8 font-medium text-lg hover:text-${config.color}-700 transition-colors`}>
            {article.title}
          </div>
          
          <InteractiveLink 
            href={article.href}
            className="inline-flex items-center group"
          >
            <span className="mr-2">Begin Reading</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.div>
          </InteractiveLink>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DoorJourney