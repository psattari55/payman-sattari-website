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
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            {/* Title and Author Section */}
            <div className="border-l-4 border-gray-100 pl-6">
              <h1 className="text-3xl font-normal text-gray-900 leading-tight tracking-tight mb-6">
                A Unified Framework for Quantum Measurement: Time as Fields of Experience and Potential
              </h1>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl text-gray-700">Payman Sattari</p>
                  <p className="text-gray-600 mt-1">Philosopher, Transdisciplinary Researcher</p>
                </div>
                <a 
                  href="https://doi.org/10.5281/zenodo.14506304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center px-4 py-2 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all group"
                >
                  <FileText className="w-4 h-4 mr-2 text-gray-500 group-hover:text-gray-700" />
                  Access Paper
                  <ExternalLink className="w-3 h-3 ml-2 text-gray-400 group-hover:text-gray-600" />
                </a>
              </div>
            </div>

          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {/* Abstract */}
            <div className="mb-12">
              <h2 className="text-lg font-bold mb-4">Abstract</h2>
              <p className="text-base text-gray-700">
                We propose a new theoretical framework that reconceptualizes time and quantum measurement through the interaction of two fundamental fields: a field of experience and a field of potential. Rather than treating quantum measurement as random collapse of probability waves, we suggest that measurement represents the structured conversion of potential states into experiential ones. This framework naturally resolves several persistent puzzles in quantum mechanics, including the measurement problem, the role of consciousness in measurement, and the quantum-to-classical transition. We present specific, testable predictions that distinguish our framework from standard quantum mechanics, including: systematic correlations between sequential measurements, observable differences between systems with identical current states but different measurement histories, and specific patterns in how probability distributions evolve based on measurement timing and observer conditions. While developed through metaphysical investigation, this framework offers concrete implications for physics that invite experimental testing and mathematical formalization.
              </p>
            </div>

            {/* Research Overview Section */}
            <div className="mb-12 border-t">
              <h2 className="text-3xl font-semibold text-gray-700 mb-10 mt-8">Research Overview</h2>
              
              <div className="mb-12">
                <h2 className="text-lg font-semibold mb-4">Theoretical Significance</h2>
                <p className="text-base text-gray-700">
                  This work proposes a novel approach to the quantum measurement problem by treating observation as an intrinsic structural process rather than an external intervention. Instead of viewing measurement as a mysterious “collapse,” the framework describes it as a natural transition between two complementary aspects of reality: actualized structure (experience) and unrealized potential. In this view, time functions as the dynamic interface through which potential configurations become actualized, with system history shaping the range and character of possible outcomes. This reconceptualization provides a unified way of understanding measurement, temporal behavior, and the emergence of classicality—without invoking hidden variables, many-worlds, or consciousness-based collapse models.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-lg font-bold mb-4">Key Predictions</h2>
                <p className="text-base text-gray-700">
                  The framework makes several testable predictions that distinguish it from standard frameworks. These include systematic correlations in sequential measurements, observable patterns based on measurement timing, and specific relationships between observer conditions and measurement outcomes. Most significantly, it suggests that quantum measurement isn't fundamentally random but follows patterns reflecting the interaction between actualized and unactualized fields.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-lg font-semibold mb-4">Theoretical Implications</h2>
                <p className="text-base text-gray-700">
                  This measurement framework provides a unified context for several areas where conventional quantum mechanics relies on interpretive add-ons. It clarifies the role of the observer without invoking mental causation, explains how classical behavior arises from accumulated actualization, and situates entanglement, decoherence, and collapse-like behavior within a single structural process. By treating potential and actualization as complementary aspects of one system, the approach links measurement, temporality, and system evolution into a coherent geometric model.
                </p>
              </div>
            </div>

            {/* Research Contact */}
            <div className="mt-16 border-t pt-8">
              <p className="text-gray-700">
                For researchers interested in discussing this work or exploring potential collaboration, please use the form below.
              </p>
              <InteractiveLink 
                href="/contact" 
                className="text-blue-600 hover:text-blue-700"
              >
                Contact
              </InteractiveLink>
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  )
}