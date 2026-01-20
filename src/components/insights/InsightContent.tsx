// src/components/insights/InsightContent.tsx

'use client';

import { compileMDXContent } from '@/lib/mdx';
import { useEffect, useState } from 'react';

interface InsightContentProps {
  expansion: string;
}

export default function InsightContent({ expansion }: InsightContentProps) {
  const [content, setContent] = useState<React.ReactElement | null>(null);

  useEffect(() => {
    compileMDXContent(expansion).then(({ content }) => {
      setContent(content);
    });
  }, [expansion]);

  if (!content) {
    return <div className="animate-pulse h-64 bg-gray-50 rounded" />;
  }

  return (
    <div className="prose prose-lg prose-gray max-w-none font-serif leading-relaxed border-t border-gray-50 pt-12">
      {content}
    </div>
  );
}