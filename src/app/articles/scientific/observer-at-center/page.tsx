// src/app/articles/scientific/observer-at-center/page.tsx
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
      title: "The Observer at the Center",
      subtitle: "An Exploration of Inner and Outer Realities",
      description: "Examining how modern science redefines the observer's role, highlighting the interplay between external reality and subjective experience.",
      publishDate: "2024-11-11",
      readTime: "8 min",
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
                In the pursuit of knowledge, science has traditionally approached reality as something external—a vast, objective realm to be measured, analyzed, and understood from the outside. The observer's role in this process has been one of neutrality, with the goal of recording data without influencing it. This approach has brought extraordinary clarity, leading to advancements that have shaped our modern understanding of the physical universe.
                </p>
                <p className="text-xl text-gray-700 mb-8">
                But as our scientific understanding has evolved, so too has our understanding of the observer. From classical mechanics to quantum theory and relativity, science has gradually revealed that the observer might not be as separate from the observed as we once believed. This article explores how recent insights invite us to consider not only the outer aspects of reality but also an inward dimension—a movement toward understanding the observer's central role in how reality is experienced and known.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Classical Science: The Observer as Passive and Peripheral</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                For much of history, science has operated on the assumption that the observer is separate from the phenomena being studied. In classical mechanics, the universe was seen as a well-ordered system governed by fixed laws. The observer's job was simply to study these laws, ideally without influencing or altering what was being observed. This perspective established objectivity as the gold standard, keeping subjective experience and the inner realm of the observer separate from scientific inquiry.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This approach proved immensely valuable. It allowed scientists to isolate variables, create repeatable experiments, and describe reality in terms that could be universally agreed upon. However, the separation of observer and observed also created an implicit divide between inner experience and outer measurement—a divide that left certain aspects of experience less understood.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Quantum Mechanics: The Observer as Relational</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                In the early 20th century, quantum mechanics brought unexpected challenges to the classical view. Experiments at the quantum level revealed that particles like electrons and photons do not behave in ways that can be fully explained by classical assumptions. Phenomena such as wave-particle duality and the observer effect indicated that observation itself might play a role in determining physical outcomes.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                In the famous double-slit experiment, particles behaved as waves when unobserved but as particles when measured. This change in behavior suggested that the observer's interaction with the system influenced the observed outcome. Although the role of consciousness in this effect remains a matter of scientific debate, it became clear that observation at the quantum level is not a passive act—it is relational, involving the observer in a way that challenges the clean separation between subject and object.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This insight does not require us to view consciousness as a cause, but it does invite us to consider that observation is an interactive process. In quantum mechanics, the observer is not simply observing an independent reality but is involved in shaping how reality presents itself. This shift hints at a deeper relationship between the inner experience of observation and the outer behavior of matter.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Relativity and the Observer's Perspective</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                While quantum mechanics revealed the observer's influence on particles, Einstein's theory of relativity demonstrated that the observer's position and movement affect measurements of time and space. According to relativity, an observer's frame of reference determines how they experience time, length, and even mass. Two observers moving at different speeds, or positioned in different gravitational fields, will measure different realities.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This relativity of measurement implies that reality is not an absolute structure independent of perspective. Instead, it is shaped by the observer's unique position within it. The implications are significant: knowledge of reality cannot be separated from the context of the observer. This perspective does not imply that reality is subjective but rather that it is relational, where both the observer and the observed influence the experience of reality.
                </p>
                
                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Moving Inward: Considering the Observer's Inner Dimension</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                As science examines the influence of the observer's outer position, our framework invites us to consider an inward dimension that is equally significant. While classical science has focused on external observation, the concept of the “inner” brings attention to the space of subjective awareness—the realm where perception, experience, and consciousness reside. This inward movement does not alter external facts, but it does shape how we experience and interpret them.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                In this view, the observer is not only an entity positioned in space but also a conscious participant who engages reality from within. Just as the observer's external position affects measurement in relativity, the observer's inner state shapes perception and experience. This perspective does not reduce science to subjectivity but acknowledges that the inner dimension of experience—our awareness, interpretation, and sense of self—plays an essential role in how reality is apprehended.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Role of the Observer as a Bridge Between Inner and Outer Realities</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                By considering both the outer and inner aspects of observation, we arrive at a more integrated model of the observer. The observer is not merely a passive receiver of data but a bridge between outer and inner dimensions. Just as a telescope brings distant galaxies into focus, consciousness brings outer reality into the realm of experience, where it is perceived, interpreted, and given meaning.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This model does not require us to view consciousness as creating reality, but it does suggest that reality as experienced cannot be fully understood without acknowledging the role of the observer's inward dimension. The observer bridges the material and experiential realms, connecting empirical observation with inner experience in a way that brings coherence to both.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Experience as the Basis of Knowing Reality</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Ultimately, the observer's role brings us to the recognition that experience is foundational to knowing. While scientific models allow us to describe external phenomena, experience itself provides the basis from which knowledge emerges. The observer's inward dimension—their capacity to perceive, interpret, and feel—is as essential to understanding reality as the objective measurements they make.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This shift does not discard objective knowledge but rather places it within the context of lived experience. Reality, as known, is not purely external but arises through the interplay between the observer's inner and outer worlds. This does not diminish empirical rigor; instead, it invites a fuller view that respects both the data we measure and the consciousness that experiences it.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: The Observer as the Central Participant in Reality</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                As science moves toward a more comprehensive understanding, the observer emerges not just as a peripheral entity but as a central participant in the process of knowing. By recognizing the role of the inner dimension—the observer's subjective awareness—we bring both scientific objectivity and lived experience into harmony. This view does not conclude that consciousness is the cause of reality but suggests that reality as experienced is inherently relational.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                In placing the observer at the center, we honor the full scope of what it means to engage with truth—integrating the measurable and the immediate, the objective and the inner. This unified perspective acknowledges that the journey from outer reality to inner awareness completes the picture, making the observer not merely an observer but an essential part of the reality they seek to understand.
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