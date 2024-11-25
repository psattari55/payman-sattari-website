// src/app/practice/discipline/page.tsx

'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Heart, Shield, AlertCircle, CheckCircle, 
  XCircle, Lightbulb, ArrowRight, Info, Layout 
} from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';
import InteractiveLink from '@/components/ui/InteractiveLink';

const DisciplinePage = () => {
  const [selectedAspect, setSelectedAspect] = useState(null);

  const disciplineAspects = [
    {
      id: 'limits',
      title: 'Limits',
      subtitle: 'The Force of Structure',
      icon: Shield,
      color: 'blue',
      description: 'Understanding limits as the force that provides form, structure, and healthy boundaries',
      characteristics: [
        'Creates clear structure',
        'Provides healthy containment',
        'Builds sense of safety',
        'Supports development'
      ],
      whenMissing: [
        'Environment becomes chaotic',
        'Anxiety and insecurity increase',
        'Development lacks direction',
        'Growth becomes unfocused'
      ],
      practices: [
        'Set clear boundaries',
        'Maintain consistent structure',
        'Communicate expectations',
        'Follow through consistently'
      ]
    },
    {
        id: 'love',
        title: 'Love',
        subtitle: 'The Force of Limitlessness',
        icon: Heart,
        color: 'red',
        description: 'Understanding love as the force of connection, empathy, and transcendence',
        characteristics: [
          'Creates safety and trust',
          'Allows for growth and expansion',
          'Builds genuine connection',
          'Supports emotional development'
        ],
        whenMissing: [
          'Environment feels cold and rigid',
          'Resistance and rebellion emerge',
          'Growth becomes stunted',
          'Connection is impaired'
        ],
        practices: [
          'Develop emotional presence',
          'Practice active listening',
          'Show genuine care',
          'Create safe space for expression'
        ]
    },
    {
      id: 'integration',
      title: 'Integration',
      subtitle: 'The Dance of Balance',
      icon: Layout,
      color: 'purple',
      description: 'Understanding how love and limits work together to create healthy discipline',
      characteristics: [
        'Balance of freedom and structure',
        'Clear boundaries with warmth',
        'Flexible yet consistent',
        'Supportive and growth-oriented'
      ],
      whenMissing: [
        'Swinging between extremes',
        'Inconsistent development',
        'Confusion and instability',
        'Lack of coherent growth'
      ],
      practices: [
        'Balance connection and structure',
        'Maintain boundaries with empathy',
        'Respond flexibly within limits',
        'Support growth through both forces'
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
              className="space-y-6"
            >
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Key Characteristics</h4>
                <div className="space-y-2">
                  {aspect.characteristics.map((char, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 text-${aspect.color}-600`} />
                      <span className="text-gray-600">{char}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">When Missing</h4>
                <div className="space-y-2">
                  {aspect.whenMissing.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Practices</h4>
                <div className="space-y-2">
                  {aspect.practices.map((practice, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Lightbulb className={`w-4 h-4 text-${aspect.color}-600`} />
                      <span className="text-gray-600">{practice}</span>
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
                <Layout className="w-6 h-6" />
                <span className="text-sm uppercase tracking-wide">Core Practice</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
                Discipline
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                The Dance of Love and Limits
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover how true discipline emerges through the dynamic harmony between love (limitlessness, empathy) and limits (boundaries),
                creating structures that support growth while maintaining connection.
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
              {/* Left Column - Aspect Cards */}
              <div className="space-y-6">
                {disciplineAspects.map((aspect, index) => (
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
                {/* Understanding True Discipline */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">Understanding True Discipline</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">What It Is</h4>
                        <div className="space-y-2">
                          {[
                            'Dynamic harmony of forces',
                            'Balance of structure and connection',
                            'Support for natural growth',
                            'Framework for development'
                          ].map((point, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-gray-600">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">What It's Not</h4>
                        <div className="space-y-2">
                          {[
                            'Rigid control or punishment',
                            'Permissiveness without structure',
                            'Disconnected authority',
                            'Inconsistent boundaries'
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

                {/* Key Insights */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">Key Insights</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        'Love and limits are both essential',
                        'Each force balances the other',
                        'Growth requires both support and structure',
                        'Balance creates natural harmony'
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

export default DisciplinePage;