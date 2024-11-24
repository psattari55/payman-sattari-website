// src/app/practice/empathy/page.tsx

'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, AlertCircle, CheckCircle, 
  Users, Brain, Activity, ArrowRight,
  Shield, Waves, Info, LucideIcon
} from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';
import InteractiveLink from '@/components/ui/InteractiveLink';

const EmpathyPage = () => {
  const [selectedAspect, setSelectedAspect] = useState(null);

  const empathyAspects = [
    {
      id: 'understanding',
      title: 'Understanding Empathy',
      subtitle: 'The Transpersonal Force',
      icon: Brain,
      color: 'purple',
      description: 'Explore empathy as the force that allows connection beyond personal boundaries',
      aspects: [
        {
          title: 'True Nature',
          points: [
            'Connection beyond self',
            'Direct knowing of other',
            'Transpersonal experience',
            'Unity in diversity'
          ]
        },
        {
          title: 'Key Qualities',
          points: [
            'Non-judgmental presence',
            'Open receptivity',
            'Genuine interest',
            'Heart-centered awareness'
          ]
        },
        {
          title: 'Common Misconceptions',
          points: [
            'Not mere sympathy',
            'Not losing boundaries',
            'Not fixing others',
            'Not emotional merging'
          ]
        }
      ]
    },
    {
      id: 'development',
      title: 'Developing Empathy',
      subtitle: 'Building Connection',
      icon: Heart,
      color: 'red',
      description: 'Learn to cultivate and strengthen your capacity for empathic connection',
      practices: [
        {
          title: 'Foundation',
          steps: [
            'Develop self-awareness',
            'Practice active listening',
            'Cultivate presence',
            'Open to experience'
          ]
        },
        {
          title: 'Progressive Practice',
          steps: [
            'Start with self-empathy',
            'Practice with safety',
            'Expand gradually',
            'Maintain boundaries'
          ]
        },
        {
          title: 'Advanced Skills',
          steps: [
            'Navigate intense emotions',
            'Hold multiple perspectives',
            'Balance connection and space',
            'Support without merging'
          ]
        }
      ]
    },
    {
      id: 'challenges',
      title: 'Common Challenges',
      subtitle: 'Working with Obstacles',
      icon: AlertCircle,
      color: 'amber',
      description: 'Address common challenges in developing and maintaining empathic connection',
      challenges: [
        {
          type: 'Emotional Overwhelm',
          signs: [
            'Energy drainage',
            'Emotional flooding',
            'Loss of boundaries',
            'Need to withdraw'
          ],
          solutions: [
            'Strengthen boundaries',
            'Practice grounding',
            'Regular self-care',
            'Maintain healthy limits'
          ]
        },
        {
          type: 'Emotional Shutdown',
          signs: [
            'Numbness or disconnection',
            'Intellectual distancing',
            'Avoidance of feeling',
            'Fear of vulnerability'
          ],
          solutions: [
            'Gentle re-engagement',
            'Safe exploration',
            'Gradual opening',
            'Professional support'
          ]
        },
        {
          type: 'Balance Issues',
          signs: [
            'Over-involvement',
            'Boundary confusion',
            'Emotional exhaustion',
            'Relationship strain'
          ],
          solutions: [
            'Clear boundaries',
            'Regular assessment',
            'Energy management',
            'Support network'
          ]
        }
      ]
    },
    {
      id: 'integration',
      title: 'Integration',
      subtitle: 'Balancing Connection & Self',
      icon: Waves,
      color: 'blue',
      description: 'Learn to maintain healthy balance between connection and boundaries',
      aspects: [
        {
          title: 'Healthy Balance',
          indicators: [
            'Clear yet connected',
            'Open yet bounded',
            'Present yet separate',
            'Engaged yet whole'
          ]
        },
        {
          title: 'Practice Tools',
          tools: [
            'Regular check-ins',
            'Energy awareness',
            'Boundary maintenance',
            'Self-connection'
          ]
        },
        {
          title: 'Sustainable Practice',
          principles: [
            'Consistent self-care',
            'Clear communication',
            'Regular reflection',
            'Community support'
          ]
        }
      ]
    }
  ];

  const AspectCard = ({ aspect }) => {
    const isSelected = selectedAspect?.id === aspect.id;
    return (
      <motion.div 
        whileHover={{ y: -2 }}
        className={`bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300
          ${isSelected ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
        onClick={() => setSelectedAspect(aspect)}
      >
        <div className={`bg-${aspect.color}-50 p-6`}>
          <div className="flex items-center justify-between">
            <aspect.icon className={`w-6 h-6 text-${aspect.color}-600`} />
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
          <h3 className="mt-4 text-xl font-light text-gray-900">{aspect.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{aspect.subtitle}</p>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6">{aspect.description}</p>
          
          {isSelected && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6 border-t border-gray-100 pt-6"
            >
              {aspect.aspects && aspect.aspects.map((item, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                  <div className="grid gap-2">
                    {item.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Info className={`w-4 h-4 text-${aspect.color}-600`} />
                        <span className="text-gray-600">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {aspect.practices && aspect.practices.map((practice, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium text-gray-900">{practice.title}</h4>
                  <div className="grid gap-2">
                    {practice.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className={`w-4 h-4 text-${aspect.color}-600`} />
                        <span className="text-gray-600">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {aspect.challenges && aspect.challenges.map((challenge, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{challenge.type}</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Signs:</p>
                        <div className="grid gap-2">
                          {challenge.signs.map((sign, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <AlertCircle className="w-4 h-4 text-amber-500" />
                              <span className="text-gray-600">{sign}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Solutions:</p>
                        <div className="grid gap-2">
                          {challenge.solutions.map((solution, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <CheckCircle className={`w-4 h-4 text-${aspect.color}-600`} />
                              <span className="text-gray-600">{solution}</span>
                            </div>
                          ))}
                        </div>
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
              <div className="inline-flex items-center gap-2 text-red-600 mb-6">
                <Heart className="w-6 h-6" />
                <span className="text-sm uppercase tracking-wide">Practical Application</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
                Empathy
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                The Art of Connection
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the transpersonal force that allows genuine connection beyond personal
                boundaries while maintaining healthy separation and individual integrity.
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
              {/* Left Column - Aspect Cards */}
              <div className="space-y-6">
                {empathyAspects.map((aspect, index) => (
                  <motion.div
                    key={aspect.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <AspectCard aspect={aspect} />
                  </motion.div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Understanding True Empathy */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">True Empathy</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Essential Nature</h4>
                        <div className="space-y-2">
                          {[
                            'Transpersonal connection',
                            'Direct understanding',
                            'Heart-centered awareness',
                            'Conscious presence'
                          ].map((point, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-gray-600">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Not About</h4>
                        <div className="space-y-2">
                          {[
                            'Losing personal boundaries',
                            'Taking on others\' emotions',
                            'Fixing others\' problems',
                            'Emotional dependency'
                          ].map((point, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <AlertCircle className="w-4 h-4 text-red-600" />
                              <span className="text-gray-600">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Balance with Boundaries */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">Balance with Boundaries</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        'Clear separation enables true connection',
                        'Boundaries protect empathic capacity',
                        'Balance openness with structure',
                        'Self-care supports sustained connection'
                      ].map((insight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Shield className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
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

export default EmpathyPage;