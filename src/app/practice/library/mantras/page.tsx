"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Star,
  Shield,
  Key,
  ArrowRight,
  Orbit,
  Eye,
  Unplug,
} from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "self-acceptance",
    title: "Self-Acceptance & Authenticity",
    icon: Star,
    description: "Keys for developing unconditional self-acceptance and trust",
    phrases: [
      {
        text: "I accept myself unconditionally, my darkness and my light.",
        explanation:
          "When we speak of accepting ourselves, it is common for people to only refer to the parts of themselves that they find agreeable. The aspects that bring joy or instill a sense of pride. However, authentic acceptance requires that we honor all aspects of ourselves, including the shadowy or dark corners of our being. Each of us has experienced moments of hurt and pain, areas that we may not hold in high regard, or that we wish to change. Yet, it's difficult to embark on a journey of true transformation from a place of self-rejection. By embracing ourselves unconditionally, both our darkness and our light, we lay the groundwork for growth based on a foundation of self-acceptance.",
        context: "Use when feeling self-judgment or internal conflict",
      },
      {
        text: "I will not deny myself to make others more comfortable.",
        explanation:
          "This phrase addresses a common pattern where we suppress our authentic expression to avoid disturbing others' equilibrium. Often rooted in childhood adaptations or social conditioning, this pattern can lead to a chronic disconnection from our true nature. By affirming our right to exist fully, we release the burden of managing others' emotional comfort at the expense of our own truth. This doesn't mean being inconsiderate - rather, it's about maintaining authenticity while remaining conscious of our impact.",
        context:
          "Use when feeling pressure to shrink yourself, hide your truth, or adapt to others' expectations at the cost of your authenticity.",
      },
      {
        text: "I choose to feel my feelings fully.",
        explanation:
          "It is a fairly common response to deep or uncomfortable emotions to suppress or deny them. Yet feelings are messengers, elements of nature that carry important information about our relationship with reality. By choosing to feel fully, we open ourselves to this wisdom and allow emotional energy to flow naturally through us rather than becoming stuck. This isn't about indulging or drowning in our emotions, but rather about creating the space needed to feel and understand them fully.",
        context:
          "Use when noticing resistance to emotional experience or when feeling emotionally numb or disconnected.",
      },
    ],
  },
  {
    id: "sovereignty",
    title: "Personal Sovereignty",
    icon: Shield,
    description: "Keys for reclaiming your power and agency",
    phrases: [
      {
        text: "I am the master of my reality and responsible for my choices",
        explanation:
          "Acknowledging your power to create your own reality and taking responsibility for your choices puts you in position to consciously create your experience.",
        context: "Use when feeling powerless or victim to circumstances",
      },
      {
        text: "I am not responsible for the outcomes of other people's choices",
        explanation:
          "A reminder of personal boundaries and the importance of allowing others their own journey and lessons.",
        context: "Use when feeling overly responsible for others",
      },
    ],
  },
  {
    id: "potential",
    title: "Opening to Potential",
    icon: Key,
    description: "Keys for accessing positive potentials",
    phrases: [
      {
        text: "I open the doors to the positive potentials within me",
        explanation:
          "Potentials are more than just a concept. All things that can exist, already exist, right now, as a potential. There are many reasons why we might block positive potentials. It might be because we've been conditioned to think negatively, or because we feel unworthy of good things. Regardless of the reasons, affirming for ourselves that we are open to all the good within us is a powerful message to ourselves and the universe about how and what we want to create.",
        context: "Use when feeling limited or stuck",
      },
      {
        text: "I have never had a day exactly like today before",
        explanation:
          "A reminder to stay present and open to new possibilities rather than being bound by past patterns.",
        context: "Use when feeling trapped in old patterns",
      },
    ],
  },
];

