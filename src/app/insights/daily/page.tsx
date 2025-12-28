// src/app/insights/daily/page.tsx

'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Quote, Search, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { FaTwitter, FaFacebook } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';
import PageTransition from '@/components/ui/PageTransition';
import Section from '@/components/ui/Section';
import { Toast } from '@/components/ui/Toast';

// Types
interface Category {
  id: string;
  name: string;
  description: string;
}

interface Insight {
  id: string;
  date: string;
  mainQuote: string;
  expandedContent: React.ReactNode;
  categories: string[];
}

const categories: Category[] = [
  {
    id: 'inner-truth',
    name: 'Inner Truth & Self-Worth',
    description: 'Insights about authenticity, self-value, and personal truth'
  },
  {
    id: 'balance',
    name: 'Balance & Harmony',
    description: 'Understanding equilibrium in life and consciousness'
  },
  {
    id: 'relationships',
    name: 'Love & Relationships',
    description: 'Wisdom about connection, love, and human bonds'
  },
  {
    id: 'freedom',
    name: 'Fear & Freedom',
    description: 'Exploring fear, liberation, and personal power'
  },
  {
    id: 'practical',
    name: 'Practical Wisdom',
    description: 'Actionable insights for daily life'
  },
  {
    id: 'consciousness',
    name: 'Consciousness & Awareness',
    description: 'Understanding mind, awareness, and perception'
  },
  {
    id: 'growth',
    name: 'Growth & Transformation',
    description: 'Insights about personal evolution and change'
  }
];

