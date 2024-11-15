// src/components/ui/ProgressiveLoad.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProgressiveLoadProps {
  children: React.ReactNode
  className?: string
  delay?: number // Delay in milliseconds
  threshold?: number // Intersection observer threshold
  margin?: string // Root margin for intersection observer
}

export default function ProgressiveLoad({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  margin = '50px'
}: ProgressiveLoadProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        rootMargin: margin,
        threshold: threshold
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, margin, threshold, isVisible])

  return (
    <div ref={ref} className={className}>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}