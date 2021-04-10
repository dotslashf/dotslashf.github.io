import React from 'react';
import { ThemeContext } from '../themeContext';

function Hero() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  // function toggleDark() {
  //   return theme === 'dark';
  // }

  function toggleDark() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div
        className="cursor-pointer text-6xl font-bold text-primary hover:text-accent transition"
        onClick={() => toggleDark()}
      >
        dotslashf
      </div>
      <p className="mt-6 text-lg text-center text-primary break-words px-8">
        your friendly neighborhood
        <br className="lg:hidden" />
        <span className="px-1 py-1 ml-1 text-secondary bg-accent font-bold transition hover:text-accent hover:bg-primary">
          web developer 🕸️ 💻
        </span>
      </p>
    </section>
  );
}

export default Hero;
