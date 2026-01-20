// src/app/books/science-of-energy/page.tsx
"use client";

import { motion } from "framer-motion";
import { Book, BookOpen, Download, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/components/ui/PageTransition";
import Section from "@/components/ui/Section";
import ReviewsSection from "@/components/features/reviews/ReviewsSection";

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

// Review data structure
const editorialReviews = [
  {
    source: "Kirkus Reviews",
    quote:
      "Sattari offers an excellent and engaging overview of milestones and key discoveries in science, covering Newton, Einstein, Planck, and many others, and he explicates confounding concepts with clarity and drama... [He] effectively tees up his compelling metaphysical premise, that 'conscious experience is not spooky or mysterious. It is part of the natural order.'",
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
      <div className="min-h-screen bg-white">
        {/* Editorial Header & Hero */}
        <Section width="narrow" className="pt-16 md:pt-20 pb-6">
          <motion.header 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">
              Volume 01 / Series Archive
            </span>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Book Cover: Architectural Shadow, No Gradients */}
              <div className="w-[90%] md:w-1/3 shrink-0">
                <div className="relative aspect-[11/17] shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-sm overflow-hidden bg-gray-50">
                  <Image
                    src="/images/books/science-of-energy-cover.jpg"
                    alt="The Science of Energy Book Cover"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Core Metadata */}
              <div className="flex-1 space-y-6">
                <div className="border-b border-gray-50">
                  <h1 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                    The Science of Energy
                  </h1>
                </div>

                {/* Award: Clean Academic Styling */}
                <div className="flex items-center gap-4 py-2">
                  <Award className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-900">
                    Nautilus Silver Medal Winner 2025 • Science & Cosmology
                  </span>
                </div>

                <div className="prose prose-base text-gray-600 font-light leading-relaxed max-w-none">
                  <p>
                    A foundational inquiry into reality at its most fundamental level. 
                    Moving beyond traditional divisions between physics and consciousness, 
                    this work reveals how existence emerges through complementary forces: 
                    the universal and the relative, the measurable and the immeasurable.
                  </p>
                </div>

                {/* Refined Actions: "Purchase Now" to "Obtain" tone */}
                <div className="flex flex-wrap gap-6 pt-4">
                  <Link href="http://www.amazon.com/dp/B0CPC9CBJ2">
                    <button className="px-8 py-4 bg-gray-900 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-700 transition-colors">
                      Acquire Volume
                    </button>
                  </Link>
                  {/*<Link href="/books/science-of-energy/preview">
                    <button className="px-8 py-4 border border-gray-200 text-gray-900 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-50 transition-colors">
                      Examine Preview
                    </button>
                  </Link>*/}
                </div>
              </div>
            </div>
          </motion.header>
        </Section>

        {/* Formats: Archival Table Style */}
        <Section background="gray" width="narrow" className="py-12 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-12">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {formats.map((format) => (
                <div key={format.isbn} className="space-y-2 border-l border-gray-200 pl-6">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">{format.title}</h3>
                  <div className="text-[12px] text-gray-500 font-mono tracking-tighter">ISBN: {format.isbn}</div>
                  <div className="text-lg font-serif italic text-gray-900">{format.price}</div>
                  <Link 
                    href={format.url} 
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 block pt-2"
                  >
                    View Merchant →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Reviews Section: Maintain existing but ensure Section is "white" */}
        <Section background="white" width="default">
          <ReviewsSection
            editorialReviews={editorialReviews}
            readerReviews={readerReviews}
          />
        </Section>

        {/* Framework: Chapter-Style Summary */}
        <Section background="gray" width="narrow" className="pt-20 pb-16">
           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-12 block text-center">
            Structural Principles
          </span>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900 tracking-tight">The Observer & Relativity</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Reality is defined relative to the observer. Understanding this relationship 
                  is key to grasping the nature of existence.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900 tracking-tight">Complementary Forces</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Reality emerges through the interplay of apparent opposites: subject/object, 
                  continuous/discrete, measurable/immeasurable.
                </p>
              </div>
            </div>
            <div className="space-y-12">
               <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900 tracking-tight">Relative & Universal Truth</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Individual experience and universal laws are not contradictory but 
                  complementary aspects of reality.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900 tracking-tight">The Power of Belief</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Our beliefs shape our relative reality, making understanding truth 
                  essential to transforming experience.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}