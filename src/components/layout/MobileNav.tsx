'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
    name: 'Research',
    path: '/research',
    subItems: [
      { name: 'Academic Publications', path: '/research/publications' },
      { name: 'Theoretical Framework', path: '/research/framework' },
      { name: 'Scientific Implications', path: '/research/implications' }
    ]
  },
  {
    name: 'Books',
    path: '/books',
    subItems: [
      { name: 'The Science of Energy', path: '/books/science-of-energy' },
      { name: 'Basic Duality', path: '/books/basic-duality' },
      { name: 'Study Guides', path: '/books/study-guides' }
    ]
  },
  {
    name: 'Articles & Insights',
    path: '/articles',
    subItems: [
      { name: 'Scientific Insights', path: '/articles/scientific' },
      { name: 'Metaphysical Concepts', path: '/articles/metaphysical' },
      { name: 'Personal Development', path: '/articles/development' }
    ]
  },
  {
    name: 'Practice',
    path: '/practice',
    subItems: [
      { name: 'Integration', path: '/practice/integration' },
      { name: 'Practical Applications', path: '/practice/applications' },
      { name: 'Energy Principles', path: '/practice/principles' }
    ]
  },
  {
    name: 'About',
    path: '/about',
    subItems: [
      { name: 'Background', path: '/about/background' },
      { name: 'Vision', path: '/about/vision' },
      { name: 'Journey', path: '/about/journey' }
    ]
  }
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle menu item click
  const handleMenuItemClick = (item: MenuItem) => {
    if (item.subItems) {
      setOpenSubmenu(openSubmenu === item.name ? null : item.name)
    } else {
      setIsOpen(false)
    }
  }

  // Handle link click
  const handleLinkClick = () => {
    setIsOpen(false)
    setOpenSubmenu(null)
  }

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-4 py-3 border-b">
                <Link 
                  href="/" 
                  className="font-semibold text-lg"
                  onClick={handleLinkClick}
                >
                  Payman Sattari
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto overscroll-contain py-2">
                {menuItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 last:border-0">
                    <button
                      onClick={() => handleMenuItemClick(item)}
                      className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.subItems && (
                        <ChevronRight
                          size={20}
                          className={`transform transition-transform duration-200 ${
                            openSubmenu === item.name ? 'rotate-90' : ''
                          }`}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {openSubmenu === item.name && item.subItems && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden bg-gray-50"
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              onClick={handleLinkClick}
                              className="block px-6 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}