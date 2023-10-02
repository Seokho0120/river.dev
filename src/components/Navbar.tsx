'use client';

import { usePathname } from 'next/navigation';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import MeIcon from './ui/icons/MeIcon';
import MeFillIcon from './ui/icons/MeFillIcon';
import Link from 'next/link';
import PostIcon from './ui/icons/PostIcon';
import PostFillIcon from './ui/icons/PostFillIcon';

const menu = [
  {
    href: '/',
    title: 'Home',
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: '/posts',
    title: 'Posts',
    icon: <PostIcon />,
    clickedIcon: <PostFillIcon />,
  },
  {
    href: '/me',
    title: 'Me',
    icon: <MeIcon />,
    clickedIcon: <MeFillIcon />,
  },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className='flex justify-between items-center w-full h-full max-w-3xl mx-auto mt-10'>
      <Link href='/'>
        <div className='text-3xl font-bold'>River</div>
      </Link>

      <nav>
        <ul className='flex gap-4 items-center'>
          {menu.map(({ icon, href, clickedIcon }) => (
            <li key={href}>
              <Link href={href}>{pathName === href ? clickedIcon : icon}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
