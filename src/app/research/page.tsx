// src/app/research/page.tsx
'use client'

import React from 'react'
import { Globe } from 'lucide-react'
import Section from '@/components/ui/Section'
import PageTransition from '@/components/ui/PageTransition'
import InteractiveLink from '@/components/ui/InteractiveLink'
import PaperEntry from '@/components/research/PaperEntry'

export default function ResearchPage() {
  const currentPapers = [
    {
      title: "The Continuous-Discrete Duality",
      status: {
        type: "preprint" as const,
        location: "Zenodo",
        date: "2024"
      },
      abstract: "This paper presents a geometric foundation for understanding the relationship between quantum and classical behaviors. We propose a novel framework that bridges the apparent gap between continuous and discrete aspects of physical reality, offering new insights into wave-particle duality and measurement theory.",
      keywords: ["Quantum mechanics", "Classical physics", "Wave-particle duality", "Geometric framework"],
      doi: "10.5281/zenodo.14505849",
      slug: "continuous-discrete-duality"
    },
    {
      title: "The Toroidal Nature of Space-Time",
      status: {
        type: "preprint" as const,
        location: "Zenodo",
        date: "2024"
      },
      abstract: "We present a novel theoretical framework for understanding the structure of space-time through a toroidal model that accommodates both quantum field interactions and classical space-time behavior. This approach offers new perspectives on field dynamics and the relationship between inner and outer dimensions of reality.",
      keywords: ["Space-time structure", "Quantum field theory", "Toroidal geometry", "Field dynamics"],
      doi: "10.5281/zenodo.14506112",
      slug: "toroidal-nature-spacetime"
    },
    {
      title: "The Fractal Nature of Field Organization",
      status: {
        type: "preprint" as const,
        location: "Zenodo",
        date: "2024"
      },
      abstract: "This paper demonstrates how fractal patterns emerge naturally from fundamental geometric relationships in field organization. We show how the interaction of toroidal dynamics and continuous-discrete duality creates similar structures across different scales, providing a unified explanation for nature's tendency toward fractal organization.",
      keywords: ["Fractal organization", "Field theory", "Pattern formation", "Self-organization"],
      doi: "10.5281/zenodo.14548007",
      slug: "fractal-field-organization"
    },
    {
      title: "A Unified Framework for Quantum Measurement",
      status: {
        type: "preprint" as const,
        location: "Zenodo",
        date: "2024"
      },
      abstract: "This work proposes a comprehensive framework for understanding quantum measurement, examining the relationship between observation and physical reality. We introduce the concept of time as fields of experience and potential, offering new insights into quantum measurement and causality.",
      keywords: ["Quantum measurement", "Observer effect", "Time evolution", "Quantum mechanics"],
      doi: "10.5281/zenodo.14506304",
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
          className="py-16 md:py-24"
        >
          <div className="flex items-center gap-2 mb-6">
            <h1 className="text-3xl font-normal text-gray-900">Research Overview</h1>
            <a 
              href="https://orcid.org/0009-0003-0236-0130"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-500 hover:text-gray-700"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              My research focuses on developing theoretical frameworks that bridge quantum mechanics, consciousness, and physical reality. These works form part of a broader unified framework that addresses fundamental questions in physics, particularly around quantum measurement, the structure of space-time, and the quantum-classical transition. Through this research, I aim to resolve persistent paradoxes in quantum mechanics while maintaining scientific rigor and experimental testability.
            </p>
          </div>
        </Section>

        {/* Current Papers */}
        <Section 
          background="gray" 
          width="default"
          id="papers"
          className="pt-12 md:pt-16"
        >
          <h2 className="text-2xl font-normal mb-8">Current Papers</h2>
          <div className="space-y-6">
            {currentPapers.map((paper) => (
              <PaperEntry key={paper.title} {...paper} />
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
              I welcome dialogue with researchers interested in these areas of theoretical physics and consciousness studies. All papers are available as preprints through their DOI links above.
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