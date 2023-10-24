import { useTheme } from 'next-themes';
import { PiFilesFill } from 'react-icons/pi';

export default function PostFillIcon() {
  const { theme } = useTheme();
  const iconColor = theme === 'dark' ? 'text-darkPoint' : 'text-point';

  return <PiFilesFill className={`w-6 h-6 ${iconColor}`} />;
}
