// src/lib/metadata.ts

export function generateArticleMetadata(article: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    title: `${article.title} | P. Orelio Sattari`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: `https://oreliosattari.com${article.path}`,
    }
  };
}