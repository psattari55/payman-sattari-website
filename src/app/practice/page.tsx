// src/app/practice/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Library, ArrowRight } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function PracticeOverview() {
  const coreCards = [
    {
      number: "01",
      title: "Inner Work",
      description: "Understanding the observer, the field, and the structures of inner experience.",
      href: "/practice/inner-work",
      label: "Start Here",
    },
    {
      number: "02",
      title: "Balance",
      description: "Working with the equilibrium between opposites—rest and activity, love and limits.",
      href: "/practice/balance",
      label: "Continue",
    },
    {
      number: "03",
      title: "Discipline",
      description: "Building structure and capacity through healthy limits.",
      href: "/practice/discipline",
      label: "Integration",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mx-auto px-6 py-24 border-b border-gray-50">
          <motion.header className="text-center md:text-left" {...fadeIn}>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">
              Methodology
            </span>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-8">Practice</h1>
            <div className="space-y-6 text-[17px] text-gray-500 font-serif italic leading-relaxed">
              <p>
                Understanding reality is not enough. Living in alignment requires practice—deliberate, structured work that integrates what we know with how we are. These practices are designed to help develop inner clarity, coherence, and capacity.
              </p>
            </div>
          </motion.header>
        </div>

        {/* Core Foundation Section */}
        <section id="core" className="max-w-6xl mx-auto px-6 pt-12 pb-16 scroll-mt-24">
          <div className="mb-16 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-2 block">The Foundation</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Practices</h2>
            
              {/* New Guidance Text */}
              <p className="text-[15px] text-gray-500 leading-relaxed font-light">
              Transformation requires a sequential movement. First, we must map the terrain of our own consciousness to understand how to navigate it. From that clarity, we can learn to work with the equilibrium of opposites. Finally, we establish a system of discipline to reify these insights into a permanent structure of character.
              </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {coreCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={card.href} className="block space-y-6">
                  <div className="text-4xl font-black text-gray-100 group-hover:text-gray-900 transition-colors duration-500">
                    {card.number}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-gray-900 transition-colors">
                    <span>{card.label}</span>
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Practice Library: More of a "Index" feel */}
        <section className="bg-gray-50 pt-12 md:pt-20 pb-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-2 block">Extension</span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice Library</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Additional tools and methods for building capacity and coherence, ranging from boundaries and detachment to meditation and mantras.
                </p>
              </div>
              
              <Link 
                href="/practice/library" 
                className="inline-flex items-center gap-4 bg-white border border-gray-200 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 hover:border-gray-900 transition-all"
              >
                <Library size={18} />
                Explore the Index
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}