import { Post } from 'contentlayer/generated';
import Link from 'next/link';

type Props = {
  posts: Post[];
};

export default function PostCard({ posts }: Props) {
  return (
    <>
      {posts.map(({ slug, title, summary, publishedAt }) => (
        <article key={slug}>
          <Link href={`/posts/${slug}`}>
            <h3>{title}</h3>
            <p>{summary}</p>
            <time>{publishedAt}</time>
          </Link>
        </article>
      ))}
    </>
  );
}
