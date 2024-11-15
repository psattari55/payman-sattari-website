// src/components/features/ObserversDoor.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import InteractiveLink from '@/components/ui/InteractiveLink'

// src/components/features/ObserversDoor.tsx

const ObserversHeader = () => {
    return (
      <motion.div 
        className="relative mb-10 overflow-hidden rounded-lg border border-gray-100 bg-gradient-to-r from-indigo-50 to-indigo-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[600px] h-[600px] border border-blue-100/30 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                translateX: '-50%',
                translateY: '-50%'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
  
        {/* Content */}
        <div className="relative z-10 p-12 md:p-16">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              className="mb-8"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Eye className="w-16 h-16 text-blue-600/80" strokeWidth={1.5} />
            </motion.div>
            
            <h1 className="text-4xl font-normal mb-6 tracking-tight text-gray-900">
              The Observer's Door
            </h1>
            <h2 className="text-xl text-gray-600 max-w-2xl">
              Exploring Inner Dynamics and the Nature of Experience
            </h2>
          </div>
        </div>
      </motion.div>
    )
  }

const WalkTheRoad = () => {
    return (
      <motion.div 
        className="relative rounded-lg overflow-hidden"
        whileHover={{ 
          y: -2,
          boxShadow: '0 0 25px rgba(241, 245, 249, 0.5)' // Soft slate glow on hover
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-50" />
        
        {/* Inner content with slight padding for gradient border effect */}
        <div className="relative m-[1px] bg-white rounded-lg p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-8 text-gray-900">Walk the Observer's Road</h3>
            <p className="text-sm text-gray-600 mb-4">
              Begin your journey with:
            </p>
            
            <div className="mb-8 font-medium text-lg hover:text-blue-700 transition-colors">
              The Significance of the Observer
            </div>
            
            <InteractiveLink 
              href="/articles/observer/significance-of-observer"
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

export { ObserversHeader, WalkTheRoad }