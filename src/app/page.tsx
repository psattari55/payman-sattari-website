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
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
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
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Bridging Consciousness and Physical Reality
        </h1>
        <p className="text-xl text-gray-600 mb-5 leading-relaxed">
          Exploring the fundamental nature of reality through a unified framework of energy, consciousness, and matter.
        </p>
      </Section>

      {/* Introduction Section */}
      <Section background="gray" width="narrow">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <ProfileImage />
          <div className="flex-1 space-y-4">
            <p className="text-lg text-gray-700">
              I'm Payman Sattari, an independent researcher and author working at the intersection of physics, consciousness, and metaphysics. My work offers a unified framework for understanding reality - from quantum mechanics to human experience.
            </p>
            <p className="text-lg text-gray-700">
              Through peer-reviewed research, books, and practical guidance, I explore how energy shapes both our inner and outer reality. My framework provides new insights into fundamental questions in physics while offering practical tools for personal and collective transformation.
            </p>
          </div>
        </div>
      </Section>

    {/* Three Doorways */}
    <Section background="white" width="default">
      <div className="max-w-6xl mx-auto">
        <Doorways showHeader={true} />
      </div>
    </Section>

      {/* Recent Publications */}
      <Section background="gray" width="default">
        <ProgressiveLoad>
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Publications</h2>
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