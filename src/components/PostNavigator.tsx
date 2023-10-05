import { Post } from '@/.contentlayer/generated';
import Link from 'next/link';
import ArrowLeftIcon from './ui/icons/ArrowLeftIcon';
import ArrowRightIcon from './ui/icons/ArrowRightIcon';

type Props = {
  post: Post;
  type: string;
};

export default function PostNavigator({ post, type }: Props) {
  const { slug, title, summary } = post;

  return (
    <Link href={`/posts/${slug}`}>
      <div className='flex items-center gap-4 py-4 rounded-md overflow-hidden border-t border-neutral-50 dark:border-neutral-800 shadow-md hover:shadow-lg dark:shadow-slate-700'>
        <div className='text-point dark:text-orange-400'>
          {type === 'prev' && <ArrowLeftIcon />}
        </div>
        <div className='w-64 flex flex-col'>
          <h3 className='text-center truncate font-bold text-neutral-600 dark:text-neutral-400'>
            {title}
          </h3>
          <p className='text-center truncate text-sm text-neutral-500 dark:text-neutral-200'>
            {summary}
          </p>
        </div>
        <div className='text-point dark:text-orange-400'>
          {type === 'next' && <ArrowRightIcon />}
        </div>
      </div>
    </Link>
  );
}
