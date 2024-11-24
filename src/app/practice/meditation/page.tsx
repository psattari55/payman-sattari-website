// src/app/practice/meditation/page.tsx

'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, BookOpen, Clock, Brain, ArrowRight, Heart, Shield, Unplug } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';
import InteractiveLink from '@/components/ui/InteractiveLink';

const MeditationPage = () => {
  const [activeTab, setActiveTab] = useState('understanding');
  
  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
        ${activeTab === id 
          ? 'bg-blue-50 text-blue-600' 
          : 'text-gray-600 hover:bg-gray-50'
        }`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );

  const PracticeCard = ({ title, duration, level, description }) => (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600">{duration}</span>
          </div>
          <span className="text-sm text-gray-500">{level}</span>
        </div>
        <h3 className="text-xl font-light text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
          <span>Begin Practice</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
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
                Meditation
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                The Art of Turning Inward
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the foundation of all inner work through the practice of conscious attention and presence.
              </p>
            </motion.div>

            {/* Navigation Tabs */}
            <div className="flex justify-center gap-4 mb-12">
              <TabButton id="understanding" label="Understanding" icon={BookOpen} />
              <TabButton id="practice" label="Practice" icon={Brain} />
              <TabButton id="resources" label="Resources" icon={BookOpen} />
            </div>

            {/* Main Content Area */}
            <div className="grid md:grid-cols-[2fr,1fr] gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-light text-gray-900">Understanding Meditation</h2>
                  <p>
                    Meditation is not about emptying the mind or achieving a particular state. 
                    It's the art of turning attention inward and being present with whatever we find. 
                    This foundational practice develops our capacity for conscious awareness and creates 
                    the space needed for all other practices.
                  </p>
                  <h3 className="text-xl font-light">Key Principles</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <Eye className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <strong className="text-gray-900">Inner Attention</strong>
                        <p className="text-gray-600">
                          Learning to direct and sustain attention on our inner experience
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <Brain className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <strong className="text-gray-900">Present Awareness</strong>
                        <p className="text-gray-600">
                          Developing the capacity to remain present with our experience
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Practice Cards */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-light text-gray-900">Begin Practicing</h3>
                  <div className="grid gap-6">
                    <PracticeCard 
                      title="Basic Meditation"
                      duration="10 minutes"
                      level="Beginner"
                      description="A gentle introduction to inner attention and presence."
                    />
                    <PracticeCard 
                      title="Working with Thoughts"
                      duration="15 minutes"
                      level="Intermediate"
                      description="Learn to observe thoughts without getting caught in them."
                    />
                    <PracticeCard 
                      title="Deep Presence"
                      duration="20 minutes"
                      level="Advanced"
                      description="Cultivate sustained attention and deep awareness."
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Related Practices */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">Related Practices</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <InteractiveLink href="/practice/detachment" className="flex items-center gap-3">
                      <Unplug className="w-5 h-5 text-purple-600" />
                      <span>Detachment</span>
                    </InteractiveLink>
                    <InteractiveLink href="/practice/boundaries" className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-red-600" />
                      <span>Boundaries</span>
                    </InteractiveLink>
                    <InteractiveLink href="/practice/empathy" className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-green-600" />
                      <span>Empathy</span>
                    </InteractiveLink>
                  </div>
                </div>

                {/* Quick Tips */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">Practice Tips</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                          <span className="text-sm text-blue-600">1</span>
                        </div>
                        Start with short sessions and gradually increase duration
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                          <span className="text-sm text-blue-600">2</span>
                        </div>
                        Practice at the same time each day to build consistency
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                          <span className="text-sm text-blue-600">3</span>
                        </div>
                        Remember: presence, not perfection
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
};

export default MeditationPage;