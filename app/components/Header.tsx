'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { useTheme } from 'next-themes'
import { Sun, Moon, LogIn, ChevronDown, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavItem {
  title: string
  path?: string
  subItems?: {
    title: string
    description: string
    image: string
    path: string
  }[]
}

const NAV_ITEMS: NavItem[] = [
  { title: "Inicio", path: "/" },
  { 
    title: "Servicios", 
    subItems: [
      {
        title: "Plataforma Datasisweb",
        description: "Solución integral para tu negocio",
        path: "/instituciones",
        image: "/images/services/datasisweb.jpg"
      },
      {
        title: "Datasisweb Contable",
        description: "Gestión financiera profesional",
        path: "/contable",
        image: "/images/services/contable.jpg"
      },
      {
        title: "Diseño Gráfico",
        description: "Soluciones creativas para tu marca",
        path: "/diseno",
        image: "/images/services/design.jpg"
      },
      {
        title: "Certificados",
        description: "Certificados digitales verificables",
        path: "/certificados",
        image: "/images/services/certificados.jpg"
      }
    ]
  },
  { title: "Instituciones", path: "/instituciones" },
  { title: "Recursos", path: "/recursos" },
  { title: "Contacto", path: "/contactanos" }
]

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [language, setLanguage] = useState('es')
  const { setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DW</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">DatasistemasWeb</span>
        </Link>

        {/* Navegación desktop */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <div 
              key={item.title}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.title)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.path ? (
                <Link
                  href={item.path}
                  className="flex items-center text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                >
                  {item.title}
                </Link>
              ) : (
                <>
                  <button 
                    aria-expanded={hoveredItem === item.title}
                    aria-controls={`submenu-${item.title}`}
                    className="flex items-center text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                  >
                    {item.title}
                    {item.subItems && <ChevronDown className="ml-1 w-4 h-4" />}
                  </button>

                  {item.subItems && (
                    <AnimatePresence>
                      {hoveredItem === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="absolute left-0 mt-2 w-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 overflow-hidden border border-gray-200 dark:border-gray-700"
                        >
                          <div className="grid grid-cols-3">
                            <div className="col-span-1">
                              <img 
                                src={item.subItems[0].image} 
                                alt={item.subItems[0].title}
                                className="w-full h-full object-cover min-h-[200px]"
                                loading="lazy"
                                onError={(e) => {
                                  e.currentTarget.src = '/images/placeholder.jpg'
                                }}
                              />
                            </div>
                            <div className="col-span-2 p-6">
                              <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h4>
                              <div className="grid grid-cols-2 gap-4">
                                {item.subItems.map((subItem, i) => (
                                  <Link
                                    key={i}
                                    href={subItem.path}
                                    className="group block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                  >
                                    <h5 className="font-semibold group-hover:text-primary dark:group-hover:text-primary text-gray-900 dark:text-white">
                                      {subItem.title}
                                    </h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                      {subItem.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>

        {/* Iconos lado derecho + botón móvil */}
        <div className="flex items-center space-x-4">
          {/* Botón hamburguesa móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
              )}
            </button>
          </div>

          {/* Botón de tema */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Idioma */}
          <div className="relative">
            <button 
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-sm font-medium"
            >
              {language === 'es' ? 'ES' : 'EN'}
            </button>
          </div>

          {/* Login */}
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <LogIn className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-800 shadow-md border-t border-gray-200 dark:border-gray-700"
          >
            <div className="container mx-auto px-4 py-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.title} className="py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  {item.path ? (
                    <Link
                      href={item.path}
                      className="block w-full text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                      >
                        {item.title}
                        {item.subItems && (
                          <ChevronDown className={`transition-transform ${openSubmenu === item.title ? 'rotate-180' : ''}`} />
                        )}
                      </button>
                      {item.subItems && openSubmenu === item.title && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.path}
                              className="block py-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
