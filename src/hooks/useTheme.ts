import { useState, useEffect } from 'react';

type ThemeType = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>(
    () => (localStorage.getItem('theme') as ThemeType) || 'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
