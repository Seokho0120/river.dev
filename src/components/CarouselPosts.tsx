import { getAllPosts } from 'src/service/post';
import MultiCarousel from './MultiCarousel';
import CarouselCard from './CarouselCard';

export default async function CarouselPosts() {
  const posts = await getAllPosts();

  return (
    <section className='mt-10 relative'>
      <h2 className='absolute top-2 text-lg font-semibold'>All Posts</h2>
      <MultiCarousel>
        <CarouselCard posts={posts} />
      </MultiCarousel>
    </section>
  );
}
