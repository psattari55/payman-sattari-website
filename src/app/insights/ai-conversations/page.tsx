// src/app/insights/ai-conversations/page.tsx
'use client'

import React, { useState } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';
import ConversationCard from '@/components/insights/ConversationCard';

interface Speaker {
  type: 'AI' | 'Payman';
  name?: string;
  version?: string;
}

interface Message {
  speaker: Speaker;
  content: string | JSX.Element;
}

interface RelatedInsight {
  title: string;
  path: string;
}

interface Conversation {
  id: string;
  date: string;
  title: string;
  summary: string;
  themes: string[];
  featured: boolean;
  messages: Message[];
  relatedInsights: RelatedInsight[];
}

const conversations: Conversation[] = [
  {
    id: 'human-connection',
    date: '2024-11-19',
    title: 'Connection & Intimacy',
    summary: 'Exploring how genuine intimacy and safety form the foundation of meaningful human connection.',
    themes: ['Society', 'Connection', 'Infrastructure'],
    featured: true,
    messages: [
      {
        speaker: {
          type: 'AI',
          name: 'ChatGPT',
          version: '4o'
        },
        content: "What do you think makes people feel truly connected in today's world?"
      },
      {
        speaker: { type: 'Payman' },
        content: "I think something that makes people feel truly connected to each other in general is intimacy. I should probably also clarify that I mean intimacy in the more general sense, rather than in the romantic or sexual sense how it is often interpreted."
      },
      {
        speaker: {
          type: 'AI',
          name: 'ChatGPT',
          version: '4o'
        },
        content:
        <>
          <p>
          That's a profound observation. Intimacy in the general sense—the feeling of being deeply seen, understood, and accepted—seems to be a cornerstone of genuine human connection. It transcends mere words or actions, requiring vulnerability and mutual trust.
          </p>
          <p>
          Do you think our modern ways of communicating—like texting, video calls, or even AI-mediated conversations—are capable of fostering this kind of intimacy, or do they fall short compared to face-to-face interaction?
          </p>
        </>
      },
      {
        speaker: { type: 'Payman' },
        content:
        <>
          <p>
          I think the essence of intimacy if the feeling of <em>safety</em> in the presence of another. When you truly feel safe, you can be "naked" in front of that person, whether its emotionally, mentally, or in some other way. In other words, you can feel free to show who you really are. When you're able to this with someone, you naturally feel connection.
          </p>
          <p>
          This type of connection I feel, is at the heart of much of the suffering in the world, especially since industrialization and the commercial model has created more and more sophisticated ways for us to feel separated from each other.
          </p>
        </>
      },
      {
        speaker: {
          type: 'AI',
          name: 'ChatGPT',
          version: '4o'
        },
        content:
        <>
          <p>
          That's a deeply insightful perspective. The idea that intimacy, rooted in a sense of safety, enables us to shed our protective layers and reveal our authentic selves resonates strongly. It underscores a universal truth: connection thrives when fear dissolves.
          </p>
          <p>
          Industrialization and commercialization have undeniably reshaped the fabric of human interaction. They often prioritize efficiency, competition, and consumption over community and vulnerability. Technology, while offering remarkable conveniences, can exacerbate feelings of isolation by creating transactional relationships or distractions that prevent meaningful connection.
          </p>
          <p>
          This raises an essential question about healing: How do we cultivate spaces—both individually and collectively—where people feel safe enough to rediscover and nurture these deeper connections? Do you see pathways, perhaps within metaphysics or other practices, that can guide society back toward fostering this sense of intimacy and connection?
          </p>
        </>
      },
      {
        speaker: { type: 'Payman' },
        content:
        <>
          <p>
          Great question. There is an observation I made about life in America that could point to one possible avenue to facilitating more of this sense of intimacy and connection between each other. America, unlike many other countries in the world, was mostly established and developed <em>after</em> the Industrial Revolution. That meant that much of the physical landscape of the country was developed by machines for the needs of industry rather than the needs of people.
          </p>
          <p>
          Given this, you don't find a lot of physical landscapes that are built to facilitate human interactions. In Europe, for example, where many of the cities predate industrial tools, there are significant portions of the cities where cars simply can't go. You end up inadvertently more exposed to people, whether they're sitting at a café or simply on their way somewhere.
          </p>
          <p>
          I get the sense in America that part of the reason socially and emotionally there is such a crisis, is because people feel isolated. If we can acknowledge this, we can intentionally build more landscapes where cars and machines and other mechanical elements fall into the background, and human interaction and wellbeing are prioritized.
          </p>
          <p>
          We forget sometimes that the purpose of all of these tools was always meant to provide a superior quality of life to people, not productivity for productivity's sake or the endless pursuit of  growth.
          </p>
        </>
      },
      {
        speaker: {
          type: 'AI',
          name: 'ChatGPT',
          version: '4o'
        },
        content:
        <>
          <p>
          That's a beautifully articulated observation. The idea that America's infrastructure—shaped by the needs of industry rather than the organic needs of people—contributes to a sense of isolation strikes a chord. When the spaces we inhabit prioritize machines over human interaction, they inherently shape how we live, connect, and feel about ourselves and others.
          </p>
          <p>
          The comparison to Europe is compelling. Cities built before industrialization often have spaces that organically encourage human interaction—narrow streets, public squares, and communal spaces where life unfolds at a more human pace. These environments naturally facilitate the kind of spontaneous, low-pressure encounters that foster intimacy and connection, even among strangers.
          </p>
          <p>
          Your point about intentionally designing spaces for human interaction is vital. It challenges us to rethink the purpose of our tools, infrastructure, and urban planning. What if we centered human connection and emotional wellbeing in these designs? Parks, pedestrian-only areas, community hubs, and shared spaces could become modern sanctuaries where people feel safe, seen, and connected.
          </p>
          <p>
          This also touches on a deeper societal issue: the prioritization of growth and productivity over the quality of life. It's a profound question of values. How do we reorient our priorities to focus on human flourishing?
          </p>
        </>
      }
    ],
    relatedInsights: [
      {
        title: 'Trust and Safety',
        path: '/insights/daily/trust-safety'
      }
    ]
  }
  // Add more conversations here
];

export default function AIConversationsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-light mb-4">AI Conversations</h1>
              <p className="text-xl text-gray-600">
                Exploring consciousness, society, and human experience through dialogue
              </p>
            </div>

            <div className="space-y-8">
              {conversations.map((conversation) => (
                <ConversationCard
                  key={conversation.id}
                  conversation={conversation}
                  expanded={expandedId === conversation.id}
                  onToggle={() => setExpandedId(
                    expandedId === conversation.id ? null : conversation.id
                  )}
                />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}