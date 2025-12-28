// src/app/articles/metaphysical/inner-outer-realities/page.tsx

'use client'

import React from 'react';
import { Eye } from "lucide-react";
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
import DoorCard from "@/components/features/DoorCard";

/* Sidebar Components */
import ArticleNavigation from '@/components/article/ArticleNavigation';
import ShareButtons from '@/components/article/ShareButtons';
import BookPromotion from '@/components/article/BookPromotion';
import NewsletterSignup from '@/components/article/NewsletterSignup';
import ExploreArticles from '@/components/article/ExploreArticles';

export default function ArticlePage() {

    const articleInfo = {
      title: "Inner and Outer Realities",
      subtitle: "Understanding the Full Spectrum of Experience",
      description: "Exploring the relationship between the inner and outer in the nature of reality.",
      publishDate: "2024-09-10",
      readTime: "6 min",
      category: "Metaphysical Concepts",
      door: "Experience Series"
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
              "name": "P. Orelio Sattari"
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
                When we talk about “reality,” most of us think of the physical world around us—the people, places, and events we can observe and measure. This outer reality is tangible and structured, governed by laws that we can study and understand through science. But alongside this outer dimension, there exists an equally profound and influential aspect: the inner reality within each of us.
                </p>
                <p className="text-xl text-gray-700 mb-8">
                Inner reality is the realm of thoughts, emotions, perceptions, and subtle experiences that exist uniquely in each individual. Unlike outer reality, which is shared and observable, inner reality is personal and subjective, shaped by consciousness, beliefs, and memories. To understand life fully, we must recognize that both inner and outer realities coexist, interacting with and influencing one another to create a complete picture of existence.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Outer Reality: Structure, Order, and Physical Form</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Outer reality is the world of observable forms, physical objects, and measurable phenomena. It includes everything we see and interact with in the external environment—from trees and buildings to planets and stars. This is the domain of science, where facts, data, and empirical knowledge help us navigate and understand the structure of the universe.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Science excels at revealing the order and patterns of this reality, providing tools to explore everything from atomic particles to the vastness of space. Yet, while science offers incredible insights into the mechanics of the world, it doesn't fully capture the experiential quality of life—the depth of our feelings, the personal significance of a memory, or the beauty of a sunset. These aspects of existence arise not from the outer world alone but from the interaction between outer phenomena and our inner awareness.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Inner Reality: Consciousness, Perception, and Experience</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Inner reality is the domain of consciousness—the subjective experience where thoughts, emotions, and intuitions arise. It's an internal landscape that shapes how we interpret and engage with the outer world, coloring each experience with meaning and personal significance. While inner reality cannot be measured or quantified like outer reality, it is no less real. In fact, it is within this inner realm that we find life's most profound qualities—love, awe, joy, and understanding.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Consider a piece of music. In the outer reality, music is simply a sequence of sound waves and vibrations. But the emotional impact of the music, the way it stirs memories or brings a sense of peace, belongs to the inner reality. This subjective experience is personal, shaped by our unique beliefs, memories, and states of mind. Here, in the inner world, life's most intangible qualities are felt and understood, adding layers of depth to our perception of the outer world.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Experiencing Energy as a Part of Inner Reality</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Energy exists in both outer and inner realities. In the outer world, energy manifests as heat, light, movement, and other measurable forms. In the inner world, energy is experienced as feelings, sensations, or even intuition. We might “sense” the energy of a room or feel someone's emotional state without needing words to explain it. This inner experience of energy transcends pure measurement, offering insights that enrich our understanding of the world around us.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Through practices like mindfulness, intentional breathing, or self-reflection, we can tune into this inner energy, becoming more aware of the dynamic flow between our inner and outer realities. Recognizing and working with our inner energy helps us see how feelings and perception interact with external events, showing us why balancing both dimensions is essential for a fulfilling life.
                </p>
                
                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Why Recognizing Both Realities Matters</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Acknowledging both inner and outer realities allows us to engage with life in a more balanced, meaningful way. Outer reality provides the structure and framework—the forms and facts that shape our shared understanding of the world. Inner reality, meanwhile, brings depth, personal resonance, and meaning. Without our inner reality, life would be reduced to a series of external events, stripped of subjective significance. Conversely, focusing only on the inner world can lead to a lack of groundedness, disconnecting us from the shared experiences that anchor us in the physical world.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Understanding that both dimensions exist and interact opens the door to a richer perspective. It allows us to appreciate the beauty of both worlds—the tangible and the intangible, the measurable and the experiential. By exploring the nature of inner and outer realities, we prepare ourselves for a deeper understanding of duality and the harmony that comes from honoring both.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: Honoring the Fullness of Reality</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Inner and outer realities together create a complete view of existence. Outer reality gives us the form and structure, while inner reality brings meaning, connection, and depth. By honoring both, we embrace the full spectrum of human experience, acknowledging that reality is not simply what we observe in the world around us but also what we live and feel within.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                As you move forward in exploring these concepts, remember that true balance arises when we honor both dimensions of reality. This understanding sets the stage for exploring deeper principles of duality, where opposites like inner and outer, self and world, mind and body, harmonize to create a unified, meaningful existence.
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

            <DoorCard
                title="Inner Work"
                description="Learning how to see, understand, and actively work with our inner life."
                icon={Eye}
                href="/practice/inner-work"
                doorType="observer"
              />

            {/* Explore Articles */}
            <ExploreArticles 
              articles={[
                {
                  title: "The Subject and the Object",
                  href: "/articles/scientific/subject-and-object"
                },
                {
                  title: "Qualities and the Observer",
                  href: "/articles/scientific/qualities-and-observer"
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