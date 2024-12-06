// src/app/articles/scientific/qualities-and-observer/page.tsx
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
      title: "Qualities and the Observer",
      subtitle: "Rethinking the Nature of Experience",
      description: "Exploring the role of the observer in experiencing qualities like color and sound, and its implications for a more complete view of reality in scientific inquiry.",
      publishDate: "2024-08-29",
      readTime: "5 min",
      category: "Scientific Insights",
      door: "Scholar's Door"
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
                In scientific research, we're trained to focus on measurable quantities—things we can observe, calculate, and reproduce. Quantities such as distance, mass, and frequency are central to empirical science precisely because they're objective and quantifiable. But there is another, often overlooked aspect of reality that is essential to our empirical experience of it, and that is <em>qualities</em>.
                </p>
                <p className="text-xl text-gray-700 mb-8">
                Forming a sort of ontological opposite to quantities, qualities are distinct in several fundamental ways. Color, sound, taste, and texture, for example, are all qualitative experiences. They're familiar to us from within the context of our own internal experience, and in many ways shape how we perceive the world. Unlike quantities which can be measured and understood in an objective way independent of an observer, this is not true for qualities. Qualities always imply an observer. The redness of an apple, the tone of a violin, or the bitterness of coffee are not phenomena that exist independently in the object itself, but are qualitative experiences that exist within the frame of reference of the one who perceives them—the observer.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Connection Between Quality and the Observer</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Take color as an example. In physical terms, color corresponds to specific wavelengths of light. These wavelengths exist as quantifiable properties and can be measured objectively with scientific instruments. But “redness” for example, is a quality, not a quantity. It does not exist objectively in the wavelength or in the apple as a pure property irrespective of the one who perceives it. It arises within the internal experience of the observer only when light from the apple reaches them and ultimately interacts with their sensory system. Without the observer, there is no <em>quality</em> of red—only light waves of a certain frequency. Qualities must be <em>sensed</em> to be known. “Senses” do not exist “out there” in the cosmos as objective entities. They belong to the observer.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This observation raises a compelling question: If qualities like color, sound, and taste only arise when there is an observer to interpret them, what does that mean for our understanding of reality? Qualities appear to be relational—they exist not solely in the object but in the interaction between object and observer. The take away is this: qualities depend upon the presence of an observer, while quantities do not. This is an important distinction as it sheds light on the nature of the relationship between the two.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Why This Matters in Scientific Inquiry</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Science traditionally favors quantities because they remain true independently of who observes. This has led to incredible advances in fields like physics and engineering, but it may also have led to a blind spot resulting in an incomplete view of reality and nature. If qualities are inherently tied to the observer, they introduce a dimension of empirical data we receive about nature that falls outside of quantitative measurement, while still remaining a fundamental part of what we can observe about reality.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This insight has practical implications. In neuroscience, for example, there is increasing interest in understanding consciousness and perception, but the challenge remains: qualities like color or pain cannot be fully described or quantified by physical measurements alone. They are experiential and, by nature, subjective. A complete picture of reality might therefore require us to consider both quantities and qualities that emerge through observation to arrive at a comprehensive understanding of natural phenomena.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Opening the Door to a Broader View</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                By recognizing that qualities require an observer, we're not discarding the objectivity of science. Instead, we're expanding our understanding of our observable environment to include aspects of reality that science has historically set aside. This approach does not mean to threaten the quantitative rigor that has driven so much of our scientific progress. Instead, it invites us to consider a more integrative framework—one that respects both the measurable and the experiential, the objective and the subject-centered.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Qualities such as color, sound, and texture do not exist as independent properties of objects; they are inherently relational, arising only when an observer interacts with the object. This interdependence between quality and observer suggests a layer of reality that is not captured by quantitative measurement alone, challenging us to broaden our understanding of the nature of reality.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                As we continue to explore the frontiers of science, considering the broad spectrum of phenomena we can acquire empirically requires us to open up to the role of qualities alongside quantities in the cosmos, potentially offering insights into the very nature of observation, consciousness, and the empirical world. In doing so, we expand our purview to a wider and richer understanding of reality—one that acknowledges the full range of the observable cosmos and the depth of human experience.
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