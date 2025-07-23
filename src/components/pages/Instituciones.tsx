import { useState, useEffect , startTransition} from 'react';
import { motion } from 'framer-motion';
import Header from '../header';
import Footer from '../footer';
import Carousel from '../ui/carousel';
// Datos de si consumo una API 
/*const [instituciones, setInstituciones] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchInstituciones = async () => {
    try {
      const response = await fetch('https://api.example.com/instituciones');
      const data = await response.json();
      setInstituciones(data);
    } catch (error) {
      console.error('Error fetching instituciones:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchInstituciones();
}, []);*/
// Datos de prueba (simulando API)
const MOCK_INSTITUCIONES = Array.from({ length: 35 }, (_, i) => ({
  id: i + 1,
  nombre: `Institución Educativa ${i + 1}`,
  escudo: `https://via.placeholder.com/150?text=Escudo+${i + 1}`,
  tienePlataformaInstitucional: i % 3 === 0, // Solo 1 de cada 3 tiene plataforma institucional
  descripcion: `Descripción de la institución ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
}));

const SLIDES = [
  {
    id: 1,
    title: "Plataforma Datasisweb",
    description: "Acceso integral para instituciones educativas",
    image: "/images/service1.jpg"
  }
];

export default function Instituciones() {
    const [darkMode, setDarkMode] = useState(() => {
        // Mejor inicialización del tema
        return localStorage.getItem('darkMode') === 'true';
      });
    
      const toggleDarkMode = () => {
        startTransition(() => {
          setDarkMode(prev => {
            const newMode = !prev;
            localStorage.setItem('darkMode', String(newMode));
            return newMode;
          });
        });
      };

  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(10);
  const [filteredInstituciones, setFilteredInstituciones] = useState(MOCK_INSTITUCIONES.slice(0, 10));

  useEffect(() => {
    // Filtrar instituciones basado en el término de búsqueda
    const filtered = MOCK_INSTITUCIONES.filter(inst =>
      inst.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInstituciones(filtered.slice(0, visibleCount));
  }, [searchTerm, visibleCount]);

  const loadMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
     {/* <Header darkMode={darkMode} setDarkMode={toggleDarkMode} />*/}
      
      <main className="flex-grow">
        {/* Hero Section con carrusel completo */}
        <section className="relative">
          <div className="w-full h-96 md:h-[500px]">
            <Carousel 
              slides={SLIDES} 
              autoPlay={true} 
              interval={5000} 
              //fullWidth={true}
            />
          </div>
        </section>

        {/* Sección de búsqueda */}
        <section className="container mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Buscar Institución
            </h2>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Escribe el nombre de la institución..."
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white shadow-lg"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setVisibleCount(10); // Resetear paginación al buscar
                }}
              />
              <span className="absolute right-6 top-4 text-gray-400 dark:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
          </motion.div>
        </section>

        {/* Resultados de búsqueda */}
        <section className="container mx-auto px-4 pb-12">
          {filteredInstituciones.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredInstituciones.map((institucion) => (
                  <motion.div
                    key={institucion.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Escudo */}
                    <div className="p-6 flex justify-center">
                      <img 
                        src={institucion.escudo} 
                        alt={`Escudo ${institucion.nombre}`}
                        className="h-32 w-32 object-contain rounded-full border-2 border-primary dark:border-secondary"
                        loading="lazy"
                      />
                    </div>

                    {/* Nombre */}
                    <div className="px-4 pb-2 text-center">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {institucion.nombre}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">
                        {institucion.descripcion}
                      </p>
                    </div>

                    {/* Botones */}
                    <div className="p-4 bg-gray-50 dark:bg-gray-700/50 flex flex-col space-y-2">
                      <button className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors">
                        Ingresar plataforma notas
                      </button>
                      
                      {institucion.tienePlataformaInstitucional && (
                        <button className="px-4 py-2 bg-secondary hover:bg-secondary-dark text-white rounded-lg transition-colors">
                          Ingresar plataforma Institucional
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Botón "Ver más" */}
              {visibleCount < MOCK_INSTITUCIONES.length && filteredInstituciones.length >= visibleCount && (
                <div className="mt-10 text-center">
                  <button
                    onClick={loadMore}
                    className="px-6 py-3 bg-primary hover:bg-primary-dark dark:bg-secondary dark:hover:bg-secondary-dark text-white rounded-xl transition-colors shadow-md"
                  >
                    Ver Más Instituciones
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No se encontraron instituciones con ese nombre.
              </p>
            </div>
          )}
        </section>
      </main>

      {/* <Footer />*/}
    </div>
  );
}