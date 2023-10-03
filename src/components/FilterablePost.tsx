'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import PostCard from './PostCard';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = '전체 보기';

export default function FilterablePost({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section>
      <PostCard posts={filtered} />
    </section>
  );
}
