'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import api from '@/lib/api'
// Después
import Image from 'next/image';
interface Logo {
  id: string
  image_url: string
  name: string
}

export default function LogoCloud() {
  const [logos, setLogos] = useState<Logo[]>([])

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await api.get<Logo[]>('/institutions/logos')

        // ✅ forma correcta
       // if (response.status === 200 && response.data) {
          if (response.success && response.data) {
          setLogos(response.data)
        }
      } catch (error) {
        console.error('Error fetching logos:', error)

        // Logos por defecto si falla la API
        setLogos([
          { id: '1', image_url: '/images/logo1.png', name: 'Institución 1' },
          { id: '2', image_url: '/images/logo2.png', name: 'Institución 2' },
          { id: '3', image_url: '/images/logo3.png', name: 'Institución 3' }
        ])
      }
    }

    fetchLogos()
  }, [])

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Instituciones que confían en nosotros
          </h2>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 dark:from-gray-900/50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 dark:from-gray-900/50 to-transparent z-10" />

          <motion.div 
            className="flex space-x-12 py-4"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="flex-shrink-0">
                <Image 
                  src={logo.image_url} 
                  alt={logo.name}
                  className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}