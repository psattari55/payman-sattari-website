// src/app/books/science-of-energy/preview/page.tsx

'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';

const Quote = ({ text, source, context }: { text: string; source: string; context?: string }) => (
  <motion.div 
    className="my-24 relative"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="absolute left-0 top-1/2 h-px w-16 bg-gray-200" />
    <div className="absolute right-0 top-1/2 h-px w-16 bg-gray-200" />
    <div className="max-w-2xl mx-auto px-20">
      <p className="text-2xl font-light text-center text-gray-800 mb-6">
        {text}
      </p>
      <p className="text-sm text-center text-gray-500">{source}</p>
      {context && (
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-600 text-sm leading-relaxed">{context}</p>
        </div>
      )}
    </div>
  </motion.div>
);

export default function Preview() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <div className="mb-16">
              <Link 
                href="/books/science-of-energy" 
                className="inline-flex items-center text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Book
              </Link>
            </div>

            {/* Introduction */}
            <div className="text-center mb-24">
              <h1 className="text-4xl font-light mb-6">Bridging Consciousness and Physical Reality</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore key insights from The Science of Energy that reveal how consciousness and physical reality are two aspects of the same underlying order.
              </p>
            </div>

            {/* Core Concepts Through Quotes */}
            <Quote 
              text="Conscious experience is not spooky or mysterious. It is part of the natural order."
              source="The Nature of Reality, Chapter 1"
              context="This foundational principle sets the stage for understanding consciousness as an integral part of reality, not something separate from or mysterious to it."
            />

            <Quote 
              text="When we see a woman sitting with her head in her hands at a park bench, it is not her physical appearance that concerns us. What is evident through empathy that is not visible to our physical eyes is this person's inner experience."
              source="The Nature of Reality, Chapter 1"
              context="This illustrates how reality includes both physical and experiential aspects, neither of which can be reduced to the other."
            />

            <Quote 
              text="The world of divided objects descends from wholeness."
              source="The Whole and The Parts, Chapter 13"
              context="Understanding how unity gives rise to multiplicity is key to grasping the relationship between consciousness and physical reality."
            />

            <Quote 
              text="Subjectivity and bias are not the same thing. It is arriving at the universal from the personal that is the basis of all science—even the way we do it now."
              source="Bias, Chapter 18"
              context="This distinction is crucial for understanding how subjective experience can be integrated into our scientific understanding of reality."
            />

            <Quote 
              text="If we consider the broader implications of this, metaphysics, in its true form, is a science of energy."
              source="The Whole and The Parts, Chapter 13"
              context="This points to the ultimate synthesis: a comprehensive framework that unifies our understanding of both physical and conscious aspects of reality."
            />

            {/* Call to Action */}
            <div className="text-center mt-32 mb-16">
              <h3 className="text-2xl font-light mb-6">Begin the Journey</h3>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Discover how understanding the relationship between consciousness and physical reality can transform both our scientific models and our lived experience.
              </p>
              <Link
                href="/books/science-of-energy"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get the Book
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}