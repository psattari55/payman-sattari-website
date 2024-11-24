// src/app/practice/inwardness/landscape/page.tsx

'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Map, Brain, Heart, User, Activity, ChevronRight, Eye, Info, Lightbulb } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';
import InteractiveLink from '@/components/ui/InteractiveLink';

const InnerLandscapePage = () => {
  const [selectedEntity, setSelectedEntity] = useState(null);

  const innerEntities = [
    {
      id: 'thoughts',
      title: 'Thoughts',
      icon: Brain,
      color: 'blue',
      description: 'Mental patterns, ideas, and internal dialogue',
      forms: [
        { type: 'Words', description: 'Internal dialogue and mental chatter' },
        { type: 'Images', description: 'Visual thoughts and mental pictures' },
        { type: 'Concepts', description: 'Abstract ideas and understanding' },
        { type: 'Memories', description: 'Past experiences recalled' }
      ],
      characteristics: [
        'Can be continuous or discrete',
        'Often involves language',
        'Can take visual or conceptual form',
        'Related to mental processing'
      ],
      recognition: [
        'Notice internal dialogue',
        'Observe thought patterns',
        'Watch how thoughts arise and fade',
        'Notice the space between thoughts'
      ]
    },
    {
      id: 'feelings',
      title: 'Feelings',
      icon: Heart,
      color: 'red',
      description: 'Emotional states and sensory experiences',
      forms: [
        { type: 'Emotions', description: 'Joy, anger, fear, love, etc.' },
        { type: 'Sensations', description: 'Physical and energetic feelings' },
        { type: 'Intuitions', description: 'Gut feelings and knowing' },
        { type: 'Moods', description: 'Overall emotional states' }
      ],
      characteristics: [
        'Wave-like nature',
        'Can be subtle or intense',
        'Often felt in the body',
        'Connected to energy movement'
      ],
      recognition: [
        'Feel emotional waves',
        'Notice bodily sensations',
        'Track energy movement',
        'Observe emotional patterns'
      ]
    },
    {
      id: 'ego',
      title: 'The Ego',
      icon: User,
      color: 'purple',
      description: 'The constructed sense of self and identity',
      forms: [
        { type: 'Identity', description: 'Who we think we are' },
        { type: 'Stories', description: 'Personal narratives we maintain' },
        { type: 'Roles', description: 'Ways we define ourselves' },
        { type: 'Beliefs', description: 'Core assumptions about self' }
      ],
      characteristics: [
        'Built from experiences',
        'Maintains self-image',
        'Seeks validation',
        'Resists change'
      ],
      recognition: [
        'Notice self-referential thoughts',
        'Observe defensive reactions',
        'Watch identity attachments',
        'See how self-image forms'
      ]
    },
    {
      id: 'body',
      title: 'The Body',
      icon: Activity,
      color: 'green',
      description: 'Physical sensations and bodily awareness',
      forms: [
        { type: 'Sensations', description: 'Physical feelings and awareness' },
        { type: 'Energy', description: 'Vitality and life force' },
        { type: 'Movement', description: 'Internal motion and flow' },
        { type: 'States', description: 'Overall physical conditions' }
      ],
      characteristics: [
        'Direct experience',
        'Always present',
        'Contains wisdom',
        'Reflects inner state'
      ],
      recognition: [
        'Feel physical sensations',
        'Notice breath and heartbeat',
        'Track energy movement',
        'Observe tension patterns'
      ]
    }
  ];

  const EntityCard = ({ entity }) => {
    const Icon = entity.icon;
    const isSelected = selectedEntity?.id === entity.id;

    return (
      <motion.div 
        whileHover={{ y: -2 }}
        className={`bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300
          ${isSelected ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
        onClick={() => setSelectedEntity(entity)}
      >
        <div className={`bg-${entity.color}-50 p-6`}>
          <div className="flex items-center justify-between">
            <Icon className={`w-6 h-6 text-${entity.color}-600`} />
            <ChevronRight className={`w-5 h-5 text-${entity.color}-400`} />
          </div>
          <h3 className="mt-4 text-xl font-light text-gray-900">{entity.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{entity.description}</p>
        </div>
        
        {isSelected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 border-t border-gray-100"
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Forms & Manifestations</h4>
                <div className="grid gap-3">
                  {entity.forms.map(form => (
                    <div key={form.type} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2" />
                      <div>
                        <span className="font-medium text-sm">{form.type}</span>
                        <p className="text-sm text-gray-600">{form.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Recognition Practice</h4>
                <div className="space-y-2">
                  {entity.recognition.map((practice, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <span>{practice}</span>
                    </div>
                  ))}
                </div>
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
                <Map className="w-6 h-6" />
                <span className="text-sm uppercase tracking-wide">Inwardness Practice</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
                Inner Landscape
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Understanding What We Find
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                As we look inward, we encounter various elements of our inner world. Learning to
                recognize and understand these elements is essential for conscious development.
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
              {/* Left Column - Entity Cards */}
              <div className="space-y-6">
                {innerEntities.map((entity, index) => (
                  <motion.div
                    key={entity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <EntityCard entity={entity} />
                  </motion.div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Understanding Section */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">Key Understanding</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        'Each element has its own nature and patterns',
                        'Elements interact and influence each other',
                        'Recognition improves with practice',
                        'Understanding leads to conscious work'
                      ].map((point, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Practice Tips */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">Practice Tips</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        'Start with one element at a time',
                        'Notice without trying to change',
                        'Build recognition gradually',
                        'Use meditation as foundation'
                      ].map((tip, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
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

export default InnerLandscapePage;