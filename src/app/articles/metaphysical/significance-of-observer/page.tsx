// src/app/articles/metaphysical/significance-of-observer/page.tsx

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
      title: "The Significance of the Observer",
      subtitle: "Why Consciousness Completes the Picture of Reality",
      description: "Explores the fundamental role of the observer and consciousness in shaping and experiencing reality, bridging measurable phenomena and subjective experience.",
      publishDate: "2024-11-11",
      readTime: "5 min",
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
                In today's scientific world, we've developed remarkable tools to measure and understand the mechanics of the universe. From the vast galaxies to the smallest particles, we've mapped and quantified the structure of reality with incredible precision. Yet, for all this progress, there's a profound aspect of reality that science alone cannot fully explain: the role of the observer—the subject—in shaping and experiencing this reality.
                </p>
                <p className="text-xl text-gray-700 mb-8">
                The observer, or subject, sits alongside the object in our understanding of the world, bringing depth, color, and meaning to what would otherwise be a mechanical existence. This subject-object relationship is as fundamental to reality as any measurable phenomenon, yet it remains elusive to strictly empirical methods. Here, we'll explore why the observer's role is essential and how consciousness, perception, and experience bring the universe to life in a way that pure mechanics cannot.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Observer and the Observed: A Fundamental Relationship</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                In our daily lives, we navigate the world by interacting with objects around us—objects we can touch, measure, and quantify. But each interaction also involves a subject—the self, the conscious observer—whose perceptions shape the experience. This relationship between the observer and the observed is not just a philosophical abstraction; it's the very foundation of experience.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Without the observer, phenomena like color, sound, and sensation would remain mere waves and particles, devoid of meaning. Light, for instance, can be measured as electromagnetic radiation traveling through space, but the quality of “color” emerges only when light is observed by a conscious mind. Red, blue, and green are not properties of light itself but of our experience of it. In this sense, consciousness is not just an added feature of reality; it is integral to how reality is perceived and interpreted.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Quantity vs. Quality: The Limits of Measurement</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Science excels at measuring quantities—size, speed, mass, and frequency. These measurable aspects give us a framework to understand the physical world. But certain aspects of reality—qualities like beauty, warmth, and color—do not lend themselves to measurement. They exist as experiences, inseparable from the observer who perceives them.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                For instance, light as a physical phenomenon can be quantified by its wavelength and intensity, but the sensation of “warm sunlight” or “golden hour” cannot be reduced to numbers alone. These qualities arise from the interaction between external phenomena and the observer's perception. They bring an inner dimension to reality that can't be captured by metrics alone, revealing the observer's unique role in creating meaning.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Memory and the Continuity of Experience</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The observer's role goes beyond perception; it includes memory, the ability to integrate past experiences into the present. Memory weaves individual moments into a continuous experience of self and reality. Without memory, each moment would be isolated, devoid of connection or growth. Through memory, the observer builds a coherent narrative, a subjective continuity that gives depth to the objective world.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Consider a sunset viewed on a particular day. The colors, the warmth, and the stillness may echo memories of other sunsets, creating a layered experience that transcends a single moment. The observer, through memory, brings a qualitative richness to the experience, one that is uniquely personal yet universally recognizable. In this way, memory allows the observer to shape reality not only in the present but also across time.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Consciousness as the Bridge Between Inner and Outer Worlds</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                One of the most profound roles of the observer is to bridge the inner and outer worlds. While the outer world provides structure and measurable phenomena, the inner world—the realm of consciousness—brings interpretation, significance, and awareness. Through consciousness, we experience not just the “what” of reality but the “why,” imbuing life with purpose and meaning.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This dual aspect of reality suggests that consciousness is not merely a byproduct of physical processes. It's an active participant that transforms outer events into inner experiences, giving reality a subjective depth that extends beyond objective facts. By acknowledging the observer's role, we move from a purely mechanical understanding of the universe to one that honors the dynamic interplay between consciousness and the material world.
                </p>
                
                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Observer's Door: Engaging with Reality from the Inside Out</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Understanding the observer's role in reality invites us to approach life with greater awareness. Rather than viewing reality as an external mechanism, we begin to see it as a co-created experience, one where consciousness and matter are intertwined. This shift is not just intellectual; it's experiential, inviting us to engage with reality from the inside out.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                When we embrace the observer's role, we take an active stance in shaping our experience. By cultivating self-awareness, examining our beliefs, and honoring the inner dimensions of life, we align with the deeper nature of reality. This alignment empowers us to experience life not just as a series of events, but as a meaningful journey shaped by both our perceptions and our presence.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: Completing the Picture of Reality</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                In the search for understanding, it's easy to focus solely on the mechanics of the universe. But without the observer, the picture remains incomplete. Consciousness adds the missing dimension, transforming quantitative data into qualitative experience, structure into meaning, and matter into life.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Through the Observer's Door, we find a pathway to explore the subjective side of reality—one that honors both the observable world and the conscious experience that brings it to life. This journey invites us to see reality not only as it appears “out there” but as it resonates “in here,” where meaning and existence come together as one.
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
                  isLastInSequence={!navigation.next}  // Add this line
                  doorHref="/#doorways" // Add this line - adjust the path as needed
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
              door={articleInfo.door} //Just added
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