// src/app/articles/page.tsx

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lightbulb, MessageSquare, BookOpen, Compass, HeartHandshake, Sparkles } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import PageTransition from "@/components/ui/PageTransition";

const categories = [
  {
    title: "Scientific Insights",
    description: "Research-based articles exploring physics and consciousness",
    icon: BookOpen,
    path: "/articles/scientific",
    color: "emerald",
    gradient: "from-emerald-50/40 to-white",
  },
  {
    title: "Metaphysical Concepts",
    description: "Deep dives into the nature of reality and experience",
    icon: Compass,
    path: "/articles/metaphysical",
    color: "blue",
    gradient: "from-blue-50/40 to-white",
  },
  {
    title: "Personal Development",
    description: "Practical applications of energy principles",
    icon: HeartHandshake,
    path: "/articles/development",
    color: "amber",
    gradient: "from-amber-50/40 to-white",
  },
  {
    title: "Latest Thoughts",
    description: "Recent explorations and insights",
    icon: Sparkles,
    path: "/articles/thoughts",
    color: "purple",
    gradient: "from-purple-50/40 to-white",
  },
];

export default function ArticlesInsightsHub() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl mb-4">Articles & Insights</h1>
              <p className="text-xl text-gray-600">
                Explore different perspectives on consciousness, reality, and
                human potential
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Article Categories */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-10 pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <h2 className="text-xl font-semibold">
                      Article Categories
                    </h2>
                  </div>
                  <p className="text-gray-600">
                    Explore different perspectives through curated collections
                    of articles
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 p-8">
                  {categories.map((category, index) => {
                    const Icon = category.icon;

                    return (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link href={category.path}>
                          <motion.div
                            className={`group relative p-6 rounded-xl bg-gradient-to-br ${category.gradient} 
                              border border-gray-100 overflow-hidden`}
                            whileHover={{
                              y: -2,
                              transition: { duration: 0.2 },
                            }}
                          >
                            {/* Shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                              initial={false}
                              animate={{
                                x: ["100%", "-100%"],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 8,
                              }}
                            />

                            <div className="relative">
                              <motion.div
                                className={`w-12 h-12 rounded-lg bg-${category.color}-100/50 
                                  flex items-center justify-center mb-4`}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Icon
                                  className={`w-6 h-6 text-${category.color}-600`}
                                />
                              </motion.div>

                              <h3
                                className={`text-lg font-medium text-${category.color}-900 mb-2`}
                              >
                                {category.title}
                              </h3>
                              <p className="text-gray-600 text-sm mb-4">
                                {category.description}
                              </p>

                              <motion.div
                                className="text-sm font-medium flex items-center gap-2"
                                animate={{
                                  x: 0,
                                }}
                              >
                                <span className={`text-${category.color}-600`}>
                                  Explore Articles
                                </span>
                                <motion.span
                                  animate={{ x: [0, 4, 0] }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                >
                                  →
                                </motion.span>
                              </motion.div>
                            </div>
                          </motion.div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Three Column Section */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Daily Insights */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    <h2 className="text-xl font-semibold">Daily Insights</h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Bite-sized wisdom and reflections for daily contemplation
                  </p>
                  <Link href="/insights/daily">
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="aspect-square bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        />
                      ))}
                    </div>
                  </Link>
                </div>

                {/* AI Conversations */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    <h2 className="text-xl font-semibold">AI Conversations</h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Exploring consciousness through dialogues with AI
                  </p>
                  <Link href="/insights/ai-conversations">
                    <Card hoverable className="p-3">
                      <div className="space-y-3">
                        {[1, 2].map((i) => (
                          <div key={i} className="p-3 bg-gray-50 rounded-lg">
                            <div className="h-3 w-2/3 bg-gray-200 rounded" />
                            <div className="h-2 w-1/2 bg-gray-200 rounded mt-1" />
                          </div>
                        ))}
                      </div>
                    </Card>
                  </Link>
                </div>

                {/* Multimedia Preview
                <div className="bg-gray-900 text-white rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Film className="w-5 h-5" />
                    <h2 className="text-xl font-semibold">Multimedia Content</h2>
                  </div>
                  <p className="text-gray-300 mb-4">Coming soon: Audio and video explorations of consciousness and reality</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[1, 2].map((i) => (
                      <div key={i} className="aspect-video bg-gray-800 rounded-lg" />
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}
