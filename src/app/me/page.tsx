import { Metadata } from 'next';
import Image from 'next/image';
import profile from '../../../public/image/main-profile.png';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'River의 커리어 소개',
};

export default function MePage() {
  return (
    <section>
      {/* <div>
        <Image
          src={profile}
          alt='이석호'
          placeholder='blur'
          quality={100}
          priority
          className='w-32 h-w-32 rounded-full object-cover'
        />
      </div>
      <div>안녕하세요 프론트엔드 개발자 이석호 입니다.</div> */}
    </section>
  );
}
