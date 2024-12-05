// src/app/articles/[category]/[article]/page.tsx
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { getArticleNavigation } from '@/lib/articleHelpers';
import { formatDate } from '@/lib/formatters';

import Section from '@/components/ui/Section';
import PageTransition from '@/components/ui/PageTransition';
import ReadingProgress from '@/components/article/ReadingProgress';
import ArticleHeader from '@/components/article/ArticleHeader';
import ArticleContent from '@/components/article/ArticleContent';
import ArticleEndSection from '@/components/article/ArticleEndSection';
import ArticleFooterNavigation from '@/components/article/ArticleFooterNavigation';

/* Sidebar Components */
import ArticleNavigation from '@/components/article/ArticleNavigation';
import ShareButtons from '@/components/article/ShareButtons';
import BookPromotion from '@/components/article/BookPromotion';
import NewsletterSignup from '@/components/article/NewsletterSignup';
import ExploreArticles from '@/components/article/ExploreArticles';

export default function ArticlePage() {
  /* FILL IN ALL THE ARTICLE INFO HERE */
    const articleInfo = {
      title: "",
      subtitle: "",
      description: "",
      publishDate: "",
      readTime: "",
      category: "",
      door: undefined 
    };

    const currentPath = usePathname();
    const navigation = getArticleNavigation(currentPath);

    return (
    <PageTransition>
      
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": articleInfo.title,
            "description": articleInfo.description,
            "datePublished": articleInfo.publishDate,
            "author": {
              "@type": "Person",
              "name": "Payman Sattari"
            }
          })
        }}
      />

      <ReadingProgress />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <Section width="default" className="pt-14 md:pt-24 pb-16">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <ArticleContent>
              <ArticleHeader 
                title={articleInfo.title}
                subtitle={articleInfo.subtitle}
                date={formatDate(articleInfo.publishDate)}
                readTime={articleInfo.readTime}
                category={articleInfo.category}
                door={articleInfo.door}
              />
              {/* INPUT ARTICLE CONTENT STARTING HERE */}
              <article className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-8">
                  BEGINNING LARGER TEXT HERE
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">SECTION TITLE</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  REGULAR TEXT HERE
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                  YOU CAN REPEAT THIS PATTERN FOR AS MANY PARAGRAPHS OR SECTIONS AS YOU NEED.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">SECTION TITLE</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  BULLET POINTED LIST TEXT INTRODUCTION:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">BOLDED BEGINNING</strong> REST OF BULLET POINT TEXT.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">SECOND POINT</strong> AND SO ON...
                  </li>
                </ul>
                
                {/* Article End Section */}
                <ArticleEndSection 
                  door={articleInfo.door}
                  navigation={navigation}
                />

                {/* End of Article Navigation */}
                {navigation.previous || navigation.next ? (
                <ArticleFooterNavigation 
                    previousArticle={navigation.previous}
                    nextArticle={navigation.next}
                    isLastInSequence={!navigation.next}
                    doorHref="/#doorways"
                />
                ) : null}

              </article>
            </ArticleContent>

            {/* Sidebar */}
            <motion.aside 
            className="lg:w-1/3 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            >

            {/* Social Share Section */}
            <ShareButtons 
              title={articleInfo.subtitle ? `${articleInfo.title}: ${articleInfo.subtitle}` : articleInfo.title} 
            />

            {/* Navigation */}
            {articleInfo.door && (
            <ArticleNavigation 
                previous={navigation.previous}
                next={navigation.next}
                door={articleInfo.door}
            />
            )}

            {/* Book Promotion */}
            <BookPromotion 
              coverImage="/images/books/science-of-energy-cover.jpg"
              title="The Science of Energy"
              description="A comprehensive introduction to a new framework for understanding reality, revealing the deep connections between consciousness and material reality."
            />

            {/* Newsletter */}
            <NewsletterSignup />

            {/* Explore Articles */}
            <ExploreArticles 
              articles={[
                {
                  title: "The Primacy of the Inner Reality",
                  href: "/articles/development/primacy-of-inner-reality"
                },
                {
                  title: "Understanding Duality",
                  href: "#"
                },
                {
                  title: "The Nature of Consciousness",
                  href: "#"
                }
              ]}
            />

            </motion.aside>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}