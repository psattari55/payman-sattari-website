// src/app/articles/scientific/ideal-and-actual/page.tsx

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
      title: "The Ideal and the Actual",
      subtitle: "Understanding the Role of Abstraction in Science and Mathematics",
      description: "A reflection on the role of idealization in science and math, balancing theoretical clarity with real-world complexity.",
      publishDate: "2024-09-25",
      readTime: "6 min",
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
                In science and mathematics, idealizations are powerful tools. By abstracting complex realities into simplified models, we can make predictions, analyze structures, and even uncover the laws that govern the universe. Idealizations such as perfectly round circles, frictionless planes, and extensionless points enable us to create frameworks that capture essential truths. Yet, these abstractions do not always align with the tangible, often imperfect realities we observe in the world around us.
                </p>
                <p className="text-xl text-gray-700 mb-8">
                This article explores the role of idealization in scientific inquiry, examining how the contrast between ideal and actual concepts shapes our understanding of reality. In doing so, we can better appreciate the strengths—and limitations—of abstract models in both mathematics and the natural sciences.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Power of Idealization in Science and Mathematics</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The process of idealization involves stripping away complexities to reveal fundamental relationships. In physics, for instance, frictionless surfaces allow us to model motion without the interference of resistance, leading to equations that can be applied under a wide range of conditions. In mathematics, ideal points—points with no size or dimension—allow us to define lines, shapes, and spaces in a way that simplifies analysis.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                These abstractions are not meant to perfectly represent reality; rather, they are conceptual tools that allow us to explore principles and relationships. By removing variables that complicate measurement, idealizations allow us to see the “essence” of a phenomenon. For example, the concept of a zero-dimensional point is foundational to geometry, enabling us to create precise definitions of shapes and spaces.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Yet, while idealizations help isolate key features of a system, they often fail to capture the complexities of actual, observable reality. This gap between the ideal and the actual presents an opportunity to examine the strengths and limitations of our models.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Idealizations and the Divergence from Observable Reality</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                In the natural world, perfect circles, extensionless points, and frictionless planes do not exist. Every physical object has some degree of irregularity, and friction is a constant in real-world interactions. When we apply idealized concepts directly to physical phenomena, we may encounter discrepancies that reveal the limitations of our models.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Consider the example of a point in geometry. Defined as having no length, width, or depth, a zero-dimensional point is useful for establishing positions in space. However, this abstraction cannot be found in the physical world—no physical object is entirely without dimension. Similarly, concepts like infinite lines or perfectly flat planes exist in theory, but they are unattainable in physical reality.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                These idealizations, while essential for theoretical work, sometimes obscure the layered, dynamic qualities of the actual world. The challenge in scientific inquiry is to recognize when idealized concepts enhance our understanding and when they need to be adjusted to account for observable complexity.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Idealizations in Mathematics and Their Practical Implications</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                In mathematics, idealizations allow for elegant proofs and foundational concepts that enable entire fields of study. Calculus, for example, depends on the idea of infinitesimally small increments, while geometry relies on the notion of dimensionless points. These concepts enable us to work within a logically consistent framework that serves as the backbone of many scientific disciplines.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Yet, mathematical idealizations, while internally consistent, can sometimes lead to practical limitations. For instance, the concept of continuity in calculus assumes an infinite division of space, but in physics, our measurements are limited by factors like Planck length—a fundamental limit to the divisibility of space. In this sense, idealizations serve as approximations, effective within certain contexts but requiring reinterpretation in others.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Balance Between Abstraction and Reality
                </h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The ideal and the actual are not in opposition but are complementary tools for understanding. Idealizations provide clarity and simplicity, allowing us to define, measure, and predict with accuracy. However, actual observations remind us of the complexities that lie beyond abstraction, encouraging scientists and mathematicians to refine models that better reflect reality.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                In physics, for example, idealized models of atoms as discrete particles were later expanded with quantum mechanics to account for wave-particle duality. The idealization of a particle as a static point was thus reinterpreted within a probabilistic framework, bringing it closer to the observed behavior of atomic and subatomic entities. Similarly, frictionless models in classical mechanics, while useful, are adapted in engineering to incorporate resistance, providing a bridge between theoretical prediction and practical application.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Understanding the role of idealization allows us to approach scientific inquiry with both rigor and humility. By acknowledging the limitations of abstraction, we create space for models that incorporate complexity without abandoning clarity.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: Recognizing the Value and Limits of Idealization
                </h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Idealizations are indispensable to scientific and mathematical progress. They allow us to construct models that simplify, clarify, and reveal fundamental relationships. Yet, as we engage with these models, it is essential to remember the distinction between the ideal and the actual. Real-world phenomena are layered and complex, existing in ways that challenge simple abstractions.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                By balancing idealized concepts with observations of actual phenomena, we gain a more nuanced and accurate perspective that respects both the elegance of theoretical abstraction and the richness of empirical reality. This balanced approach provides a foundation for further exploration, reminding us that while ideals are useful generalizations, actuality possesses a degree of randomness and complexity that is not reflected in the perfect points and lines of mathematics.
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