"use client";

import React from "react";
import { Shield } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import Section from "@/components/ui/Section";
import { Heart, Eye, Orbit, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BoundariesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <Section width="default" className="pt-12 md:pt-24 pb-16">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="mb-8 border-b border-gray-200 pb-7">
              <h1 className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-3">
                <Shield className="w-8 h-8 text-purple-600" strokeWidth={2} />
                Boundaries
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700">
                Boundaries are limits put into practice. They form the edges of
                our being, defining where we end and others begin. Through
                boundaries, we gain definition in the world while maintaining
                our capacity for connection and understanding.
              </p>
            </div>
          </div>

          {/* After the introduction, before "The Nature of Boundaries" */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h2 className="text-xl font-normal mb-6 text-gray-900">
                Key Principles
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full bg-purple-600 mt-2.5"></div>
                  <p className="text-gray-700">
                    Boundaries are fundamental forces that give definition to
                    being, not just psychological constructs.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full bg-purple-600 mt-2.5"></div>
                  <p className="text-gray-700">
                    The first and most essential boundary work happens within
                    ourselves through inner awareness.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full bg-purple-600 mt-2.5"></div>
                  <p className="text-gray-700">
                    Boundaries and empathy work together as complementary
                    forces, enabling both individuation and connection.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full bg-purple-600 mt-2.5"></div>
                  <p className="text-gray-700">
                    Development of boundaries is a gradual process of
                    recognizing, respecting, and maintaining natural limits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Nature of Boundaries */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-normal mb-6 text-gray-900">
              The Nature of Boundaries
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Imagine each human being as a cell in the body, possessed of a
                permeable membrane that determines what passes through and what
                remains outside. This cell wall, in human terms, is our
                energetic field—the invisible yet tangible space that surrounds
                us. Its strength corresponds to our ability to say yes to what
                serves us and no to what doesn't.
              </p>

              <p>
                When we say yes to something, we declare it has a right to pass
                through into our field. When we say no, we determine it must
                remain outside. These simple words—yes and no—act as filters,
                governing what energies move between our inner and outer
                realities. The clarity and conviction with which we express them
                directly reflects the integrity of our boundaries.
              </p>

              <p>
                This question of what belongs to us and what doesn't leads us to
                sovereignty—the recognition of what is truly our own. Our body,
                our experiences, our feelings: these belong to us alone. They
                form our sovereign space, responding to our consciousness and
                existing within our domain of responsibility. Similarly, others'
                bodies, thoughts, and experiences belong to them. This basic
                recognition forms the foundation for healthy boundaries.
              </p>
            </div>
          </div>

          {/* The Inner Dimension */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-normal mb-6 text-gray-900">
              The Inner Dimension
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                While boundaries may seem primarily about our relationships with
                others, the first and most essential boundary work happens
                within ourselves. This internal work begins with developing the
                capacity to recognize our own limits—those points where we
                naturally feel something has gone too far or where we begin to
                feel uncomfortable.
              </p>

              <p>
                These internal signals often manifest as a sense of discomfort
                or a desire to withdraw, yet we frequently override them. We
                might do this because we've been taught to endure violation in
                certain relationships, or because past experiences have left us
                feeling unworthy of protecting our space. Sometimes, we simply
                haven't developed the capacity to honor our own limits.
              </p>

              <p>
                Recognizing these signals requires intimate knowledge of our
                inner space. Through consistent practice of inner awareness, we
                develop the ability to notice when our limits are being crossed
                and, more importantly, to respect these natural boundaries. This
                internal respect forms the foundation for all external boundary
                work.
              </p>
            </div>
          </div>

          {/* Boundaries and Empathy */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-normal mb-6 text-gray-900">
              Boundaries and Empathy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Boundaries and empathy form natural complementary forces. While
                boundaries allow us to experience our individuality and
                uniqueness, empathy enables us to transcend our personal limits
                and connect with something greater than ourselves. This
                relationship reflects a fundamental truth about reality—the
                dance between limits and limitlessness that we see throughout
                the cosmos.
              </p>

              <p>
                When boundaries become too rigid without sufficient empathy, we
                risk becoming isolated, like an island cut off from the
                mainland. Conversely, when empathy operates without clear
                boundaries, we may lose our sense of self, unable to distinguish
                between our experiences and those of others. The goal is not to
                elevate one force above the other, but to understand their
                relationship and how they work together.
              </p>

              <p>
                At its highest expression, this balance allows us to maintain
                clear definition of self while remaining deeply connected to
                others and the world around us. Our boundaries become not walls
                of separation, but points of conscious contact—places where we
                can both maintain our integrity and engage in meaningful
                exchange.
              </p>
            </div>
          </div>

          {/* Recognition and Development */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-normal mb-6 text-gray-900">
              Recognition and Development
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                As we begin to work consciously with boundaries, we encounter
                several natural stages of development. Initially, we may swing
                between extremes—being too permissive at times and too rigid at
                others. This oscillation is a normal part of learning to
                recognize and respect our natural limits.
              </p>

              <div className="bg-white p-6 rounded-lg border border-gray-100 my-8">
                <h3 className="text-xl font-medium mb-4">Common Challenges</h3>
                <p className="text-gray-800 mb-6">
                  Boundary work often brings us face to face with anger and
                  guilt. Anger may arise as we recognize patterns of
                  self-denial, while guilt can surface when we begin to put
                  ourselves first. Both emotions are natural signals in this
                  process, highlighting areas that need attention and
                  integration.
                </p>

                <p className="text-gray-800">
                  External resistance is also common, particularly from those
                  accustomed to our previous patterns. This resistance typically
                  fades as new boundaries become established, but the transition
                  period requires patience and consistency.
                </p>
              </div>

              <p>
                The development of healthy boundaries is inseparable from the
                development of consciousness itself. As we become more aware of
                our inner signals and more respectful of our natural limits, we
                simultaneously develop greater capacity for genuine connection
                and understanding.
              </p>

              <p>
                In its mature form, boundary work evolves beyond mere protection
                into conscious cultivation of space—both our own and that of
                others. We learn to maintain our limits not from fear or anger,
                but from a clear recognition of what truly belongs to us and
                what doesn't. This clarity allows us to engage more fully with
                life while maintaining our essential integrity.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700">
                Working with boundaries is a fundamental aspect of conscious
                development. Through this practice, we learn not just to protect
                ourselves, but to create the conditions for genuine growth and
                connection. As we develop this capacity, we contribute to a
                larger field of consciousness where both individual sovereignty
                and collective harmony can flourish.
              </p>
            </div>
          </div>

          {/* Practice Navigation */}
          <div className="mt-24 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-normal mt-2 mb-8 text-gray-900">
              Explore Other Practices
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <Link href="/practice/library/empathy" className="block p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
                      <Heart className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-2">
                    Empathy
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Understand and connect with realities beyond your personal
                    boundaries while maintaining your center.
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
                    Understand how to map and work with your inner reality.
                  </p>
                </Link>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <Link href="/practice/library/meditation" className="block p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Orbit className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-2">
                    Meditation
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Develop the presence and awareness needed to recognize and
                    work with your inner space.
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
