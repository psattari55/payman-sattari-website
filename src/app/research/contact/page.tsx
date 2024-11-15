// src/app/research/contact/page.tsx
'use client'

import React from 'react'
import Section from '@/components/ui/Section'
import PageTransition from '@/components/ui/PageTransition'
import ResearchContactForm from '@/components/forms/ResearchContactForm'
import Link from 'next/link'

export default function ResearchContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
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
            Research Contact
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            For academic inquiries, collaboration opportunities, or questions about specific papers, please use the form below.
          </p>
        </Section>

        <Section background="gray" width="default">
          <ResearchContactForm />
        </Section>
      </div>
    </PageTransition>
  )
}