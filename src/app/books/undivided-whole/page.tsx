// src/app/books/undivided-whole/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import PageTransition from "@/components/ui/PageTransition";
import Section from "@/components/ui/Section";
import Image from "next/image";
import NewsletterModal from "@/components/ui/NewsletterModal";

export default function UndividedWholePage() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        
        {/* Hero Section */}
        <Section width="default" className="py-16 md:pt-24 md:pb-20">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          
        {/* BOOK ICON */}
          <motion.div 
            className="flex justify-center pb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src="/images/books/undivided-whole-icon.png"
                alt="The Undivided Whole Icon"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-serif tracking-wide text-gray-900">
                The Undivided Whole
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-600 font-light">
                Science, Consciousness, and the Nature of Reality
              </p>
            </div>

            {/* Series Context */}
            <div className="text-sm text-gray-500 uppercase tracking-wider font-light">
              Book One in The Language of Truth Series • Second Edition
            </div>
            
            {/* Expected Publication */}
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-base font-medium">
              Expected Publication: 2026
            </div>

            {/* Award Badge */}
            <div className="flex items-center justify-center gap-3 pt-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/awards/nautilus-medal.png"
                  alt="Nautilus Silver Medal"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">
                First Edition: Nautilus Silver Medal Winner • Science &
                Cosmology
              </span>
            </div>

            {/* Main Description */}
            <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                For centuries, Western thought has maintained a profound divide between the objective world of matter and the subjective realm of consciousness. <em>The Undivided Whole</em> examines how this division emerged, why it persists, and presents a compelling framework for reconciliation.
              </p>
              
              <p className="leading-relaxed">
                This work traces the development of our understanding from ancient philosophical awakenings through the Scientific Revolution to quantum mechanics and relativity. Throughout this journey, we witness how what began as a unified inquiry gradually fractured, with consciousness increasingly marginalized from our models of reality.
              </p>
              
              <p className="leading-relaxed">
                At the heart of this exploration are the fundamental dualities that characterize our experience: subject and object, continuous and discrete, whole and parts, measurable and immeasurable. Rather than treating these as irreconcilable opposites, this book reveals them as complementary aspects of an undivided whole—opening the possibility of a science that speaks not only to the mechanics of the physical world but to the very nature and purpose of conscious experience itself.
              </p>
            </div>
            
          </motion.div>
        </Section>

        {/* About the Second Edition */}
        <Section background="white" width="default">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-900">
                The Second Edition
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  <em>The Undivided Whole</em> represents a complete reconceptualization of <em>The Science of Energy</em>, the Nautilus Silver Medal-winning work first published in 2023. This second edition has been vastly expanded and refined—more breadth, greater precision, deeper analysis, and improved narrative flow throughout.
                </p>
                
                <p className="leading-relaxed">
                  What was already praised for its ability to communicate sophisticated philosophical ideas with accessibility has been distilled further, with expanded descriptions, more rigorous connective tissue between sections, and a more measured, patient tone. The result is a work equally at home in the curriculum of a philosophy of science course as it is in the hands of a serious reader interested in science, consciousness, or the nature of reality.
                </p>
                
                <p className="leading-relaxed">
                  This edition includes a new chapter and represents multiple philosophical contributions across several domains: philosophy of mind, philosophy of physics, consciousness studies, metaphysics, ontology, and theoretical biology.
                </p>
              </div>

              {/* Newsletter CTA - Inside the box */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-center mb-4">
                  Want to be notified when <em>The Undivided Whole</em> is released?
                </p>
                <div className="flex justify-center">
                  <motion.button
                    onClick={() => setIsNewsletterOpen(true)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Get Notified</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* What Readers Said About First Edition */}
        <Section background="gray" width="default">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-center text-gray-900">
              What Readers and Reviewers Said About the First Edition
            </h2>

            {/* Award Banner */}
            <motion.div 
              className="flex items-center justify-center gap-4 mb-12 p-6 bg-white rounded-lg border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="relative w-16 h-16">
                <Image
                  src="/images/awards/nautilus-medal.png"
                  alt="Nautilus Silver Medal"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">Nautilus Book Awards</p>
                <p className="text-sm text-gray-600">Silver Medal Winner — Science & Cosmology</p>
              </div>
            </motion.div>

            {/* Editorial Reviews Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  source: "Kirkus Reviews",
                  logo: "/images/reviews/kirkus-logo.png",
                  quote: "Sattari effectively tees up his compelling metaphysical premise... that 'conscious experience is not spooky or mysterious. It is part of the natural order.'"
                },
                {
                  source: "Pacific Book Review",
                  logo: "/images/reviews/pacific-logo.webp",
                  quote: "Sattari delivers with an engaging blend of clarity and enthusiasm... What sets The Science of Energy apart is Sattari's ability to distill profound ideas into digestible insights."
                },
                {
                  source: "San Francisco Book Review",
                  logo: "/images/reviews/sanfrancisco-logo.webp",
                  quote: "The author aims to educate, not convince you of his beliefs, which makes the book a good read."
                },
                {
                  source: "Manhattan Book Review",
                  quote: "An astute and perceptive exploration of human consciousness, how it relates to and informs reality, and how disciplines such as science, philosophy, and religion intertwine to influence the nature of existence."
                }
              ].map((review, index) => (
                <motion.div
                  key={review.source}
                  className="bg-white p-6 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {review.logo && (
                    <div className="mb-4 h-12 flex items-center">
                      <Image
                        src={review.logo}
                        alt={review.source}
                        width={review.source === "Kirkus Reviews" ? 60 : 100}
                        height={30}
                        className="object-contain object-left"
                      />
                    </div>
                  )}
                  <p className="text-gray-700 italic mb-4">"{review.quote}"</p>
                  <p className="text-sm font-medium text-gray-900">— {review.source}</p>
                </motion.div>
              ))}
            </div>

            {/* Reader Reviews */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-medium mb-6 text-center">From Readers</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    stars: 5,
                    quote: "Perhaps the most enlightening book I have ever read. A comprehensive insight into scientific reality with a revaluation of the personal experience missing.",
                    author: "John Allen"
                  },
                  {
                    stars: 5,
                    quote: "I LOVE THIS BOOK. It makes me love science... It's brain expanding, captivating and thought-provoking. And it's also beautifully written.",
                    author: "Amazon Reader"
                  },
                  {
                    stars: 5,
                    quote: "This book surprised me. I never thought science and metaphysics could be discussed at the same time in any coherent way, but here we are...",
                    author: "Diego"
                  },
                  {
                    stars: 5,
                    quote: "Fascinating, sharp, concise, The Science of Energy takes a few thousand years of humanity's understanding of reality and lays out the scientific basics in an unsparing, lucid account.",
                    author: "Michael"
                  }
                ].map((review, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-4">
                    <div className="flex gap-1 mb-2">
                      {[...Array(review.stars)].map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 mb-2 italic">"{review.quote}"</p>
                    <p className="text-xs text-gray-500">— {review.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="white" width="default" className="py-16">
          <motion.div
            className="max-w-2xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-light text-gray-900">
              For Those Who Don't Want to Wait
            </h2>
            <p className="text-base text-gray-600">
              The first edition, <em>The Science of Energy</em>, remains
              available and is a rigorous, accessible introduction to these
              ideas. While the second edition vastly expands and refines the
              work, the first edition has been praised by reviewers and readers
              alike for its clarity and depth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/books/science-of-energy">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Book className="w-5 h-5" />
                  <span>View First Edition</span>
                </motion.button>
              </Link>
                <motion.button
                  onClick={() => setIsNewsletterOpen(true)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Updates</span>
                </motion.button>
            </div>
          </motion.div>
        </Section>

      </div>

      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
    </PageTransition>
  );
}