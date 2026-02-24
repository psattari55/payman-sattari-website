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
      abstract: "This paper develops the idea that quantum and classical behaviors can be understood as different expressions of a deeper geometric relationship between continuity and discreteness. The approach reframes wave-particle duality as a scale and context-dependent expression of a single underlying structure, rather than as a fundamental discontinuity between models. The paper outlines several testable predictions about interference patterns, decoherence, and quantum correlations—patterns that emerge naturally once the continuous-discrete structure is treated as primary rather than derivative. Many of these predictions can be examined using existing experimental setups with minimal modifications.",
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
      abstract: "This paper introduces a geometric model in which space-time exhibits an intrinsic toroidal structure, producing inner and outer spatial dimensions that shape how fields organize, propagate, and interact. Within this framework, familiar quantum features—coherence, symmetry behavior, and the emergence of localized states—arise from geometric relationships rather than from independent principles. The toroidal structure also provides the spatial context in which continuous–discrete duality manifests across scales. The paper concludes with testable predictions about field structure and measurement geometry that can be investigated using modified versions of existing experimental setups.",
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
      abstract: "This paper develops the idea that fractal organization arises naturally from the same geometric principles underlying toroidal field structure and the continuous–discrete duality. Rather than treating self-similarity as a descriptive curiosity, the framework shows how repeating patterns across scales emerge from consistent structural relationships in field organization. The model suggests why similar forms appear from quantum systems to biological growth to galactic structure: not through coincidence, but because similar geometric conditions recur at different scales. The paper outlines testable predictions concerning pattern formation, cross-scale correlations, and transitions between organizational states, offering a unified context for understanding natural self-organization.",
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
      abstract: "A conceptual framework for the measurement problem that treats observation as an intrinsic structural process rather than an external intervention. The paper examines how measurement arises from the interaction between two complementary aspects of reality — actualized structure and unrealized potential — and reframes time as the dynamic interface between them. Within this approach, “collapse” becomes a natural transition from potential configurations to actualized states, influenced by accumulated system history rather than by randomness alone. The framework yields testable predictions — including sequential-measurement correlations and history-dependent probability distributions — and provides a coherent account of entanglement, decoherence, and the emergence of classical behavior.",
      keywords: ["Quantum measurement", "Observer effect", "Time evolution", "Quantum mechanics"],
      doi: "10.5281/zenodo.14506304",
      slug: "unified-framework-quantum-measurement"
    }
  ]

  const researchAreas = [
    {
      title: "Quantum Foundations & The Nature of Measurement",
      description: "Investigating the structural basis of quantum behavior, the nature of measurement, and the transition from potential to actualized states. This work develops a unified account of observation, system history, and the emergence of classical behavior.",
    },
    {
      title: "Spacetime Structure & Field Organization",
      description: "Investigating the underlying geometry that shapes physical phenomena. This includes the structure of spacetime, the interplay of continuity and discreteness, and the principles by which fields organize across all scales.",
    },
    {
      title: "Consciousness & The Structure of Reality",
      description: "Clarifying the ontological role of consciousness in physical processes, and integrating qualitative experience with measurable structure through a unified account of actualization, potentiality, and observation.",
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
          className="pt-16 pb-12 md:py-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">
            Archive / 03
          </span>

          <div className="flex items-baseline justify-between mb-12 border-b border-gray-100 pb-8">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Research</h1>
            <a 
              href="https://orcid.org/0009-0003-0236-0130"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2"
            >
              ORCID <Globe className="w-3 h-3" />
            </a>
          </div>

          <div className="space-y-12">
            {/* Thesis: Quiet, authoritative, non-italic */}
            <div className="border-l border-gray-200 pl-8 max-w-2xl">
              <p className="text-xl text-gray-900 leading-relaxed font-serif">
                Since 2011, I have been developing a unified ontological framework that addresses foundational questions in physics, consciousness, and the structure of reality.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-7 md:gap-12 text-[15px] leading-relaxed text-gray-600 font-light">
              <p>
                This work examines how the measurable structures of the physical world and the interior dimensions of reality emerge from a coherent underlying order. The papers here represent key components of this larger system. They address persistent problems in quantum mechanics—measurement, the quantum-classical transition, and field structure—not through incremental adjustments, but by rethinking the foundations.
              </p>
              <p>
                This research is grounded in first-principles reasoning and the systematic study of patterns across physical and phenomenological domains. It proposes that the divisions we perceive between spheres traditionally kept separate—mind and matter, subject and object—reflect the limits of our current methods rather than the structure of reality itself.
              </p>
            </div>
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

        {/* Research Focus */}
        <Section background="white" width="default">
          <h2 className="text-2xl font-normal mb-8">Research Focus</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area) => (
              <div 
                key={area.title}
                className="p-6 bg-gray-50 rounded-lg border border-gray-100"
              >
                <h3 className="text-lg font-semibold mb-4 text-gray-900">{area.title}</h3>
                <p className="text-base text-gray-700">{area.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Research Collaboration */}
        <Section background="gray" width="narrow">
          <div className="text-center">
            <h2 className="text-2xl font-normal mb-6">Collaboration & Dialogue</h2>
            <p className="text-gray-700 mb-8">
              This research is intended for those working at the foundations of physics, consciousness studies, and ontology. I welcome substantive engagement from researchers, philosophers, and serious independent thinkers who are addressing these questions. All papers are available as open-access preprints. For research dialogue or collaboration, contact me here.
            </p>
            <InteractiveLink href="/contact" variant="button">
              Contact
            </InteractiveLink>
          </div>
        </Section>
      </div>
    </PageTransition>
  )
}