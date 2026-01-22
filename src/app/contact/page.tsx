// src/app/contact/page.tsx

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageSquare, Calendar, Mail, Newspaper, Camera, ArrowRight } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import { Toast } from "@/components/ui/Toast";
import NewsletterModal from "@/components/ui/NewsletterModal";
import { Turnstile } from '@marsidev/react-turnstile'

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "general",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');

  const inquiryTypes = [
    { value: "general", label: "General Inquiry"},
    { value: "media", label: "Media Request"},
    { value: "research", label: "Research"},
    { value: "newsletter", label: "Newsletter"},
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/main-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        ...formData,
        turnstileToken  // ← Add this
      }),
      });
      if (!response.ok) throw new Error("Failed to send message");
      
      setToastMessage("Message sent successfully.");
      setShowToast(true);
      setFormData({ name: "", email: "", inquiryType: "general", subject: "", message: "" });
      setTurnstileToken('');  // ← Add this
    } catch (error) {
      setToastMessage("Failed to send. Please try again.");
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          
          <motion.header className="mb-20 text-center md:text-left" {...fadeIn}>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">
              Correspondence
            </span>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Contact</h1>
            <p className="mt-8 text-[17px] text-gray-500 font-serif italic max-w-xl leading-relaxed">
              I'd love to hear from you. Questions, collaborations, and conversations are all welcome. Fill out the form below to get in touch.
            </p>
          </motion.header>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Name & Email Group */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50/50 border-b-2 border-gray-100 focus-within:border-gray-900 focus-within:bg-gray-50 transition-all px-4 py-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Name</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleInputChange} required
                    className="w-full bg-transparent text-gray-900 focus:outline-none text-base py-1"
                  />
                </div>
                <div className="bg-gray-50/50 border-b-2 border-gray-100 focus-within:border-gray-900 focus-within:bg-gray-50 transition-all px-4 py-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Email</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleInputChange} required
                    className="w-full bg-transparent text-gray-900 focus:outline-none text-base py-1"
                  />
                </div>
              </div>

              {/* Inquiry Type & Subject Group */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50/50 border-b-2 border-gray-100 focus-within:border-gray-900 focus-within:bg-gray-50 transition-all px-4 py-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Inquiry Type</label>
                  <div className="relative">
                    <select
                      name="inquiryType" value={formData.inquiryType} onChange={handleInputChange}
                      className="w-full bg-transparent text-gray-900 focus:outline-none text-base py-1 appearance-none cursor-pointer"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="bg-gray-50/50 border-b-2 border-gray-100 focus-within:border-gray-900 focus-within:bg-gray-50 transition-all px-4 py-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Subject</label>
                  <input
                    type="text" name="subject" value={formData.subject} onChange={handleInputChange} required
                    className="w-full bg-transparent text-gray-900 focus:outline-none text-base py-1"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="bg-gray-50/50 border-b-2 border-gray-100 focus-within:border-gray-900 focus-within:bg-gray-50 transition-all px-4 py-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Message</label>
                <textarea
                  name="message" value={formData.message} onChange={handleInputChange} required rows={5}
                  className="w-full bg-transparent text-gray-900 focus:outline-none text-base py-1 resize-none"
                />
              </div>

              {/* Turnstile */}
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={(token) => setTurnstileToken(token)}
                onExpire={() => setTurnstileToken('')}
                options={{
                  appearance: 'interaction-only'
                }}
              />

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit" disabled={isSubmitting}
                  className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 transition-all hover:gap-6"
                >
                  <Send size={14} className={isSubmitting ? "animate-pulse" : ""} />
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Social Media */}
          <motion.section 
            className="mt-20 pt-8 border-t border-gray-100"
            {...fadeIn}
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
              Social Media Protocol
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-tight">Outreach & Broadcast</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  My presence on <strong><a href="https://x.com/oreliosattari" target="_blank" className="hover:text-gray-400 hover:border-gray-400 transition-colors">X</a></strong> and <strong>Facebook</strong> is strictly for the distribution of new research and publications. I do not monitor these platforms for direct messages or personal engagement.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-tight">Personal</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  For a peek into my private world, <strong>Instagram Stories</strong> is the only digital space where I remain active. 
                </p>
                <a 
                  href="https://instagram.com/oreliosattari"
                  target="_blank"
                  className="inline-block mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>
          </motion.section>

          {/* Unified Footer CTA */}
          <motion.footer className="mt-20 pt-8 border-t border-gray-50 text-center" {...fadeIn}>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 block">Newsletter</h2>
            <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
              Essays on first principles, insights on living better, and updates on coming events and publications.
            </p>
            <button
              onClick={() => setIsNewsletterOpen(true)}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
            >
              Subscribe
            </button>
          </motion.footer>

        </div>
        {showToast && <Toast message={toastMessage} />}
        <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
      </div>
    </PageTransition>
  );
}