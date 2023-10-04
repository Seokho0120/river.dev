'use client';

import { usePathname } from 'next/navigation';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import MeIcon from './ui/icons/MeIcon';
import MeFillIcon from './ui/icons/MeFillIcon';
import Link from 'next/link';
import PostIcon from './ui/icons/PostIcon';
import PostFillIcon from './ui/icons/PostFillIcon';
import ThemeSwitch from './ThemeSwitch';

const NAV_MENU = [
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
    <div className='flex justify-between items-center w-full mt-20'>
      <Link href='/'>
        <div className='text-3xl font-bold hover:text-point dark:hover:text-orange-400'>
          River
        </div>
      </Link>

      <nav>
        <ul className='flex gap-4 items-center'>
          {NAV_MENU.map(({ icon, href, clickedIcon }) => (
            <li key={href}>
              <Link href={href}>{pathName === href ? clickedIcon : icon}</Link>
            </li>
          ))}
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </div>
  );
}
