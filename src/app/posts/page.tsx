import { getAllPosts } from 'src/service/post';
import FilterablePost from 'src/components/FilterablePost';

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <>
      <FilterablePost posts={posts} categories={categories} />
    </>
  );
}
