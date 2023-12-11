import { MdLocalPhone } from 'react-icons/md';

export default function PhoneIcon({ type }: { type?: string }) {
  return type === 'me' ? (
    <MdLocalPhone className='w-5 h-5' />
  ) : (
    <MdLocalPhone className='w-6 h-6' />
  );
}
