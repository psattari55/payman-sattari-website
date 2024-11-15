// src/app/research/page.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { FileText, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import PageTransition from '@/components/ui/PageTransition'
import Card from '@/components/ui/Card'
import InteractiveLink from '@/components/ui/InteractiveLink'

export default function ResearchPage() {
  const currentPapers = [
    {
      title: "The Continuous-Discrete Duality",
      journal: "Physics Review Letters",
      status: "Under Review",
      abstract: "This paper presents a geometric foundation for understanding the relationship between quantum and classical behaviors. We propose a novel framework that bridges the apparent gap between continuous and discrete aspects of physical reality, offering new insights into wave-particle duality and measurement theory.",
      keywords: ["Quantum mechanics", "Classical physics", "Wave-particle duality", "Geometric framework"],
      slug: "continuous-discrete-duality"
    },
    {
      title: "The Toroidal Nature of Space-Time",
      journal: "Foundations of Physics",
      status: "Under Review",
      abstract: "We present a novel theoretical framework for understanding the structure of space-time through a toroidal model that accommodates both quantum field interactions and classical space-time behavior. This approach offers new perspectives on field dynamics and the relationship between inner and outer dimensions of reality.",
      keywords: ["Space-time structure", "Quantum field theory", "Toroidal geometry", "Field dynamics"],
      slug: "toroidal-nature-spacetime"
    },
    {
      title: "A Unified Framework for Quantum Measurement",
      journal: "Foundations of Physics",
      status: "Under Review",
      abstract: "This work proposes a comprehensive framework for understanding quantum measurement, examining the relationship between observation and physical reality. We introduce the concept of time as fields of experience and potential, offering new insights into quantum measurement and causality.",
      keywords: ["Quantum measurement", "Observer effect", "Time evolution", "Quantum mechanics"],
      slug: "unified-framework-quantum-measurement"
    }
  ]

  const researchAreas = [
    {
      title: "Quantum-Classical Relationship",
      description: "Investigation of the fundamental relationship between quantum and classical physics, focusing on the emergence of classical behavior from quantum systems and the role of measurement in this transition.",
    },
    {
      title: "Space-Time Structure",
      description: "Development of novel theoretical frameworks for understanding the nature of space-time, particularly in relation to quantum field theory and consciousness.",
    },
    {
      title: "Measurement Theory",
      description: "Examination of the measurement problem in quantum mechanics and its implications for our understanding of physical reality and consciousness.",
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <Section 
          background="white" 
          width="narrow"
          padding="large"
        >
          <h1 className="text-3xl font-normal mb-6 text-gray-900">Research Overview</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              My research focuses on developing theoretical frameworks that bridge quantum mechanics, consciousness, and physical reality. This work spans multiple areas of theoretical physics and foundational studies, with particular emphasis on quantum measurement theory, the structure of space-time, and the quantum-classical transition.
            </p>
          </div>
        </Section>

        {/* Current Research */}
        <Section 
          background="gray" 
          width="default"
          id="papers"
          >
          <h2 className="text-2xl font-normal mb-8">Current Papers</h2>
          <div className="space-y-6">
            {currentPapers.map((paper) => (
              <Link 
                key={paper.title} 
                href={`/research/papers/${paper.slug}`}
                className="block"
              >
                <Card className="hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-50 rounded-md">
                      <FileText className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-normal text-gray-900 mb-2">{paper.title}</h3>
                      <div className="flex gap-4 text-sm text-gray-600 mb-4">
                        <span>{paper.journal}</span>
                        <span>•</span>
                        <span>{paper.status}</span>
                      </div>
                      <p className="text-gray-700 mb-4">{paper.abstract}</p>
                      <div className="flex flex-wrap gap-2">
                        {paper.keywords.map((keyword) => (
                          <span 
                            key={keyword}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 mt-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>

        {/* Research Areas */}
        <Section background="white" width="default">
          <h2 className="text-2xl font-normal mb-8">Primary Research Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area) => (
              <div 
                key={area.title}
                className="p-6 bg-gray-50 rounded-lg border border-gray-100"
              >
                <h3 className="text-xl font-normal mb-4 text-gray-900">{area.title}</h3>
                <p className="text-gray-700">{area.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Research Collaboration */}
        <Section background="gray" width="narrow">
          <div className="text-center">
            <h2 className="text-2xl font-normal mb-6">Research Collaboration</h2>
            <p className="text-gray-700 mb-8">
              I welcome dialogue with researchers interested in these areas of theoretical physics and consciousness studies.
            </p>
            <InteractiveLink href="/research/contact" variant="button">
              Contact for Research Inquiries
            </InteractiveLink>
          </div>
        </Section>
      </div>
    </PageTransition>
  )
}