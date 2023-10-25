import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  code: string;
};

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props} aria-label='Custom Link'>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

const RoundedImage = (props: any) => {
  return (
    <Image alt={props.alt} {...props} className='mx-auto rounded-lg' priority />
  );
};

const components = {
  Image: RoundedImage,
  a: CustomLink,
};

export default function Mdx({ code }: Props) {
  const Component = useMDXComponent(code);

  return (
    <article className='prose max-w-3xl break-keep dark:prose-invert prose-h1:text-2xl prose-a:break-all'>
      <Component componets={{ ...components }} />
    </article>
  );
}
