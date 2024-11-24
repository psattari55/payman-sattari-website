// src/app/practice/limits/page.tsx

'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, AlertCircle, Lightbulb, ArrowRight, Target, Shield, Hammer, Heart } from 'lucide-react';

export default function LimitsPracticePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <motion.div 
            className="lg:w-2/3 border-l border-r border-gray-100 px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <header className="mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Limits: Structure, Form & Boundaries
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                In a world that often celebrates unlimited growth and expansion, we can easily overlook 
                the profound importance of limits. Limits are not restrictions to be overcome—they are 
                essential forces that give form to life, create safety for growth, and allow for 
                meaningful relationship with ourselves and others. Understanding limits means recognizing 
                them as the constructive force they are, one that gives shape to potential and provides 
                the necessary container for development.
              </p>
            </header>

            <article className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900">Understanding Limits as Essential Force</h2>
                <p className="mb-6">
                  Limits represent the principle of form and definition in life. Like the banks of a river 
                  that channel water's flow, limits provide the structure through which energy can move 
                  purposefully and effectively. They manifest in three essential ways:
                </p>
                <ul className="mb-8 pl-6">
                  <li className="mb-3"><strong>Structure:</strong> The frameworks and forms that organize experience</li>
                  <li className="mb-3"><strong>Boundaries:</strong> The delineations that define healthy relationships</li>
                  <li className="mb-3"><strong>Containment:</strong> The holding space that allows for growth and development</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">The Nature of Form and Boundaries</h3>
                <p>Limits serve several vital functions in our development and well-being:</p>
                <ul className="pl-6 mb-8">
                  <li className="mb-2">Definition: They help us understand where one thing ends and another begins</li>
                  <li className="mb-2">Safety: They create protective spaces where growth can occur</li>
                  <li className="mb-2">Clarity: They allow us to distinguish between what is and isn't our responsibility</li>
                  <li className="mb-2">Focus: They help direct energy toward what matters most</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900">Core Aspects of Working with Limits</h2>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Detachment</h3>
                <p className="mb-6">Understanding the observer separate from the observed allows us to work with our experiences more effectively. Through detachment, we develop the capacity to witness without reaction.</p>
                <ul className="pl-6 mb-8">
                  <li className="mb-3">Understanding the observer separate from the observed</li>
                  <li className="mb-3">Cultivating neutral awareness</li>
                  <li className="mb-3">Developing the capacity to witness without reaction</li>
                  <li className="mb-3">Creating space between stimulus and response</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Energy Boundaries</h3>
                <ul className="pl-6 mb-8">
                  <li className="mb-3">Recognizing personal energy fields</li>
                  <li className="mb-3">Maintaining healthy energetic separation</li>
                  <li className="mb-3">Understanding where you end and others begin</li>
                  <li className="mb-3">Managing energy exchange consciously</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Grounding & Physical Integration</h3>
                <ul className="pl-6 mb-8">
                  <li className="mb-3">Connecting with the body as container</li>
                  <li className="mb-3">Establishing stable foundation</li>
                  <li className="mb-3">Developing embodied presence</li>
                  <li className="mb-3">Working with physical form consciously</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900">Practical Applications</h2>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Personal Development</h3>
                <ul className="pl-6 mb-8">
                  <li className="mb-3">Setting healthy boundaries</li>
                  <li className="mb-3">Managing time and energy</li>
                  <li className="mb-3">Creating sustainable structures</li>
                  <li className="mb-3">Developing clear yes and no</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Relationships</h3>
                <ul className="pl-6 mb-8">
                  <li className="mb-3">Communicating limits clearly</li>
                  <li className="mb-3">Respecting others' boundaries</li>
                  <li className="mb-3">Building trust through consistency</li>
                  <li className="mb-3">Maintaining healthy separation while connected</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Daily Life</h3>
                <ul className="pl-6 mb-8">
                  <li className="mb-3">Creating supportive routines</li>
                  <li className="mb-3">Establishing clear priorities</li>
                  <li className="mb-3">Managing resources effectively</li>
                  <li className="mb-3">Maintaining balanced structure</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900">Working with Resistance</h2>
                <p className="mb-6">Common challenges in working with limits include:</p>
                <ul className="pl-6 mb-8">
                  <li className="mb-3">Fear of constraint or restriction</li>
                  <li className="mb-3">Difficulty saying no</li>
                  <li className="mb-3">Confusion between rigidity and healthy structure</li>
                  <li className="mb-3">Resistance to form and definition</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Transforming Resistance</h3>
                <ul className="pl-6 mb-8">
                  <li className="mb-3">Understanding limits as supportive rather than restrictive</li>
                  <li className="mb-3">Recognizing how boundaries create safety for growth</li>
                  <li className="mb-3">Experiencing the freedom that comes through healthy structure</li>
                  <li className="mb-3">Learning to trust in the wisdom of form</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900">Foundation Practices</h2>
                
                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Body Awareness</h3>
                <ul className="pl-6 mb-8">
                  <li className="mb-3">Sensing physical boundaries</li>
                  <li className="mb-3">Feeling personal space</li>
                  <li className="mb-3">Recognizing energy fields</li>
                  <li className="mb-3">Grounding in form</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Energy Management</h3>
                <ul className="pl-6 mb-8">
                  <li className="mb-3">Creating energetic boundaries</li>
                  <li className="mb-3">Maintaining separate space</li>
                  <li className="mb-3">Managing exchanges consciously</li>
                  <li className="mb-3">Restoring depleted energy</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conscious Structure</h3>
                <ul className="pl-6 mb-8">
                  <li className="mb-3">Developing helpful routines</li>
                  <li className="mb-3">Creating supportive environments</li>
                  <li className="mb-3">Establishing clear frameworks</li>
                  <li className="mb-3">Building consistent practices</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900">Moving Forward</h2>
                <p className="mb-6">As you work with limits, remember:</p>
                <ul className="pl-6 mb-8">
                  <li className="mb-3">Limits create the container for growth</li>
                  <li className="mb-3">Structure supports rather than restricts</li>
                  <li className="mb-3">Boundaries allow for deeper connection</li>
                  <li className="mb-3">Form gives shape to potential</li>
                </ul>

                <p className="mb-6">The practices that follow will help you develop:</p>
                <ul className="pl-6 mb-8">
                  <li className="mb-3">Greater clarity in personal boundaries</li>
                  <li className="mb-3">Stronger sense of structure</li>
                  <li className="mb-3">More effective energy management</li>
                  <li className="mb-3">Deeper understanding of form</li>
                </ul>

                <p>Begin with what feels most natural, knowing that each step in working with limits creates greater capacity for balanced, conscious living.</p>
              </section>

            </article>
          </motion.div>

          {/* Sidebar */}
          <motion.aside 
            className="lg:w-1/3 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Understanding Detachment */}
            <div className="bg-indigo-50 rounded-lg border border-indigo-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg font-medium text-gray-900">Understanding Detachment</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Detachment doesn't mean becoming cold or distant. Instead, it's about creating enough inner 
                space to respond consciously rather than react automatically. Think of it as stepping back 
                to see the whole picture.
              </p>
            </div>
            
            {/* Book Promotion */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-6 flex gap-6">
                <div className="w-1/3">
                  <img
                    src="/images/books/science-of-energy-cover.jpg"
                    alt="The Science of Energy Book Cover"
                    className="w-full rounded-sm shadow-sm"
                  />
                </div>
                <div className="w-2/3 space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">The Science of Energy</h3>
                  <p className="text-sm text-gray-600">
                    Explore the deeper understanding of limits and their role in consciousness and physical reality.
                  </p>
                  <div className="flex gap-2">
                    <a href="/books/science-of-energy" className="text-sm text-blue-600 hover:text-blue-800">
                      Learn More
                    </a>
                    <span className="text-gray-300">|</span>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insight Box */}
            <div className="bg-blue-50 rounded-lg border border-blue-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-medium text-gray-900">Key Insight</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Just as a river needs banks to flow purposefully, our energy and growth require healthy limits 
                to move effectively. Without containment, energy disperses; without boundaries, relationships 
                lack definition.
              </p>
            </div>

            {/* Common Challenges Box */}
            <div className="bg-amber-50 rounded-lg border border-amber-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <h3 className="text-lg font-medium text-gray-900">Common Challenges</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-amber-500 rounded-full" />
                  <span>Difficulty saying "no" to others' requests</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-amber-500 rounded-full" />
                  <span>Feeling guilty about setting boundaries</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-3 bg-amber-500 rounded-full" />
                  <span>Confusing rigid control with healthy structure</span>
                </li>
              </ul>
            </div>

            {/* Practical Application */}
            <div className="bg-green-50 rounded-lg border border-green-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-medium text-gray-900">Practice This</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Start with a simple boundary-setting exercise: Choose one area of your life where you feel 
                  overextended. Practice saying "no" to new requests in this area for one week, observing 
                  how it affects your energy and well-being.
                </p>
                <a href="/practice/boundaries" 
                   className="inline-flex items-center text-green-700 hover:text-green-800">
                  More boundary exercises
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Implementation Strategy */}
            <div className="bg-blue-50 rounded-lg border border-blue-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-medium text-gray-900">Daily Practice</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>Start with these simple daily practices:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full" />
                    <span>Morning boundary visualization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full" />
                    <span>Midday energy check-in</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full" />
                    <span>Evening release practice</span>
                  </li>
                </ul>
                <a href="/practice/daily-routines" 
                   className="inline-flex items-center text-blue-700 hover:text-blue-800 mt-4">
                  Learn these practices
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Stay Connected</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get monthly insights on consciousness, energy, and practical development.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 mb-2 border border-gray-200 rounded text-sm"
              />
              <button className="w-full bg-gray-900 text-white p-2 rounded-md text-sm hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
            
            {/* Practical Tools */}
            <div className="bg-green-50 rounded-lg border border-green-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Hammer className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-medium text-gray-900">Practical Tool</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <h3 className="font-medium">The 3-Step Boundary Check</h3>
                <ol className="space-y-2 pl-4">
                  <li>1. Pause and notice your energy level</li>
                  <li>2. Ask: "Is this mine to carry?"</li>
                  <li>3. Choose a clear response</li>
                </ol>
                <p className="mt-4 text-sm">
                  Practice this quick check whenever you feel overwhelmed or unsure about taking on a 
                  request or responsibility.
                </p>
              </div>
            </div>

