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
      name: 'Writing',
      path: '/writing',
    },
    {
      name: 'Books',
      path: '/books/science-of-energy',
      subItems: [
        { name: 'The Science of Energy', path: '/books/science-of-energy' },
        { name: 'Series Overview', path: '/books/series' }
      ]
    },
    {
      name: 'Research',
      path: '/research',
      subItems: [
        { name: 'Papers', path: '/research#papers' },
        { name: 'Framework', path: '/research/framework' },
      ]
    },
    {
      name: 'Reflections',
      path: '/insights',
      subItems: [
        { name: 'Focused Insights', path: '/insights' },
        { name: 'Conversations', path: '' },
        { name: 'Media', path: '' }
      ]
    },
    {
      name: 'Practice',
      path: '/practice',
      subItems: [
        { name: 'Core Practices', path: '/practice#core' },
        { name: 'Library', path: '/practice/library' },
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ]