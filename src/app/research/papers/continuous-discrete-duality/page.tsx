// src/app/research/papers/continuous-discrete-duality/page.tsx
'use client'

import React from 'react'
import { ArrowLeft, Info } from 'lucide-react'
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
        >
          <div className="mb-8">
            <InteractiveLink href="/research" className="inline-flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Research
            </InteractiveLink>
          </div>

          {/* Paper Header */}
          <div className="mb-12">
            <div className="text-sm text-gray-600 mb-3">Under Review at Physical Review Letters • 2024</div>
            <h1 className="text-3xl font-normal text-gray-900 mb-4 leading-tight">
              The Continuous-Discrete Duality: A Geometric Foundation for Quantum and Classical Behaviors
            </h1>
            <div className="text-gray-600">
              <p className="mb-2 text-lg">Payman Sattari</p>
              <p className="text-sm">Independent Researcher</p>
            </div>
          </div>

          {/* Publication Status */}
          <div className="mb-12 flex items-start gap-3">
            <Info className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700 italic">
              This paper is currently under review at Physical Review Letters. Due to journal submission policies, the full manuscript cannot be shared publicly at this time. Qualified researchers interested in discussing this work may inquire through the research contact form.
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {/* Abstract */}
            <div className="mb-12">
              <h2 className="text-lg font-bold mb-4">Abstract</h2>
              <p className="text-gray-700">
                Quantum mechanics and classical physics appear to describe two distinct realms of reality, with wave-particle duality epitomizing this apparent divide. We demonstrate that both domains emerge naturally from a more fundamental principle: the continuous-discrete duality. This geometric relationship explains why quantum systems exhibit wave-like behavior in some contexts and particle-like behavior in others, while classical behavior emerges at larger scales. The framework makes specific, testable predictions about the transition between quantum and classical regimes, including observable patterns in interference experiments and decoherence processes. These predictions can be tested using existing experimental techniques, offering a direct path to verification. The continuous-discrete duality provides a natural explanation for wave-particle duality without requiring separate frameworks for quantum and classical phenomena, suggesting a more fundamental understanding of physical reality.
              </p>
            </div>

            {/* Theoretical Framework */}
            <div className="mb-12 border-t">
            <h2 className="text-3xl font-semibold text-gray-700 mb-10 mt-8">Research Overview</h2>
              <h2 className="text-xl font-semibold mb-4">Theoretical Significance</h2>
              <p className="text-gray-700">
                This work addresses one of the most persistent challenges in modern physics: the apparent disconnect between quantum and classical descriptions of reality. Rather than treating these as separate domains requiring different frameworks, we demonstrate how both emerge from a more fundamental geometric principle. This approach offers new perspectives on quantum measurement, wave-particle duality, and the quantum-to-classical transition.
              </p>
            </div>

            {/* Research Implications */}
            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4">Research Implications</h2>
              <p className="text-gray-700">
                The continuous-discrete framework has significant implications for several areas of physics. In quantum mechanics, it suggests new approaches to understanding measurement and decoherence. For quantum field theory, it offers insights into the relationship between fields and particles. The framework also has potential implications for quantum computing, particularly in maintaining quantum coherence and understanding the measurement process.
              </p>
              <p className="text-gray-700 mt-4">
                Beyond these immediate applications, the framework suggests new directions for investigating fundamental questions in physics, including the nature of space-time, the measurement problem, and the emergence of classical behavior from quantum systems.
              </p>
            </div>

            {/* Future Directions */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Future Research Directions</h2>
              <p className="text-gray-700">
                This theoretical framework opens several promising avenues for future research. These include the development of more sophisticated geometric models of quantum-classical transitions, new approaches to quantum computation, investigation of scale-dependent effects in quantum measurements, and potential applications to quantum field theory and gravitation. The framework's predictions can be tested using existing experimental techniques, offering immediate opportunities for verification and further development.
              </p>
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