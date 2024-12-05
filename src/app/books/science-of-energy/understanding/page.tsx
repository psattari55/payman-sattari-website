// src/app/books/science-of-energy/understanding/page.tsx

'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';

const PrincipleCard = ({
  title,
  description,
  observation,
  implication
}: {
  title: string;
  description: string;
  observation: string;
  implication: string;
}) => (
  <motion.div 
    className="bg-white rounded-xl border border-gray-200 p-8"
    whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
    transition={{ duration: 0.2 }}
  >
    <h3 className="text-xl font-medium mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Observable in Experience: </span>
          {observation}
        </p>
      </div>
      
      <div className="bg-purple-50 p-4 rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Practical Implication: </span>
          {implication}
        </p>
      </div>
    </div>
  </motion.div>
);

export default function Understanding() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-light mb-6">Understanding Through Experience</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How the fundamental principles of reality manifest in our direct experience and transform our understanding
              </p>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-16">
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 mb-6">
                  The principles that govern reality are not merely theoretical constructs—they are observable in our daily experience. Understanding how these principles manifest in our lives reveals the profound connection between consciousness and physical reality.
                </p>
              </div>
            </div>

            {/* Principles in Practice */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <PrincipleCard
                title="The Frame of Reference"
                description="Every observation occurs from a specific point in space and time, with its own unique perspective on the whole."
                observation="Your experience of any moment is uniquely yours, yet occurs within universal laws that apply to all observers."
                implication="Understanding your frame of reference helps distinguish between universal truths and relative experiences."
              />

              <PrincipleCard
                title="Perception and Reality"
                description="How we receive and interpret reality shapes our experience of it, while being governed by natural laws."
                observation="Two people can experience the same event differently, yet both experiences occur within objective reality."
                implication="Clear perception requires understanding both personal truth and universal principles."
              />

              <PrincipleCard
                title="Belief and Experience"
                description="Our beliefs about reality shape how it manifests in our relative experience, while operating within universal laws."
                observation="The depth of our conviction about something affects how fully we experience it, yet always within natural limits."
                implication="Aligning our beliefs with universal laws creates harmony between inner and outer reality."
              />

              <PrincipleCard
                title="Unity and Multiplicity"
                description="All apparent separations emerge from an underlying unity, manifesting through complementary forces."
                observation="Every experience combines universal elements (like physical laws) with unique personal aspects."
                implication="Understanding this relationship helps integrate different aspects of experience."
              />
            </div>

            {/* Integration Path */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-light mb-6">The Path of Integration</h2>
                <p className="text-gray-600 mb-8">
                  These principles offer a practical path to understanding your place in reality. By observing how they manifest in your direct experience, you can begin to align your relative truth with universal laws, creating greater harmony between inner and outer aspects of existence.
                </p>
                <div className="flex justify-center gap-4">
                  <Link
                    href="/books/science-of-energy/framework"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg hover:bg-white transition-colors"
                  >
                    Review Framework
                  </Link>
                  <Link
                    href="/books/science-of-energy"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Explore the Book
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}