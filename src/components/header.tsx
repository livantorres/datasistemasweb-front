import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiChevronDown, FiUser } from 'react-icons/fi';
import ThemeToggle from './theme-toggle';
import { Link } from 'react-router-dom';

interface NavItem {
  title: string;
  path?: string;
  subItems?: {
    title: string;
    description: string;
    image: string;
    path: string;
  }[];
}

const NAV_ITEMS: NavItem[] = [
  { 
    title: "Inicio",
    path: "/" 
  },
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
  { 
    title: "Nosotros",
    path: "/nosotros" 
  },
  { 
    title: "Contacto",
    path: "/contacto" 
  }
];

export default function Header({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (mode: boolean) => void }) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo como Link */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo-small.png" 
            alt="DatasistemasWeb" 
            className="h-10 w-10 md:hidden"
          />
          <img 
            src="/logo-large.png" 
            alt="DatasistemasWeb" 
            className="h-12 hidden md:block"
          />
        </Link>

        {/* Desktop Navigation */}
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
                  to={item.path}
                  className="flex items-center text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-secondary transition-colors"
                >
                  {item.title}
                </Link>
              ) : (
                <>
                  <button 
                    aria-expanded={hoveredItem === item.title}
                    aria-controls={`submenu-${item.title}`}
                    className="flex items-center text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-secondary transition-colors"
                  >
                    {item.title}
                    {item.subItems && <FiChevronDown className="ml-1" />}
                  </button>
                  
                  {item.subItems && (
                    <AnimatePresence>
                      {hoveredItem === item.title && (
                        <motion.div
                          style={{ willChange: 'transform, opacity' }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="absolute left-0 mt-2 w-[600px] bg-white dark:bg-gray-700 rounded-md shadow-xl z-50 overflow-hidden"
                        >
                          <div className="grid grid-cols-3">
                            <div className="col-span-1">
                              <img 
                                src={item.subItems[0].image} 
                                alt={item.subItems[0].title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div className="col-span-2 p-6">
                              <h4 className="text-lg font-bold mb-4">{item.title}</h4>
                              <div className="grid grid-cols-2 gap-4">
                                {item.subItems.map((subItem, i) => (
                                  <Link
                                    key={i}
                                    to={subItem.path}
                                    className="group block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                                  >
                                    <h5 className="font-semibold group-hover:text-primary dark:group-hover:text-secondary">
                                      {subItem.title}
                                    </h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
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

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
            <FiUser className="text-gray-700 dark:text-gray-200" />
          </button>
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú móvil"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          style={{ willChange: 'transform, opacity' }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-800 shadow-md"
        >
          <div className="container mx-auto px-4 py-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.title} className="py-2 border-b border-gray-200 dark:border-gray-700">
                {item.path ? (
                  <Link
                    to={item.path}
                    className="block w-full text-gray-700 dark:text-gray-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <button
                      className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200"
                      onClick={() => setOpenSubmenu(openSubmenu === item.title ? null : item.title)}
                    >
                      {item.title}
                      {item.subItems && <FiChevronDown className={`transition-transform ${openSubmenu === item.title ? 'rotate-180' : ''}`} />}
                    </button>
                    
                    {item.subItems && openSubmenu === item.title && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.path}
                            className="block py-1 text-gray-600 dark:text-gray-300"
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
    </header>
  );
}