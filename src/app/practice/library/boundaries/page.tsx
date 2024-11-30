// src/app/practice/library/boundaries/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import PageTransition from "@/components/ui/PageTransition";
import { Shield, Cell, Heart, ArrowRight } from "lucide-react"; // we'll use these icons throughout

interface PracticeSection {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

// These sections will help with navigation and structure
const sections: PracticeSection[] = [
  {
    id: "understanding",
    title: "Understanding Boundaries",
    description: "The fundamental nature of boundaries through the wisdom of cells",
    icon: Cell,
  },
  {
    id: "inner-work",
    title: "The Inner Foundation",
    description: "Recognizing and respecting your natural limits",
    icon: Shield,
  },
  {
    id: "practice",
    title: "Practical Implementation",
    description: "Working with yes and no as energy gatekeepers",
    icon: ArrowRight,
  },
  {
    id: "integration",
    title: "Higher Integration",
    description: "Balancing boundaries with empathy and connection",
    icon: Heart,
  },
];