import React from 'react';
import { BookOpen, Compass, Eye, Brain, Scale } from 'lucide-react';

export default function ConceptualFramework() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4">Understanding Reality</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the bridge between consciousness and physical reality through these fundamental principles
          </p>
        </div>

        <div className="grid gap-8">
          {/* Foundational Dualities */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Scale className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Foundational Dualities</h3>
                <p className="text-gray-600 mb-4">
                  Understand how reality emerges through the interplay of complementary forces
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      pair: "Subject & Object",
                      description: "The observer and the observed, consciousness and matter"
                    },
                    {
                      pair: "Continuous & Discrete",
                      description: "The unbroken whole and its distinct parts"
                    },
                    {
                      pair: "Measurable & Immeasurable",
                      description: "Physical phenomena and conscious experience"
                    },
                    {
                      pair: "Universal & Relative",
                      description: "Objective truth and personal truth"
                    }
                  ].map((duality) => (
                    <div key={duality.pair} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">{duality.pair}</h4>
                      <p className="text-sm text-gray-600">{duality.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experiential Elements */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-50 rounded-lg">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Experiential Understanding</h3>
                <p className="text-gray-600 mb-4">
                  Connect these principles to your direct experience of reality
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Perception",
                      description: "How we receive and interpret reality through our individual frame of reference"
                    },
                    {
                      title: "Belief",
                      description: "The power of conviction in shaping our relative experience"
                    },
                    {
                      title: "Integration",
                      description: "Aligning our relative truth with universal laws"
                    }
                  ].map((element) => (
                    <div key={element.title} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">{element.title}</h4>
                      <p className="text-sm text-gray-600">{element.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Integration */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-lg">
                <Compass className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Personal Integration</h3>
                <p className="text-gray-600 mb-4">
                  Discover how these principles manifest in your own experience
                </p>
                <div className="space-y-4">
                  {[
                    "Reflect on your own frame of reference and how it shapes your reality",
                    "Examine the beliefs that define your relative experience",
                    "Explore the relationship between your consciousness and physical reality",
                    "Consider how understanding these principles can transform your experience"
                  ].map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-600" />
                      <p className="text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}