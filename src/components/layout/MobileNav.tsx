// src/app/layour/MobileNav.tsx

'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { Menu, X, ChevronRight } from 'lucide-react'
import { menuItems } from '@/config/menuItems'

export default function MobileNav() {
//Added this isMounted const and useeffect under it, and wrapped the creatportal with {isMounted && createPortal(
const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
  setIsMounted(true);
}, []);
  
  // State management
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Handle escape key for accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Prevent iOS Safari bounce scroll
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  // Consolidated state handlers
  const handleOpen = useCallback(() => {
    setIsOpen(true)
    setIsAnimating(true)
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 500)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setOpenSubmenu(null)
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 500)
  }, [])

  const handleMenuItemClick = useCallback((item: { name: string; subItems?: Array<{ name: string; path: string }> }) => {
    if (item.subItems) {
      setOpenSubmenu(openSubmenu === item.name ? null : item.name)
    } else {
      handleClose()
    }
  }, [openSubmenu, handleClose])

  const handleLinkClick = useCallback(() => {
    handleClose()
  }, [handleClose])

  // Prevent touch events from propagating when menu is open
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isOpen && !isAnimating) {
      e.stopPropagation()
    }
  }

  return (
    <>
      {/* Menu Trigger Button */}
      <div className="md:hidden">
        <button
          onClick={handleOpen}
          className="p-4 -mr-4 rounded-md text-gray-600 hover:text-gray-900 active:text-gray-900 touch-manipulation transition-colors duration-200"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-haspopup="true"
        >
          <Menu size={24} className="transform transition-transform duration-200 hover:scale-110" />
        </button>
      </div>

      {/* Portal for Menu Overlay */}
      {isMounted && createPortal(
        <div 
          className={`fixed inset-0 z-[100] ${
            isOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          onTouchMove={handleTouchMove}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          {/* Backdrop with blur effect */}
          <div 
            className={`absolute inset-0 backdrop-blur-sm bg-black/30 transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div 
            className={`fixed top-0 right-0 w-[85vw] max-w-[300px] h-full bg-white shadow-lg transform transition-all duration-500 ease-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b bg-white/90 backdrop-blur-sm">
              <Link 
                href="/" 
                className="text-[15px] font-bold uppercase tracking-[0.1em] text-gray-900"
                onClick={handleLinkClick}
              >
                P. Orelio Sattari
              </Link>
              <button
                onClick={handleClose}
                /* We use text-gray-400 to make the X recede slightly compared to your name */
                className="p-4 -mr-4 text-gray-400 hover:text-gray-900 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={21} strokeWidth={1.5} />
              </button>
            </div>

            {/* Menu Items Container */}
            <div 
              className="flex flex-col h-[calc(100%-65px)] overflow-y-auto overscroll-contain bg-white"
              role="navigation"
            >
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-gray-50">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => handleMenuItemClick(item)}
                        className="w-full p-6 flex justify-between items-center bg-white text-left transition-colors"
                      >
                        {/* 1. Sentence Case at 15px is the "Sweet Spot" for Legibility */}
                        <span className="text-[15px] font-medium text-gray-800">
                          {item.name}
                        </span>
                        <ChevronRight
                          size={18}
                          strokeWidth={1.5}
                          className={`text-gray-300 transform transition-transform duration-300 ${
                            openSubmenu === item.name ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openSubmenu === item.name ? 'max-h-[500px] bg-gray-50' : 'max-h-0'
                        }`}
                      >
                        <div className="py-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              onClick={handleLinkClick}
                              className="block w-full px-10 py-4 text-[14px] text-gray-500 hover:text-gray-900 active:bg-gray-100 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={handleLinkClick}
                      className="block w-full p-6 text-[15px] font-medium text-gray-800 bg-white hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}