const insights: Insight[] = [
    {
        id: 'slow-down',
        date: '2024-12-09',
        categories: ['practical', 'consciousness'],
        mainQuote: "If you can't see what you're doing, slow down. Speed gives you focus, but stillness gives you visibility.",
        expandedContent: (
          <>
            <p>
              Imagine you are driving a vehicle. As it speeds up, the things on the periphery get blurrier 
              and blurrier, while your objective, the destination where the vehicle is pointed, becomes clearer 
              and clearer. The more you speed up, visibility of your aim, objective, or destination increases.
            </p>
            <p>
              Now consider what happens when you slow down. As the vehicle approaches stillness, the images 
              on the sides become clearer and clearer while visibility of your destination becomes unfocused, 
              until the vehicle has come to a full stop and you have regained full visibility.
            </p>
            <p>
              Speed gives you visibility of your objectives, where you are going. But it is when you slow 
              down that you can really see what's going on around you, where you are. If you can't see what 
              is happening, you are probably moving too fast. Breathe, cool down. Close your eyes. Refrain 
              from doing, fixing, focusing for awhile. Return to your center, let the cells of your body 
              breathe. Slow down, then once you feel calm, look again.
            </p>
          </>
        )
      },
      {
        id: 'ritualize',
        date: '2022-12-11',
        categories: ['practical', 'consciousness'],
        mainQuote: "Be mindful of the things you ritualize. They become your structure.",
        expandedContent: (
          <>
            <p>
              A lot is said in the modern world about living in the moment, not getting lost to the past 
              or the future, and being mindful of the life that's right in front of us. This is a very 
              good and necessary step to living a happy life. But what complements our ability to get out 
              of the mind and be present in the moment, is our ability to be conscious of our patterns 
              and habits, those things which we do habitually.
            </p>
            <p>
              Energy builds through ritual and repetition. When we engage in an activity over and over again, 
              especially with regularity (i.e. every morning upon waking, every Friday after work, every 
              evening before bed, etc.), the repetition gives the action more power. It becomes more material 
              and solid with time, eventually becoming part of the structure of our lives.
            </p>
            <p>
              This is true whether the ritual is good or bad for us. While we want to create positive rhythms 
              and patterns, it is just as important to interrupt and replace negative ones. Anything you 
              engage with in a pattern regularly will reify with time.
            </p>
          </>
        )
      },
      {
        id: 'fear-mask',
        date: '2023-04-21',
        categories: ['inner-truth', 'freedom', 'growth'],
        mainQuote: "When you take the 'evil mask' off the face of fear, it is the face of a frightened child you find beneath.",
        expandedContent: (
          <>
            <p>
              There are a lot of frightening faces in the world. The face of fear shows itself in a variety 
              of ways: the face of the schoolyard bully, the face of the dictator or despot, the face of 
              the murderer or offender, the face even of the tormented. Collectively, they are the face of 
              "the villain," the one we have collectively blamed for all the bad in the world. But what we 
              don't always realize is that these faces, the faces of fear in all its myriad forms, are 
              really just a mask.
            </p>
            <p>
              We are all born the same. We come in as innocent children - wide-eyed, in awe of the world, 
              and in love with our parents. And the basic needs of this child—comfort, security, connection, 
              love—are the same basic needs we have as adults. But as we grow older, our trust can get broken. 
              Our basic belief in the goodness and integrity of the people around us can be shaken by hurtful 
              or traumatic experiences.
            </p>
            <p>
              It is critical to understand that fear is at the root of this. Part of the spiritual 
              path is learning how to see past appearances, to a deeper reality. The surface layer of things 
              is always malleable and changeable. It doesn't necessarily represent the truth. What is happening 
              <em> within</em> is a better indicator. The truth is, life is an "inside-out" movement. The 
              surface layer of things is always a reflection of a deeper, <em>inner</em> reality.
            </p>
            <p>
              When you understand that the child is always there, underneath that mask of fear or hatred, 
              <em> you</em> also become less afraid. You are not fooled. While others around you may be focused 
              on the violent, destructive or "evil" face without, you are conscious of the frightened, broken, 
              and lost child within.
            </p>
            <p>
              This understanding allows you to face your own inner monsters. You learn to look past appearances, 
              remove the masks, and heal the hurt child within yourself. A healed inner child becomes a clear 
              channel for light - embodying both the unconditional love of childhood and the wisdom of the 
              mature adult who guides them through the material world.
            </p>
          </>
        )
      },
      {
        id: 'doubt-trust',
        date: '2022-10-12',
        categories: ['inner-truth', 'consciousness'],
        mainQuote: "Doubt is the germ from which the energies of conspiracy and mistrust are born. Trust brings you back to yourself. Your belief again, in the goodness and integrity of what is.",
        expandedContent: (
          <>
            <p>
              A seldom talked about consequence of living in the modern world is a constant, nagging sense 
              of doubt that haunts the mind. We are surrounded by so many lies ("false information"), so 
              much censorship ("modified information"), and so much bad news ("selective information") that 
              it is hard to know what is true, what we can count on, and why we should have faith in 
              anything at all.
            </p>
            <p>
              Where trust is, doubt is not, and vice versa. To cure ourselves of doubt, we must strengthen 
              our trust, to see and perceive the inherent goodness of those around us. To <em>know</em> that 
              it is there.
            </p>
            <p>
              Trust is ultimately not about outcomes. It is not about having a guaranteed behavior from someone. 
              It is about perceiving the core of integrity and goodness in them. You can perceive that in 
              someone while still being realistic with yourself about where they are in their journey, and 
              how able they are to act in accordance with who they really are.
            </p>
            <p>
              <em>Start with yourself</em>. Don't forget your outer reality is a reflection of your inner one. 
              Are <em>you</em> behaving with integrity? Can you see the goodness in <em>you</em>, the same 
              way you did in your parents when you were a child? Do you feel <em>you</em> can be trusted?
            </p>
          </>
        )
      },
      {
        id: 'be-nothing',
        date: '2023-02-17',
        categories: ['consciousness', 'inner-truth'],
        mainQuote: "Only when you have learned how to be nothing can you truly be free.",
        expandedContent: (
          <>
            <p>
              There is a secret at the core of all spirituality. It has to do with a <em>non</em>-doing, 
              a <em>non</em>-action. An emptiness that is <em>not</em> empty. A void at the center of 
              all creation.
            </p>
            <p>
              In the material world, it is our ego that wants to be something. It is the ego that lives 
              in the land of personal identities. All the things we call ourselves, American or European 
              or African, artist or architect or engineer, man or woman, rich or poor. It is identifying 
              with the ego that causes us to want to <em>be</em> something specifically. Especially 
              something that within our value system we have deemed worthy.
            </p>
            <p>
              But this is the secret at the core of all spiritual traditions. When you move inward you 
              will discover at the core of your being a <em>nothingness</em>. You will discover that 
              when you are <em>dis</em>-identified, when you are unshackled and unattached to all your 
              various forms and identities, to any "be"-ing, you are free to be everything.
            </p>
          </>
        )
      },
    {
    id: 'truth-love',
    date: '2024-03-28',
    categories: ['balance', 'relationships'],
    mainQuote: "Don't let your love change the truth. Don't let the truth change your love. These two stand as pillars.",
    expandedContent: (
      <>
        <p className="mb-4">
          Love and truth must exist in balance. When we let love compromise truth, or 
          when we let harsh truths diminish our capacity for love, we lose our way. 
          These qualities are meant to complement and strengthen each other, not compete.
        </p>
        <p className="mb-4">
          Together, they create the road to balance. Truth gives shape and structure 
          to our love, preventing it from becoming blind or enabling. Love gives warmth 
          and compassion to our truth, preventing it from becoming cold or cruel.
        </p>
        <p>
          Maintain the integrity of both pillars. Don't sacrifice one for the other. 
          Let truth guide your love, and let love inform your truth. This is how we 
          find our way to wisdom.
        </p>
      </>
    )
  },
  {
    id: 'mind-and-heart',
    date: '2022-04-21',
    categories: ['consciousness', 'balance'],
    mainQuote: "The best of you is not in your head. It is in your heart.",
    expandedContent: (
      <>
        <p>
          What we have been able to achieve with the intellect in the last 500 years is nothing 
          short of incredible. It has allowed us to build machines that have transformed virtually 
          every area of human life. But the quality that will finally transform the world into 
          the peaceful paradise we seek will not be intelligence, but empathy.
        </p>
        <p>
          The intellect is a tool. On its own, it is neutral. It does not have a mind for how 
          it is used. It has a mind for method, but not intention. It can be used to build or 
          destroy, to work for life or to take it away.
        </p>
        <p>
          Empathy is not the same. While the intellect gives us insight into aspects of our 
          observable reality that are quantitative and mathematical, it is empathy which gives 
          insight into those aspects which are qualitative and emotional. At the end of the day, 
          it is these qualitative and emotional factors that are most responsible for the divided 
          and fractured world we live in today.
        </p>
        <p>
          Remember this when you consider what values to develop in yourself or to teach to others. 
          Consider that a highly intelligent person is not necessarily a highly joyful person or 
          a highly balanced person. Connection, facilitated by empathy and strong human relationships, 
          means more for our health and happiness in the long-term. The highest of who we are is 
          in our highest feeling, which is love, and love is intelligence tempered by wisdom and empathy.
        </p>
      </>
    )
  },
  {
    id: 'others-choices',
    date: '2022-03-25',
    categories: ['relationships', 'practical'],
    mainQuote: "You are not responsible for the outcomes of other people's choices.",
    expandedContent: (
      <>
        <p>
          This has been one of the most challenging and important lessons of my life. It is very easy 
          with the people we love, especially in family situations, to get so involved in other people's 
          challenges that we get affected emotionally by how things turn out for them, sometimes even 
          feeling guilty if they do not improve or if they get into a bad situation. We may feel as if 
          we could have done more, that their health or happiness somehow was or is in our hands.
        </p>
        <p>
          The point is, you cannot be responsible for a choice you cannot make. It is one of the great 
          gifts of the universe that we create our own reality, that we decide what we want to do with 
          our time, energy, and attention. But when you get this confused and start thinking you are 
          responsible for others or others are responsible for you, that you are the master of other 
          people's reality or that they are the master of yours, it only leads to confusion and 
          disappointment down the road.
        </p>
        <p>
          We cannot own another person's failure in the same way that we cannot own their success. The 
          truth is, no matter how much you might want someone to get better or to change, whether they 
          ultimately do or not is not in your hands. It is an inconvenient truth, but the sooner you 
          can accord yourself with it, the sooner you will find peace within yourself.
        </p>
      </>
    )
  },
  {
    id: 'focus-abundance',
    date: '2022-02-02',
    categories: ['consciousness', 'practical'],
    mainQuote: "When we focus on what is not there, we create the experience of lack. When we focus on what is there, we create the experience of abundance.",
    expandedContent: (
      <>
        <p>
        Our attention can be absorbed in what is not there, what is missing, even if we have "a lot." 
        When we are very focused on what is absent, our reality is filled with lack and scarcity. 
        In this way, we can experience poverty, even if we are surrounded by riches.
        </p>
        <p>
        To experience richness and abundance, we must create gratitude, and the feeling of gratitude 
        arises from a deep awareness of value. Think of your consciousness of the value of the warmth 
        of your home when arriving after a cold day outside without a jacket. It is awareness of 
        value that creates the feeling of gratitude.
        </p>
        <p>
        We can be surrounded by riches, but be blind to value. If we are blind to value, even if we 
        are surrounded by riches, we will experience poverty.
        </p>
      </>
    )
  },
  {
    id: 'uncaged-love',
    date: '2024-06-03',
    categories: ['relationships', 'freedom'],
    mainQuote: "Love is like a bird. When you try to cage it, it loses everything that makes it beautiful.",
    expandedContent: (
      <>
        <p>
          True love thrives in freedom. Like a bird in flight, its beauty lies in its natural 
          movement, its ability to soar and express itself fully. When we try to constrain or 
          control love - through possessiveness, jealousy, or fear - we diminish its essential nature.
        </p>
        <p>
          Just as a caged bird may survive but loses its song, love that is imprisoned by our 
          need for control loses its vitality and grace. The challenge is to love while letting go, 
          to cherish while allowing freedom.
        </p>
      </>
    )
  },
  {
    id: 'best-structures',
    date: '2022-06-28',
    categories: ['practical', 'growth'],
    mainQuote: "The best structures always leave room for change.",
    expandedContent: (
      <>
        <p>
          It is good to imagine exactly how you want things to be. The best structures 
          have brilliant architecture and are well-organized. But you cannot forget that 
          nothing is static. Change is inevitable. Knowing this, it is wise to plan for it.
        </p>
        <p>
          The best structures are flexible and leave room for change, both internal and 
          external to the system. If you do not build this in, even with the most brilliant 
          system, the structure will inevitably break apart over time.
        </p>
        <p>
          A good system is planned and built with respect to the whole, based on the factors 
          given in the time it is created. But when it is also given the space needed to 
          change and adapt over time, it remains resilient and can grow and change with 
          the world.
        </p>
      </>
    )
  },
  {
    id: 'acknowledge-value',
    date: '2022-09-05',
    categories: ['inner-truth', 'growth'],
    mainQuote: "If you aren't willing to acknowledge your own value, then you don't really know what you have to offer. If you want to live more abundantly, first acknowledge the value in you.",
    expandedContent: (
      <>
        <p>
          There is such a thing as false humility. False humility is when you make yourself small, 
          not because there is anything small about you or your ability, but because you think 
          it is better, higher, or more noble to pretend that you are nothing, or that what you 
          have done is nothing. It is not.
        </p>
        <p>
          There is nothing enlightened about shrinking so other people don't feel insecure around 
          you, or making yourself small for fear of appearing "too big" in the eyes of others. 
          Acknowledge your value without comparing it to others. That is the secret to feeling 
          confidence without egoic superiority.
        </p>
        <p>
          The truth is, there is no comparison. If there is something great about you, it is 
          about you and only you. You are allowed to love yourself, to see all the good in you, 
          and even to acknowledge the parts of you that are great. Simply do so with the attitude 
          that this greatness exists in everyone, just as it does in you. In some, it is simply hidden.
        </p>
        <p>
          To live abundantly means that you feel wealthy inwardly first. Get to know yourself; 
          the unique being that you are. Learn to love yourself. Find your talents. When you 
          know who you are and the value that lives inside you, you can come back to the world 
          with treasure in your hands and offer her the best of you.
        </p>
      </>
    )
  },
  {
    id: 'next-step',
    date: '2022-05-10',
    categories: ['practical', 'growth'],
    mainQuote: "You don't have to worry about it all at once. Just the next step.",
    expandedContent: (
      <>
        <p>
          Sometimes the task in front of us can seem overwhelming, but the truth is no matter how large 
          or overwhelming it is, the road forward is always the same. One foot after the other.
        </p>
        <p>
          Rather than looking at the whole thing at once, try instead just to focus on the next step. 
          Even if nothing else is clear to you, it is truly the only thing you need to move forward.
        </p>
      </>
    )
  },
  {
    id: 'childrens-emotions',
    date: '2024-05-06',
    categories: ['relationships', 'consciousness'],
    mainQuote: "Just because our children are little, it doesn't mean they don't have big emotions.",
    expandedContent: (
      <>
        <p>
          Think back to how you felt when you were little, how it felt to be disappointed, to get sad, 
          or to be scared. They are children, but it doesn't mean their challenge is less. Their world 
          may be smaller than ours, but their feelings are just as big.
        </p>
        <p>
          Let's not discount their experience, simply because they're not fully grown. To acknowledge 
          their challenge is to be more conscious with how we love them. When we recognize the depth 
          of their emotional experience, we open the door to deeper connection and understanding.
        </p>
        <p>
          In honoring their emotions, we teach them that their feelings matter, that they are seen 
          and heard. This validation becomes the foundation for emotional intelligence and healthy 
          self-expression as they grow and mature themselves.
        </p>
      </>
    )
  },
  {
    id: 'inner-outer-reality',
    date: '2024-04-06',
    categories: ['consciousness', 'balance'],
    mainQuote: "There is an inner and an outer dimension to reality. Remember to give attention to your inner life, just as much as you do to your outer one. This is a part of balance.",
    expandedContent: (
      <>
        <p>
          In our modern world, we often become consumed by external achievements and appearances. 
          We focus on what can be seen, measured, and validated by others. While the outer 
          dimension of life is important, it's only half of our total reality.
        </p>
        <p>
          The inner dimension - our thoughts, feelings, beliefs, and awareness - 
          they deserve equal attention. This internal landscape is where our deepest needs arise, and where the road to true satisfaction originates.
        </p>
        <p>
          Balance comes from tending to both dimensions. When we neglect our inner world, 
          our outer achievements can feel hollow and disconnected. When we ignore the outer world, we miss 
          opportunities for self-expression and the grounded manifestation of our inner growth. True fulfillment comes 
          from a harmony between both aspects of our existence.
        </p>
      </>
    )
  },
  {
    id: 'value-perception',
    date: '2024-06-26',
    categories: ['practical', 'consciousness'],
    mainQuote: "Value is where you see it. When you can truly see it in your Self, it won't matter what others think anymore.",
    expandedContent: (
      <>
        <p>
          Our experience of value is intimately connected to our perception. Two people 
          can look at the same thing and see completely different levels of worth, 
          because value isn't just about what's there - it's about our ability to 
          recognize and appreciate it.
        </p>
        <p>
          This is especially true when it comes to self-worth. When we learn to 
          recognize and appreciate our own value, we become less dependent on others' 
          opinions and validation. We stop letting society dictate our worth.
        </p>
        <p>
          The key is developing the ability to see value clearly, starting with 
          ourselves. When we can truly appreciate our own worth, we naturally begin 
          to see more value in everything around us. Our inner recognition becomes 
          the foundation for a richer experience of life itself.
        </p>
      </>
    )
  },
  // Add more insights here...
];

