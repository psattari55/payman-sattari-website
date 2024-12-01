// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MessageSquare,
  Calendar,
  Newspaper,
  Camera,
} from "lucide-react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Section from "@/components/ui/Section";
import PageTransition from "@/components/ui/PageTransition";
import { Toast } from "@/components/ui/Toast";

type InquiryType = "general" | "research" | "speaking" | "media" | "newsletter";

interface ContactFormData {
  name: string;
  email: string;
  inquiryType: InquiryType;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    inquiryType: "general",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: MessageSquare },
    { value: "research", label: "Research Collaboration", icon: Mail },
    { value: "speaking", label: "Speaking Request", icon: Calendar },
    { value: "media", label: "Media Inquiry", icon: Camera },
    { value: "newsletter", label: "Newsletter", icon: Newspaper },
  ];

  const socialLinks = [
    {
      href: "https://x.com/langoftruth",
      label: "X (Twitter)",
      icon: FaTwitter,
      color: "from-gray-600 to-gray-900",
      hoverColor: "group-hover:from-gray-700 group-hover:to-black",
    },
    {
      href: "https://www.instagram.com/the.language.of.truth",
      label: "Instagram",
      icon: FaInstagram,
      color: "from-purple-500 to-pink-500",
      hoverColor: "group-hover:from-purple-600 group-hover:to-pink-600",
    },
    {
      href: "https://www.facebook.com/thelanguageoftruth/",
      label: "Facebook",
      icon: FaFacebook,
      color: "from-blue-500 to-blue-600",
      hoverColor: "group-hover:from-blue-600 group-hover:to-blue-700",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setToastMessage("Message sent successfully!");
      setShowToast(true);
      setFormData({
        name: "",
        email: "",
        inquiryType: "general",
        subject: "",
        message: "",
      });
    } catch (error) {
      setToastMessage("Failed to send message. Please try again.");
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.header
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-normal mb-6 tracking-wide text-gray-900">
                Contact
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you're interested in research collaboration, speaking
                engagements, or have questions about my work, I'm here to
                connect. Please use the form below to get in touch.
              </p>
            </motion.header>

            <motion.div
              className="bg-white rounded-lg border border-gray-200 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Type of Inquiry
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-colors"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-colors"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-light text-center mb-8 text-gray-900">
                Connect on Social Media
              </h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full md:w-auto"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative overflow-hidden rounded-lg border border-gray-200 group-hover:border-transparent transition-colors duration-300">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${social.color} ${social.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />

                      <div className="relative p-6 flex flex-col items-center">
                        <span className="text-xl mb-2 text-gray-700 group-hover:text-white transition-colors duration-300">
                          {React.createElement(social.icon, {
                            className: "w-6 h-6",
                          })}
                        </span>
                        <span className="text-sm font-medium text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                          {social.label}
                        </span>

                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          initial={false}
                          animate={{
                            x: ["100%", "-100%"],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                        />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              ></motion.div>
            </motion.div>
          </div>
        </Section>
        {showToast && <Toast message={toastMessage} />}
      </div>
    </PageTransition>
  );
}
