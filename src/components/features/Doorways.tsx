// src/components/features/Doorways.tsx
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Book, Eye, Lightbulb } from 'lucide-react'

interface Doorway {
  title: string
  subtitle: string
  description: string
  icon: typeof Book | typeof Eye | typeof Lightbulb
  path: string
  color: {
    primary: string
    secondary: string
    text: string
    border: string
    hoverPrimary: string
    hoverSecondary: string
  }
}

const doorways: Doorway[] = [
  {
    title: "Scholar's Door",
    subtitle: "Research & Theory",
    description: "Explore the scientific foundations and theoretical framework bridging consciousness and physical reality through peer-reviewed research and formal theory.",
    icon: Book,
    path: "/scholars-door",
    color: {
      primary: "bg-gradient-to-br from-emerald-50/80 to-slate-50/80",
      secondary: "bg-gradient-to-br from-emerald-100/90 to-emerald-50/90",
      text: "text-emerald-900",
      border: "border-emerald-100",
      hoverPrimary: "from-emerald-100",
      hoverSecondary: "to-emerald-50"
    }
  },
  {
    title: "Observer's Door",
    subtitle: "Experience & Understanding",
    description: "Discover through direct experience and insight how consciousness shapes our reality, exploring the nature of awareness and perception.",
    icon: Eye,
    path: "/observers-door",
    color: {
      primary: "bg-gradient-to-br from-blue-50/80 to-slate-50/80",
      secondary: "bg-gradient-to-br from-blue-100/90 to-blue-50/90",
      text: "text-blue-900",
      border: "border-blue-100",
      hoverPrimary: "from-blue-100",
      hoverSecondary: "to-blue-50"
    }
  },
  {
    title: "Practitioner's Door",
    subtitle: "Application & Integration",
    description: "Apply these principles in daily life and experience transformation through practice, developing practical tools for personal growth.",
    icon: Lightbulb,
    path: "/practitioners-door",
    color: {
      primary: "bg-gradient-to-br from-amber-50/80 to-slate-50/80",
      secondary: "bg-gradient-to-br from-amber-100/90 to-amber-50/90",
      text: "text-amber-900",
      border: "border-amber-100",
      hoverPrimary: "from-amber-100",
      hoverSecondary: "to-amber-50"
    }
  }
]

interface DoorwaysProps {
  showHeader?: boolean
  className?: string
}

export default function Doorways({ showHeader = true, className = '' }: DoorwaysProps) {
  const [hoveredDoor, setHoveredDoor] = useState<number | null>(null)

  return (
    <div className={className}>
      {showHeader && (
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-light mb-4 tracking-wide text-gray-900">
            Choose Path
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            There are three doors, each offering a unique perspective on the relationship between consciousness and physical reality.
          </p>
        </motion.div>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        {doorways.map((door, index) => {
          const Icon = door.icon
          const isHovered = hoveredDoor === index

          return (
            <motion.div
              key={door.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link href={door.path}>
                <motion.div
                  className={`relative h-full rounded-lg border ${door.color.border} overflow-hidden`}
                  onMouseEnter={() => setHoveredDoor(index)}
                  onMouseLeave={() => setHoveredDoor(null)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Background with gradient */}
                  <div className={`absolute inset-0 transition-all duration-300 ${isHovered ? door.color.secondary : door.color.primary}`} />
                  
                  {/* Shine effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: isHovered ? ['100%', '-100%'] : '-100%',
                      opacity: isHovered ? 1 : 0.5
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Content */}
                  <div className="relative p-8 h-full">
                    <div className="flex flex-col items-start h-full">
                      <motion.div 
                        className={`p-3 rounded-full bg-gradient-to-br ${isHovered ? `${door.color.hoverPrimary} ${door.color.hoverSecondary}` : `${door.color.hoverPrimary}/50 ${door.color.hoverSecondary}/50`} 
                          transition-all duration-300 mb-6`}
                      >
                        <Icon 
                          className={`w-6 h-6 ${door.color.text} transition-all duration-300`}
                          style={{
                            opacity: isHovered ? 1 : 0.8
                          }}
                          strokeWidth={1.5} 
                        />
                      </motion.div>

                      <motion.h3 
                        className={`text-2xl font-light mb-2 ${door.color.text} transition-opacity duration-300`}
                        style={{
                          opacity: isHovered ? 1 : 0.9
                        }}
                      >
                        {door.title}
                      </motion.h3>
                      
                      <p className="text-sm font-medium text-gray-600 mb-4">
                        {door.subtitle}
                      </p>

                      <motion.p 
                        className="text-sm text-gray-600 mb-6"
                        style={{
                          opacity: isHovered ? 1 : 0.8
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {door.description}
                      </motion.p>

                      <div className="mt-auto">
                        <motion.div
                          className="inline-flex items-center gap-2 text-sm font-medium"
                          animate={{
                            x: isHovered ? 4 : 0,
                            opacity: isHovered ? 1 : 0.9
                          }}
                        >
                          <span className={door.color.text}>Enter</span>
                          <motion.span
                            animate={{
                              x: isHovered ? 4 : 0,
                            }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}