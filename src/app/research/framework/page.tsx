// src/app/research/framework/page.tsx
'use client'

import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import PageTransition from '@/components/ui/PageTransition'
import InteractiveLink from '@/components/ui/InteractiveLink'

export default function TheoreticalFrameworkPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Section 
          background="white" 
          width="narrow"
          padding="large"
          className="py-12 md:py-24"
        >
          <div className="mb-8">
            <InteractiveLink href="/research" className="inline-flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Research
            </InteractiveLink>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-normal text-gray-900 mb-6">Theoretical Framework</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-800 text-lg leading-relaxed">
                Reality presents us with an apparent paradox: the objective world studied by physics and the subjective world of conscious experience seem to follow different rules. Yet these two aspects of reality must be unified, as they clearly interact - consciousness affects physical systems, and physical systems affect consciousness. This interaction is most visible in quantum mechanics, where observation itself appears to influence physical reality.
              </p>
              <p className="text-gray-800 text-lg leading-relaxed">
                Our theoretical framework proposes that this interaction isn't paradoxical but essential to understanding reality itself. By reexamining fundamental assumptions about the nature of reality, we've developed a unified framework that:
              </p>
              <ul className="text-gray-800 text-lg leading-relaxed">
                <li>Bridges subjective and objective reality without reducing either to the other</li>
                <li>Explains quantum phenomena without sacrificing mathematical rigor</li>
                <li>Resolves long-standing paradoxes in physics through geometric principles</li>
                <li>Suggests new experimental approaches and practical applications</li>
              </ul>
            </div>
          </div>

          {/* Foundational Principles */}
          <div className="mb-12">
            <h2 className="text-2xl font-normal mb-8">Foundational Principles</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">The Unity of Reality</h3>
                <p className="text-gray-700">
                  Reality is fundamentally unified, with apparent divisions arising from our perspective within it. This unity manifests through complementary relationships - continuous/discrete, potential/actual, subject/object - that aren't truly separate but represent different aspects of an underlying whole.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Geometric Foundation</h3>
                <p className="text-gray-700">
                  These relationships express themselves through fundamental geometric and topological principles that govern both physical behavior and conscious experience. This geometry isn't just mathematical abstraction but reflects the deep structure of reality itself.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Field Dynamics</h3>
                <p className="text-gray-700">
                  Fields represent the interface between potential and actual states of reality. Understanding field behavior - especially at quantum scales - requires recognizing how consciousness and physical reality interact through field dynamics.
                </p>
              </div>
            </div>
          </div>

          {/* Theoretical Implications */}
          <div className="mb-12">
            <h2 className="text-2xl font-normal mb-8">Theoretical Implications</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Quantum Mechanics</h3>
                <ul className="list-disc pl-4 text-gray-700 space-y-2">
                  <li>Explains measurement effects without invoking consciousness as an exception</li>
                  <li>Provides natural interpretation of wave-particle duality</li>
                  <li>Suggests new approaches to quantum field theory</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Space-Time</h3>
                <ul className="list-disc pl-4 text-gray-700 space-y-2">
                  <li>Offers new perspectives on cosmic expansion</li>
                  <li>Suggests natural relationship between gravity and quantum effects</li>
                  <li>Provides geometric basis for understanding field interactions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Consciousness</h3>
                <ul className="list-disc pl-4 text-gray-700 space-y-2">
                  <li>Shows how consciousness fits within physical reality without reduction</li>
                  <li>Explains observer effects through fundamental principles</li>
                  <li>Suggests new approaches to mind-matter interaction</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Research Directions & Significance */}
          <div className="mb-12">
            <h2 className="text-2xl font-normal mb-6">Research Directions</h2>
            <p className="text-gray-700 mb-4">Current investigations focus on:</p>
            <ol className="text-gray-700 space-y-2 mb-8">
              <li>1. Mathematical formalization of key principles</li>
              <li>2. Development of testable predictions</li>
              <li>3. Application to specific problems in physics</li>
              <li>4. Experimental design and validation</li>
              <li>5. Practical technological applications</li>
            </ol>

            <h2 className="text-2xl font-normal mb-6">Significance</h2>
            <p className="text-gray-700 mb-4">
              This framework represents not just another interpretation of quantum mechanics or theory of consciousness, but a fundamental reconceptualization of reality itself. It suggests that many apparent paradoxes in modern physics arise from incomplete understanding of the relationship between consciousness and physical reality.
            </p>
            <p className="text-gray-700 mb-4">The framework's power lies in its ability to:</p>
            <ul className="list-disc pl-4 text-gray-700 space-y-2">
              <li>Resolve paradoxes through natural principles rather than additional assumptions</li>
              <li>Suggest new experimental approaches</li>
              <li>Unify seemingly disparate phenomena under common principles</li>
              <li>Maintain mathematical rigor while explaining subjective experience</li>
            </ul>
          </div>

          {/* Research Contact */}
          <div className="mt-16 border-t pt-8">
            <p className="text-gray-700 mb-6">
              For researchers interested in discussing this theoretical framework or exploring potential collaboration, please use the research contact form.
            </p>
            <InteractiveLink 
              href="/research/contact" 
              className="text-blue-600 hover:text-blue-700"
            >
              Contact for Research Inquiries
            </InteractiveLink>
          </div>
        </Section>
      </div>
    </PageTransition>
  )
}