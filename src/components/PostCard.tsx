import { Post } from 'contentlayer/generated';
import Link from 'next/link';

type Props = {
  posts: Post[];
};

export default function PostCard({ posts }: Props) {
  return (
    <>
      {posts.map(({ slug, title, summary, publishedAt }) => (
        <article key={slug} className='mb-8'>
          <Link href={`/posts/${slug}`} aria-label={title}>
            <h2 className='text-2xl font-bold mb-2'>{title}</h2>
            <h6 className='my-1 text-sm text-gray-500'>{summary}</h6>
            <p className='text-xs text-gray-300'>{publishedAt}</p>
          </Link>
        </article>
      ))}
    </>
  );
}
