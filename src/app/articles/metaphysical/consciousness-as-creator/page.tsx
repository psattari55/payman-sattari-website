// src/app/articles/metaphysical/consciousness-as-creator/page.tsx

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
      title: "Consciousness as the Creator",
      subtitle: "Shaping Reality from the Inside Out",
      description: "Explores the role of consciousness as creator to transform reality through focus, intention, and awareness.",
      publishDate: "2024-11-11",
      readTime: "7 min",
      category: "Metaphysical Concepts",
      door: "Observer's Door"
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
                In the world around us, we see a multitude of forces at work—gravity, light, sound, and countless other energies that shape the physical world. Yet, one of the most potent forces remains largely unseen: our own consciousness. Consciousness isn't simply a passive observer; it actively participates in shaping our reality. In this article, we'll explore how consciousness creates our experience from the inside out, offering insights into how we can engage with this process to live with greater clarity and intention.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Consciousness as the Creative Force</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Consciousness is the foundation of our perception, the “lens” through which we interpret and interact with the world. While we may think of reality as something “out there,” existing independently of us, the truth is more nuanced. Our consciousness doesn't just passively observe events; it actively shapes them. Through our focus, beliefs, and intentions, we participate in the creation of our reality.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Imagine you enter a social gathering with a belief that “people don't really listen to me.” This belief colors your interactions—perhaps you speak less or feel less confident, which in turn influences how others respond. Here, consciousness is creating reality from the inside out, shaping an experience based on an inner belief. When we become aware of this power, we realize that consciousness isn't just a passive spectator; it's the creator of our unique experience.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Role of Focus and Intention in Shaping Realitye</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                One of the most accessible ways consciousness shapes reality is through focus and intention. What we focus on grows, becoming more prominent in our awareness. When we set an intention, we direct our consciousness toward a desired outcome, subtly shaping our experiences around that focus. Consider how setting an intention for patience in a stressful situation can shift your perception, making it easier to stay calm and centered.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Focus acts like a magnifying glass, intensifying whatever we give attention to. If we focus on stress, we're likely to feel more of it. If we focus on gratitude, we notice more things to appreciate. Consciousness shapes reality by bringing certain aspects into sharper focus, inviting us to consider what we want to experience more of in our lives.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Practical Ways to Engage Conscious Creation</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Engaging with the creative power of consciousness doesn't require grand gestures or complex rituals; it's often as simple as choosing where to direct your attention. Here are a few ways to practice conscious creation in daily life:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Set Daily Intentions: </strong>Each morning, set an intention that resonates with how you want to experience the day. This could be something like “I choose to see opportunities,” “I embrace patience,” or “I focus on peace.” By anchoring yourself with an intention, you guide your consciousness in shaping experiences aligned with that focus.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Practice Mindful Focus: </strong>Throughout the day, bring awareness to what you're focusing on. If you catch yourself dwelling on worries or frustrations, gently shift your focus to something you're grateful for or something that brings joy. This simple shift can transform your experience, aligning it with a more positive state.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Visualize Desired Outcomes:  </strong>Visualization is a powerful tool in conscious creation. Take a few moments each day to imagine a desired outcome with clarity and emotion. By seeing and feeling the outcome as if it's already real, you align your consciousness with that reality, setting the stage for it to manifest in your life.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Embracing Consciousness as an Active Process</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Understanding consciousness as a creator allows us to live with a sense of agency and empowerment. Instead of feeling that life is something that “just happens” to us, we recognize that we play an active role in shaping it. This doesn't mean controlling every detail but rather engaging with life intentionally, knowing that our thoughts, beliefs, and focus contribute to the reality we experience.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This perspective can be especially transformative during challenging times. Rather than reacting to situations as victims of circumstance, we can ask ourselves, “How can my consciousness engage with this situation differently?” By approaching life from this empowered perspective, we open up new possibilities for growth, understanding, and positive change.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conscious Creation in Action: Real-Life Examples</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Conscious creation is more than a concept—it's a practical approach to life. Here are a few examples of how people use conscious creation to shape their experiences:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Work and Career: </strong>Someone struggling with self-doubt in their career might start setting intentions for confidence and visualizing themselves succeeding in their role. Over time, this practice can transform how they perceive themselves and how others perceive them, leading to greater professional fulfillment.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Relationships: </strong>A person dealing with conflict in relationships may set an intention to focus on understanding and empathy. By shifting their consciousness toward positive qualities, they often find that their relationships improve, as they're more aligned with the qualities they wish to experience.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Personal Well-Being: </strong> For someone facing persistent stress or anxiety, focusing on the present and visualizing calm, permissive states can make a profound difference. By setting intentions and practicing mindful focus, they create an inner state that positively influences their physical and emotional well-being.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Consciousness as a Lifelong Practice</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Conscious creation is not a one-time event; it's an ongoing process that evolves with us. As we grow, our intentions, beliefs, and focus will change, inviting us to continuously refine how we engage with reality. By embracing consciousness as a creator, we step into a life of active participation, where we shape and refine our experience from the inside out.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This doesn't mean we can control every outcome or avoid all difficulties. But it does mean that we can choose how we engage with life's events, responding from a place of alignment and clarity rather than reaction. Over time, this practice brings us closer to a life that reflects our deepest values and aspirations.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: Living as Conscious Creators</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Understanding consciousness as a creator transforms our relationship with reality. We become more than passive observers; we are active participants, shaping our experience with every thought, intention, and focus. By engaging with consciousness intentionally, we invite more joy, purpose, and alignment into our lives.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                As you move forward, remember that every moment offers an opportunity for conscious creation. Whether through a simple intention, a shift in focus, or a mindful decision, you have the power to shape reality from the inside out. Embrace this power, and let your consciousness become the creator of a life that resonates with truth, purpose, and possibility.
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