// src/app/about/page.tsx
'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NewsletterModal from '@/components/ui/NewsletterModal';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function AboutPage() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        
        {/* Header Section */}
        <motion.header className="mb-20" {...fadeIn}>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">
            Biography
          </span>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-12">
            P. Orelio Sattari
          </h1>
          
          <div className="relative w-full aspect-[21/9] overflow-hidden bg-gray-100 rounded-sm mb-16">
            <Image 
              src="/images/orelio.jpg" 
              alt="P. Orelio Sattari"
              fill
              className="object-cover object-[center_18%] md:object-[center_12%] grayscale contrast-110 brightness-95 transition-opacity duration-1000"
              priority
            />
            {/* Olive Green Overlay */}
            <div 
              className="absolute inset-0 bg-[#556b2f] opacity-15 mix-blend-multiply pointer-events-none" 
              aria-hidden="true"
            />
          </div>
        </motion.header>

        <motion.div className="space-y-16 text-gray-800" {...fadeIn}>
          
          {/* Introduction & Background */}
          <section className="space-y-8">
            <p className="text-xl text-gray-900 leading-relaxed font-serif italic border-l-2 border-gray-900 pl-6">
              For more than fifteen years, my work has been devoted to a single pursuit: understanding the fundamental nature of reality, and learning how to live in alignment with it.
            </p>
            
            <div className="space-y-6 text-[17px] leading-relaxed text-gray-700">
              <p>
                I work across theoretical physics, ontology, systems theory, and the disciplined study of interiority and order—not as separate domains, but as aspects of one continuous investigation.
              </p>
              <p>
                My path has been unconventional. Rather than advancing through a traditional academic track, I spent more than ten years developing an integrated theoretical framework from first principles. Several of these works have been submitted to leading physics journals and circulated publicly through Zenodo. The system that has emerged bridges domains typically kept isolated — quantum behavior, field structure, conscious experience, and the dynamics of inner life.
              </p>
              <p>
                In 2023, I published <em>The Science of Energy</em>, which received the Nautilus Silver Medal in Science & Cosmology. That book traces how modern science came to exclude consciousness from its foundations and outlines why a more complete framework is now necessary. My forthcoming book, <em>Basic Duality</em>, extends this work by presenting a unified model of the continuous and discrete aspects of reality, grounded both in physics and in the experience of the observer.
              </p>
            </div>
          </section>

          {/* Identity Section (What I Am) */}
          <section className="pt-12 border-t border-gray-100">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
              Identity & Methodology
            </h2>
            <div className="space-y-8">
              <div>
                <p  className="text-base text-gray-900"><em>I describe myself as a philosopher, ashavan, and transdisciplinary researcher.</em></p>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Philosopher,</h3>
                <p className="text-sm text-gray-700 leading-relaxed">because my work begins with ontology and first principles.</p>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Ashavan,</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  because my commitment is not only to understanding reality, but to <em>aligning</em> with it — to living in accordance with the underlying order that gives rise to both truth and character. The term has ancient roots, but my use of it is contemporary and methodological, not religious or doctrinal. 
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">Transdisciplinary Researcher,</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  because the questions I work with cut across physics, metaphysics, psychology, and the disciplined study of consciousness, and cannot be reasonably contained within a single field. For me, transdisciplinary does not simply mean "studying multiple fields", but working from a level that precedes disciplinary fragmentation.
                </p>
             </div>
            </div>
          </section>

          {/* 3. The Ashavan Concept - Place this between Identity and Vision */}
          <section className="pt-12 border-t border-gray-100">
            <div className="bg-gray-50/50 p-10 md:p-12 rounded-sm border-l-4 border-gray-900">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">
                Concept
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What is an ashavan?</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-base leading-relaxed text-gray-700">
                  An ashavan is one who seeks to understand and live in accordance with the fundamental order of reality — not as a belief, but as a discipline of perception, character, and alignment.
                </p>
                <p className="text-base leading-relaxed text-gray-700 mt-4">
                  The term has ancient roots, but my use of it is contemporary: it names a way of seeing and acting that unites truth, integrity, and the pursuit of reality as it is.
                </p>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="pt-12 border-t border-gray-100">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
              Vision
            </h2>
            <p className="text-sm leading-relaxed text-gray-700 mb-8">
              We are living at a moment when our scientific models and our lived experience no longer speak the same language. The divide between materialism and consciousness has reached its limit. My work aims to build a coherent foundation that reconnects these domains—one in which the observer, the physical world, and the dynamics of inner life form a unified structure rather than competing explanations.
            </p>
            {/* <ul className="space-y-4 text-gray-700">
              {['New directions for physics and systems theory', 'New ways of understanding perception and experience', 'New tools for psychological balance and human development', 'Pathways to integrating truth, character, and lived coherence'].map((item) => (
                <li key={item} className="flex gap-4 items-baseline">
                  <span className="text-gray-300 text-xs">—</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul> */}
          </section>

          {/* Current Work: Bibliography Style */}
          <section className="bg-gray-50 p-10 rounded-sm">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
              Current Work
            </h2>
            <ul className="space-y-6 text-sm text-gray-700">
              <li className="flex gap-4">
                <span className="text-gray-300">—</span>
                <span>Revised second edition of <em className="text-gray-900 font-medium">The Science of Energy</em>.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gray-300">—</span>
                <span>Preparing <em className="text-gray-900 font-medium">Basic Duality</em> (Book 2).</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gray-300">—</span>
                <span>Theoretical research into quantum mechanics, measurement, and space-time structure.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gray-300">—</span>
                <span>Essays and deep dives from first principles.</span>
              </li>
            </ul>
          </section>

        {/* Contact Section */}
          <footer className="py-12 text-center border-t border-gray-50">
             <h2 className="text-2xl font-bold text-gray-900 mb-6">Stay Connected</h2>
             <div className="flex justify-center gap-8">
                <button
                  onClick={() => setIsNewsletterOpen(true)}
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
                >
                  Newsletter
                </button>
                <a 
                  href="/contact"
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
                >
                  Contact
                </a>
             </div>
          </footer>

        </motion.div>
      </div>

      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
    </div>
  );
}