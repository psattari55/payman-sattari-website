// src/components/article/NewsletterSignup.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface NewsletterSignupProps {
  title?: string
  description?: string
}

export default function NewsletterSignup({ 
  title = "Stay Connected",
  description = "Get monthly insights on consciousness, physics, and the nature of reality."
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed')
      }

      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-6 rounded-lg">
      <h3 className="text-lg font-normal mb-4 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      
      <motion.input 
        type="email" 
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 mb-2 border border-gray-200 rounded text-sm"
        whileFocus={{ scale: 1.01 }}
      />
      
      <motion.button 
        type="submit"
        className={`w-full p-2 rounded-md text-sm transition-colors ${
          isSubmitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-gray-900 hover:bg-gray-800 text-white'
        }`}
        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </motion.button>
      
      {status === 'success' && (
        <p className="mt-2 text-sm text-green-600">
          Thanks for subscribing! You have been successfully added.
        </p>
      )}
      
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </form>
  )
}