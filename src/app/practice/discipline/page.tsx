// src/app/practice/discipline/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Section from "@/components/ui/Section";
import type { LucideIcon } from "lucide-react";
import { Shield, Compass, Sprout, Target, ArrowRight, Library, Eye, Scale } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import SeriesNavigator from "@/components/practice/SeriesNavigator";
import NewsletterSignup from "@/components/article/NewsletterSignup";
import Link from "next/link";

// Helper Components
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

// Interfaces
interface Practice {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface PracticeCardProps {
  practice: Practice;
}

// Utility function
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const PracticeCard = ({ practice }: PracticeCardProps) => {
  const Icon = practice.icon;

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple":
        return "bg-purple-50 text-purple-600";
      case "indigo":
        return "bg-indigo-50 text-indigo-600";
      case "emerald":
        return "bg-emerald-50 text-emerald-600";
      default:
        return "bg-slate-50 text-slate-600";
    }
  };

  const getGradientClass = (color: string) => {
    switch (color) {
      case "purple":
        return "bg-gradient-to-br from-purple-600";
      case "indigo":
        return "bg-gradient-to-br from-indigo-600";
      case "emerald":
        return "bg-gradient-to-br from-emerald-600";
      default:
        return "bg-gradient-to-br from-slate-600";
    }
  };

  return (
    <div
      onClick={() => scrollToSection(practice.id)}
      className="cursor-pointer h-full"
    >
      <motion.div
        whileHover={{ y: -4 }}
        className="h-full bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
      >
        <div className="relative p-6 pb-8">
          {/* Top Section */}
          <div className="flex items-center justify-between mb-6">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${getColorClasses(
                practice.color
              )}`}
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
            className={`absolute inset-0 opacity-[0.03] ${getGradientClass(
              practice.color
            )}`}
          />
        </div>
      </motion.div>
    </div>
  );
};

const practices = [
  {
    id: "understanding",
    title: "Understanding Discipline",
    subtitle: "Beyond Control",
    description:
      "Learn the foundational nature of discipline and what it really means.",
    icon: Shield,
    color: "indigo",
  },
  {
    id: "elements",
    title: "The Elements of Discipline",
    subtitle: "Structure and Support",
    description:
      "Explore how boundaries and connection work together in healthy discipline.",
    icon: Compass,
    color: "purple",
  },
  {
    id: "maturity",
    title: "The Path to Maturity",
    subtitle: "Development & Growth",
    description:
      "Understand how different approaches to discipline affect long-term development.",
    icon: Sprout, // We'll need to import this
    color: "emerald", // Adding a new color
  },
  {
    id: "practice",
    title: "Putting It Into Practice",
    subtitle: "Implementation",
    description: "Learn to implement effective discipline in daily life.",
    icon: Target,
    color: "slate",
  },
];

export default function DisciplinePage() {
  const sections = [
    { id: "understanding", title: "Understanding Discipline" },
    { id: "elements", title: "The Elements of Discipline" },
    { id: "maturity", title: "The Path to Maturity" },
    { id: "practice", title: "Putting It Into Practice" },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const understanding = document.getElementById("understanding");
      const elements = document.getElementById("elements");
      const maturity = document.getElementById("maturity");
      const practice = document.getElementById("practice");
  
      if (!understanding || !elements || !maturity || !practice) return;
  
      const scrollPosition = window.scrollY + 100;
  
      if (scrollPosition < elements.offsetTop) {
        setCurrentSection(0);
      } else if (scrollPosition < maturity.offsetTop) {
        setCurrentSection(1);
      } else if (scrollPosition < practice.offsetTop) {
        setCurrentSection(2);
      } else {
        setCurrentSection(3);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
          {/* Hero Section */}
          <Section width="default" className="pt-24 pb-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl mb-4">Discipline</h1>
              <p className="text-xl font-light text-gray-600">
                Understanding and practicing conscious self-discipline through
                the integration of love and limits.
              </p>
            </div>

            {/* Practice Cards */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
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
                  {/* Understanding Discipline Section */}
                  <div id="understanding" className="mb-16">
                    <div className="mb-8 border-b border-gray-200 pb-7">
                      <motion.h1
                        className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Shield
                          className="w-8 h-8 text-indigo-600"
                          strokeWidth={2}
                        />
                        Understanding Discipline
                      </motion.h1>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <p className="text-xl text-gray-700 mb-6">
                        Most of us carry a very specific image of discipline.
                        Perhaps it's a drill sergeant barking orders, a strict
                        parent enforcing rules, or our own inner voice demanding
                        compliance with a new diet or exercise routine. In each
                        case, discipline appears as a force of control—something
                        that makes us or others do what we're "supposed" to do,
                        whether we want to or not.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        This view of discipline seems effective at first glance.
                        After all, the drill sergeant gets results. The strict
                        parent's children appear well-behaved. Our forceful
                        inner taskmaster might drive us to the gym for a few
                        weeks. But looking closer, we begin to see the cracks in
                        this approach.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        The soldier who excelled under the drill sergeant's
                        authority might struggle to maintain discipline without
                        external pressure. The well-behaved children of strict
                        parents often rebel dramatically in their teens or
                        become rigidly rule-bound adults. Our harsh inner
                        regimens tend to collapse, leading to cycles of rigid
                        control followed by complete abandon.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        Something is missing in this common understanding of
                        discipline. To find it, we need to look more carefully
                        at what discipline is trying to accomplish.
                      </p>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        Beyond Control
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800">
                        Think of how young children develop. Their growth
                        requires two essential elements: safety to explore and
                        boundaries to protect. A child with no boundaries can
                        become anxious and ungrounded, while one with only rigid
                        rules becomes either rebellious or overly submissive.
                        True development—the kind that leads to genuine
                        maturity—needs both support and structure.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        This same principle applies to all forms of development,
                        whether we're:
                      </p>

                      <ul className="space-y-4 mt-4">
                        <li className="text-lg leading-relaxed text-gray-800">
                          Learning a new skill
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Changing a habit
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Growing emotionally
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Developing spiritually
                        </li>
                      </ul>

                      <p className="text-lg leading-relaxed text-gray-800">
                        The conventional view of discipline focuses entirely on
                        the structure side of the equation—the rules, the
                        boundaries, the "shoulds." It tries to force growth
                        through control alone. But just as a plant needs both
                        the foundation of soil and the space and time to grow
                        naturally, genuine development requires both supportive
                        containment, and the nurturing of attention.
                      </p>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        The Cost of Control
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800">
                        When discipline becomes purely about control, several
                        problems emerge:
                      </p>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 my-4">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Short-term Compliance, Long-term Resistance
                            </h3>
                            <p className="text-gray-800">
                              What looks like success on the surface often masks
                              growing resistance underneath. We might follow the
                              rules when watched, but secretly look for ways
                              around them. Our inner self begins to view
                              discipline as the enemy rather than a tool for
                              growth.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Disconnection From Natural Motivation
                            </h3>
                            <p className="text-gray-800">
                              When we're constantly told what to do, we lose
                              touch with our natural drive to grow and develop.
                              The "should" voice becomes so loud that we can no
                              longer hear our authentic desires for improvement.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Hardening Against Experience
                            </h3>
                            <p className="text-gray-800">
                              Perhaps most damaging, we begin to shut down our
                              sensitivity—to ourselves and others. The more we
                              rely on force, the less we can feel what's
                              actually needed in any given moment.
                            </p>
                          </div>
                        </div>
                      </div>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        A Different Approach
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800">
                        Think of how a skilled mentor works with a student, or
                        how an experienced gardener tends to plants. These
                        relationships involve discipline, but not the kind that
                        operates through force. Instead, they work through:
                      </p>

                      <ul className="space-y-4 mt-4">
                        <li className="text-lg leading-relaxed text-gray-800">
                          Understanding the inner needs of what they're working
                          with
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Providing structure where needed
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Offering support for natural development
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Adjusting their approach based on feedback
                        </li>
                      </ul>

                      <p className="text-lg leading-relaxed text-gray-800">
                        This more complete form of discipline doesn't abandon
                        structure—boundaries and limits remain essential. But it
                        adds something crucial: awareness of and respect for
                        what's being developed. Like the mentor who knows when
                        to challenge and when to step back and support, it works
                        with rather than against the natural processes of
                        growth.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        In the sections that follow, we'll explore how to
                        develop this more mature understanding of discipline.
                        We'll learn how to maintain necessary boundaries while
                        staying connected to ourselves and others, how to build
                        structures that support rather than suppress growth, and
                        how to work with instead of against our natural
                        development.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        Most importantly, we'll discover how discipline,
                        properly understood, becomes not our taskmaster, but our
                        ally in growth and development.
                      </p>
                    </div>
                  </div>

                  {/* Elements of Discipline Section */}
                  <div id="elements" className="mb-16">
                    <div className="mb-8 border-b border-gray-200 pb-7">
                      <motion.h1
                        className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Compass
                          className="w-8 h-8 text-purple-600"
                          strokeWidth={2}
                        />
                        The Elements of True Discipline
                      </motion.h1>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <p className="text-xl text-gray-700 mb-6">
                        If discipline isn't about forcing compliance, what is
                        it? At its core, effective discipline integrates two
                        essential capacities: the ability to set clear
                        boundaries and the ability to maintain connection. Like
                        a parent who can say "no" to a behavior while still
                        communicating care for the child, genuine discipline
                        requires us to hold both structure and support
                        simultaneously.
                      </p>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        Setting Boundaries While Maintaining Connection
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800">
                        Consider how this works in practice. When we need to
                        establish a limit—whether with ourselves or others—we
                        typically do one of two things: either we become harsh
                        and controlling, or we avoid setting the boundary
                        altogether for fear of causing harm. Both approaches
                        stem from the same misconception: that boundaries and
                        care are mutually exclusive.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        But boundaries don't require harshness, and care doesn't
                        preclude limits. In fact, the most effective boundaries
                        in the long run are those set with clear awareness and
                        respect for what we're working with. Just as a river
                        needs banks to flow powerfully, our energy and
                        development require conscious structure to move in
                        beneficial directions.
                      </p>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        Reading What's Needed
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800">
                        Perhaps the most crucial skill in this approach to
                        discipline is the ability to read what's actually needed
                        in any given moment. This requires a different kind of
                        attention than simply enforcing rules. We must develop:
                      </p>

                      <ul className="space-y-4 mt-4">
                        <li className="text-lg leading-relaxed text-gray-800">
                          Sensitivity to current conditions
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Understanding of natural rhythms and timing
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Recognition of genuine needs versus reactive wants
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Awareness of long-term effects, not just immediate
                          results
                        </li>
                      </ul>

                      <p className="text-lg leading-relaxed text-gray-800">
                        This more nuanced attention allows us to work with
                        rather than against the natural processes of
                        development. Instead of forcing a predetermined outcome,
                        we learn to support growth in its proper time and way.
                      </p>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        The Role of Balance and Awareness
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800">
                        Traditional discipline operates through control—external
                        forces imposing order. This new approach works through
                        balance and awareness—conscious attention guiding
                        development toward long-term stability. When we
                        integrate these elements, several key transformations
                        occur:
                      </p>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 my-6">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              From Fixed Rules to Living Principles
                            </h3>
                            <p className="text-gray-800">
                              Rather than rigid adherence to set rules, we
                              develop the ability to respond appropriately to
                              each situation. The focus moves from "following
                              the rules" to understanding and working with the
                              principles that guide healthy development. Like a
                              skilled surfer reading the waves, we learn to
                              maintain stability through conscious adjustment
                              rather than rigid control.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              From Enforcement to Guidance
                            </h3>
                            <p className="text-gray-800">
                              Instead of forcing compliance, we learn to guide
                              energy in beneficial directions. This might mean
                              creating supportive environments, establishing
                              helpful routines, or developing skills that make
                              positive choices easier. Balance comes through
                              finding the right amount of structure—enough to
                              support growth without constraining it.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              From Resistance to Integration
                            </h3>
                            <p className="text-gray-800">
                              When we're not allowed to experience and process
                              our natural responses to limits—whether that's
                              disappointment, frustration, or sadness—our
                              emotional system becomes rigid. Instead of
                              developing resilience through working with these
                              feelings, we learn to suppress them, leading to
                              either emotional numbness or explosive outbursts.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Dependency on External Control
                            </h3>
                            <p className="text-gray-800">
                              When discipline works through balanced awareness
                              rather than force, we encounter less internal
                              resistance. The changes we make become integrated
                              parts of our development rather than imposed
                              restrictions we're waiting to escape. This
                              integration creates stability that persists even
                              when external pressures change.
                            </p>
                          </div>
                        </div>
                      </div>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        Working With Inner Forces
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800">
                        A crucial aspect of this approach is understanding how
                        to work with rather than against our inner nature. This
                        means:
                      </p>

                      <ul className="space-y-4 mt-4">
                        <li className="text-lg leading-relaxed text-gray-800">
                          Recognizing that resistance often signals a need for
                          adjustment, not just stronger force
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Understanding that development has its own timing and
                          rhythm
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Acknowledging that sustainable change requires
                          internal agreement, not just external compliance
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Learning to align our conscious intentions with our
                          deeper motivations
                        </li>
                      </ul>

                      <p className="text-lg leading-relaxed text-gray-800 mt-6">
                        This more integrated approach doesn't mean abandoning
                        structure or accepting every impulse. Rather, it means
                        developing the wisdom to know how to work with our
                        nature in service of our development.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800 mt-6">
                        In the next section, we'll explore how this approach to
                        discipline supports genuine maturity and growth,
                        creating lasting positive changes rather than temporary
                        compliance.
                      </p>
                    </div>
                  </div>

                  {/* Path to Maturity Section */}
                  <div id="maturity" className="mb-16">
                    <div className="mb-8 border-b border-gray-200 pb-7">
                      <motion.h1
                        className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Sprout
                          className="w-8 h-8 text-emerald-600"
                          strokeWidth={2}
                        />
                        The Path to Maturity
                      </motion.h1>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <p className="text-xl text-gray-700 mb-6">
                        The way we approach discipline has profound effects on
                        development. These effects go far beyond immediate
                        behavior, shaping how we mature and grow over time. To
                        understand these impacts, let's look at how different
                        approaches to discipline affect our development.
                      </p>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        The Impact of Control
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800">
                        When discipline operates primarily through control and
                        force, several patterns emerge:
                      </p>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 my-6">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Hardening Against Experience
                            </h3>
                            <p className="text-gray-800">
                              Over time, constant pressure to comply creates a
                              protective shell. We become less sensitive to our
                              own needs and feelings, less able to read subtle
                              signals from ourselves and others. Like a plant
                              growing in too-tight a container, our natural
                              sensitivity and responsiveness become constricted.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Divided Self
                            </h3>
                            <p className="text-gray-800">
                              Authoritarian discipline creates an internal split
                              between the part that enforces rules and the part
                              that wants to rebel against them. This division
                              consumes energy and creates ongoing internal
                              conflict. Rather than developing genuine
                              self-regulation, we oscillate between rigid
                              control and collapse.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Stunted Emotional Development
                            </h3>
                            <p className="text-gray-800">
                              When we're not allowed to experience and process
                              our natural responses to limits—whether that's
                              disappointment, frustration, or sadness—our
                              emotional system becomes rigid. Instead of
                              developing resilience through working with these
                              feelings, we learn to suppress them, leading to
                              either emotional numbness or explosive outbursts.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Dependency on External Control
                            </h3>
                            <p className="text-gray-800">
                              Perhaps most critically, authoritarian discipline
                              prevents us from developing true self-regulation.
                              We learn to behave only when watched, to respond
                              to external pressure rather than internal
                              guidance. When the external control is removed, we
                              lack the inner structures needed for genuine
                              long-term maturity.
                            </p>
                          </div>
                        </div>
                      </div>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        Supporting Natural Development
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800">
                        In contrast, when discipline provides both structure and
                        support, it creates the conditions for genuine maturity.
                        This shows up in several key ways:
                      </p>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 my-6">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Integration Rather Than Division
                            </h3>
                            <p className="text-gray-800">
                              Instead of creating internal conflict, this
                              approach helps integrate different aspects of
                              ourselves. We develop the ability to work with
                              rather than against our nature, leading to more
                              sustainable positive changes.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Emotional Resilience
                            </h3>
                            <p className="text-gray-800">
                              When limits are set with care and respect, we
                              develop the capacity to handle disappointment and
                              frustration constructively. Rather than
                              suppressing these feelings or being overwhelmed by
                              them, we learn to process them in healthy ways.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Growing Self-Regulation
                            </h3>
                            <p className="text-gray-800">
                              As we experience boundaries that respect our
                              nature while maintaining necessary limits, we
                              internalize the capacity for healthy
                              self-regulation. Instead of relying on external
                              control, we develop inner guidance systems that
                              serve us throughout life.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Natural Motivation
                            </h3>
                            <p className="text-gray-800">
                              Perhaps most importantly, this approach preserves
                              and strengthens our natural drive toward growth
                              and development. Instead of learning to comply out
                              of fear or pressure, we maintain connection with
                              our authentic motivations for improvement.
                            </p>
                          </div>
                        </div>
                      </div>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        The Role of Time
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800">
                        A crucial difference between these approaches lies in
                        their relationship with time:
                      </p>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 my-6">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Short-Term Compliance vs. Long-Term Growth
                            </h3>
                            <p className="text-gray-800">
                              Authoritarian discipline focuses on immediate
                              behavior change, often at the cost of long-term
                              development. More complete discipline might seem
                              slower at first, but it creates lasting positive
                              changes by working with natural developmental
                              processes.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Quick Fixes vs. Genuine Maturity
                            </h3>
                            <p className="text-gray-800">
                              While control-based approaches might produce
                              faster visible results, they often require
                              increasing force to maintain over time. In
                              contrast, development supported by proper
                              discipline becomes self-sustaining, requiring less
                              external structure as genuine maturity develops.
                            </p>
                          </div>
                        </div>
                      </div>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        Signs of Healthy Development
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800">
                        How do we know when discipline is supporting rather than
                        hindering development? Several markers indicate we're on
                        the right track:
                      </p>

                      <ul className="space-y-4 mt-4">
                        <li className="text-lg leading-relaxed text-gray-800">
                          Growing capacity to handle challenges without
                          collapsing
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Increasing ability to set and maintain healthy
                          boundaries
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Natural movement toward positive choices without
                          external pressure
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Greater integration between different aspects of
                          ourselves
                        </li>
                        <li className="text-lg leading-relaxed text-gray-800">
                          Enhanced sensitivity to genuine needs
                        </li>
                      </ul>

                      <p className="text-lg leading-relaxed text-gray-800">
                        In the final section, we'll explore specific practices
                        for implementing this more complete approach to
                        discipline, learning how to work with our nature while
                        supporting genuine growth and development.
                      </p>
                    </div>
                  </div>

                  {/* Putting It Into Section */}
                  <div id="practice" className="mb-16">
                    <div className="mb-8 border-b border-gray-200 pb-7">
                      <motion.h1
                        className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Target
                          className="w-8 h-8 text-slate-600"
                          strokeWidth={2}
                        />
                        Putting It Into Practice
                      </motion.h1>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <p className="text-xl text-gray-700 mb-6">
                        Understanding this approach to discipline is one thing;
                        implementing it is another. Let's explore how to put
                        these principles into practice, developing the skills
                        and awareness needed for effective discipline.
                      </p>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        Reading Our Own Needs
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800 mb-6">
                        The foundation of effective discipline is the ability to
                        accurately read what's needed in any given moment.
                        Sometimes that's limits, sometimes that's connection.
                        This requires developing sensitivity on multiple levels:
                      </p>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 my-6">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Physical Signals
                            </h3>
                            <p className="text-gray-800">
                              Our body often communicates needs before our mind
                              recognizes them. Learning to read physical
                              signals—tension, fatigue, restlessness—helps us
                              respond appropriately rather than pushing through
                              with predetermined rules.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Emotional Messages
                            </h3>
                            <p className="text-gray-800">
                              Emotions provide crucial information about our
                              state and needs. Instead of either suppressing
                              them or being ruled by them, we can learn to read
                              their messages and respond wisely.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Energy Levels
                            </h3>
                            <p className="text-gray-800">
                              Understanding our natural rhythms and energy
                              cycles helps us work with rather than against our
                              nature. This might mean scheduling demanding tasks
                              when we're naturally alert, or recognizing when we
                              need rest rather than pushing harder.
                            </p>
                          </div>
                        </div>
                      </div>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        Setting Effective Boundaries
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800 mb-6">
                        Boundaries are essential, but they need to be
                        established in ways that support rather than suppress
                        development:
                      </p>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 my-6">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Clarity Without Harshness
                            </h3>
                            <p className="text-gray-800">
                              Boundaries can be clear and firm without being
                              rigid or harsh. They can provide direction and
                              containment while allowing natural flow within
                              them.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Consistency With Flexibility
                            </h3>
                            <p className="text-gray-800">
                              While boundaries need to be consistent to be
                              effective, they should also be responsive to
                              changing conditions. This isn't inconsistency, but
                              rather intelligent adaptation to real needs.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Connection Through Limits
                            </h3>
                            <p className="text-gray-800">
                              Perhaps most importantly, we can maintain
                              connection even while setting limits. This might
                              mean acknowledging feelings while holding a
                              boundary, or explaining the reason for limits
                              rather than just enforcing them.
                            </p>
                          </div>
                        </div>
                      </div>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        Working With Resistance
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800">
                        Resistance is natural and often contains important
                        information. Rather than trying to overcome it through
                        force, we can learn to work with it:
                      </p>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 my-6">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Understanding the Message
                            </h3>
                            <p className="text-gray-800">
                              Resistance often signals that something needs
                              attention. Maybe we're moving too fast, pushing
                              too hard, or missing an important need.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Adjusting the Approach
                            </h3>
                            <p className="text-gray-800">
                              Sometimes the goal is right but the method needs
                              adjustment. Instead of forcing our way through
                              resistance, we can look for more aligned
                              approaches to the same end.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Making Space for Process
                            </h3>
                            <p className="text-gray-800">
                              Growth often involves working through difficult
                              feelings or old patterns. Making space for this
                              process—rather than demanding immediate
                              compliance—often leads to more sustainable change.
                            </p>
                          </div>
                        </div>
                      </div>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        Practical Steps
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800">
                        Some concrete practices for developing this approach:
                      </p>

                      <div className="bg-white p-6 rounded-lg border border-gray-100 my-6">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Conscious Experiments
                            </h3>
                            <p className="text-gray-800">
                              Start with small changes where you can practice
                              holding structure while maintaining internal
                              connection. Notice what works and what doesn't.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Recovery Time
                            </h3>
                            <p className="text-gray-800">
                              Build in time for integration after challenging
                              experiences. This allows new patterns to settle
                              and prevents the accumulation of resistance.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                              Reflection Practices
                            </h3>
                            <p className="text-gray-800">
                              Regular reflection on what's working and what
                              isn't helps refine our approach over time. Notice
                              both immediate effects and longer-term patterns.
                            </p>
                          </div>
                        </div>
                      </div>

                      <h2 className="text-2xl font-medium mt-8 mb-6 text-gray-900">
                        The Way Forward
                      </h2>

                      <p className="text-lg leading-relaxed text-gray-800">
                        Most of us have experienced moments where something
                        shifts naturally into place—where a new skill or
                        understanding emerges not through force but through the
                        meeting of readiness and opportunity. A musician finds
                        their fingers moving with new ease across their
                        instrument. An artist discovers their hand expressing
                        what their mind envisions. A parent realizes they've
                        responded to their child with a wisdom they didn't know
                        they possessed.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        These moments reveal something profound about
                        development. They show us that growth doesn't always
                        come through pushing harder or maintaining stricter
                        control. Often, it emerges through providing the right
                        conditions—through understanding what's needed and
                        responding with intelligence rather than force.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        This is the deeper truth about discipline. Not a weapon
                        we use against our nature, but a way of working with it.
                        Not a force that constrains what we are, but an
                        intelligence that supports what we're becoming. Through
                        this understanding, we discover the possibility of
                        genuine transformation without violence to our nature.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        The path forward isn't about becoming someone different
                        than who we are. It's about creating the conditions
                        through which who we truly are can fully emerge. In this
                        light, discipline becomes not our opponent but our
                        ally—not the force that restricts our expression, but
                        the wisdom that enables it.
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
                  
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1">
                    <Link href="/practice/balance" className="block p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                          <Scale className="w-5 h-5" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-normal text-gray-900 mb-2">
                        Balance
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Learn to maintain equilibrium between your inner and
                        outer worlds.
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
