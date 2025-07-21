
import Carousel from '../ui/carousel';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const WORDS = ["Digitales", "Tecnológicas", "Innovadoras", "Efectivas"];
// Mock data - reemplazar con llamada API después
const slides = [
  {
    id: 1,
    title: "Plataforma Datasisweb",
    description: "Solución integral para tu negocio",
    image: "/images/service1.jpg"
  },
  {
    id: 2,
    title: "Solución Contable",
    description: "Gestión financiera profesional",
    image: "/images/service2.jpg"
  }
];

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section aria-labelledby="services-heading" className="py-12 md:py-20 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/10 dark:from-primary/20 to-secondary/10 dark:to-secondary/20"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Soluciones{' '}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={WORDS[currentWordIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 text-primary dark:text-secondary underline decoration-wavy decoration-2 underline-offset-4"
                  >
                    {WORDS[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="invisible">Digitales</span>{' '}
              </span>
             
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"> para tu Negocio
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ofrecemos herramientas profesionales para optimizar tus procesos empresariales con tecnología de vanguardia.
            </p>
            <button className="px-6 py-3 bg-primary hover:bg-primary-dark dark:bg-secondary dark:hover:bg-secondary-dark text-white rounded-lg transition-colors shadow-md">
              Conoce nuestros servicios
            </button>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Carousel slides={slides} autoPlay={true} interval={5000} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}