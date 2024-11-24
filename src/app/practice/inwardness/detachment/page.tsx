// src/app/practice/inwardness/detachment/page.tsx

'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Unplug, Brain, Heart, User, Activity, 
  Eye, AlertCircle, CheckCircle, XCircle, 
  PlayCircle, Info, ArrowRight 
} from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';
import InteractiveLink from '@/components/ui/InteractiveLink';

const DetachmentPage = () => {
  const [selectedPractice, setSelectedPractice] = useState(null);

  const disidentificationPractices = [
    {
      id: 'thoughts',
      title: 'From Thoughts',
      icon: Brain,
      color: 'blue',
      principle: 'I have thoughts, but I am not my thoughts',
      description: 'Learn to observe mental activity without becoming entangled.',
      practice: [
        'Notice thoughts arising',
        'Watch without engaging',
        'Let them pass naturally',
        'Return to observer position'
      ],
      commonPatterns: [
        'Mental dialogue',
        'Recurring worries',
        'Future planning',
        'Past replays'
      ]
    },
    {
      id: 'feelings',
      title: 'From Feelings',
      icon: Heart,
      color: 'red',
      principle: 'I have feelings, but I am not my feelings',
      description: 'Experience emotions while maintaining witness awareness.',
      practice: [
        'Feel without merging',
        'Allow emotional movement',
        'Stay present with intensity',
        'Maintain observer space'
      ],
      commonPatterns: [
        'Emotional waves',
        'Reactive patterns',
        'Mood fluctuations',
        'Energy movements'
      ]
    },
    {
      id: 'ego',
      title: 'From Ego',
      icon: User,
      color: 'purple',
      principle: 'I have a personality, but I am not my personality',
      description: 'Recognize the constructed nature of identity and self-image.',
      practice: [
        'Notice self-referential thoughts',
        'Watch identity reactions',
        'Observe ego patterns',
        'Stay in witness position'
      ],
      commonPatterns: [
        'Self-image defense',
        'Identity attachments',
        'Personal stories',
        'Role identification'
      ]
    },
    {
      id: 'body',
      title: 'From Body',
      icon: Activity,
      color: 'green',
      principle: 'I have a body, but I am not my body',
      description: 'Experience physical sensations while maintaining awareness.',
      practice: [
        'Feel bodily sensations',
        'Notice physical states',
        'Watch energy patterns',
        'Maintain witness perspective'
      ],
      commonPatterns: [
        'Physical reactions',
        'Tension patterns',
        'Energy blockages',
        'Somatic responses'
      ]
    }
  ];

  const PracticeCard = ({ practice }) => {
    const isSelected = selectedPractice?.id === practice.id;
    return (
      <motion.div 
        whileHover={{ y: -2 }}
        className={`bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300
          ${isSelected ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
        onClick={() => setSelectedPractice(practice)}
      >
        <div className={`bg-${practice.color}-50 p-6`}>
          <div className="flex items-center justify-between">
            <practice.icon className={`w-6 h-6 text-${practice.color}-600`} />
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
          <h3 className="mt-4 text-xl font-light text-gray-900">Detachment {practice.title}</h3>
          <p className="mt-1 text-sm text-gray-600 italic">"{practice.principle}"</p>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6">{practice.description}</p>
          
          {isSelected && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Practice Steps</h4>
                <div className="space-y-2">
                  {practice.practice.map((step, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <PlayCircle className={`w-4 h-4 text-${practice.color}-600`} />
                      <span className="text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Common Patterns</h4>
                <div className="space-y-2">
                  {practice.commonPatterns.map((pattern, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Eye className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{pattern}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };

  const ClarificationCard = () => (
    <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
        <h3 className="text-lg font-light text-gray-900">Understanding Detachment</h3>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">What Detachment Is</h4>
            <div className="space-y-2">
              {[
                'Creating space to see clearly',
                'Maintaining witness awareness',
                'Freedom from identification',
                'Objective observation'
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-gray-600">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">What Detachment Is Not</h4>
            <div className="space-y-2">
              {[
                'Disconnection or dissociation',
                'Suppression of experience',
                'Emotional numbness',
                'Rejection of parts of self'
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
  );

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
                <Unplug className="w-6 h-6" />
                <span className="text-sm uppercase tracking-wide">Inwardness Practice</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
                Detachment
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Creating Space to See Clearly
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learn the art of disidentification - maintaining conscious awareness while 
                experiencing thoughts, feelings, and sensations without becoming lost in them.
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
              {/* Left Column - Practice Cards */}
              <div className="space-y-6">
                {disidentificationPractices.map((practice, index) => (
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

              {/* Right Column */}
              <div className="space-y-6">
                <ClarificationCard />

                {/* Common Challenges */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">Common Challenges</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        {
                          challenge: 'Getting lost in experience',
                          solution: 'Practice returning to witness position'
                        },
                        {
                          challenge: 'Suppressing experience',
                          solution: 'Allow experience while maintaining space'
                        },
                        {
                          challenge: 'Confusion about identity',
                          solution: 'Remember you are the awareness'
                        },
                        {
                          challenge: 'Strong emotional states',
                          solution: 'Start with lighter experiences'
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{item.challenge}</p>
                            <p className="text-sm text-gray-600 mt-1">{item.solution}</p>
                          </div>
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

export default DetachmentPage;