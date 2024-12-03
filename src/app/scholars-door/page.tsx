// src/app/scholars-door/page.tsx
"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Grid } from "lucide-react";
import Section from "@/components/ui/Section";
import PageTransition from "@/components/ui/PageTransition";
import InteractiveLink from "@/components/ui/InteractiveLink";
import DoorCard from "@/components/features/DoorCard";
import DoorHeader from "@/components/features/DoorHeader";
import DoorEnterButton from "@/components/features/DoorEnterButton";
import DoorJourney from "@/components/features/DoorJourney";
import DoorSeriesNav from "@/components/features/DoorSeriesNav";

export default function ScholarsDoorPage() {
  const [isSubscribing, setIsSubscribing] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-12 md:pt-24 pb-16">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3 border-l border-r border-gray-100 mx-auto md:px-8">
              <DoorHeader doorType="scholars-door" />

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-800">
                  The Scholar's Door invites researchers, academics, and
                  intellectual explorers to engage deeply with the empirical and
                  theoretical advancements within this ontological framework.
                  Here, scientific inquiry meets metaphysical investigation,
                  bridging the classical and quantum realms through foundational
                  principles that reveal both the geometric and experiential
                  nature of reality. This section is designed for readers
                  seeking precision, testable hypotheses, and groundbreaking
                  approaches to longstanding questions in both science and
                  metaphysics.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">
                  Beyond the Material Paradigm
                </h2>
                <p className="text-lg text-gray-800">
                  Modern science stands at a crossroads. While our technological
                  and mathematical tools have never been more sophisticated,
                  fundamental questions about consciousness, quantum phenomena,
                  and the nature of reality itself remain unresolved. These
                  persistent puzzles suggest we may need more than new
                  equations—we may need a new framework for understanding
                  reality itself.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">
                  A New Framework for Understanding Reality
                </h2>
                <p className="text-lg text-gray-800">
                  <em>The Science of Energy</em> lays the groundwork for an
                  ontology where reality is viewed through a holistic lens,
                  dissolving artificial boundaries between disciplines and
                  paving the way for a unified system of thought that redefines
                  concepts like consciousness, matter, and duality. This
                  approach integrates many seemingly contradictory aspects of
                  existence, offering fresh perspectives on quantum phenomena,
                  consciousness, and the fabric of space and time. Here,
                  scholars will find a framework that goes beyond the often
                  compartmentalized knowledge prevalent in academic treatments
                  of reality, proposing a cohesive view that respects both the
                  empirical rigor of science and the transformative potential of
                  metaphysical inquiry.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">
                  What You'll Discover in the Scholar's Door
                </h2>
                <p className="text-lg text-gray-800">
                  This section presents a range of resources and articles
                  designed to engage deeply with the principles of this system.
                  You'll find:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-emerald-100">
                    <strong className="text-gray-900">
                      Theoretical Foundations:{" "}
                    </strong>
                    Delve into core concepts like continuous-discrete duality,
                    space-time as a relational field, and the observer-observed
                    interaction. Each concept is presented with a focus on
                    precision and clarity, inviting scholarly engagement.
                  </li>
                  <li className="pl-6 border-l-2 border-emerald-100">
                    <strong className="text-gray-900">
                      Scientific Implications:{" "}
                    </strong>
                    Explore how this system applies to and expands upon
                    contemporary scientific knowledge. By bridging quantum and
                    classical realms, it offers insights into complex dynamics
                    between observer and observed, wave-particle duality, and
                    the role of consciousness in shaping physical reality.
                  </li>
                  <li className="pl-6 border-l-2 border-emerald-100">
                    <strong className="text-gray-900">
                      Innovative Perspectives on Consciousness:{" "}
                    </strong>
                    Investigate the nature of consciousness as more than an
                    emergent property, exploring its foundational role in the
                    ontological structure of reality. This approach challenges
                    materialist views, proposing that consciousness is integral
                    to understanding the foundations of physical and
                    metaphysical systems.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">
                  An Invitation to Engage and Explore
                </h2>
                <p className="text-lg text-gray-800">
                  More than a repository of resources, The Scholar's Door is an
                  invitation to question, investigate, and potentially reshape
                  our understanding of reality. We invite you to engage
                  critically, test hypotheses, and consider how these principles
                  might offer innovative solutions to contemporary challenges in
                  physics, metaphysics, and our understanding of the underlying
                  order of nature.
                </p>

                {/* Enter Door Button */}
                <DoorEnterButton doorType="scholars-door" />
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
              <DoorJourney doorType="scholars-door" />

              {/* Article Navigation */}
              <DoorSeriesNav doorType="scholars-door" />

              {/* Door Card Component */}
              <DoorCard
                title="Research Papers"
                description="Explore research publications on consciousness and quantum mechanics"
                icon={FileText}
                href="/research#papers"
                doorType="scholar"
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
                title="Theoretical Framework"
                description="Explore the theoretical framework behind the research"
                icon={Grid}
                href="/research/framework"
                doorType="scholar"
              />
            </motion.aside>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}
