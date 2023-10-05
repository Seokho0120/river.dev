import { getPostData } from 'src/service/post';
import Mdx from 'src/components/Mdx';
import PostNavigator from '@/src/components/PostNavigator';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const {
    title,
    summary: description,
    publishedAt: publishedTime,
  } = await getPostData(slug);

  return {
    title,
    description,
    openGraph: {
      title: { absolute: title },
      description,
      type: 'article',
      publishedTime,
      url: `https://river-dev.vercel.app/posts/${slug}`,
    },
  };
}

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, summary, publishedAt, body, next, prev } = post;

  return (
    <article>
      <div className='flex flex-col border-b mb-6'>
        <h1 className='text-3xl font-bold tracking-tighter max-w-full'>
          {title}
        </h1>
        <div className='flex justify-between items-center mt-2 mb-6 text-sm max-w-full'>
          <p className='text-xl text-neutral-600 dark:text-neutral-400'>
            {summary}
          </p>
          <p className='text-neutral-600 dark:text-neutral-400'>
            {publishedAt}
          </p>
        </div>
      </div>

      <Mdx code={body.code} />

      <section className='hidden sm:flex items-center justify-between mt-16'>
        {prev && <PostNavigator post={prev} type='prev' />}
        {next && <PostNavigator post={next} type='next' />}
      </section>
    </article>
  );
}
