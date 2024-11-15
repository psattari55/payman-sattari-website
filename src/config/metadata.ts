// src/config/metadata.ts
export const siteConfig = {
    name: 'Payman Sattari',
    title: 'Payman Sattari - Bridging Consciousness and Physical Reality',
    description: 'Exploring a unified framework that bridges quantum mechanics, consciousness, and physical reality through rigorous theoretical physics and experiential understanding.',
    url: 'https://paymansattari.com',
    ogImage: '/images/og-image.jpg',
    keywords: [
      // Academic/Scientific Keywords
      'quantum mechanics',
      'theoretical physics',
      'consciousness studies',
      'unified field theory',
      'quantum measurement theory',
      'space-time physics',
      'continuous-discrete duality',
      
      // Framework Keywords
      'consciousness framework',
      'unified framework',
      'energy principles',
      'metaphysical systems',
      'reality structure',
      'toroidal model',
      
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
        description: 'Peer-reviewed research exploring quantum mechanics, consciousness, and the fundamental nature of reality.',
        keywords: ['quantum mechanics', 'theoretical physics', 'consciousness studies']
      },
      experiential: {
        title: 'Experiential Understanding of Reality',
        description: 'Exploring the direct experience of consciousness and its relationship to physical reality.',
        keywords: ['consciousness exploration', 'experiential wisdom', 'inner work']
      },
      practical: {
        title: 'Practical Applications of Energy Principles',
        description: 'Applying theoretical understanding to personal development and real-world transformation.',
        keywords: ['energy principles', 'practical applications', 'personal development']
      }
    }
  }
  
  export type SiteConfig = typeof siteConfig