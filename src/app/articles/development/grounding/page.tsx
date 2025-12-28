// src/app/articles/development/grounding/page.tsx
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
      title: "Grounding",
      subtitle: "Coming Home to the Earth and the Body",
      description: "Examining grounding as a practice of reconnecting with the Earth, our bodies, and an instinctual wisdom that brings stability and belonging.",
      publishDate: "2024-06-30",
      readTime: "10 min",
      category: "Personal Development",
      door: "Practice Series"
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
              "name": "P. Orelio Sattari"
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
                In a world that often lifts us up and out—into the mental, the abstract, and the aspirational—it's easy to lose touch with something profoundly essential: a sense of belonging here on Earth. Grounding isn't simply about staying present or finding calm; it's about returning to a fullness of being that is connected, embodied, and rooted in the very nature of life itself. To be grounded is to feel at home on Earth, fully descended into the body, and deeply connected to the instincts and rhythms of the living world.
                </p>
                <p className="text-xl text-gray-700 mb-8">
                Grounding invites us to come back into alignment with the Earth, not as an outsider looking in, but as an intrinsic part of her—a participant in the rich web of instinct, emotion, and sensation that links all living beings. It is about inhabiting our physical form fully, healing the wounds that make us feel separate, and learning to embrace the beauty and wisdom of the earthly experience.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Why We Lose Our Ground</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Traumas, losses, and disappointments can cause us to retreat, to pull away from the physical and into the safety of the mind or the heart. In these moments, we may leave parts of ourselves ungrounded, existing in a state of semi-presence—physically here, but emotionally and energetically elsewhere. This separation may begin as a protective mechanism, a way of coping with the pain or rejection we've encountered on Earth, but over time, it leaves us feeling disconnected, as if we don't truly belong.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This disconnection is reinforced by cultural biases that see “higher” pursuits—thinking, logic, and spirituality—as superior to the earthy, physical, and instinctual aspects of life. In this view, the body becomes something to transcend or control, rather than inhabit and honor. As a result, grounding isn't simply a practice of getting “out of the head” but of returning to all that is earthy, physical, and fully alive.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Coming Back into the Body</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The body is our direct link to the Earth. Through the body, we can access a wealth of information and wisdom that is instinctual, immediate, and deeply rooted in the rhythms of life. Unlike intellectual knowledge or intuition, instinct is physical, primal, and unfiltered—a direct expression of the body's connection to the Earth's living intelligence. When we ground ourselves, we begin to trust this instinctual wisdom and to experience the world not just through the mind or heart, but through the body itself.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Being grounded means inhabiting our body fully, feeling our weight as it presses into the earth, noticing the subtle signals that arise from within, and sensing the aliveness in every cell. In grounding, we become aware of the body's language, its sensations and needs, and we learn to listen to what it's telling us—not as an external authority, but as an extension of the Earth herself.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Practices for Grounding and Embodiment</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Grounding is not something we do once; it is a practice of continuously coming home to ourselves. Here are some practices to help you feel more fully descended into the body and at home on Earth:
                </p>
                <ul className="list-none space-y-6 my-8">
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Root Down: </strong>Stand or sit with your feet firmly on the ground, and close your eyes. Imagine roots extending from your feet or tailbone down into the earth. Visualize these roots as thick, deep, and steady, connecting you to the living energy of the Earth. Let yourself feel this connection as a source of strength and stability, a reminder that you belong here.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Embrace Earthly Sensations: </strong>Grounding often means opening up to all the physical sensations that come with being alive. Engage in activities that bring you fully into the body—walking barefoot on the grass, dancing, swimming, or simply lying on the ground. Let yourself experience these sensations fully, without judgment, as a celebration of being alive in a physical form.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Connect with the Belly: </strong>In many traditions, the belly is considered the body's center of gravity and wisdom, where we connect to instinct and grounded power. Place your hands on your lower abdomen and take a few deep breaths, imagining a warm energy gathering in your belly. This area, often called the “hara” or “dantian,” is where we feel our deepest sense of physical presence and strength.
                  </li>
                  <li className="pl-6 border-l-2 border-blue-100">
                    <strong className="text-gray-900">Engage with Nature's Rhythms: </strong>Nature's cycles—day and night, the seasons, the weather—are grounding in their simplicity and consistency. Spend time observing and aligning with these rhythms. Whether it's rising with the sun, planting a garden, or simply noticing the phases of the moon, these practices bring us back into harmony with the natural world and remind us of our place within it.
                  </li>
                </ul>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Dealing with Resistance and Healing the Earthly Wound</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                For many, grounding can bring up resistance. This may show up as an urge to disconnect, to avoid physical sensation, or to feel uncomfortable with being fully in the body. These reactions often stem from deeper wounds—the parts of us that felt unwelcome on Earth, the moments when we felt rejected or out of place. Grounding requires us to heal this “Earth wound,” to address the parts of ourselves that feel disconnected from our earthly experience.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                To work with this resistance, start by noticing any discomfort or reluctance you feel toward grounding practices. Instead of avoiding these feelings, approach them with curiosity. What emotions or memories come up? Are there areas where you feel separate, unworthy, or unwelcome? Allow yourself to feel these experiences, and consider journaling or reflecting on them. Healing this wound is part of grounding, as it allows us to embrace our belonging here on Earth.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Instinct: The Wisdom of the Body</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                In grounding, we access not just a sense of presence, but an instinctual intelligence that comes from being fully embodied. Unlike intellectual thought, which analyzes and dissects, instinct is immediate and holistic. It is a knowing that arises from the body's connection to the Earth, a wisdom that guides us in ways that transcend words. This is the body's language, a way of interacting with the world that is direct, responsive, and rooted in the wisdom of life itself.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                When we are grounded, we are more attuned to our instincts—we notice subtle shifts in our body, a gut feeling that warns us, a sense of readiness or hesitation. This instinct is a form of knowing that bypasses intellectual analysis, giving us direct access to the body's understanding of what is safe, nourishing, and true.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Embracing the Earthly Experience</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                To be grounded is to embrace all that is physical, earthy, and human. It's about finding joy and meaning in the tangible, everyday aspects of life—food, relationships, movement, play, and rest. Grounding invites us to celebrate the richness of the earthly experience, to trust that we are meant to be here, and to reconnect with the body's wisdom as a guide for living.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This doesn't mean abandoning thought or intuition, but rather balancing them with a deep respect for the body and the Earth. When we ground ourselves, we allow the mind and heart to rest in the stability of the body, creating a holistic alignment that honors every aspect of our being.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: Finding Home on Earth</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Grounding is a practice of belonging. It is an invitation to come fully into the body, to trust in the Earth's support, and to embrace the richness of being human. By grounding ourselves, we find a sense of home that is not dependent on external circumstances but is rooted in our own physical presence and connection to life.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                When we ground, we discover that we don't have to escape, transcend, or fix ourselves to feel whole. We are already whole, already connected, already part of the Earth's living intelligence. Grounding reminds us that we belong here, that we are welcome on this Earth, and that we carry within us a wisdom that is ancient, instinctual, and fully alive.
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