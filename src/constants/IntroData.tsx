import GithubIcon from '@/src/components/ui/icons/GithubIcon';
import MailIcon from '@/src/components/ui/icons/MailIcon';
import PhoneIcon from '../components/ui/icons/Phone';

export const IntroList = [
  'Why? 라는 질문으로 시작해, How를 탐구하는 과정을 좋아하는',
  '단순히 주어진 개발이 아닌, 주도적으로 문제를 찾아내고 분석하며 솔루션을 제안하는',
  '사용자 중심의 UI/UX에 높은 가치를 두고, 불편함을 고민하며 개선하는',
  '다양한 직군과 협업에 능숙하고, 경청과 논리에 기반한 커뮤니케이션이 강점인',
];

export const ContactMenu = [
  {
    href: 'https://github.com/Seokho0120',
    title: 'Github',
    icon: <GithubIcon type='me' />,
  },
  {
    href: 'mailto:seokho0120@gamil.com',
    title: 'Mail',
    icon: <MailIcon type='me' />,
  },
  {
    href: '',
    title: '010-7166-7552',
    icon: <PhoneIcon type='me' />,
  },
];
