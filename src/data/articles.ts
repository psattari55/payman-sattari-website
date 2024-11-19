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
      publishDate: "2024-01-01",
      readTime: "6 min"
    },
    {
        title: "Fields, Continuity, and the Wholeness of Reality",
        subtitle: "",
        slug: "/articles/scientific/fields-continuity-wholeness",
        category: "scientific",
        door: "scholar",
        description: "An ontological exploration of reality as a unified field, where discreteness emerges within a continuous, interconnected structure.",
        publishDate: "2024-11-11",
        readTime: "6 min"
      },

    // Add the rest of scholar's door sequence...
  
    // Observer's Door Articles (Metaphysical)
    {
      title: "The Significance of the Observer",
      subtitle: "Why Consciousness Completes the Picture of Reality",
      slug: "/articles/metaphysical/significance-of-observer",
      category: "metaphysical",
      door: "observer",
      description: "Explores the fundamental role of the observer and consciousness in shaping and experiencing reality, bridging measurable phenomena and subjective experience.",
      publishDate: "2024-01-02",
      readTime: "5 min"
    },
    // Add the rest of observer's door sequence...
  
    // Practitioner's Door Articles (Development)
    {
      title: "The Importance of Integration",
      subtitle: "Turning Insight into Transformation",
      slug: "/articles/development/importance-of-integration",
      category: "development",
      door: "practitioner",
      description: "Learn how to transform moments of insight into lasting change through the practice of integration.",
      publishDate: "2024-01-03",
      readTime: "6 min"
    },
    // Add the rest of practitioner's door sequence...
  
    // Additional articles not in door sequences...
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