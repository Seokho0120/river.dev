import { Metadata } from 'next';
import Intro from './components/Intro';
import Careers from './components/Careers';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'River의 경력기술서',
};

export default function MePage() {
  return (
    <section>
      <Intro />
      {/* <Careers /> */}
    </section>
  );
}
