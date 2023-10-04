import { useMDXComponent } from 'next-contentlayer/hooks';

type Props = {
  code: string;
};

export default function Mdx({ code }: Props) {
  const MdxComponent = useMDXComponent(code);

  return (
    <article>
      <MdxComponent />
    </article>
  );
}
