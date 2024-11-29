// src/app/practice/consciousness-codes/page.tsx
'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Key, Heart, Brain, Shield, Compass, Star } from 'lucide-react';
import Section from '@/components/ui/Section';
import PageTransition from '@/components/ui/PageTransition';

const categories = [
  {
    id: 'self-acceptance',
    title: 'Self-Acceptance & Authenticity',
    icon: Star,
    description: 'Keys for developing unconditional self-acceptance and trust',
    phrases: [
      {
        text: "I accept myself unconditionally, my darkness and my light.",
        explanation: "When we speak of accepting ourselves, it is common for people to only refer to the parts of themselves that they find agreeable. The aspects that bring joy or instill a sense of pride. However, authentic acceptance requires that we honor all aspects of ourselves, including the shadowy or dark corners of our being. Each of us has experienced moments of hurt and pain, areas that we may not hold in high regard, or that we wish to change. Yet, it's difficult to embark on a journey of true transformation from a place of self-rejection. By embracing ourselves unconditionally, both our darkness and our light, we lay the groundwork for growth based on a foundation of self-acceptance.",
        context: "Use when feeling self-judgment or internal conflict"
      },
      {
        text: "I will not deny myself to make others more comfortable.",
        explanation: "This phrase addresses a common pattern where we suppress our authentic expression to avoid disturbing others' equilibrium. Often rooted in childhood adaptations or social conditioning, this pattern can lead to a chronic disconnection from our true nature. By affirming our right to exist fully, we release the burden of managing others' emotional comfort at the expense of our own truth. This doesn't mean being inconsiderate - rather, it's about maintaining authenticity while remaining conscious of our impact.",
        context: "Use when feeling pressure to shrink yourself, hide your truth, or adapt to others' expectations at the cost of your authenticity."
      },
      {
        text: "I choose to feel my feelings fully.",
        explanation: "It is a fairly common response to deep or uncomfortable emotions to suppress or deny them. Yet feelings are messengers, elements of nature that carry important information about our relationship with reality. By choosing to feel fully, we open ourselves to this wisdom and allow emotional energy to flow naturally through us rather than becoming stuck. This isn't about indulging or drowning in our emotions, but rather about creating the space needed to feel and understand them fully.",
        context: "Use when noticing resistance to emotional experience or when feeling emotionally numb or disconnected."
      }
    ]
  },
  {
    id: 'sovereignty',
    title: 'Personal Sovereignty',
    icon: Shield,
    description: 'Keys for reclaiming your power and agency',
    phrases: [
      {
        text: "I am the master of my reality and responsible for my choices",
        explanation: "Acknowledging your power to create your own reality and taking responsibility for your choices puts you in position to consciously create your experience.",
        context: "Use when feeling powerless or victim to circumstances"
      },
      {
        text: "I am not responsible for the outcomes of other people's choices",
        explanation: "A reminder of personal boundaries and the importance of allowing others their own journey and lessons.",
        context: "Use when feeling overly responsible for others"
      }
    ]
  },
  {
    id: 'potential',
    title: 'Opening to Potential',
    icon: Key,
    description: 'Keys for accessing positive potentials',
    phrases: [
      {
        text: "I open the doors to the positive potentials within me",
        explanation: "Potentials are more than just a concept. All things that can exist, already exist, right now, as a potential. There are many reasons why we might block positive potentials. It might be because we've been conditioned to think negatively, or because we feel unworthy of good things. Regardless of the reasons, affirming for ourselves that we are open to all the good within us is a powerful message to ourselves and the universe about how and what we want to create.",
        context: "Use when feeling limited or stuck"
      },
      {
        text: "I have never had a day exactly like today before",
        explanation: "A reminder to stay present and open to new possibilities rather than being bound by past patterns.",
        context: "Use when feeling trapped in old patterns"
      }
    ]
  }
];

export default function ConsciousnessKeysPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPhrase, setSelectedPhrase] = useState<number | null>(null);
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-normal mb-6 tracking-wide text-gray-900">
                Consciousness Codes
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Words and phrases that, when embodied, can shift internal energy and unlock new levels of awareness and understanding.
              </p>
            </motion.div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Understanding the Practice</h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  These are not traditional koans or mantras. Rather, they are like "codes" that, when understood and spoken with intention, can shift internal energy and unlock deeper states of awareness. Be aware that the power lies not in mere repetition, but in the felt embodiment of their meaning. In other words, rather than simply "saying words", you must <em>mean</em> them.
                  Once you have understood the phrase, repeat it in your mind while embodying its meaning. Note that virtually any of the "Daily Insights" can be used in this same way.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900"><em>Feel</em>, Don't Just Think</h3>
                    <p className="text-sm text-gray-600">
                      Embody the understanding through imagination and touch, rather than keeping it at a distance by intellectualizing it. Real change happens when thought becomes experience.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">Explore Deeply</h3>
                    <p className="text-sm text-gray-600">
                      Take time to discover how each phrase relates to your personal experience. When you can connect a phrase to your real life, when objective truth has subjective relevance, it becomes easier to touch and embody.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">Remain Present</h3>
                    <p className="text-sm text-gray-600">
                      Keep your center. When working with shifts in energy, it can be easy to be swept along by the current. Remain the observer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.id}
                    className={`bg-white border border-gray-200 rounded-lg p-6 cursor-pointer ${
                      selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedCategory(
                      selectedCategory === category.id ? null : category.id
                    )}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-5 h-5 text-blue-600" />
                      <h3 className="font-medium text-gray-900">{category.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {selectedCategory && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {categories
                    .find(c => c.id === selectedCategory)
                    ?.phrases.map((phrase, index) => (
                      <motion.div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div 
                          className="p-6 cursor-pointer"
                          onClick={() => setSelectedPhrase(selectedPhrase === index ? null : index)}
                        >
                          <p className="text-lg text-gray-900 font-medium italic">
                            "{phrase.text}"
                          </p>
                        </div>
                        
                        <AnimatePresence>
                          {selectedPhrase === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-gray-100"
                            >
                              <div className="p-6 bg-gray-50">
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Understanding</h4>
                                    <p className="text-sm text-gray-600">{phrase.explanation}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-900 mb-2">When to Use</h4>
                                    <p className="text-sm text-gray-600">{phrase.context}</p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}