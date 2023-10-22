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
      <Projects />
      <Skills />
      <Education />
      <OtherCareers />
    </>
  );
}
