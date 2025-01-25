'use client';

import { useTheme } from '@/components/ThemeProvider';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border rounded transition-colors duration-300 
                 bg-gray-800"
    >
      {theme === 'light' ? '🌒' : '☀️'}
    </button>
  );
}
