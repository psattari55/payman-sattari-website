"use client";

import React from "react";
import { Unplug, Eye, Shield, Orbit, ArrowRight } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import Section from "@/components/ui/Section";
import Link from "next/link";

export default function DetachmentPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <Section width="default" className="pt-12 md:pt-24 pb-16">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="mb-8 border-b border-gray-200 pb-7">
              <h1 className="text-3xl md:text-4xl font-normal mb-1 tracking-wide text-gray-900 leading-tight flex items-center gap-3">
                <Unplug className="w-8 h-8 text-slate-600" strokeWidth={2} />
                Detachment
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700">
                Detachment is the practice of developing independence from our inner forces while maintaining our capacity to work with them. Through detachment, we create the space needed to see clearly and act consciously.
              </p>
            </div>
          </div>

          {/* Understanding Detachment */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-normal mb-6 text-gray-900">Understanding Detachment</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Many misunderstand detachment as disconnection or turning away from experience. True detachment is about disidentification—recognizing that what we truly are is bigger than any single aspect of our consciousness. This understanding creates the foundation for genuine inner work.
              </p>
              
              <p>
                Consider a simple but profound question: If you can listen to your thoughts, who is doing the thinking and who is doing the listening? The observer—the one who can be aware of both the thinking and the listening—must exist at a more fundamental level, capable of witnessing all aspects of our experience while remaining independent of them.
              </p>

              <p>
                This capacity for neutral observation doesn't mean becoming aloof or uncaring. Instead, it allows us to engage with our experience without being overwhelmed by it, maintaining clarity even in the midst of strong emotions or challenging situations.
              </p>
            </div>
          </div>

{/* The Practice of Detachment */}
<div className="max-w-3xl mx-auto mb-16">
 <h2 className="text-2xl font-normal mb-6 text-gray-900">The Practice of Detachment</h2>
 <div className="prose prose-lg max-w-none">
   <p>
     At its core, detachment is about cultivating a neutral, observant stance toward our inner experience. This neutrality creates the opportunity for both objectivity and clarity—allowing us to work with the forces of our inner life from a free and independent space.
   </p>

   <div className="bg-white p-6 rounded-lg border border-gray-100 my-8">
     <h3 className="text-xl font-medium mb-4">Key Aspects of Practice</h3>
     <div className="space-y-6">
       <div>
         <h4 className="text-lg font-medium mb-2">Neutrality</h4>
         <p className="text-gray-800">
           Developing freedom from bias, prejudice, and partiality. This doesn't mean not caring, but rather not allowing preferences to distort our perception.
         </p>
       </div>
       
       <div>
         <h4 className="text-lg font-medium mb-2">Distance</h4>
         <p className="text-gray-800">
           Creating enough space to see clearly. As long as we're identified with an inner force—whether anger, thoughts, or ego—we cannot see it from the outside.
         </p>
       </div>
       
       <div>
         <h4 className="text-lg font-medium mb-2">Non-Interference</h4>
         <p className="text-gray-800">
           Learning to observe without trying to change or control what we see. This allows inner forces to reveal their true nature.
         </p>
       </div>
     </div>
   </div>

   <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-8">
     <h4 className="text-lg font-medium mb-4">Stages of Disidentification</h4>
     <ul className="space-y-4 pl-0 list-none">
       <li className="pl-6 border-l-2 border-slate-200">
         "I have a body, but I am not my body"
       </li>
       <li className="pl-6 border-l-2 border-slate-200">
         "I have thoughts, but I am not my thoughts"
       </li>
       <li className="pl-6 border-l-2 border-slate-200">
         "I have feelings, but I am not my feelings"
       </li>
       <li className="pl-6 border-l-2 border-slate-200">
         "I have a personality, but I am not my personality"
       </li>
     </ul>
   </div>
 </div>
</div>

{/* Integration with Inner Work */}
<div className="max-w-3xl mx-auto mb-16">
 <h2 className="text-2xl font-normal mb-6 text-gray-900">Integration with Inner Work</h2>
 <div className="prose prose-lg max-w-none">
   <p>
     Detachment is essential for effective inner work, providing the perspective needed to work consciously with our inner forces. When we maintain this neutral, observant stance, we connect with a part of ourselves that is bigger than any specific form—a part that cannot be contained by any single aspect of our experience.
   </p>

   <p>
     There are essentially two parts to our being: one subjective and involved, the other objective and uninvolved. We need both to live a healthy life. The subjective side allows us to fully experience life, while the objective side provides the clarity needed to navigate it consciously.
   </p>

   <p>
     Through regular practice of detachment, we develop the ability to move freely between these two modes of being. This flexibility allows us to engage fully with life while maintaining the perspective needed for conscious development.
   </p>
 </div>
</div>

{/* Closing */}
<div className="max-w-3xl mx-auto mb-16">
 <div className="prose prose-lg max-w-none">
   <p className="text-xl text-gray-700">
     The practice of detachment develops our capacity to work consciously with all aspects of our experience. Through cultivating this neutral, observant stance, we gain both the clarity to see our inner world as it is and the freedom to engage with it effectively.
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
         Develop presence and awareness through practices that enhance your capacity to be with inner experience.
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