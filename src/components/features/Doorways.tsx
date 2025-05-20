// src/components/features/Doorways.tsx
'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Eye, Lightbulb } from 'lucide-react';

interface Doorway {
  title: string;
  subtitle: string;
  description: string;
  icon: typeof BookOpen | typeof Eye | typeof Lightbulb;
  path: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    shadow: string;
  };
}

const doorways: Doorway[] = [
  {
    title: "Scholar's Door",
    subtitle: "Intellectual (Research & Theory)",
    description: "Explore scientific and theoretical perspectives bridging conscious and material dimensions of reality.",
    icon: BookOpen,
    path: "/scholars-door",
    theme: {
      primary: "from-emerald-500/50",
      secondary: "to-emerald-200/50",
      accent: "emerald-600",
      text: "emerald-900",
      shadow: "emerald-900/5"
    }
  },
  {
    title: "Observer's Door",
    subtitle: "Sensory (Inwardness & Experience)",
    description: "Discover through the first-person perspective the nature of inner experience and its dynamics.",
    icon: Eye,
    path: "/observers-door",
    theme: {
      primary: "from-blue-500/50",
      secondary: "to-blue-200/50",
      accent: "blue-600",
      text: "blue-900",
      shadow: "blue-900/5"
    }
  },
  {
    title: "Practitioner's Door",
    subtitle: "Embodied (Application & Integration)",
    description: "Learn to integrate principles in daily life that lead to greater balance and harmony.",
    icon: Lightbulb,
    path: "/practitioners-door",
    theme: {
      primary: "from-amber-500/50",
      secondary: "to-amber-200/50",
      accent: "amber-600",
      text: "amber-900",
      shadow: "amber-900/5"
    }
  }
];

interface DoorwaysProps {
  showHeader?: boolean;
}

const Doorways = ({ showHeader = true }: DoorwaysProps) => {
  const [hoveredDoor, setHoveredDoor] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {showHeader && (
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-light mb-4">Choose an Entrance</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Each offers a unique perspective on the relationship between consciousness and matter.
          </p>
        </motion.div>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        {doorways.map((door, index) => {
          const Icon = door.icon;
          const isHovered = hoveredDoor === index;

          return (
            <motion.div
              key={door.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link href={door.path}>
                <motion.div
                  className="relative h-full min-h-[400px] rounded-xl cursor-pointer perspective-1000"
                  onHoverStart={() => {
                    setHoveredDoor(index);
                  }}
                  onHoverEnd={() => {
                    setHoveredDoor(null);
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Door Frame - Outer */}
                  <motion.div 
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${door.theme.primary} ${door.theme.secondary}`}
                    style={{
                      boxShadow: `0 20px 40px -10px ${door.theme.shadow}`,
                    }}
                    animate={{
                      rotateY: isHovered ? -5 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Door Frame - Inner */}
                  <motion.div 
                    className="absolute inset-[1px] rounded-xl bg-white/90 backdrop-blur-sm"
                    animate={{
                      rotateY: isHovered ? -5 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Content Container */}
                    <div className="relative h-full p-8 flex flex-col">
                      {/* Icon Container */}
                      <motion.div 
                        className={`w-16 h-16 rounded-xl bg-${door.theme.accent}/10 flex items-center justify-center mb-6`}
                        animate={{
                          scale: isHovered ? 1.1 : 1,
                          rotateY: isHovered ? -10 : 0,
                        }}
                      >
                        <Icon className={`w-8 h-8 text-${door.theme.accent}`} strokeWidth={1.5} />
                      </motion.div>

                      {/* Text Content */}
                      <motion.div
                        animate={{
                          x: isHovered ? 8 : 0,
                        }}
                      >
                        <h3 className={`text-2xl font-light mb-2 text-${door.theme.text}`}>
                          {door.title}
                        </h3>
                        <p className="text-sm font-medium text-gray-600 mb-4">
                          {door.subtitle}
                        </p>
                        <p className="text-sm text-gray-600 mb-6">
                          {door.description}
                        </p>
                      </motion.div>

                      {/* Enter Button */}
                      <motion.div 
                        className="mt-auto"
                        animate={{
                          x: isHovered ? 12 : 0,
                        }}
                      >
                        <span className={`inline-flex items-center text-sm font-medium text-${door.theme.accent}`}>
                          Enter
                          <motion.span
                            className="ml-2"
                            animate={{
                              x: isHovered ? 4 : 0,
                            }}
                          >
                            →
                          </motion.span>
                        </span>
                      </motion.div>

                      {/* Animated Portal Light Effect */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            className="absolute inset-0 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${door.theme.primary} ${door.theme.secondary} opacity-20`} />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Door Shadow */}
                  <motion.div
                    className="absolute -inset-4 rounded-xl opacity-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${door.theme.shadow}, transparent)`,
                    }}
                    animate={{
                      opacity: isHovered ? 0.3 : 0,
                    }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Doorways;