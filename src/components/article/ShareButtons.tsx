// src/components/article/ShareButtons.tsx
'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiLink, HiMail } from 'react-icons/hi';
import { Toast } from '@/components/ui/Toast';

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const shareButtons = [
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-5 h-5 text-[#1DA1F2]" />,
      shareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />,
      shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="w-5 h-5 text-[#1877F2]" />,
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
    },
    {
      name: 'Email',
      icon: <HiMail className="w-5 h-5 text-gray-600" />,
      shareUrl: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(window.location.href)}`
    },
    {
      name: 'Copy Link',
      icon: <HiLink className="w-5 h-5 text-gray-600" />,
      onClick: copyToClipboard
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 bg-stone-100 border-b border-gray-200">
        <h3 className="text-lg font-normal text-gray-800">Share This Article</h3>
      </div>
      <div className="p-6">
        <div className="flex gap-4">
          {shareButtons.map((item) => (
            <motion.button
              key={item.name}
              onClick={item.onClick || (() => window.open(item.shareUrl, '_blank'))}
              className="p-2 rounded-full hover:bg-stone-50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={item.name === 'Copy Link' ? 'Copy link to article' : `Share on ${item.name}`}
            >
              {item.icon}
            </motion.button>
          ))}
        </div>
      </div>
      {showToast && <Toast message="Link copied to clipboard!" />}
    </div>
  );
}