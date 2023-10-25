import Link from 'next/link';
import GithubIcon from './ui/icons/GithubIcon';
import MailIcon from './ui/icons/MailIcon';

const menu = [
  {
    href: 'mailto:seokho0120@gamil.com',
    title: 'mail',
    icon: <MailIcon />,
  },
  {
    href: 'https://github.com/Seokho0120',
    title: 'github',
    icon: <GithubIcon />,
  },
];

export default function Footer() {
  return (
    <footer className='mx-auto mt-auto w-full flex flex-col justify-center items-center py-6 text-sm'>
      <div className='flex gap-4 items-center hover:cursor-pointer py-2 mt-10'>
        {menu.map(({ href, icon }) => (
          <Link
            href={href}
            key={href}
            rel='noopener noreferrer'
            aria-label='mail and github'
          >
            {icon}
          </Link>
        ))}
      </div>
      <p>© {new Date().getFullYear()} River All Rights Reserved.</p>
    </footer>
  );
}
