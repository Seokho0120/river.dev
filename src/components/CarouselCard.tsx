import { Post } from 'contentlayer/generated';
import Link from 'next/link';

type Props = {
  posts: Post[];
};

export default function CarouselCard({ posts }: Props) {
  return (
    <>
      {posts.map(({ slug, title, summary, publishedAt }) => (
        <article
          key={slug}
          className='w-60 sm:w-64 mb-8 rounded-md overflow-hidden border-t border-neutral-100 dark:border-neutral-800 shadow-md hover:shadow-lg dark:shadow-slate-600'
        >
          <Link
            href={`/posts/${slug}`}
            className='flex flex-col p-4'
            aria-label={slug}
            aria-hidden='true'
          >
            <h2 className='text-2xl font-bold mb-2 truncate'>{title}</h2>
            <h2 className='my-1 text-sm text-gray-500 truncate'>{summary}</h2>
            <p className='text-xs text-gray-300'>{publishedAt}</p>
          </Link>
        </article>
      ))}
    </>
  );
}
