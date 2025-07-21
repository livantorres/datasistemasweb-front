import { useState } from 'react';
import { motion } from 'framer-motion';

/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/
import Header from './components/header';
import HeroSection from './components/sections/hero';
import SponsorsSection from './components/sections/sponsors';
import ServicesSection from './components/sections/services';
import StatsSection from './components/sections/stats';
import ContactSection from './components/sections/contact';
import Footer from './components/footer';
import BackgroundTransition from './components/BackgroundTransition';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <BackgroundTransition />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <HeroSection />
          <SponsorsSection />
          <ServicesSection />
          <StatsSection />
          <ContactSection />
        </motion.div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}