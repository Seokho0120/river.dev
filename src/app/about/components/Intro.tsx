import Link from 'next/link';
import { ContactMenu, IntroList } from '@/src/constants/IntroData';

export default function Intro() {
  return (
    <section className='mb-10'>
      <div className='flex flex-col gap-2 font-extrabold mb-8'>
        <p className='text-5xl'>이석호</p>
        <p className='text-4xl'>Frontend Developer</p>
      </div>

      <div className='flex flex-col sm:flex-row items-center gap-8 mb-8'>
        <div className='flex flex-col gap-4'>
          <ul className='flex flex-wrap gap-4'>
            {ContactMenu.map(({ href, icon, title }) => (
              <Link
                className='flex items-center gap-2 font-medium hover:text-point'
                href={href}
                key={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={title}
              >
                {icon}
                <p className='text-base'>{title}</p>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <h3 className='text-2xl font-bold mb-2'>
        저는{' '}
        <span className='inline-flex items-center rounded-md bg-blue-50 dark:bg-yellow-50 px-2 py-1 text-xs font-medium text-point dark:text-darkPoint ring-1 ring-inset ring-blue-700/10 dark:ring-yellow-700/10'>
          _ _ _ _ _ _
        </span>{' '}
        하는 개발자 입니다.
      </h3>

      <ul>
        {IntroList.map((list, idx) => (
          <li key={idx} className='flex items-center gap-2 mb-2 font-medium'>
            <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full' />
            {list}
          </li>
        ))}
      </ul>
    </section>
  );
}
