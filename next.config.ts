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
    ];
  },
};

export default nextConfig;
