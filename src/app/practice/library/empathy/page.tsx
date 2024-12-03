"use client";

import React from "react";
import PageTransition from "@/components/ui/PageTransition";
import Section from "@/components/ui/Section";
import { Heart, Shield, Eye, Orbit, ArrowRight } from "lucide-react";
import Link from "next/link";

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

          {/* The Natural Rhythm */}
<div className="max-w-3xl mx-auto mb-16">
  <h2 className="text-2xl font-normal mb-6 text-gray-900">The Natural Rhythm</h2>
  <div className="prose prose-lg max-w-none">
    <p>
      Like a wave that reaches out to touch the shore before drawing back to the ocean, empathy follows a natural rhythm of connection and differentiation. This movement between unity and individuation isn't random but reflects a fundamental pattern in nature—the continuous dance between merging and distinction.
    </p>
    
    <p>
      When we enter into another's inner reality, we temporarily loosen the boundaries of our individual self. This loosening allows us to experience their inner world directly, moving from our usual discrete state into a more continuous one. Yet just as the wave must return to the ocean, we must also return to our individual self, bringing with us the understanding gained through connection while releasing any lingering entanglement.
    </p>

    <p>
      This rhythm requires both the ability to merge and the capacity to differentiate. Neither state is superior to the other; both are essential aspects of the whole. Understanding this helps us avoid the common misconception that unity or dissolution is somehow more noble or holy than individual existence.
    </p>
  </div>
</div>

{/* Working with Empathy */}
<div className="max-w-3xl mx-auto mb-16">
  <h2 className="text-2xl font-normal mb-6 text-gray-900">Working with Empathy</h2>
  <div className="prose prose-lg max-w-none">
    <p>
      Working consciously with empathy requires attention to several key elements. First is the recognition that entering another's inner reality requires both permission and purpose. This isn't merely an ethical consideration but a practical one—conscious engagement allows for clearer understanding and easier disentanglement afterward.
    </p>

    <div className="bg-white p-6 rounded-lg border border-gray-100 my-8">
      <h3 className="text-xl font-medium mb-4">Common Challenges</h3>
      <p className="text-gray-800 mb-6">
        One primary challenge in working with empathy is the risk of merging too deeply with another's experience. This can manifest as taking on others' pain or challenges as our own, or using empathy as an escape from our personal difficulties. Sometimes it's easier to focus on others' experiences than to face our own.
      </p>
      
      <p className="text-gray-800">
        Just as unbalanced boundaries can lead to anger, excessive empathy without sufficient boundaries often results in sadness or a loss of self. This isn't a failure of empathy but rather a signal that we need to restore balance.
      </p>
    </div>

    <p>
      The practice of empathy includes learning to recognize when we've merged too deeply and developing the capacity to consciously disentangle ourselves. This means deliberately reconnecting with our own energy and releasing any threads that keep us bound to another's experience.
    </p>
  </div>
</div>

{/* Balance and Integration */}
<div className="max-w-3xl mx-auto mb-16">
  <h2 className="text-2xl font-normal mb-6 text-gray-900">Balance and Integration</h2>
  <div className="prose prose-lg max-w-none">
    <p>
      True mastery of empathy isn't about maintaining constant connection but about developing the ability to move consciously between states of connection and differentiation. This requires equal facility with both empathy and boundaries—the capacity to merge and connect balanced with the ability to distinguish and differentiate.
    </p>

    <p>
      When we align ourselves with this natural rhythm, we begin to experience a deeper harmony with the fundamental laws of being. We become equally comfortable with unity and distinction, able to experience the fullness of connection while maintaining the integrity of our individual self.
    </p>

    <p>
      Through this conscious practice, empathy becomes not just a way of knowing others but a path to understanding the very nature of reality itself. We learn to dance with the fundamental forces of unity and distinction, experiencing directly how these complementary energies work together to create the rich tapestry of existence.
    </p>
  </div>
</div>

{/* Closing */}
<div className="max-w-3xl mx-auto mb-16">
  <div className="prose prose-lg max-w-none">
    <p className="text-xl text-gray-700">
      Working with empathy reveals the profound interconnection between individual existence and universal unity. As we develop our capacity to move consciously between connection and differentiation, we align ourselves with the natural rhythms that govern all of reality. Through this practice, we learn not just to understand others, but to participate more fully in the fundamental dance of existence itself.
    </p>
  </div>
</div>

{/* Practice Navigation */}
<div className="pt-8 border-t border-gray-200">
  <h2 className="text-2xl font-normal mt-2 mb-8 text-gray-900">
    Explore Other Practices
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <Link href="/practice/library/boundaries" className="block p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </div>
        <h3 className="text-xl font-normal text-gray-900 mb-2">
          Boundaries
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Learn to recognize and maintain healthy limits while preserving the capacity for connection.
        </p>
      </Link>
    </div>

    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <Link href="/practice/inner-work" className="block p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Eye className="w-5 h-5" />
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </div>
        <h3 className="text-xl font-normal text-gray-900 mb-2">
          Inner Work
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Develop the foundation of inner awareness needed for conscious development.
        </p>
      </Link>
    </div>

    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <Link href="/practice/library/meditation" className="block p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <Orbit className="w-5 h-5" />
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </div>
        <h3 className="text-xl font-normal text-gray-900 mb-2">
          Meditation
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Learn to look inward and develop presence with your inner experience.
        </p>
      </Link>
    </div>
  </div>
</div>

          </Section>
      </div>
    </PageTransition>
  );
}