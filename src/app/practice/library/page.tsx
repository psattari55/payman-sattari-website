// src/app/practice/library/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import type { LucideIcon } from "lucide-react";
import { 
  Orbit,     // for Meditation
  Shield,    // for Boundaries
  Heart,     // for Empathy
  Unplug,    // for Detachment
  Sparkles,  // for Mantras
} from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";

interface Practice {
  id: string;
  title: string;
  description: string;
  difficulty: 1 | 2 | 3;
  icon: LucideIcon;
  color: string;
}

const practices: Practice[] = [
  {
    id: "meditation",
    title: "Meditation",
    description: "Develop presence and awareness through simple practices that enhance your capacity to be with your inner experience.",
    difficulty: 1,
    icon: Orbit,
    color: "indigo",
  },
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
    id: "detachment",
    title: "Detachment",
    description: "Develop the capacity to observe without becoming entangled, creating space for clearer understanding.",
    difficulty: 3,
    icon: Unplug,
    color: "slate",
  },
  {
    id: "mantras",
    title: "Mantras",
    description: "Use focused phrases and sounds to center attention and cultivate specific qualities of consciousness.",
    difficulty: 1,
    icon: Sparkles,
    color: "amber",
  },
];

const DifficultyIndicator = ({ level }: { level: number }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={`w-1.5 h-1.5 rounded-full ${
              n <= level
                ? "bg-gray-300"
                : "bg-gray-100"
            }`}
          />
        ))}
      </div>
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
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  export default function PracticeLibrary() {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
          <Section width="default" className="pt-24 pb-16">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl mb-4">Practice Library</h1>
              <p className="text-xl font-light text-gray-600">
                A collection of practices to support your journey of conscious development.
              </p>
            </div>
  
            <div className="max-w-6xl mx-auto">
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
          </Section>
        </div>
      </PageTransition>
    );
  }