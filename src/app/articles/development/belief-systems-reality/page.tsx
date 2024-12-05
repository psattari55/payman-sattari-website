// src/app/articles/development/belief-systems-reality/page.tsx
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
      title: "The Power of Belief Systems in Shaping Reality",
      subtitle: "",
      description: "Exploring the nature of belief and its effect on our experience of reality.",
      publishDate: "2024-11-11",
      readTime: "6 min",
      category: "Personal Development",
      door: "Practitioner's Door"
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
                Our beliefs are like invisible filters that color how we see and experience the world. They shape our perceptions, influence our choices, and, ultimately, create our personal reality. While many of our beliefs work quietly in the background, helping us navigate life, others can limit us, keeping us from realizing our potential. In <em>The Science of Energy</em>, belief systems are recognized as powerful forces that influence both our inner and outer experiences.
                </p>
                <p className="text-xl text-gray-700 mb-8">
                Understanding how beliefs shape reality empowers us to make conscious changes, breaking free from limiting patterns and creating a life that aligns with our true desires.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">What Are Belief Systems?</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                A belief system is a network of beliefs—assumptions, ideas, and attitudes—that we hold, often unconsciously, about ourselves, others, and the world around us. These beliefs can be personal, stemming from our experiences, or cultural, passed down through family, society, or religion.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                For example, a personal belief might be “I'm not good at public speaking,” while a cultural belief could be “Success means having a high-paying job.” Whether personal or cultural, our beliefs shape the way we interpret events and influence our responses. Over time, they become self-fulfilling, creating patterns that reinforce our worldview.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">How Belief Systems Shape Reality</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Our beliefs act like lenses, filtering the world around us. They shape not only how we interpret events but also how we interact with others and make decisions. Here's how belief systems can shape reality:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Influencing Perception: </strong>If you believe that people are generally untrustworthy, you might interpret a stranger's friendliness as suspicious rather than genuine. This perception can influence how you interact with others, creating a reality where trust is hard to come by.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Guiding Choices: </strong>A belief like “I'm not creative” can lead to avoiding creative pursuits, reinforcing the belief over time. Conversely, a belief in one's resilience can lead to overcoming challenges with persistence, creating a reality where personal strength is a recurring theme.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Creating Self-Fulfilling Patterns: </strong>When we act based on our beliefs, we reinforce them, making it more likely that they'll continue shaping our experiences. For example, if you believe “I always struggle with relationships,” you might unknowingly behave in ways that create tension, reinforcing the belief.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Recognizing Limiting Beliefs</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                One of the first steps to reshaping your reality is recognizing the beliefs that may be limiting you. Here are some ways to identify limiting beliefs:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Notice Your Inner Dialogue: </strong>Pay attention to the thoughts that arise in response to challenges. Phrases like “I can't,” “I'm not,” or “I always” can signal limiting beliefs.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Reflect on Recurring Patterns: </strong>Consider areas of life where you feel “stuck” or where similar challenges keep arising. Are there any beliefs that could be reinforcing these patterns?
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Ask Yourself “Is This Absolutely True?”: </strong>When a belief arises, question its validity. Often, we'll find that our beliefs are based on assumptions or past experiences, not absolute truths.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Practical Steps to Reshape Beliefs</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Once you identify limiting beliefs, you can start the process of reshaping them. Here are some practical steps:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Reframe the Belief: </strong>Shift your belief into a more empowering perspective. For example, if your belief is “I'm not good at handling stress,” reframe it to “I'm learning to manage stress effectively.” This reframe opens the door to growth and possibility.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Gather New Evidence: </strong>Look for examples that challenge your old belief. If you believe “I'm not creative,” actively seek out moments when you solved a problem creatively or tried something new. By gathering evidence against the limiting belief, you weaken its hold.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Visualize the New Belief: </strong>Imagine yourself living as though the new belief is true. How would you behave if you believed “I'm resilient” instead of “I'm not good with challenges”? Visualizing this new reality helps integrate the belief on a deeper level.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Embracing Flexibility in Beliefs</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Beliefs are not static; they can evolve as we grow. Embracing flexibility allows us to update our beliefs in alignment with who we are becoming. When we realize that beliefs are not absolute truths but perspectives, we open up the possibility of change. This shift in perspective can be empowering, helping us take control of the beliefs we choose to nurture.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: Creating a Reality Aligned with Your True Self</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                By consciously choosing beliefs that empower and uplift us, we create a reality that reflects our true potential. Rather than being confined by old patterns, we become active creators of our experience, shaping a world that aligns with our values, strengths, and desires.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                As you begin to explore your beliefs, remember that change is a gradual process. Small shifts in perception, practiced consistently, can lead to profound changes over time. Embrace the journey of self-discovery, and let your beliefs guide you toward a reality that feels deeply aligned with who you are.
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