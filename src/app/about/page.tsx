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
        <Section width="default" className="pt-20 pb-6">
          <div className="max-w-4xl mx-auto px-2 md:px-6">
            {/* Header */}
            <motion.header 
              className="text-center mb-16"
              {...fadeIn}
            >
              <h1 className="text-4xl font-normal mb-6 tracking-wide text-gray-900">
                About
              </h1>
              <div className="w-16 h-0.5 bg-blue-100 mx-auto mb-8"></div>
              <Image 
                src="/images/profile.jpg" 
                alt="Orelio Sattari"
                width={128}
                height={128}
                className="rounded-full mx-auto mb-8 object-cover shadow-md"
              />
            </motion.header>

            {/* Introduction */}
            <motion.div 
              className="prose prose-lg max-w-none mb-6"
              {...fadeIn}
            >
              <p className="text-base text-gray-700 leading-relaxed">
                For more than fifteen years, my work has been devoted to a single pursuit: <b>understanding the fundamental nature of reality, and learning how to live in alignment with it</b>. I work across theoretical physics, ontology, systems theory, and the disciplined study of interiority and order — not as separate domains, but as aspects of one continuous investigation.
              </p>
            </motion.div>
        
            {/* Main Content Sections */}
            <motion.div 
              className="space-y-16"
              {...fadeIn}
            >
              {/* Background Section */}
              <div className="prose prose-base max-w-none">
                <p className="text-gray-800 leading-relaxed">
                  My path has been unconventional. Rather than advancing through a traditional academic track, I spent more than ten years developing an integrated theoretical framework from first principles. Several of these works have been submitted to leading physics journals and circulated publicly through Zenodo. The system that has emerged bridges domains typically kept isolated — quantum behavior, field structure, conscious experience, and the dynamics of inner life.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  In 2023, I published <em>The Science of Energy</em> which received the Nautilus Silver Medal in Science & Cosmology. That book traces how modern science came to exclude consciousness from its foundations and outlines why a more complete framework is now necessary. My forthcoming book, <em>Basic Duality</em>, extends this work by presenting a unified model of the continuous and discrete aspects of reality, grounded both in physics and in the reality of the observer.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  This foundation has implications that extend beyond physics. It shapes how I think about artificial intelligence, governance, cultural coherence, and the conditions for meaningful life. The writings and work on this site reflect that breadth—not as separate subjects, but as expressions of first-principles thinking applied to the questions that matter most.
                </p>
              </div>

              {/* Subtle Divider */}
              <div className="w-full max-w-2xl mx-auto">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>

              {/* What I Am */}
              <div className="prose prose-base max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-gray-900">What I Am</h2>
                <p className="text-gray-800 leading-relaxed text-lg">
                  I describe myself as a philosopher, ashavan, and transdisciplinary researcher. 
                </p>
                <p className="text-gray-800 leading-relaxed text-base">
                  <b>Philosopher</b>, because my work begins with ontology and first principles. 
                </p>
                <p className="text-gray-800 leading-relaxed text-base">
                  <b>Ashavan</b>, because my commitment is not only to understanding reality, but to <em>aligning</em> with it — to living in accordance with the underlying order that gives rise to both truth and character. The term has ancient roots, but my use of it is contemporary and methodological, not religious or doctrinal.
                </p>
                <p className="text-gray-800 leading-relaxed text-base">
                  <b>Transdisciplinary researcher</b>, because the questions I work with cut across physics, metaphysics, psychology, and the disciplined study of consciousness, and cannot be reasonably contained within a single field.
                </p>
              </div>

              {/* Subtle Divider */}
              <div className="w-full max-w-2xl mx-auto">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>

              {/* What is an ashavan? */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-gray-900">What is an ashavan?</h2>
                <p className="text-gray-800 leading-relaxed text-base">
                  An ashavan is one who seeks to understand and live in accordance with the fundamental order of reality — not as a belief, but as a discipline of perception, character, and alignment. The term has ancient roots, but my use of it is contemporary: it names a way of seeing and acting that unites truth, integrity, and the pursuit of reality as it is.
                </p>
              </div>

              {/* Subtle Divider */}
              <div className="w-full max-w-2xl mx-auto">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>

              {/* Vision */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-gray-900">Vision</h2>
                <p className="text-gray-800 leading-relaxed text-base">
                  We are living at a moment when our scientific models and our lived experience no longer speak the same language. The divide between materialism and consciousness has reached its limit. My work aims to build a coherent foundation that reconnects these domains — one in which the observer, the physical world, and the dynamics of inner life form a unified structure rather than competing explanations.
                </p>
                <p className="text-gray-800 leading-relaxed text-base">
                  This vision has both theoretical and practical implications:
                </p>
                  <ul className="space-y-2 text-gray-800 text-base mt-4">
                    <li>new directions for physics and systems theory</li>
                    <li>new ways of understanding perception and experience</li>
                    <li>new tools for psychological balance, inner work, and human development</li>
                    <li>a path toward integrating truth, character, and lived coherence</li>
                  </ul>
              </div>

              {/* Subtle Divider */}
              <div className="w-full max-w-2xl mx-auto">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>

              {/* Current Work Section */}
              <motion.div {...fadeIn}>
                <h2 className="text-2xl font-normal mb-6 text-gray-900">Current Work</h2>
                <ul className="list-none space-y-4">
                  <ListItem>A revised second edition of <em>The Science of Energy</em> is in the works.</ListItem>
                  <ListItem>Preparing <em>Basic Duality</em> (Book 2)</ListItem>
                  <ListItem>Developing new theoretical frameworks in physics, fields, and ontology</ListItem>
                  <ListItem>Research into quantum mechanics, measurement, and space-time structure</ListItem>
                  <ListItem>Essays covering natural science, society, culture, governance, history, consciousness, and inner development</ListItem>
                  <ListItem>Developing practices and models for personal and collective transformation</ListItem>
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
                <h2 className="text-2xl font-normal mb-4 text-gray-900">Stay Connected</h2>
                <p className="text-gray-700 mb-6">
                  For updates on new research, publications, writing, or insights:
                </p>
                <div className="flex justify-center space-x-4">
                  <InteractiveLink href="/contact" variant="button">
                    Contact
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