import ArrowLeftIcon from './ui/icons/ArrowLeftIcon';
import ArrowRightIcon from './ui/icons/ArrowRightIcon';

interface CustomArrowsProps {
  onClick: () => void;
  type: string;
}

export function CustomArrow({ type, onClick }: CustomArrowsProps) {
  const BUTTON_CLASS = `absolute ${
    type === 'left' ? 'left-0' : 'right-0'
  } top-2.5/3 transform -translate-y-1/2 transition-opacity duration-200 opacity-0 hover:opacity-90 text-point dark:text-orange-400`;

  return (
    <button onClick={onClick} className={BUTTON_CLASS}>
      {type === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </button>
  );
}
