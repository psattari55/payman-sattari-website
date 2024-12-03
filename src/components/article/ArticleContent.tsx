// src/components/article/ArticleContent.tsx
'use client'

interface ArticleContentProps {
  children: React.ReactNode;
}

export default function ArticleContent({ children }: ArticleContentProps) {
  return (
    <div className="lg:w-2/3 border-l border-r border-gray-100 mx-auto md:px-8">
      <article className="prose prose-lg max-w-none">
        {children}
      </article>
    </div>
  );
}