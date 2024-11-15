// src/app/observers-door/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { motion } from 'framer-motion'
import { Eye, ArrowRight, Book, Mail } from 'lucide-react'
import Section from '@/components/ui/Section'
import PageTransition from '@/components/ui/PageTransition'
import InteractiveLink from '@/components/ui/InteractiveLink'
import { ObserversHeader, WalkTheRoad } from '@/components/features/ObserversDoor'

export default function ObserversDoorPage() {
  
  const [isSubscribing, setIsSubscribing] = useState(false);
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3 border-l border-r border-gray-100 px-8">
              <ObserversHeader />

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-800">
                  The Observer's Door is an invitation to explore the experiential side of reality. Here, we shift our focus from the mechanics of the physical world to the experience of living within it. While science gives us tools to understand structure, measurement, and outward phenomena, the observer's role requires a different approach. It invites us to look inward, to understand how our consciousness shapes and interacts with reality from the "inside out."
                </p>

                <p className="text-xl leading-relaxed text-gray-800">
                  This is the door we open to explore questions that can't be fully answered through empirical data alone: What is the nature of the self? How do our inner beliefs and emotions shape our experience of the outer world? And how does understanding the subjective experience offer us a broader view of objective reality?
                </p>

                <p className="text-xl leading-relaxed text-gray-800">
                  The Observer's Door offers insights and tools to help you engage with the often-unseen dimensions of life—ones that guide not just <em>what</em> we observe, but <em>how</em> we observe and interpret the world around us.
                </p>

                <h2 className="text-2xl font-normal mt-12 mb-6 text-gray-900">Why Understanding the Observer Matters</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  In every experience, we are both participant and observer, shaping reality through our beliefs, perceptions, and states of mind. While much of modern knowledge focuses on outward facts, the inner experience is equally vital—it's where we find purpose, meaning, and an understanding of our role in the larger cosmos.
                </p>

                <p className="text-lg leading-relaxed text-gray-800">
                  Here, you'll find resources that explore the subjective dynamics of reality: the role of consciousness, the impact of belief systems, and the way our inner state reflects and shapes the outer world. These insights empower you to live with awareness, using your consciousness to engage more deeply with life and uncover truths that are as real as any physical fact.
                </p>

                <h2 className="text-2xl font-normal mt-12 mb-6 text-gray-900">What You'll Find Here</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  This section offers articles, insights, and reflective tools to help you navigate life as an observer and participant. The goal is to provide you with a deeper understanding of the experiential dimensions of existence and how they contribute to a more complete picture of reality.
                </p>

                <div className="my-12 grid md:grid-cols-3 gap-8">
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
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      className="p-6 bg-white border border-gray-100 rounded-sm"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-lg font-normal mb-3 text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Begin Button */}
                <div className="mt-16">
                  <motion.div
                    className="flex justify-end"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link 
                      href="/articles/observer/significance-of-observer"
                      className="group inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-50 to-slate-50  border border-blue-100 text-blue-700 rounded-lg hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
                    >
                      <span className="font-light tracking-wide">Begin</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowRight className="w-4 h-4 text-blue-600/80" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>

              </div>
            </div>

            {/* Sidebar */}
            <motion.aside 
              className="lg:w-1/3 space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Begin Journey Card */}
              <WalkTheRoad />

              {/* Article Navigation */}
              <div className="bg-white rounded-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Article Series</h3>
                <div className="space-y-4">
                  <div className="text-sm">
                    <p className="text-gray-600 mb-2">First Article</p>
                    <InteractiveLink 
                      href="/articles/observer/significance-of-observer"
                      className="text-gray-900 hover:text-blue-600"
                    >
                      The Significance of the Observer: Why Consciousness Completes the Picture of Reality
                    </InteractiveLink>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-600 mb-2">Next</p>
                    <InteractiveLink 
                      href="/articles/metaphysical/nature-of-self"
                      className="text-gray-900 hover:text-blue-600"
                    >
                      The Nature of the Self: Beyond Thought and Identity
                    </InteractiveLink>
                  </div>
                </div>
              </div>

              {/* Book Promotion */}
              <motion.div 
                className="bg-white border border-gray-100 rounded-sm p-6"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <img 
                      src="/images/books/science-of-energy-cover.jpg" 
                      alt="The Science of Energy Book Cover"
                      className="w-full rounded-sm shadow-sm"
                    />
                  </div>
                  <div className="w-2/3">
                    <h3 className="text-lg font-normal mb-2 text-gray-900">The Science of Energy</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      A comprehensive introduction to a new framework for understanding reality.
                    </p>
                    <InteractiveLink 
                      href="/books/science-of-energy"
                      className="text-sm text-blue-600"
                    >
                      Learn More
                    </InteractiveLink>
                  </div>
                </div>
              </motion.div>

            {/* Newsletter */}
            <div className="bg-white border border-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-normal mb-4 text-gray-900">Stay Connected</h3>
            <p className="text-sm text-gray-600 mb-4">
                Get monthly insights on consciousness, physics, and the nature of reality.
            </p>
            <motion.input 
                type="email" 
                placeholder="Your email"
                className="w-full p-2 mb-2 border border-gray-200 rounded text-sm"
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
            <motion.button 
                className="w-full bg-gray-900 text-white p-2 rounded-md text-sm hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubscribing}
            >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
            </motion.button>
            </div>
            </motion.aside>
          </div>
        </Section>
      </div>
    </PageTransition>
  )
}