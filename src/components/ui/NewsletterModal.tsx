// src/components/ui/NewsletterModal.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Subscription failed')

      setStatus('success')
      setEmail('')
      setName('')
      
      setTimeout(() => {
        onClose()
        setStatus('idle')
      }, 2500)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
          {/* 1. Sophisticated Backdrop: Darker with a blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* 2. Modal: Sharp corners and stark contrast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            <div className="mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">
                Correspondence
              </span>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                Stay Connected
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-500 font-serif italic">
                Essays and insights on first principles, updates on research, and announcements regarding upcoming projects or publications.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                {/* 3. Refined Inputs: Bottom-border only for that "architectural" feel */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-b border-gray-200 py-2 text-sm placeholder:text-gray-300 focus:border-gray-900 focus:outline-none transition-colors bg-transparent"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Email Address*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-gray-200 py-2 text-sm placeholder:text-gray-300 focus:border-gray-900 focus:outline-none transition-colors bg-transparent"
                  />
                </div>
              </div>

              {/* Premium Button: No rounding, tracked-out text */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:bg-black transition-all disabled:opacity-50 active:scale-[0.98]"
              >
                {isSubmitting ? 'Joining...' : 'Join the Newsletter'}
              </button>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-4"
                >
                  <span className="text-2xl">☉</span>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Thank You
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                    You have been added to the archive index. I look forward to sharing new work with you.
                  </p>
                </motion.div>
                )}

                {status === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-xs text-red-500"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}