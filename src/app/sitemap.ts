// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/metadata';
import { menuItems } from '@/config/menuItems';
import { getAllWritings, getAllInsights } from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
        changeFrequency: item.path.includes('/writing') || item.path.includes('/insights') 
          ? 'weekly' as const 
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
          changeFrequency: subItem.path.includes('/writing') || subItem.path.includes('/insights')
            ? 'weekly' as const
            : 'monthly' as const,
          priority: 0.7,
        }));
      routes.push(...subRoutes);
    }

    return routes;
  });

  // Writing routes (new markdown-based essays)
  const writings = await getAllWritings();
  const writingRoutes = writings.map((writing) => ({
    url: `${baseUrl}/writing/${writing.slug}`,
    lastModified: new Date(writing.updatedAt || writing.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Insights routes (new markdown-based insights)
  const insights = await getAllInsights();
  const insightRoutes = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: new Date(insight.updatedAt || insight.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Practice library pages (frequently updated)
  const practiceLibraryRoutes = [
    'meditation',
    'boundaries',
    'detachment',
    'empathy'
  ].map(practice => ({
    url: `${baseUrl}/practice/library/${practice}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  // Combine all routes
  return [
    homeRoute,
    ...menuRoutes,
    ...writingRoutes,
    ...insightRoutes,
    ...practiceLibraryRoutes,
  ];
}