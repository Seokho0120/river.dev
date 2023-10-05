import { Post } from '@/.contentlayer/generated';
import Link from 'next/link';

type Props = {
  post: Post;
  type: string;
};

export default function PostNavigator({ post, type }: Props) {
  const { slug, title, summary } = post;

  return (
    <Link href={`/posts/${slug}`}>
      <div></div>
      <div></div>
      <div></div>
    </Link>
  );
}
