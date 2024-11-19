// src/app/articles/page.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Book, Eye, Lightbulb, CircleDot } from 'lucide-react'
import Section from '@/components/ui/Section'
import PageTransition from '@/components/ui/PageTransition'

const categories = [
  {
    name: "Scientific Insights",
    path: "/articles/scientific",
    icon: Book,
    description: "Exploring the foundational mechanics of reality through rigorous research and theoretical frameworks. These articles bridge quantum mechanics, consciousness, and physical reality.",
    color: {
      bg: "bg-emerald-50",
      text: "text-emerald-900",
      border: "border-emerald-100"
    }
  },
  {
    name: "Metaphysical Concepts",
    path: "/articles/metaphysical",
    icon: Eye,
    description: "Exploring consciousness, perception, and the nature of reality through direct experience and understanding. Discover how awareness shapes our experience of existence.",
    color: {
      bg: "bg-blue-50",
      text: "text-blue-900",
      border: "border-blue-100"
    }
  },
  {
    name: "Personal Development",
    path: "/articles/development",
    icon: Lightbulb,
    description: "Practical applications of universal principles for personal growth and transformation. Learn to apply theoretical understanding in daily life.",
    color: {
      bg: "bg-amber-50",
      text: "text-amber-900",
      border: "border-amber-100"
    }
  },
  {
    name: "Latest Thoughts",
    path: "/articles/thoughts",
    icon: CircleDot,
    description: "Recent insights, reflections, and explorations across various topics. A space for new ideas and perspectives on consciousness, reality, and human experience.",
    color: {
      bg: "bg-purple-50",
      text: "text-purple-900",
      border: "border-purple-100"
    }
  }
]

export default function ArticlesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-light mb-4 tracking-wide text-gray-900">
                Articles & Insights
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore various perspectives on consciousness, reality, and human potential through different lenses of understanding.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {categories.map((category, index) => {
                const Icon = category.icon
                return (
                  <motion.div
                    key={category.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={category.path}>
                      <motion.div
                        className={`relative rounded-lg border ${category.color.border} overflow-hidden`}
                        whileHover={{ y: -2 }}
                      >
                        <div className={`${category.color.bg} p-8`}>
                          <div className="flex items-start gap-6">
                            <div className="p-4 rounded-full bg-white/80">
                              <Icon className={`w-6 h-6 ${category.color.text}`} strokeWidth={1.5} />
                            </div>
                            <div>
                              <h2 className={`text-xl font-medium mb-2 ${category.color.text}`}>
                                {category.name}
                              </h2>
                              <p className="text-gray-600 mb-4">
                                {category.description}
                              </p>
                              <motion.div
                                className={`inline-flex items-center gap-2 text-sm ${category.color.text}`}
                                whileHover={{ x: 4 }}
                              >
                                View Articles →
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
        </Section>
      </div>
    </PageTransition>
  )
}