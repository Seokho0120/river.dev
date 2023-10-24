import { useTheme } from 'next-themes';
import { BiSolidHomeHeart } from 'react-icons/bi';

export default function HomeFillIcon() {
  const { theme } = useTheme();
  const iconColor = theme === 'dark' ? 'text-darkPoint' : 'text-point';

  return <BiSolidHomeHeart className={`w-6 h-6 ${iconColor}`} />;
}
