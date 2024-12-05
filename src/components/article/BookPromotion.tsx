'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import InteractiveLink from '@/components/ui/InteractiveLink';

interface BookPromotionProps {
  coverImage: string;
  title: string;
  description: string;
  learnMoreHref?: string;
  buyHref?: string;
}

export default function BookPromotion({ 
  coverImage,
  title,
  description,
  learnMoreHref = "/books/science-of-energy",
  buyHref = "https://www.amazon.com/dp/B0CPC9CBJ2"
}: BookPromotionProps) {
  return (
    <motion.div 
      className="bg-white border border-gray-200 rounded-lg p-6"
      whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex gap-6">
        <div className="w-1/3 relative">
          <Image 
            src={coverImage}
            alt={`${title} Book Cover`}
            width={150}
            height={240}
            sizes="150px"
            className="w-full rounded-sm shadow-sm"
          />
        </div>
        <div className="w-2/3 space-y-3">
          <h3 className="text-lg font-normal text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">
            {description}
          </p>
          <div className="flex gap-2">
            <InteractiveLink 
              href={learnMoreHref}
              className="text-sm"
            >
              Learn More
            </InteractiveLink>
            <span className="text-gray-300">|</span>
            <InteractiveLink 
              href={buyHref}
              className="text-sm text-blue-600"
            >
              Buy Now
            </InteractiveLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
}