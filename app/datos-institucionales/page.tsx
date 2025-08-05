import { Building, Users, Award, Calendar, TrendingUp, Globe, CheckCircle } from 'lucide-react'

export default function DatosInstitucionalesPage() {
  const estadisticas = [
    {
      titulo: 'Instituciones Registradas',
      valor: '25',
      icono: Building,
      color: 'blue',
      descripcion: 'Instituciones educativas activas'
    },
    {
      titulo: 'Estudiantes Activos',
      valor: '15,000+',
      icono: Users,
      color: 'green',
      descripcion: 'Estudiantes matriculados'
    },
    {
      titulo: 'Diplomas Otorgados',
      valor: '8,000+',
      icono: Award,
      color: 'purple',
      descripcion: 'Certificaciones emitidas'
    },
    {
      titulo: 'Años de Experiencia',
      valor: '10+',
      icono: Calendar,
      color: 'orange',
      descripcion: 'En el sector educativo'
    }
  ]

  const datosInstitucionales = [
    {
      categoria: 'Información General',
      items: [
        { titulo: 'Nombre Legal', valor: 'Demo Página Web S.A.' },
        { titulo: 'RUC', valor: '20123456789' },
        { titulo: 'Fecha de Constitución', valor: '15 de Marzo de 2014' },
        { titulo: 'Tipo de Empresa', valor: 'Sociedad Anónima' },
        { titulo: 'Sector', valor: 'Educación y Tecnología' }
      ]
    },
    {
      categoria: 'Información de Contacto',
      items: [
        { titulo: 'Dirección Principal', valor: 'Av. Principal 123, Ciudad Capital' },
        { titulo: 'Teléfono', valor: '+1 (555) 123-4567' },
        { titulo: 'Email', valor: 'info@demoweb.edu' },
        { titulo: 'Sitio Web', valor: 'www.demoweb.edu' },
        { titulo: 'Horario de Atención', valor: 'Lun - Vie: 8:00 - 18:00' }
      ]
    },
    {
      categoria: 'Información Académica',
      items: [
        { titulo: 'Programas Activos', valor: '150+' },
        { titulo: 'Cursos Disponibles', valor: '500+' },
        { titulo: 'Profesores', valor: '200+' },
        { titulo: 'Tutores Online', valor: '50+' },
        { titulo: 'Recursos Digitales', valor: '10,000+' }
      ]
    },
    {
      categoria: 'Certificaciones y Acreditaciones',
      items: [
        { titulo: 'ISO 9001', valor: 'Certificado' },
        { titulo: 'ISO 27001', valor: 'Certificado' },
        { titulo: 'Acreditación Educativa', valor: 'Vigente' },
        { titulo: 'Cumplimiento GDPR', valor: 'Verificado' },
        { titulo: 'Certificación de Calidad', valor: 'Aprobada' }
      ]
    }
  ]

  const indicadores = [
    {
      titulo: 'Tasa de Satisfacción',
      porcentaje: 95,
      descripcion: 'Estudiantes satisfechos con nuestros servicios'
    },
    {
      titulo: 'Tasa de Finalización',
      porcentaje: 87,
      descripcion: 'Estudiantes que completan sus programas'
    },
    {
      titulo: 'Tasa de Empleabilidad',
      porcentaje: 92,
      descripcion: 'Graduados que consiguen empleo en su campo'
    },
    {
      titulo: 'Tasa de Retención',
      porcentaje: 89,
      descripcion: 'Estudiantes que continúan con programas adicionales'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-700 dark:to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Building className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Datos Institucionales
            </h1>
            <p className="mt-6 text-xl leading-8 text-indigo-100 max-w-3xl mx-auto">
              Información transparente sobre nuestra institución, estadísticas actualizadas 
              y datos que demuestran nuestro compromiso con la excelencia educativa.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {estadisticas.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900 mb-4`}>
                <stat.icono className={`h-6 w-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.valor}
              </h3>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {stat.titulo}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {stat.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Data */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-16">
          Información Detallada
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {datosInstitucionales.map((seccion, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-indigo-600 dark:bg-indigo-700 px-6 py-4">
                <h3 className="text-lg font-semibold text-white">
                  {seccion.categoria}
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {seccion.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.titulo}
                      </span>
                      <span className="text-sm text-gray-900 dark:text-white font-semibold">
                        {item.valor}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Indicators */}
      <div className="bg-white dark:bg-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Indicadores de Rendimiento
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Métricas que demuestran nuestro compromiso con la calidad educativa
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {indicadores.map((indicador, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900 mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      {indicador.porcentaje}%
                    </span>
                  </div>
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-indigo-200 dark:text-indigo-800"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - indicador.porcentaje / 100)}`}
                      className="text-indigo-600 dark:text-indigo-400 transition-all duration-1000"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {indicador.titulo}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {indicador.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Assurance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Compromiso con la Calidad
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Nuestros estándares de calidad nos distinguen en el sector educativo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Certificaciones Internacionales
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Cumplimos con los más altos estándares de calidad educativa reconocidos internacionalmente.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Mejora Continua
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Implementamos procesos de mejora continua para mantener la excelencia en todos nuestros servicios.
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Alcance Global
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nuestros programas están disponibles para estudiantes de todo el mundo con soporte multilingüe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 