{/* Working with Resistance */}
<div className="bg-rose-50 rounded-lg border border-rose-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5 text-rose-600" />
                <h3 className="text-lg font-medium text-gray-900">Understanding Resistance</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Resistance to limits often comes from past experiences where boundaries felt constraining 
                rather than supportive. Recognizing this can help transform your relationship with structure.
              </p>
              <div className="mt-4 pt-4 border-t border-rose-200">
                <p className="text-sm text-gray-600 italic">
                  "The wall that appears to block your path often becomes the door to your growth."
                </p>
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="bg-blue-50 rounded-lg border border-blue-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-medium text-gray-900">Track Your Progress</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="mb-4">Signs of growing mastery:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full" />
                    <span>Increased comfort with saying no</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full" />
                    <span>Better energy management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full" />
                    <span>Clearer sense of personal space</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-emerald-50 rounded-lg border border-emerald-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <ArrowRight className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-medium text-gray-900">Next Steps</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Ready to deepen your practice? Consider:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-emerald-500 rounded-full" />
                    <a href="/practice/meditation" className="text-emerald-700 hover:text-emerald-800">
                      Daily Meditation Practice
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-emerald-500 rounded-full" />
                    <a href="/practice/energy-work" className="text-emerald-700 hover:text-emerald-800">
                      Energy Management Course
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-emerald-500 rounded-full" />
                    <a href="/articles/practitioners-door" className="text-emerald-700 hover:text-emerald-800">
                      Practitioner's Door Series
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Final Insight */}
            <div className="bg-violet-50 rounded-lg border border-violet-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-5 h-5 text-violet-600" />
                <h3 className="text-lg font-medium text-gray-900">Key Reflection</h3>
              </div>
              <p className="text-gray-700">
                The mastery of limits isn't about restriction—it's about creating the container that allows 
                your authentic self to flourish. Each boundary you set mindfully is an act of self-respect 
                and an invitation for deeper growth.
              </p>
            </div>

          </motion.aside>
        </div>
      </div>
    </div>
  );
}