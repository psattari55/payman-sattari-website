// src/app/articles/scientific/senses-and-intellect/page.tsx
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
      title: "The Senses and the Intellect",
      subtitle: "Bridging Experience and Understanding in Our Quest for Reality",
      description: "Exploring the complementary roles of sensory experience and intellectual reasoning in forming a holistic understanding of reality.",
      publishDate: "2024-11-11",
      readTime: "7 min",
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
                Human beings navigate reality through two essential faculties: the senses and the intellect. While our senses connect us to the world directly, bringing color, texture, and sound into our lives, the intellect enables us to process, analyze, and draw broader conclusions from these experiences. These two faculties—experiential and conceptual—represent distinct yet complementary ways of knowing.
                </p>
                <p className="text-xl text-gray-700 mb-8">
                This article explores the vital balance between sensory experience and intellectual understanding, and how a harmonious relationship between the two can deepen our grasp of reality. We'll examine why both sensory input and conceptual reasoning are crucial and why neglecting one in favor of the other can create a limited or distorted view of the world.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Direct Reality of the Senses</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Our senses are our first and most immediate means of contact with the world. Sensory data—such as sights, sounds, tastes, and textures—arrives unfiltered and forms the basis of our experiential reality. This kind of knowledge is personal and direct; it is how we encounter the “raw data” of life. Touching a soft fabric, hearing the rush of wind, or tasting a ripe fruit are experiences that provide information beyond words, numbers, or abstract concepts.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                In scientific inquiry, sensory perception is foundational to empiricism, the principle that only things we can directly observe and measure can be verified as real. Sensory experiences serve as the starting point for many scientific investigations, providing the observable evidence that can then be analyzed. However, sensory input alone does not form a complete understanding; it is through the intellect that we interpret, categorize, and systematize this data. 
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Intellectualizing Process: From Raw Data to Conceptual Knowledge</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                While the senses give us direct knowledge of the world, the intellect allows us to structure and make sense of it. Through intellectual processes, such as deduction, categorization, and theory-building, we transform raw data into organized knowledge. The intellect creates frameworks and models, offering us tools to understand complex systems, predict outcomes, and make decisions based on patterns and regularities.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This process is essential to scientific progress, as it moves us from isolated observations to broader insights. For example, a scientist may observe a series of individual events through experimentation (sensory data), but it is through intellectual analysis that they derive general principles or theories from these observations. However, intellectual knowledge is inherently removed from the personal and direct qualities of sensory experience. Concepts such as “force,” “atom,” or “quantum” are abstract constructs that exist in the mind, distinct from our actual lived experiences.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Challenge of Balancing Concept and Experience</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                In science and philosophy alike, there is often a tendency to prioritize intellectual knowledge over sensory experience. This preference can lead to a disconnection from the real, tangible qualities of life. The more we immerse ourselves in conceptual frameworks, the easier it becomes to forget that these are maps of reality—not reality itself. For instance, while we can use intellectual theories to predict how light waves behave, the experience of seeing a color, like red, involves a subjective quality that cannot be fully explained by data alone.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This disconnect becomes problematic when intellectual frameworks are treated as replacements for experience. Concepts are inherently general and detached; they allow us to think objectively but can also distance us from the particular, nuanced qualities that define actual experience. Relying too heavily on the intellect can create a form of abstraction that may feel safe but ultimately leaves us out of touch with the full richness of reality.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Integrating Senses and Intellect: Toward a Holistic Approach to Knowledge</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                A balanced approach to understanding reality requires that we honor both sensory and intellectual forms of knowledge. Sensory experience connects us with the world's qualitative aspects—its sights, sounds, tastes, and textures—while the intellect enables us to make sense of this data, finding patterns and drawing insights that would be difficult to discern through experience alone.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                In the scientific method, this balance is achieved through both empiricism (sensory observation) and rationality (intellectual reasoning). Together, these methods allow us to approach truth from multiple angles. However, as science has evolved, it has increasingly relied on quantitative, measurable aspects of reality, sometimes at the expense of subjective or qualitative experience. This focus on what can be counted or quantified, while incredibly useful, risks overshadowing aspects of experience that are equally real but not as easily measured, such as emotions, intuitions, and other forms of inner awareness.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Experience as the Basis of Reality</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                In the final analysis, experience is the primary means through which we know reality. Concepts, while powerful, are ultimately tools that help us interpret our experiences. Without direct sensory contact, concepts remain abstractions. Thus, an accurate understanding of reality must ground itself in experience, using intellectual knowledge to support and clarify rather than to replace it.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                The truth involves both concept and experience, as each complements the other. Concepts allow us to generalize and analyze, while experience grounds us in the present, subjective reality. Together, they form a comprehensive model of knowing that respects both the objective and subjective facets of existence. By integrating these two ways of knowing, we build a holistic understanding that honors both the measurable and the immeasurable aspects of the world.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: Embracing Both Modes of Knowing</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The senses and the intellect are not competing faculties but complementary ones. While the intellect provides structure and clarity, the senses keep us anchored to the real, tangible world. Recognizing the strengths and limitations of each mode of knowing allows us to engage with reality in a fuller, more balanced way.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                In our pursuit of truth, we would do well to remember that intellectual frameworks are maps, not the territory itself. Concepts should serve as guides to understanding the richness of experience rather than as replacements for it. By embracing both the immediacy of the senses and the depth of the intellect, we gain a more integrated and meaningful perspective on the nature of reality itself.
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