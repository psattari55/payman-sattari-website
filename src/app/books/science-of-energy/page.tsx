// src/app/books/science-of-energy/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Book, ShoppingCart, Download, BookOpen, Scale, Compass, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageTransition from "@/components/ui/PageTransition";
import Section from "@/components/ui/Section";
import ReviewsSection from "@/components/features/reviews/ReviewsSection";
import Image from "next/image";

// Retailer links
const retailers = [
  { name: "Amazon", href: "http://www.amazon.com/dp/B0CPWDH5SQ" },
  {
    name: "Barnes & Noble",
    href: "https://www.barnesandnoble.com/w/the-science-of-energy-payman-sattari/1144454501?ean=9798989627523",
  },
  {
    name: "Kobo",
    href: "https://www.kobo.com/ww/en/ebook/the-science-of-energy",
  },
];

// Book formats
const formats = [
  {
    title: "Hardcover",
    isbn: "979-8-9896275-0-9",
    price: "$29.99",
    icon: Book,
    url: "http://www.amazon.com/dp/B0CPM9WPD6",
  },
  {
    title: "Paperback",
    isbn: "979-8-9896275-1-6",
    price: "$16.99",
    icon: Book,
    url: "http://www.amazon.com/dp/B0CPC9CBJ2",
  },
  {
    title: "eBook",
    isbn: "979-8-9896275-2-3",
    price: "$9.99",
    icon: BookOpen,
    url: "https://www.kobo.com/ww/en/ebook/the-science-of-energy",
  },
  {
    title: "Kindle",
    isbn: "979-8-9896275-3-0",
    price: "$9.99",
    icon: Download,
    url: "http://www.amazon.com/dp/B0CPWDH5SQ",
  },
];

// Book series data
const seriesData = {
  description:
    "Offering a unified scientific framework for understanding the nature of reality, experience, and energy. From theoretical foundations to practical applications, this series presents a revolutionary approach to reconciling objective and subjective aspects of existence.",
  books: [
    {
      number: 1,
      title: "The Science of Energy",
      status: "available",
      description:
        "Establishes the foundational framework for a unified model of energy, consciousness, and matter. Challenges core assumptions about reality while building a bridge between physics and inner experience.",
    },
    {
      number: 2,
      title: "Basic Duality",
      status: "forthcoming",
      description:
        "Develops the complete metaphysical system, revealing fundamental laws that govern both physical reality and consciousness. Explores how universal principles manifest across all scales of existence through primary dualities that shape space, time, identity, and truth.",
    },
    {
      number: 3,
      title: "The Language of Truth",
      status: "forthcoming",
      description:
        "Culminates in practical mastery, offering a comprehensive guide to personal transformation through understanding and application of universal principles. Explores the nature of self, virtues, and the path to enlightened living.",
    },
  ],
};


// Review data structure
const editorialReviews = [
  {
    source: "Kirkus Reviews",
    quote:
      "Sattari offers an excellent and engaging overview of milestones and key discoveries in science, covering Newton, Einstein, Planck, and many others, and he explicates confounding concepts with clarity and drama... The author effectively tees up his compelling metaphysical premise, that 'conscious experience is not spooky or mysterious. It is part of the natural order.'",
    logo: "/images/reviews/kirkus-logo.png",
  },
  {
    source: "Pacific Book Review",
    quote:
      "Sattari delivers with an engaging blend of clarity and enthusiasm... What sets The Science of Energy apart is Sattari's ability to distill profound ideas into digestible insights, ensuring readers grasp the fundamental principles without getting lost in the intricacies of scientific jargon.",
    logo: "/images/reviews/pacific-logo.webp",
    award: "/images/reviews/notable-book-award.png",
  },
  {
    source: "San Francisco Book Review",
    quote:
      "The arguments by the author would prove a great topic of discussion among philosophers. Philosophy is a broad subject, and it's always interesting to see someone portray their views with evidence to back them up and not try to impose them on the readers. The author aims to educate, not convince you of his beliefs, which makes the book a good read.",
    logo: "/images/reviews/sanfrancisco-logo.webp",
  },
];

