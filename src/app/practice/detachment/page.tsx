// src/app/practice/detachment/page.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Shield, Eye } from 'lucide-react';
import Section from '@/components/ui/Section';
import PageTransition from '@/components/ui/PageTransition';

const practices = [
  {
    title: "Observing Thoughts",
    description: "Watch your thoughts without engaging with them. Notice how they arise and pass away naturally.",
    icon: Eye,
  },
  {
    title: "Emotional Distance",
    description: "Practice being with emotions without being consumed by them. Create space between feeling and reaction.",
    icon: Shield,
  },
  {
    title: "Physical Awareness",
    description: "Notice bodily sensations without judgment. Observe the body as a field of experience.",
    icon: Sparkles,
  },
  {
    title: "Identity Investigation",
    description: "Question assumptions about who you are. Notice what remains constant beneath changing experiences.",
    icon: Layers,
  }
];

export default function DetachmentPage() {
  const [activeTab, setActiveTab] = useState('what');
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <Section width="default" className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-normal mb-6 tracking-wide text-gray-900">
                The Art of Detachment
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detachment is not about withdrawing or being aloof. It is the practice of developing independence from all the forces of our inner lives (thoughts, emotions, body, and experiences).
              </p>
            </motion.div>

            {/* Navigation Tabs */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2 p-1 bg-gray-100 rounded-lg">
                {['what', 'why', 'how', 'practice'].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab 
                        ? 'bg-white text-gray-900 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Content Sections */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="prose prose-lg max-w-none"
            >
              {activeTab === 'what' && (
                <div className="space-y-6">
                  <p>
                    Detachment is the practice of creating conscious independence from our thoughts, emotions, and experiences. 
                    Unlike dissociation or disconnection, detachment allows us to remain fully present while maintaining our 
                    center of awareness.
                  </p>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">What Detachment Is Not:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="font-medium min-w-[140px]">Not Dissociation:</span>
                        <span className="text-gray-600">
                          Detachment doesn't mean emotionally shutting down or creating psychological distance
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-medium min-w-[140px]">Not Separation:</span>
                        <span className="text-gray-600">
                          You can be independent of something without being separate from it
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-medium min-w-[140px]">Not Disconnection:</span>
                        <span className="text-gray-600">
                          Detachment maintains connection while releasing attachment
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'why' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">Why does this matter?</h2>
                  <p>
                    Detachment is important because it gives us the space we need to be able interact with all the forces of our inner lives in a free and indepenent way. As long as we are identified with something (like an emotion or thought for example), we are essentially "one" with it, and can no longer see it from the outside anymore. 
                    While this is true, we will be both unconscious of our inner mechanisms, and unable to affect them directly.
                  </p>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Benefits of Detachment:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600">•</span>
                        <span>Greater emotional freedom and stability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600">•</span>
                        <span>Clearer perception and decision-making</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600">•</span>
                        <span>Reduced stress and anxiety</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-600">•</span>
                        <span>Increased sense of inner peace</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'how' && (
                <div className="space-y-6">
                  <p>
                    Detachment is like a muscle. The more you practice, the easier it becomes. Over time, you will have cultivated a space within yourself that is free, independent, and neutral, from which you can observe all other things. 
                    It begins with recognizing that you are not your thoughts, emotions, or experience, but the greater awareness within which they appear.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    {practices.map((practice, index) => {
                      const Icon = practice.icon;
                      return (
                        <motion.div
                          key={index}
                          className="bg-white border border-gray-200 rounded-lg p-6"
                          whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <Icon className="w-5 h-5 text-blue-600" />
                            <h3 className="font-medium text-gray-900">{practice.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{practice.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === 'practice' && (
                <div className="space-y-6">
                  <p>
                    Begin with simple exercises that help you observe your experience without becoming entangled in it. 
                    These practices build the "muscle" of conscious awareness.
                  </p>
                  <div className="space-y-8 my-8">
                    <div className="bg-stone-50 border border-stone-100 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Daily Practice</h3>
                      <ol className="space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="font-medium text-stone-400">01.</span>
                          <div>
                            <p className="font-medium text-gray-900">Morning Awareness</p>
                            <p className="text-gray-600 text-sm mt-1">
                              Upon waking, take 5 minutes to simply observe your thoughts and feelings without engaging with them.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-medium text-stone-400">02.</span>
                          <div>
                            <p className="font-medium text-gray-900">Mindful Pauses</p>
                            <p className="text-gray-600 text-sm mt-1">
                              Throughout the day, take brief moments to step back and observe your current state.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-medium text-stone-400">03.</span>
                          <div>
                            <p className="font-medium text-gray-900">Evening Reflection</p>
                            <p className="text-gray-600 text-sm mt-1">
                              Before sleep, review your day from the perspective of the observer rather than the doer.
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}