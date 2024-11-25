// src/app/practice/practices/page.tsx

'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Heart, Shield, Brain, Code, Waves,
  Eye, ArrowRight, Info, PlayCircle
} from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';
import InteractiveLink from '@/components/ui/InteractiveLink';
import Link from 'next/link';

const PracticesPage = () => {
  const practices = [
    {
        id: 'boundaries',
        title: 'Boundaries',
        description: 'Establishing and maintaining healthy limits',
        icon: Shield,
        color: 'green',
        keyAreas: [
          'Recognition of natural limits',
          'Clear communication',
          'Relationship navigation',
          'Long-term maintenance'
        ]
      },
      {
        id: 'empathy',
        title: 'Empathy',
        description: 'Developing genuine connection while maintaining healthy separation',
        icon: Heart,
        color: 'red',
        keyAreas: [
          'Transpersonal connection',
          'Balanced engagement',
          'Emotional intelligence',
          'Sustainable practice'
        ]
      },
    {
      id: 'meditations',
      title: 'Meditations',
      description: 'Guided practices for inner work and conscious development',
      icon: Eye,
      color: 'blue',
      practices: [
        {
          name: 'Observer Meditation',
          duration: '10 min',
          level: 'Essential'
        },
        {
          name: 'Grounding Practice',
          duration: '15 min',
          level: 'Foundation'
        },
        {
          name: 'Energy Awareness',
          duration: '20 min',
          level: 'Intermediate'
        }
      ]
    },
    {
      id: 'consciousness-codes',
      title: 'Consciousness Codes',
      description: 'Tools for shifting energy and awareness',
      icon: Code,
      color: 'purple',
      examples: [
        'Moving from form to formlessness',
        'Shifting between objective/subjective',
        'Balancing inner and outer awareness',
        'Integration of opposing forces'
      ]
    }
  ];

  const PracticeCard = ({ practice }) => {
    return (
    <Link href={`/practice/${practice.id}`} passHref>
      <motion.div 
        whileHover={{ y: -2 }}
        className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
      >
        <div className={`bg-${practice.color}-50 p-6`}>
          <div className="flex items-center justify-between">
            <practice.icon className={`w-6 h-6 text-${practice.color}-600`} />
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
          <h3 className="mt-4 text-xl font-light text-gray-900">{practice.title}</h3>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6">{practice.description}</p>

          {practice.practices && (
            <div className="space-y-3">
              <h4 className="font-medium text-sm text-gray-900">Available Practices</h4>
              <div className="space-y-2">
                {practice.practices.map((p, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <PlayCircle className={`w-4 h-4 text-${practice.color}-600`} />
                      <span>{p.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <span>{p.duration}</span>
                      <span>•</span>
                      <span>{p.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {practice.examples && (
            <div className="space-y-3">
              <h4 className="font-medium text-sm text-gray-900">Example Codes</h4>
              <div className="space-y-2">
                {practice.examples.map((example, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Code className={`w-4 h-4 text-${practice.color}-600`} />
                    <span className="text-gray-600">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {practice.keyAreas && (
            <div className="space-y-3">
              <h4 className="font-medium text-sm text-gray-900">Key Areas</h4>
              <div className="space-y-2">
                {practice.keyAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Info className={`w-4 h-4 text-${practice.color}-600`} />
                    <span className="text-gray-600">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
      </Link>
    );
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 text-blue-600 mb-6">
                <BookOpen className="w-6 h-6" />
                <span className="text-sm uppercase tracking-wide">Practice Library</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
                Practices
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Tools for Conscious Development
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A collection of practical tools and techniques for working with consciousness,
                energy, and relationship. Each practice builds on the foundational understanding
                of inwardness, balance, and discipline.
              </p>
            </motion.div>

            {/* Practice Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {practices.map((practice, index) => (
                <motion.div
                  key={practice.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <PracticeCard practice={practice} />
                </motion.div>
              ))}
            </div>

            {/* Understanding Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 bg-white rounded-lg border border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <h2 className="text-xl font-light text-gray-900">Using These Practices</h2>
              </div>
              <div className="p-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    These practices are tools for applying the principles of inwardness, balance, 
                    and discipline in daily life. Each one offers a different way to work with 
                    energy and consciousness, from meditation to practical relationship skills.
                    Choose the practices that resonate with your current needs and level of
                    development.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
};

export default PracticesPage;