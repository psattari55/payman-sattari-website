// src/app/practice/page.tsx
'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, Share2, Book } from 'lucide-react';

export default function PracticePage() {
  const [currentSection, setCurrentSection] = useState('meditation');

  const sections = [
    {
      id: 'inwardness',
      title: 'Inwardness',
      description: 'The foundation of inner work',
      subsections: [
        { id: 'meditation', title: 'Meditation', subtitle: 'The Gateway Inward' },
        { id: 'landscape', title: 'Inner Landscape', subtitle: 'Understanding What We Find' },
        { id: 'detachment', title: 'Detachment', subtitle: 'Creating Space to See' }
      ]
    },
    {
      id: 'balance',
      title: 'Balance',
      description: 'Working with complementary forces',
      subsections: [
        { id: 'energy-dynamics', title: 'Energy Dynamics', subtitle: 'Understanding Flow' },
        { id: 'complementary-forces', title: 'Complementary Forces', subtitle: 'The Dance of Opposites' }
      ]
    },
    {
      id: 'discipline',
      title: 'Discipline',
      description: 'The art of conscious development',
      subsections: [
        { id: 'love-limits', title: 'Love and Limits', subtitle: 'The Heart of Growth' },
        { id: 'boundaries-empathy', title: 'Boundaries & Empathy', subtitle: 'Self and Other' }
      ]
    }
  ];

  const ProgressMap = () => (
    <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
        <h3 className="text-lg font-light text-gray-900">Journey Map</h3>
      </div>
      <div className="p-6">
        {sections.map((section, sectionIndex) => (
          <div key={section.id} className="mb-8 last:mb-0">
            <div className="mb-3">
              <h4 className="text-sm font-medium text-gray-900">{section.title}</h4>
              <p className="text-xs text-gray-500">{section.description}</p>
            </div>
            <div className="relative">
              <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gray-200" />
              {section.subsections.map((subsection, subIndex) => (
                <div 
                  key={subsection.id}
                  className="relative flex items-start mb-4 last:mb-0 group cursor-pointer"
                  onClick={() => setCurrentSection(subsection.id)}
                >
                  <motion.div 
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center bg-white
                      ${currentSection === subsection.id ? 
                        'border-blue-600' : 
                        'border-gray-300 group-hover:border-gray-400'}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {currentSection === subsection.id && (
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-blue-600"
                        layoutId="progressIndicator"
                      />
                    )}
                  </motion.div>
                  <div className="ml-3 pt-1">
                    <div className={`text-sm font-medium transition-colors
                      ${currentSection === subsection.id ? 
                        'text-blue-600' : 
                        'text-gray-900 group-hover:text-gray-700'}`}>
                      {subsection.title}
                    </div>
                    <div className="text-xs text-gray-500">{subsection.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
                Meditation: The Gateway Inward
              </h1>
              
              <p className="text-xl text-gray-700 mb-8">
                At its essence, meditation is not a technique or set of practices, but rather 
                the fundamental capacity to look inward—a natural movement of consciousness 
                toward itself.
              </p>

              <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Nature of Meditation</h2>
              <p className="text-lg leading-relaxed text-gray-800">
                Looking inward is as natural as looking outward. Just as our physical eyes 
                allow us to perceive the outer world, we have an innate capacity for inner 
                vision. This capacity precedes any technique or practice—it is fundamental 
                to consciousness itself.
              </p>

              <div className="pl-6 border-l-2 border-blue-100 my-8">
                <p className="text-lg italic text-gray-700">
                  Just as we naturally possess the capacity to look outward through our physical 
                  senses, we have an innate ability to turn our attention inward. This inward 
                  looking is meditation in its purest form.
                </p>
              </div>

              <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Beyond Technique</h2>
              <p className="text-lg leading-relaxed text-gray-800">
                While various methods and practices exist to facilitate this inward movement, 
                they are simply tools that support our natural capacity for inner attention. 
                The essence of meditation transcends any particular approach.
              </p>

              <div className="bg-blue-50 rounded-lg border border-blue-100 p-6 my-8">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Key Understanding</h3>
                <p className="text-gray-800 mb-0">
                  Meditation is not about achieving particular states or experiences, but about 
                  developing our capacity to be present with whatever arises in our awareness.
                </p>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <motion.aside 
            className="lg:w-1/3 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Share Buttons */}
            <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <h3 className="text-lg font-light text-gray-900">Share</h3>
              </div>
              <div className="p-6">
                <button className="w-full py-2 px-4 rounded-lg border border-gray-200 text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50">
                  <Share2 className="w-4 h-4" />
                  <span>Share this article</span>
                </button>
              </div>
            </div>

            {/* Progress Map */}
            <ProgressMap />

            {/* Book Promotion */}
            <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <h3 className="text-lg font-light text-gray-900">Further Reading</h3>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <Book className="w-12 h-12 text-blue-600" />
                  <div>
                    <h4 className="font-medium text-gray-900">The Science of Energy</h4>
                    <p className="text-sm text-gray-600 mb-4">Explore the fundamental nature of reality through a unified framework.</p>
                    <button className="text-blue-600 text-sm hover:text-blue-700">
                      Learn more →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}