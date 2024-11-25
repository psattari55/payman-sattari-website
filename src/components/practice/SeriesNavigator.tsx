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

  // Map icons to sections
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

  return (
    <motion.div 
      className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="px-6 py-4 bg-stone-50 border-b border-gray-200">
        <h3 className="text-lg font-normal text-gray-900">On This Page</h3>
      </div>
      
      <nav className="p-2">
        {sections.map((section, index) => {
          const Icon = getIcon(section.id)
          return (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center gap-3 w-full p-3 rounded-md text-left group transition-all duration-300 ${
                index === currentSection 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'hover:bg-gray-50 text-gray-600'
              }`}
              whileHover={{ x: 4 }}
            >
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                index === currentSection 
                  ? 'bg-blue-100' 
                  : 'bg-gray-100 group-hover:bg-gray-200'
              }`}>
                <Icon className={`w-4 h-4 ${
                  index === currentSection 
                    ? 'text-blue-600' 
                    : 'text-gray-500 group-hover:text-gray-700'
                }`} />
              </div>
              
              <div className="flex-1">
                <span className={`text-sm font-medium transition-colors ${
                  index === currentSection 
                    ? 'text-blue-600' 
                    : 'text-gray-700 group-hover:text-gray-900'
                }`}>
                  {section.title}
                </span>
                
                {index === currentSection && (
                  <motion.div 
                    className="h-0.5 bg-blue-600 mt-1"
                    layoutId="underline"
                  />
                )}
              </div>

              <motion.div
                animate={{ x: index === currentSection ? 0 : -10, opacity: index === currentSection ? 1 : 0 }}
                className="text-blue-600"
              >
                →
              </motion.div>
            </motion.button>
          )
        })}
      </nav>
    </motion.div>
  )
}

export default SeriesNavigator