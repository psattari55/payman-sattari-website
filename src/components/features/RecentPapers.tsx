// src/components/features/RecentPapers.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import InteractiveLink from '@/components/ui/InteractiveLink'

interface Paper {
  title: string
  journal: string
  status: string
  href: string
}

const recentPapers: Paper[] = [
  {
    title: "The Continuous-Discrete Duality",
    journal: "Physics Review Letters",
    status: "Under Review",
    href: "/research/papers/continuous-discrete-duality"
  },
  {
    title: "A Unified Framework for Quantum Measurement",
    journal: "Foundations of Physics",
    status: "Under Review",
    href: "/research/papers/unified-framework-quantum-measurement"
  }
];

const RecentPapers = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 bg-stone-100 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ 
              rotate: [-5, 0, 5, 0, -5],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FileText className="w-5 h-5 text-emerald-600/80" strokeWidth={1.5} />
          </motion.div>
          <h3 className="text-lg font-normal text-gray-800">
            Recent Papers
          </h3>
        </div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {recentPapers.map((paper, index) => (
          <motion.div 
            key={paper.title}
            className="p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <InteractiveLink 
              href={paper.href}
              className="block group"
            >
              <h4 className="text-base font-normal text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                {paper.title}
              </h4>
              <div className="text-sm space-y-1">
                <p className="text-gray-600">{paper.journal}</p>
                <p className="text-gray-500 text-sm">{paper.status}</p>
              </div>
            </InteractiveLink>
          </motion.div>
        ))}
      </div>
      
      <div className="px-6 py-4 bg-stone-50 border-t border-gray-100">
        <InteractiveLink 
          href="/research#papers"
          className="text-sm text-emerald-600 hover:text-emerald-700"
        >
          View All Papers →
        </InteractiveLink>
      </div>
    </div>
  )
}

export default RecentPapers