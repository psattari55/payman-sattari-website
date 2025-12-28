// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/metadata';
import { menuItems } from '@/config/menuItems';
import { articles } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  
  // Homepage (most static)
  const homeRoute = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  };

  // Core routes from menuItems (excluding hash links)
  const menuRoutes = menuItems.flatMap(item => {
    const routes = [
      {
        url: `${baseUrl}${item.path}`,
        lastModified: new Date(),
        changeFrequency: item.path.includes('/articles') || item.path.includes('/insights') 
          ? 'daily' as const 
          : 'monthly' as const,
        priority: 0.8,
      }
    ];

    if (item.subItems) {
      const subRoutes = item.subItems
        .filter(subItem => subItem.path && !subItem.path.includes('#'))
        .map(subItem => ({
          url: `${baseUrl}${subItem.path}`,
          lastModified: new Date(),
          changeFrequency: subItem.path.includes('/articles') || subItem.path.includes('/insights')
            ? 'daily' as const
            : 'monthly' as const,
          priority: 0.7,
        }));
      routes.push(...subRoutes);
    }

    return routes;
  });

  // Practice library pages (frequently updated)
  const practiceLibraryRoutes = [
    'meditation',
    'mantras',
    'boundaries',
    'detachment',
    'empathy'
  ].map(practice => ({
    url: `${baseUrl}/practice/library/${practice}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Article routes
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Combine all routes
  return [
    homeRoute,
    ...menuRoutes,
    ...practiceLibraryRoutes,
    ...articleRoutes,
  ];
}