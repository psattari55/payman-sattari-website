// src/app/practice/balance/page.tsx

'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, Brain, Heart, ArrowRight, Eye, 
  Lightbulb, AlertCircle, ArrowLeftRight,
  Globe, User, Compass
} from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';
import InteractiveLink from '@/components/ui/InteractiveLink';

const BalancePage = () => {
  const [selectedPair, setSelectedPair] = useState(null);

  const complementaryPairs = [
    {
      id: 'sense-intellect',
      title: 'Sense & Intellect',
      leftSide: 'Sense',
      rightSide: 'Intellect',
      icon: Brain,
      color: 'blue',
      description: 'The dynamic between direct sensory knowing and rational understanding',
      characteristics: {
        left: ['Immediate knowing', 'Direct experience', 'Felt sense', 'Intuitive grasp'],
        right: ['Logical analysis', 'Conceptual understanding', 'Rational thought', 'Systematic approach']
      },
      signs: {
        imbalanceLeft: 'Over-reliance on intuition without verification',
        imbalanceRight: 'Excessive analysis paralysis without trust in direct knowing',
        balance: 'Integration of intuitive and analytical understanding'
      },
      practices: [
        'Notice when you favor one mode over another',
        'Practice switching between modes consciously',
        'Use both in decision-making',
        'Validate intuition with analysis and vice versa'
      ]
    },
    {
      id: 'inner-outer',
      title: 'Inner & Outer',
      leftSide: 'Inner',
      rightSide: 'Outer',
      icon: Compass,
      color: 'purple',
      description: 'The relationship between internal experience and external reality',
      characteristics: {
        left: ['Subjective experience', 'Personal reality', 'Internal world', 'Private space'],
        right: ['Objective reality', 'External world', 'Shared experience', 'Public space']
      },
      signs: {
        imbalanceLeft: 'Excessive introversion, losing touch with outer world',
        imbalanceRight: 'Over-focus on external without inner reflection',
        balance: 'Harmonious flow between inner and outer life'
      },
      practices: [
        'Regular time for both solitude and engagement',
        'Connect inner experience with outer activity',
        'Balance reflection and action',
        'Maintain awareness of both realms'
      ]
    },
    {
      id: 'individual-collective',
      title: 'Individual & Collective',
      leftSide: 'Individual',
      rightSide: 'Collective',
      icon: User,
      color: 'green',
      description: 'The balance between personal and communal aspects of experience',
      characteristics: {
        left: ['Personal uniqueness', 'Individual perspective', 'Self-expression', 'Autonomy'],
        right: ['Shared experience', 'Community wisdom', 'Collective harmony', 'Integration']
      },
      signs: {
        imbalanceLeft: 'Excessive individualism, isolation',
        imbalanceRight: 'Loss of personal identity in group',
        balance: 'Unique expression within community'
      },
      practices: [
        'Honor both personal and shared wisdom',
        'Find individual role in collective',
        'Balance autonomy and connection',
        'Contribute uniquely to whole'
      ]
    },
    {
      id: 'universal-particular',
      title: 'Universal & Particular',
      leftSide: 'Universal',
      rightSide: 'Particular',
      icon: Globe,
      color: 'indigo',
      description: 'The relationship between universal principles and specific manifestations',
      characteristics: {
        left: ['Universal truth', 'Overarching principles', 'Unified understanding', 'Wholeness'],
        right: ['Specific instances', 'Unique expressions', 'Individual cases', 'Details']
      },
      signs: {
        imbalanceLeft: 'Over-generalization, missing specifics',
        imbalanceRight: 'Lost in details, missing larger patterns',
        balance: 'Understanding both principle and manifestation'
      },
      practices: [
        'See universal in particular',
        'Connect specific to general',
        'Balance broad and detailed view',
        'Find principles in practice'
      ]
    }
  ];

  const PolarityCard = ({ pair }) => {
    const isSelected = selectedPair?.id === pair.id;
    return (
      <motion.div 
        whileHover={{ y: -2 }}
        className={`bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300
          ${isSelected ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
        onClick={() => setSelectedPair(pair)}
      >
        <div className={`bg-${pair.color}-50 p-6`}>
          <div className="flex items-center justify-between">
            <pair.icon className={`w-6 h-6 text-${pair.color}-600`} />
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
          <h3 className="mt-4 text-xl font-light text-gray-900">{pair.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{pair.description}</p>
        </div>
        
        {isSelected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-t border-gray-100"
          >
            {/* Polarity Display */}
            <div className="p-6 grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-gray-900">{pair.leftSide}</h4>
                <div className="space-y-1">
                  {pair.characteristics.left.map((char, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                      <span>{char}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-gray-900">{pair.rightSide}</h4>
                <div className="space-y-1">
                  {pair.characteristics.right.map((char, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                      <span>{char}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Balance Indicators */}
            <div className="p-6 border-t border-gray-100">
              <h4 className="font-medium text-gray-900 mb-4">Recognition & Practice</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-red-600 mb-1">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Imbalance Signs</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <p className="text-sm text-gray-600">{pair.signs.imbalanceLeft}</p>
                    <p className="text-sm text-gray-600">{pair.signs.imbalanceRight}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-green-600 mb-1">
                    <Scale className="w-4 h-4" />
                    <span className="text-sm font-medium">Balance Indicator</span>
                  </div>
                  <p className="text-sm text-gray-600">{pair.signs.balance}</p>
                </div>
              </div>
            </div>

            {/* Practices */}
            <div className="p-6 border-t border-gray-100">
              <h4 className="font-medium text-gray-900 mb-3">Balance Practices</h4>
              <div className="space-y-2">
                {pair.practices.map((practice, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Eye className={`w-4 h-4 text-${pair.color}-600`} />
                    <span className="text-gray-600">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
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
                <Scale className="w-6 h-6" />
                <span className="text-sm uppercase tracking-wide">Core Practice</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
                Balance
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Understanding Energy Dynamics
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learn to recognize and work with the complementary forces that shape experience,
                finding dynamic harmony through understanding and conscious practice.
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
              {/* Left Column - Polarity Cards */}
              <div className="space-y-6">
                {complementaryPairs.map((pair, index) => (
                  <motion.div
                    key={pair.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <PolarityCard pair={pair} />
                  </motion.div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Understanding Balance */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">Understanding Balance</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        'Balance is dynamic, not static',
                        'Each force has its value and purpose',
                        'Imbalance creates tension and discomfort',
                        'Balance brings harmony and flow'
                      ].map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Lightbulb className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Practice Tips */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">Working with Forces</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        'Start with recognition',
                        'Notice natural tendencies',
                        'Work with one pair at a time',
                        'Use senses as guide'
                      ].map((tip, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <ArrowLeftRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{tip}</span>
                        </div>
                      ))}
                    </div>
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

export default BalancePage;