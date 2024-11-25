// src/app/practice/inwardness/page.tsx

'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Map, Unplug, ArrowRight, BookOpen, Brain, PlayCircle } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';
import InteractiveLink from '@/components/ui/InteractiveLink';
import Link from 'next/link';

const InwardnessPage = () => {
  const practices = [
    {
      id: 'meditation',
      title: 'Meditation',
      subtitle: 'The Art of Turning Inward',
      description: 'Learn the foundational practice of turning attention inward and creating space for inner experience.',
      icon: Eye,
      color: 'blue',
      practices: [
        { name: 'Inner Attention',},
        { name: 'Being the Observer',},
        { name: 'Working With Energy',}
      ]
    },
    {
      id: 'landscape',
      title: 'Identifying Inner Entities',
      subtitle: 'Navigating the Inner Landscape',
      description: 'Explore and understand the various elements that make up your inner world.',
      icon: Map,
      color: 'purple',
      entities: [
        { name: 'Thoughts', description: 'Mental patterns and formations' },
        { name: 'Feelings', description: 'Emotional and sensory experiences' },
        { name: 'Ego', description: 'The personality structure' },
        { name: 'Body', description: 'Physical sensations and awareness' }
      ]
    },
    {
      id: 'detachment',
      title: 'Detachment',
      subtitle: 'Creating Objectivity in Inner Space',
      description: 'Learn the art of detachment to gain clarity and freedom in your inner work.',
      icon: Unplug,
      color: 'indigo',
      areas: [
        { aspect: 'Body', principle: 'I have a body, but I am not my body' },
        { aspect: 'Thoughts', principle: 'I have thoughts, but I am not my thoughts' },
        { aspect: 'Feelings', principle: 'I have feelings, but I am not my feelings' },
        { aspect: 'Ego', principle: 'I have a personality, but I am not my personality' }
      ]
    }
  ];

  const PracticeCard = ({ practice }) => {
    const Icon = practice.icon;
    return (
      <Link href={`/practice/inwardness/${practice.id}`} passHref>
      <motion.div 
        whileHover={{ y: -4 }}
        className={`bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300`}
      >
        <div className={`bg-${practice.color}-500 bg-opacity-10 p-6`}>
          <div className="flex items-center justify-between">
            <Icon className={`w-6 h-6 text-${practice.color}-600`} />
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
          <h3 className="mt-4 text-xl font-light tracking-wide text-gray-900">{practice.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{practice.subtitle}</p>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-6">{practice.description}</p>
          
          {practice.practices && (
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Key Practices</h4>
              {practice.practices.map(p => (
                <div key={p.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <PlayCircle className="w-4 h-4 text-gray-400" />
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
          )}

          {practice.entities && (
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Inward Entities</h4>
              {practice.entities.map(entity => (
                <div key={entity.name} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2" />
                  <div>
                    <span className="font-medium text-sm">{entity.name}</span>
                    <p className="text-sm text-gray-600">{entity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {practice.areas && (
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Areas of Practice</h4>
              {practice.areas.map(area => (
                <div key={area.aspect} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2" />
                  <div>
                    <span className="font-medium text-sm">{area.aspect}</span>
                    <p className="text-sm text-gray-600 italic">"{area.principle}"</p>
                  </div>
                </div>
              ))}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 text-blue-600 mb-6">
                <Eye className="w-6 h-6" />
                <span className="text-sm uppercase tracking-wide">Core Practice</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
                Inwardness
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                The Art of Inner Attention
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the foundation of all inner work through three essential practices: 
                looking inward (meditation), understanding what we find, and maintaining clear awareness.
              </p>
            </motion.div>

            {/* Practice Cards */}
            <div className="grid md:grid-cols-3 gap-6">
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

            {/* Integration Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 rounded-lg border border-gray-100 overflow-hidden bg-white"
            >
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <h2 className="text-xl font-light text-gray-900">The Journey Inward</h2>
              </div>
              <div className="p-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    These three practices work together to create a solid foundation for your inner work. 
                    We begin by learning to how to sustain our attention inwardly, then develop an understanding of what we find (the inner landscape), 
                    and finally how to have enough distance from those forces to maintain clarity and objectivity. This creates the 
                    foundation for all other practices and development.
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

export default InwardnessPage;