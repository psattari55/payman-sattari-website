// src/app/practice/inwardness/meditation/page.tsx

'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, BookOpen, Lightbulb, Activity, ArrowRight } from 'lucide-react';

export default function MeditationConceptPage() {
  const concepts = [
    {
      title: "What Meditation Is",
      icon: Eye,
      content: [
        {
          heading: "The Foundation of Inner Work",
          description: "Meditation, at its core, is the act of looking inward. It is not only a technique or set of practices, but rather the fundamental movement of attention from outer experience to inner reality."
        },
        {
          heading: "A Natural Capacity",
          description: "Just as we have the capacity to look outward with our physical eyes, we have the natural capacity to look inward with our awareness. This inward looking is meditation in its purest form."
        },
        {
          heading: "Beyond Technique",
          description: "While there are many methods and practices, these are simply different ways to facilitate this fundamental movement inward. The essence of meditation transcends any particular approach or tradition."
        }
      ]
    },
    {
      title: "The Role of Attention",
      icon: Activity,
      content: [
        {
          heading: "Conscious Direction",
          description: "Attention is the instrument of meditation. Just as physical light illuminates objects in space, attention illuminates our inner experience."
        },
        {
          heading: "Natural Movement",
          description: "Attention naturally moves between outer and inner experience. Meditation is simply the conscious cultivation of this inward movement."
        },
        {
          heading: "Quality of Attention",
          description: "The quality of attention matters more than any technique. Clear, steady attention allows us to see our inner world with greater depth and precision."
        }
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-blue-600 uppercase tracking-wide">Understanding</span>
          <h1 className="text-4xl md:text-5xl font-light mt-4 mb-6 tracking-wide text-gray-900">
            Meditation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The foundation of inner work lies in our natural capacity to look inward.
            Before considering practices or techniques, we must understand what meditation truly is.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {concepts.map((concept, index) => (
            <motion.div 
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <concept.icon className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-light text-gray-900">{concept.title}</h2>
                </div>
                <div className="space-y-8">
                  {concept.content.map(item => (
                    <div key={item.heading} className="space-y-2">
                      <h3 className="text-lg font-medium text-gray-900">{item.heading}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">A Note on Practice</h3>
              <p className="text-gray-600">
                While this section focuses on understanding meditation conceptually, specific practices
                and techniques can be found in our Practice Library. Understanding precedes practice,
                as clear comprehension allows for more effective and meaningful engagement with any technique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}