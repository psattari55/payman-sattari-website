// src/app/practice/inner-work/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Section from "@/components/ui/Section";
import type { LucideIcon } from "lucide-react";
import { Eye, Map, Unplug, ArrowRight, Brain, Waves, Fingerprint, User } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import SeriesNavigator from "@/components/practice/SeriesNavigator";
import NewsletterSignup from "@/components/article/NewsletterSignup";

interface Practice {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  practices?: Array<{
    name: string;
    duration: string;
    level: string;
  }>;
  entities?: Array<{
    name: string;
    description: string;
  }>;
  areas?: Array<{
    aspect: string;
    principle: string;
  }>;
}

interface PracticeCardProps {
  practice: Practice;
}

const practices = [
  {
    id: "meditation",
    title: "Turning Attention Inward",
    subtitle: "Meditation",
    description: "Learn the foundational practice of turning attention inward.",
    icon: Eye,
    color: "indigo", // Changed from green
  },
  {
    id: "landscape",
    title: "Mapping the Inner Space",
    subtitle: "Inner Entities",
    description:
      "Explore and understand the various elements that make up your inner world.",
    icon: Map,
    color: "purple", // Changed from blue
  },
  {
    id: "detachment",
    title: "Dealing With Inner Forces",
    subtitle: "Detachment",
    description:
      "Learn the art of detachment to gain clarity and freedom in your inner work.",
    icon: Unplug,
    color: "slate", // Changed from amber
  },
];

