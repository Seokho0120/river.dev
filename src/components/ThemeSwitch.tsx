import { useTheme } from 'next-themes';
import SunIcon from './ui/icons/SunIcon';
import MoonIcon from './ui/icons/MoonIcon';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const Theme = { light: 'light', dark: 'dark' };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []); // for persistent theme page.

  const handleBtnClick = () => {
    setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
  };

  return (
    <>
      {mounted && (
        <button
          onClick={handleBtnClick}
          aria-label='Toggle Dark Mode'
          type='button'
          className='flex items-center justify-center'
        >
          {theme === Theme.light ? <MoonIcon /> : <SunIcon />}
        </button>
      )}
    </>
  );
}
