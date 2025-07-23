import { useState, startTransition, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useLocation, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import AnimatedBackground from './components/AnimatedBackground';
import SectionSkeleton from './components/ui/SectionSkeleton';

// Importaciones diferidas de páginas
const HomePage = lazy(() => import('./components/pages/HomePage'));
const Instituciones = lazy(() => import('./components/pages/Instituciones'));

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const toggleDarkMode = () => {
    startTransition(() => {
      setDarkMode(prev => {
        const newMode = !prev;
        localStorage.setItem('darkMode', String(newMode));
        return newMode;
      });
    });
  };

  const location = useLocation();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <AnimatedBackground />
      <Header darkMode={darkMode} setDarkMode={toggleDarkMode} />
      
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Suspense fallback={<SectionSkeleton />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/instituciones" element={<Instituciones />} />
                {/* Otras rutas... */}
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}