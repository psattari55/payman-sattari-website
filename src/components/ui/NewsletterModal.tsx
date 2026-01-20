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
          {/* Sophisticated Backdrop: Darker with a blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal: Sharp corners and stark contrast */}
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
                Essays on first principles, insights on living better, and updates on upcoming research, projects, and publications.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                {/* Refined Inputs: Bottom-border only for that "architectural" feel */}
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center pt-6 pb-2"
                  >
                    {/* Institutional Label in the muted Emerald */}
                    <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-emerald-800 mb-6">
                      Subscription Confirmed
                    </h3>

                    {/* The Divider: Anchors the message and replaces the "odd" symbol */}
                    <div className="w-8 h-px bg-gray-200 mx-auto mb-6" />
                    
                    {/* The Body: High-contrast and elegant */}
                    <p className="text-sm text-gray-900 leading-relaxed font-serif italic max-w-[280px] mx-auto">
                      Thank you. Your email has been added to the register. 
                      I look forward to sharing new work with you soon.
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