const InsightCard = ({ insight, expanded, onToggle }: { 
  insight: Insight; 
  expanded: boolean; 
  onToggle: () => void;
}) => {
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = async () => {
    try {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      const insightUrl = `${baseUrl}/insights/daily#${insight.id}`; 
      await navigator.clipboard.writeText(insightUrl);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const share = (platform: string) => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const insightUrl = `${baseUrl}/insights/daily#${insight.id}`; 
    const text = `"${insight.mainQuote}" - P. Orelio Sattari`;
    
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(insightUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(insightUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(insightUrl)}`
    };

    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <motion.div
      layout
      id={insight.id}  // Add this line
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
    >
      <div className="p-4 md:p-8">
      {/* Header with date and categories */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center text-gray-500 mb-6">
        {/* Date */}
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <time className="text-sm">
            {new Date(insight.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        
        <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0 sm:gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {insight.categories.map(catId => {
              const category = categories.find(c => c.id === catId);
              return (
                <span 
                  key={catId}
                  className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-full"
                >
                  {category?.name}
                </span>
              );
            })}
          </div>
          
          {/* Share buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => share('twitter')}
              className="p-1.5 hover:bg-gray-50 rounded-full transition-colors"
              aria-label="Share on Twitter"
            >
              <FaTwitter className="w-4 h-4 text-[#1DA1F2]" />
            </button>
            <button
              onClick={() => share('facebook')}
              className="p-1.5 hover:bg-gray-50 rounded-full transition-colors"
              aria-label="Share on Facebook"
            >
              <FaFacebook className="w-4 h-4 text-[#1877F2]" />
            </button>
            <button
              onClick={copyToClipboard}
              className="p-1.5 hover:bg-gray-50 rounded-full transition-colors"
              aria-label="Copy link"
            >
              <HiLink className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

        {/* Main quote */}
        <div className="mb-6">
          <div className="flex gap-3">
            <Quote size={24} className="text-blue-600 flex-shrink-0 mt-1" />
            <h2 className="text-xl font-light text-gray-900 leading-relaxed">
              {insight.mainQuote}
            </h2>
          </div>
        </div>

        {/* Expandable content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="prose prose-gray prose-lg max-w-none">
                {insight.expandedContent}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand/Collapse button */}
        <button 
          onClick={onToggle}
          className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          {expanded ? (
            <>
              <span className="text-sm">Read less</span>
              <ChevronUp size={16} />
            </>
          ) : (
            <>
              <span className="text-sm">Read more</span>
              <ChevronDown size={16} />
            </>
          )}
        </button>
      </div>
      
      {showToast && <Toast message="Link copied to clipboard!" />}
    </motion.div>
  );
};

export default function DailyInsightsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const insight = insights.find(i => i.id === hash);
        if (insight) {
          setExpandedId(hash);
          setTimeout(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, []);

  const filteredInsights = insights.filter(insight => {
    const matchesSearch = searchTerm === '' || 
      insight.mainQuote.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategories = selectedCategories.length === 0 || 
      insight.categories.some(cat => selectedCategories.includes(cat));
    
    return matchesSearch && matchesCategories;
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Section width="default" className="pt-16 md:pt-24">
          <div className="max-w-4xl mx-auto px-2 md:px-4">
            {/* Header */}
            <div className="text-center mb-14 md:mb-16">
              <h1 className="text-4xl font-light mb-4">Daily Insights</h1>
              <p className="text-xl text-gray-600">
                Contemplations on consciousness, reality, and human experience
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-8 space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Categories */}
              <div>
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Filter size={20} />
                  <span>Filter by category</span>
                  {showCategories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <AnimatePresence>
                  {showCategories && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2"
                    >
                      {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => {
                            setSelectedCategories(prev => 
                              prev.includes(category.id)
                                ? prev.filter(id => id !== category.id)
                                : [...prev, category.id]
                            );
                          }}
                          className={`p-2 rounded-lg text-sm text-left transition-colors ${
                            selectedCategories.includes(category.id)
                              ? 'bg-blue-50 text-blue-600'
                              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Insights Grid */}
            <div className="space-y-8">
              {filteredInsights.map((insight) => (
                <InsightCard
                  key={insight.id}
                  insight={insight}
                  expanded={expandedId === insight.id}
                  onToggle={() => setExpandedId(expandedId === insight.id ? null : insight.id)}
                />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}