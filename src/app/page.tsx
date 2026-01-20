// src/app/page.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import ProfileImage from '@/components/ui/ProfileImage'
import PageTransition from '@/components/ui/PageTransition'

{/* 
import React, { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import InteractiveLink from '@/components/ui/InteractiveLink'
import ProgressiveLoad from '@/components/ui/ProgressiveLoad'
import NewsletterModal from '@/components/ui/NewsletterModal';
*/}

export default function HomePage() {

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

{/*   const FeaturedRow = ({ type, title, href }: { type: string; title: string; href: string }) => (
    <Link href={href} className="group block -mx-4 px-4 py-8 transition-all hover:bg-gray-50/50">
      <div className="grid md:grid-cols-[140px,1fr,auto] items-baseline gap-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors">
          // {type}
        </span>
        <h3 className="text-xl font-bold text-gray-900 tracking-tight">
          {title}
        </h3>
        <ArrowRight size={16} className="text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );

  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const handleNewsletterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsNewsletterOpen(true);
  };

  const [isLoading, setIsLoading] = useState(true)
  
useEffect(() => {
  setIsLoading(false)  // Remove the setTimeout entirely
}, []) */}

  return (
    <PageTransition>
      <div className="min-h-screen">
      {/* Hero Section */}
    <Section background="white" width="narrow" className="pt-16 md:pt-24 pb-12">
      <motion.header {...fadeIn}>
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">
          System Overview / 2026
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tighter mb-8">
          Reality from <br />First Principles
        </h1>
        <p className="text-xl text-gray-900 font-serif italic border-l-2 border-gray-900 pl-8 leading-relaxed max-w-2xl">
          A transdisciplinary inquiry into the measurable structures of the physical world and the interior dimensions of reality.
        </p>
      </motion.header>
    </Section>

    {/* Introduction Section / Frontispiece */}
    <Section background="white" width="narrow" className="py-8 border-t border-gray-50">
      <div className="grid md:grid-cols-[200px,1fr] gap-16 items-start">
        
        {/* The Portrait: Quiet and Scaled */}
        <div className="space-y-6">
          <div className="grayscale hover:grayscale-0 transition-all duration-700 ease-in-out opacity-90">
            <ProfileImage />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-900 block">
              Orelio Sattari
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400 block leading-relaxed">
              Ashavan • Philosopher <br />Researcher
            </span>
          </div>
        </div>

        {/* The Preface: High-Gravity Prose */}
        <div className="space-y-8">
          <div className="prose prose-base text-gray-700 leading-relaxed font-light">
            <p>
              Since 2011, my work has centered on the development of a unified ontological framework—one that integrates the measurable structures of the physical world with the interior dimensions of reality.
            </p>
            <p>
              Through research spanning quantum mechanics, systems theory, and first-principles ontology, I propose a model that restores the <span className="text-gray-900 font-medium">conscious observer</span> to the heart of the cosmos. This site serves as a living archive for this investigation, bridging the quantitative precision of science with the qualitative depth of experience.
            </p>
          </div>

          <div className="pt-4 pb-12">
            <Link 
              href="/about" 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors"
            >
              View Full Biography
            </Link>
          </div>
        </div>
      </div>
    </Section>


    {/* Featured work
    <Section background="white" width="narrow" className="py-20 border-t border-gray-50">
      <div className="space-y-12">
        <div className="flex items-baseline justify-between border-b border-gray-100 pb-4">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900">
            Current Work
          </h2>
          <Link href="/writing" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">
            View Full Archive →
          </Link>
        </div>

        <div className="divide-y divide-gray-50">
          <FeaturedRow 
            type="New Essay"
            title="The Geometry of Perception"
            href="/writing/geometry-of-perception"
          />
          <FeaturedRow 
            type="Lexicon / 042"
            title="On the Stillness of Movement"
            href="/lexicon#042"
          />
          <FeaturedRow 
            type="Core Practice"
            title="Phase I: Inner Work"
            href="/practice/inner-work"
          />
        </div>
      </div>
    </Section> */}

    {/* Books
      <Section background="white" width="narrow" className="py-20 border-t border-gray-50">
        <div className="space-y-16">
          <div className="flex items-baseline justify-between border-b border-gray-100 pb-4">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900">Monographs & Volumes</h2>
            <Link href="/books/series" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">The Full Series →</Link>
          </div>  */}

          {/* Volume 01
          <div className="grid md:grid-cols-[200px,1fr] gap-16">
            <div className="relative aspect-[11/17] shadow-xl rounded-sm overflow-hidden bg-gray-50">
              <img src="/images/books/science-of-energy-cover.jpg" alt="Book Cover" className="object-cover w-full h-full" />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2 block">// Volume I • Available Now</span>
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">The Science of Energy</h3>
                <p className="text-sm text-gray-400 italic mt-1 font-serif">Nautilus Silver Medal in Science & Cosmology</p>
              </div>
              <p className="text-[15px] text-gray-600 leading-relaxed font-light max-w-xl">
                Examines how modern physics excluded consciousness from its foundations and outlines a framework where wave and particle, subject and object, express a single underlying order.
              </p>
              <div className="flex gap-8 pt-2">
                <Link href="/books/science-of-energy" className="text-[10px] font-bold uppercase tracking-widest text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-400 transition-colors">Examine Volume</Link>
                <Link href="/books/science-of-energy#purchase" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">Purchase</Link>
              </div>
            </div>
          </div>  */}

          {/* Volume 02 (Mini Entry)
          <div className="pt-12 border-t border-gray-50 grid md:grid-cols-[200px,1fr] gap-16 opacity-60 hover:opacity-100 transition-opacity">
            <div className="aspect-[11/17] bg-gray-50 flex items-center justify-center border border-dashed border-gray-200">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 italic">In Preparation</span>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">// Volume II • 2026</span>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Basic Duality</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed font-light max-w-xl italic">
                A first-principles account of reality's fundamental structure—from manifestation to the nature of time and order.
              </p>
            </div>
          </div>
        </div>
      </Section>  */}

        {/* Books Section
        <Section background="gray" width="narrow" className="py-16">
          <ProgressiveLoad>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Books</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Systematic presentations of the unified framework—bridging principles, practice, and technical detail
              </p>
            </div>
          </ProgressiveLoad>

          <div className="space-y-8">   */}
            
            {/* Book 1 - First Edition (Current)
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
            </ProgressiveLoad>  */}

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

            {/* Book 2 (In Development)
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
        </Section>  */}

      {/* About The Work 
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
      </Section> */}

      {/* Newsletter Modal
      <NewsletterModal 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      /> */}
    
    </div>
    </PageTransition>
  )
}