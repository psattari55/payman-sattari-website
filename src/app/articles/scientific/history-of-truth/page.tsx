// src/app/articles/scientific/history-of-truth/page.tsx

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
      title: "The History of Truth",
      subtitle: "Toward an Integrated Ontology of Reality",
      description: "Tracing the evolution of truth from ancient beliefs to modern science, and proposing a unified framework that embraces both subjective and objective reality.",
      publishDate: "2024-11-11",
      readTime: "6 min",
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
        <Section width="default" className="pt-24 pb-16">
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
                Our understanding of truth has evolved dramatically over the centuries, from ancient philosophical concepts to the empirical rigor of modern science. Yet, even as science and philosophy have expanded our understanding of the world, they often operate in separate domains: science with objectivity, measuring the physical, and philosophy (and sometimes religion) with subjectivity, exploring inner experience and meaning.
                </p>
                <p className="text-xl text-gray-700 mb-8">
                But what if these two domains were not so separate? What if our pursuit of truth required a model that included both subjective experience and objective measurement as equally valid data about reality? This article explores the historical journey toward such an integrated understanding of truth, drawing from the annals of history to demonstrate the necessity of and natural evolution toward a cohesive approach to truth-seeking in the modern era.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Ancient Roots: Truth as Ideal and Divine</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The earliest human concepts of truth were often tied to the divine or the ideal. Ancient civilizations, from Mesopotamia to Egypt to early Greece, approached reality as something imbued with mystery, often explained by myths and deities. Truth was not yet something to be systematically pursued; instead, it was a given aspect of the world, revealed through gods, nature, and cosmology.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                The ancient Greeks marked a shift by bringing reason into the equation. For Plato, truth was an ideal form, a concept that transcended physical reality. Objects in the material world were seen as imperfect reflections of these pure forms. Aristotle, on the other hand, saw truth as something that could be gleaned from nature through systematic observation. This combination of ideal forms and empirical observation laid the groundwork for much of Western thought.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Scientific Revolution: Truth as Objective and Measurable</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Centuries later, the Scientific Revolution took truth in a new direction. Figures like Galileo, Newton, and Bacon transformed the study of nature into a discipline rooted in empirical observation, mathematics, and measurable outcomes. Truth became something to be verified through data, testing, and reproducibility. This era ushered in the scientific method, which aimed to eliminate subjective bias and focus purely on what could be objectively observed and quantified.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                While the scientific method has led to tremendous advancements, this shift also led to an implicit separation of the observer from the observed. The “subjective observer,” so central in earlier philosophies, was sidelined in favor of studying phenomena independently of personal interpretation or inner experience. This framework has allowed science to make enormous strides, but it has also left deep gaps where it comes to our knowledge of the place of subjective experience, consciousness, and qualitative elements of reality in the overall order of the cosmos.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Role of Subjectivity: Insights from Modern Physics and Philosophy</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The 20th century brought new challenges to the idea of objective truth, particularly with the advent of quantum mechanics. In quantum physics, phenomena like wave-particle duality and the observer effect suggest that observation may influence outcomes at the most fundamental levels of reality. This revelation has led some physicists and philosophers to question the assumption that we can ever fully separate the subject from the object in scientific inquiry.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Similarly, philosophers like Husserl and Heidegger reintroduced the importance of subjectivity, arguing that all knowledge is, in some way, filtered through human perception and experience. This perspective suggests that the observer's role may not only be relevant but essential to understanding the full scope of reality.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Integrating the Subjective and the Objective: Toward a Complete Ontology of Truth</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                In <em>The Science of Energy</em> we argue that for a true and complete understanding of reality—or truth—we must consider all available data. This includes both the objective, measurable aspects of reality and the subjective, qualitative aspects that are equally observable. Experiences like color, taste, and sound are not merely byproducts of brain activity; they are real parts of the human experience. To exclude them is to ignore a substantial portion of observable reality.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                An integrated model of truth requires an ontology—a framework for understanding the nature and structure of existence—that encompasses both the subject and the object. Rather than viewing subjective and objective elements as opposites, this model proposes that they are interdependent aspects of the same reality. Just as a physical object cannot be fully described without considering its dimensions, properties, and context, so too can reality not be fully understood without considering both subjective experience and objective data.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Need for an Expanded Inquiry into Reality</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                As we continue to push the boundaries of science, philosophy, and metaphysics, the integration of subjective and objective perspectives may offer a more holistic path forward. By including subjective experience as part of our empirical investigation into reality, we open up new ways to approach questions of consciousness, experience, and even ethics, grounding them in a model of truth that accounts for all facets of reality.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: Building a New Framework for Truth</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The journey toward understanding truth has been marked by profound shifts, from ancient mysticism to empirical science to modern existential philosophy. Each stage has added a layer to our collective understanding, but perhaps the next step lies in unifying these approaches.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                An integrated ontology of truth invites us to see reality as a complete system, where subjective experience and objective observation are not in conflict, but are complementary. This approach honors the full scope of our observations and opens new pathways for understanding the mysteries of existence. By embracing both aspects of reality, we can build a framework for truth that is as whole and integral as reality itself.
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