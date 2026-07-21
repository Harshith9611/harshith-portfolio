import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = 'https://your-domain.vercel.app'; // TODO: Replace with your production domain after deployment

  // Homepage route
  const routes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ];

  // Add future routes here if you expand the portfolio
  // example:
  // const projectRoutes = projects.map((project) => ({
  //   url: `${BASE_URL}/projects/${project.slug}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.8,
  // }));

  return [...routes];
}
