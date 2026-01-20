// src/app/writing/[slug]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getWritingBySlug, getAllWritings } from '@/lib/content';
import { compileMDXContent } from '@/lib/mdx';
import { generateWritingMetadata, generateWritingJsonLd } from '@/lib/seo';
import { WritingHeader } from '@/components/writing/WritingHeader';
import { WritingContent } from '@/components/writing/WritingContent';
import { WritingFooter } from '@/components/writing/WritingFooter';
import { RelatedWritings } from '@/components/writing/RelatedWritings';
import { ReadingProgress } from '@/components/writing/ReadingProgress';
import { NewsletterSignup } from '@/components/writing/NewsletterSignup';

export async function generateStaticParams() {
  const writings = await getAllWritings();
  
  return writings.map((writing) => ({
    slug: writing.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const writing = await getWritingBySlug(slug);

  if (!writing) {
    return {
      title: 'Writing Not Found',
    };
  }

  return generateWritingMetadata(writing);
}

export default async function WritingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writing = await getWritingBySlug(slug);

  if (!writing) {
    notFound();
  }

  const { content } = await compileMDXContent(writing.content);
  const jsonLd = generateWritingJsonLd(writing);

  return (
    <>
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
          <WritingHeader writing={writing} />
        <div className="max-w-2xl mx-auto">
          <WritingContent >{content}</WritingContent>
          <WritingFooter writing={writing} />
        </div>
        <NewsletterSignup />
          <RelatedWritings currentWriting={writing} />
        </article>
      </div>
    </>
  );
}