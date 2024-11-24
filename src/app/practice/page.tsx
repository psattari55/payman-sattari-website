// src/app/practice/page.tsx
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Scale, Heart, Shield, ArrowRight, Unplug, Brain } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';
import InteractiveLink from '@/components/ui/InteractiveLink';

const PracticePage = () => {
  // Main practice categories with their subsections
  const mainPractices = [
    {
      id: 'inwardness',
      title: 'Inwardness',
      subtitle: 'The Foundation',
      description: 'Learn to look inward, understand what you find, and maintain objective awareness',
      color: 'bg-blue-500',
      icon: Eye,
      sections: [
        { name: 'Meditation', description: 'The art of looking inward' },
        { name: 'Inner Landscape', description: 'Understanding what we find' },
        { name: 'Detachment', description: 'Creating space to see clearly' }
      ]
    },
    {
      id: 'balance',
      title: 'Balance',
      subtitle: 'Energy Dynamics',
      description: 'Understand and work with complementary forces in consciousness',
      color: 'bg-purple-500',
      icon: Scale,
      sections: [
        { name: 'Complementary Forces', description: 'Understanding natural opposites' },
        { name: 'Dynamic Harmony', description: 'Working with energy patterns' }
      ]
    },
    {
      id: 'discipline',
      title: 'Discipline',
      subtitle: 'Love & Limits',
      description: 'Create healthy structure through the balance of love and limits',
      color: 'bg-indigo-500',
      icon: Brain,
      sections: [
        { name: 'Understanding Discipline', description: 'Beyond control and permissiveness' },
        { name: 'Practical Application', description: 'Building healthy structure' }
      ]
    }
  ];

  const practicalApplications = [
    {
      id: 'boundaries',
      title: 'Boundaries',
      subtitle: 'The Personal Force',
      description: 'Learn to recognize, communicate, and maintain healthy limits',
      color: 'bg-red-500',
      icon: Shield
    },
    {
      id: 'empathy',
      title: 'Empathy',
      subtitle: 'The Transpersonal Force',
      description: 'Develop genuine connection while maintaining healthy separation',
      color: 'bg-green-500',
      icon: Heart
    }
  ];

  const PracticeCard = ({ practice, isMain = false }) => {
    const Icon = practice.icon;
    return (
      <motion.div 
        whileHover={{ y: -4 }}
        className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
      >
        <div className={`${practice.color} bg-opacity-10 p-6`}>
          <div className="flex items-center justify-between">
            <Icon className={`w-6 h-6 ${practice.color.replace('bg-', 'text-')}`} />
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
          <h3 className="mt-4 text-xl font-light tracking-wide text-gray-900">{practice.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{practice.subtitle}</p>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">{practice.description}</p>
          {isMain && practice.sections && (
            <div className="space-y-3 mt-4 border-t pt-4">
              {practice.sections.map(section => (
                <div key={section.name} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-200" />
                  <span className="text-sm text-gray-600">{section.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
                Core Practices
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive framework for conscious development through understanding and working with the fundamental forces that shape experience.
              </p>
            </motion.div>

            {/* Foundation Practices */}
            <div className="mb-16">
              <h2 className="text-2xl font-light mb-8 text-gray-900">Foundation</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {mainPractices.map((practice, index) => (
                  <motion.div
                    key={practice.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <PracticeCard practice={practice} isMain={true} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Practical Applications */}
            <div>
              <h2 className="text-2xl font-light mb-8 text-gray-900">Practical Applications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {practicalApplications.map((practice, index) => (
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
            </div>

            {/* Integration Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 rounded-lg border border-gray-100 overflow-hidden bg-white"
            >
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <h2 className="text-xl font-light text-gray-900">The Path of Integration</h2>
              </div>
              <div className="p-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    These practices work together to create a complete system of conscious development. 
                    Beginning with inward attention, we learn to understand and work with the forces that 
                    shape our experience. This understanding then manifests through practical applications 
                    that transform our relationship with ourselves and others.
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

export default PracticePage;