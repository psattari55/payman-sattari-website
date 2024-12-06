// src/app/observers-door/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Puzzle } from "lucide-react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import PageTransition from "@/components/ui/PageTransition";
import InteractiveLink from "@/components/ui/InteractiveLink";
import DoorCard from "@/components/features/DoorCard";
import DoorHeader from "@/components/features/DoorHeader";
import DoorEnterButton from "@/components/features/DoorEnterButton";
import DoorJourney from "@/components/features/DoorJourney";
import DoorSeriesNav from "@/components/features/DoorSeriesNav";

export default function ObserversDoorPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-12 md:pt-24 pb-16">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3 border-l border-r border-gray-100 mx-auto md:px-8">
              <DoorHeader doorType="observers-door" />

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-800">
                  The Observer's Door is an invitation to explore the
                  experiential side of reality. Here, we shift our focus from
                  the mechanics of the physical world to the experience of
                  living within it. While science gives us tools to understand
                  structure, measurement, and outward phenomena, the observer's
                  role requires a different approach. It invites us to look
                  inward, to understand how our consciousness shapes and
                  interacts with reality from the "inside out."
                </p>

                <p className="text-xl leading-relaxed text-gray-800">
                  This is the door we open to explore questions that can't be
                  fully answered through empirical data alone: What is the
                  nature of the self? How do our inner beliefs and emotions
                  shape our experience of the outer world? And how does
                  understanding the subjective experience offer us a broader
                  view of objective reality?
                </p>

                <p className="text-xl leading-relaxed text-gray-800">
                  The Observer's Door offers insights and tools to help you
                  engage with the often-unseen dimensions of life—ones that
                  guide not just <em>what</em> we observe, but <em>how</em> we
                  observe and interpret the world around us.
                </p>

                <h2 className="text-2xl font-normal mt-12 mb-6 text-gray-900">
                  Why Understanding the Observer Matters
                </h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  In every experience, we are both participant and observer,
                  shaping reality through our beliefs, perceptions, and states
                  of mind. While much of modern knowledge focuses on outward
                  facts, the inner experience is equally vital—it's where we
                  find purpose, meaning, and an understanding of our role in the
                  larger cosmos.
                </p>

                <p className="text-lg leading-relaxed text-gray-800">
                  Here, you'll find resources that explore the subjective
                  dynamics of reality: the role of consciousness, the impact of
                  belief systems, and the way our inner state reflects and
                  shapes the outer world. These insights empower you to live
                  with awareness, using your consciousness to engage more deeply
                  with life and uncover truths that are as real as any physical
                  fact.
                </p>

                <h2 className="text-2xl font-normal mt-12 mb-6 text-gray-900">
                  What You'll Find Here
                </h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  This section offers articles, insights, and reflective tools
                  to help you navigate life as an observer and participant. The
                  goal is to provide you with a deeper understanding of the
                  experiential dimensions of existence and how they contribute
                  to a more complete picture of reality.
                </p>

                <div className="my-12 grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Consciousness and Perception",
                      description:
                        "Discover how the act of observing shapes reality, from the quantum level to our everyday interactions.",
                    },
                    {
                      title: "Belief and Truth",
                      description:
                        "Learn to discern the beliefs that shape your perception and uncover how reality can be both stable and fluid.",
                    },
                    {
                      title: "The Power of Inner States",
                      description:
                        "Understand how emotions, thoughts, and beliefs influence your experience of the world.",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      className="p-6 bg-white border border-gray-100 rounded-sm"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-lg font-medium mb-3 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Enter Button */}
                <DoorEnterButton doorType="observers-door" />
              </div>
            </div>

            {/* Sidebar */}
            <motion.aside
              className="lg:w-1/3 space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Begin Journey Card */}
              <DoorJourney doorType="observers-door" />

              {/* Article Navigation */}
              <DoorSeriesNav doorType="observers-door" />

              {/* Book Promotion */}
              <motion.div
                className="bg-white border border-gray-100 rounded-sm p-6"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <Image
                      src="/images/books/science-of-energy-cover.jpg"
                      alt="The Science of Energy Book Cover"
                      width={300}
                      height={450}
                      className="w-full rounded-sm shadow-sm"
                    />
                  </div>
                  <div className="w-2/3">
                    <h3 className="text-lg font-normal mb-2 text-gray-900">
                      The Science of Energy
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      A comprehensive introduction to a new framework for
                      understanding reality.
                    </p>
                    <InteractiveLink
                      href="/books/science-of-energy"
                      className="text-sm text-blue-600"
                    >
                      Learn More
                    </InteractiveLink>
                  </div>
                </div>
              </motion.div>

              {/* Door Card Component */}
              <DoorCard
                title="Daily Insights"
                description="Explore contemplations on consciousness, reality, and human experience."
                icon={Lightbulb}
                href="/insights/daily"
                doorType="observer"
              />

              {/* Newsletter */}
              <div className="bg-white border border-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-normal mb-4 text-gray-900">
                  Stay Connected
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get monthly insights on consciousness, physics, and the nature
                  of reality.
                </p>
                <motion.input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-2 mb-2 border border-gray-200 rounded text-sm"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
                <motion.button
                  className="w-full bg-gray-900 text-white p-2 rounded-md text-sm hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                ></motion.button>
              </div>
              {/* Door Card Component */}
              <DoorCard
                title="Framework"
                description="Explore how consciousness and physical reality are two aspects of the same underlying order."
                icon={Puzzle}
                href="/books/science-of-energy/framework"
                doorType="observer"
              />
            </motion.aside>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}
