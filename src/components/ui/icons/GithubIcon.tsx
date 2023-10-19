import { VscGithubInverted } from 'react-icons/vsc';

export default function GithubIcon({ type }: { type?: string }) {
  return type === 'me' ? (
    <VscGithubInverted className='w-5 h-5' />
  ) : (
    <VscGithubInverted className='w-6 h-6' />
  );
}
