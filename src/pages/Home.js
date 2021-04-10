import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-primary">
      <Header />
      <Hero />
    </div>
  );
}

export default Home;
