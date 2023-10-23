import { cache } from 'react';
import { Post, allPosts } from 'contentlayer/generated';

export const getAllPosts = cache(async () => {
  return allPosts.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
});

export async function getPostData(fileName: string) {
  const posts = await getAllPosts();
  const post = posts.find((post) => post.slug === fileName) as Post;

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음 🥲`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  return { ...post, next, prev };
}
