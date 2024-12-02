// src/app/practitioners-door/page.tsx
"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
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
  const [isSubscribing, setIsSubscribing] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3 border-l border-r border-gray-100 px-8">
              <DoorHeader doorType="practitioners-door" />

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-800">
                  The Practitioner's Door is where theory meets practice. Here,
                  you'll find tools, principles, and insights designed to
                  support you in applying the concepts of energy, consciousness,
                  and balance to your daily life. Whether you're looking to
                  cultivate inner resilience, achieve harmony in your
                  relationships, or manage your energy more effectively, this
                  section offers practical guidance grounded in the core
                  elements of our system.
                </p>

                <h2 className="text-2xl font-normal mt-12 mb-6 text-gray-900">
                  Why Practice Matters
                </h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  Knowledge alone is powerful, but true transformation comes
                  from practice. When we actively apply energy principles in our
                  lives, we begin to see shifts—in how we respond to challenges,
                  how we relate to others, and how we cultivate balance in a
                  busy world. The exercises, articles, and resources here are
                  designed to help you turn insights into action, making these
                  concepts a living, breathing part of your reality.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">
                  What You'll Find Here
                </h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  In this section, we explore the practical side of ideas like
                  duality, consciousness, and belief systems, and how they can
                  serve you in real-life situations. Through articles, simple
                  exercises, and energy principles, you'll gain tools to help
                  you:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">
                      Balance Activity and Rest:{" "}
                    </strong>
                    Discover how the forces of yin and yang apply to personal
                    energy management, helping you know when to take action and
                    when to rest.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">
                      Transform Limiting Beliefs:{" "}
                    </strong>
                    Understand how belief systems shape your experience and
                    learn practical ways to challenge and transform limiting
                    beliefs that no longer serve you.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">
                      Embrace Inner and Outer Strengths:{" "}
                    </strong>
                    Explore the duality of strength and vulnerability, learning
                    how to honor both aspects of yourself for a more fulfilling,
                    balanced life.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-12 mb-6 text-gray-900">
                  Explore, Apply, and Transform
                </h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  Start with an article or practice that speaks to you, or try
                  one of the exercises below to begin integrating these
                  principles right now. Remember, even small steps can lead to
                  meaningful changes over time. As you practice, notice how your
                  awareness grows, and how each action brings you closer to a
                  state of inner balance and clarity.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">
                  Getting Started: Suggested Exercises
                </h2>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">
                      Daily Balance Check-In
                    </strong>
                    <br />
                    Each day, take five minutes to reflect on the balance
                    between activity and rest. Ask yourself: “Where can I allow
                    more rest? Where can I add more intentional action?” This
                    simple check-in helps you harness the natural flow of yin
                    and yang to feel more balanced and energized.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">
                      Belief Shift Exercise
                    </strong>
                    <br />
                    Identify a belief you hold about yourself or the world that
                    feels limiting. For example, “I'm not good at managing
                    stress.” Write down this belief, then gently question it:
                    “Is this belief absolutely true? What evidence exists for
                    and against it?” By examining and reframing beliefs, you can
                    open yourself to new possibilities.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">
                      Mindful Energy Alignment
                    </strong>
                    <br />
                    Take a few moments to focus on your breath. With each
                    inhale, feel yourself drawing in supportive, nurturing
                    energy (yin). With each exhale, feel yourself releasing any
                    tension or resistance (yang). This practice centers and
                    aligns your energy, leaving you refreshed and balanced.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-12 mb-6 text-gray-900">
                  Dive Deeper
                </h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  Explore the articles, exercises, and glossary terms listed
                  below to continue your journey. Remember, growth is a
                  process—take it at your own pace and enjoy the transformation
                  that unfolds.
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

              {/* Door Card Component */}
              <DoorCard
                title="Inner Work"
                description="Learn how to turn your attention inward, map the inner landscape, and deal with inner forces."
                icon={Eye}
                href="/practice/inner-work"
                doorType="practitioner"
              />
              {/* Book Promotion */}
              <motion.div
                className="bg-white border border-gray-100 rounded-sm p-6"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <img
                      src="/images/books/science-of-energy-cover.jpg"
                      alt="The Science of Energy Book Cover"
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
                  disabled={isSubscribing}
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </motion.button>
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
