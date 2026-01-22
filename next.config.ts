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
    // ADD THESE TWO NEW REDIRECTS:
    {
      source: '/insights/example',
      destination: '/insights/slow-down',
      permanent: false, // temporary redirect (307)
    },
    {
      source: '/articles/example',
      destination: '/writing/why-healthcare-security-cannot-be-for-profit',
      permanent: false, // temporary redirect (307)
    },
    ];
  },
};

export default nextConfig;
