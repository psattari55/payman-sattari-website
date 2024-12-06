// src/app/articles/thoughts/embodying-purpose-life/page.tsx

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
import ExploreArticles from '@/components/article/ExploreArticles';

export default function ArticlePage() {

    const articleInfo = {
      title: "Embodying the Purpose of Life",
      subtitle: "Becoming Your True Self",
      description: "Exploring how true purpose emerges not from external achievements or validation, but through aligning with our authentic selves and building lives that reflect our inner truth.",
      publishDate: "2024-12-09",
      readTime: "10 min",
      category: "Latest Thoughts",
      door: undefined
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
                Every so often, a question slips into the quiet spaces of our minds: <em>What is the purpose of all of this?</em> For some, it's an idle curiosity. For others, it's a deeper, sometimes painful search, a question that refuses to stay on the sidelines. And though we might go days, months, or even years without directly asking it, most of us feel its presence, lingering in moments of reflection, transition, or struggle.
                </p>
                <p className="text-xl text-gray-700 mb-8">
                When we look around for answers, we find plenty. We're told that life's purpose is to be happy, to succeed, to create something meaningful, to be remembered, to leave a mark. There's no shortage of purposes to choose from, and yet, the question seems stubbornly resistant to a one-size-fits-all answer. What if happiness isn’t enough? What if success doesn’t bring peace? What if we achieve everything we set out to do and still feel a kind of emptiness?
                </p>
                <p className="text-xl text-gray-700 mb-8">
                These are questions many of us hesitate to ask openly, perhaps because they hint at something uncomfortable: the possibility that we've been chasing shadows, that the pursuit itself has kept us from finding what we were looking for all along.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Search for Meaning in Achievement</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                One of the most common ways we attempt to answer the question of purpose is by achieving things. We set goals, accumulate accomplishments, build careers, make names for ourselves. This pursuit can be incredibly motivating. It drives us, gives structure to our days, and provides a sense of progress. And yet, there's something about it that can feel strangely unsatisfying.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Imagine the anticipation leading up to a major achievement—a degree, a promotion, a goal finally reached. The moment arrives, we experience the thrill, the validation, the sense of pride. But then, sooner or later, the high fades. Life returns to its usual rhythm, and the question resurfaces, sometimes even stronger than before: <em>Is this all there is?</em>
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Some respond by setting new goals, hoping that this next accomplishment will be the one that finally brings lasting contentment. Others begin to wonder if perhaps something is missing—something that can't be reached by simply climbing higher or accomplishing more.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Desire to Belong and Be Seen</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Beneath the pursuit of success, there often lies a quieter, subtler desire: the desire to belong, to be accepted, to be valued. Many of our achievements are motivated, consciously or unconsciously, by a wish to be seen by others, to prove our worth, to satisfy the expectations of family, culture, or society. We might tell ourselves that our goals are entirely self-directed, but it's worth asking—how much of our ambition is shaped by the world around us?
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Think of the way we sometimes measure success—not by our own standards, but by those handed to us by parents, teachers, or social norms. We strive for titles, degrees, or careers not because they resonate deeply with us, but because we've been taught that they're what “successful” people have. And so, without realizing it, we may end up building lives that don't truly reflect who we are, but rather who we think we're supposed to be.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This desire to belong, to please, to meet external expectations can be a powerful motivator. But it can also be the very thing that keeps us from discovering our own sense of purpose. When our worth is tethered to external validation, we may find ourselves constantly reaching outward, never quite feeling at home in the life we've created.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Turning Inward: A Different Kind of Search</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                If external achievements and validation don't bring lasting fulfillment, what does? For some, the answer begins to take shape only after they've exhausted the usual avenues—only after realizing that success, recognition, and approval can't fill a certain kind of inner void. At this point, the search for purpose shifts from an outward pursuit to an inward exploration.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This shift can feel unsettling at first. Without the familiar structure of goals or external markers, we're left to face ourselves as we are. But in that space, something remarkable can happen. Freed from the need to prove, please, or achieve, we can begin to ask different questions: <em>What truly brings me alive? What values resonate with me, not because they're popular or rewarded, but because they feel right?</em>
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                These questions lead us inward, into a realm that isn't as easily measured or displayed. This inward journey is about learning to listen to ourselves—our own rhythms, our own joys, our own truths—apart from the voices and expectations that surround us. In this space, purpose starts to look less like a destination and more like an unfolding relationship with ourselves.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Discovering Purpose Through Self-Understanding</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                The idea of “finding purpose” can be misleading, suggesting that purpose is something waiting to be uncovered, something out there that we must discover or unlock. But what if purpose isn't something we find, but something we embody? What if it's less about reaching some predetermined goal and more about aligning our lives with who we truly are?
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                This approach to purpose is deeply personal. It doesn't come from a list of achievements or a resume; it comes from a growing understanding of ourselves. And while self-understanding may seem like a modest goal, it's perhaps one of the most challenging and rewarding journeys we can undertake.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Self-understanding means looking honestly at who we are—the values we hold, the interests that energize us, the relationships that bring us joy, and the activities that make us lose track of time. It means examining the ways we've conformed to external expectations and asking ourselves whether those expectations serve our deeper needs. It means cultivating a relationship with ourselves that is rooted in acceptance, curiosity, and compassion.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Building a Life That Feels Like Home</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                When we begin to understand ourselves, purpose takes on a different shape. Instead of chasing validation or success, we start to build lives that feel authentic—lives that reflect our own values, our own interests, our own way of being. Purpose becomes less about reaching a certain level of accomplishment and more about creating a life that feels like home.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Imagine a life where your daily actions are aligned with your values, where your goals are expressions of who you are, not just of what others expect of you. Imagine pursuing activities and relationships that genuinely nourish you, rather than ones that fit a prescribed image of success. This is a life rooted in inner fulfillment rather than external achievement, and it's one of the most satisfying ways to experience purpose.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Living in alignment with our own values doesn't mean abandoning ambition. It simply means that our ambitions are grounded in something real, something meaningful. Instead of constantly striving for the next thing, we're able to find joy and fulfillment in the journey itself. We become less concerned with how our lives look to others and more interested in how our lives feel to us.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">The Gift of Inner Fulfillment</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                When we shift our focus from external success to inner fulfillment, we find a kind of happiness that isn't dependent on circumstances or achievements. This inner fulfillment isn't flashy or dramatic; it's often quiet, subtle, a steady sense of contentment that doesn't fade with time. It's the feeling of being at home in our own skin, of knowing that our lives reflect our true selves.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                Inner fulfillment brings a freedom that external success can't provide. It allows us to pursue goals without being defined by them, to enjoy accomplishments without being consumed by them, and to engage with life wholeheartedly, not because we're seeking something, but because we're living fully from within.
                </p>

                <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">Conclusion: A Purpose Embodied</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                Perhaps the purpose of life isn't something we can find or achieve. Perhaps it's something we embody, moment by moment, by aligning with our inner values and peeling back the layers of expectation that have caused us to live an inauthentic life. Purpose, then, becomes less about meeting an external standard and more about building a life that reflects our inner truth.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                When we let go of the need to prove ourselves, to meet others' expectations, or to chase endless achievements, we discover that purpose isn't something we reach “out there.” In the end, perhaps purpose is not about becoming something extraordinary, but about coming home to ourselves—to live authentically, to honor our unique path, and to become who we really are.
                </p>
                
                {/* Article End Section */}
                <ArticleEndSection 
                  door={articleInfo.door}
                  navigation={navigation}
                />

                {/* End of Article Navigation */}
                {navigation.previous || navigation.next ? (
                <ArticleFooterNavigation 
                    previousArticle={navigation.previous}
                    nextArticle={navigation.next}
                    isLastInSequence={!navigation.next}
                    doorHref="/#doorways"
                />
                ) : null}

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
            {articleInfo.door && (
            <ArticleNavigation 
                previous={navigation.previous}
                next={navigation.next}
                door={articleInfo.door}
            />
            )}

            {/* Book Promotion */}
            <BookPromotion 
              coverImage="/images/books/science-of-energy-cover.jpg"
              title="The Science of Energy"
              description="A comprehensive introduction to a new framework for understanding reality, revealing the deep connections between consciousness and material reality."
            />

            {/* Newsletter */}
            <NewsletterSignup />

            {/* Explore Articles */}
            <ExploreArticles 
              articles={[
                {
                  title: "The Primacy of the Inner Reality",
                  href: "/articles/development/primacy-of-inner-reality"
                },
                {
                  title: "The Power of Belief Systems in Shaping Reality",
                  href: "/articles/development/belief-systems-reality"
                },
                {
                  title: "Balance in Daily Life",
                  href: "/articles/development/balance-in-daily-life"
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