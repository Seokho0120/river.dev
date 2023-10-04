import { getAllPosts } from 'src/service/post';
import MultiCarousel from './MultiCarousel';
import CarouselCard from './CarouselCard';

export default async function CarouselPosts() {
  const posts = await getAllPosts();

  return (
    <section className='my-4'>
      <h2 className='text-2xl font-bold my-2'>All Posts</h2>
      <MultiCarousel>
        <CarouselCard posts={posts} />
      </MultiCarousel>
    </section>
  );
}
