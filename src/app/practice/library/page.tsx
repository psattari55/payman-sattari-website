// src/app/practice/library/page.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import type { LucideIcon } from "lucide-react";
import { 
  Eye,       // Inner Work
  Scale,     // Balance
  Compass,   // Discipline
  Orbit,     // Meditation
  Shield,    // Boundaries
  Heart,     // Empathy
  Unplug,    // Detachment
  Sparkles,  // Mantras
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import Link from 'next/link';

interface Practice {
  id: string;
  title: string;
  description: string;
  difficulty: 1 | 2 | 3;
  icon: LucideIcon;
  color: string;
}

// Core practices (shown differently)
const corePractices = [
  {
    id: "inner-work",
    title: "Inner Work",
    description: "Understanding the observer, the field, and the structures of inner experience.",
    icon: Eye,
    color: "indigo",
  },
  {
    id: "balance",
    title: "Balance",
    description: "Working with the equilibrium between opposites—rest and activity, love and limits, structure and flow.",
    icon: Scale,
    color: "blue",
  },
  {
    id: "discipline",
    title: "Discipline",
    description: "Building the capacity to act from alignment rather than impulse.",
    icon: Compass,
    color: "purple",
  },
];

// Supplementary practices
const practices: Practice[] = [
  {
    id: "boundaries",
    title: "Boundaries",
    description: "Learn to set and maintain healthy limits while preserving connection and understanding.",
    difficulty: 2,
    icon: Shield,
    color: "purple",
  },
  {
    id: "empathy",
    title: "Empathy",
    description: "Cultivate the ability to understand and connect with others while maintaining your own center.",
    difficulty: 2,
    icon: Heart,
    color: "rose",
  },
  {
    id: "mantras",
    title: "Mantras",
    description: "Use focused phrases and sounds to center attention and cultivate specific qualities of consciousness.",
    difficulty: 1,
    icon: Sparkles,
    color: "amber",
  },
  {
    id: "meditation",
    title: "Meditation",
    description: "Develop presence and awareness through simple practices that enhance your capacity to be with your inner experience.",
    difficulty: 1,
    icon: Orbit,
    color: "indigo",
  },
  {
    id: "detachment",
    title: "Detachment",
    description: "Develop the capacity to observe without becoming entangled, creating space for clearer understanding.",
    difficulty: 3,
    icon: Unplug,
    color: "slate",
  },
];

const DifficultyIndicator = ({ level }: { level: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className={`w-1.5 h-1.5 rounded-full ${
            n <= level ? "bg-gray-400" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

const CorePracticeRow = ({ practice, index }: { practice: typeof corePractices[0]; index: number }) => {
  const Icon = practice.icon;
  
  const getColorClasses = (color: string) => {
    switch (color) {
      case "indigo":
        return { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" };
      case "blue":
        return { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" };
      case "purple":
        return { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" };
      default:
        return { bg: "bg-gray-50", text: "text-gray-600", border: "border-gray-200" };
    }
  };

  const colors = getColorClasses(practice.color);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ x: 4 }}
      className="group"
    >
      <Link href={`/practice/${practice.id}`}>
        <div className={`flex items-center gap-6 p-6 bg-white rounded-lg border-2 ${colors.border} hover:shadow-md transition-all duration-300`}>
          {/* Number */}
          <div className={`flex-shrink-0 w-12 h-12 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center font-semibold text-lg`}>
            {index + 1}
          </div>
          
          {/* Icon */}
          <div className={`flex-shrink-0 w-14 h-14 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center`}>
            <Icon className="w-7 h-7" />
          </div>
          
          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-xl font-medium text-gray-900 mb-1">
              {practice.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {practice.description}
            </p>
          </div>
          
          {/* Arrow */}
          <div className="flex-shrink-0">
            <ArrowRight className={`w-5 h-5 ${colors.text} group-hover:translate-x-1 transition-transform`} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const PracticeCard = ({ practice }: { practice: Practice }) => {
  const Icon = practice.icon;
  
  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple":
        return "bg-purple-50 text-purple-600";
      case "indigo":
        return "bg-indigo-50 text-indigo-600";
      case "rose":
        return "bg-rose-50 text-rose-600";
      case "amber":
        return "bg-amber-50 text-amber-600";
      default:
        return "bg-slate-50 text-slate-600";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="h-full bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
    >
      <Link href={`/practice/library/${practice.id}`} className="block">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorClasses(practice.color)}`}>
              <Icon className="w-6 h-6" />
            </div>
            <DifficultyIndicator level={practice.difficulty} />
          </div>
          
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            {practice.title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {practice.description}
          </p>
          
          <motion.div 
            className="flex items-center text-sm text-gray-500 hover:text-gray-700"
            whileHover={{ x: 4 }}
          >
            Explore practice
            <ArrowRight className="w-4 h-4 ml-1" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function PracticeLibrary() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <Section width="default" className="pt-24 pb-16">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl mb-4">Practice Library</h1>
            <p className="text-xl font-light text-gray-600">
              A structured collection of practices for conscious development.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Core Practices Section */}
            <div className="mb-16">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-medium">Core Foundation</h2>
                </div>
                <p className="text-base text-gray-600 mb-6">
                  Begin here and work through them in order—each builds on the previous. These three practices form the foundation.
                </p>
              </div>

              <div className="space-y-4">
                {corePractices.map((practice, index) => (
                  <CorePracticeRow key={practice.id} practice={practice} index={index} />
                ))}
              </div>
            </div>

            {/* Guidance Section */}
            <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    After Completing the Core
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Once you've worked through Inner Work, Balance, and Discipline, you'll have the foundational capacity to engage with more specialized practices. The tools below can be explored in any order based on what resonates with your current needs and development.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Consider <strong>Boundaries</strong> and <strong>Empathy</strong> as natural next steps—they build directly on the core practices and address how we relate to others while maintaining our center.
                  </p>
                </div>
              </div>
            </div>

            {/* Supplementary Practices */}
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                  <h2 className="text-2xl font-medium">Additional Practices</h2>
                </div>
                <p className="text-base text-gray-600">
                  Specialized tools and techniques to support specific aspects of development.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}