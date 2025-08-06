"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Building, Users, Award, Globe, Search, Filter } from 'lucide-react'
import { apiClient } from '@/lib/api'
import LoadingSpinner from './../components/ui/LoadingSpinner'
import ErrorMessage from './../components/ui/ErrorMessage'
import Stats from './../components/Stats2'
// Después
import Image from 'next/image';

export default function InstitucionesPage() {
  //const [instituciones, setInstituciones] = useState([])
  const [loading, setLoading] = useState(true)
  //const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [instituciones, setInstituciones] = useState<Institucion[]>([])
  const [error, setError] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(15); // Mostrar 15 inicialmente


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.getInstituciones()
        
        if (response.success) {
          setInstituciones(Array.isArray(response.data.data) ? response.data.data : [])
        } else {
          throw new Error(response.message || 'Error al cargar instituciones')
        }
       } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Error desconocido')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Filtrar instituciones
  const filteredInstituciones = instituciones.filter(institucion => {
    const matchesSearch =
      institucion.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      institucion.departamento.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filter === 'all' || institucion.departamento === filter;

    return matchesSearch && matchesFilter;
  });

  // Determinar cuántas mostrar
  const institucionesToShow =
    searchTerm.trim() === ''
      ? filteredInstituciones.slice(0, visibleCount)
      : filteredInstituciones;

  // Obtener departamentos únicos para el filtro
  const departamentos = [...new Set(instituciones.map(item => item.departamento))]

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

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
              Descubre las instituciones educativas asociadas a nuestra plataforma.
            </p>
          </div>
        </div>
      </div>
     <Stats/>
      {/* Search and Filter */}
      <div className="bg-white dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre o departamento..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select 
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">Todos los departamentos</option>
                {departamentos.map((departamento, index) => (
                  <option key={index} value={departamento}>
                    {departamento}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Institutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredInstituciones.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              No se encontraron instituciones
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Prueba con otros términos de búsqueda o filtros
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {institucionesToShow.map((institucion) => (
                <InstitucionCard key={institucion.id} institucion={institucion} />
              ))}
            </div>
            {/* Botón Ver más solo si no hay búsqueda y quedan más por mostrar */}
            {searchTerm.trim() === '' && institucionesToShow.length < filteredInstituciones.length && (
              <div className="flex justify-center mt-8">
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  onClick={() => setVisibleCount((prev) => prev + 15)}
                >
                  Ver más
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
// Define the type for institucion
interface Institucion {
  id: number | string
  nombre: string
  departamento: string
  extension?: string
  db_name?: string
  url_plataforma?: string
  // Agrega aquí otros campos si existen
}
function InstitucionCard({ institucion }: { institucion: Institucion }) {
  // Acceder a la variable de entorno
const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">
            {institucion.extension === 'png' ? (
              <Image 
                src={`${storageUrl}/instituciones/${institucion.id || 'default'}.png`}
                alt={institucion.nombre}
                width={100} // Debes especificar width y height
                height={50}
                loading="lazy"
                className="h-12 w-12 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/logos/default.png'
                }}
              />
            ) : (
              <Building className="h-12 w-12 text-blue-500" />
            )}
          </div>
          <span className="text-upper inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {institucion.departamento}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {institucion.nombre}
        </h3>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Globe className="h-4 w-4 mr-2" />
            {institucion.url_plataforma ? (
              <a 
                href={institucion.url_plataforma} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Acceder a la plataforma
              </a>
            ) : 'Plataforma no disponible'}
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
  )
}