import Image from 'next/image';
import profileImage from '../../public/image/my-profile.jpg';

export default function MainAboutMe() {
  return (
    <section className='break-keep mb-40'>
      <div className='my-4 flex items-center gap-8'>
        <div className='flex h-[100px] w-[100px] flex-shrink-0 md:h-[125px] md:w-[125px]'>
          <Image
            src={profileImage}
            alt='이석호'
            placeholder='blur'
            quality={100}
            priority
            className='h-full w-full rounded-full object-cover'
          />
        </div>
        <div className='max-w-sm leading-7'>
          안녕하세요? 저의 블로그에 찾아와 주셔서 감사합니다. 😊
          <div>
            저는 프론트엔드 개발자{' '}
            <h4 className='inline-block text-lg font-semibold'>이석호</h4>
            입니다.
          </div>
          <p>앞으로 나아가는 것을 좋아합니다.</p>
        </div>
      </div>
      <div className='pt-5 leading-7'>
        <p>
          같이의 가치를 믿는 개발자, 이석호 입니다.{' '}
          <p>
            개발자의 가치는 비지니스 가치를 구현하는데서 나온다고 생각합니다.
          </p>
        </p>
        <p>앞으로 자주 뵈었으면 좋겠습니다.</p>
      </div>
    </section>
  );
}
