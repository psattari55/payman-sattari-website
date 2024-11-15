// src/lib/schemas.ts
export function generateSchemaOrgScholarlyArticle(paper: {
    title: string;
    journal: string;
    description: string;
    status: string;
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'ScholarlyArticle',
      name: paper.title,
      headline: paper.title,
      description: paper.description,
      author: {
        '@type': 'Person',
        name: 'Payman Sattari'
      },
      publisher: {
        '@type': 'Organization',
        name: paper.journal
      },
      isPartOf: {
        '@type': 'Periodical',
        name: paper.journal
      },
      keywords: [
        'quantum mechanics',
        'consciousness',
        'theoretical physics',
        'unified framework'
      ]
    }
  }