import type { MetadataRoute } from 'next'
const baseUrl = 'https://splurgetecfest.netlify.app';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}