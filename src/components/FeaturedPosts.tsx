import { getAllPosts } from 'src/service/post';

export default function FeaturedPosts() {
  const allPosts = getAllPosts();

  return (
    <div className='flex flex-col'>
      {/* {allPosts.map((item) => (
        <div key={item._id}>
          <div>{item.title}</div>
          <div>{item.category}</div>
          <div>{item.slug}</div>
        </div>
      ))} */}
    </div>
  );
}
