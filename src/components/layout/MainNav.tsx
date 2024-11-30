'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import MobileNav from './MobileNav'

interface MenuItem {
  name: string
  path: string
  subItems?: Array<{
    name: string
    path: string
  }>
}

const menuItems: MenuItem[] = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Research',
    path: '/research',
    subItems: [
      { name: 'Research Overview', path: '/research' },
      { name: 'Academic Papers', path: '/research#papers' },
      { name: 'Theoretical Framework', path: '/research/framework' },
    ]
  },
  {
    name: 'Books',
    path: '/books/science-of-energy',
    subItems: [
      { name: 'The Science of Energy', path: '/books/science-of-energy' },
      { name: 'Framework', path: '/books/science-of-energy/framework' },
      { name: 'Understanding', path: '/books/science-of-energy/understanding' },
      { name: 'Series Overview', path: '/books/series' }
    ]
  },
  {
    name: 'Articles',
    path: '/articles',
    subItems: [
      { name: 'Scientific Insights', path: '/articles/scientific' },
      { name: 'Metaphysical Insights', path: '/articles/metaphysical' },
      { name: 'Personal Development', path: '/articles/development' },
      { name: 'Latest Thoughts', path: '/articles/thoughts' },
    ]
  },
  {
    name: 'Insights',
    path: '/articles',
    subItems: [
      { name: 'Daily Insights', path: '/insights/daily' },
      { name: 'AI Conversations', path: '/insights/ai-conversations' },
      { name: 'Multimedia Content', path: '/insights/multimedia' }
    ]
  },
  {
    name: 'Practice',
    path: '/practice',
    subItems: [
      { name: 'Inner Work', path: '/practice/inner-work' },
      { name: 'Balance', path: '/practice/balance' },
      { name: 'Discipline', path: '/practice/discipline' },
      { name: 'Practice Library', path: '/practice/library' },
    ]
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]

export default function MainNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveSection(itemName)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setActiveSection(null)
    }, 150) // Delay in milliseconds before menu disappears
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm border-b relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-semibold text-lg text-gray-900 hover:text-gray-600 transition-colors">
            Payman Sattari
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.path}
                  className="flex items-center space-x-1 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span>{item.name}</span>
                  {item.subItems && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {activeSection === item.name && item.subItems && (
                  <div 
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <MobileNav />
        </div>
      </div>
    </nav>
  )
}