import { Post } from 'contentlayer/generated';
import Link from 'next/link';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = '전체 보기';

export default function FilterablePost({ posts, categories }: Props) {
  return (
    <section>
      {posts.map(({ slug, title, summary, publishedAt }) => (
        <article key={slug}>
          <Link href={`/post/${slug}`}>
            <h2>{title}</h2>
            <h6>{summary}</h6>
            <p>
              <h2>{publishedAt}</h2>
            </p>
          </Link>
        </article>
      ))}
    </section>
  );
}
