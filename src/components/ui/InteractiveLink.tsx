// src/components/ui/InteractiveLink.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

interface InteractiveLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  showArrow?: boolean
  variant?: 'default' | 'button'
  external?: boolean
}

export default function InteractiveLink({
  href,
  children,
  className,
  showArrow = false,
  variant = 'default',
  external = false
}: InteractiveLinkProps) {
  const baseClasses = variant === 'default' 
    ? 'text-blue-600 hover:text-blue-700'
    : 'inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800'

  const content = (
    <motion.span
      className={cn(
        'inline-flex items-center gap-1 transition-colors',
        baseClasses,
        className
      )}
      whileHover={{ x: showArrow ? 5 : 0 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {showArrow && <ChevronRight className="w-4 h-4" />}
    </motion.span>
  )

  if (external) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn('inline-flex', className)}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={cn('inline-flex', className)}>
      {content}
    </Link>
  )
}