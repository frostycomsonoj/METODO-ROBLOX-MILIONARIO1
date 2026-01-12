
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Qualifications from './components/Qualifications';
import Results from './components/Results';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const element = document.getElementById(targetId || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#050505]">
      <Hero />
      <Qualifications />
      <Features />
      <Results />
      <FAQ />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
