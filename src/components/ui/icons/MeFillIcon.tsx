import { useTheme } from 'next-themes';
import { PiSmileyWinkFill } from 'react-icons/pi';

export default function MeFillIcon() {
  const { theme } = useTheme();
  const iconColor = theme === 'dark' ? '#E8871E' : '#2492ff';

  return <PiSmileyWinkFill className='w-6 h-6' style={{ color: iconColor }} />;
}
