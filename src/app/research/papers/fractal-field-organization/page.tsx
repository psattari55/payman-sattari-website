// src/app/research/papers/fractal-field-organization/page.tsx

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

          {/* Paper Header */}
          <header className="mb-12">
            {/* Status Bar */}
            <div className="mb-6 flex items-center gap-x-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Preprint • 2024</span>
              </div>
              <span>•</span>
              <a 
                href="https://doi.org/10.5281/zenodo.14548007"
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
              <h1 className="text-4xl font-normal text-gray-900 leading-tight tracking-tight mb-6">
                The Fractal Nature of Field Organization: A Geometric Framework for Understanding Self-Organization in Physical Systems
              </h1>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl text-gray-700">Payman Sattari</p>
                  <p className="text-gray-600 mt-1">Independent Researcher</p>
                </div>
                <a 
                  href="https://doi.org/10.5281/zenodo.14548007"
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
              <p className="text-gray-700">
                The ubiquitous presence of fractal patterns across physical scales - from quantum fluctuations to cosmic structures - suggests an underlying organizational principle in nature that current theories fail to fully explain. We demonstrate that these patterns emerge naturally from fundamental geometric relationships in field organization, particularly through the interaction of toroidal dynamics and continuous-discrete duality. This framework explains why similar structures appear at different scales, how self-organization emerges from basic field principles, and why certain patterns repeatedly manifest throughout nature. The model makes specific, testable predictions about pattern formation and scaling relationships that can be verified through existing experimental techniques. These predictions include observable correlations between organization at different scales, specific patterns in how systems transition between organizational states, and measurable relationships in field behavior across scale boundaries. Our approach provides a unified explanation for the emergence of ordered structures across all scales of reality, suggesting a deeper principle underlying nature's tendency toward fractal organization.
              </p>
            </div>

            {/* Research Overview Section */}
            <div className="mb-12 border-t">
              <h2 className="text-3xl font-semibold text-gray-700 mb-10 mt-8">Research Overview</h2>
              
              <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Theoretical Significance</h2>
                <p className="text-gray-700">
                  This work addresses a fundamental question in physics: why does nature consistently organize itself in fractal patterns across different scales? Rather than treating these patterns as merely descriptive tools, we demonstrate how they emerge naturally from basic geometric principles governing field organization. This approach provides a unified framework for understanding pattern formation and self-organization across all scales of reality.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Key Predictions</h2>
                <p className="text-gray-700">
                  The framework makes several specific, testable predictions about pattern formation and scaling relationships:
                </p>
                <ul className="mt-4">
                  <li className="mb-4">Observable correlations between pattern formation at different scales following predicted geometric relationships</li>
                  <li className="mb-4">Specific geometric regularities in how systems transition between organizational states</li>
                  <li className="mb-4">Measurable coherence between different levels of organization</li>
                  <li>Cross-scale correlations that follow toroidal geometry</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Theoretical Implications</h2>
                <p className="text-gray-700">
                  This framework reveals that fractal organization isn't merely a mathematical description but reflects fundamental geometric principles underlying reality itself. It suggests a profound unity in physics where quantum behavior, classical phenomena, and complex organization emerge as manifestations of the same underlying principles. The framework has significant implications for our understanding of pattern formation, stability, cross-scale coherence, and system organization.
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