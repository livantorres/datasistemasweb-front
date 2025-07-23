import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Scroll to top cuando cambia la ruta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Mostrar/ocultar botón basado en scroll
  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      setIsVisible(scrolled > 300);
    };

    // Usar passive para mejor performance
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-4 bg-primary dark:bg-secondary text-white rounded-full shadow-lg z-50 hover:bg-primary-dark dark:hover:bg-secondary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-secondary"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8
      }}
      transition={{ 
        duration: 0.2,
        ease: "easeInOut"
      }}
      aria-label="Volver arriba"
      aria-hidden={!isVisible}
    >
      <FiArrowUp size={24} />
    </motion.button>
  );
}