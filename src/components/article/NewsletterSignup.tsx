// src/components/article/NewsletterSignup.tsx
'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
}

export default function NewsletterSignup({ 
  title = "Stay Connected",
  description = "Get monthly insights on consciousness, physics, and the nature of reality."
}: NewsletterSignupProps) {
  const [isSubscribing, setIsSubscribing] = useState(false);
  
  return (
    <div className="bg-white border border-gray-100 p-6 rounded-lg">
      <h3 className="text-lg font-normal mb-4 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">
        {description}
      </p>
      <motion.input 
        type="email" 
        placeholder="Your email"
        className="w-full p-2 mb-2 border border-gray-200 rounded text-sm"
        whileFocus={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      <motion.button 
        className="w-full bg-gray-900 text-white p-2 rounded-md text-sm hover:bg-gray-800 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubscribing}
      >
        {isSubscribing ? 'Subscribing...' : 'Subscribe'}
      </motion.button>
    </div>
  );
}