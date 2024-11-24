// src/app/practice/inwardness/meditation/page.tsx

'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, BookOpen, Clock, Brain, ArrowRight, PlayCircle, Info, AlertCircle, Heart } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';
import InteractiveLink from '@/components/ui/InteractiveLink';

const MeditationPage = () => {
  const [selectedPractice, setSelectedPractice] = useState(null);
  
  const practices = [
    {
      id: 'observer',
      title: 'Observer Meditation',
      duration: '10 minutes',
      level: 'Essential',
      description: 'Learn to observe your inner experience without interfering.',
      instructions: [
        'Find a comfortable seated position',
        'Close your eyes and turn attention inward',
        'Notice whatever arises without trying to change it',
        'If you get involved with thoughts, gently return to observing',
        'Maintain the position of witness to your experience'
      ]
    },
    {
      id: 'grounding',
      title: 'Grounding Meditation',
      duration: '15 minutes',
      level: 'Foundation',
      description: 'Connect with the earth and your physical presence.',
      instructions: [
        'Sit with feet firmly on the ground',
        'Imagine roots growing from your feet into the earth',
        'Feel the connection with gravity',
        'Draw energy up through your feet',
        'Maintain awareness of the earth connection'
      ]
    },
    {
      id: 'energy',
      title: 'Energy Awareness',
      duration: '20 minutes',
      level: 'Intermediate',
      description: 'Develop sensitivity to subtle energy movements.',
      instructions: [
        'Begin with centered awareness',
        'Notice subtle sensations and movements',
        'Allow attention to follow energy flows',
        'Maintain light, receptive awareness',
        'Practice staying with subtle experiences'
      ]
    }
  ];

  const PracticeCard = ({ practice }) => (
    <motion.div 
      whileHover={{ y: -2 }}
      className={`bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300
        ${selectedPractice?.id === practice.id ? 'ring-2 ring-blue-500' : ''}`}
      onClick={() => setSelectedPractice(practice)}
    >
      <div className="bg-blue-50 p-6">
        <div className="flex items-center justify-between">
          <PlayCircle className="w-6 h-6 text-blue-600" />
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{practice.duration}</span>
          </div>
        </div>
        <h3 className="mt-4 text-xl font-light text-gray-900">{practice.title}</h3>
        <p className="mt-1 text-sm text-blue-600">{practice.level}</p>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{practice.description}</p>
        {selectedPractice?.id === practice.id && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 space-y-4"
          >
            <h4 className="font-medium text-gray-900">Instructions</h4>
            <ol className="space-y-2">
              {practice.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600">{index + 1}</span>
                  </span>
                  {instruction}
                </li>
              ))}
            </ol>
            <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Begin Practice
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
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
                <Eye className="w-6 h-6" />
                <span className="text-sm uppercase tracking-wide">Inwardness Practice</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
                Looking Inward
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                The Art of Meditation
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meditation is the practice of looking inward. Through various approaches,
                we learn to turn attention inward and create space for inner experience.
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
              {/* Left Column - Practice Cards */}
              <div className="space-y-8">
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

              {/* Right Column - Additional Info */}
              <div className="space-y-6">
                {/* Understanding Meditation */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">Understanding Meditation</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Meditation is not about emptying the mind or achieving a particular state. 
                      It's simply the practice of turning attention inward and being present with 
                      whatever we find.
                    </p>
                    <div className="space-y-4 mt-6">
                      <h4 className="font-medium text-sm text-gray-900">Key Points:</h4>
                      <div className="space-y-3">
                        {[
                          'There are many valid approaches',
                          'Consistency matters more than duration',
                          'No "right way" - find what works for you',
                          'Progress comes through regular practice'
                        ].map((point, index) => (
                          <div key={index} className="flex items-start gap-3 text-sm">
                            <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Common Challenges */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h3 className="text-lg font-light text-gray-900">Common Challenges</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {[
                        'Mind keeps wandering',
                        'Feeling restless or uncomfortable',
                        'Not sure if doing it "right"',
                        'Difficulty making time'
                      ].map((challenge, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{challenge}</p>
                            <p className="text-sm text-gray-600 mt-1">
                              {getChallengeTip(index)}
                            </p>
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

// Helper function for challenge tips
const getChallengeTip = (index) => {
  const tips = [
    "This is normal and part of the practice. Gently return attention when you notice.",
    "Start with shorter sessions and experiment with different positions.",
    "There is no 'right way' - the key is consistency and gentle attention.",
    "Start with just 5 minutes daily. Small, consistent practice is valuable."
  ];
  return tips[index];
};

export default MeditationPage;