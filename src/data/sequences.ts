// src/data/sequences.ts
  
interface ArticleSequence {
    title: string;
    subtitle?: string;
    path: string;
    sequence: number;
    description: string;  // Brief description for previews/cards
    estimatedReadTime: string;
  }

  export const scholarsDoorSequence: ArticleSequence[] = [
    {
      title: "The History of Truth",
      subtitle: "Toward an Integrated Ontology of Reality",
      path: "/articles/scientific/history-of-truth",
      sequence: 1,
      description: "Tracing the evolution of truth from ancient beliefs to modern science, and proposing a unified framework that embraces both subjective and objective reality.",
      estimatedReadTime: "6 min"
    },
    {
      title: "Fields, Continuity, and the Wholeness of Reality",
      path: "/articles/scientific/fields-continuity-wholeness",
      sequence: 2,
      description: "An ontological exploration of reality as a unified field, where discreteness emerges within a continuous, interconnected structure.",
      estimatedReadTime: "6 min"
    },
    {
        title: "The Ideal and the Actual",
        subtitle: "Understanding the Role of Abstraction in Science and Mathematics",
        path: "/articles/scientific/ideal-and-actual",
        sequence: 3,
        description: "A reflection on the role of idealization in science and math, balancing theoretical clarity with real-world complexity.",
        estimatedReadTime: "6 min"
    },
    {
        title: "Space and Extension",
        subtitle: "Why Zero-Dimensional Points Cannot Form a Continuum",
        path: "/articles/scientific/space-and-extension",
        sequence: 4,
        description: "Examining the limitations of zero-dimensional points in forming a continuum and the role of extension in constructing continuous space.",
        estimatedReadTime: "5 min"
    },
    {
        title: "The Subject and the Object",
        subtitle: "Foundations of Observation and Interpretation",
        path: "/articles/scientific/subject-and-object",
        sequence: 5,
        description: "Exploring the foundational relationship between observer and observed, examining how perception and quantum mechanics challenge traditional notions of objectivity.",
        estimatedReadTime: "6 min"
    },
    {
        title: "Qualities and the Observer",
        subtitle: "Rethinking the Nature of Experience",
        path: "/articles/scientific/qualities-and-observer",
        sequence: 6,
        description: "Exploring the role of the observer in experiencing qualities like color and sound, and its implications for a more complete view of reality in scientific inquiry.",
        estimatedReadTime: "5 min"
    },
    {
        title: "The Observer at the Center",
        subtitle: "An Exploration of Inner and Outer Realities",
        path: "/articles/scientific/observer-at-center",
        sequence: 7,
        description: "Examining how modern science redefines the observer's role, highlighting the interplay between external reality and subjective experience.",
        estimatedReadTime: "8 min"
    },
    {
        title: "The Senses and the Intellect",
        subtitle: "Bridging Experience and Understanding in Our Quest for Reality",
        path: "/articles/scientific/senses-and-intellect",
        sequence: 8,
        description: "Exploring the complementary roles of sensory experience and intellectual reasoning in forming a holistic understanding of reality.",
        estimatedReadTime: "7 min"
    }
  ] as const;
  
  export const observersDoorSequence: ArticleSequence[] = [
    {
      title: "The Significance of the Observer",
      subtitle: "Why Consciousness Completes the Picture of Reality",
      path: "/articles/metaphysical/significance-of-observer",
      sequence: 1,
      description: "Explores the fundamental role of the observer and consciousness in shaping and experiencing reality, bridging measurable phenomena and subjective experience.",
      estimatedReadTime: "5 min"
    },
    {
      title: "The Nature of the Self",
      subtitle: "Beyond Thought and Identity",
      path: "/articles/metaphysical/nature-of-self",
      sequence: 2,
      description: "Exploring the self beyond thoughts and roles, inviting readers to connect with the deeper awareness that transcends identity.",
      estimatedReadTime: "5 min"
    },
    {
      title: "Inner and Outer Realities",
      subtitle: "Understanding the Full Spectrum of Experience",
      path: "/articles/metaphysical/inner-outer-realities",
      sequence: 3,
      description: "The role of the relationship between inner and outer realities in life and the cosmos.",
      estimatedReadTime: "6 min"
    },
    {
        title: "Understanding Duality",
        subtitle: "Why Opposites Unite",
        path: "/articles/metaphysical/understanding-duality",
        sequence: 4,
        description: "Explores how opposite yet complementary forces come together to form the foundation of reality.",
        estimatedReadTime: "4 min"
    },
    {
        title: "The Art of Balance",
        subtitle: "Working with Energy Dynamics for Inner Harmony",
        path: "/articles/metaphysical/art-of-balance",
        sequence: 5,
        description: "",
        estimatedReadTime: "8 min"
    },
    {
        title: "Consciousness as the Creator",
        subtitle: "Shaping Reality from the Inside Out",
        path: "/articles/metaphysical/consciousness-as-creator",
        sequence: 6,
        description: "Explores the role of consciousness as creator to transform reality through focus, intention, and awareness.",
        estimatedReadTime: "7 min"
    }
  ] as const;

  export const practitionersDoorSequence: ArticleSequence[] = [
    {
      title: "The Importance of Integration",
      subtitle: "Turning Insight into Transformation",
      path: "/articles/development/importance-of-integration",
      sequence: 1,
      description: "Learn how to transform moments of insight into lasting change through the practice of integration.",
      estimatedReadTime: "6 min"
    },
    {
      title: "The Primacy of the Inner Reality",
      subtitle: "How Your Inner World Shapes Your Outer Experience",
      path: "/articles/development/primacy-of-inner-reality",
      sequence: 2,
      description: "Understanding the relationship between our inner world and outer experience for a more fulfilling life.",
      estimatedReadTime: "4 min"
    },
    {
        title: "The Power of Belief Systems in Shaping Reality",
        path: "/articles/development/belief-systems-reality",
        sequence: 3,
        description: "Exploring the nature of belief and its effect on our experience of reality.",
        estimatedReadTime: "6 min"
    },
    {
        title: "Balance in Daily Life",
        subtitle: "A Dance of Opposites",
        path: "/articles/development/balance-in-daily-life",
        sequence: 4,
        description: "Discover how balancing opposites can create harmony, resilience, and flow in your daily life.",
        estimatedReadTime: "6 min"
    },
    {
        title: "Building Emotional Resilience",
        subtitle: "Navigating Life's Ups and Downs with Grace",
        path: "/articles/development/emotional-resilience",
        sequence: 5,
        description: "Learn how to build emotional resilience through self-compassion, presence with emotions, and finding meaning in challenges.",
        estimatedReadTime: "8 min"
    },
    {
        title: "Grounding",
        subtitle: "Coming Home to the Earth and the Body",
        path: "/articles/development/grounding",
        sequence: 6,
        description: "Explore grounding as a practice of reconnecting with the Earth, your body, and the instinctual wisdom that brings stability and belonging.",
        estimatedReadTime: "10 min"
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