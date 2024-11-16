// src/components/features/DoorEnterButton.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { scholarsDoorSequence, observersDoorSequence, practitionersDoorSequence } from '@/data/sequences'

interface DoorConfig {
  text: string;
  color: string;
  firstArticlePath: string;
}

const doorConfigs: Record<string, DoorConfig> = {
  'scholars-door': {
    text: "Enter the Scholar's Door",
    color: 'from-emerald-50/50 to-slate-50',
    firstArticlePath: scholarsDoorSequence[0].path
  },
  'observers-door': {
    text: "Enter the Observer's Door",
    color: 'from-blue-50/50 to-slate-50',
    firstArticlePath: observersDoorSequence[0].path
  },
  'practitioners-door': {
    text: "Enter the Practitioner's Door",
    color: 'from-amber-50/50 to-slate-50',
    firstArticlePath: practitionersDoorSequence[0].path
  }
}

interface DoorEnterButtonProps {
  doorType: 'scholars-door' | 'observers-door' | 'practitioners-door';
  className?: string;
}

const DoorEnterButton = ({ doorType, className = 'mt-16' }: DoorEnterButtonProps) => {
  const config = doorConfigs[doorType];

  return (
    <div className={className}>
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link 
          href={config.firstArticlePath}
          passHref
        >
          <motion.div
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gray-50 text-gray-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
            whileHover={{ y: -2 }}
          >
            {/* Animated background on hover */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${config.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              initial={false}
            />
            
            <span className="relative font-semibold text-base">
              {config.text}
            </span>
            
            <motion.div
              className="relative"
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}

export default DoorEnterButton