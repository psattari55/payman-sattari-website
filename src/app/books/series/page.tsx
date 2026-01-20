// src/app/books/series/page.tsx
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const BookEntry = ({ 
  number, 
  title,
  slug,
  description, 
  themes,
  status 
}: { 
  number: string;
  title: string;
  slug?: string;
  description: string;
  themes: string[];
  status: 'available' | 'forthcoming'
}) => (
  <div className="group relative grid md:grid-cols-[100px,1fr] gap-8 py-11 md:py-10 border-b border-gray-50">
    {/* Archival Numbering */}
    <div className="text-4xl font-black text-gray-100 group-hover:text-gray-900 transition-colors duration-500">
      {number}
    </div>

    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${
          status === 'available' ? 'text-gray-900' : 'text-gray-300'
        }`}>
          {status === 'available' ? 'Current Volume' : 'In Preparation'}
        </span>
      </div>

      <div className="max-w-2xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{title}</h3>
        <p className="text-[16px] text-gray-600 leading-relaxed mb-8 font-light">
          {description}
        </p>
        
        {/* Technical Taxonomy (Themes) */}
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {themes.map((theme) => (
            <span key={theme} className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
              — {theme}
            </span>
          ))}
        </div>
      </div>

      {status === 'available' && (
        <Link 
          href={`/books/${slug || title.toLowerCase().replace(/ /g, '-')}`}
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-900 pb-1 mt-4 hover:text-gray-500 hover:border-gray-500 transition-colors"
        >
          Examine Volume <ArrowRight size={14} />
        </Link>
      )}
    </div>
  </div>
);

export default function SeriesOverview() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Section width="narrow" className="pt-24 pb-12">
          {/* Editorial Header */}
          <motion.header className="mb-0" {...fadeIn}>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">
              Archive / 02
            </span>
            <div className="border-b border-gray-50 pb-12 mb-12">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-8">
                The Language of Truth
              </h1>
              <p className="text-xl text-gray-900 font-serif italic border-l-2 border-gray-900 pl-8 leading-relaxed">
                A three-volume ontological inquiry into the fundamental order of reality, moving from diagnosis to construction to lived application.
              </p>
            </div>
          </motion.header>

          {/* Sequential Volumes */}
          <motion.div className="space-y-0" {...fadeIn}>
            <BookEntry
              number="01"
              title="The Science of Energy"
              slug="science-of-energy"
              description="An investigation into how modern physics excluded consciousness from its foundations. This volume reframes incompatible domains—wave and particle, continuous and discrete, subject and object—as complementary expressions of a unified structure."
              themes={["Subject & Object", "Continuous & Discrete", "The Measured"]}
              status="available"
            />

            <BookEntry
              number="02"
              title="Basic Duality"
              description="A first-principles account of reality's fundamental structure. This work demonstrates how physical phenomena and conscious experience emerge from a coherent underlying order, reframing the nature of time, space, and casuality."
              themes={["Inner & Outer", "Active & Passive", "Potentiality"]}
              status="forthcoming"
            />

            <BookEntry
              number="03"
              title="The Language of Truth"
              description="The culmination of the system into practical mastery. An exploration of the self, virtue, and the path to alignment through the application of universal principles."
              themes={["The Self", "Virtue", "Mastery"]}
              status="forthcoming"
            />
          </motion.div>

          {/* Technical Note / Path Forward */}
          <motion.footer className="mt-16 pt-12 border-t border-gray-100" {...fadeIn}>
            <div className="max-w-2xl bg-gray-50 p-10 rounded-sm">
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">Navigation</span>
               <p className="text-sm text-gray-600 leading-relaxed mb-8">
                 It is recommended to begin with <span className="text-gray-900 font-medium italic">The Science of Energy</span> to establish the foundational understanding necessary for the subsequent ontological and practical developments.
               </p>
               <Link 
                href="/books/science-of-energy"
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-gray-900 px-8 py-4 inline-block hover:bg-gray-800 transition-colors"
               >
                 Begin Volume One
               </Link>
            </div>
          </motion.footer>
        </Section>
      </div>
    </PageTransition>
  );
}