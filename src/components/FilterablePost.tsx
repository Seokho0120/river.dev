'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import PostCard from './PostCard';
import Categories from './Categories';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = 'All';

export default function FilterablePost({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section>
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
      <PostCard posts={filtered} />
    </section>
  );
}
