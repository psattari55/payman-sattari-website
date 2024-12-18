// src/app/research/papers/continuous-discrete-duality/page.tsx

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
                href="https://doi.org/10.5281/zenodo.14505849"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-blue-600 transition-colors"
              >
                DOI
                <ExternalLink className="w-3 h-3 ml-1 " />
              </a>
            </div>

            {/* Title and Author Section */}
            <div className="border-l-4 border-gray-100 pl-6">
              <h1 className="text-4xl font-normal text-gray-900 leading-tight tracking-tight mb-6">
                The Continuous-Discrete Duality: A Geometric Foundation for Quantum and Classical Behaviors
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
                This paper presents a geometric foundation for understanding the relationship between quantum and classical behaviors, demonstrating how wave-particle duality and the quantum-classical transition emerge naturally from a more fundamental continuous-discrete relationship.
              </p>
            </div> */}
          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {/* Abstract */}
            <div className="mb-12">
              <h2 className="text-lg font-bold mb-4">Abstract</h2>
              <p className="text-gray-700">
                Quantum mechanics and classical physics appear to describe two distinct realms of reality, with wave-particle duality epitomizing this apparent divide. We demonstrate that both domains emerge naturally from a more fundamental principle: the continuous-discrete duality. This geometric relationship explains why quantum systems exhibit wave-like behavior in some contexts and particle-like behavior in others, while classical behavior emerges at larger scales. The framework makes specific, testable predictions about the transition between quantum and classical regimes, including observable patterns in interference experiments and decoherence processes. These predictions can be tested using existing experimental techniques, offering a direct path to verification. The continuous-discrete duality provides a natural explanation for wave-particle duality without requiring separate frameworks for quantum and classical phenomena, suggesting a more fundamental understanding of physical reality.
              </p>
            </div>

            {/* Research Overview Section */}
            <div className="mb-12 border-t">
              <h2 className="text-3xl font-semibold text-gray-700 mb-10 mt-8">Research Overview</h2>
              
              <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Theoretical Significance</h2>
                <p className="text-gray-700">
                  This work addresses one of the most persistent challenges in modern physics: the apparent disconnect between quantum and classical descriptions of reality. Rather than treating these as separate domains requiring different frameworks, we demonstrate how both emerge from a more fundamental geometric principle. This approach provides a natural explanation for wave-particle duality while maintaining scientific rigor and experimental testability.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Key Predictions</h2>
                <p className="text-gray-700">
                  The framework makes several specific, testable predictions that distinguish it from conventional quantum mechanics. Most significantly, it predicts that the transition between wave-like and particle-like behavior follows geometric patterns that are both regular and scale-dependent. These patterns should be observable in modified versions of classic quantum experiments, particularly in:
                </p>
                <ul className="mt-4">
                  <li className="mb-4">The spatial distribution of individual detection events in interference experiments</li>
                  <li className="mb-4">Scale-dependent correlations between successive quantum measurements</li>
                  <li>Geometric regularities in decoherence processes</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Theoretical Implications</h2>
                <p className="text-gray-700">
                  The continuous-discrete framework has profound implications for our understanding of quantum mechanics and physical reality. It suggests that quantum measurement, long considered mysterious, represents a natural manifestation of the geometric relationship between continuous and discrete aspects of reality. This resolves the measurement problem without requiring conscious observers or wave function collapse, while providing new insights into quantum entanglement and non-locality.
                </p>
              </div>
            </div>

            {/* Research Contact */}
            <div className="mt-16 border-t pt-8">
              <p className="text-gray-700 mb-6">
                For academic researchers interested in discussing this work or exploring potential collaboration, please use the research contact form.
              </p>
              <InteractiveLink 
                href="/research/contact" 
                variant="button"
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