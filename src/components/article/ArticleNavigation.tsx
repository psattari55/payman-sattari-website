// src/components/article/ArticleNavigation.tsx
'use client'

import { Eye, BookOpen, Lightbulb, CircleDot } from 'lucide-react';
import InteractiveLink from '@/components/ui/InteractiveLink';
import Link from 'next/link';

interface ArticleNavigationProps {
  previous?: {
    title: string;
    href: string;
  };
  next?: {
    title: string;
    href: string;
  };
  door?: string;
}

const getDoorStyles = (door: string) => {
  switch (door) {
    case "Scholar's Door":
      return {
        bgColor: 'bg-gray-50',
        icon: BookOpen,
        text: "Scholar's Door",
        href: "/scholars-door",
        hoverColor: "hover:text-emerald-600"
      };
    case "Observer's Door":
      return {
        bgColor: 'bg-gray-50',
        icon: Eye,
        text: "The Observer's Road",
        href: "/observers-door",
        hoverColor: "hover:text-blue-600"
      };
    case "Practitioner's Door":
      return {
        bgColor: 'bg-gray-50',
        icon: Lightbulb,
        text: "Practitioner's Road",
        href: "/practitioners-door",
        hoverColor: "hover:text-amber-600"
      };
    default:
      return {
        bgColor: 'bg-gray-50',
        icon: CircleDot,
        text: "Continue Reading",
        href: "#",
        hoverColor: "hover:text-gray-600"
      };
  }
};

export default function ArticleNavigation({ previous, next, door = "Observer's Door" }: ArticleNavigationProps) {
  const doorStyle = getDoorStyles(door);
  const Icon = doorStyle.icon;
  
  return (
    <div className="rounded-lg border border-gray-200">
      <Link href={doorStyle.href} className="block">
        <div className={`px-6 py-4 ${doorStyle.bgColor} border-b border-gray-200 group cursor-pointer`}>
          <div className="flex items-center gap-3">
            <Icon 
              className="w-5 h-5 text-gray-600"
              strokeWidth={1.5}
            />
            <h3 className={`text-lg font-medium text-gray-800 transition-colors duration-200 ${doorStyle.hoverColor}`}>
              {doorStyle.text}
            </h3>
          </div>
        </div>
      </Link>
      <div className="bg-white p-6 space-y-6">
        {previous && (
          <div className="text-sm">
            <p className="text-gray-500 mb-2">Previous</p>
            <InteractiveLink href={previous.href} className={`text-gray-900 ${doorStyle.hoverColor}`}>
              {previous.title}
            </InteractiveLink>
          </div>
        )}
        {next && (
          <div className="text-sm">
            <p className="text-gray-500 mb-2">Next</p>
            <InteractiveLink href={next.href} className={`text-gray-900 ${doorStyle.hoverColor}`}>
              {next.title}
            </InteractiveLink>
          </div>
        )}
      </div>
    </div>
  );
}