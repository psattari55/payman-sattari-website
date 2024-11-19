// src/app/articles/development/importance-of-integration/page.tsx
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
      title: "The Importance of Integration",
      subtitle: "Turning Insight into Transformation",
      description: "Learn how to transform moments of insight into lasting change through the practice of integration.",
      publishDate: "2024-11-11",
      readTime: "8 min",
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
                In moments of stillness or inspiration, we sometimes experience a breakthrough—a sense of clarity about who we are, what matters, and how we want to live. These epiphanies might come during a retreat, a yoga class, a quiet walk, or a deep conversation. In these moments, life feels simple and full of possibility, as if we've unlocked something important about ourselves. But too often, as we return to our everyday routines, that insight slips away, becoming a distant memory rather than a lasting change. Why?
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Missing Piece: Integration</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Integration is the bridge between insight and transformation. It's the process of taking those moments of clarity and making them part of who we are. While an insight is the initial spark, integration is the work of tending to it, allowing it to take root in the soil of our lives. Without integration, even the most profound realization can fade. With integration, it becomes a living, breathing part of our daily experience, guiding our choices and shaping our perspective.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Why Insights Alone Are Not Enough</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Insights can be powerful, but they're only the beginning. In the moment, an epiphany can feel life-changing, but lasting change requires continuous action. The nature of insight is that it opens a door, but integration is what allows us to step through it and live differently. Real transformation comes when we make these insights part of our everyday reality.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Without integration, we risk collecting insights like decorations—wonderful to look at, but not functional in our lives. We might go to seminars, read books, and attend workshops that inspire us, but without daily practice, the impact remains temporary. Integration ensures that our insights move beyond inspiration, becoming the foundation for real change.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Moving from Epiphany to Practice</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                So how do we take an insight and bring it into our daily life? Integration involves shifting from “knowing” to “living.” To help bridge this gap, try these steps:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Identify One Key Takeaway: </strong>After a powerful experience or realization, ask yourself, “What's the most essential lesson here for me?” This focus allows you to move beyond the overwhelming feeling of needing to change everything at once. For example, if you realized the importance of self-compassion, your takeaway might be, “I will speak to myself kindly.”
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Turn Insight into Action: </strong>Ask, “What one small step can I take each day to live this insight?” If your takeaway was self-compassion, a daily action could be pausing each morning to set a compassionate intention or journaling about moments of self-kindness in the evening. Choose actions that are small but consistent.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Reinforce the Insight Daily: </strong>Integration is a gradual process, so make space each day to reconnect with your insight. This could mean reading a note or reminder of your intention, visualizing the change you're working toward, or practicing a short meditation on your insight. Small, daily reinforcements help the insight become part of your inner dialogue.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Navigating Resistance and Old Patterns</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                As you work to integrate a new insight, you'll likely encounter resistance. Our brains are wired to follow familiar patterns, and change can feel uncomfortable. It's easy to slip back into old habits or thought patterns, especially when faced with stress or uncertainty.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                To navigate this resistance, remember that integration is not about immediate, perfect results. It's about steady, patient progress. When resistance arises, try to observe it without judgment. Remind yourself that discomfort is a natural part of growth and that persistence, not perfection, will lead to lasting change. View resistance as a reminder of the strength required to change, rather than a sign of failure.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Building an Integration Practice</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                For integration to succeed, it helps to have a simple, consistent practice. Here are a few techniques that can support your journey:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Daily Reflection: </strong>Set aside five minutes each evening to reflect on your day. Ask, “How did I live my insight today? Where did I fall short? How can I practice again tomorrow?” This reflection not only keeps your insight fresh but also builds a sense of accountability and self-awareness.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Environment Reminders: </strong>Surround yourself with reminders of your insight. You could place a quote, a symbol, or an object related to your insight where you'll see it each day. These visual cues serve as gentle reminders to stay connected to your goal.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Mindfulness in Action: </strong>Throughout the day, practice mindfulness by observing your behavior and emotions without judgment. If you notice yourself slipping back into old patterns, simply acknowledge it and realign with your intention. This gentle approach reduces the inner tension between your old habits and new intentions, making integration a natural, flexible process.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Reward of Integration: A Life Aligned with Inner Truth</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The ultimate purpose of integration is to create a life that reflects our inner truth. As we integrate, our insights become more than passing thoughts; they become the framework through which we engage with life. Integration offers the gift of authenticity, allowing us to live in harmony with our values rather than simply being shaped by external pressures or fleeting moments of inspiration.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                When we commit to integration, we build resilience, self-trust, and a sense of alignment. Challenges and setbacks become part of our growth, guiding us to refine our practice rather than abandon it. In this way, integration transforms fleeting moments of insight into a lasting, stable foundation that continues to shape us over time.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: Embrace the Journey</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Integration is not a one-time task; it's a journey. It requires patience, persistence, and a willingness to be gentle with ourselves. Each day, we have an opportunity to reconnect with our insights and deepen their impact, bringing more clarity and purpose into our lives.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Rather than seeking constant new epiphanies, let's focus on nurturing the ones we already have. With each small act of integration, we build a life that's authentic, aligned, and genuinely transformed. Remember, the true power of an insight lies not in its intensity, but in our willingness to live it, every day.
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