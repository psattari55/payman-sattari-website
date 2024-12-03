// src/app/articles/metaphysical/art-of-balance/page.tsx

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
      title: "The Art of Balance",
      subtitle: "Working with Energy Dynamics for Inner Harmony",
      description: "An exploration of energy dynamics as the interplay between opposites creating a pathway toward inward harmony.",
      publishDate: "2024-11-11",
      readTime: "8 min",
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

              <article className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-8">
                In our journey to understand reality, we encounter two essential forces: the inward pull and the outward push, the continuous flow and the discrete moment, the receptive and the active. Together, these polarities create a dynamic that powers every aspect of life. The interplay of these opposing yet complementary energies is not just a cosmic principle—it's a force that shapes our personal experiences and the balance we feel within.
                </p>
                <p className="text-xl text-gray-700 mb-8">
                This natural flow between opposites is often described as <strong>energy dynamics</strong>—the movement and balance of energy between complementary poles. By understanding and working with these dynamics, we can cultivate a deep inner harmony, aligning our personal energy with the universal flow and experiencing life in a way that feels grounded, vibrant, and whole.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Dynamics of Duality: A Dance of Opposites</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                At its heart, energy dynamics emerge from the balance between yin and yang, the inward and outward forces that make up the fabric of existence. In this dance of opposites, energy is never static; it flows, shifts, and transforms, moving us through cycles of growth, rest, action, and reflection. When we embrace this dynamic, we recognize that life is not about holding a fixed state but about moving in harmony with these shifting energies.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Imagine a river flowing over rocks, creating eddies and currents. The water represents a continuous flow (yin), while the rocks provide discrete moments of redirection (yang). Just as the river moves in response to both flow and form, our lives unfold through a balance of softness and strength, rest and action, intuition and reason. These energies are not only forces within the cosmos but also within us, shaping how we perceive, act, and feel.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Observing Your Inner Energy Patterns</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The first step in working with energy dynamics is awareness. By observing our own patterns, we can begin to see where we may lean too heavily toward one polarity or resist another. For example:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">When Yin is Dominant: </strong>If we spend too much time in the inward, receptive energy of yin, we may feel introspective and reflective but lack the motivation for outward action. This can manifest as stagnation or withdrawal, where we hesitate to bring our ideas into the world.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">When Yang is Dominant: </strong>Conversely, if we're constantly in the active, outward energy of yang, we may feel productive and goal-oriented but eventually become depleted or burned out. This imbalance can manifest as restlessness, impatience, or a feeling of disconnection from our inner self.
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-800">
                  Observing these patterns is like tuning into an inner rhythm, allowing us to recognize when we're out of sync with the natural flow of energy. Through awareness, we can begin to harmonize our inner dynamics, learning to shift between these polarities as needed.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Cultivating Balance Through Conscious Engagement</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Once we're aware of our inner energy dynamics, we can begin to consciously engage with them, using specific practices to cultivate balance. Here are a few approaches to help you work with these energies:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Intentional Shifts: </strong>Practice shifting your focus to balance the energies. If you notice an excess of yang energy (overactivity, stress, or tension), engage in yin practices such as meditation, breathing exercises, or quiet reflection. If you're feeling overly yin (withdrawn, hesitant, or lethargic), try yang-oriented activities like physical exercise, creative expression, or structured goal-setting.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Creating Space for Both: </strong>Allow time in your day for both yin and yang activities. For example, start your day with a few moments of quiet reflection (yin), then move into focused tasks or physical activity (yang). By creating intentional spaces for both, you allow each energy to support and balance the other.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Mindfulness in Action and Rest: </strong>Practice mindfulness not only when you're reflecting inward but also when you're engaging outwardly. When we're mindful of both active and receptive states, we can shift more fluidly between them, enhancing our ability to stay balanced, responsive, and resilient in changing circumstances.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Inner Harmony as a Reflection of Universal Balance</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                As we work with our inner energy dynamics, we come to understand that balance isn't a fixed state; it's a fluid, ever-changing dance that reflects the natural rhythm of the universe. This dynamic flow exists in the cycles of nature, from the changing seasons to the phases of the moon, and it also exists within us. By aligning ourselves with this rhythm, we experience a sense of harmony that transcends individual moments and connects us with the larger movement of life.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Inner harmony is more than just feeling “balanced” in the usual sense; it's a state of resonance, where our personal energy aligns with the energies around us. This harmony brings a profound sense of peace and joy, allowing us to experience life as a unified whole, rather than as separate, competing parts. Through this alignment, we discover a wellspring of energy and clarity that arises naturally when we flow with life rather than resist it.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Experience of Balance: Inner Peace, Vitality, and Joy</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                When we embrace energy dynamics as a practice, we cultivate a unique sense of well-being. This inner balance doesn't mean an absence of challenges or difficulties; rather, it provides the resilience and flexibility to meet life with grace. We learn to let go of rigid expectations, trusting in the natural ebb and flow of our own energy.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This experience of balance can bring:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Inner Peace: </strong>A sense of calm that comes from being in sync with ourselves and the world around us.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Vitality: </strong>Renewed energy, as we move between activity and rest, action and reflection, allowing each to rejuvenate the other.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Joy: </strong>An authentic joy that arises when we feel whole, connected, and in harmony with life's natural rhythm.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: Embracing the Dynamic of Energy as a Path to Harmony</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The art of balance is a journey of awareness, acceptance, and alignment. By observing our inner energy dynamics and learning to harmonize them, we create a life that flows effortlessly between inner stillness and outer action. In this balanced state, we find a deep sense of fulfillment and joy that transcends the ups and downs of daily life, reminding us that true harmony is an experience that comes from within.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                As you continue to explore this within yourself, remember that balance is not something we achieve once and for all—it's a dynamic, living experience, a dance that invites us to engage with the world and ourselves in a way that feels whole, vibrant, and deeply connected. Embracing this flow not only enriches our personal experience but also opens the door to understanding consciousness as the creator of reality, moving us into a harmonious relationship with the world around us.
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