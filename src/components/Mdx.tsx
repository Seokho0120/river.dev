import { useMDXComponent } from 'next-contentlayer/hooks';

type Props = {
  code: string;
};

export default function Mdx({ code }: Props) {
  const MdxComponent = useMDXComponent(code);

  return (
    <article className='prose max-w-3xl break-keep dark:prose-invert prose-h1:text-2xl prose-a:break-all'>
      <MdxComponent />
    </article>
  );
}
