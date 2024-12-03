// src/app/articles/scientific/space-and-extension/page.tsx

'use client'

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { getArticleNavigation } from '@/lib/articleHelpers';
import { formatDate } from '@/lib/formatters';

import { Toast } from '@/components/ui/Toast';
import Section from '@/components/ui/Section';
import PageTransition from '@/components/ui/PageTransition';
import InteractiveLink from '@/components/ui/InteractiveLink';
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

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ArticlePage() {

    const articleInfo = {
      title: "Space and Extension",
      subtitle: "Why Zero-Dimensional Points Cannot Form a Continuum",
      description: "Examining the limitations of zero-dimensional points in forming a continuum and the role of extension in constructing continuous space.",
      publishDate: "2024-11-11",
      readTime: "5 min",
      category: "Scientific Insights",
      door: "Scholar's Door"
    };

    const currentPath = usePathname();
    const navigation = getArticleNavigation(currentPath);

    const [isSubscribing, setIsSubscribing] = useState(false);

    const [showToast, setShowToast] = useState(false);

    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          setShowToast(true);
          setTimeout(() => setShowToast(false), 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      };

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

              <article className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-8">
                In mathematics and physics, zero-dimensional points are often treated as the building blocks of space—fixed positions that allow us to define lines, planes, and volumes. These points, though lacking physical size, serve as reference markers within various models, from Euclidean geometry to quantum physics.
                </p>
                <p className="text-xl text-gray-700 mb-8">
                But if we pause to consider the nature of zero-dimensional points, an interesting question arises: Can a collection of extensionless points truly create a continuous space? If each point is defined by its separateness and lack of extension, what happens when we try to imagine these points forming an uninterrupted continuum? This article explores the implications of starting with continuity rather than discrete points, highlighting why extension may be a prerequisite for constructing continuous space.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Zero-Dimensional Points: Foundation or Limitation?</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Zero-dimensional points are defined by their lack of extension. They represent specific locations without occupying any measurable part of space themselves. In mathematics, these points can be used to define geometric shapes and structures. By connecting points, we form lines; by arranging lines, we create planes; and by stacking planes, we produce volumes.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Yet, the paradox remains: points themselves are dimensionless. They have no length, width, or depth, and aggregating more points does not inherently create extension. If each point is separate and lacks any measurable size, how can they combine to produce a continuous line or volume?
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This question isn't just theoretical. It touches on foundational issues in geometry, physics, and ontology, asking us to reconsider whether points are the true building blocks of space or simply a convenient abstraction.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Extension as a Prerequisite for Continuity</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                A continuum is defined by its unbroken, seamless nature—it is extended, with no gaps between any two points. This continuity implies that between any two positions, there exists an infinite number of intermediate positions. In other words, a continuum has built-in extension, allowing it to occupy space smoothly and without interruption.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                If we start with discrete points, each inherently lacking extension, we encounter a logical problem: extension cannot arise from entities that are themselves extensionless. Adding more zero-dimensional points simply increases the number of isolated positions; it does not create a connected, continuous entity. By contrast, starting with a continuous structure naturally includes the potential for discrete elements within it, as continuity provides the “space” for these positions to exist within an interconnected framework.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This relationship suggests that continuity must logically precede discreteness, as it provides the ontological “background” necessary for any discrete points to be meaningful.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Continuity and Discreteness in Quantum Field Theory</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                This idea resonates with developments in modern physics, particularly in quantum field theory (QFT). In QFT, particles are not considered as independent, discrete entities in the traditional sense. Instead, they are excitations or disturbances within continuous fields that span space. The field itself exists as a smooth, uninterrupted continuum, while particles arise as localized, discrete phenomena within this continuous field under certain conditions.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                In this context, the continuous field provides the foundation, and particles emerge within it, not as separate entities but as specific expressions or “excitations” of the field. This framework reinforces the notion that continuity is primary, with discreteness emerging as a secondary, localized phenomenon. Here, the continuous field is the underlying “space” in which discrete particles manifest, supporting the idea that continuity underlies and allows for discrete expressions of matter.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Ontological Implications: Rethinking the Foundations of Space</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                If continuity is required to give rise to discrete points, this has intriguing implications for our understanding of space. Rather than viewing space as an assembly of zero-dimensional points, we might consider it as a continuous field where discrete elements emerge contextually. This perspective shifts our view from seeing points as foundational “building blocks” to seeing them as expressions within a continuous medium that gives them coherence and context.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This shift aligns with a broader trend in theoretical physics, where fields are often seen as more fundamental than particles. In quantum mechanics, for example, particles exhibit both wave-like (continuous) and particle-like (discrete) behaviors, depending on the context of observation. This dual behavior may reflect an underlying relationship where continuity provides a cohesive background, and discreteness emerges as a specific, measurable expression within it.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: A Unified View of Space as Continuum and Discreteness</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The relationship between continuity and discreteness invites us to reconsider foundational assumptions in geometry, physics, and the nature of space itself. If continuity indeed provides the primary framework within which discreteness arises, then space is not merely an accumulation of points but a continuous medium where discrete events occur.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This ontological relationship offers a more integrated view of reality—one that respects the distinct properties of continuous and discrete phenomena while recognizing their deep interdependence. As we continue exploring the nature of space, time, and matter, this perspective may provide a cohesive way to understand the complex structures that make up our universe.
                </p>

                {/* Article End Section */}
                <ArticleEndSection 
                  door={articleInfo.door}
                  navigation={navigation}
                />

                {/* End of Article Navigation */}
                <ArticleFooterNavigation 
                  previousArticle={navigation.previous}
                  nextArticle={navigation.next}
                  isLastInSequence={!navigation.next}
                  doorHref="/#doorways"
                />

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
            <ArticleNavigation 
              previous={navigation.previous}
              next={navigation.next}
              door={articleInfo.door}
            />

            {/* Book Promotion */}
            <BookPromotion 
              coverImage="/images/books/science-of-energy-cover.jpg"
              title="The Science of Energy"
              description="A comprehensive introduction to a new framework for understanding reality, revealing the deep connections between consciousness and material reality."
              learnMoreHref="/books/science-of-energy"
              buyHref="#"
            />

            {/* Newsletter */}
            <NewsletterSignup />

            {/* Explore Articles
            <ExploreArticles 
              articles={[
                {
                  title: "Energy Fields in Daily Life",
                  href: "#"
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
            /> */}

            </motion.aside>
          </div>
        </Section>
      </div>
      {showToast && <Toast message="Link copied to clipboard!" />}
    </PageTransition>
  );
}