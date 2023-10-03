type Props = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params: { slug } }: Props) {
  return <>{slug}</>;
}
