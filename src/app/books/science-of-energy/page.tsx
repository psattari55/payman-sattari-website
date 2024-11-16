// src/app/books/science-of-energy/page.tsx

'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Book, Star, Quote, ShoppingCart, Download, BookOpen } from 'lucide-react';

const retailers = [
  { name: "Amazon", href: "#" },
  { name: "Barnes & Noble", href: "#" },
  { name: "Kobo", href: "#" },
  { name: "Apple Books", href: "#" }
];

  const formats = [
    { 
      title: "Hardcover",
      isbn: "979-8-9896275-0-9",
      price: "$24.99"
    },
    {
      title: "Paperback",
      isbn: "979-8-9896275-1-6",
      price: "$16.99"
    },
    {
      title: "eBook",
      isbn: "979-8-9896275-2-3",
      price: "$9.99"
    },
    {
      title: "Kindle",
      isbn: "979-8-9896275-3-0",
      price: "$9.99"
    }
  ];

  const reviews = [
    {
      source: "Kirkus Reviews",
      quote: "An enlightening, accessible science roundup combined with an intriguing metaphysical exploration.",
      highlight: "The author effectively tees up his compelling metaphysical premise that 'conscious experience is not spooky or mysterious. It is part of the natural order.'"
    },
    {
      source: "Pacific Book Review",
      quote: "What sets The Science of Energy apart is Sattari's ability to distill profound ideas into digestible insights, ensuring readers grasp the fundamental principles without getting lost in the intricacies of scientific jargon."
    },
    {
      source: "San Francisco Book Review", 
      quote: "Philosophy is a broad subject, and it's always interesting to see someone else portray their views with evidence to back them up and not try to impose them on the readers. The author aims to educate, not convince, you of his beliefs."
    }
  ];

  export default function Page() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-sm text-gray-500 uppercase tracking-wider">Book One in The Language of Truth Series</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-normal mb-4 text-gray-900">The Science of Energy</h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">Bridging Consciousness and Physical Reality</p>
              
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                <p>
                    An in-depth exploration of the intersection between subjective experience and the physical world, providing a unified framework that addresses gaps in current cosmological models. Suitable for both scholars and general readers, it distills complex scientific concepts with clarity, challenging and expanding our understanding of the universe.
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  This first volume establishes the foundation for understanding how consciousness and physical reality interact, setting 
                  the stage for a transformative perspective on the nature of being.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Purchase Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Preview Chapter
                </motion.button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                Available at:
                {retailers.map((retailer) => (
                  <Link 
                    key={retailer.name}
                    href={retailer.href}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {retailer.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-xs mx-auto lg:mx-0 order-2 lg:order-1"
            >
            <div className="aspect-[11/17] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                src="/images/books/science-of-energy-cover.jpg"
                alt="The Science of Energy Book Cover"
                className="w-full h-full object-cover"
                />
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Series Overview */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-normal mb-8 text-gray-900">The Language of Truth Series</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-lg shadow-sm border-2 border-blue-600"
            >
              <h3 className="text-xl font-medium mb-4">Book One: The Science of Energy</h3>
              <p className="text-gray-600">Establishing the foundation framework for a unified model of energy, consciousness, and matter.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
            >
              <h3 className="text-xl font-medium mb-4">Book Two: Basic Duality</h3>
              <p className="text-gray-600">Coming Soon</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
            >
              <h3 className="text-xl font-medium mb-4">Book Three: The Language of Truth</h3>
              <p className="text-gray-600">Coming Soon</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Formats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-normal mb-8 text-gray-900">Available Formats</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((format) => (
              <motion.div 
                key={format.isbn}
                whileHover={{ y: -4 }}
                className="bg-stone-50 p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-medium mb-2">{format.title}</h3>
                <p className="text-sm text-gray-500 mb-2">ISBN: {format.isbn}</p>
                <p className="text-lg font-medium text-gray-900">{format.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Reviews */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-normal mb-8 text-gray-900">Editorial Reviews</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.source}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Quote className="w-8 h-8 text-blue-600 mb-6" />
                <p className="text-gray-600 mb-6 text-lg">{review.quote}</p>
                {review.highlight && (
                  <p className="text-gray-800 italic mb-6">{review.highlight}</p>
                )}
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="font-medium text-gray-900">{review.source}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}