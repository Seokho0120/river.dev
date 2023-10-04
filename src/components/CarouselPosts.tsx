import { getAllPosts } from 'src/service/post';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function CarouselPosts() {
  const posts = await getAllPosts();

  return (
    <section>
      <h2>All Posts</h2>
      <MultiCarousel>
        <PostCard posts={posts} />
      </MultiCarousel>
    </section>
  );
}
