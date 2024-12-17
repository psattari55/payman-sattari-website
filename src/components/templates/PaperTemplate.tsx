// src/components/templates/PaperTemplate.tsx
'use client'

import React from 'react'
import Section from '@/components/ui/Section'
import PageTransition from '@/components/ui/PageTransition'
import ProgressiveLoad from '@/components/ui/ProgressiveLoad'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

interface PaperTemplateProps {
  title: string
  status: {
    type: 'preprint' | 'published' | 'under-review'
    location: string
    date: string
  }
  abstract: string
  keyAreas: {
    title: string
    description: string
  }[]
  implications: string[]
  currentStatus: string
  doi?: string
}

export default function PaperTemplate({
  title,
  status,
  abstract,
  keyAreas,
  implications,
  currentStatus,
  doi
}: PaperTemplateProps) {
  const getStatusDisplay = () => {
    switch (status.type) {
      case 'preprint':
        return `Preprint on ${status.location}`;
      case 'published':
        return `Published in ${status.location}`;
      case 'under-review':
        return `Under Review at ${status.location}`;
    }
  };

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
          <Link 
            href="/research" 
            className="text-sm text-gray-600 hover:text-gray-900 mb-8 inline-block"
          >
            ← Back to Research
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {title}
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl text-gray-600">{getStatusDisplay()}</p>
            <p className="text-lg text-gray-500">{status.date}</p>
            {doi && (
              <a 
                href={`https://doi.org/${doi}`}
                className="flex items-center text-gray-600 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOI: {doi} <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            )}
          </div>
        </Section>

        {/* Rest of the component remains the same */}
        <Section background="gray" width="narrow">
          <ProgressiveLoad>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6">Abstract</h2>
              <p className="text-gray-700 mb-6">{abstract}</p>
            </div>
          </ProgressiveLoad>
        </Section>

        <Section background="white" width="narrow">
          <ProgressiveLoad>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6">Key Areas of Investigation</h2>
              <ul className="space-y-6">
                {keyAreas.map((area, index) => (
                  <li key={index}>
                    <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                    <p className="text-gray-700">{area.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ProgressiveLoad>
        </Section>

        <Section background="gray" width="narrow">
          <ProgressiveLoad>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6">Theoretical Implications</h2>
              <p className="text-gray-700 mb-6">
                This work suggests significant implications for our understanding of:
              </p>
              <ul className="space-y-4">
                {implications.map((implication, index) => (
                  <li key={index} className="text-gray-700">{implication}</li>
                ))}
              </ul>
            </div>
          </ProgressiveLoad>
        </Section>

        <Section background="white" width="narrow" className="text-center">
          <ProgressiveLoad>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6">Current Status</h2>
              <p className="text-gray-700">{currentStatus}</p>
            </div>
          </ProgressiveLoad>
        </Section>
      </div>
    </PageTransition>
  )
}