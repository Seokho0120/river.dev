import { MdOutlineEmail } from 'react-icons/md';

export default function MailIcon({ type }: { type?: string }) {
  return type === 'me' ? (
    <MdOutlineEmail className='w-5 h-5' />
  ) : (
    <MdOutlineEmail className='w-6 h-6' />
  );
}
