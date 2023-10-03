import { allPosts } from 'contentlayer/generated';

export const getAllPosts = () => {
  return allPosts.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
};
