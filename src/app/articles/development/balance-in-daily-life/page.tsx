// src/app/articles/development/balance-in-daily-life/page.tsx
'use client'

import React from 'react';
import { Scale } from "lucide-react";
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
import DoorCard from "@/components/features/DoorCard";

/* Sidebar Components */
import ArticleNavigation from '@/components/article/ArticleNavigation';
import ShareButtons from '@/components/article/ShareButtons';
import BookPromotion from '@/components/article/BookPromotion';
import NewsletterSignup from '@/components/article/NewsletterSignup';
import ExploreArticles from '@/components/article/ExploreArticles';

export default function ArticlePage() {

    const articleInfo = {
      title: "Balance in Daily Life",
      subtitle: "A Dance of Opposites",
      description: "Examining how balancing opposites can create harmony, resilience, and flow in our daily lives.",
      publishDate: "2024-08-26",
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
                In a world that often pulls us toward extremes, finding balance can feel like a challenge. We're constantly managing responsibilities, relationships, and our own well-being, and it's easy to become overwhelmed. The concept of duality, embodied in the symbols of yin and yang, offer a way to navigate these demands by showing us that balance isn't a static state, but a dynamic process of integrating opposites.
                </p>
                <p className="text-xl text-gray-700 mb-8">
                In our framework yin and yang are more than just symbols—they're energy principles that influence everything from the physical world to our inner lives. Yin represents qualities like receptivity, rest, and introspection, while yang embodies action, movement, and outward focus. By learning to recognize and apply these principles, we can create harmony within ourselves and in our daily lives.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Understanding the Energies of Yin and Yang</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                At the core, yin and yang are complementary forces. Just as day and night work together to create a full cycle, yin and yang balance each other, each playing a crucial role in sustaining energy and well-being. Here's a closer look at what each represents:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Yin: </strong>The receptive, restful, inward-facing energy. Yin is about allowing, reflecting, and nourishing. It's the energy we tap into when we're resting, meditating, or engaging in activities that help us recharge.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Yang: </strong>The active, expressive, outward-facing energy. Yang is about doing, achieving, and engaging with the world. It's the energy we use when we're working, exercising, or pursuing goals.
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-800">
                Neither yin nor yang is inherently “better” or “worse.” Instead, they complement each other, each needed to create a state of flow. Recognizing when to lean into yin or yang allows us to move through life with more ease and resilience.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900 underline">Practical Ways to Apply Yin and Yang in Daily Life</h2>
                
                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Balance Activity and Rest</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                In our goal-driven culture, it's common to prioritize yang energy, often at the expense of yin. Over time, this can lead to burnout and stress. By consciously balancing periods of action with moments of rest, we can maintain steady, sustainable energy. Here's how:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Create a Rhythm: </strong>Try working in focused blocks (yang) followed by short breaks (yin). This approach, sometimes called the Pomodoro Technique, keeps energy flowing naturally.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Honor Your Need for Rest: </strong>When you feel mentally or physically depleted, resist the urge to push through. Rest isn't a reward; it's a necessity that allows your yang energy to flourish when you're ready to engage again.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Mindful Decision-Making</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                When making decisions, balance logical thinking (yang) with intuition and reflection (yin). A purely logical approach can overlook emotional or inner cues, while relying solely on intuition can bypass practical considerations. Practicing mindful decision-making can help you:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Pause and Reflect: </strong>Before making a decision, take a moment to connect with your feelings about the choice (yin). Then, assess the situation logically (yang), considering potential outcomes.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Integrate Inner and Outer Needs: </strong>Ask yourself, “Does this decision align with both my inner desires and outer goals?” This balance ensures that your choices feel authentic and fulfilling.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Daily Reflection</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                A regular practice of self-reflection can help you become more aware of your energy balance. Set aside time each evening to assess your day's activities and your inner state. Reflect on questions like:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    “Did I honor both my need for action and my need for rest today?”
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                  “What can I adjust tomorrow to bring more balance?”
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Embracing Both Strength and Vulnerability</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                In our society, we often equate strength with yang energy—being assertive, focused, and in control. Yet yin offers a complementary kind of strength: vulnerability, openness, and introspection. Embracing both sides allows us to be resilient while staying grounded and authentic.
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Lean into Vulnerability: </strong>Allow yourself to feel and express emotions, even the challenging ones. Vulnerability is an important part of self-awareness and relational growth, creating genuine connections with others.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Practice Assertive Kindness: </strong>When facing difficult situations, blend assertiveness with compassion. Assert your needs (yang) while staying open to others' perspectives (yin), finding solutions that respect all involved.
                  </li>
                </ul>
                
                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Finding Harmony through Self-Awareness</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Balance isn't something we achieve once and hold onto forever—it's a continuous process that requires self-awareness. As you move through each day, become attuned to your energy, noticing where you might need more yin or more yang. By doing so, you'll cultivate a natural rhythm that brings clarity, resilience, and a sense of inner peace.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Closing Thoughts</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Applying yin and yang in daily life is about recognizing your needs and honoring them, whether it's taking action or allowing rest, asserting boundaries or opening up to vulnerability. These energies are guides, helping you live more harmoniously with yourself and others. As you work with these principles, you may find that life flows more easily, with each day bringing a new opportunity to learn, grow, and thrive.
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

            <DoorCard
                title="Balance"
                description="Explore how to work with and understand the fundamental forces that shape our inner and outer reality."
                icon={Scale}
                href="/practice/balance"
                doorType="practitioner"
              />

            {/* Explore Articles */}
            <ExploreArticles 
              articles={[
                {
                  title: "The Art of Balance",
                  href: "/articles/metaphysical/art-of-balance"
                },
                {
                  title: "Understanding Duality",
                  href: "/articles/metaphysical/understanding-duality"
                }
              ]}
            />

            </motion.aside>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}