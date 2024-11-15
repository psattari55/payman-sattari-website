// src/components/ui/Doorway.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface DoorwayProps {
  title: string
  link: string
  icon: React.ReactNode
  color: string
  description: string
  details: string
  gradient: string
  backgroundImage: string // URL for the background image
}

const Doorway = ({
  title,
  link,
  icon,
  color,
  description,
  details,
  gradient,
  backgroundImage
}: DoorwayProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-[320px] relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 60, damping: 12 }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Door Frame */}
      <div
        className={`relative w-full h-[420px] rounded-lg overflow-hidden shadow-xl ${gradient}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isOpen ? 1 : 0.5, // Adjust visibility
          transition: 'opacity 0.5s ease'
        }}
      >
        {/* Doors */}
        <motion.div
          className="absolute top-0 left-0 h-full w-full flex items-center justify-center"
          style={{ backgroundColor: color }}
          initial={{ x: 0 }}
          animate={{ x: isOpen ? '-100%' : 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 12 }}
        >
          <div className="text-white">{icon}</div>
        </motion.div>
      </div>

      {/* Title, Subtitle, and Link */}
      <div className="mt-4 text-center text-gray-800">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-700 mt-1">{description}</p>
        <p className="text-xs text-gray-600 mt-2">{details}</p>

        <a
          href={link}
          className="block mt-3 text-sm font-medium text-blue-600 hover:underline"
        >
          Explore
        </a>
      </div>
    </motion.div>
  )
}

export default Doorway