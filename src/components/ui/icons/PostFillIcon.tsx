import { useTheme } from 'next-themes';
import { PiFilesFill } from 'react-icons/pi';

export default function PostFillIcon() {
  const { theme } = useTheme();
  const iconColor = theme === 'dark' ? '#E8871E' : '#2492ff';

  return <PiFilesFill className='w-6 h-6' style={{ color: iconColor }} />;
}
