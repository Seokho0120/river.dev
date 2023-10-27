import Image from 'next/image';
import Link from 'next/link';
import profileImg from '../../../../public/image/profile-main2.png';
import { ContactMenu, IntroList } from '@/src/constants/IntroData';

export default function Intro() {
  return (
    <section className='mb-10'>
      <div className='text-5xl font-extrabold mb-8'>
        <h1 className='leading-snug'>안녕하세요,</h1>
        <span className='underline underline-offset-4 decoration-wavy decoration-point dark:decoration-orange-400 decoration-2'>
          프론트엔드 개발자 이석호
        </span>
        <span>입니다.</span>
      </div>

      <div className='flex flex-col sm:flex-row items-center gap-8 mb-8'>
        <Image
          src={profileImg}
          alt='이석호'
          placeholder='blur'
          quality={100}
          priority
          className='w-28 h-28 rounded-full object-cover border-4 border-point dark:border-darkPoint bg-white'
        />
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl font-bold'>
            <p className='leading-snug'>Why? 라는 질문으로 시작해,</p>
            <p>How를 탐구하는 과정을 좋아합니다.</p>
          </h2>
          <ul className='flex flex-wrap gap-4 text-sm'>
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
                <p>{title}</p>
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
