'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Section from '@/components/ui/Section'
import PageTransition from '@/components/ui/PageTransition'
import Link from 'next/link'

export default function TheoreticalFrameworkPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Section width="narrow" className="py-16 md:py-24">
          
          {/* Navigation Label */}
          <div className="mb-12 md:mb-16">
            <Link href="/research" className="group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Research Index
            </Link>
          </div>

          {/* Header & Abstract */}
          <header className="mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-4 block">
              Core Theory / Ontological Framework
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter mb-10">
              A Unified Account of <br />Matter and Meaning
            </h1>
            <div className="prose prose-base max-w-2xl text-gray-700 leading-relaxed font-light space-y-6">
              <p>
                All investigation begins from a primary observation: <span className="text-gray-900 italic">reality is observable.</span> This starting point reveals a fundamental tension—the measurable structures of physics and the qualitative dimensions of consciousness appear to obey disparate rules. 
              </p>
              <p>
                In practice, however, we observe a reciprocal relationship: physical systems shape experience, and observation participates in the manifestation of physical systems. This framework establishes that this relationship is not an anomaly, but a structural feature of reality.
              </p>
            </div>
          </header>

          {/* Axiomatic Principles */}
          <div className="space-y-16 border-t border-gray-50 pt-12">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900">
              Foundational Principles
            </h2>
            
            <div className="grid md:grid-cols-[140px,1fr] gap-8 items-baseline">
              <span className="text-[10px] font-bold text-gray-300 tracking-widest">// 01</span>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">The Unity of Reality</h3>
                <p className="text-gray-600 font-light leading-relaxed max-w-xl">
                  Apparent divisions—continuous and discrete, potential and actual, subject and object—arise from perspective rather than separate underlying substances. These complementarities express different aspects of a single, coherent order.
                </p>
              </div>

              <span className="text-[10px] font-bold text-gray-300 tracking-widest">// 02</span>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Geometric Topology</h3>
                <p className="text-gray-600 font-light leading-relaxed max-w-xl">
                  Order manifests through geometric and topological structure. Geometry is not merely a mathematical convenience; it reflects the organizational principles through which both physical phenomena and conscious experience emerge.
                </p>
              </div>

              <span className="text-[10px] font-bold text-gray-300 tracking-widest">// 03</span>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Field Dynamics</h3>
                <p className="text-gray-600 font-light leading-relaxed max-w-xl">
                  Quantum field dynamics are interpreted as the interaction between information, measurement, and structure. By recognizing the role of the observer, we resolve persistent paradoxes as artifacts of incomplete ontology.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation / Next Steps */}
          <footer className="mt-24 pt-12 border-t border-gray-100 grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Related Reading</h4>
              <p className="text-sm text-gray-600 font-light italic">
                Each research paper develops one aspect of the system. They are designed to be read as independent inquiries that form a singular whole.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start md:items-end">
              <Link href="/research#papers" className="text-[10px] font-bold uppercase tracking-widest text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors">
                Examine Research Papers
              </Link>
              <Link href="/contact" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">
                Inquire via Correspondence
              </Link>
            </div>
          </footer>
        </Section>
      </div>
    </PageTransition>
  )
}