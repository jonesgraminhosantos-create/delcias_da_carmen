import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
