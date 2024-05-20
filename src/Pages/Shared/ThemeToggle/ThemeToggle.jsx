import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'coffee');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'coffee' ? 'light' : 'coffee');
  };

  return (
    <button onClick={toggleTheme} className="btn">
      {theme === 'coffee' ? 'Light' : 'Coffee'}
    </button>
  );
};

export default ThemeToggle;
