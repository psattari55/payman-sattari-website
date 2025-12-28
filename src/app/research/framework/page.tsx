// src/app/research/framework/page.tsx
'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react'
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
            <h1 className="text-3xl font-normal text-gray-900 mb-6">Conceptual Framework</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-800 text-base leading-relaxed">
                All investigation begins from a simple premise: reality is observable. From this starting point, we encounter a longstanding tension — the measurable structures studied by physics and the qualitative dimensions of conscious experience appear to obey different rules. Yet in practice we observe a reciprocal relationship: physical systems shape experience, and observation shapes the manifestation of physical systems. Nowhere is this more evident than in quantum mechanics, where measurement conditions participate directly in the behavior of the system being measured.
              </p>
              <p className="text-gray-800 text-base leading-relaxed">
                This framework proposes that this relationship is not an anomaly but a structural feature of reality. By revisiting several foundational assumptions about mind, matter, and measurement, the framework develops an integrated account that:
              </p>
              <ul className="text-gray-800 text-base leading-relaxed">
                <li>Clarifies the relationship between subjective and objective domains without reducing either</li>
                <li>Interprets quantum phenomena through structural and geometric principles</li>
                <li>Reframes persistent paradoxes as artifacts of incomplete ontology</li>
                <li>Identifies new experimental and conceptual directions</li>
              </ul>
            </div>
          </div>

          {/* Foundational Principles */}
          <div className="mb-12">
            <h2 className="text-2xl font-normal mb-8">Foundational Principles</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">The Unity of Reality</h3>
                <p className="text-base text-gray-700">
                  Apparent divisions — continuous and discrete, potential and actual, subject and object — arise from perspective rather than from separate underlying substances. These complementarities express different aspects of a single, coherent order.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Geometric Foundation</h3>
                <p className="text-base text-gray-700">
                  This order manifests through geometric and topological structure. Geometry here is not merely a mathematical convenience but reflects deeper organizational principles through which phenomena, conscious and material, take shape.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Field Dynamics</h3>
                <p className="text-base text-gray-700">
                  Understanding field dynamics — particularly at quantum scales — requires recognizing how measurement, information, and structure interact to produce observable outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Reading This Work */}
          <div className="mb-12">
            <h2 className="text-2xl font-normal mb-6">Reading This Work</h2>
            <p className="text-gray-700 mb-4">
              Each of the research papers develops one aspect of the larger system outlined here. They can be read independently, but together they form a coherent picture of how physical structure, conscious experience, and fundamental geometry relate. This page provides the conceptual background while the papers present the details.            </p>
          </div>

          {/* Research Contact */}
          <div className="mt-16 border-t pt-8">
            <p className="text-lg text-gray-700 mb-6">
              To discuss the framework, explore potential collaboration, or inquire about ongoing research, please use the contact form below.
            </p>
            <InteractiveLink 
              href="/contact" 
              className="text-blue-600 hover:text-blue-700"
            >
              Contact
            </InteractiveLink>
          </div>
        </Section>
      </div>
    </PageTransition>
  )
}