export default function MantrasPage() {
  const [selectedCategory, setSelectedCategory] = useState("self-acceptance"); // Default open category
  const [selectedPhrase, setSelectedPhrase] = useState<number | null>(null);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <Section width="default" className="pt-12 md:pt-24 pb-16">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="mb-8 border-b border-gray-200 pb-7">
              <h1 className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-amber-600" strokeWidth={2} />
                Mantras
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700">
                Mantras are phrases that, when deeply understood and embodied,
                can shift internal energy and unlock new levels of awareness.
                Their power lies not in mere repetition, but in the felt
                understanding of their meaning.
              </p>
            </div>
          </div>

          {/* Understanding the Practice */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-normal mb-6 text-gray-900">
              Understanding the Practice
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                This practice involves more than speaking words—it requires
                touching their meaning through direct experience. When we embody
                a mantra's essence, we allow its truth to shift our internal
                state and perspective.
              </p>

              <div className="bg-white p-6 rounded-lg border border-gray-100 my-8">
                <h3 className="text-xl font-medium mb-6">Key Elements</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Feel, Don't Just Think
                    </h4>
                    <p className="text-gray-600">
                      Move beyond intellectual understanding to embodied
                      experience. Real transformation happens when thought
                      becomes feeling.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Connect Personally
                    </h4>
                    <p className="text-gray-600">
                      Discover how each phrase relates to your direct
                      experience. Universal truth becomes powerful when it has
                      personal meaning.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Maintain Presence
                    </h4>
                    <p className="text-gray-600">
                      Stay centered as you work with these energies. Observe the
                      shifts in your internal state while maintaining awareness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories and Phrases */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-normal mb-8 text-gray-900">
              Practice Categories
            </h2>

            {/* Category Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.id}
                    className={`bg-white border border-gray-200 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "ring-2 ring-amber-500 shadow-md"
                        : "hover:shadow-md"
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          selectedCategory === category.id
                            ? "bg-amber-50 text-amber-600"
                            : "bg-gray-50 text-gray-600"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-medium text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Phrases Display */}
            <AnimatePresence mode="wait">
              {selectedCategory && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-6">
                    {categories.find((c) => c.id === selectedCategory)?.title}
                  </h3>

                  {categories
                    .find((c) => c.id === selectedCategory)
                    ?.phrases.map((phrase, index) => (
                      <motion.div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div
                          className={`p-6 cursor-pointer transition-colors duration-200 ${
                            selectedPhrase === index
                              ? "bg-gray-50"
                              : "hover:bg-gray-50"
                          }`}
                          onClick={() =>
                            setSelectedPhrase(
                              selectedPhrase === index ? null : index
                            )
                          }
                        >
                          <div className="flex justify-between items-center">
                            <p className="text-lg text-gray-900 italic">
                              "{phrase.text}"
                            </p>
                            <motion.div
                              animate={{
                                rotate: selectedPhrase === index ? 90 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <ArrowRight className="w-5 h-5 text-gray-400" />
                            </motion.div>
                          </div>
                        </div>

                        <AnimatePresence>
                          {selectedPhrase === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="p-6 border-t border-gray-100 bg-gray-50">
                                <div className="space-y-6">
                                  <div>
                                    <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-3">
                                      Understanding
                                    </h4>
                                    <p className="text-gray-600">
                                      {phrase.explanation}
                                    </p>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-3">
                                      When to Use
                                    </h4>
                                    <p className="text-gray-600">
                                      {phrase.context}
                                    </p>
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

          {/* Closing */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700">
                As you work with these mantras, remember that their power lies
                in embodied understanding rather than repetition. Each phrase
                serves as a doorway to deeper awareness, becoming more effective
                as you connect it with your direct experience.
              </p>
            </div>
          </div>

          {/* Practice Navigation */}
          <div className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-normal mt-2 mb-8 text-gray-900">
              Explore Other Practices
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <Link href="/practice/library/meditation" className="block p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Orbit className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-2">
                    Meditation
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Develop presence and awareness through practices that
                    enhance your capacity to be with inner experience.
                  </p>
                </Link>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <Link href="/practice/inner-work" className="block p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Eye className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-2">
                    Inner Work
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Explore the foundation of personal transformation through
                    understanding and working with inner reality.
                  </p>
                </Link>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <Link href="/practice/library/detachment" className="block p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center">
                      <Unplug className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-2">
                    Detachment
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Learn to observe and work with inner forces while
                    maintaining independence from them.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}
