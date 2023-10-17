import { getAllPosts } from 'src/service/post';
import FilterablePost from 'src/components/FilterablePost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: '학습하고 기록하고 공유하는 블로그 글',
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <>
      <FilterablePost posts={posts} categories={categories} />
    </>
  );
}
