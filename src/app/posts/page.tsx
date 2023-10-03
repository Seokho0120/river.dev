import { getAllPosts } from 'src/service/post';
import FilterablePost from 'src/components/FilterablePost';

export default function PostsPage() {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <>
      <FilterablePost posts={posts} categories={categories} />
    </>
  );
}
