// src/components/ui/Card.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
  href?: string
  onClick?: () => void
}

export default function Card({ 
  children, 
  className,
  hoverable = true,
  href,
  onClick
}: CardProps) {
  const baseClasses = 'bg-white rounded-lg border border-gray-200 p-6'
  const hoverClasses = hoverable ? 'hover:shadow-lg hover:-translate-y-0.5' : ''
  
  const CardWrapper = motion.div
  const content = (
    <CardWrapper
      className={cn(
        baseClasses,
        hoverClasses,
        'transition-all duration-300',
        className
      )}
      whileHover={hoverable ? { scale: 1.02 } : {}}
      whileTap={hoverable ? { scale: 0.98 } : {}}
      onClick={onClick}
    >
      {children}
    </CardWrapper>
  )

  if (href) {
    return (
      <Link href={href}>
        {content}
      </Link>
    )
  }

  return content
}