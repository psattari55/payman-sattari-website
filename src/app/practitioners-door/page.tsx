// src/app/practitioners-door/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, Scale } from "lucide-react";
import Section from "@/components/ui/Section";
import PageTransition from "@/components/ui/PageTransition";
import InteractiveLink from "@/components/ui/InteractiveLink";
import DoorCard from "@/components/features/DoorCard";
import DoorHeader from "@/components/features/DoorHeader";
import DoorEnterButton from "@/components/features/DoorEnterButton";
import DoorJourney from "@/components/features/DoorJourney";
import DoorSeriesNav from "@/components/features/DoorSeriesNav";

export default function PractitionersDoorPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-12 md:pt-24 pb-16">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3 border-l border-r border-gray-100 mx-auto md:px-8">
              <DoorHeader doorType="practitioners-door" />

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-800">
                  The Practitioner's Door is where theory meets practice. Here
                  you'll find tools and insights designed to
                  faciliate the application of core principles of balance
                  to your daily life. Whether it is to
                  cultivate greater inner resilience, improve
                  relationships, or manage energy more wisely, this
                  section is focused on practical guidance grounded in core
                  principles of balance and harmony.
                </p>

                <h2 className="text-2xl font-normal mt-12 mb-6 text-gray-900">
                  Why Practice Matters
                </h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  Knowledge alone is powerful, but true transformation comes
                  from practice. When we actively apply grounded principles in our
                  lives, we begin to see shifts—in how we respond to challenges,
                  how we relate to others, and how we cultivate balance in a
                  busy world. The exercises, articles, and resources here are
                  designed to help you turn insights into action, making these
                  concepts a living part of your reality.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">
                  What You'll Find
                </h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  This section explores the pragmatic side of ideas like
                  duality, consciousness, and the role of belief systems, and how they can
                  serve you in real-life situations. Through simple articles,
                  exercises, and energy principles, you'll gain tools to help:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">
                      Balance Activity and Rest:{" "}
                    </strong>
                    Learn how the duality between yin (inwardness/rest) and yang (outwardness/expression) apply to personal
                    energy management, helping you know when to take action and
                    when to rest.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">
                      Identify Limiting Beliefs:{" "}
                    </strong>
                    Understand how belief systems deeply impact your experience and
                    how to release limiting
                    beliefs that no longer serve you.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">
                      Cultivate Inner and Outer Strength:{" "}
                    </strong>
                    Explore how strength manifests on both inward and outward levels, learning
                    how to honor both aspects of yourself for a more fulfilling,
                    balanced life.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-12 mb-6 text-gray-900">
                  Explore, Apply, and Transform
                </h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  Start with an article or practice that speaks to you and remember that small steps lead to
                  meaningful changes over time. As you practice, take note of how your
                  conscious awareness grows, and how each action brings you closer to a
                  state of clarity and balance.
                </p>

                {/* Enter Button */}
                <DoorEnterButton doorType="practitioners-door" />
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
              <DoorJourney doorType="practitioners-door" />

              {/* Article Navigation */}
              <DoorSeriesNav doorType="practitioners-door" />

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
                title="Inner Work"
                description="Learn how to turn your attention inward, map the inner landscape, and deal with inner forces."
                icon={Eye}
                href="/practice/inner-work"
                doorType="practitioner"
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
                title="Balance"
                description="Explore how to work with and understand the fundamental forces that shape our inner and outer reality."
                icon={Scale}
                href="/practice/balance"
                doorType="practitioner"
              />
              {/* Door Card Component
              <DoorCard
                title="Discipline"
                description="Understanding the nature of conscious self-discipline through the integration of love and limits."
                icon={StopCircle}
                href="/practice/discipline"
                doorType="practitioner"
              /> */}
            </motion.aside>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}
