import { Metadata } from 'next';
import Intro from './components/Intro';
import Careers from './components/Careers';
import Projects from './components/Projects';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'River의 경력기술서',
};

export default function MePage() {
  return (
    <section>
      <Intro />
      <Careers />
      <Projects />
    </section>
  );
}