const readerReviews = [
  {
    author: "Max",
    quote:
      "If you're curious about the mysteries of the universe but feel daunted by heavy science books, Sattari's The Science of Energy is a breath of fresh air. I picked it up hoping to get some new insights into big questions, and honestly, it delivered much more.",
    stars: 5,
    source: "Amazon",
    date: "December 25, 2023",
  },
  {
    author: "Bradley Myhre",
    quote:
      "I really enjoyed reading this book and am looking forward to the next two in the series. Lots of information to make you really think about yourself and the nature of reality.",
    stars: 5,
    source: "Amazon",
    date: "April 14, 2024",
  },
  {
    author: "Michael",
    quote:
      "Fascinating, sharp, concise, The Science of Energy takes a few thousand years of humanity's understanding of reality and lays out the scientific basics in an unsparing, lucid account.",
    stars: 5,
    source: "Goodreads",
    date: "May 31, 2024",
  },
  {
    author: "Jazzy",
    quote:
      "This book is amazing, I love anything that allows me to look at myself, and the world around me, and gives insight into the ever-looming questions about ourselves, our purpose, and our place in the universe.",
    stars: 5,
    source: "Goodreads",
    date: "June 26, 2024",
  },
  {
    author: "avidarkansasreader",
    quote:
      "This book may cause a loss of sleep. I tend to read nightly before sleep and this book offers many ideas to contemplate. An enjoyable read.",
    stars: 5,
    source: "Amazon",
    date: "April 10, 2024",
  },
  {
    author: "John Allen",
    quote:
      "Perhaps the most enlightening book I have ever read. A comprehensive insight into scientific reality with a revaluation of the personal experience missing. Offering a threshold toward the deep longing we all have for the joy of living.",
    stars: 5,
    source: "Goodreads",
    date: "June 13, 2024",
  },
  {
    author: "Reader",
    quote:
      "I LOVE THIS BOOK. It makes me love science. He walks through those who have contributed to our discoveries, theories, and knowledge. Then comes in with a smart explanation of what's presently missing in science and how we can explore this. It's brain expanding. captivating and thought-provoking. And it's also beautifully written.",
    stars: 5,
    source: "Amazon",
    date: "June 26, 2024",
  },
  {
    author: "Diego",
    quote:
      "This book surprised me. I never thought science and metaphysics could be discussed at the same time in any coherent way, but here we are… Regardless of what you think about either topic, this book will make you think. You'd be hard pressed to walk away without something interesting or of value. 5 stars",
    stars: 5,
    source: "Amazon",
    date: "June 26, 2024",
  },
];

