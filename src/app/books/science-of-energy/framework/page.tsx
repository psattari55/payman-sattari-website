// src/app/books/science-of-energy/framework/page.tsx
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';

const DualityCard = ({ 
  title, 
  leftSide, 
  rightSide, 
  description,
  example
}: { 
  title: string;
  leftSide: string;
  rightSide: string;
  description: string;
  example: string;
}) => (
  <motion.div 
    className="bg-white rounded-xl border border-gray-200 p-8"
    whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
    transition={{ duration: 0.2 }}
  >
    <h3 className="text-xl font-medium mb-6">{title}</h3>
    
    <div className="flex items-center gap-4 mb-6">
      <div className="flex-1 p-4 bg-blue-50 rounded-lg text-center">
        {leftSide}
      </div>
      <ArrowRight className="w-6 h-6 text-gray-400" />
      <div className="flex-1 p-4 bg-purple-50 rounded-lg text-center">
        {rightSide}
      </div>
    </div>
    
    <p className="text-gray-600 mb-4">{description}</p>
    
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="text-sm text-gray-600">
        <span className="font-medium">Example: </span>
        {example}
      </p>
    </div>
  </motion.div>
);

export default function Framework() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-light mb-6">Theoretical Framework</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A unified approach to understanding reality through fundamental dualities that bridge consciousness and physical existence
              </p>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-16">
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 mb-6">
                  Reality emerges through the interplay of complementary forces. Understanding these fundamental dualities and their relationships reveals how consciousness and physical reality are two aspects of the same underlying order.
                </p>
                <p className="text-gray-600">
                  Each duality represents a spectrum with two poles. These poles are not mutually exclusive but complementary, like two faces of the same coin. Together, they form the architecture of both our experience and the physical world.
                </p>
              </div>
            </div>

            {/* Core Dualities */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <DualityCard
                title="Subject & Object"
                leftSide="The Observer"
                rightSide="The Observed"
                description="The fundamental relationship between consciousness (the experiencer) and physical reality (that which is experienced)."
                example="Your consciousness as you read these words (subject) and the words themselves (object)."
              />
              
              <DualityCard
                title="Continuous & Discrete"
                leftSide="Unbroken Whole"
                rightSide="Distinct Parts"
                description="The relationship between undivided wholeness and the distinct elements that emerge from it."
                example="A quantum field (continuous) and the particles that emerge from it (discrete)."
              />
              
              <DualityCard
                title="Measurable & Immeasurable"
                leftSide="Quantitative"
                rightSide="Qualitative"
                description="The distinction between aspects of reality that can be measured physically and those that can only be experienced."
                example="The temperature of water (measurable) versus the feeling of warmth (immeasurable)."
              />
              
              <DualityCard
                title="Universal & Relative"
                leftSide="Objective Truth"
                rightSide="Personal Truth"
                description="The relationship between what is true for all observers irrespective of their position, and what is true for one observer from their unique frame of reference."
                example="The laws governing reality (universal) versus how reality manifests for individual consciousness (relative)."
                />
            </div>

            {/* Integration Section */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-light mb-6">Understanding Through Integration</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                These dualities are not separate systems but aspects of a single, unified reality. By understanding their relationships and interactions, we can bridge the gap between physical science and conscious experience.
              </p>
              <Link
                href="/books/science-of-energy/understanding"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Explore Practical Integration
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}