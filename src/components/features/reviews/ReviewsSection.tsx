// src/components/features/reviews/ReviewsSection.tsx
"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"
        }`}
      />
    ))}
  </div>
);

const EditorialReview = ({ review }: { review: Review }) => (
  <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
    {/* Review Header - Logo and/or Award */}
    <div className="flex items-center justify-between mb-4 md:mb-6">
      {review.logo && (
        <Image
          src={review.logo}
          alt={`${review.source} logo`}
          width={120}
          height={48}
          className="h-16 w-auto"
        />
      )}
      {review.award && (
        <Image
          src={review.award}
          alt={`${review.source} award`}
          width={160}
          height={56}
          className="h-12 md:h-14 w-auto"
        />
      )}
    </div>

    {/* Review Content */}
    <blockquote className="mb-4">
      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        "{review.quote}"
      </p>
    </blockquote>

    {/* Review Footer */}
    <div className="flex items-center justify-between">
      <cite className="text-gray-900 font-medium not-italic">
        —{review.source}
      </cite>
      {review.stars && <StarRating rating={review.stars} />}
    </div>
  </div>
);

const ReaderReviewCard = ({ review }: { review: ReaderReview }) => (
  <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow h-full">
    <StarRating rating={review.stars} />
    <blockquote className="my-3 md:my-4">
      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
        "{review.quote}"
      </p>
    </blockquote>
    <div className="text-sm">
      <div className="font-medium text-gray-900">{review.author}</div>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-xs md:text-sm text-gray-600">
        {review.isVerified && (
          <span className="text-green-600">Verified Purchase</span>
        )}
        <span>{review.source}</span>
        <span>{review.date}</span>
      </div>
    </div>
  </div>
);

const ReaderReviewsGrid = ({ reviews }: { reviews: ReaderReview[] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = { mobile: 2, desktop: 3 };
  const totalPages = Math.ceil(reviews.length / reviewsPerPage.desktop);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        
        {/* Mobile View */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage} // This is important - it triggers the animation on page change
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {reviews
                .slice(
                  currentPage * reviewsPerPage.mobile,
                  currentPage * reviewsPerPage.mobile + reviewsPerPage.mobile
                )
                .map((review, idx) => (
                  <ReaderReviewCard
                    key={`${review.author}-${idx}`}
                    review={review}
                  />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {reviews
                .slice(
                  currentPage * reviewsPerPage.desktop,
                  currentPage * reviewsPerPage.desktop + reviewsPerPage.desktop
                )
                .map((review, idx) => (
                  <ReaderReviewCard
                    key={`${review.author}-${idx}`}
                    review={review}
                  />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: Math.ceil(reviews.length / 2) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            className={`md:hidden w-2 h-2 rounded-full transition-colors ${
              currentPage === idx ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
        {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            className={`hidden md:block w-2 h-2 rounded-full transition-colors ${
              currentPage === idx ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function ReviewsSection({
  editorialReviews,
  readerReviews,
}: ReviewsSectionProps) {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Editorial Reviews */}
      <div>
        <h2 className="text-2xl md:text-3xl font-light mb-6 md:mb-12 text-center text-gray-900">
          Editorial Reviews
        </h2>
        <div className="grid gap-6 md:gap-8">
          {editorialReviews.map((review, index) => (
            <EditorialReview key={index} review={review} />
          ))}
        </div>
      </div>

      {/* Reader Reviews */}
      <div>
        <h2 className="text-xl md:text-2xl font-light mb-6 md:mb-8 text-center text-gray-900">
          Reader Reviews
        </h2>
        <ReaderReviewsGrid reviews={readerReviews} />
      </div>
    </div>
  );
}
