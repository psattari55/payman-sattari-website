// src/app/articles/development/primacy-of-inner-reality/page.tsx
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
      title: "The Primacy of the Inner Reality",
      subtitle: "How Your Inner World Shapes Your Outer Experience",
      description: "Understanding the relationship between our inner world and outer experience for a more fulfilling life.",
      publishDate: "2024-11-11",
      readTime: "4 min",
      category: "Personal Development",
      door: "Practitioner's Door"
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
              {/* INPUT ARTICLE CONTENT STARTING HERE */}
              <article className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-8">
                In our busy, often overwhelming lives, it's easy to feel that everything important happens “out there.” We focus on career goals, relationships, financial security, and the endless stream of daily responsibilities. Yet, if we pause and shift our attention inward, we find a powerful truth: our inner world—our beliefs, emotions, and consciousness—shapes everything we experience in the external world.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Understanding Inner Reality as the Foundation</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                At its core, inner reality is the sum of our beliefs, perceptions, and inner states. Imagine it as the lens through which you interpret the world around you. If that lens is clouded by fear or self-doubt, it can distort reality, making life feel challenging and obstacles appear overwhelming. Conversely, a clear, balanced inner world allows you to experience life more freely, even in challenging circumstances.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Consider this: two people can encounter the same situation, yet their experiences can be drastically different based on their inner worlds. Someone who believes in their resilience might see a setback as an opportunity for growth, while someone with a self-critical inner dialogue may feel defeated. This isn't just “positive thinking”—it's about how deeply held beliefs create different realities, affecting how we perceive and respond to life.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Practical Applications: Shaping Your Inner Reality</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                If our inner reality shapes our experiences, then nurturing a healthy inner world becomes essential. Here are a few practices to start working with your inner reality intentionally:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Self-Reflection: </strong>Take a few moments each day to check in with your inner state. Ask yourself, “What beliefs are influencing how I'm seeing this situation? Are they helping or hindering me?” Journaling can help uncover hidden patterns in your thinking and beliefs.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Challenge Negative Beliefs: </strong>When you notice a limiting belief, gently question it. For instance, if you find yourself thinking, “I'm not good enough for this,” try asking, “Is this belief based on truth, or is it an assumption I've carried without question?” Over time, this practice of questioning can soften the hold of limiting beliefs.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Intentional Inner States: </strong>Try setting a positive inner intention each day. Whether it's cultivating patience, gratitude, or resilience, choose a quality you want to embody. This small practice of choice empowers you to start each day with purpose, shaping how you meet the outer world.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Inner Reality-Outer Reality Connection</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                When we become more aware of our inner state, we start to see the connection between our inner beliefs and outer experiences. For example, if we hold a belief that the world is hostile, we might notice more conflict around us; if we believe in abundance, we may start to see more opportunities. This connection isn't about “wishful thinking” but reflects the subtle ways our consciousness shapes reality. Our actions, choices, and interpretations flow from our inner world, creating a feedback loop between what we believe and what we experience.
                </p>
                
                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Embracing Inner Work as a Path to Fulfillment</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Our modern world often prioritizes outer achievement over inner fulfillment. Yet, aligning our inner reality brings a deeper sense of satisfaction, allowing us to experience the world with clarity and purpose. Instead of seeing challenges as obstacles, we begin to view them as mirrors reflecting our inner beliefs, giving us a chance to grow. This alignment is powerful—it's how we bring consciousness and self-awareness to every part of our lives.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Closing Thoughts</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                As you start to explore your inner reality, remember that even small shifts in perception can transform how you experience life. By clarifying your beliefs and embracing a mindset of self-inquiry, you can create a foundation of inner clarity and strength that enriches everything you do. In the end, the journey inward is the journey to true freedom, because it's only by knowing ourselves that we can fully engage with the world.
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