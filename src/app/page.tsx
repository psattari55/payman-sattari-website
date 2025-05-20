// src/app/page.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import ProfileImage from '@/components/ui/ProfileImage'
import Doorways from '@/components/features/Doorways'
import PageTransition from '@/components/ui/PageTransition'
import PublicationCardSkeleton from '@/components/features/PublicationCardSkeleton'
import Card from '@/components/ui/Card'
import InteractiveLink from '@/components/ui/InteractiveLink'
import ProgressiveLoad from '@/components/ui/ProgressiveLoad'

export default function HomePage() {

  const [isLoading, setIsLoading] = useState(true)
  
useEffect(() => {
  setIsLoading(false)  // Remove the setTimeout entirely
}, [])

  const publications = [
    {
      title: "The Continuous-Discrete Duality",
      journal: "Physics Review Letters",
      status: "Under Review",
      description: "A geometric foundation for quantum and classical behaviors",
      slug: "research/papers/continuous-discrete-duality"
    },
    {
      title: "The Toroidal Nature of Space-Time",
      journal: "Foundations of Physics",
      status: "Under Review",
      description: "Novel approach to understanding quantum field interactions",
      slug: "research/papers/toroidal-nature-spacetime"
    },
    {
      title: "A Unified Framework for Quantum Measurement",
      journal: "Foundations of Physics",
      status: "Under Review",
      description: "Time as fields of experience and potential",
      slug: "research/papers/unified-framework-quantum-measurement"
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen">
      {/* Hero Section */}
      <Section 
        background="white" 
        width="narrow"
        padding="large"
        className="text-center py-16 md:py-24"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Bridging Consciousness and Physical Reality
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Exploring the fundamental nature of reality through a unified framework of energy, consciousness, and matter.
        </p>
      </Section>

      {/* Introduction Section */}
      <Section background="gray" width="narrow" className="text-center py-8 md:py-10">
        <div className="flex flex-col">
          <div className="mb-6 flex justify-center">
            <ProfileImage />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">Welcome</h2>
            <p className="text-lg text-gray-700 text-center md:text-left">
              My name is Payman Sattari, a philosopher and transdisciplinary researcher working at the intersection of physics, consciousness, and metaphysics.
            </p>
            <p className="text-lg text-gray-700 text-center md:text-left">
              My work offers a unified ontological framework—one that integrates the measurable structures of the physical world with the lived reality of subjective experience. Through research spanning quantum mechanics, integrative systems theory, and first-principles ontology, I propose a system that restores the conscious observer to the heart of our understanding of reality.
            </p>
            <p className="text-lg text-gray-700 text-center md:text-left">
            In my book <em>The Science of Energy</em> (recipient of the Nautilus Silver Medal in Science & Cosmology), I examine how our fragmented understanding of reality developed historically and point toward a more comprehensive approach&mdash;one that honors both the quantitative precision of material science and the qualitative depth of conscious experience.
            </p>
            <p className="text-lg text-gray-700 text-center md:text-left">
              This site serves as a home for this work. You'll find:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 text-left">
              <li>Original research papers addressing paradoxes in physics and ontology</li>
              <li>Accessible articles on theoretical and experiential dimensions of this work</li>
              <li>Practical tools for applying these insights to personal and collective transformation</li>
            </ul>
            <p className="text-lg text-gray-700 text-center md:text-left font-medium mt-4">
              At the center of it all is a simple insight: <em>Reality is not fragmented. We only see it that way.</em>
            </p>
          </div>
        </div>
      </Section>

    {/* Three Doorways */}
    <Section background="white" width="default" id="doorways" className="pt-12">
      <div className="max-w-6xl mx-auto">
        <Doorways showHeader={true} />
      </div>
    </Section>

      {/* Recent Publications */}
      <Section background="gray" width="default">
        <ProgressiveLoad>
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Papers & Publications</h2>
        </ProgressiveLoad>
        
        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Show skeletons while loading
            <>
              <PublicationCardSkeleton />
              <PublicationCardSkeleton />
              <PublicationCardSkeleton />
            </>
          ) : (
            // Your existing publications mapping
            publications.map((paper, index) => (
              <ProgressiveLoad 
                key={paper.title} 
                delay={index * 200}
              >
                <Link href={paper.slug}>
                    <Card hoverable className="transition-shadow">
                      <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                      <p className="text-gray-700 mb-2">{paper.journal}</p>
                      <p className="text-sm text-gray-600 mb-4">{paper.status}</p>
                      <p className="text-gray-600">{paper.description}</p>
                    </Card>
                </Link>
              </ProgressiveLoad>
            ))
          )}
        </div>
      </Section>

      {/* Explore My Work */}
      <Section background="white" width="narrow" className="text-center">
        <ProgressiveLoad>
          <h2 className="text-3xl font-bold mb-12">Explore My Work</h2>
        </ProgressiveLoad>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "The Science of Energy",
              description: "A comprehensive introduction to a new framework for understanding reality, bridging ancient wisdom with modern science.",
              link: "/books/science-of-energy",
              linkText: "Learn More"
            },
            {
              title: "Research Papers",
              description: "Academic publications exploring quantum mechanics, consciousness, and the nature of reality.",
              link: "/research#papers",
              linkText: "View Papers"
            }
          ].map((item, index) => (
            <ProgressiveLoad 
              key={item.title} 
              delay={index * 200}
            >
              <Card hoverable className="bg-gray-50">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <InteractiveLink 
                  href={item.link}
                  showArrow
                >
                  {item.linkText}
                </InteractiveLink>
              </Card>
            </ProgressiveLoad>
          ))}
        </div>
      </Section>

      {/* About My Work */}
      <Section background="gray" width="narrow" className="text-center">
        <h2 className="text-3xl font-bold mb-8">About My Work</h2>
        <p className="text-lg text-gray-800 mb-8 leading-relaxed">
          For over a decade, I've been developing a comprehensive framework that bridges the gap between consciousness and physical reality. This work represents a new approach to understanding the fundamental nature of existence, offering insights into quantum mechanics, consciousness, and the structure of reality itself.
        </p>
        <InteractiveLink 
          href="/about"
          variant="button"
        >
          Read More
        </InteractiveLink>
      </Section>
    </div>
    </PageTransition>
  )
}