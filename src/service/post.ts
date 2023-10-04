import { Post, allPosts } from 'contentlayer/generated';

export const getAllPosts = async () => {
  return allPosts.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
};

export async function getPostData(fileName: string) {
  const posts = await getAllPosts();
  const post = posts.find((post) => post.slug === fileName) as Post;

  return post;
}
