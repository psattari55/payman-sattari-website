// src/app/articles/metaphysical/understanding-duality/page.tsx

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
      title: "Understanding Duality",
      subtitle: "Why Opposites Unite",
      description: "Explores how opposite yet complementary forces come together to form the foundation of reality.",
      publishDate: "2024-09-10",
      readTime: "4 min",
      category: "Metaphysical Concepts",
      door: "Observer's Door"
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
                In our everyday lives, we often see opposites as forces in conflict—light versus dark, order versus chaos, activity versus rest. Yet, duality isn't about opposition. Instead, it's about the complementary nature of these forces, where each side is essential and enhances the other. In our framework, duality lies at the heart of understanding reality, inviting us to see beyond surface contrasts and appreciate the balance these forces bring to existence.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Essence of Duality</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                At the most fundamental level, duality is the coexistence of opposites that form a complete, balanced whole. Imagine the symbol of yin and yang: two halves, one dark and one light, interlocked in a circle. This symbol represents balance, showing us that every aspect of existence contains a touch of its counterpart. In this system, yin and yang are not merely abstract ideas but essential forces—yin as the continuous, inward, and receptive energy, and yang as the discrete, outward, and active energy. Together, they create harmony and sustain life.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Practical Examples of Duality in Everyday Life</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Duality isn't just a concept for philosophical reflection; it's something we encounter every day. Here are a few ways duality plays out in our lives:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Activity and Rest: </strong> To function at our best, we need both effort (yang) and recuperation (yin). By balancing work with relaxation, we maintain physical and mental well-being. Embracing both allows us to avoid burnout and perform with more clarity and energy.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Mind and Heart:</strong> Decision-making often requires the balance of thought (yang) and feeling (yin). When we lean too heavily on logic without considering our emotions, we can make choices that feel unaligned. Conversely, if we only follow our emotions, we may overlook important practical considerations. Duality teaches us that wisdom emerges when we balance both perspectives.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Self and Other:</strong> Healthy relationships require a balance between honoring our own needs (yang) and showing compassion for others (yin). Recognizing this duality allows us to build connections that are both respectful and supportive, grounded in mutual understanding.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Embracing Duality for Personal Growth</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Accepting and integrating both sides of any duality can lead to profound growth. Rather than seeing opposites as sources of conflict, we can view them as partners in our journey. Here are a few ways to apply this mindset:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Balance Your Inner and Outer Worlds:</strong> Just as you engage with the outer world through work, relationships, and goals, it's equally important to cultivate your inner world—your beliefs, emotions, and personal growth. By valuing both, you create a life that feels whole and fulfilling.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Seek Harmony, Not Extremes: </strong> Life often pulls us toward extremes—whether it's working too much or avoiding responsibilities. By seeking balance, we can avoid burnout and live more sustainably, making steady progress without sacrificing well-being.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Acknowledge Both Strength and Vulnerability:</strong> Embracing duality means valuing all aspects of yourself, both strong and vulnerable. Recognize that strength often emerges through vulnerability, and that acknowledging your limitations can lead to resilience and wisdom.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Duality as a Guiding Principle in the Ontological System</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                In <em>The Science of Energy</em>, duality forms a central tenet of the system's framework. By understanding the complementary forces of yin and yang, continuous and discrete, inner and outer, we gain insight into the structure of reality itself. Duality suggests that life isn't about choosing one side over the other but about integrating both for a richer, more balanced existence.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This principle has implications that extend far beyond personal experience. It touches on the nature of consciousness and matter, subjective and objective reality, and even quantum phenomena where particles exhibit both wave-like (yin) and particle-like (yang) behavior. Through duality, we see that opposites do not compete but co-create, leading to a harmonious, dynamic whole.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: Finding Unity in Diversity</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                By embracing duality, we cultivate a more balanced perspective, seeing that opposites don't diminish each other but enrich our understanding of life. Each force enhances the other, like two dancers moving in sync. In this view, life is a harmonious blend of opposing yet complementary energies, with each part contributing to a greater whole.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                When we embrace duality, we align ourselves with a natural rhythm that can bring greater peace, balance, and clarity to every aspect of our lives. We're invited not only to understand but to experience the beauty and unity that lies within the interplay of opposites.
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