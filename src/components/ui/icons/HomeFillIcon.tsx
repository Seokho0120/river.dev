import { useTheme } from 'next-themes';
import { BiSolidHomeHeart } from 'react-icons/bi';

export default function HomeFillIcon() {
  const { theme } = useTheme();
  const iconColor = theme === 'dark' ? '#E8871E' : '#2492ff';

  return <BiSolidHomeHeart className='w-6 h-6 ' style={{ color: iconColor }} />;
}
