// src/app/research/papers/toroidal-nature-spacetime/page.tsx
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
                href="https://doi.org/10.5281/zenodo.14506112"
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
                The Toroidal Nature of Space-Time: A Novel Approach to Understanding Quantum Field Interactions
              </h1>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl text-gray-700">Payman Sattari</p>
                  <p className="text-gray-600 mt-1">Philosopher, Transdisciplinary Researcher</p>
                </div>
                <a 
                  href="https://doi.org/10.5281/zenodo.14506112"
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

            {/* Brief Description - Optional
            <div className="mt-8 text-gray-600">
              <p>
                This paper presents a theoretical framework that reveals the toroidal structure underlying quantum field interactions and space-time geometry, offering new perspectives on vacuum fluctuations, field-particle duality, and the nature of cosmic expansion.
              </p>
            </div> */}
          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {/* Abstract */}
            <div className="mb-12">
              <h2 className="text-lg font-bold mb-4">Abstract</h2>
              <p className="text-base text-gray-700">
                Current models of space-time and quantum fields struggle to explain several fundamental phenomena, including the mechanism of quantum measurement, the relationship between discrete and continuous aspects of fields, and the nature of cosmic expansion. We present a theoretical framework that addresses these challenges by proposing that space-time exhibits a fundamentally toroidal structure when viewed in four dimensions. This structure emerges from the continuous flow of energy between inner and outer dimensions at every point in space, transforming what appears spherical in three dimensions into toroidal patterns in four dimensions. We demonstrate how this model naturally explains quantum field behavior, including vacuum fluctuations, field-particle duality, and observer-system interactions, without requiring additional mathematical constructs. The framework makes specific, testable predictions about field behavior at different scales and suggests new approaches to understanding quantum measurement, quantum coherence, and cosmic expansion. These predictions are consistent with existing observations while offering novel experimental possibilities. Our approach provides a unified explanation for phenomena that currently require separate theoretical frameworks, suggesting a more fundamental understanding of space-time structure and its relationship to quantum fields.
              </p>
            </div>

            {/* Research Overview Section */}
            <div className="mb-12 border-t">
              <h2 className="text-3xl font-semibold text-gray-700 mb-10 mt-8">Research Overview</h2>
              
              <div className="mb-12">
                <h2 className="text-lg font-semibold mb-4">Theoretical Context</h2>
                <p className="text-base text-gray-700">
                  The toroidal framework offers a way to view space-time geometry and quantum field behavior as expressions of the same underlying structure. When spherical symmetries in three dimensions are reinterpreted through a four-dimensional lens, toroidal patterns emerge. These patterns offer coherent explanations for how fields self-organize, how localized states arise, and why certain symmetries appear across scales.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-lg font-semibold mb-4">Key Predictions</h2>
                <p className="text-base text-gray-700">
                  The model proposes several geometric signatures that differ from standard expectations:
                </p>
                <ul className="text-base">
                  <li>Characteristic symmetry patterns in field fluctuations at specific scales</li>
                  <li>Measurement-dependent variations in quantum outcomes that correlate with geometric configuration</li>
                  <li>Fractal-like relationships between micro- and macro-scale structures based on repeating toroidal patterns</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-lg font-semibold mb-4">Theoretical Implications</h2>
                <p className="text-base text-gray-700">
                  This geometric framework offers potential insights into field behavior, quantum coherence, and cosmic expansion without introducing additional entities or forces. By treating toroidal structure as fundamental, it becomes possible to see quantum and classical behaviors as different expressions of the same geometric order. The approach complements and extends existing theories by offering a spatial substrate through which continuity and discreteness express themselves.
                </p>
              </div>
            </div>

            {/* Research Contact */}
            <div className="mt-16 border-t pt-8">
              <p className="text-gray-700 mb-6">
                For researchers interested in discussing this work or exploring potential collaboration, please use the form below.
              </p>
              <InteractiveLink 
                href="/contact" 
                variant="button"
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