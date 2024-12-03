// src/app/articles/development/emotional-resilience/page.tsx
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
      title: "Building Emotional Resilience",
      subtitle: "Navigating Life's Ups and Downs with Grace",
      description: "Learn how to build emotional resilience through self-compassion, presence with emotions, and finding meaning in challenges.",
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
                Life rarely unfolds in the ways we expect. Even with careful planning, we all encounter challenges, losses, and moments that test us deeply. During these times, some people seem to bend without breaking, to find a way through the storm while remaining grounded. For others, the weight of life's hardships feels heavier, bringing a sense of exhaustion, discouragement, or even defeat. What creates this difference? How can some of us weather life's inevitable storms with an inner steadiness, while others feel worn down and shaken?
                </p>
                <p className="text-xl text-gray-700 mb-8">
                The answer often lies not in the hardships themselves but in how we approach them. In the same way a tree grows deeper roots to withstand harsh weather, each of us has the potential to cultivate qualities that allow us to stand steady and recover, even in the face of life's inevitable challenges. This isn't about avoiding hardship or numbing ourselves to pain—it's about learning to face it, to move through it with self-compassion, and to come out the other side a little stronger, a little wiser. Here are three practices to help build this steadying presence within, so that you can approach life's ups and downs with a quiet strength.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Practicing Self-Compassion: Softening the Inner Critic</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                When life throws us off course, our first reaction is often self-criticism. We think, <em>I should have handled that better</em>, or <em>I should be stronger</em>. We might judge ourselves for struggling, feeling as though we're somehow “failing” at life. But what if we were to approach ourselves with the same compassion we would offer to someone we love? What if we could soften the inner critic and instead offer ourselves kindness in these difficult moments?
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Self-compassion is about allowing ourselves to be human, to feel the pain without layering on judgment. It's about recognizing that life is hard sometimes and that struggling doesn't mean we're failing—it means we're alive. When we practice self-compassion, we give ourselves the grace to move through difficulty without adding to our suffering.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Practice:</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The next time you're in a moment of struggle, try placing a hand over your heart, taking a deep breath, and saying to yourself:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <em className="text-gray-900">“It's okay to feel this way.”</em>
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <em className="text-gray-900">“I will be kind to myself in this moment.”</em>
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <em className="text-gray-900">“I am allowed to experience this pain.”</em>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-800">
                Allow these words to settle in, noticing how it feels to replace self-criticism with kindness. Just as you would comfort a friend, try offering yourself that same compassion. Over time, this practice helps to ground us in kindness, allowing us to approach life's challenges with a steady and gentle presence.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Sitting with Emotions: Learning to Stay Present</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Difficult emotions—sadness, anger, fear—are often our body's way of telling us something important. Yet, our instinct is to push these emotions away, to distract ourselves, or to pretend they're not there. But just like waves, emotions have a natural rhythm; they rise, peak, and eventually recede. When we allow ourselves to sit with our emotions rather than resist them, we create space for them to move through us, leaving us clearer and more grounded.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Learning to stay present with our emotions teaches us that they aren't as overwhelming as we might imagine. Instead of bottling them up (one extreme) or letting them control us (the other extreme), we can approach them with curiosity, noticing them without getting swept away. This middle ground is the key. This practice of this warm, stable presence facilities the release of the emotion, giving us the courage to face whatever we're feeling with capacity and allowing emotions to flow and resolve rather than linger and stagnate.
                </p>
                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Practice:</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Think back to a past experience that felt challenging. Take a few moments to reflect on how that experience may have shaped you. Consider these questions:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <em className="text-gray-900">What did this experience teach me about myself?</em>
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <em className="text-gray-900">How did I grow as a result of this challenge?</em>
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <em className="text-gray-900">What qualities did I discover within myself during that time?</em>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-800">
                If it feels helpful, write down your reflections, noting any insights or realizations. This practice helps us see that struggles, while painful, can also bring us closer to ourselves and reveal aspects of who we are that we may not have known were there. Over time, finding meaning in hardship strengthens our ability to approach future challenges with a focused sense of purpose and resilience.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Embracing Resilience as a Lifelong Journey</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Resilience isn't a quality to be developed overnight. It's a continuous journey of redefining our relationship with difficulty and deepening our relationship with ourselves. One that grows with each experience and every act of self-compassion. As we learn to meet life's challenges with a steady heart, we build the inner strength we need to face whatever comes our way without losing our sense of self.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                In the end, resilience is about trusting that, no matter what life brings, we have within us the capacity to navigate it and discover the kernel of meaning within it. It's about embracing both the light and the dark, knowing that each experience of struggle is an opportunity to deepen our self-relationship and become a more compassionate and grounded version of who we are.
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