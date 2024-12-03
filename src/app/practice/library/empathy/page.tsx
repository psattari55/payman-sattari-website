"use client";

import React from "react";
import { Heart, Eye, Orbit, Shield, ArrowRight } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import Section from "@/components/ui/Section";
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
                Empathy is love in action—the force that allows us to know,
                through direct experience, the inner reality of something beyond
                ourselves. Through empathy, we transcend personal boundaries to
                experience unity with something greater.
              </p>
            </div>
          </div>

          {/* Key Principles */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h2 className="text-xl font-normal mb-6 text-gray-900">
                Key Principles
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full bg-rose-600 mt-2.5"></div>
                  <p className="text-gray-700">
                    Empathy is a fundamental force that enables us to experience
                    reality from the inside out.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full bg-rose-600 mt-2.5"></div>
                  <p className="text-gray-700">
                    It operates through direct experience and feeling rather
                    than intellectual understanding.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full bg-rose-600 mt-2.5"></div>
                  <p className="text-gray-700">
                    Empathy and boundaries work as complementary forces,
                    enabling both unity and individuality.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full bg-rose-600 mt-2.5"></div>
                  <p className="text-gray-700">
                    Development of empathy involves conscious work with feeling
                    channels and awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Nature of Empathy */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-normal mb-6 text-gray-900">
              The Nature of Empathy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                To understand empathy, consider the relationship between the
                continuous and the discrete. Where boundaries define edges and
                separation, empathy allows us to move into a more continuous
                state, merging more seamlessly with what surrounds us. It is the
                force through which we can know the essence or inner reality of
                another being, whether person, animal, or tree.
              </p>

              <p>
                This knowing comes not through intellectual understanding but
                through direct experience—similar to how we learn about a fabric
                by touching it. Through empathy, we gain information not by
                thinking or analyzing, but by embodying and feeling from the
                inside. It is a way of knowing that operates through immediate
                experience rather than abstract reasoning.
              </p>

              <p>
                As a transpersonal force, empathy enables us to transcend our
                individual boundaries and experience unity with something
                greater than ourselves. This experience of unity, often
                referenced in mystical traditions, is essentially an experience
                of limitlessness—the natural complement to the limits that
                define our individual existence.
              </p>
            </div>
          </div>

          {/* Empathy and Inner Work */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-normal mb-6 text-gray-900">
              Empathy and Inner Work
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Empathy is deeply connected to the feeling and sensory aspects
                of our being. Unlike intellectual knowledge, which operates
                through abstraction and analysis, empathic knowing emerges
                through direct bodily experience. This tactile quality of
                empathy makes it a vital tool for inner work, allowing us to
                sense and understand the subtle dynamics of consciousness.
              </p>

              <div className="bg-white p-6 rounded-lg border border-gray-100 my-8">
                <h3 className="text-xl font-medium mb-4">
                  Working with Feeling Channels
                </h3>
                <p className="text-gray-800 mb-4">
                  Our capacity for empathy can become restricted when feeling
                  channels are shut down or frozen. This is particularly common
                  when we've learned to suppress feelings as a way of coping or
                  conforming to social expectations. Like frozen rivers, these
                  channels require patient attention and warmth to thaw.
                </p>
                <p className="text-gray-800">
                  The process of reopening these channels may be
                  gradual—sometimes a slow drip, other times sudden bursts of
                  feeling. This unpredictable flow is a natural part of the
                  process, requiring patience and consistent awareness rather
                  than forceful intervention.
                </p>
              </div>

              <p>
                Fear often emerges as we begin to open these channels,
                particularly fear of losing ourselves in the experience of
                unity. This fear, while natural, stems from misunderstanding the
                nature of empathic connection. Just as a wave can merge with the
                ocean without permanently losing its ability to rise again, we
                can enter empathic states without sacrificing our individual
                identity.
              </p>
            </div>
          </div>

          {/* Empathy and Boundaries */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-normal mb-6 text-gray-900">
              Empathy and Boundaries
            </h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Empathy and boundaries form a natural duality within
                consciousness. Where boundaries enable us to know ourselves as
                distinct individuals, empathy allows us to experience unity with
                something greater. Neither force is superior to the other—they
                are complementary aspects of a single reality, like two hands of
                the same body.
              </p>

              <p>
                Understanding this relationship helps us avoid common pitfalls.
                Too much emphasis on empathy without sufficient boundaries can
                lead to loss of self, where we become so merged with others'
                experiences that we lose touch with our own center. Conversely,
                strong boundaries without empathy can lead to isolation, cutting
                us off from the enriching experience of connection.
              </p>

              <p>
                The goal is not to elevate one force above the other but to
                recognize their essential unity. Just as an apple is both
                individual and one with its tree, we can maintain our distinct
                identity while acknowledging our fundamental connection to a
                greater whole. This understanding allows us to move freely
                between states of individual consciousness and unified
                experience.
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
                Developing our empathic capacity requires conscious attention to
                both our inner state and our relationships with others. This
                development often begins with recognizing where our natural
                ability to feel and connect has become restricted or shut down.
              </p>

              <div className="bg-white p-6 rounded-lg border border-gray-100 my-8">
                <h3 className="text-xl font-medium mb-4">Common Challenges</h3>
                <p className="text-gray-800 mb-4">
                  When we begin working consciously with empathy, we may
                  encounter resistance to feeling deeply, fear of losing
                  ourselves in others' experiences, or confusion about where we
                  end and others begin. These challenges often signal areas
                  where our relationship with empathy needs attention and
                  integration.
                </p>
                <p className="text-gray-800">
                  We might also discover a tendency to use empathy as an escape,
                  focusing on others' experiences to avoid our own. This
                  pattern, while common, ultimately leads to disconnection from
                  our own center and needs to be recognized and balanced.
                </p>
              </div>

              <p>
                A crucial aspect of development is learning to move consciously
                between states of connection and individual awareness. This
                includes developing the ability to disentangle ourselves after
                deep empathic connections, releasing any threads that keep us
                anchored in others' experiences while maintaining the wisdom
                gained through connection.
              </p>

              <p>
                Understanding energy dynamics plays a vital role in this
                development. When we recognize that continuous and discrete
                states are natural aspects of the same reality, much of our fear
                around empathic connection dissolves. This understanding brings
                greater agency and clarity to our practice.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="max-w-3xl mx-auto pb-14 mb:pb-24">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700">
                Empathy, as a fundamental force of consciousness, enables us to
                experience the profound unity that underlies all existence.
                Through conscious development of this capacity, while
                maintaining healthy boundaries, we create the conditions for
                both deep connection and authentic individuality. This balance
                leads to a fuller expression of our humanity and a more
                integrated way of being in the world.
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
                    Learn to recognize and maintain healthy limits while
                    preserving the capacity for connection.
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
                    Develop the foundation of inner awareness needed for
                    conscious development.
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
                    Learn to look inward and develop presence with your inner
                    experience.
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
