// src/data/articles.ts

export interface Article {
    title: string;
    subtitle?: string;
    slug: string;
    category: 'scientific' | 'metaphysical' | 'development' | 'thoughts';
    door?: 'scholar' | 'observer' | 'practitioner';
    description: string;
    publishDate: string;
    readTime: string;
  }
  
  // Combine door sequences with additional articles
  export const articles: Article[] = [
    // Scholar's Door Articles (Scientific Insights)
    {
        title: "The History of Truth",
        subtitle: "Toward an Integrated Ontology of Reality",
        slug: "/articles/scientific/history-of-truth",
        category: "scientific",
        door: "scholar",
        description: "Tracing the evolution of truth from ancient beliefs to modern science, and proposing a unified framework that embraces both subjective and objective reality.",
        publishDate: "2024-10-25",
        readTime: "6 min"
    },
    {
        title: "Fields, Continuity, and the Wholeness of Reality",
        subtitle: "",
        slug: "/articles/scientific/fields-continuity-wholeness",
        category: "scientific",
        door: "scholar",
        description: "An ontological exploration of reality as a unified field, where discreteness emerges within a continuous, interconnected structure.",
        publishDate: "2024-10-25",
        readTime: "6 min"
    },
    {
        title: "The Ideal and the Actual",
        subtitle: "Understanding the Role of Abstraction in Science and Mathematics",
        slug: "/articles/scientific/ideal-and-actual",
        category: "scientific",
        door: "scholar",
        description: "A reflection on the role of idealization in science and math, balancing theoretical clarity with real-world complexity.",
        publishDate: "2024-09-25",
        readTime: "6 min"
    },
    {
        title: "Space and Extension",
        subtitle: "Why Zero-Dimensional Points Cannot Form a Continuum",
        slug: "/articles/scientific/space-and-extension",
        category: "scientific",
        door: "scholar",
        description: "Examining the limitations of zero-dimensional points in forming a continuum and the role of extension in constructing continuous space.",
        publishDate: "2024-09-25",
        readTime: "5 min"
    },
    {
        title: "The Subject and the Object",
        subtitle: "Foundations of Observation and Interpretation",
        slug: "/articles/scientific/subject-and-object",
        category: "scientific",
        door: "scholar",
        description: "Exploring the foundational relationship between observer and observed, examining how perception and quantum mechanics challenge traditional notions of objectivity.",
        publishDate: "2024-08-26",
        readTime: "6 min"
    },
    {
        title: "Qualities and the Observer",
        subtitle: "Rethinking the Nature of Experience",
        slug: "/articles/scientific/qualities-and-observer",
        category: "scientific",
        door: "scholar",
        description: "Exploring the role of the observer in experiencing qualities like color and sound, and its implications for a more complete view of reality in scientific inquiry.",
        publishDate: "2024-08-26",
        readTime: "5 min"
    },
    {
        title: "The Observer at the Center",
        subtitle: "An Exploration of Inner and Outer Realities",
        slug: "/articles/scientific/observer-at-center",
        category: "scientific",
        door: "scholar",
        description: "Examining how modern science redefines the observer's role, highlighting the interplay between external reality and subjective experience.",
        publishDate: "2024-07-27",
        readTime: "8 min"
    },
    {
        title: "The Senses and the Intellect",
        subtitle: "Bridging Experience and Understanding in Our Quest for Reality",
        slug: "/articles/scientific/senses-and-intellect",
        category: "scientific",
        door: "scholar",
        description: "Exploring the complementary roles of sensory experience and intellectual reasoning in forming a holistic understanding of reality.",
        publishDate: "2024-07-27",
        readTime: "7 min"
    },
    //Non-Door Articles (Scientific)
    {
        title: "From Natural Science to Technical Science",
        subtitle: "The Shift from Exploration to Application",
        slug: "/articles/scientific/natural-to-technical-science",
        category: "scientific",
        description: "Examining the profound transition from natural science's philosophical inquiry to technical science's practical applications, and what this shift means for our understanding of reality and the purpose of scientific exploration.",
        publishDate: "2024-12-09",
        readTime: "8 min"
    },
  
    // Observer's Door Articles (Metaphysical)
    {
        title: "The Significance of the Observer",
        subtitle: "Why Consciousness Completes the Picture of Reality",
        slug: "/articles/metaphysical/significance-of-observer",
        category: "metaphysical",
        door: "observer",
        description: "Explores the fundamental role of the observer and consciousness in shaping and experiencing reality, bridging measurable phenomena and subjective experience.",
        publishDate: "2024-10-10",
        readTime: "5 min"
    },
    {
        title: "The Nature of the Self",
        subtitle: "Beyond Thought and Identity",
        slug: "/articles/metaphysical/nature-of-self",
        category: "metaphysical",
        door: "observer",
        description: "Exploring the self beyond thoughts and roles, inviting readers to connect with the deeper awareness that transcends identity.",
        publishDate: "2024-10-10",
        readTime: "5 min"
      },
      {
        title: "Inner and Outer Realities",
        subtitle: "Understanding the Full Spectrum of Experience",
        slug: "/articles/metaphysical/inner-outer-realities",
        category: "metaphysical",
        door: "observer",
        description: "The role of the relationship between inner and outer realities in life and the cosmos.",
        publishDate: "2024-09-10",
        readTime: "6 min"
      },
      {
        title: "Understanding Duality",
        subtitle: "Why Opposites Unite",
        slug: "/articles/metaphysical/understanding-duality",
        category: "metaphysical",
        door: "observer",
        description: "Explores how opposite yet complementary forces come together to form the foundation of reality.",
        publishDate: "2024-09-10",
        readTime: "4 min"
      },
      {
        title: "The Art of Balance",
        subtitle: "Working with Energy Dynamics for Inner Harmony",
        slug: "/articles/metaphysical/art-of-balance",
        category: "metaphysical",
        door: "observer",
        description: "An exploration of energy dynamics as the interplay between opposites creating a pathway toward inward harmony.",
        publishDate: "2024-08-11",
        readTime: "8 min"
      },
      {
        title: "Consciousness as the Creator",
        subtitle: "Shaping Reality from the Inside Out",
        slug: "/articles/metaphysical/consciousness-as-creator",
        category: "metaphysical",
        door: "observer",
        description: "Explores the role of consciousness as creator to transform reality through focus, intention, and awareness.",
        publishDate: "2024-08-11",
        readTime: "7 min"
      },
    //Non-Door Articles (Metaphysical)
  
    // Practitioner's Door Articles (Development)
    {
        title: "The Importance of Integration",
        subtitle: "Turning Insight into Transformation",
        slug: "/articles/development/importance-of-integration",
        category: "development",
        door: "practitioner",
        description: "Learn how to transform moments of insight into lasting change through the practice of integration.",
        publishDate: "2024-09-25",
        readTime: "6 min"
    },
    {
        title: "The Primacy of the Inner Reality",
        subtitle: "How Your Inner World Shapes Your Outer Experience",
        slug: "/articles/development/primacy-of-inner-reality",
        category: "development",
        door: "practitioner",
        description: "Understanding the relationship between our inner world and outer experience for a more fulfilling life.",
        publishDate: "2024-09-25",
        readTime: "4 min"
      },
      {
          title: "The Power of Belief Systems in Shaping Reality",
          slug: "/articles/development/belief-systems-reality",
          category: "development",
          door: "practitioner",
          description: "Exploring the nature of belief and its effect on our experience of reality.",
          publishDate: "2024-08-26",
          readTime: "6 min"
      },
      {
          title: "Balance in Daily Life",
          subtitle: "A Dance of Opposites",
          slug: "/articles/development/balance-in-daily-life",
          category: "development",
          door: "practitioner",
          description: "Discover how balancing opposites can create harmony, resilience, and flow in your daily life.",
          publishDate: "2024-08-26",
          readTime: "6 min"
      },
      {
          title: "Building Emotional Resilience",
          subtitle: "Navigating Life's Ups and Downs with Grace",
          slug: "/articles/development/emotional-resilience",
          category: "development",
          door: "practitioner",
          description: "Learn how to build emotional resilience through self-compassion, presence with emotions, and finding meaning in challenges.",
          publishDate: "2024-07-27",
          readTime: "8 min"
      },
      {
          title: "Grounding",
          subtitle: "Coming Home to the Earth and the Body",
          slug: "/articles/development/grounding",
          category: "development",
          door: "practitioner",
          description: "Explore grounding as a practice of reconnecting with the Earth, your body, and the instinctual wisdom that brings stability and belonging.",
          publishDate: "2024-07-27",
          readTime: "10 min"
      },
    // Add the rest of practitioner's door sequence...
  
    // Additional articles (Latest Thoughts)

    {
        title: "Embodying the Purpose of Life",
        subtitle: "Becoming Your True Self",
        slug: "/articles/thoughts/embodying-purpose-life",
        category: "thoughts",
        description: "Exploring how true purpose emerges not from external achievements or validation, but through aligning with our authentic selves and building lives that reflect our inner truth.",
        publishDate: "2024-12-09",
        readTime: "10 min"
    }

  ];
  
  // Simple helper functions
  export const getArticlesByCategory = (category: Article['category']) => 
    articles.filter(article => article.category === category);
  
  export const getArticlesByDoor = (door: Article['door']) => 
    articles.filter(article => article.door === door);
  
  export const getAllCategories = () => [
    'scientific',
    'metaphysical',
    'development',
    'thoughts'
  ] as const;