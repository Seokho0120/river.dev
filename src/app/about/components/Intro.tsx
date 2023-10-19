import Image from 'next/image';
import Link from 'next/link';
import MailIcon from '@/src/components/ui/icons/MailIcon';
import GithubIcon from '@/src/components/ui/icons/GithubIcon';
import profileImg from '../../../../public/image/profile-main2.png';

const IntroList = [
  'Why? 라는 질문을 자주하며, 충분한 이유를 가진 코드를 작성하려 노력하는',
  '단순히 주어진 개발이 아닌, 주도적으로 문제를 찾아내고 분석하며 솔루션을 제안하는',
  '사용자 중심의 UI/UX에 높은 가치를 두고, 불편함을 고민하며 개선하는',
  '다양한 직군과 협업에 능숙하고, 경청과 논리에 기반한 커뮤니케이션이 가능하는',
];

const ContactMenu = [
  {
    href: 'https://github.com/Seokho0120',
    title: 'github.com/seokho0120',
    icon: <GithubIcon type='me' />,
  },
  {
    href: 'mailto:seokho0120@gamil.com',
    title: 'seokho0120@gmail.com',
    icon: <MailIcon type='me' />,
  },
];

export default function Intro() {
  return (
    <section className='mb-10'>
      <h1 className='text-3xl font-extrabold mb-6'>
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
          <h2 className='text-2xl font-semibold'>
            Why? 라는 질문으로 시작해, <br />
            How를 탐구하는 과정을 좋아합니다.
          </h2>
          <ul className='flex gap-4 text-sm'>
            {ContactMenu.map(({ href, icon, title }) => (
              <Link
                className='flex items-center gap-2 font-medium hover:underline decoration-point underline-offset-2'
                href={href}
                key={href}
                rel='noopener noreferrer'
              >
                {icon}
                <p>{title}</p>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <h3 className='text-lg font-bold mb-2'>
        저는{' '}
        <span className='inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-point ring-1 ring-inset ring-blue-700/10'>
          _ _ _ _ _ _
        </span>{' '}
        하는 개발자 입니다.
      </h3>

      <ul>
        {IntroList.map((list, idx) => (
          <li key={idx} className='flex items-center gap-2 mb-1'>
            <div className='w-1 h-1 bg-point rounded-full' />
            {list}
          </li>
        ))}
      </ul>
    </section>
  );
}
