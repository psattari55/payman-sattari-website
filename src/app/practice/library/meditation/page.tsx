"use client";

import React from "react";
import { Orbit, Eye, Shield, Unplug, ArrowRight } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import Section from "@/components/ui/Section";
import Link from "next/link";

export default function MeditationPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <Section width="default" className="pt-24 pb-16">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="mb-8 border-b border-gray-200 pb-7">
              <h1 className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-3">
                <Orbit className="w-8 h-8 text-indigo-600" strokeWidth={2} />
                Meditation
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700">
                Meditation is simply the act of looking inward. There are as many ways to explore and work with our inner space as there are to exercise our body or create art. What matters is developing our capacity to be present with our inner experience.
              </p>
            </div>
          </div>

          {/* Understanding Meditation */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-normal mb-6 text-gray-900">Understanding Meditation</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                When many hear the word meditation, they think of specific techniques—sitting cross-legged, breathing exercises, or mantras. But at its core, meditation is about making space to be with our inner experience, just as we might set aside time to visit a new country and learn its customs.
              </p>

              <p>
                This practice doesn't require special conditions or complicated techniques. It might mean setting aside specific times—mornings, evenings, or lunch breaks—or simply maintaining awareness of our inner space throughout the day. What matters is the quality of attention we bring to our inner world.
              </p>

              <p>
                The practices shared here serve as starting points. As you develop familiarity with your inner space, you may discover your own unique ways of working with consciousness that bring clarity and understanding.
              </p>
            </div>
          </div>

{/* Practices */}
<div className="max-w-3xl mx-auto mb-16">
 <h2 className="text-2xl font-normal mb-6 text-gray-900">Practices</h2>
 
 {/* Observer Meditation */}
 <div className="mb-16">
   <h3 className="text-xl font-medium mb-6 text-gray-900">Observer Meditation</h3>
   <div className="prose prose-lg max-w-none">
     <p>
       Observer meditation develops our capacity to witness our inner experience without becoming entangled in it. Through this practice, we cultivate the ability to observe thoughts, feelings, and sensations from a place of clarity and independence.
     </p>

     <div className="bg-white p-6 rounded-lg border border-gray-100 my-8">
       <h4 className="text-lg font-medium mb-4">Practice</h4>
       <ol className="space-y-4">
         <li>Find a comfortable position where you can remain alert yet relaxed.</li>
         <li>Allow your attention to rest within your inner space, as if you're sitting in an observation point.</li>
         <li>Notice whatever arises—thoughts, feelings, sensations, memories—without trying to change or engage with them.</li>
         <li>When you notice yourself becoming involved with what you're observing, gently return to the position of the witness.</li>
         <li>Continue this practice for whatever duration feels natural, gradually extending the time as you become more comfortable.</li>
       </ol>
     </div>

     <p>
       A key element of this practice is developing neutrality—the ability to observe without preference or bias. This doesn't mean becoming cold or disconnected, but rather developing the capacity to see clearly without being swayed by our usual reactions and judgments.
     </p>

     <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-8">
       <h4 className="text-lg font-medium mb-4">Common Challenges</h4>
       <ul className="space-y-4">
         <li><strong>Getting caught in content:</strong> It's natural to become absorbed in thoughts or feelings. When you notice this happening, simply return to the observer's position.</li>
         <li><strong>Wanting to change what you see:</strong> The urge to fix or improve what we observe is common. Practice allowing everything to be as it is.</li>
         <li><strong>Judging the practice:</strong> Thoughts about doing it "right" or "wrong" are also part of what we observe.</li>
       </ul>
     </div>
   </div>
 </div>

 {/* Grounding Meditation */}
 <div className="mb-16">
   <h3 className="text-xl font-medium mb-6 text-gray-900">Grounding Meditation</h3>
   <div className="prose prose-lg max-w-none">
     <p>
       Grounding meditation helps us connect with our physical presence and the stabilizing energy of the earth. This practice is particularly helpful when we feel scattered, disconnected, or overwhelmed by mental activity.
     </p>

     <div className="bg-white p-6 rounded-lg border border-gray-100 my-8">
       <h4 className="text-lg font-medium mb-4">Practice</h4>
       <ol className="space-y-4">
         <li>Stand with feet shoulder-width apart in a stable, comfortable position. If possible, practice barefoot.</li>
         <li>Close your eyes and take a few deep breaths, allowing external distractions to fade.</li>
         <li>Bring your attention to your body, starting from either the crown of your head or your heart.</li>
         <li>Slowly move your awareness downward through your body, paying special attention to your belly center.</li>
         <li>Focus on the soles of your feet, feeling their complete contact with the ground.</li>
         <li>Imagine or sense your connection extending below your feet into the earth.</li>
         <li>Stay with this connection, feeling the stability and support it provides.</li>
       </ol>
     </div>

     <p>
       This practice helps develop a stronger sense of physical presence and connection to your body. Regular practice can enhance your ability to stay centered during challenging situations and maintain clearer awareness of your physical experience.
     </p>

     <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-8">
       <h4 className="text-lg font-medium mb-4">Working with Challenges</h4>
       <ul className="space-y-4">
         <li><strong>Mental distraction:</strong> The mind may wander frequently. Simply return focus to bodily sensation.</li>
         <li><strong>Physical discomfort:</strong> Adjust your position as needed while maintaining overall stability.</li>
         <li><strong>Difficulty feeling connection:</strong> Focus on physical sensations first—weight, pressure, temperature—before working with subtle awareness.</li>
       </ul>
     </div>
   </div>
 </div>
</div>

{/* Closing */}
<div className="max-w-3xl mx-auto mb-16">
  <div className="prose prose-lg max-w-none">
    <p className="text-xl text-gray-700">
      These practices serve as entry points into meditation. As you work with them, you'll develop your own understanding of what it means to look inward and be present with your experience. Regular practice builds the foundation for deeper inner work and conscious development.
    </p>
  </div>
</div>

{/* Practice Navigation */}
<div className="pt-8 border-t border-gray-200">
  <h2 className="text-2xl font-normal mt-2 mb-8 text-gray-900">
    Continue Reading
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <Link href="/practice/library/detachment" className="block p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center">
            <Unplug className="w-5 h-5" />
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </div>
        <h3 className="text-xl font-normal text-gray-900 mb-2">
          Detachment
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Learn to observe and work with inner forces while maintaining independence from them.
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
          Explore the foundation of personal transformation through understanding and working with inner reality.
        </p>
      </Link>
    </div>

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
          Understand and work with natural limits while maintaining connection and understanding.
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