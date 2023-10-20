import Image from 'next/image';
import Link from 'next/link';
import profileImg from '../../../../public/image/profile-main2.png';
import { ContactMenu, IntroList } from '@/src/constants/IntroData';

export default function Intro() {
  return (
    <section className='mb-10'>
      <h1 className='text-4xl font-extrabold mb-8'>
        안녕하세요,{' '}
        <span className='underline underline-offset-4 decoration-wavy decoration-point dark:decoration-orange-400 decoration-2'>
          프론트엔드 개발자 이석호
        </span>{' '}
        입니다.
      </h1>

      <div className='flex items-center gap-8 mb-6'>
        <Image
          src={profileImg}
          alt='이석호'
          placeholder='blur'
          quality={100}
          priority
          className='w-32 h-32 rounded-full object-cover border-4 border-point dark:border-darkPoint bg-white'
        />
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl font-semibold'>
            Why? 라는 질문으로 시작해, <br />
            How를 탐구하는 과정을 좋아합니다.
          </h2>
          <ul className='flex gap-4 text-sm'>
            {ContactMenu.map(({ href, icon, title }) => (
              <Link
                className='flex items-center gap-2 font-medium hover:text-point'
                href={href}
                key={href}
                target='_blank'
                rel='noopener noreferrer'
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
