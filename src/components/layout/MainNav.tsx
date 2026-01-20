// src/app/layout/MainNav.tsx

'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import MobileNav from './MobileNav'
import { menuItems } from '@/config/menuItems'

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
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm border-b z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Mobile: Full width for logo and menu button */}
          <div className="flex justify-between items-center w-full md:w-auto">
            <Link 
              href="/" 
              className="text-[15px] font-bold uppercase tracking-[0.1em] text-gray-900 hover:text-gray-500 transition-colors"
            >
              P. Orelio Sattari
            </Link>
            
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>

          {/* Desktop Menu */}
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
                  className="py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>
                
                {activeSection === item.name && item.subItems && (
                  <div 
                    className="absolute left-0 mt-1 w-48 bg-white shadow-xl ring-1 ring-black ring-opacity-5 z-[60]"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className="block px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
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
        </div>
      </div>
    </nav>
  )
}