// src/app/articles/metaphysical/nature-of-self/page.tsx
'use client'

import React from 'react';
import Link from 'next/link'
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
      title: "The Nature of the Self",
      subtitle: "Beyond Thought and Identity",
      description: "Exploring the self beyond thoughts and roles, inviting readers to connect with the deeper awareness that transcends identity.",
      publishDate: "2024-11-11",
      readTime: "5 min read",
      category: "Metaphysical Concepts",
      door: "Observer's Door" 
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
              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-8">
                  Who are we beyond our thoughts, labels, and roles? This question may sound simple, but it touches on one of the most profound mysteries of human existence. In our everyday lives, we define ourselves by a complex web of beliefs, memories, and social roles—layers of identity that shape our sense of self. Yet, beyond these layers lies a deeper reality, an experience of self that goes beyond thoughts and identity. In this article, we explore what it means to move beyond labels and recognize the essence of self from a broader perspective.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Thought and Identity: The Surface Layers of Self</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  In our society, we often equate self-identity with thoughts, labels, and social roles. We might think, "I am a teacher," "I am a parent," or "I am someone who loves art." These are roles that give structure and meaning to our lives. And yet, they're just a part of our experience, like pieces of clothing we wear, changing depending on context or circumstance.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                  Beneath these roles are our thoughts and beliefs—ideas about who we are, what we're capable of, and how we relate to the world. Thoughts like "I am intelligent," "I am not good at socializing," or "I am sensitive" shape how we view ourselves. However, these too are not the core of the self; they are mental patterns that shift over time, revealing that even our most deeply held beliefs can change. If our thoughts and identities are temporary, then what remains constant?
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Observing the True Self</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  To explore the true nature of the self, we can begin by observing our thoughts, feelings, and identities from a place of quiet awareness. This simple act of observing is itself a step toward recognizing the self as more than a collection of thoughts and labels.
                </p>

                <p className="text-lg leading-relaxed text-gray-800">
                  Imagine a moment when you're watching your thoughts—perhaps in a moment of meditation or quiet reflection. Notice how thoughts come and go, like clouds passing across the sky. You might observe a thought like "I am nervous about tomorrow," followed by another like "I wish I were more confident." In this moment, you're not the thoughts themselves, but the awareness that notices them. This awareness is the essence of the self, the part of you that exists beyond temporary ideas and identities.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Practical Steps to Experience the Self Beyond Thought</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  Connecting with the true self doesn't require complex rituals or knowledge. In fact, it's often as simple as quieting the mind and observing without judgment. Here are a few practical steps to begin this exploration:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Sit in Quiet Reflection:</strong> Set aside a few minutes each day to sit in a quiet place, free from distractions. Close your eyes and simply observe the thoughts that arise. Instead of engaging with them, let each thought pass like a leaf floating down a stream. Over time, you'll notice a presence beneath the thoughts—a quiet awareness that feels both spacious and grounded.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Observe Your Emotional Reactions:</strong> During moments of strong emotion, try to observe the emotion as a separate experience rather than something that defines you. If you feel anger, for example, notice how the anger arises, peaks, and eventually subsides. By watching it unfold, you'll begin to sense a deeper awareness that remains unchanged by the shifting emotions.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Reflect on Who Observes:</strong> As you sit with your thoughts or emotions, ask yourself, "Who is observing?" This question can help guide you toward the essence of the self, that quiet center of awareness that exists independent of thoughts, beliefs, or roles.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Freedom of Experiencing the Self Beyond Labels</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  When we connect with this deeper self, we begin to experience a sense of freedom. Without the confines of identity and thought, we're free to experience life as it is, without the filters of judgment, expectation, or comparison. This is where inner peace resides—not in the constant refinement of identities, but in the recognition that we are, at our core, bigger than all of them.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                  Experiencing the self beyond thought is not about rejecting roles, identities, or emotions. Rather, it's about understanding that these are aspects of our experience, not the essence of who we are. This shift in perspective allows us to engage with life more fully and authentically, knowing that our true nature remains constant, like the vast sky behind passing clouds.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Cultivating Self-Awareness in Everyday Life</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  This recognition of the self as awareness can enrich every aspect of life. When we encounter challenges, we can remind ourselves that our true self isn't defined by external circumstances. In relationships, we can connect more deeply by seeing others as unique expressions of the same awareness. And in moments of solitude, we can find peace in simply being, knowing that our essence is unchanging and eternal.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                  The journey inward is both simple and profound. By observing our thoughts, recognizing our temporary identities, and embracing the deeper awareness within, we come closer to understanding the true nature of the self. This is the path to freedom, where we experience life not as a series of labels and roles, but as a continuous, present awareness that transcends time and identity.
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