import { allPosts } from 'contentlayer/generated';
// import { getPostData } from 'src/service/post';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  // const post = await getPostData(slug);
  // const { title, summary, publishedAt } = post;

  return (
    <section>
      {/* <div>
        <h1>{title}</h1>
        <h4>{summary}</h4>
        <p>{publishedAt}</p>
      </div> */}
    </section>
  );
}
