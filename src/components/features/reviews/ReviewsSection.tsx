// src/components/features/reviews/ReviewsSection.tsx
'use client'

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  source: string;
  quote: string;
  stars?: number;
  logo?: string;
  award?: string;
  readMoreLink?: string;
}

interface ReaderReview {
  author: string;
  quote: string;
  stars: number;
  source: string;
  date: string;
  isVerified?: boolean;
}

interface ReviewsSectionProps {
  editorialReviews: Review[];
  readerReviews: ReaderReview[];
}

const ReaderReviewCarousel = ({ reviews }: { reviews: ReaderReview[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [xPosition, setXPosition] = useState(0);
  
    const handleNext = () => {
      if (currentIndex < reviews.length - 3) {
        const newPosition = xPosition - 33.33;
        setXPosition(newPosition);
        setCurrentIndex(prev => prev + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentIndex > 0) {
        const newPosition = xPosition + 33.33;
        setXPosition(newPosition);
        setCurrentIndex(prev => prev - 1);
      }
    };
  
    return (
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `${xPosition}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0 flex-grow-0 basis-1/3">
                <ReaderReview review={review} />
              </div>
            ))}
          </motion.div>
        </div>
  
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
  
        <button
          onClick={handleNext}
          disabled={currentIndex === reviews.length - 3}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
  
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: reviews.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setXPosition(-index * 33.33);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'
        }`}
      />
    ))}
  </div>
);

const EditorialReview = ({ review }: { review: Review }) => (
  <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex gap-8">
      {review.logo && (
        <div className="flex-shrink-0 w-32">
          <img 
            src={review.logo} 
            alt={`${review.source} logo`}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
      
      <div className="flex-grow">
        <blockquote className="mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">"{review.quote}"</p>
          {review.readMoreLink && (
            <Link href={review.readMoreLink} className="text-orange-400 hover:text-orange-500 mt-2 inline-block">
              Read more...
            </Link>
          )}
        </blockquote>
        <div className="flex items-center justify-between">
          <cite className="text-gray-900 font-medium not-italic">—{review.source}</cite>
          {review.stars && <StarRating rating={review.stars} />}
        </div>
      </div>

      {review.award && (
        <div className="flex-shrink-0 w-24">
          <img 
            src={review.award} 
            alt={`${review.source} award`}
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  </div>
);

const ReaderReview = ({ review }: { review: ReaderReview }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4">
      <StarRating rating={review.stars} />
    </div>
    <blockquote className="mb-4">
      <p className="text-gray-700 text-sm leading-relaxed">"{review.quote}"</p>
    </blockquote>
    <div className="text-sm text-gray-600">
      <div className="font-medium text-gray-900">{review.author}</div>
      <div className="flex items-center gap-2 mt-1">
        {review.isVerified && (
          <span className="text-green-600 text-xs">Verified Purchase</span>
        )}
        <span className="text-gray-400">•</span>
        <span>{review.source}</span>
        <span className="text-gray-400">•</span>
        <span>{review.date}</span>
      </div>
    </div>
  </div>
);

export default function ReviewsSection({ editorialReviews, readerReviews }: ReviewsSectionProps) {
  return (
    <div className="space-y-16">
      <div>
        <h2 className="text-3xl font-light mb-12 text-center text-gray-900">
          Editorial Reviews
        </h2>
        <div className="grid gap-8">
          {editorialReviews.map((review, index) => (
            <EditorialReview key={index} review={review} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-light mb-8 text-center text-gray-900">
          Reader Reviews
        </h3>
        <ReaderReviewCarousel reviews={readerReviews} />
      </div>
    </div>
  );
}