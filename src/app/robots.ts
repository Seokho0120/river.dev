import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://river-dev.vercel.app/sitemap.xml',
    host: 'https://river-dev.vercel.app/',
  };
}
