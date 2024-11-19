// src/components/features/ReviewCarousel.tsx

'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

interface Review {
  source: string
  quote: string
  highlight?: string
  stars?: number
}

interface ReviewCarouselProps {
  reviews: Review[]
  itemsToShow?: number
}

export default function ReviewCarousel({ reviews, itemsToShow = 3 }: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsToShow >= reviews.length ? 0 : prev + itemsToShow
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - itemsToShow < 0 ? Math.max(0, reviews.length - itemsToShow) : prev - itemsToShow
    )
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="relative">
          <div className="grid grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {reviews.slice(currentIndex, currentIndex + itemsToShow).map((review, index) => (
                <motion.div
                  key={`${review.source}-${currentIndex + index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <Quote className="w-8 h-8 text-blue-600/80 mb-6" strokeWidth={1.5} />
                  <p className="text-gray-600 mb-6 leading-relaxed">{review.quote}</p>
                  {review.highlight && (
                    <p className="text-gray-700 italic mb-6 leading-relaxed">{review.highlight}</p>
                  )}
                  <div className="space-y-3">
                    {review.stars !== undefined && (
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < review.stars ? 'text-yellow-400' : 'text-gray-200'}`}
                              fill={i < review.stars ? 'currentColor' : 'none'}
                              strokeWidth={1.5}
                            />
                          ))}
                        </div>
                      )}
                    <div className="flex items-center gap-2">
                      <span className="font-normal text-gray-900">{review.source}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute -left-12 top-1/2 transform -translate-y-1/2"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className={`w-8 h-8 ${currentIndex === 0 ? 'text-gray-300' : 'text-gray-400 hover:text-gray-600'}`} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute -right-12 top-1/2 transform -translate-y-1/2"
        disabled={currentIndex + itemsToShow >= reviews.length}
      >
        <ChevronRight className={`w-8 h-8 ${currentIndex + itemsToShow >= reviews.length ? 'text-gray-300' : 'text-gray-400 hover:text-gray-600'}`} />
      </button>
    </div>
  )
}