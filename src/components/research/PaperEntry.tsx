// src/components/research/PaperEntry.tsx
import React from 'react';
import { FileText, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Card from '@/components/ui/Card';

interface PaperEntryProps {
  title: string;
  status: {
    type: 'preprint' | 'published' | 'under-review';
    location: string;
    date: string;
  };
  abstract: string;
  keywords: string[];
  doi?: string;
  slug: string;
}

export default function PaperEntry({
  title,
  status,
  abstract,
  keywords,
  doi,
  slug
}: PaperEntryProps) {
  const getStatusDisplay = () => {
    switch (status.type) {
      case 'preprint':
        return `Preprint on ${status.location}`;
      case 'published':
        return `Published in ${status.location}`;
      case 'under-review':
        return `Under Review at ${status.location}`;
    }
  };

  return (
    <div className="group">
      <Card className="hover:shadow-md transition-shadow">
        <div className="flex items-start gap-4">
          <div className="hidden md:flex p-3 bg-gray-50 rounded-md">
            <FileText className="w-6 h-6 text-gray-400" />
          </div>
          <div className="flex-1">
            <Link 
              href={`/research/papers/${slug}`}
              className="block"
            >
              <h3 className="text-xl font-normal text-gray-900 mb-2 group-hover:text-blue-600">{title}</h3>
            </Link>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
              <span>{getStatusDisplay()}</span>
              <span>•</span>
              <span>{status.date}</span>
              {doi && (
                <>
                  <span>•</span>
                  <a 
                    href={`https://doi.org/${doi}`}
                    className="flex items-center hover:text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    DOI <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </>
              )}
            </div>
            <p className="text-gray-700 mb-4">{abstract}</p>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span 
                  key={keyword}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <Link 
            href={`/research/papers/${slug}`}
            className="block mt-1"
          >
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
          </Link>
        </div>
      </Card>
    </div>
  );
}