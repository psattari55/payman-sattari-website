// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  async redirects() {
    return [
      {
        source: '/articles',
        destination: '/writing',
        permanent: true, // 301 redirect (SEO-friendly)
      },
      {
        source: '/articles/:slug*',
        destination: '/writing',
        permanent: true,
      },
      {
        source: '/insights/daily',
        destination: '/insights',
        permanent: true, 
      },

    // Cleanup for deleted pages
      { source: '/scholars-door', destination: '/', permanent: true },
      { source: '/observers-door', destination: '/', permanent: true },
      { source: '/practitioners-door', destination: '/', permanent: true },

      { source: '/books/science-of-energy/framework', destination: '/books/science-of-energy', permanent: true },
      { source: '/books/science-of-energy/understanding', destination: '/books/science-of-energy', permanent: true },
      { source: '/research/contact', destination: '/contact', permanent: true },
      { source: '/what-is-energy', destination: '/writing', permanent: true },
    ];
  },
};

export default nextConfig;
