import Link from 'next/link'
import { Building, Users, Award, Globe, Search, Filter } from 'lucide-react'
import Stats from './../components/Stats2'

export default function InstitucionesPage() {
  const instituciones = [
    {
      id: 1,
      nombre: 'Universidad Nacional de Educación',
      descripcion: 'Institución líder en educación superior con más de 50 años de experiencia.',
      estudiantes: 15000,
      programas: 120,
      ubicacion: 'Ciudad Capital',
      logo: '🏛️',
      categoria: 'Universidad Pública'
    },
    {
      id: 2,
      nombre: 'Instituto Tecnológico Avanzado',
      descripcion: 'Especializado en tecnología e innovación con programas de vanguardia.',
      estudiantes: 8000,
      programas: 85,
      ubicacion: 'Centro Tecnológico',
      logo: '🎓',
      categoria: 'Instituto Privado'
    },
    {
      id: 3,
      nombre: 'Colegio Superior de Ciencias',
      descripcion: 'Enfoque en ciencias exactas y naturales con laboratorios de última generación.',
      estudiantes: 12000,
      programas: 95,
      ubicacion: 'Zona Científica',
      logo: '🔬',
      categoria: 'Colegio Superior'
    },
    {
      id: 4,
      nombre: 'Academia de Artes y Humanidades',
      descripcion: 'Centro de excelencia en artes, literatura y ciencias humanas.',
      estudiantes: 6000,
      programas: 65,
      ubicacion: 'Distrito Cultural',
      logo: '🎨',
      categoria: 'Academia'
    },
    {
      id: 5,
      nombre: 'Centro de Estudios Empresariales',
      descripcion: 'Formación en administración, finanzas y emprendimiento.',
      estudiantes: 10000,
      programas: 75,
      ubicacion: 'Centro Financiero',
      logo: '💼',
      categoria: 'Centro de Estudios'
    },
    {
      id: 6,
      nombre: 'Escuela de Medicina Integral',
      descripcion: 'Formación médica de excelencia con prácticas clínicas avanzadas.',
      estudiantes: 5000,
      programas: 45,
      ubicacion: 'Complejo Médico',
      logo: '🏥',
      categoria: 'Escuela Especializada'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Instituciones Educativas
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Descubre las mejores instituciones educativas que forman parte de nuestra plataforma. 
              Cada una ofrece programas únicos y de alta calidad para tu desarrollo profesional.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      

        <Stats />
     
       {/* Search and Filter */}
       <div className="bg-white dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar Instituciones..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent">
                {instituciones.map((institucion) => (
                  <option key={institucion.id} value={institucion.nombre}>
                    {institucion.categoria}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Institutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {instituciones.map((institucion) => (
            <div
              key={institucion.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{institucion.logo}</div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {institucion.categoria}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {institucion.nombre}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {institucion.descripcion}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    {institucion.estudiantes.toLocaleString()} estudiantes
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Award className="h-4 w-4 mr-2" />
                    {institucion.programas} programas
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Globe className="h-4 w-4 mr-2" />
                    {institucion.ubicacion}
                  </div>
                </div>
                
                <Link
                  href={`/instituciones/${institucion.id}`}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 