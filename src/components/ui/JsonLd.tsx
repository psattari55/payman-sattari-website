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
    name: 'P. Orelio Sattari',
    alternateName: ['Payman Sattari', 'Orelio Sattari', 'Payman Orelio Sattari'],
    url: 'https://oreliosattari.com',
    description: 'Philosopher, ashavan, and transdisciplinary researcher working at the intersection of physics, consciousness, and metaphysics.',
    knowsAbout: [
      'Ontology',
      'First Principles',
      'Metaphysics',
      'Philosophy of Physics',
      'Quantum Foundations',
      'Systems Theory',
      'Consciousness Studies',
      'Philosophy of Mind',
      'Field Theory'
    ]
  }
}

export function generateSchemaOrgWebsite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'P. Orelio Sattari',
    url: 'https://oreliosattari.com',
    description: 'A first-principles framework unifying physics, consciousness, and ontology. Exploring the fundamental structure of reality and the role of the observer within it.'
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
      name: 'P. Orelio Sattari'
    },
    publisher: {
      '@type': 'Organization',
      name: publication.journal
    },
    description: publication.description
  }
}