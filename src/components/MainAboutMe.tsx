import Image from 'next/image';
import Link from 'next/link';
import profileImg from '../../public/image/profile-main.png';
import { VscGithubInverted } from 'react-icons/vsc';

export default function MainAboutMe() {
  return (
    <section className='py-6 px-6 border border-neutral-50 dark:border-neutral-800 shadow-lg dark:shadow-lg rounded-lg dark:shadow-slate-600'>
      <div className='flex flex-col gap-6'>
        <div className='flex gap-2'>
          <circle className='w-3 h-3 bg-red-500 rounded-full' />
          <circle className='w-3 h-3 bg-yellow-400 rounded-full' />
          <circle className='w-3 h-3 bg-green-500 rounded-full' />
        </div>

        <div className='flex items-center gap-4'>
          <Image
            src={profileImg}
            alt='이석호'
            placeholder='blur'
            quality={100}
            priority
            className='w-24 h-w-24 rounded-full object-cover border-4 border-point dark:border-darkPoint bg-white'
          />
          <div>
            <p className='flex gap-2 items-center text-xl font-bold pb-2'>
              @River
              <Link href={'https://github.com/Seokho0120'}>
                <VscGithubInverted />
              </Link>
            </p>
            <div className='font-medium text-neutral-700 dark:text-gray-400 italic'>
              {`Hello! I'm Front-end developer.`}
              <p>
                Why? Starting with a question, I love the process of exploring
                How.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
