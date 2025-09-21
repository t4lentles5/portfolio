import { useEffect, useState } from 'react';

export const ToggleTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';

    document.documentElement.classList.toggle('dark');
    setTheme(newTheme);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className='grid place-items-center cursor-pointer'
      >
        {theme === 'dark' ? (
          <span
            className='icon-[line-md--sun-rising-filled-loop] size-6'
            role='img'
            aria-hidden='true'
          ></span>
        ) : (
          <span
            className='icon-[line-md--sunny-filled-loop-to-moon-filled-alt-loop-transition] size-6'
            role='img'
            aria-hidden='true'
          ></span>
        )}
      </button>
    </>
  );
};
