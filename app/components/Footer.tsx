'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import api from '@/lib/api'
// Después
import Image from 'next/image';
interface Client {
  id: string
  logo_url: string
  name: string
}

export default function Footer() {
  const [recentClients, setRecentClients] = useState<Client[]>([])

  const navigation = {
    main: [
      { name: 'Inicio', href: '/' },
      { name: 'Instituciones', href: '/instituciones' },
      { name: 'Diplomas', href: '/diplomas' },
      { name: 'Recursos', href: '/recursos' },
      { name: 'Datos Institucionales', href: '/datos-institucionales' },
      { name: 'Contáctanos', href: '/contactanos' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: Facebook,
      },
      {
        name: 'Twitter',
        href: '#',
        icon: Twitter,
      },
      {
        name: 'Instagram',
        href: '#',
        icon: Instagram,
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: Linkedin,
      },
    ],
  }

  useEffect(() => {
    const fetchRecentClients = async () => {
      try {
        const response = await api.get<Client[]>('/institutions/recent')
        //if (response.success && response.data) {
           // ✅ forma correcta
         //if (response.status === 200 && response.data) {
          if (response.success && response.data) {
          setRecentClients(response.data)
        }
      } catch (error) {
        console.error('Error fetching recent clients:', error)
        // Clientes por defecto si falla la API
        setRecentClients([
          { id: '1', logo_url: '/images/client1.png', name: 'Cliente 1' },
          { id: '2', logo_url: '/images/client2.png', name: 'Cliente 2' },
          { id: '3', logo_url: '/images/client3.png', name: 'Cliente 3' },
          { id: '4', logo_url: '/images/client4.png', name: 'Cliente 4' }
        ])
      }
    }

    fetchRecentClients()
  }, [])

  return (
    <footer className="bg-gray-900 dark:bg-black">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        {/* Logo y descripción */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">DW</span>
            </div>
            <span className="text-2xl font-bold text-white">DatasistemasWeb</span>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas para la educación del siglo XXI. Transformando la manera de aprender y enseñar.
          </p>
        </div>

        {/* Navegación principal */}
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Redes sociales */}
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300 transition-colors">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>

        {/* Contenido principal */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">info@edutech.edu</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-sm">123 Calle Principal, Ciudad</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-4">Servicios</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Educación en línea</li>
              <li>Certificaciones</li>
              <li>Recursos digitales</li>
              <li>Soporte técnico</li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-4">Información</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Política de privacidad</li>
              <li>Términos de servicio</li>
              <li>Cookies</li>
              <li>Accesibilidad</li>
            </ul>
          </div>

          {/* Clientes recientes */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-4">Clientes recientes</h3>
            <div className="grid grid-cols-2 gap-3">
              {recentClients.slice(0, 4).map((client) => (
                <motion.div
                  key={client.id}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="bg-gray-800 p-2 rounded-lg flex items-center justify-center"
                >
                  <Image 
                    src={client.logo_url} 
                    alt={client.name}
                    className="h-8 w-8 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-10 text-center text-xs leading-5 text-gray-400">
          &copy; {new Date().getFullYear()} EduTech. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}