// src/config/metadata.ts
export const siteConfig = {
    name: 'P. Orelio Sattari',
    title: 'Orelio Sattari - Foundations of Reality',
    description: 'A first-principles framework unifying physics, consciousness, and ontology.',
    url: 'https://oreliosattari.com',
    ogImage: '/images/og-image.jpg',
    keywords: [
      // Academic/Scientific Keywords
      'quantum mechanics',
      'theoretical physics',
      'consciousness studies',
      'ontology',
      'unified field theory',
      'quantum measurement theory',
      'space-time physics',
      'continuous-discrete duality',
      
      // Framework Keywords
      'first-principles ontology',
      'unified framework',
      'metaphysical systems',
      'reality structure',
      'continuous field geometry',
      'foundations of reality',
      
      // Integration Keywords
      'science and consciousness',
      'physics and metaphysics',
      'theory and practice',
      'experiential wisdom',
      'practical applications',
      
      // Specific Concepts
      'quantum field interactions',
      'consciousness-matter relationship',
      'energy patterns',
      'fundamental duality',
      'observer-observed relationship'
    ],
    
    // Structured topic areas for better SEO organization
    topicAreas: {
      academic: {
        title: 'Academic Research in Physics and Consciousness',
        description: 'Research exploring quantum mechanics, field structure, consciousness, and the first principles underlying reality.',
        keywords: ['quantum mechanics', 'theoretical physics', 'ontology', 'consciousness studies']
      },
      experiential: {
        title: 'Experiential Dimensions of Reality',
        description: 'Exploring the interior dimensions of experience and the role of the observer in shaping reality.',
        keywords: ['consciousness', 'experiential wisdom', 'inner work']
      },
      practical: {
        title: 'Practical Applications',
        description: 'Applying first-principles understanding to inner development, coherence, and real-world transformation.',
        keywords: ['practical applications', 'personal development', 'collective change']
      }
    }
  }
  
  export type SiteConfig = typeof siteConfig