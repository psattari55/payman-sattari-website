// src/components/insights/ConversationCard.tsx
'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface Message {
  speaker: {
    type: 'Orelio' | 'AI';
    name?: string;    // For AI type
    version?: string; // For AI type
  };
  content: React.ReactNode;
}

interface RelatedInsight {
  title: string;
  path: string;
}

interface Conversation {
  id: string;
  date: string;
  title: string;
  summary: string;
  themes: string[];
  messages: Message[];
  featured?: boolean;
  relatedInsights?: RelatedInsight[];
}

interface ConversationCardProps {
  conversation: Conversation;
  expanded: boolean;
  onToggle: () => void;
}

export default function ConversationCard({ 
  conversation, 
  expanded, 
  onToggle 
}: ConversationCardProps) {
  return (
    <motion.div 
      layout
      className={`bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 
        ${conversation.featured ? 'border-l-4 border-blue-500' : ''}`}
    >
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between text-gray-500 mb-6">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <time className="text-sm">
              {new Date(conversation.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {conversation.featured && (
              <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                Featured
              </span>
            )}
          </div>
          <div className="flex gap-2">
            {conversation.themes.map(theme => (
              <span 
                key={theme}
                className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-full"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>

        {/* Title and Summary */}
        <div className="mb-6">
          <h2 className="text-xl font-light text-gray-900 mb-3">
            {conversation.title}
          </h2>
          <p className="text-gray-600">{conversation.summary}</p>
        </div>

        {/* Expandable Conversation */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-6">
                {conversation.messages.map((message, index) => (
                  <div 
                    key={index}
                    className={`flex ${message.speaker.type === 'AI' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-4 rounded-lg ${
                        message.speaker.type === 'AI' 
                          ? 'bg-gray-50' 
                          : 'bg-blue-50'
                      }`}
                    >
                      <div className="text-sm text-gray-500 mb-2">
                        {message.speaker.type === 'Orelio' 
                          ? 'Orelio Sattari'
                          : `${message.speaker.name}${message.speaker.version ? ` ${message.speaker.version}` : ''}`
                        }
                      </div>
                      <div className="prose prose-sm max-w-none">
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Related Insights */}
              {conversation.relatedInsights && conversation.relatedInsights.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen size={16} />
                    Related Insights
                  </h3>
                  <div className="space-y-2">
                    {conversation.relatedInsights.map((insight) => (
                      <Link
                        key={insight.path}
                        href={insight.path}
                        className="text-sm text-blue-600 hover:text-blue-700 block"
                      >
                        {insight.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand/Collapse button */}
        <button 
          onClick={onToggle}
          className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          {expanded ? (
            <>
              <span className="text-sm">Show less</span>
              <ChevronUp size={16} />
            </>
          ) : (
            <>
              <span className="text-sm">Read conversation</span>
              <ChevronDown size={16} />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}