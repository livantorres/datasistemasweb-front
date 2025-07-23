import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Efectos basados en el scroll
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Base gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#1C74E9] to-[#76C388]"
        style={{ opacity }}
      />
      
      {/* Burbujas animadas */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            rotate: Math.random() * 360,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            rotate: [0, Math.random() * 180 - 90],
            transition: {
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
      ))}
      
      {/* Formas geométricas animadas */}
      <motion.div 
        className="absolute -left-1/4 -top-1/4 w-[150%] h-[150%]"
        style={{
          scale,
          rotate,
          background: `
            radial-gradient(circle at 75% 30%, rgba(118, 195, 136, 0.15) 0%, transparent 30%),
            radial-gradient(circle at 25% 70%, rgba(28, 116, 233, 0.15) 0%, transparent 30%),
            linear-gradient(135deg, transparent 60%, rgba(255,255,255,0.1) 100%)
          `
        }}
      />
    </div>
  );
}