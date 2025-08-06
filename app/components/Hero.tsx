'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import api from '@/lib/api'
// Después
import Image from 'next/image';
interface Slide {
  image_url: string
  title: string
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slides, setSlides] = useState<Slide[]>([])

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await api.get<Slide[]>('/hero-slides')
       /* if (response.success && response.data) {
          setSlides(response.data)
        }*/
         // ✅ forma correcta
       //  if (response.status === 200 && response.data) {
        if (response.success && response.data) {
          setSlides(response.data)
        }
      } catch (error) {
        console.error('Error fetching slides:', error)
        // Datos por defecto si falla la API
        setSlides([
          {
            image_url: '/images/hero-default.jpg',
            title: 'Plataforma educativa'
          }
        ])
      }
    }

    fetchSlides()
  }, [])

  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [slides])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900/90 dark:to-gray-900" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[url('/curved-bg.svg')] bg-cover bg-no-repeat" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
            >
              Transformando la educación con tecnología
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Soluciones integrales para instituciones educativas. Mejora la gestión académica y administrativa con nuestras plataformas.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Comenzar ahora
              </button>
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors">
                Saber más
              </button>
            </motion.div>
          </div>

          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              {slides.length > 0 && (
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={slides[currentSlide].image_url} 
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}