// src/app/practice/page.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Eye, Scale, Compass, Library, ArrowRight } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import Link from "next/link";

export default function PracticeOverview() {
  const coreCards = [
    {
      number: "1",
      title: "Inner Work",
      description: "Understanding the observer, the field, and the structures of inner experience.",
      href: "/practice/inner-work",
      icon: Eye,
      color: "indigo",
    },
    {
      number: "2",
      title: "Balance",
      description: "Working with the equilibrium between opposites—rest and activity, love and limits, structure and flow.",
      href: "/practice/balance",
      icon: Scale,
      color: "blue",
    },
    {
      number: "3",
      title: "Discipline",
      description: "Building the capacity to act from alignment rather than impulse.",
      href: "/practice/discipline",
      icon: Compass,
      color: "purple",
    },
  ];

  const CorePracticeCard = ({ card, index }: { card: typeof coreCards[0]; index: number }) => {
    const Icon = card.icon;
    
    const getColorClasses = (color: string) => {
      switch (color) {
        case "indigo":
          return { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" };
        case "blue":
          return { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" };
        case "purple":
          return { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100" };
        default:
          return { bg: "bg-gray-50", text: "text-gray-600", border: "border-gray-100" };
      }
    };

    const colors = getColorClasses(card.color);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        whileHover={{ y: -4 }}
        className="h-full"
      >
        <Link href={card.href}>
          <div className={`h-full bg-white rounded-lg border-2 ${colors.border} shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 relative`}>
            {/* Number badge */}
            <div className={`absolute top-4 right-4 w-8 h-8 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center font-semibold text-sm`}>
              {card.number}
            </div>
            
            <div className="p-6 pt-8">
              <div className={`w-12 h-12 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                {card.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {card.description}
              </p>
              
              <motion.div 
                className={`flex items-center text-sm font-medium ${colors.text}`}
                whileHover={{ x: 4 }}
              >
                {index === 0 ? "Start Here" : index === 1 ? "Continue Here" : "Then This"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        {/* Hero Section */}
        <Section width="default" className="pt-24 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl mb-6">Practice</h1>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                Understanding reality is not enough. Living in alignment with it requires practice—deliberate, structured work that integrates what you know with how you are.
              </p>
              <p className="text-lg leading-relaxed">
                The practices here are designed to help you develop inner coherence, recognize and work with the structures that shape experience, stabilize your awareness, and build capacity for depth and discipline.
              </p>
            </div>
          </div>
        </Section>

        {/* Core Practices Section */}
        <Section width="default" className="pb-16  border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-medium mb-4">Core Practices</h2>
              <p className="text-lg text-gray-600">
                Start here. These three practices form the foundation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {coreCards.map((card, index) => (
                <CorePracticeCard key={card.title} card={card} index={index} />
              ))}
            </div>
          </div>
        </Section>

        {/* Practice Library Section */}
        <Section width="default" className="pb-24 pt-8 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-medium mb-4">Practice Library</h2>
              <p className="text-lg text-gray-600 mb-8">
                Once you've worked with the core practices, explore these additional tools and methods.
              </p>
            </div>

            <motion.div
              whileHover={{ y: -2 }}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Link href="/practice/library" className="block p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                      <Library className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-gray-900 mb-1">
                        Explore the Library
                      </h3>
                      <p className="text-gray-600">
                        Boundaries, detachment, empathy, meditation, mantras, and more
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              </Link>
            </motion.div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}