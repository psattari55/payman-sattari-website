// src/app/books/series/page.tsx

'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Book, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';

const BookSection = ({ 
  number, 
  title, 
  description, 
  themes,
  status 
}: { 
  number: number;
  title: string;
  description: string;
  themes: string[];
  status: 'available' | 'forthcoming'
}) => (
  <motion.div 
    className={`bg-white rounded-xl border ${status === 'available' ? 'border-blue-200' : 'border-gray-200'} p-8`}
    whileHover={{ y: -2 }}
    transition={{ duration: 0.2 }}
  >
    <div className="grid md:grid-cols-[auto,1fr] gap-8">
      <div className="flex items-center justify-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
          status === 'available' ? 'bg-blue-50' : 'bg-gray-50'
        }`}>
          <span className={`text-2xl ${
            status === 'available' ? 'text-blue-600' : 'text-gray-400'
          }`}>{number}</span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className={`text-sm font-medium ${
            status === 'available' ? 'text-blue-600' : 'text-gray-500'
          }`}>
            {status === 'available' ? 'Available Now' : 'Coming Soon'}
          </span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>
        <h3 className="text-xl font-medium mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {themes.map((theme) => (
            <span 
              key={theme}
              className={`text-sm px-3 py-1 rounded-full ${
                status === 'available' 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'bg-gray-50 text-gray-600'
              }`}
            >
              {theme}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function SeriesOverview() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-light mb-6">The Language of Truth Series</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive framework for understanding reality, from fundamental principles to practical mastery
              </p>
            </div>

            {/* Series Overview */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-16">
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  This three-volume series presents a revolutionary framework that bridges consciousness and physical reality. Moving from foundational concepts through deep metaphysical principles to practical application, it offers both a theoretical understanding and a path to personal transformation.
                </p>
              </div>
            </div>

            {/* Book Progression */}
            <div className="space-y-8">
              <BookSection
                number={1}
                title="The Science of Energy"
                description="Establishes the foundational framework, challenging core assumptions about reality while building a bridge between physics and human experience. Through an examination of consciousness, matter, and their relationship, it lays the groundwork for understanding how reality emerges through complementary forces."
                themes={[
                  "Subject & Object",
                  "Continuous & Discrete",
                  "Measurable & Immeasurable",
                  "Truth & Reality"
                ]}
                status="available"
              />

              <BookSection
                number={2}
                title="Basic Duality"
                description="Develops the complete metaphysical system, revealing fundamental laws that govern both physical reality and consciousness. Explores how universal principles manifest across all scales of existence through primary dualities that shape space, time, identity, and truth."
                themes={[
                  "Inner & Outer",
                  "Active & Passive",
                  "Individual & Collective",
                  "True & False"
                ]}
                status="forthcoming"
              />

              <BookSection
                number={3}
                title="The Language of Truth"
                description="Culminates in practical mastery, offering a comprehensive guide to personal transformation through understanding and application of universal principles. Explores the nature of self, virtues, and the path to enlightened living."
                themes={[
                  "The Self",
                  "The Virtues",
                  "Trinity",
                  "Mastery"
                ]}
                status="forthcoming"
              />
            </div>

            {/* Journey Path */}
            <div className="bg-gray-50 rounded-xl p-8 mt-16 text-center">
              <h2 className="text-2xl font-light mb-6">Begin the Journey</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Start with Book One to establish the foundational understanding necessary for exploring deeper principles and practical applications in subsequent volumes.
              </p>
              <Link
                href="/books/science-of-energy"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Explore Book One
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}