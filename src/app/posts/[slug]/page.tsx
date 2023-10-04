import { getPostData } from 'src/service/post';
import Mdx from 'src/components/Mdx';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, summary, publishedAt, body } = post;

  return (
    <section>
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
    </section>
  );
}
