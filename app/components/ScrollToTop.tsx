'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  // Scroll to top cuando cambia la ruta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  // Mostrar/ocultar botón basado en scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (typeof window !== 'undefined') {
        const scrolled = document.documentElement.scrollTop
        setIsVisible(scrolled > 300)
      }
    }

    // Usar passive para mejor performance
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility, { passive: true })
      return () => window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-4 bg-primary dark:bg-primary-dark text-white rounded-full shadow-lg z-50 hover:bg-primary-dark dark:hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-primary-dark"
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
      <ArrowUp size={24} />
    </motion.button>
  )
} 