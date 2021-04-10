import React from 'react';

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="text-6xl font-bold text-fire">dotslashf</div>
      <p className="mt-6 text-lg text-gray-800">
        your friendly neighborhood
        <span className="px-1 py-1 ml-1 text-bone bg-gray-800 font-bold transition hover:text-fire hover:bg-bone">
          web developer 🕸️ 💻
        </span>
      </p>
    </section>
  );
}

export default Hero;
