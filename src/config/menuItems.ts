// src/config/menuItems.ts

export interface MenuItem {
    name: string
    path: string
    subItems?: Array<{
      name: string
      path: string
    }>
  }
  
  export const menuItems: MenuItem[] = [
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Research',
      path: '/research',
      subItems: [
        { name: 'Research Overview', path: '/research' },
        { name: 'Academic Papers', path: '/research#papers' },
        { name: 'Theoretical Framework', path: '/research/framework' },
      ]
    },
    {
      name: 'Books',
      path: '/books/science-of-energy',
      subItems: [
        { name: 'The Science of Energy', path: '/books/science-of-energy' },
        { name: 'Framework', path: '/books/science-of-energy/framework' },
        { name: 'Understanding', path: '/books/science-of-energy/understanding' },
        { name: 'Series Overview', path: '/books/series' }
      ]
    },
    {
      name: 'Articles',
      path: '/articles',
      subItems: [
        { name: 'Scientific Insights', path: '/articles/scientific' },
        { name: 'Metaphysical Insights', path: '/articles/metaphysical' },
        { name: 'Personal Development', path: '/articles/development' },
        { name: 'Latest Thoughts', path: '/articles/thoughts' },
      ]
    },
    {
      name: 'Insights',
      path: '/insights/daily',
      subItems: [
        { name: 'Daily Insights', path: '/insights/daily' },
        { name: 'AI Conversations', path: '/insights/ai-conversations' },
        { name: 'Multimedia Content', path: '' }
      ]
    },
    {
      name: 'Practice',
      path: '/practice/inner-work',
      subItems: [
        { name: 'Inner Work', path: '/practice/inner-work' },
        { name: 'Balance', path: '/practice/balance' },
        { name: 'Discipline', path: '/practice/discipline' },
        { name: 'Practice Library', path: '/practice/library' },
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ]