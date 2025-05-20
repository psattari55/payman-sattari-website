// src/app/about/page.tsx
'use client'

import React, { useState } from 'react';
import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import PageTransition from '@/components/ui/PageTransition';
import InteractiveLink from '@/components/ui/InteractiveLink';
import NewsletterModal from '@/components/ui/NewsletterModal';
import Image from 'next/image';

// Animations object
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// List Item Component
const ListItem = ({ children }: { children: ReactNode }) => (
  <motion.li 
    className="flex items-start space-x-3 mb-4"
    whileHover={{ x: 4 }}
    transition={{ duration: 0.2 }}
  >
    <span className="w-2 h-2 mt-2 rounded-full bg-blue-100 flex-shrink-0" />
    <span className="text-gray-700">{children}</span>
  </motion.li>
);

// Main Component
export default function AboutPage() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const handleNewsletterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsNewsletterOpen(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <Section width="default" className="pt-24 pb-6">
          <div className="max-w-4xl mx-auto px-6">
            {/* Header */}
            <motion.header 
              className="text-center mb-16"
              {...fadeIn}
            >
              <h1 className="text-4xl font-normal mb-6 tracking-wide text-gray-900">
                About Payman Sattari
              </h1>
              <div className="w-16 h-0.5 bg-blue-100 mx-auto mb-8"></div>
              <Image 
                src="/images/profile.jpg" 
                alt="Payman Sattari"
                width={128}
                height={128}
                className="rounded-full mx-auto mb-8 object-cover shadow-md"
              />
            </motion.header>

            {/* Introduction */}
            <motion.div 
              className="prose prose-lg max-w-none mb-10"
              {...fadeIn}
            >
              <p className="text-xl text-gray-700 leading-relaxed">
                For over a decade, I've dedicated myself to developing a comprehensive framework that bridges consciousness and physical reality. My work spans theoretical physics, metaphysics, and consciousness studies, offering new perspectives on how energy shapes both our inner and outer worlds.
              </p>
            </motion.div>
        
            {/* Main Content Sections */}
            <motion.div 
              className="space-y-16"
              {...fadeIn}
            >
              {/* Background Section */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-800 leading-relaxed">
                  My journey began unconventionally. Rather than following a traditional academic path, I spent thirteen years developing a theoretical framework that has led to several papers currently under review in leading physics journals, including Physical Review Letters and Foundations of Physics. This work emerged from a relentless drive to understand the fundamental nature of reality—not just its physical aspects, but the relationship between consciousness and matter.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  In 2023, I published my first book <em>The Science of Energy</em>, recipient of the Nautilus Silver Medal in Science & Cosmology. This book lays the groundwork for understanding how our current scientific paradigms evolved and why we need a more complete framework that includes consciousness. My second book, <em>Basic Duality</em> (forthcoming), builds on this foundation to present a unified theory of reality that bridges quantum mechanics, consciousness, and everyday experience.
                </p>
              </div>

              {/* Subtle Divider */}
              <div className="w-full max-w-2xl mx-auto">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>

              {/* Vision */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl font-semibold mb-6 text-gray-900">Vision</h2>
                <p className="text-gray-800 leading-relaxed text-lg">
                  We're at a crucial point in human understanding where we need to bridge the gap between scientific materialism and conscious experience. My work aims to provide a theoretical foundation for this integration, offering both practical insights for individual development and new directions for scientific research.
                </p>
              </div>

              {/* Subtle Divider */}
              <div className="w-full max-w-2xl mx-auto">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>

              {/* Current Projects Section */}
              <motion.div {...fadeIn}>
                <h2 className="text-2xl font-normal mb-6 text-gray-900">Current Projects</h2>
                <ul className="list-none space-y-4">
                  <ListItem>Finishing Book 2: Basic Duality (in development)</ListItem>
                  <ListItem>Developing new theoretical frameworks in physics and consciousness studies</ListItem>
                  <ListItem>Research in quantum mechanics, field theory, and space-time cosmology</ListItem>
                  <ListItem>Articles and insights for inner work and personal development</ListItem>
                  <ListItem>Projects connecting metaphysical insight with practical applications</ListItem>
                </ul>
              </motion.div>

            {/* Working Together
            <div className="mb-10">
              <h2 className="text-2xl font-normal mb-6 text-gray-900">Working Together</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                My role is to serve as a bridge—between different ways of understanding reality, scientific and experiential knowledge, and between theoretical frameworks and practical application. I offer several ways to engage with this work:
              </p>
              <div className="grid gap-6">
                {[
                  {
                    title: "Speaking & Workshops",
                    description: "I'm available for speaking engagements and workshops that explore these ideas in group settings, whether in academic, corporate, or personal development contexts."
                  },
                  {
                    title: "Research Collaboration",
                    description: "I welcome dialogue and collaboration with researchers, academics, and practitioners interested in exploring these frameworks further."
                  },
                  {
                    title: "Writing & Publications",
                    description: "Beyond my books and papers, I am regularly publishing articles and insights on this website and various platforms, making these ideas accessible to different audiences."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg border border-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -4, 
                      borderColor: 'rgba(59, 130, 246, 0.1)',
                      backgroundColor: 'rgba(249, 250, 251, 0.8)'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-normal mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div> */}

              {/* Contact Section */}
              <motion.div 
                className="bg-stone-50 p-8 rounded-lg text-center border-gray-200"
                {...fadeIn}
              >
                <h2 className="text-2xl font-normal mb-4 text-gray-900">Get in Touch</h2>
                <p className="text-gray-700 mb-6">
                  If you're interested in working together or learning more, please visit my Contact page or sign up for my newsletter to stay updated on new developments, publications, and opportunities to engage with me or this work.
                </p>
                <div className="flex justify-center space-x-4">
                  <InteractiveLink href="/contact" variant="button">
                    Contact Me
                  </InteractiveLink>
                  <button
                    onClick={handleNewsletterClick}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                  >
                    Join Newsletter
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Section>

        {/* Newsletter Modal */}
        <NewsletterModal 
          isOpen={isNewsletterOpen} 
          onClose={() => setIsNewsletterOpen(false)} 
        />
      </div>
    </PageTransition>
  );
}