// src/components/features/DoorHeader.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Book, Lightbulb } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface DoorConfig {
  icon: typeof Eye | typeof Book | typeof Lightbulb
  title: string
  subtitle: string
  color: string
  gradientFrom: string
}

const doorConfigs: Record<string, DoorConfig> = {
  'observers-door': {
    icon: Eye,
    title: "The Observer's Door",
    subtitle: "Exploring Inner Dynamics and the Nature of Experience",
    color: 'text-blue-600/80',
    gradientFrom: 'from-blue-100'
  },
  'scholars-door': {
    icon: Book,
    title: "Scholar's Door",
    subtitle: "Exploring the Theoretical Foundations of Reality",
    color: 'text-emerald-600/80',
    gradientFrom: 'from-emerald-50'
  },
  'practitioners-door': {
    icon: Lightbulb,
    title: "The Practitioner's Door",
    subtitle: "Turning Insight into Action",
    color: 'text-amber-600/80',
    gradientFrom: 'from-amber-50'
  }
}

interface DoorHeaderProps {
  doorType?: string;
  customTitle?: string;
  customSubtitle?: string;
  customIcon?: typeof Eye | typeof Book | typeof Lightbulb;
}

const DoorHeader = ({ 
  doorType = 'observers-door',
  customTitle,
  customSubtitle,
  customIcon
}: DoorHeaderProps) => {
  const pathname = usePathname()
  
  // Determine which door configuration to use
  let config = doorConfigs[doorType]
  
  // Allow for custom overrides
  const Icon = customIcon || config.icon
  const title = customTitle || config.title
  const subtitle = customSubtitle || config.subtitle
  
  return (
    <motion.div 
      className="relative mb-10 overflow-hidden rounded-lg border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Layered gradient backgrounds */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradientFrom} via-gray-50 to-slate-50`} />
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-50/50 via-transparent to-slate-50/30" />
      
      {/* Shine effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated Background Elements with Blur */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[600px] h-[600px] rounded-full backdrop-blur-[1px]"
            style={{
              left: '50%',
              top: '50%',
              translateX: '-50%',
              translateY: '-50%',
              border: '1px solid rgba(148, 163, 184, 0.15)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-12 py-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8">
            {/* Outer rotating ring with gradient */}
            <motion.div 
              className="absolute -inset-4 rounded-full"
              style={{
                background: 'linear-gradient(45deg, rgba(173, 185, 202, 0.15), rgba(255, 255, 255, 0.5))',
                border: '2px solid rgba(241, 245, 249, 0.6)'
              }}
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            {/* Inner pulsing ring */}
            <motion.div
              className="absolute -inset-2 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(228, 233, 240, 0.15), rgba(255, 255, 255, 0.4))',
                border: '1px solid rgba(219, 234, 254, 0.5)'
              }}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Icon className={`w-16 h-16 ${config.color}`} strokeWidth={1.5} />
            </motion.div>
          </div>
          
          <div className="relative">
            {/* Decorative lines */}
            <motion.div 
              className="absolute -left-16 top-1/2 w-12 h-px bg-gradient-to-r from-transparent to-gray-300"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.div 
              className="absolute -right-16 top-1/2 w-12 h-px bg-gradient-to-l from-transparent to-gray-300"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            
            <motion.h1 
              className="text-3xl md:text-4xl font-light mb-2 tracking-wide text-gray-900"
              style={{
                textShadow: '0 0 1px rgba(0,0,0,0.02)'
              }}
              initial={{ opacity: 0, y: 20, filter: 'blur(2px)', letterSpacing: '0.2em' }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                filter: 'blur(0px)',
                letterSpacing: '0.025em'
              }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut"
              }}
            >
              {title}
            </motion.h1>
          </div>
          
          <motion.h2 
            className="text-base md:text-lg font-light text-gray-600 max-w-2xl my-6 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {subtitle}
          </motion.h2>
        </div>
      </div>
    </motion.div>
  )
}

export default DoorHeader