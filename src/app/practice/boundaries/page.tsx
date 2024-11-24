// src/app/practice/boundaries/page.tsx

'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, AlertCircle, CheckCircle, 
  XCircle, Heart, ArrowRight, Info,
  MessageCircle, Users, Brain, Activity
} from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';
import InteractiveLink from '@/components/ui/InteractiveLink';

const BoundariesPage = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const boundaryAreas = [
    {
      id: 'recognition',
      title: 'Recognition',
      subtitle: 'Identifying Your Limits',
      icon: Brain,
      color: 'blue',
      description: 'Learn to recognize your natural boundaries and limits through inner signals',
      practices: [
        {
          title: 'Body Signals',
          description: 'Notice physical responses to boundary violations',
          signs: [
            'Tension or constriction',
            'Energy drainage',
            'Physical discomfort',
            'Wanting to withdraw'
          ]
        },
        {
          title: 'Emotional Signals',
          description: 'Identify emotional indicators of boundary needs',
          signs: [
            'Rising frustration',
            'Feeling overwhelmed',
            'Resentment building',
            'Emotional exhaustion'
          ]
        },
        {
          title: 'Mental Signals',
          description: 'Recognize thought patterns indicating boundary needs',
          signs: [
            'Recurring thoughts of obligation',
            'Mental resistance',
            'Difficulty focusing',
            'Racing thoughts'
          ]
        }
      ]
    },
    {
      id: 'communication',
      title: 'Communication',
      subtitle: 'Expressing Your Limits',
      icon: MessageCircle,
      color: 'purple',
      description: 'Learn to communicate boundaries clearly and respectfully',
      practices: [
        {
          title: 'Clear Expression',
          description: 'Techniques for communicating boundaries',
          steps: [
            'Use clear, direct language',
            'Focus on "I" statements',
            'State needs positively',
            'Avoid over-explaining'
          ]
        },
        {
          title: 'Common Challenges',
          description: 'Navigating difficult conversations',
          challenges: [
            'Handling pushback',
            'Managing guilt',
            'Staying firm yet kind',
            'Maintaining connection'
          ]
        },
        {
          title: 'Key Phrases',
          description: 'Useful expressions for setting boundaries',
          examples: [
            '"I need..." statements',
            '"This doesn\'t work for me"',
            '"I\'m not available for..."',
            'Clear "yes" and "no"'
          ]
        }
      ]
    },
    {
      id: 'relationships',
      title: 'Relationships',
      subtitle: 'Managing Boundaries with Others',
      icon: Users,
      color: 'green',
      description: 'Navigate boundaries in different types of relationships',
      contexts: [
        {
          type: 'Family',
          challenges: [
            'Historical patterns',
            'Deep emotional ties',
            'Established expectations',
            'Complex dynamics'
          ],
          strategies: [
            'Start with small changes',
            'Be consistent over time',
            'Acknowledge emotions',
            'Maintain connection'
          ]
        },
        {
          type: 'Work',
          challenges: [
            'Professional expectations',
            'Power dynamics',
            'Time management',
            'Role obligations'
          ],
          strategies: [
            'Set clear parameters',
            'Document agreements',
            'Professional communication',
            'Regular review'
          ]
        },
        {
          type: 'Friends',
          challenges: [
            'Fear of losing connection',
            'Unclear expectations',
            'Social pressure',
            'Maintaining balance'
          ],
          strategies: [
            'Open dialogue',
            'Clear communication',
            'Mutual respect',
            'Regular check-ins'
          ]
        }
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      subtitle: 'Sustaining Healthy Boundaries',
      icon: Activity,
      color: 'red',
      description: 'Learn to maintain boundaries over time while preserving relationships',
      practices: [
        {
          title: 'Regular Review',
          description: 'Assessing and adjusting boundaries',
          steps: [
            'Check energy levels',
            'Monitor relationships',
            'Assess effectiveness',
            'Make adjustments'
          ]
        },
        {
          title: 'Common Challenges',
          description: 'Handling ongoing issues',
          challenges: [
            'Boundary erosion',
            'Relationship changes',
            'New situations',
            'Internal resistance'
          ]
        },
        {
          title: 'Long-term Success',
          description: 'Keys to sustainable boundaries',
          keys: [
            'Consistent practice',
            'Regular reflection',
            'Ongoing adjustment',
            'Self-compassion'
          ]
        }
      ]
    }
  ];

  const BoundaryCard = ({ area }) => {
    const isSelected = selectedArea?.id === area.id;
    return (
      <motion.div 
        whileHover={{ y: -2 }}
        className={`bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300
          ${isSelected ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
        onClick={() => setSelectedArea(area)}
      >
        <div className={`bg-${area.color}-50 p-6`}>
          <div className="flex items-center justify-between">
            <area.icon className={`w-6 h-6 text-${area.color}-600`} />
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
          <h3 className="mt-4 text-xl font-light text-gray-900">{area.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{area.subtitle}</p>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6">{area.description}</p>
          
          {isSelected && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6 border-t border-gray-100 pt-6"
            >
              {area.practices && area.practices.map((practice, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium text-gray-900">{practice.title}</h4>
                  <p className="text-sm text-gray-600">{practice.description}</p>
                  <div className="grid gap-2">
                    {practice.signs && practice.signs.map((sign, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Brain className={`w-4 h-4 text-${area.color}-600`} />
                        <span className="text-gray-600">{sign}</span>
                      </div>
                    ))}
                    {practice.steps && practice.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className={`w-4 h-4 text-${area.color}-600`} />
                        <span className="text-gray-600">{step}</span>
                      </div>
                    ))}
                    {practice.challenges && practice.challenges.map((challenge, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-amber-500" />
                        <span className="text-gray-600">{challenge}</span>
                      </div>
                    ))}
                    {practice.examples && practice.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <MessageCircle className={`w-4 h-4 text-${area.color}-600`} />
                        <span className="text-gray-600">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              {area.contexts && area.contexts.map((context, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium text-gray-900">{context.type}</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Challenges:</p>
                      <div className="grid gap-2">
                        {context.challenges.map((challenge, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <AlertCircle className="w-4 h-4 text-amber-500" />
                            <span className="text-gray-600">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Strategies:</p>
                      <div className="grid gap-2">
                        {context.strategies.map((strategy, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className={`w-4 h-4 text-${area.color}-600`} />
                            <span className="text-gray-600">{strategy}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
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
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 text-blue-600 mb-6">
                <Shield className="w-6 h-6" />
                <span className="text-sm uppercase tracking-wide">Practical Application</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
                Boundaries
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                The Art of Healthy Limits
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learn to recognize, communicate, and maintain healthy boundaries while preserving
                connection and relationship. Transform your understanding of limits into practical skills.
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
              {/* Left Column - Boundary Areas */}
              <div className="space-y-6">
                {boundaryAreas.map((area, index) => (
                  <motion.div
                    key={area.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <BoundaryCard area={area} />
                  </motion.div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Understanding Boundaries */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">Understanding Boundaries</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Key Principles</h4>
                        <div className="space-y-2">
                          {[
                            'Boundaries define and protect',
                            'Clear limits create safety',
                            'Healthy separation enables connection',
                            'Boundaries support growth'
                          ].map((point, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-gray-600">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Common Misconceptions</h4>
                        <div className="space-y-2">
                          {[
                            'Boundaries block connection',
                            'Setting limits is selfish',
                            'Boundaries create distance',
                            'Clear limits hurt others'
                          ].map((point, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <XCircle className="w-4 h-4 text-red-600" />
                              <span className="text-gray-600">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection with Theory */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">Deeper Understanding</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        'Boundaries are natural energy limits',
                        'Clear limits enable genuine connection',
                        'Balance structure with openness',
                        'Healthy boundaries support both self and other'
                      ].map((insight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{insight}</span>
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

export default BoundariesPage;