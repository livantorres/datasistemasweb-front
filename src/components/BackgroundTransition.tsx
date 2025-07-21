import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundTransition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.min(scrollY / 500, 0.2);
  const scale = 1 + Math.min(scrollY / 5000, 0.1);

  return (
    <motion.div 
      className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/20 to-secondary/20"
      style={{
        opacity,
        scale,
        backgroundPosition: `center ${scrollY * 0.5}px`
      }}
    />
  );
}