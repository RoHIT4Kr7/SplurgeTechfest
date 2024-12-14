import type { MetadataRoute } from 'next'
import categoriesData from "@/app/data/FinalEventsList.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://splurgetecfest.netlify.app';
  
  // Generate dynamic routes for categories and events
  const eventRoutes = categoriesData.categories.flatMap(category => [
    {
      url: `${baseUrl}/events/${category.name}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    ...category.events.map(event => ({
      url: `${baseUrl}/events/${category.name}/${event.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  ]);

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/aboutus`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/accomodation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/events/bandprogram`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...eventRoutes,
  ]
}