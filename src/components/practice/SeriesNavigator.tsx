// src/components/practice/SeriesNavigator.tsx

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Map, Unplug } from 'lucide-react'

interface Section {
  id: string
  title: string
}

interface SeriesNavigatorProps {
  sections: Section[]
  currentSection: number
}

const SeriesNavigator = ({ sections, currentSection }: SeriesNavigatorProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getIcon = (id: string) => {
    switch (id) {
      case 'meditation':
        return Eye
      case 'landscape':
        return Map
      case 'detachment':
        return Unplug
      default:
        return Eye
    }
  }

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  }

  const activeVariants = {
    active: {
      backgroundColor: "rgb(239 246 255)",
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    inactive: {
      backgroundColor: "transparent",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  }

  return (
    <motion.div 
      className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div 
        className="px-6 py-4 bg-stone-50 border-b border-gray-200"
        variants={itemVariants}
      >
        <h3 className="text-lg font-normal text-gray-900">On This Page</h3>
      </motion.div>
      
      <nav className="p-2">
        {sections.map((section, index) => {
          const Icon = getIcon(section.id)
          const isComplete = index < currentSection
          const isActive = index === currentSection

          return (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              variants={activeVariants}
              animate={isActive ? "active" : "inactive"}
              className={`
                flex items-center gap-3 w-full p-3 rounded-md text-left 
                group transition-all duration-300 relative
                ${isActive ? 'text-blue-600' : isComplete ? 'text-gray-400' : 'text-gray-600'}
              `}
              whileHover={{ x: 4 }}
            >
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-full
                transition-colors duration-300
                ${isActive ? 'bg-blue-100' : 
                  isComplete ? 'bg-green-50' : 
                  'bg-gray-100 group-hover:bg-gray-200'}
              `}>
                <Icon className={`
                  w-4 h-4 transition-colors duration-300
                  ${isActive ? 'text-blue-600' : 
                    isComplete ? 'text-green-500' : 
                    'text-gray-500 group-hover:text-gray-700'}
                `} />
              </div>
              
              <div className="flex-1">
                <span className={`
                  text-sm font-medium transition-colors duration-300
                  ${isActive ? 'text-blue-600' : 
                    isComplete ? 'text-gray-400' : 
                    'text-gray-700 group-hover:text-gray-900'}
                `}>
                  {section.title}
                </span>
                
                {isActive && (
                  <motion.div 
                    className="h-0.5 bg-blue-600 mt-1"
                    layoutId="underline"
                  />
                )}
              </div>

              <motion.div
                animate={{ 
                  x: isActive ? 0 : -10, 
                  opacity: isActive ? 1 : 0 
                }}
                className="text-blue-600"
              >
                →
              </motion.div>

              {isComplete && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-2 w-2 h-2 rounded-full bg-green-500"
                />
              )}
            </motion.button>
          )
        })}
      </nav>
    </motion.div>
  )
}

export default SeriesNavigator