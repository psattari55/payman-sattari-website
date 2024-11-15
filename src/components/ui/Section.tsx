// src/components/ui/Section.tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray' | 'none'
  width?: 'default' | 'narrow' | 'wide'
  padding?: 'default' | 'large' | 'none'
  id?: string;
}

export default function Section({
  children,
  className,
  background = 'none',
  width = 'default',
  padding = 'default',
  id
}: SectionProps) {
  // Background styles
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    none: ''
  }

  // Width styles
  const widths = {
    default: 'max-w-7xl',
    narrow: 'max-w-3xl',
    wide: 'max-w-[1920px]'
  }

  // Padding styles
  const paddings = {
    default: 'py-16 px-4',
    large: 'py-24 px-4',
    none: ''
  }

  return (
    <section className={cn(backgrounds[background])}
    id={id}
    >
      <div className={cn(
        widths[width],
        paddings[padding],
        'mx-auto',
        className
      )}>
        {children}
      </div>
    </section>
  )
}