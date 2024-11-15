// src/app/articles/metaphysical/introduction/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import PageTransition from '@/components/ui/PageTransition'
import InteractiveLink from '@/components/ui/InteractiveLink'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const articleSeries = [
  {
    title: "The Nature of the Self: Beyond Thought and Identity",
    description: "Explore the fundamental nature of consciousness and identity, discovering what lies beyond our thoughts and personal narratives.",
    path: "/articles/metaphysical/nature-of-self",
    readTime: "12 min read"
  },
  {
    title: "The Significance of the Observer",
    description: "Understanding the profound role of observation in shaping both our inner and outer reality.",
    path: "/articles/metaphysical/significance-of-observer",
    readTime: "15 min read"
  },
  {
    title: "Inner and Outer Realities",
    description: "Examining the relationship between subjective experience and objective reality.",
    path: "/articles/metaphysical/inner-outer-realities",
    readTime: "14 min read"
  }
]

export default function ObserversDoorPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section 
          background="white" 
          width="narrow"
          padding="large"
          className="pt-24"
        >
          {/* Header */}
          <div className="mb-16 text-center">
            <motion.div 
              className="mb-6 inline-block"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [-5, 0, 5, 0, -5],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Eye className="w-12 h-12 text-blue-600" strokeWidth={1.5} />
            </motion.div>
            <h1 className="text-4xl font-normal mb-6 text-gray-900">
              The Observer's Door
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exploring Inner Dynamics and the Nature of Experience
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-gray-700">
              The Observer's Door is an invitation to explore the experiential side of reality. Here, we shift our focus from the mechanics of the physical world to the experience of living within it. While science gives us tools to understand structure, measurement, and outward phenomena, the observer's role requires a different approach. It invites us to look inward, to understand how our consciousness shapes and interacts with reality from the "inside out."
            </p>
            <p className="text-gray-700">
              This is the door we open to explore questions that can't be fully answered through empirical data alone: What is the nature of the self? How do our inner beliefs and emotions shape our experience of the outer world? And how does understanding the subjective experience offer us a broader view of objective reality?
            </p>
          </div>

          {/* Main Sections */}
          <div className="mb-16">
            <h2 className="text-2xl font-normal mb-8 text-gray-900">Key Areas of Exploration</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Consciousness and Perception",
                  description: "Discover how the act of observing shapes reality, from the quantum level to our everyday interactions."
                },
                {
                  title: "Truth and Illusion",
                  description: "Learn to discern the beliefs that shape your perception and uncover how reality can be both stable and fluid."
                },
                {
                  title: "The Power of Inner States",
                  description: "Understand how emotions, thoughts, and beliefs influence your experience of the world."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-6 bg-white border border-gray-100 rounded-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-normal mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Article Series */}
          <div className="mb-16">
            <h2 className="text-2xl font-normal mb-8 text-gray-900">Begin Your Journey</h2>
            <div className="space-y-8">
              {articleSeries.map((article, index) => (
                <Link 
                  key={article.title}
                  href={article.path}
                  className="block"
                >
                  <motion.div 
                    className="p-6 bg-white border border-gray-100 rounded-sm hover:border-gray-200 transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-xl font-normal mb-2 text-gray-900">{article.title}</h3>
                        <p className="text-gray-600 mb-2">{article.description}</p>
                        <p className="text-sm text-gray-500">{article.readTime}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 mt-1" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Closing Section */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-normal mb-6 text-gray-900">Explore and Reflect</h2>
            <p className="text-gray-700">
              As you explore the resources here, remember that inner knowledge is a journey. It unfolds gradually, inviting you to observe, reflect, and integrate new insights. The Observer's Door is now open—step inside, explore, and let your understanding of life deepen with each step.
            </p>
          </div>
        </Section>
      </div>
    </PageTransition>
  )
}