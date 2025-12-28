// src/app/page.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Mail, Eye, Lightbulb, ArrowRight, FileText } from 'lucide-react'  // ADD THIS
import { motion } from 'framer-motion'  // ADD THIS
import Section from '@/components/ui/Section'
import ProfileImage from '@/components/ui/ProfileImage'
import Doorways from '@/components/features/Doorways'
import PageTransition from '@/components/ui/PageTransition'
import PublicationCardSkeleton from '@/components/features/PublicationCardSkeleton'
import Card from '@/components/ui/Card'
import NewsletterModal from '@/components/ui/NewsletterModal';
import InteractiveLink from '@/components/ui/InteractiveLink'
import ProgressiveLoad from '@/components/ui/ProgressiveLoad'

export default function HomePage() {

  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const handleNewsletterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsNewsletterOpen(true);
  };

  const [isLoading, setIsLoading] = useState(true)
  
useEffect(() => {
  setIsLoading(false)  // Remove the setTimeout entirely
}, [])


  const publications = [
    {
      title: "The Continuous-Discrete Duality",
      journal: "Physics Review Letters",
      status: "Under Review",
      description: "A geometric foundation for quantum and classical behaviors",
      slug: "research/papers/continuous-discrete-duality"
    },
    {
      title: "The Toroidal Nature of Space-Time",
      journal: "Foundations of Physics",
      status: "Under Review",
      description: "Novel approach to understanding quantum field interactions",
      slug: "research/papers/toroidal-nature-spacetime"
    },
    {
      title: "A Unified Framework for Quantum Measurement",
      journal: "Foundations of Physics",
      status: "Under Review",
      description: "Time as fields of experience and potential",
      slug: "research/papers/unified-framework-quantum-measurement"
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen">
      {/* Hero Section */}
      <Section 
        background="white" 
        width="narrow"
        padding="large"
        className="text-center py-12 md:py-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Reality from First Principles
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Understanding Reality · Building Systems · Living in Alignment
        </p>
      </Section>

      {/* Introduction Section */}
      <Section background="gray" width="narrow" className="text-center py-8 md:py-10">
        <div className="flex flex-col">
          <div className="mb-6 flex justify-center">
            <ProfileImage />
          </div>
          <div className="space-y-4">
            {/*<h2 className="text-2xl font-semibold mb-2 text-center md:text-left">Welcome</h2>*/}
            <p className="text-base text-gray-700 text-center md:text-left mt-2">
              Orelio Sattari (<em>also writing as Payman Sattari</em>) is an ashavan, philosopher, and transdisciplinary researcher working at the intersection of physics, consciousness, and metaphysics.
            </p>
            <p className="text-base text-gray-700 text-center md:text-left">
              His work offers a unified ontological framework—one that integrates the measurable structures of the physical world with the lived reality of subjective experience. Through research spanning quantum mechanics, systems theory, and first-principles ontology, he proposes a model that restores the conscious observer to the heart of our understanding of the cosmos.
            </p>
            <p className="text-base text-gray-700 text-center md:text-left">
              In his book <em>The Science of Energy</em> (recipient of the Nautilus Silver Medal in Science & Cosmology), he examines how our fragmented understanding of reality developed historically and outlines a more comprehensive approach—one that honors both the quantitative precision of material science and the qualitative depth of conscious experience.
            </p>
            <p className="text-base text-gray-700 text-center md:text-left">
              This site serves as a home for his work. You'll find:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-gray-700 text-left">
              <li>Research papers addressing foundational questions in physics and ontology</li>
              <li>Articles that explore theoretical and experiential dimensions of this work in plain language</li>
              <li>Practical tools to apply these insights toward personal or collective transformation</li>
            </ul>
            <p className="text-base text-gray-700 text-center md:text-left font-medium mt-4">
              At the center of it all is a simple insight: Reality is not fragmented. We only see it that way.
            </p>
          </div>
        </div>
      </Section>

    {/* Learning Series Section - Replaces Doorways */}
      <Section background="white" width="default" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 gap-3">
              Foundations for New Readers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three article series written in plain language for the general reader.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A good starting point for those new to these materials.
            </p>
          </div>

          {/* Three Series Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Series 1: Foundations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="group"
            >
              <Link href="/articles/scientific/history-of-truth">
                <div className="h-full bg-white rounded-lg border-2 border-emerald-100 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-br from-emerald-50 to-white p-6 border-b border-emerald-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="text-sm font-medium text-emerald-600">8-Part Series</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Foundations
                    </h3>
                    <p className="text-sm text-gray-600">
                      Theory • Ontology • Physics
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      From the history of scientific thought to the role of the observer in quantum mechanics, this series builds a clear case for an integrated ontology—one that includes both the measurable structure of the physical world and the reality of conscious experience.
                    </p>
                    
                    {/* Preview of first 3 articles */}
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">1.</span>
                        <span>The History of Truth</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">2.</span>
                        <span>Fields, Continuity, and Wholeness</span>
                      </div>
                      <div className="text-gray-400 text-xs">+ 6 more articles</div>
                    </div>

                    {/* Start Button */}
                    <div className="flex items-center gap-2 text-emerald-600 font-medium group-hover:gap-3 transition-all">
                      <span>Begin Series</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Series 2: Inner Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <Link href="/articles/metaphysical/significance-of-observer">
                <div className="h-full bg-white rounded-lg border-2 border-blue-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 border-b border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Eye className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium text-blue-600">6-Part Series</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Inner Experience
                    </h3>
                    <p className="text-sm text-gray-600">
                      Phenomenology • Consciousness • Self
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      From recognizing the observer's essential role to learning to shape your experience from within, this series guides you through practical phenomenology—understanding and engaging with your inner reality as a living, dynamic field.
                    </p>
                    
                    {/* Preview */}
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">1.</span>
                        <span>The Significance of the Observer</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">2.</span>
                        <span>The Nature of the Self</span>
                      </div>
                      <div className="text-gray-400 text-xs">+ 4 more articles</div>
                    </div>

                    {/* Start Button */}
                    <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                      <span>Begin Series</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Series 3: Practice & Application */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <Link href="/articles/development/importance-of-integration">
                <div className="h-full bg-white rounded-lg border-2 border-amber-100 hover:border-amber-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-br from-amber-50 to-white p-6 border-b border-amber-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-amber-600" />
                      </div>
                      <span className="text-sm font-medium text-amber-600">6-Part Series</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Applied Practice
                    </h3>
                    <p className="text-sm text-gray-600">
                      Practice • Application • Integration
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      From integrating insights into lasting change to building emotional resilience and coming home to the body, this series offers practical tools for living consciously—not as theory, but as daily practice.
                    </p>
                    
                    {/* Preview */}
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">1.</span>
                        <span>The Importance of Integration</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">2.</span>
                        <span>The Primacy of Inner Reality</span>
                      </div>
                      <div className="text-gray-400 text-xs">+ 4 more articles</div>
                    </div>

                    {/* Start Button */}
                    <div className="flex items-center gap-2 text-amber-600 font-medium group-hover:gap-3 transition-all">
                      <span>Begin Series</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </Section>

      {/* Research Papers
      <Section background="gray" width="default">
        <ProgressiveLoad>
          <h2 className="text-3xl font-bold mb-12 text-center">Research Papers</h2>
        </ProgressiveLoad> */}
        
        {/* Publications Grid
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Show skeletons while loading
            <>
              <PublicationCardSkeleton />
              <PublicationCardSkeleton />
              <PublicationCardSkeleton />
            </>
          ) : (
            // Your existing publications mapping
            publications.map((paper, index) => (
              <ProgressiveLoad 
                key={paper.title} 
                delay={index * 200}
              >
                <Link href={paper.slug}>
                    <Card hoverable className="transition-shadow">
                      <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                      <p className="text-gray-700 mb-2">{paper.journal}</p>
                      <p className="text-sm text-gray-600 mb-4">{paper.status}</p>
                      <p className="text-gray-600">{paper.description}</p>
                    </Card>
                </Link>
              </ProgressiveLoad>
            ))
          )}
        </div>
      </Section> */}

        {/* Books Section  */}
        <Section background="gray" width="narrow" className="py-16">
          <ProgressiveLoad>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Books</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Systematic presentations of the unified framework—bridging principles, practice, and technical detail
              </p>
            </div>
          </ProgressiveLoad>

          <div className="space-y-8">
            
            {/* Book 1 - First Edition (Current) */}
            <ProgressiveLoad delay={100}>
              <div className="overflow-hidden bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="md:flex gap-8 p-6 md:p-8">
                  <div className="md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
                    <img
                      src="/images/books/science-of-energy-cover.jpg"
                      alt="The Science of Energy Book Cover"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="mb-3">
                      <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded">
                        Book 1 - Available Now
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">The Science of Energy</h3>
                    <p className="text-sm text-gray-500 mb-4 italic">
                      Recipient of the Nautilus Silver Medal in Science & Cosmology
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Shows how modern physics excluded consciousness from its foundations, why that choice limits our understanding, and what bridging the gap requires. Readers discover how seemingly incompatible domains—wave and particle, continuous and discrete, subject and object—express different aspects of the same underlying order.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/books/science-of-energy">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-5 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
                        >
                          Learn More
                        </motion.button>
                      </Link>
                      <Link href="/books/science-of-energy#purchase">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-5 py-2 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
                        >
                          Purchase
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ProgressiveLoad> 

            {/* Book 1 - Second Edition (Coming)
            <ProgressiveLoad delay={200}>
              <div className="overflow-hidden bg-gradient-to-br from-blue-50/50 to-white rounded-lg shadow-sm border-2 border-blue-100">
                <div className="md:flex gap-8 p-6 md:p-8">
                  <div className="md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
                    <div className="w-full aspect-[2/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-md flex items-center justify-center">
                      <div className="text-center p-6">
                        <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-3" />
                        <p className="text-sm text-gray-500 font-medium">Cover Coming Soon</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="mb-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded">
                        Book 1, Second Edition - Coming 2026
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">The Undivided Whole</h3>
                    <p className="text-sm text-gray-600 mb-4 italic">
                      A complete revision and expansion of The Science of Energy
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      A systematic presentation of the unified framework integrating physics, consciousness, and ontology from first principles. Massively expanded and refined—now suitable as a university text while remaining accessible to general readers.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/books/undivided-whole">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                        >
                          Learn More
                        </motion.button>
                      </Link>
                      <Link href="/books/undivided-whole#notify">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleNewsletterClick}
                          className="px-5 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm"
                        >
                          Get Notified
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ProgressiveLoad> */}

            {/* Book 2 (In Development) */}
            <ProgressiveLoad delay={300}>
              <div className="overflow-hidden bg-gray-50 rounded-lg border border-gray-200">
                <div className="md:flex gap-8 items-center p-6 md:p-8">
                  <div className="md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
                    <div className="w-full aspect-[2/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center opacity-50">
                      <FileText className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="mb-3">
                      <span className="text-sm font-medium text-gray-600 bg-gray-200 px-3 py-1 rounded">
                        Book 2 - In Development
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-700">Basic Duality</h3>
                    <p className="text-gray-600 leading-relaxed">
                      A first-principles account of reality's fundamental structure—from origins and manifestation to the nature of time, space, and order. This work develops the complete ontological system, demonstrating how both physical phenomena and conscious experience emerge from a coherent underlying pattern.
                    </p>
                    <div className="mt-6">
                      <motion.button
                        onClick={handleNewsletterClick}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
                      >
                        Notify When Available
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </ProgressiveLoad>
          </div>
        </Section>

      {/* About The Work */}
      <Section background="white" width="narrow" className="text-center">
        <h2 className="text-3xl font-bold mb-8">About The Work</h2>
        <p className="text-base text-gray-800 mb-8 leading-relaxed">
          A first-principles inquiry into the relationship between the measurable structure of the physical world and the interior dimensions of reality. This work bridges physics, consciousness, and ontology—addressing what exists and how we come to know it.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <InteractiveLink href="/about" variant="button">
            Read More
          </InteractiveLink>
          <motion.button
            onClick={handleNewsletterClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Stay Connected</span>
          </motion.button>
        </div>
      </Section>

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    
    </div>
    </PageTransition>
  )
}