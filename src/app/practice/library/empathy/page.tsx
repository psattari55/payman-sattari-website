"use client";

import React from "react";
import { Heart } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import Section from "@/components/ui/Section";

export default function EmpathyPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <Section width="default" className="pt-24 pb-16">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="mb-8 border-b border-gray-200 pb-7">
              <h1 className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-3">
                <Heart className="w-8 h-8 text-rose-600" strokeWidth={2} />
                Empathy
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700">
                Empathy is the force that allows us to know the inner reality of another. Through empathy, we move from a discrete state into a continuous one, transcending personal boundaries to experience unity with something greater than ourselves.
              </p>
            </div>
          </div>

          {/* The Nature of Empathy */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-normal mb-6 text-gray-900">The Nature of Empathy</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                To understand empathy, consider the difference between the continuous and the discrete. While boundaries define edges and limits—the discrete aspects of reality—empathy allows us to merge more seamlessly with what surrounds us. It is the force through which we can experience the inwardness of another being, whether person, animal, or even the living presence of a tree or landscape.
              </p>
              
              <p>
                Unlike boundaries, which work with outer realities and help us know limits and edges, empathy is an inner force. It enables us to know the essence or heart of something—its inner reality. This capacity for inner knowing forms the foundation of genuine relationship and understanding.
              </p>

              <p>
                As boundaries allow us to experience ourselves as individuals, empathy enables us to transcend those personal limits and experience unity with something greater. This experience of unity—what some call love—represents the expression of limitlessness. Empathy, then, is love in action: the practical capacity to move beyond our individual boundaries and connect with the inner life of another.
              </p>
            </div>
          </div>

          {/* Key Principles section */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h2 className="text-xl font-normal mb-6 text-gray-900">Key Principles</h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full bg-rose-600 mt-2.5"></div>
                  <p className="text-gray-700">Empathy is the force that enables us to know and experience the inner reality of others.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full bg-rose-600 mt-2.5"></div>
                  <p className="text-gray-700">As an inner force, it complements boundaries' work with outer realities and limits.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full bg-rose-600 mt-2.5"></div>
                  <p className="text-gray-700">The rhythm between connection and differentiation mirrors natural cycles, like waves returning to shore.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full bg-rose-600 mt-2.5"></div>
                  <p className="text-gray-700">Balance between empathy and boundaries allows for both unity and healthy individuation.</p>
                </div>
              </div>
            </div>
          </div>

          </Section>
      </div>
    </PageTransition>
  );
}