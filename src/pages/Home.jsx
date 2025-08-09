import React from 'react';
import HeroSection from '../components/HearoSection';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Socials from '../components/Socials';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-black dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-950 dark:text-white">
      <HeroSection />
      <Services/>
      <Socials/>
      <Footer/>
    </main>
  );
}