export default function InnerWorkPage() {
  const sections = [
    { id: "meditation", title: "Meditation: Looking Inward" },
    { id: "landscape", title: "The Inner Landscape" },
    { id: "detachment", title: "Detachment" },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const meditation = document.getElementById("meditation");
      const landscape = document.getElementById("landscape");
      const detachment = document.getElementById("detachment");

      if (!meditation || !landscape || !detachment) return;

      const scrollPosition = window.scrollY + 100;

      if (scrollPosition < landscape.offsetTop) {
        setCurrentSection(0);
      } else if (scrollPosition < detachment.offsetTop) {
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

  const PracticeCard = ({ practice }: PracticeCardProps) => {
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
              <h1 className="text-4xl mb-4">Inner Work</h1>
              <p className="text-xl font-light text-gray-600">
                The journey inward is the foundation of personal transformation.
                Through understanding and working with our inner reality, we
                develop the tools to shape our experience and create lasting
                change.
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
                <div className="lg:w-2/3 border-l border-r border-gray-100 px-8">
                  {/* Introduction 

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 mb-16">
                    The first step to learning how to use this framework to
                    evolve our personal experience is understanding how to see,
                    understand, and actively work with our inner life. This
                    begins with knowing how to look inward.
                  </p>
                </div>*/}

                  {/* Meditation Section */}
                  <div id="meditation" className="mb-16">
                    <div className="mb-8 border-b border-gray-200 pb-7">
                      <motion.h1
                        className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Eye
                          className="w-8 h-8 text-indigo-600"
                          strokeWidth={2}
                        />
                        Meditation: Inward Looking
                      </motion.h1>
                    </div>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-xl text-gray-700 mb-6">
                        The first step to learning how to use this framework to
                        evolve our personal experience is understanding how to
                        see, understand, and actively work with our inner life.
                        This begins with knowing how to look inward.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-800">
                        Meditation is simply the act of looking inward. When
                        many hear this word, they think of specific techniques
                        or practices - sitting cross-legged, breathing
                        exercises, or mantras. But at its core, meditation is
                        about developing our capacity to be present with our
                        inner experience.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        This inward looking requires making space for it. Just
                        as we would need to spend time in a foreign country to
                        understand its culture and customs, we need to dedicate
                        time to our inner world if we want to become familiar
                        with its landscape and learn to navigate it properly.
                        This might mean setting aside specific times - evenings,
                        mornings, or lunch breaks - or simply maintaining
                        awareness of our inner space throughout the day.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        A common misconception is that meditation is purely
                        about the mind or thinking. This stems from a broader
                        confusion in our culture that equates consciousness with
                        mind. However, consciousness is a bigger, more
                        encompassing reality within which mind and thought
                        occur. When we meditate, we're not just observing our
                        thoughts - we're connecting with the full spectrum of
                        our inner experience, including our feelings, body
                        sensations, and the very sense of being itself.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        Through meditation, we develop the basic ability to
                        witness what's happening within us. This witnessing
                        creates the foundation for all inner work, as it allows
                        us to become aware of the various forces and entities
                        that make up our inner life. Without this fundamental
                        capacity to look inward with presence and awareness, any
                        attempt at inner work would be like trying to navigate a
                        landscape with our eyes closed.
                      </p>
                    </div>
                  </div>

                  {/* Inner Landscape Section */}

                  <div id="landscape" className="mb-16">
                    <div className="mb-8 border-b border-gray-200 pb-7">
                      <motion.h1
                        className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Map
                          className="w-8 h-8 text-purple-600"
                          strokeWidth={2}
                        />
                        The Inner Landscape
                      </motion.h1>
                    </div>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-xl text-gray-700 mb-8">
                        Like entering a foreign country for the first time, the
                        sheer quantity of different forces at work in our inner
                        world can feel overwhelming, and it can be difficult to
                        discern one thing from another. Having a map of this
                        territory helps us navigate more effectively. Let's
                        explore some of the essential entities we encounter in
                        our inward space.
                      </p>

                      <div className="space-y-8 mt-8">
                        {/* Thoughts */}
                        <div className="bg-white p-6 rounded-lg border border-gray-100">
                          <h3 className="text-2xl font-medium my-4 flex items-center gap-2">
                            <Brain className="w-6 h-6 text-indigo-700" />
                            Thoughts
                          </h3>
                          <p className="text-lg leading-relaxed text-gray-800">
                            Thoughts are perhaps the most familiar aspect of our
                            inner landscape, yet they come in many forms. While
                            we often experience them as inner dialogue or words,
                            thoughts can also manifest as visual images, sounds,
                            colors, or memories. These are called "thoughtforms"
                            - ideas and concepts taking shape in our mental
                            space.
                          </p>
                          <p className="text-lg leading-relaxed text-gray-800">
                            It's crucial to understand that thoughts are
                            primarily mental entities, associated with the part
                            of us we call "mind." However, this leads to a
                            common confusion in discussions about meditation and
                            inner work - the equation of consciousness with
                            thinking. Mind is an entity that exists within
                            consciousness, but consciousness itself is a bigger,
                            more encompassing reality within which mind and
                            thought occur.
                          </p>
                        </div>

                        {/* Feelings */}
                        <div className="bg-white p-6 rounded-lg border border-gray-100">
                          <h3 className="text-2xl font-medium my-4 flex items-center gap-2">
                            <Waves className="w-6 h-6 text-pink-700" />
                            Feelings
                          </h3>
                          <p className="text-lg leading-relaxed text-gray-800">
                            Feelings are fundamentally different from thoughts
                            in that they are primarily sensorial. Rather than
                            being formed and discrete like thoughts, feelings
                            are more like waves and vibrations - movements that
                            we sense inwardly. Importantly, these sensory
                            experiences don't require physical stimuli; we can
                            "feel" something happening on an inner level, like
                            remembering the smell of a rose or the sound of a
                            favorite song, even without external input.
                          </p>
                          <p className="text-lg leading-relaxed text-gray-800">
                            Feelings manifest across a spectrum - from chaotic
                            emotions like anger, guilt, fear, or sadness, to
                            more balanced forms like quiet knowing or intuition.
                            Learning to recognize and work with this language of
                            feelings is essential to navigating our inner
                            landscape effectively.
                          </p>
                        </div>

                        {/* The Ego */}
                        <div className="bg-white p-6 rounded-lg border border-gray-100">
                          <h3 className="text-2xl font-medium my-4 flex items-center gap-2">
                            <Fingerprint className="w-6 h-6 text-blue-700" />
                            The Ego
                          </h3>
                          <p className="text-lg leading-relaxed text-gray-800">
                            The ego or human personality might seem inseparable
                            from who we are, but when we make the journey
                            inward, we discover it as a distinct entity with its
                            own character, behaviors, qualities, needs, and
                            voice. It is a culmination of all the different
                            aspects of ourselves we have associated with our
                            identity - formed by ideas like "I am a teacher," "I
                            am a survivor," "I had a hard life," and the stories
                            we tell about ourselves.
                          </p>
                          <p className="text-lg leading-relaxed text-gray-800">
                            This entity has developed its own nature based on
                            everything we've fed it over the years about "who we
                            are." It is a more instinctual part of ourselves,
                            deeply related to the inner child. As we learn to
                            observe it, we can begin to recognize its distinct
                            voice and patterns, which is essential for conscious
                            growth and transformation.
                          </p>
                        </div>

                        {/* The Body */}
                        <div className="bg-white p-6 rounded-lg border border-gray-100">
                          <h3 className="text-2xl font-medium my-4 flex items-center gap-2">
                            <User className="w-6 h-6 text-green-700" />
                            The Body
                          </h3>
                          <p className="text-lg leading-relaxed text-gray-800">
                            While the physical body might seem purely "outer,"
                            we actually access it inwardly as well. This dual
                            nature becomes clear when we close our eyes and move
                            our awareness to different parts of the body -
                            feeling the soles of our feet, sensing our abdomen,
                            or experiencing the center of our head.
                          </p>
                          <p className="text-lg leading-relaxed text-gray-800">
                            This inner access to our physical form is crucial
                            for working with energy, as there's a direct
                            correlation between our inner experiences and
                            physical manifestation. For instance, long-held
                            emotional tensions can manifest as physical
                            contractions, while meditation and spaciousness can
                            allow our cells to open up and breathe more freely.
                          </p>
                        </div>
                      </div>

                      <p className="text-lg leading-relaxed text-gray-800 mt-8">
                        Understanding these different aspects of our inner
                        landscape helps us work more effectively with our inner
                        reality. Each has its own nature and requires its own
                        approach, yet all are interconnected parts of our
                        complete inner experience.
                      </p>
                    </div>
                  </div>

                  {/* Detachment Section */}

                  <div id="detachment" className="mb-16">
                    <div className="mb-8 border-b border-gray-200 pb-7">
                      <motion.h1
                        className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Unplug
                          className="w-8 h-8 text-slate-600"
                          strokeWidth={2}
                        />
                        Detachment
                      </motion.h1>
                    </div>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-xl text-gray-700 mb-12">
                        Detachment is often misunderstood. When many people hear
                        this word, they think immediately of dissociation or
                        disconnection - to turn away from or reject something.
                        But this is not detachment. Detachment is primarily a
                        process of disidentification—to make ourselves
                        independent of an inner force, recognizing that what we
                        truly are is <em>bigger</em> than any single aspect of
                        our consciousness.
                      </p>

                      <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">
                        The Observer and the Observed
                      </h2>
                      <p className="text-lg leading-relaxed text-gray-800">
                        Consider a simple but profound question: If you can
                        listen to your thoughts, who is it that's doing the
                        thinking and who is doing the listening? Moreover, if
                        both are "you," which one exists at a higher level? The
                        one doing the listening - the observer - must be
                        primary, because they can be conscious of what they're
                        hearing while also remaining independent of it. The
                        observer can be two things - both aware and separate -
                        while the thinker can only be one.
                      </p>

                      <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">
                        Understanding True Detachment
                      </h2>
                      <p className="text-lg leading-relaxed text-gray-800">
                        Detachment has to do with a certain neutrality - a
                        freedom from bias, prejudice, and partiality. This
                        doesn't mean becoming aloof or uncaring. Being
                        independent and neutral doesn't mean you don't care; it
                        means you don't allow your preference for one reality
                        over another to distort your perception.
                      </p>

                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-6">
                        <h3 className="text-2xl font-medium my-4 flex items-center gap-4">
                          <Unplug className="w-6 h-6 text-indigo-700" />
                          Disidentification and Disentanglement
                        </h3>
                        <ul className="list-none space-y-6 my-8">
                          <li className="pl-6 border-l-2 border-blue-100">
                            "I have a body, but I am not my body"
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            "I have thoughts, but I am not my thoughts"
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            "I have feelings, but I am not my feelings"
                          </li>
                          <li className="pl-6 border-l-2 border-blue-100">
                            "I have a personality, but I am not my personality"
                          </li>
                        </ul>
                      </div>

                      <h2 className="text-2xl font-normal mt-8 mb-6 text-gray-900">
                        The Power of Distance
                      </h2>
                      <p className="text-lg leading-relaxed text-gray-800">
                        The importance of detachment lies in its ability to help
                        us see clearly. As long as we are identified with an
                        inner force or entity - whether it's our anger, our
                        thoughts, or our ego - we cannot see it from the
                        outside. We become that entity. Detachment gives us the
                        space we need to work with all the entities of our inner
                        life from a free and independent space.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        This distance creates the opportunity for objectivity
                        and clarity. There are essentially two parts to our
                        being: one that is objective and the other subjective.
                        The subjective side is involved and personal; the
                        objective side is uninvolved and impersonal. We need
                        both to live a healthy life. Detachment is the tool that
                        allows us to cultivate the objective side with regard to
                        our inner reality.
                      </p>

                      <p className="text-lg leading-relaxed text-gray-800">
                        When we can maintain this neutral, observant stance, we
                        connect more deeply with a part of ourselves that is
                        bigger than any specific form - a part that cannot truly
                        be contained. This freedom is peace, allowing us to work
                        consciously with the forces of our inner lives while
                        maintaining the perspective needed for true
                        transformation.
                      </p>
                    </div>
                  </div>

                  {/* Closing Section */}
                  <div className="mb-16">
                    <h2 className="text-3xl font-normal mb-6 text-gray-900">
                      Conclusion: A Complete Approach to Inner Work
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-xl text-gray-700 mb-16">
                        These three elements - meditation, understanding the
                        inner landscape, and detachment - form an integrated
                        approach to inner work. Each supports and enhances the
                        others: meditation provides the basic capacity to look
                        inward, knowledge of the inner landscape gives us a map
                        of what we'll find there, and detachment offers the tool
                        we need to work effectively with what we discover.
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
            </div>
          </Section>
        </div>
      </PageTransition>
    </>
  );
}
