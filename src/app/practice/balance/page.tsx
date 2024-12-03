"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Section from "@/components/ui/Section";
import { Scale, CircleDot, Infinity, ArrowRight, Compass, Library, Eye } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import SeriesNavigator from "@/components/practice/SeriesNavigator";
import NewsletterSignup from "@/components/article/NewsletterSignup";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface Practice {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const practices = [
  {
    id: "dynamics",
    title: "Understanding Balance",
    subtitle: "Energy Dynamics",
    description:
      "Learn the fundamental nature of balance and the forces that create it.",
    icon: Scale,
    color: "indigo",
  },
  {
    id: "forces",
    title: "Complementary Forces",
    subtitle: "The Dance of Opposites",
    description: "Explore the relationship between the limitless and limits.",
    icon: CircleDot,
    color: "purple",
  },
  {
    id: "integration",
    title: "Dynamic Balance",
    subtitle: "Practice & Integration",
    description: "Learn to work with these forces in daily life.",
    icon: Infinity,
    color: "slate",
  },
];

export default function BalancePage() {
  const sections = [
    { id: "dynamics", title: "Understanding Balance" },
    { id: "forces", title: "Complementary Forces" },
    { id: "integration", title: "Integration & Practice" },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const dynamics = document.getElementById("dynamics");
      const forces = document.getElementById("forces");
      const integration = document.getElementById("integration");

      if (!dynamics || !forces || !integration) return;

      const scrollPosition = window.scrollY + 100;

      if (scrollPosition < forces.offsetTop) {
        setCurrentSection(0);
      } else if (scrollPosition < integration.offsetTop) {
        setCurrentSection(1);
      } else {
        setCurrentSection(2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    return (
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    );
  };

  const PracticeCard = ({ practice }: { practice: Practice }) => {
    const Icon = practice.icon;
    return (
      <div
        onClick={() => scrollToSection(practice.id)}
        className="cursor-pointer h-full"
      >
        <motion.div
          whileHover={{ y: -4 }}
          className="h-full bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
        >
          <div className={`relative p-6 pb-8`}>
            {/* Top Section */}
            <div className="flex items-center justify-between mb-6">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  practice.color === "purple"
                    ? "bg-purple-50 text-purple-600"
                    : practice.color === "indigo"
                    ? "bg-indigo-50 text-indigo-600"
                    : "bg-slate-50 text-slate-600"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <motion.div className="text-gray-400" whileHover={{ x: 4 }}>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">
                {practice.title}
              </h3>
              <p className="text-sm font-medium text-black mb-4">
                {practice.subtitle}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {practice.description}
              </p>
            </div>

            {/* Subtle gradient overlay */}
            <div
              className={`absolute inset-0 opacity-[0.03] ${
                practice.color === "purple"
                  ? "bg-gradient-to-br from-purple-600"
                  : practice.color === "indigo"
                  ? "bg-gradient-to-br from-indigo-600"
                  : "bg-gradient-to-br from-slate-600"
              }`}
            />
          </div>
        </motion.div>
      </div>
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ScrollProgress />
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
          {/* Hero Section */}
          <Section width="default" className="pt-24 pb-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl mb-4">Balance</h1>
              <p className="text-xl font-light text-gray-600">
                Understanding and working with the fundamental forces that shape
                our inner and outer reality.
              </p>
            </div>

            {/* Practice Cards */}
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mt-16">
                {practices.map((practice, index) => (
                  <motion.div
                    key={practice.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <PracticeCard practice={practice} />
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          <div className="max-w-6xl mx-auto">
            <div className="border-b border-gray-100 my-4" />
          </div>

          {/* Main Content with Sidebar */}
          <Section width="default" className="pb-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="lg:w-2/3 border-l border-r border-gray-100 px-4 md:px-8">
                  {/* Intro section before the three main content blocks */}
                  <div className="prose prose-lg max-w-none mb-16">
                    <p className="text-xl text-gray-800 mb-6">
                      Imagine you are riding on a subway train as it moves
                      violently across the tracks. Standing near the doors,
                      supporting yourself on a horizontal beam above, you must
                      constantly adjust your balance. There's a point at which
                      you feel most stable - shifting weight between left and
                      right, adjusting your stance wider or narrower. This point
                      of greatest stability comes from bringing the different
                      forces acting on you into dynamic harmony.
                    </p>

                    <p>
                      Life itself is like this. Our inner world and conscious
                      experience contain many different forces acting on us that
                      must be brought into balance for us to experience inner
                      stability and harmony. But what does it mean to balance?
                      What are we actually balancing?
                    </p>

                    <p>
                      Just as physical forces act on our body in the subway -
                      gravity, momentum, the train's movement - subtler forces
                      act on our inner experience. And just as we can learn to
                      work with physical forces consciously, maintaining our
                      balance through subtle adjustments, we can learn to work
                      with inner forces with the same consciousness and skill.
                    </p>
                  </div>

                  {/* Energy Dynamics Section */}
                  <motion.div id="dynamics">
                    <div className="mb-8 border-b border-gray-200 pb-7">
                      <motion.h1 className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-3">
                        <Scale
                          className="w-8 h-8 text-indigo-600"
                          strokeWidth={2}
                        />
                        Understanding Balance
                      </motion.h1>
                    </div>
                    <div className="prose prose-lg max-w-none mb-16">
                      <h2 className="text-3xl font-normal mb-6 text-gray-900">
                      </h2>
                      <p>
                        <strong>Balance implies a point of stability between two or more
                        forces.</strong> The first step to achieving balance then, is to
                        understand what those forces are and the spectrum
                        between them. This gives us the chance to work with them
                        consciously; in any given moment to shift our weight—our
                        focus and emphasis—toward or away from one of the poles
                        to reach that point of stability.
                      </p>

                      <h3 className="text-2xl font-medium mt-12 mb-6 text-gray-900">
                        The Fundamental Duality
                      </h3>
                      <p>
                        At the heart of all reality lies a basic duality between
                        two complementary forces: the limitless (yin) and limits
                        (yang). These are not opposing forces in conflict, but
                        complementary energies that create wholeness through
                        their interaction. Like day and night working together
                        to create a full cycle, these forces balance each other,
                        each playing a crucial role in sustaining life and
                        well-being.
                      </p>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 my-6">
                        <h3 className="text-2xl font-normal my-4">
                          Understanding the Two Forces
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-xl font-normal mb-2">
                              Yin: The Force of Limitlessness
                            </h4>
                            <p>
                              Yin represents the receptive, expansive, and
                              flowing aspects of reality. It is the energy of
                              openness, connection, and infinite possibility. In
                              our experience, it manifests as empathy,
                              creativity, and the ability to extend beyond our
                              personal boundaries.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xl font-normal mb-2">
                              Yang: The Force of Limits
                            </h4>
                            <p>
                              Yang represents the structuring, defining, and
                              containing aspects of reality. It is the energy of
                              form, distinction, and concrete manifestation. In
                              our experience, it manifests as boundaries,
                              clarity, and the ability to maintain healthy
                              separation.
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>
                        These two forces have gone by many names in many places.
                        What matters more than the labels we use, is our ability
                        to recognize them within our internal experience and in
                        the world around us. It is at the heart of the dynamics
                        of energy, and the cause and effect relationships that
                        define both the structure of our experience and all
                        other aspects of reality.
                      </p>
                      <p>
                        Understanding these dynamics is to our conscious
                        experience what understanding physics is to building
                        machines. It gives us the tools we need to act
                        consciously and intentionally with regard to the forces
                        acting on us in our inner world.
                      </p>
                    </div>
                  </motion.div>

                  {/* Complementary Forces Section */}
                  <motion.div id="forces">
                    <div className="mb-8 border-b border-gray-200 pb-7">
                      <motion.h1 className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-3">
                        <CircleDot
                          className="w-8 h-8 text-purple-600"
                          strokeWidth={2}
                        />
                        Complementary Forces
                      </motion.h1>
                    </div>
                    <div className="prose prose-lg max-w-none mb-16">
                      <h2 className="text-3xl font-normal mb-6 text-gray-900">
                        A Dance of Opposites
                      </h2>
                      <p>
                        These complementary forces manifest throughout all
                        aspects of reality. We see them in the physical world as
                        waves and particles - continuous and discrete aspects of
                        the same phenomena. We find them in our experience as
                        the relationship between our senses (direct, embodied
                        experience) and intellect (abstract, conceptual
                        understanding). They appear in the distinction between
                        qualities (which we experience directly, like color or
                        emotion) and quantities (which we can measure and
                        count).
                      </p>

                      <p>
                        What's crucial to understand is that these aren't
                        opposing forces in conflict, but complementary aspects
                        that together create wholeness. Like day and night
                        forming a complete cycle, each aspect plays an essential
                        role. Learning to recognize this pattern of
                        complementary relationship - whether in nature, in our
                        experience, or in our inner life - gives us the
                        foundation for working with all forms of duality on a
                        conscious level.
                      </p>

                      <p>
                        When we can recognize how these forces interact and
                        affect us, we begin to understand why and how we fall
                        out of balance. More importantly, we gain the awareness
                        needed to make conscious adjustments toward greater
                        harmony.
                      </p>

                      <h3 className="text-2xl font-normal mb-4">
                        Signs of Imbalance
                      </h3>
                      <p className="mb-4">
                        Just as a scale tips to one side or the other when out
                        of balance, our lives show clear signs when we've leaned
                        too far toward either extreme:
                      </p>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 my-4">
                        <h3 className="text-xl font-medium my-4">
                          When Yang (Limits) Dominates:
                        </h3>
                        <ul className="list-none space-y-6 my-8">
                          <li className="pl-6 border-l-2 border-blue-100">
                            Rigidity in thinking and behavior
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            Excessive control over situations and relationships
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            Difficulty with spontaneity and flow
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            Structures feel like prisons
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            Resistance to change or new experiences
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            Isolation from others or emotional withdrawal
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            Fear of the unknown or uncertain
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 my-4">
                        <h3 className="text-xl font-medium my-4">
                          When Yin (Limitlessness) Dominates:
                        </h3>
                        <ul className="list-none space-y-6 my-8">
                          <li className="pl-6 border-l-2 border-blue-100">
                            Difficulty maintaining boundaries
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            Overwhelm from others' emotions
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            Lack of structure or direction
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            Difficulty saying no or setting limits
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            Loss of self in relationships
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            Emotional chaos or unboundedness
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            Fear of limits or structure
                          </li>
                        </ul>
                      </div>
                      <p>
                        The art of balance lies in learning to recognize these
                        signs and make conscious adjustments. Rather than
                        eliminating either force, it's about finding the most
                        natural and stable point between them that serves each
                        unique situation.
                      </p>
                    </div>
                  </motion.div>

                  {/* Integration Section */}
                  <motion.div id="integration">
                    <div className="mb-8 border-b border-gray-200 pb-7">
                      <motion.h1 className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-4">
                        <Infinity
                          className="w-8 h-8 text-slate-600"
                          strokeWidth={1.5}
                        />
                        Integration & Practice
                      </motion.h1>
                    </div>
                    <div className="prose prose-lg max-w-none mb-16">
                      <h2 className="text-3xl font-normal mb-6 text-gray-900">
                        The Path Forward
                      </h2>
                      <p>
                        Balance isn't something we achieve once and hold onto
                        forever. Rather than seeking a fixed point of perfect
                        equilibrium, true balance is more like
                        surfing—maintaining stability through constant, subtle
                        adjustments in response to changing conditions.
                      </p>

                      <p>
                        In any given moment, we can ask ourselves: Where are we
                        on this spectrum? Which shift is needed here? When we
                        feel scattered and unfocused, we may need more
                        intelligent limits—more structure, more boundaries, more
                        definition. When we feel rigid, isolated, or stuck, we
                        might need more limitlessness—more flow, more openness,
                        more possibility.
                      </p>

                      <h3 className="text-2xl font-normal my-8">
                        The Practice of Dynamic Balance
                      </h3>
                      <div className="bg-white p-6 rounded-lg border border-gray-100 my-8">
                        <ul className="list-none space-y-6 my-4">
                          <li className="pl-6 border-l-2 border-blue-100">
                            <strong>Start with Center:</strong> Before balancing
                            external forces, find your own center—that quiet
                            point of stability within from which you can observe
                            and respond to life's movements.
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            <strong>Develop Sensitivity:</strong> Learn to
                            recognize the subtle signs of imbalance before they
                            become obvious. Notice the small ways you begin to
                            lean too far toward rigidity or dissolution.
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            <strong>Practice Micro-Adjustments:</strong> Rather
                            than making dramatic corrections, work with small,
                            continuous adjustments. Like the subway rider,
                            maintain stability through subtle shifts.
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            <strong>Honor Both Forces:</strong> Resist the
                            tendency to value one force over the other. Both
                            limitation and limitlessness have their wisdom,
                            their necessity.
                          </li>
                        </ul>
                      </div>

                      <p>
                        As we develop our capacity to work with these
                        fundamental forces, we begin to experience a deeper form
                        of stability. This isn't the rigid stability of a wall,
                        but the dynamic stability of a tree that can bend with
                        the wind while remaining stable and rooted in the earth.
                        Through these ongoing adjustments and the growing
                        sensitivity they develop, we discover something profound
                        about the nature of consciousness itself.
                      </p>

                      <p>
                        Consciousness isn't merely an observer of these forces,
                        but the medium through which they interact. By deciding
                        where to place limits and where to lift them, we give
                        form and definition to our lives.
                      </p>
                    </div>
                  </motion.div>

                  {/* Closing Section */}
                  <div className="mb-16">
                    <h2 className="text-3xl font-normal mb-6 text-gray-900">
                      Conclusion: Balance as a Cosmic Principle
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-xl text-gray-700 leading-relaxed">
                        Balance reveals itself not just as a personal practice
                        but as a fundamental principle of reality. As we learn
                        to dance with these complementary forces, we align
                        ourselves with the natural rhythms of life itself,
                        finding greater ease, effectiveness, and peace in all
                        aspects of our experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="hidden lg:block lg:w-1/3">
                  <div className="sticky top-24 space-y-8">
                    <SeriesNavigator
                      sections={sections}
                      currentSection={currentSection}
                    />
                    <NewsletterSignup />
                  </div>
                </div>
              
              </div>

              {/* Next Steps Navigation */}
              <div className="mt-8 pt-12 border-t border-gray-200">
                <h2 className="text-2xl font-normal mt-2 mb-8 text-gray-900">
                  Continue Reading
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1">
                    <Link href="/practice/discipline" className="block p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                          <Compass className="w-5 h-5" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-normal text-gray-900 mb-2">
                        Discipline
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Develop the consistency and structure needed to create
                        lasting transformation.
                      </p>
                    </Link>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1">
                    <Link href="/practice/library" className="block p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                          <Library className="w-5 h-5" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-normal text-gray-900 mb-2">
                        Practice Library
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Explore a collection of practices and techniques for
                        conscious development.
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

                </div>
              </div>

            </div>
          </Section>
        </div>
      </PageTransition>
    </>
  );
}
