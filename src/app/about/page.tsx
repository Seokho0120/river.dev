import { Metadata } from 'next';
import Intro from './components/Intro';
import Careers from './components/Careers';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import OtherCareers from './components/OtherCareers';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'River의 경력기술서',
};

export default function MePage() {
  return (
    <>
      <Intro />
      <Careers />
      <Skills />
      <Projects />
      <p className='my-10 font-semibold text-lg'>
        🚨 Peach-bloom 내용은 업데이트 중 입니다. 깃허브를 통해 확인
        부탁드립니다.
      </p>
      <Education />
      <OtherCareers />
    </>
  );
}
