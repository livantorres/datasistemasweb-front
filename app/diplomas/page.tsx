import { Award, Clock, Users, CheckCircle, Star } from 'lucide-react'

export default function DiplomasPage() {
  const diplomas = [
    {
      id: 1,
      titulo: 'Diploma en Administración de Empresas',
      institucion: 'Centro de Estudios Empresariales',
      duracion: '12 meses',
      estudiantes: 2500,
      calificacion: 4.8,
      precio: '$1,200',
      descripcion: 'Programa completo de administración empresarial con enfoque en gestión moderna.',
      certificado: 'Oficial',
      modalidad: 'Online',
      logo: '💼'
    },
    {
      id: 2,
      titulo: 'Certificación en Desarrollo Web',
      institucion: 'Instituto Tecnológico Avanzado',
      duracion: '8 meses',
      estudiantes: 3200,
      calificacion: 4.9,
      precio: '$980',
      descripcion: 'Aprende desarrollo web moderno con las últimas tecnologías del mercado.',
      certificado: 'Oficial',
      modalidad: 'Híbrido',
      logo: '💻'
    },
    {
      id: 3,
      titulo: 'Diploma en Ciencias de la Salud',
      institucion: 'Escuela de Medicina Integral',
      duracion: '18 meses',
      estudiantes: 1800,
      calificacion: 4.7,
      precio: '$2,100',
      descripcion: 'Formación integral en ciencias de la salud con prácticas clínicas.',
      certificado: 'Oficial',
      modalidad: 'Presencial',
      logo: '🏥'
    },
    {
      id: 4,
      titulo: 'Certificación en Marketing Digital',
      institucion: 'Academia de Artes y Humanidades',
      duracion: '6 meses',
      estudiantes: 4100,
      calificacion: 4.6,
      precio: '$750',
      descripcion: 'Estrategias modernas de marketing digital y análisis de datos.',
      certificado: 'Oficial',
      modalidad: 'Online',
      logo: '📱'
    },
    {
      id: 5,
      titulo: 'Diploma en Educación Superior',
      institucion: 'Universidad Nacional de Educación',
      duracion: '15 meses',
      estudiantes: 2200,
      calificacion: 4.8,
      precio: '$1,500',
      descripcion: 'Formación pedagógica avanzada para educadores del siglo XXI.',
      certificado: 'Oficial',
      modalidad: 'Híbrido',
      logo: '🎓'
    },
    {
      id: 6,
      titulo: 'Certificación en Finanzas Personales',
      institucion: 'Centro de Estudios Empresariales',
      duracion: '4 meses',
      estudiantes: 5600,
      calificacion: 4.5,
      precio: '$450',
      descripcion: 'Gestión inteligente de finanzas personales y planificación financiera.',
      certificado: 'Oficial',
      modalidad: 'Online',
      logo: '💰'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Award className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Diplomas y Certificaciones
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100 max-w-3xl mx-auto">
              Obtén certificaciones reconocidas que impulsarán tu carrera profesional. 
              Programas diseñados por expertos con validez oficial.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Certificaciones Oficiales</h3>
              <p className="text-gray-600 dark:text-gray-300">Reconocidas internacionalmente</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flexibilidad Total</h3>
              <p className="text-gray-600 dark:text-gray-300">Estudia a tu ritmo</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Soporte Personalizado</h3>
              <p className="text-gray-600 dark:text-gray-300">Tutores expertos disponibles</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Alta Calidad</h3>
              <p className="text-gray-600 dark:text-gray-300">Contenido actualizado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Diplomas Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {diplomas.map((diploma) => (
            <div
              key={diploma.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{diploma.logo}</div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
                      {diploma.calificacion}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {diploma.titulo}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {diploma.descripcion}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    {diploma.duracion}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    {diploma.estudiantes.toLocaleString()} estudiantes
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Award className="h-4 w-4 mr-2" />
                    {diploma.modalidad}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {diploma.precio}
                  </div>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                    Inscribirse
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 