import { BookOpen, Video, FileText, Download, Search, Filter } from 'lucide-react'

export default function RecursosPage() {
  const recursos = [
    {
      id: 1,
      titulo: 'Guía Completa de JavaScript Moderno',
      tipo: 'Libro Digital',
      categoria: 'Programación',
      autor: 'Dr. Carlos Rodríguez',
      descripcion: 'Manual completo que cubre desde los fundamentos hasta las características más avanzadas de JavaScript ES6+.',
      paginas: 450,
      idioma: 'Español',
      formato: 'PDF',
      descargas: 12500,
      icon: '📚'
    },
    {
      id: 2,
      titulo: 'Curso de React.js desde Cero',
      tipo: 'Video Curso',
      categoria: 'Desarrollo Web',
      autor: 'Ing. María González',
      descripcion: 'Serie de videos que te llevará desde los conceptos básicos hasta crear aplicaciones complejas con React.',
      duracion: '15 horas',
      idioma: 'Español',
      formato: 'MP4',
      descargas: 8900,
      icon: '🎥'
    },
    {
      id: 3,
      titulo: 'Manual de Administración Empresarial',
      tipo: 'Documento',
      categoria: 'Administración',
      autor: 'MBA Ana Martínez',
      descripcion: 'Guía práctica para la gestión empresarial moderna con casos de estudio reales.',
      paginas: 320,
      idioma: 'Español',
      formato: 'PDF',
      descargas: 6700,
      icon: '📄'
    },
    {
      id: 4,
      titulo: 'Introducción a la Inteligencia Artificial',
      tipo: 'Presentación',
      categoria: 'Tecnología',
      autor: 'Dr. Luis Pérez',
      descripcion: 'Presentación interactiva sobre los fundamentos de IA y machine learning.',
      diapositivas: 85,
      idioma: 'Español',
      formato: 'PPTX',
      descargas: 5400,
      icon: '🤖'
    },
    {
      id: 5,
      titulo: 'Guía de Marketing Digital 2024',
      tipo: 'E-book',
      categoria: 'Marketing',
      autor: 'Lic. Sofía Herrera',
      descripcion: 'Estrategias actualizadas de marketing digital para el año 2024.',
      paginas: 280,
      idioma: 'Español',
      formato: 'EPUB',
      descargas: 11200,
      icon: '📱'
    },
    {
      id: 6,
      titulo: 'Tutorial de Diseño UX/UI',
      tipo: 'Video Tutorial',
      categoria: 'Diseño',
      autor: 'Diseñador Juan López',
      descripcion: 'Tutorial paso a paso para crear interfaces de usuario atractivas y funcionales.',
      duracion: '8 horas',
      idioma: 'Español',
      formato: 'MP4',
      descargas: 7600,
      icon: '🎨'
    }
  ]

  const categorias = [
    'Todos',
    'Programación',
    'Desarrollo Web',
    'Administración',
    'Tecnología',
    'Marketing',
    'Diseño'
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-700 dark:to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <BookOpen className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Biblioteca de Recursos
            </h1>
            <p className="mt-6 text-xl leading-8 text-green-100 max-w-3xl mx-auto">
              Accede a miles de recursos educativos de alta calidad. 
              Libros, videos, presentaciones y más para tu desarrollo profesional.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar recursos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent">
                {categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recursos.map((recurso) => (
            <div
              key={recurso.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{recurso.icon}</div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    {recurso.tipo}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {recurso.titulo}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {recurso.descripcion}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Autor:</span>
                    <span className="ml-1">{recurso.autor}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Categoría:</span>
                    <span className="ml-1">{recurso.categoria}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Formato:</span>
                    <span className="ml-1">{recurso.formato}</span>
                  </div>
                  {recurso.paginas && (
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">Páginas:</span>
                      <span className="ml-1">{recurso.paginas}</span>
                    </div>
                  )}
                  {recurso.duracion && (
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">Duración:</span>
                      <span className="ml-1">{recurso.duracion}</span>
                    </div>
                  )}
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Download className="h-4 w-4 mr-1" />
                    {recurso.descargas.toLocaleString()} descargas
                  </div>
                </div>
                
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 