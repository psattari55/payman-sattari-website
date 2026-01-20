// src/components/writing/ShareModal.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Facebook, Linkedin, Mail, Link as LinkIcon, Check } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export function ShareModal({ isOpen, onClose, url, title }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // ESC key to close modal

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

  document.addEventListener('keydown', handleEscape);
  return () => document.removeEventListener('keydown', handleEscape);
}, [isOpen]); // Remove onClose from deps

  // Share URLs logic (Same as your existing logic)
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
  };

const copyToClipboard = async () => {
    // 1. Check if the modern API exists
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return; // Exit if successful
      } catch (err) {
        console.error('Modern copy failed:', err);
      }
    }

    // 2. Fallback for non-secure contexts (like mobile test environment)
    try {
      const textArea = document.createElement("textarea");
      textArea.value = url;
      // Ensure the textarea is off-screen
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Fallback copy failed:', err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.99, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.99, y: 5 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-sm bg-white shadow-2xl flex flex-col md:flex-row"
          >
            {/* Left Column: The "Monograph" Anchor */}
            <div className="hidden md:flex w-1/3 bg-gray-900 p-10 flex-col justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                Correspondence
              </span>
              <div className="space-y-4">
                <span className="text-3xl text-white/90 font-serif italic block tracking-tight">Share</span>
                <p className="text-[10px] leading-relaxed text-white/40 uppercase tracking-[0.2em]">
                  Extend the conversation.
                </p>
              </div>
            </div>

            {/* Right Column: Actions */}
            <div className="flex-1 p-10 md:p-14 relative">
              <button
                onClick={onClose}
                className="absolute right-8 top-8 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X size={18} strokeWidth={1.2} />
              </button>

              {/* Essay Title: Keeping it Classy but clear */}
              <div className="mb-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-3 block">
                  Essay Title
                </span>
                <h2 className="text-xl font-bold text-gray-900 tracking-tight leading-snug">
                  {title}
                </h2>
              </div>

              {/* Permanent URL: Your favorite part */}
              <div className="mb-12">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-3">
                  Permanent Link
                </label>
                <div className="flex items-center gap-4 border-b border-gray-100 pb-2 focus-within:border-gray-900 transition-colors">
                  <input
                    readOnly
                    value={url}
                    className="flex-1 bg-transparent text-xs text-gray-500 focus:outline-none overflow-hidden text-ellipsis"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="shrink-0 text-[10px] font-black uppercase tracking-widest text-gray-900 hover:text-gray-400 transition-colors flex items-center gap-2"
                  >
                    {copied ? <Check size={12} className="text-gray-900" /> : <LinkIcon size={12} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Four-Icon Grid: Tight, Balanced, and Visible */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-10">
                {[
                  { name: 'X', url: shareUrls.x, icon: (props: any) => (
                    <svg {...props} width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )},
                  { name: 'Facebook', url: shareUrls.facebook, icon: Facebook },
                  { name: 'LinkedIn', url: shareUrls.linkedin, icon: Linkedin },
                  { name: 'Email', url: shareUrls.email, icon: Mail },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <platform.icon size={16} strokeWidth={1.5} className="text-gray-300 group-hover:text-gray-900 transition-colors" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors">
                      {platform.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}