export default function ScienceOfEnergyPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <Section width="default" className="py-16 md:pt-20 md:pb-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-16 items-center">
            {/* Content Column */}
            <motion.div
              className="md:col-span-7 space-y-6 md:space-y-8 order-2 md:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="hidden md:block text-sm text-gray-500 uppercase tracking-wider font-light">
                    Book One in The Language of Truth Series
                  </div>

                  <h1 className="text-4xl font-serif md:text-5xl tracking-wide text-gray-900">
                    The Science of Energy
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-600 font-light">
                    Bridging Consciousness and Physical Reality
                  </p>
                </div>

                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p className="text-lg leading-relaxed">
                    A groundbreaking framework for understanding reality at its
                    most fundamental level. Moving beyond traditional divisions
                    between physics and consciousness, this work reveals how
                    existence emerges through complementary forces: the
                    universal and the relative, the measurable and the
                    immeasurable, the continuous and the discrete. Suitable for
                    scholars, seekers, and practitioners alike, it provides both
                    a rigorous theoretical foundation and practical insights for
                    transforming how we experience reality.
                  </p>
                  <p className="text-base text-gray-600 mt-4 leading-relaxed">
                    This first volume establishes the conceptual bedrock
                    necessary for a complete reimagining of reality. Drawing
                    from physics, philosophy, and direct observation, it
                    demonstrates how consciousness and physical matter are two
                    faces of the same cosmic order.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="http://www.amazon.com/dp/B0CPC9CBJ2">
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Purchase Now</span>
                    </motion.button>
                  </Link>
                  <Link href="/books/science-of-energy/preview">
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-300"
                    >
                      <BookOpen className="w-5 h-5" />
                      <span>Preview Content</span>
                    </motion.button>
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="font-light">Available at:</span>
                  {retailers.map((retailer) => (
                    <Link
                      key={retailer.name}
                      href={retailer.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 transition-colors"
                    >
                      {retailer.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Book Cover Column */}
            <motion.div className="md:col-span-5 order-1 md:order-2">
              <div className="relative max-w-[280px] md:max-w-[325px] mx-auto md:mb-10 -mb-6">
                <div className="aspect-[11/17] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/books/science-of-energy-cover.jpg"
                    alt="The Science of Energy Book Cover"
                    width={325}
                    height={500}
                    sizes="(max-width: 768px) 280px, 325px"
                    quality={90}
                    priority
                    className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -z-10 -inset-10 bg-gradient-to-br from-blue-50/50 to-purple-50/30 rounded-2xl blur-2xl" />
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Available Formats */}
        <Section background="white" width="default" className="pt-16">
          <h2 className="text-3xl font-light mb-12 text-center text-gray-900">
            Available Formats
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {formats.map((format) => {
              const Icon = format.icon;
              return (
                <Link
                  key={format.isbn}
                  href={format.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-100 transition-shadow duration-300 hover:shadow-lg"
                  >
                    <Icon
                      className="w-6 h-6 text-gray-600 mb-4"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-lg font-normal mb-2">{format.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      ISBN: {format.isbn}
                    </p>
                    <p className="text-lg font-medium text-gray-900">
                      {format.price}
                    </p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </Section>

        {/* Editorial Reviews */}
        <Section background="gray" width="default">
          <div className="max-w-6xl mx-auto">
            <ReviewsSection
              editorialReviews={editorialReviews}
              readerReviews={readerReviews}
            />
          </div>
        </Section>

        {/* Core Framework */}
        <Section background="white" width="default">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-center">
              A Bridge Between Worlds
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  icon: Scale,
                  color: "blue",
                  title: "A Unified Framework",
                  description:
                    "Discover how consciousness and physical reality are two faces of the same cosmic order",
                },
                {
                  icon: Brain,
                  color: "purple",
                  title: "Beyond the Physical",
                  description:
                    "Explore how subjective experience fits into the natural laws governing reality",
                },
                {
                  icon: Compass,
                  color: "green",
                  title: "Personal Integration",
                  description:
                    "Learn how understanding these principles can transform your experience of life",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className={`p-3 bg-${item.color}-50 rounded-lg w-fit mb-6`}
                  >
                    <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <Link
                    href="/books/science-of-energy/framework"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900"
                  >
                    Explore More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Core Principles Preview */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-light mb-6 text-center">
                Core Principles
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    principle: "The Observer & Relativity",
                    description:
                      "Reality is defined relative to the observer. Understanding this relationship is key to grasping the nature of existence.",
                  },
                  {
                    principle: "Complementary Forces",
                    description:
                      "Reality emerges through the interplay of apparent opposites: subject/object, continuous/discrete, measurable/immeasurable.",
                  },
                  {
                    principle: "Relative & Universal Truth",
                    description:
                      "Individual experience and universal laws are not contradictory but complementary aspects of reality.",
                  },
                  {
                    principle: "The Power of Belief",
                    description:
                      "Our beliefs shape our relative reality, making understanding truth essential to transforming experience.",
                  },
                ].map((item) => (
                  <div key={item.principle} className="bg-white rounded-lg p-6">
                    <h4 className="font-medium mb-2">{item.principle}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/books/science-of-energy/understanding"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Explore the Framework
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Subtle Divider */}
        <div className="w-full max-w-2xl mx-auto py-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Book Series Section */}
        <Section background="white" width="default">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light mb-4 text-gray-900">
                The Language of Truth Series
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {seriesData.description}
              </p>
            </div>

            <div className="space-y-8">
              {seriesData.books.map((book) => (
                <motion.div
                  key={book.title}
                  className={`bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm ${
                    book.status === "available"
                      ? "border-2 border-blue-600/20"
                      : "border border-gray-200"
                  } overflow-hidden`}
                  whileHover={{ y: -2 }}
                >
                  <div className="grid md:grid-cols-[auto,1fr] gap-6 p-8">
                    <div className="flex items-center justify-center">
                      <Book
                        className={`w-12 h-12 ${
                          book.status === "available"
                            ? "text-blue-600/80"
                            : "text-gray-400"
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`text-sm font-medium ${
                            book.status === "available"
                              ? "text-blue-600"
                              : "text-gray-500"
                          }`}
                        >
                          {book.status === "available"
                            ? "Available Now"
                            : "Coming Soon"}
                        </span>
                        <div className="h-px flex-1 bg-gray-100" />
                      </div>
                      <h3 className="text-xl font-normal mb-3">
                        Book {book.number}: {book.title}
                      </h3>
                      <p className="text-gray-600">{book.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}
