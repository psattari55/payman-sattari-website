// src/data/sequences.ts
  
interface ArticleSequence {
    title: string;
    subtitle?: string;
    slug: string;
    sequence: number;
    description: string;
    readTime: string;
  }

  export const scholarsDoorSequence: ArticleSequence[] = [
    {
        title: "The History of Truth",
        subtitle: "Toward an Integrated Ontology of Reality",
        slug: "/articles/scientific/history-of-truth",
        sequence: 1,
        description: "Tracing the evolution of truth from ancient beliefs to modern science and proposing a unified framework embracing both subjective and objective reality.",
        readTime: "6 min"
    },
    {
        title: "Fields, Continuity, and the Wholeness of Reality",
        slug: "/articles/scientific/fields-continuity-wholeness",
        sequence: 2,
        description: "An ontological exploration of reality as a unified field, where discreteness emerges within a continuous, interconnected structure.",
        readTime: "6 min"
    },
    {
        title: "The Ideal and the Actual",
        subtitle: "Understanding the Role of Abstraction in Science and Mathematics",
        slug: "/articles/scientific/ideal-and-actual",
        sequence: 3,
        description: "Examining the role of idealization in science and mathematics, balancing theoretical clarity with real-world complexity.",
        readTime: "6 min"
    },
    {
        title: "Space and Extension",
        subtitle: "Why Zero-Dimensional Points Cannot Form a Continuum",
        slug: "/articles/scientific/space-and-extension",
        sequence: 4,
        description: "Examining the limitations of zero-dimensional points in forming a continuum and the role of extension in constructing continuous space.",
        readTime: "5 min"
    },
    {
        title: "The Subject and the Object",
        subtitle: "Foundations of Observation and Interpretation",
        slug: "/articles/scientific/subject-and-object",
        sequence: 5,
        description: "Exploring the foundational relationship between observer and observed, examining how perception and quantum mechanics challenge traditional notions of objectivity.",
        readTime: "6 min"
    },
    {
        title: "Qualities and the Observer",
        subtitle: "Rethinking the Nature of Experience",
        slug: "/articles/scientific/qualities-and-observer",
        sequence: 6,
        description: "Exploring the role of the observer in experiencing qualities like color and sound, and its implications for a more complete view of reality in scientific inquiry.",
        readTime: "5 min"
    },
    {
        title: "The Observer at the Center",
        subtitle: "An Exploration of Inner and Outer Realities",
        slug: "/articles/scientific/observer-at-center",
        sequence: 7,
        description: "Examining how modern science redefines the observer's role, highlighting the interplay between external reality and subjective experience.",
        readTime: "8 min"
    },
    {
        title: "The Senses and the Intellect",
        subtitle: "Bridging Experience and Understanding in Our Quest for Reality",
        slug: "/articles/scientific/senses-and-intellect",
        sequence: 8,
        description: "Exploring the complementary roles of sensory experience and intellectual reasoning in forming a holistic understanding of reality.",
        readTime: "7 min"
    }
  ] as const;
  
  export const observersDoorSequence: ArticleSequence[] = [
    {
      title: "The Significance of the Observer",
      subtitle: "Why Consciousness Completes the Picture of Reality",
      slug: "/articles/metaphysical/significance-of-observer",
      sequence: 1,
      description: "Exploring the fundamental role of the observer and consciousness in shaping and experiencing reality, bridging measurable phenomena and subjective experience.",
      readTime: "5 min"
    },
    {
      title: "The Nature of the Self",
      subtitle: "Beyond Thought and Identity",
      slug: "/articles/metaphysical/nature-of-self",
      sequence: 2,
      description: "Exploring the self beyond thoughts and roles, inviting readers to connect with the deeper awareness that transcends identity.",
      readTime: "5 min"
    },
    {
      title: "Inner and Outer Realities",
      subtitle: "Understanding the Full Spectrum of Experience",
      slug: "/articles/metaphysical/inner-outer-realities",
      sequence: 3,
      description: "Exploring the relationship between the inner and outer in the nature of reality.",
      readTime: "6 min"
    },
    {
        title: "Understanding Duality",
        subtitle: "Why Opposites Unite",
        slug: "/articles/metaphysical/understanding-duality",
        sequence: 4,
        description: "Exploring how opposite yet complementary forces come together to form the foundation of reality.",
        readTime: "4 min"
    },
    {
        title: "The Art of Balance",
        subtitle: "Working with Energy Dynamics for Inner Harmony",
        slug: "/articles/metaphysical/art-of-balance",
        sequence: 5,
        description: "An exploration of energy dynamics as the interplay between opposites creating a pathway toward inward harmony.",
        readTime: "8 min"
    },
    {
        title: "Consciousness as the Creator",
        subtitle: "Shaping Reality from the Inside Out",
        slug: "/articles/metaphysical/consciousness-as-creator",
        sequence: 6,
        description: "Exploring the role of consciousness as creator transforming reality through focus, intention, and awareness.",
        readTime: "7 min"
    }
  ] as const;

  export const practitionersDoorSequence: ArticleSequence[] = [
    {
      title: "The Importance of Integration",
      subtitle: "Turning Insight into Transformation",
      slug: "/articles/development/importance-of-integration",
      sequence: 1,
      description: "Exploring how to transform moments of insight into lasting change through the practice of integration.",
      readTime: "6 min"
    },
    {
      title: "The Primacy of the Inner Reality",
      subtitle: "How Your Inner World Shapes Your Outer Experience",
      slug: "/articles/development/primacy-of-inner-reality",
      sequence: 2,
      description: "Understanding the relationship between our inner world and outer experience for a more fulfilling life.",
      readTime: "4 min"
    },
    {
        title: "The Power of Belief Systems in Shaping Reality",
        slug: "/articles/development/belief-systems-reality",
        sequence: 3,
        description: "Exploring the nature of belief and its effect on our experience of reality.",
        readTime: "6 min"
    },
    {
        title: "Balance in Daily Life",
        subtitle: "A Dance of Opposites",
        slug: "/articles/development/balance-in-daily-life",
        sequence: 4,
        description: "Examining how balancing opposites can create harmony, resilience, and flow in our daily lives.",
        readTime: "6 min"
    },
    {
        title: "Building Emotional Resilience",
        subtitle: "Navigating Life's Ups and Downs with Grace",
        slug: "/articles/development/emotional-resilience",
        sequence: 5,
        description: "Exploring how to build emotional resilience through self-compassion, presence with emotions, and finding meaning in challenges.",
        readTime: "8 min"
    },
    {
        title: "Grounding",
        subtitle: "Coming Home to the Earth and the Body",
        slug: "/articles/development/grounding",
        sequence: 6,
        description: "Examining grounding as a practice of reconnecting with the Earth, our bodies, and an instinctual wisdom that brings stability and belonging.",
        readTime: "10 min"
    }
  ] as const;
  
  // Helper function to get door name from path
export function getDoorFromPath(path: string): 'scholar' | 'observer' | 'practitioner' | null {
    if (path.includes('/scientific/')) return 'scholar';
    if (path.includes('/metaphysical/')) return 'observer';
    if (path.includes('/development/')) return 'practitioner';
    return null;
  }
  
  // Helper function to get total articles in a sequence
  export function getSequenceLength(door: 'scholar' | 'observer' | 'practitioner'): number {
    switch (door) {
      case 'scholar': return scholarsDoorSequence.length;
      case 'observer': return observersDoorSequence.length;
      case 'practitioner': return practitionersDoorSequence.length;
    }
  }