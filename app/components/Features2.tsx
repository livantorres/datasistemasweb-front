'use client'

import { useState } from 'react'
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Users, 
  Shield, 
  Globe,
  CheckCircle
} from 'lucide-react'

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)

  const features = [
    {
      name: 'Educación Superior',
      icon: GraduationCap,
      description: 'Accede a programas de educación superior de las mejores instituciones.',
      benefits: [
        'Programas certificados',
        'Flexibilidad horaria',
        'Seguimiento personalizado',
        'Recursos multimedia'
      ]
    },
    {
      name: 'Recursos Digitales',
      icon: BookOpen,
      description: 'Biblioteca digital con miles de recursos educativos disponibles.',
      benefits: [
        'Libros digitales',
        'Videos educativos',
        'Presentaciones interactivas',
        'Ejercicios prácticos'
      ]
    },
    {
      name: 'Diplomas y Certificaciones',
      icon: Award,
      description: 'Obtén diplomas y certificaciones reconocidas internacionalmente.',
      benefits: [
        'Certificaciones oficiales',
        'Verificación digital',
        'Reconocimiento internacional',
        'Acceso inmediato'
      ]
    },
    {
      name: 'Comunidad Educativa',
      icon: Users,
      description: 'Conecta con estudiantes y profesores de todo el mundo.',
      benefits: [
        'Foros de discusión',
        'Grupos de estudio',
        'Mentorías',
        'Eventos virtuales'
      ]
    },
    {
      name: 'Seguridad y Privacidad',
      icon: Shield,
      description: 'Tus datos están protegidos con los más altos estándares de seguridad.',
      benefits: [
        'Encriptación avanzada',
        'Cumplimiento GDPR',
        'Backup automático',
        'Acceso seguro'
      ]
    },
    {
      name: 'Acceso Global',
      icon: Globe,
      description: 'Accede desde cualquier lugar del mundo, en cualquier momento.',
      benefits: [
        'Plataforma multiplataforma',
        'Sincronización en la nube',
        'Modo offline',
        'Soporte 24/7'
      ]
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Características Principales
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Todo lo que necesitas para tu educación
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Nuestra plataforma ofrece herramientas y recursos completos para facilitar tu aprendizaje
            y desarrollo profesional.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {features.map((feature, index) => (
              <button
                key={feature.name}
                onClick={() => setActiveTab(index)}
                className={`flex flex-col items-center p-4 rounded-lg transition-all duration-200 ${
                  activeTab === index
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-700'
                    : 'bg-gray-50 dark:bg-gray-800 border-2 border-transparent hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <feature.icon className={`h-8 w-8 mb-2 ${
                  activeTab === index 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-400 dark:text-gray-500'
                }`} />
                <span className={`text-xs font-medium text-center ${
                  activeTab === index
                    ? 'text-blue-900 dark:text-blue-100'
                    : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {feature.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                         <div className="flex items-center gap-4 mb-6">
               {(() => {
                 const IconComponent = features[activeTab].icon;
                 return <IconComponent className="h-12 w-12 text-blue-600 dark:text-blue-400" />;
               })()}
               <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {features[activeTab].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {features[activeTab].description}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features[activeTab].benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 