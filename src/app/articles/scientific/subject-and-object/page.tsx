// src/app/articles/scientific/subject-and-object/page.tsx
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

export default function ArticlePage() {

    const articleInfo = {
      title: "The Subject and the Object",
      subtitle: "Foundations of Observation and Interpretation",
      description: "Exploring the foundational relationship between observer and observed, examining how perception and quantum mechanics challenge traditional notions of objectivity.",
      publishDate: "2024-11-11",
      readTime: "6 min",
      category: "Scientific Insights",
      door: "Scholar's Door"
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

              <article className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-8">
                At the heart of scientific inquiry lies a seemingly straightforward distinction: the subject—the observer—and the object—the thing being observed. This relationship is foundational to empirical science, providing a framework that allows us to examine, measure, and analyze the world around us. Through this separation, science has developed methods to study natural phenomena objectively, focusing on what can be observed independently of who is observing it.
                </p>
                <p className="text-xl text-gray-700 mb-8">
                Yet, as we examine this subject-object distinction more closely, we find layers of complexity that invite deeper questions. Can qualities such as color or sound exist independently of an observer? What role does the subject play in shaping the perception of the object? This article explores the foundational relationship between the subject and the object, revealing insights that challenge conventional assumptions about objectivity and observation.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Subject and Object: A Foundational Distinction in Science</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                In scientific methodology, the separation between subject and object serves as a guiding principle. The subject, or observer, takes on the role of recording and interpreting data, while the object represents the measurable aspects of reality. By keeping these roles distinct, science aims to minimize bias, seeking observations that remain consistent regardless of the individual conducting the experiment.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This subject-object division has allowed science to achieve remarkable progress, creating reliable systems for studying everything from atomic particles to astronomical bodies. By focusing on the object—treating it as an independent reality—scientists can develop theories and models that withstand the scrutiny of repeated testing.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                However, this separation introduces an implicit question: if the subject is responsible for observing, interpreting, and recording, how do we account for the role of perception in this process? In other words, is the act of observation itself entirely objective, or does the subject bring a layer of interpretation that influences the experience of the object?
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Qualities and the Need for a Perceiver</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                One area where the subject-object relationship becomes especially relevant is in the experience of qualities. Qualities—such as color, taste, or texture—require sensory perception. For instance, color as a quality only arises when an observer interprets light waves. The wavelengths of light reflected off a red apple exist independently of an observer, but the experience of “redness” does not exist as an inherent property of the apple. It emerges through the interaction between the apple, the light, and the observer's visual system.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This dependency on the observer raises an intriguing point: qualities do not exist purely in the object but in the relational experience between subject and object. Unlike quantities (such as mass or distance), which can be measured independently, qualities depend on the sensory faculties of the subject. In this way, the subject becomes an integral component of experiencing the object's qualities.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This insight doesn't negate objectivity, but it expands our understanding of it. While objects can have measurable properties, certain aspects—specifically qualities—are accessible only through interaction with a perceiving subject.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Observer Effect and the Role of Perception</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Modern physics has also grappled with the implications of observation, particularly in the context of quantum mechanics. The observer effect, a well-documented phenomenon, suggests that the act of measurement influences the behavior of particles. This idea, while often misunderstood, reveals a profound relationship between the observer and the observed, as the subject's involvement can impact the outcome of an experiment at a quantum level.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                In classical physics, objects are generally treated as independent entities whose properties exist whether or not they are observed. But in quantum mechanics, particles exhibit wave-particle duality, behaving either as waves (continuous) or particles (discrete) depending on the experimental setup. This shift in behavior raises questions about the role of observation in determining reality, suggesting that at the fundamental level, the subject and object may not be entirely separable.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                While the observer effect applies primarily to subatomic particles, it challenges the assumption that the observer can be entirely excluded from the equation. In certain contexts, the act of observation appears to influence the object, complicating the clean separation between subject and object.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Rethinking Objectivity: A Broader View of Empirical Reality</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The subject-object distinction remains a cornerstone of scientific methodology, but exploring its nuances reveals that the observer is not a passive entity. In the experience of qualities, as well as in certain quantum phenomena, the subject's role becomes essential. This understanding doesn't undermine the scientific pursuit of objectivity but rather invites a broader perspective that acknowledges the observer's presence.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                In practice, this means recognizing that empirical reality includes both independent quantities and relational qualities. Objects possess measurable properties, yet some aspects of reality—especially those related to perception—require the presence of a subject to be fully realized. Acknowledging this dynamic allows science to maintain its objectivity while respecting the complexities that arise when the observer plays an active role.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: The Subject and Object as Complementary Aspects of Reality</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The relationship between the subject and the object provides a structured approach to understanding reality, enabling science to develop consistent methods of observation and measurement. However, certain aspects of experience—qualities and certain quantum phenomena—reveal that the observer is not merely a bystander but a participant.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                By considering both the independent and relational aspects of reality, we can appreciate the role of the subject in interpreting and interacting with the object. This view respects the foundational principles of objectivity while embracing a more nuanced understanding of the empirical world. As we continue to explore the nature of observation, perception, and reality, the subject-object relationship remains a vital component of scientific inquiry, bridging the observable with the experiential.
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
    </PageTransition>
  );
}