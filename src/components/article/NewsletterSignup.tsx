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
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('https://ghost.paymansattari.com/ghost/api/v3/admin/members/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Ghost 6750831d37a9671714984b0f:1ff069edfdb40de0cc42e778a8e54a2104c0efce4dd4275de1680165567fc0f4'
        },
        body: JSON.stringify({
          members: [{
            email: email,
            subscribed: true
          }]
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors?.[0]?.message || 'Subscription failed');
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-6 rounded-lg">
      <h3 className="text-lg font-normal mb-4 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">
        {description}
      </p>
      <motion.input 
        type="email" 
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 mb-2 border border-gray-200 rounded text-sm"
        whileFocus={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      <motion.button 
        type="submit"
        className={`w-full p-2 rounded-md text-sm transition-colors ${
          isSubscribing 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-gray-900 hover:bg-gray-800 text-white'
        }`}
        whileHover={!isSubscribing ? { scale: 1.02 } : {}}
        whileTap={!isSubscribing ? { scale: 0.98 } : {}}
        disabled={isSubscribing}
      >
        {isSubscribing ? 'Subscribing...' : 'Subscribe'}
      </motion.button>
      
      {status === 'success' && (
        <p className="mt-2 text-sm text-green-600">
          Thanks for subscribing! Please check your email to confirm.
        </p>
      )}
      
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </form>
  );
}