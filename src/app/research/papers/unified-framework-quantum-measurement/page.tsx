// src/app/research/papers/unified-framework-quantum-measurement/page.tsx
'use client'

import React from 'react'
import { ArrowLeft, FileText, ExternalLink } from 'lucide-react'
import Section from '@/components/ui/Section'
import PageTransition from '@/components/ui/PageTransition'
import InteractiveLink from '@/components/ui/InteractiveLink'

export default function PaperPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Section 
          background="white" 
          width="narrow"
          padding="large"
          className="pt-14 md:pt-24"
        >
          {/* Navigation */}
          <div className="mb-8">
            <InteractiveLink href="/research" className="inline-flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Research
            </InteractiveLink>
          </div>

          {/* Paper Header - More Compact and Integrated */}
          <header className="mb-12">
            {/* Status Bar */}
            <div className="mb-6 flex items-center gap-x-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Preprint • 2024</span>
              </div>
              <span>•</span>
              <a 
                href="https://doi.org/10.5281/zenodo.14506304"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-blue-600 transition-colors"
              >
                DOI
              </a>
            </div>

            {/* Title and Author Section */}
            <div className="border-l-4 border-gray-100 pl-6">
              <h1 className="text-4xl font-normal text-gray-900 leading-tight tracking-tight mb-6">
                A Unified Framework for Quantum Measurement: Time as Fields of Experience and Potential
              </h1>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl text-gray-700">Payman Sattari</p>
                  <p className="text-gray-600 mt-1">Independent Researcher</p>
                </div>
                <a 
                  href="https://doi.org/10.5281/zenodo.14506304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all group"
                >
                  <FileText className="w-4 h-4 mr-2 text-gray-500 group-hover:text-gray-700" />
                  Access Paper
                  <ExternalLink className="w-3 h-3 ml-2 text-gray-400 group-hover:text-gray-600" />
                </a>
              </div>
            </div>

            {/* Brief Description - Optional
            <div className="mt-8 text-gray-600">
              <p>
                This paper presents a novel theoretical framework that reconceptualizes quantum measurement through interacting fields, offering testable predictions about measurement correlations while suggesting a natural resolution to the measurement problem.
              </p>
            </div> */}
          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {/* Abstract */}
            <div className="mb-12">
              <h2 className="text-lg font-bold mb-4">Abstract</h2>
              <p className="text-gray-700">
                We propose a new theoretical framework that reconceptualizes time and quantum measurement through the interaction of two fundamental fields: a field of experience and a field of potential. Rather than treating quantum measurement as random collapse of probability waves, we suggest that measurement represents the structured conversion of potential states into experiential ones. This framework naturally resolves several persistent puzzles in quantum mechanics, including the measurement problem, the role of consciousness in measurement, and the quantum-to-classical transition. We present specific, testable predictions that distinguish our framework from standard quantum mechanics, including: systematic correlations between sequential measurements, observable differences between systems with identical current states but different measurement histories, and specific patterns in how probability distributions evolve based on measurement timing and observer conditions. While developed through metaphysical investigation, this framework offers concrete implications for physics that invite experimental testing and mathematical formalization.
              </p>
            </div>

            {/* Research Overview Section */}
            <div className="mb-12 border-t">
              <h2 className="text-3xl font-semibold text-gray-700 mb-10 mt-8">Research Overview</h2>
              
              <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Theoretical Significance</h2>
                <p className="text-gray-700">
                  This work addresses one of physics' most persistent challenges: the quantum measurement problem. Rather than treating measurement as a mysterious collapse of probability waves, we present a framework where measurement emerges naturally from the interaction between fields of experience and potential. This approach provides a unified explanation for quantum measurement, the role of consciousness in observation, and the quantum-to-classical transition, while maintaining scientific rigor and testability.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-xl font-bold mb-4">Research Implications</h2>
                <p className="text-gray-700">
                  The framework makes several specific, testable predictions that distinguish it from standard quantum mechanics. These include systematic correlations in sequential measurements, observable patterns based on measurement timing, and specific relationships between observer conditions and measurement outcomes. Most significantly, it suggests that quantum measurement isn't fundamentally random but follows patterns reflecting the interaction between experiential and potential fields.
                </p>
                <p className="text-gray-700 mt-4">
                  Beyond quantum mechanics, this framework has profound implications for our understanding of time, consciousness, and the nature of reality itself. It suggests new approaches to quantum computing, measurement technology, and information processing while offering fresh perspectives on fundamental questions in physics.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Future Research Directions</h2>
                <p className="text-gray-700">
                  This theoretical framework opens several promising avenues for future research, including the development of precise mathematical formalisms, implementation of proposed experimental tests, and exploration of technological applications. The framework's predictions can be tested using existing experimental techniques, offering immediate opportunities for verification while suggesting new directions in quantum measurement and control.
                </p>
              </div>
            </div>

            {/* Research Contact */}
            <div className="mt-16 border-t pt-8">
              <p className="text-gray-700">
                For academic researchers interested in discussing this work or exploring potential collaboration, please use the research contact form.
              </p>
              <InteractiveLink 
                href="/research/contact" 
                className="text-blue-600 hover:text-blue-700"
              >
                Contact for Research Inquiries
              </InteractiveLink>
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  )
}