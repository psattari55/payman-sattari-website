// src/app/practice/library/page.tsx
"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Eye, Scale, Compass, Orbit, Shield, Heart, Unplug, ArrowRight } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import Link from 'next/link';

// Updated categories reflecting your feedback
const curriculum = [
  {
    category: "I. The Foundation",
    description: "The primary sequence. It is suggested to engage with these core practices in order to establish a foundation for conscious development.",
    isCore: true,
    items: [
      { id: "inner-work", title: "Inner Work", icon: Eye, summary: "Mapping the terrain of the observer and structure of interiority." },
      { id: "balance", title: "Balance", icon: Scale, summary: "Achieving an equilibrium between opposites—structure and flow, self and others." },
      { id: "discipline", title: "Discipline", icon: Compass, summary: "Engaging a form of discipline that builds structure while strengthening relationship." },
    ]
  },
  {
    category: "II. Relational Dynamics",
    description: "Building on the core to address how we maintain our center while in connection with others.",
    isCore: false,
    items: [
      { id: "boundaries", title: "Boundaries", icon: Shield, summary: "Learning to set and maintain healthy limits. Protecting the integrity of the center." },
      { id: "empathy", title: "Empathy", icon: Heart, summary: "Connecting with the inner reality of others without losing your own center." },
    ]
  },
  {
    category: "III. Deepening Awareness",
    description: "Advanced explorations, techniques, and mechanics.",
    isCore: false,
    items: [
      { id: "meditation", title: "Meditation", icon: Orbit, summary: "Developing presence through structured awareness of inner reality." },
      { id: "detachment", title: "Detachment", icon: Unplug, summary: "Cultivating observation without entanglement." },
    ]
  }
];

const PracticeRow = ({ item, index, isCore }: { item: any; index: number; isCore: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.05 }}
    className="group border-b border-gray-50 last:border-transparent -mx-4 px-4 transition-all duration-300 hover:bg-gray-50/50"
  >
    <Link 
      href={isCore ? `/practice/${item.id}` : `/practice/library/${item.id}`} 
      className="grid md:grid-cols-[60px,1fr,auto] items-center gap-6 py-8"
    >
      <div className="text-gray-200 group-hover:text-gray-900 transition-colors duration-300">
        <item.icon strokeWidth={1.5} size={28} />
      </div>
      <div>
        <h3 className="text-lg font-extrabold text-gray-900 mb-1 tracking-tight">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 font-light tracking-wide italic transition-colors group-hover:text-gray-700">
          {item.summary}
        </p>
      </div>
      <div className="hidden md:block opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
        <ArrowRight size={18} className="text-gray-400" />
      </div>
    </Link>
  </motion.div>
);

export default function PracticeLibrary() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Section width="narrow" className="pt-16 md:pt-24 pb-16">

          <header className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">
              Index
            </span>
            <div className="border-b border-gray-50 pb-12 mb-9">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-8">
                Practice Library
              </h1>
              <p className="text-xl text-gray-900 font-serif italic border-l-2 border-gray-900 pl-8 leading-relaxed">
                A structured curriculum for conscious development. A taxonomy of methods and tools designed to transition from theory to lived alignment.
              </p>
            </div>
          </header>

          {/* Curriculum Index */}
          <div className="space-y-20 md:space-y-16">
            {curriculum.map((section, sectionIdx) => ( // Captured sectionIdx here
              <div key={section.category} className="space-y-4 md:space-y-8">
                <div className="max-w-xl">
                  <h2 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gray-900 mb-4">
                    {section.category}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    {section.description}
                  </p>
                </div>
                
                <div className="border-t border-b border-gray-100">
                  {section.items.map((item, idx) => (
                    <PracticeRow 
                      key={item.id} 
                      item={item} 
                      index={idx} 
                      isCore={sectionIdx === 0} // Now sectionIdx is defined
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <footer className="pt-12">
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xl italic">
              * This library is a living archive. Additional practices are added as they become available.
            </p>
          </footer>

        </Section>
      </div>
    </PageTransition>
  );
}