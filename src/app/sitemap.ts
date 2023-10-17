import { allPosts } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `https://river-dev.vercel.app/posts/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/posts', '/me'].map((route) => ({
    url: `https://river-dev.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...posts];
}
