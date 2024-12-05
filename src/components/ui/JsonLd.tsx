// src/components/ui/JsonLd.tsx

export interface JsonLdProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Helper functions for generating schema
export function generateSchemaOrgPerson() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Payman Sattari',
    url: 'https://paymansattari.com',
    description: 'Independent researcher and author working at the intersection of physics, consciousness, and metaphysics.',
    knowsAbout: [
      'Quantum Mechanics',
      'Consciousness Studies',
      'Theoretical Physics',
      'Metaphysics',
      'Energy Systems',
      'Reality Framework'
    ]
  }
}

export function generateSchemaOrgWebsite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Payman Sattari',
    url: 'https://paymansattari.com',
    description: 'Exploring the fundamental nature of reality through a unified framework of energy, consciousness, and matter.'
  }
}

export function generatePublicationSchema(publication: {
  title: string;
  journal: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: publication.title,
    author: {
      '@type': 'Person',
      name: 'Payman Sattari'
    },
    publisher: {
      '@type': 'Organization',
      name: publication.journal
    },
    description: publication.description
  }
}