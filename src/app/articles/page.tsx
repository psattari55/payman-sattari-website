// src/app/articles/page.tsx
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';


// Add these sample data arrays at the top, after the imports

const scholarsDoorArticles = [
    {
      title: "Understanding Quantum Measurement",
      description: "Exploring the role of consciousness in quantum mechanics",
      href: "/articles/scientific/quantum-measurement",
      isCompleted: false
    },
    {
      title: "The Nature of Time",
      description: "A new perspective on temporal experience",
      href: "/articles/scientific/nature-of-time",
      isCompleted: false
    },
    // Add more articles as needed
  ];
  
  const sampleArticles = [
    {
      title: "The Science of Energy",
      description: "Understanding the fundamental nature of reality",
      category: "Scientific Insights",
      publishDate: "2024-11-15",
      readTime: "5 min read",
      href: "/articles/scientific/science-of-energy",
      door: "Scholar's Door"
    },
    // Add more sample articles
  ];


export default function ArticlesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24">
          {/* Hero Section */}
          <div className="mb-16">
            <FeaturedArticle 
              article={{
                title: "Latest Featured Article",
                description: "Brief compelling description",
                category: "Scientific Insights",
                href: "/articles/scientific/article-slug"
              }}
            />
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <CategoryCard 
              title="Scientific Insights"
              description="Explore the theoretical foundations"
              door="Scholar's Door"
              articleCount={5}
              href="/articles/scientific"
            />
            {/* Similar cards for other categories */}
          </div>

          {/* Door Sequences Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-normal text-gray-900 mb-8">Journey Through the Doors</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* One for each door */}
              <DoorSequence 
                door="Scholar's Door"
                articles={scholarsDoorArticles}
              />
            </div>
          </div>

          {/* Latest Articles Grid */}
          <div>
            <h2 className="text-2xl font-normal text-gray-900 mb-8">Latest Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Grid of ArticleCard components */}
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}