// src/components/insights/InsightFooter.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Twitter, Link as LinkIcon, Mail, ArrowLeft } from 'lucide-react';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

interface InsightFooterProps {
  insight: {
    number: number;
    slug: string;
    axiom: string;
  };
}

export default function InsightFooter({ insight }: InsightFooterProps) {
  const [copied, setCopied] = useState(false);

  const insightUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/insights/${insight.slug}`;
  // Clean markdown italics for sharing text
  const cleanAxiom = insight.axiom.replace(/\*/g, '');
  const shareText = `"${cleanAxiom}"\n\n— P. Orelio Sattari`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(insightUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(insightUrl)}`;
    window.open(url, '_blank');
  };

  const shareLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(insightUrl)}`;
    window.open(url, '_blank');
  };

  const shareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(insightUrl)}`;
    window.open(url, '_blank');
  };

  const shareEmail = () => {
    const subject = `Insight #${insight.number} — P. Orelio Sattari`;
    const body = `${shareText}\n\nRead more: ${insightUrl}`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <footer className="mt-16 md:mt-12 pt-6 border-t border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        
        {/* Social Sharing */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mr-2">
            Share
          </span>
          <button
            onClick={shareTwitter}
            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-4 h-4" />
          </button>
          <button
            onClick={shareFacebook}
            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all"
            aria-label="Share on Facebook"
          >
            <FaFacebook className="w-4 h-4" />
          </button>
          <button
            onClick={shareLinkedIn}
            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </button>
          <button
            onClick={shareEmail}
            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all"
            aria-label="Share via Email"
          >
            <Mail className="w-4 h-4" />
          </button>
          <button
            onClick={copyLink}
            className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all relative"
            aria-label="Copy link"
          >
            <LinkIcon className="w-4 h-4" />
            {copied && (
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-white bg-gray-900 px-3 py-1.5 rounded-sm whitespace-nowrap">
                Copied
              </span>
            )}
          </button>
        </div>

        {/* Secondary Navigation */}
        <Link 
          href="/insights"
          className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
          Back to Index
        </Link>
      </div>
    </footer>
  );
}