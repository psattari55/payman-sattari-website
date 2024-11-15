// src/components/features/ThreeDoorways.tsx

'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Book, Eye, Lightbulb } from 'lucide-react'

const doorways = [
  {
    title: "Scholar's Door",
    subtitle: "Research & Theory",
    description: "Explore the scientific foundations and theoretical framework bridging consciousness and physical reality.",
    icon: <Book className="w-8 h-8" />,
    path: "/research",
    gradient: "from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200"
  },
  {
    title: "Observer's Door",
    subtitle: "Experience & Understanding",
    description: "Discover through direct experience and insight how consciousness shapes our reality.",
    icon: <Eye className="w-8 h-8" />,
    path: "/observers-door",
    gradient: "from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200"
  },
  {
    title: "Practitioner's Door",
    subtitle: "Application & Integration",
    description: "Apply these principles in daily life and experience transformation through practice.",
    icon: <Lightbulb className="w-8 h-8" />,
    path: "/practice",
    gradient: "from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200"
  }
]

export default function ThreeDoorways() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 ">Choose Your Path</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {doorways.map((doorway, index) => (
          <motion.div
            key={doorway.title}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <Link href={doorway.path}>
            <div className={`h-full rounded-xl bg-gradient-to-br ${doorway.gradient} 
              p-6 flex flex-col items-center text-center shadow-sm 
              transition-all duration-300 hover:shadow-md border border-gray-200`}
            >
              <div className="mb-4 text-gray-700">
                {doorway.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                {doorway.title}
              </h3>
              
              <p className="text-sm text-gray-700 mb-4">
                {doorway.subtitle}
              </p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                className="text-sm text-gray-700"
              >
                {doorway.description}
              </motion.div>
            </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}