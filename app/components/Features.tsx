'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import * as Tabs from '@radix-ui/react-tabs'
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Users, 
  Shield, 
  Globe,
  CheckCircle
} from 'lucide-react'
// Después
import Image from 'next/image';

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeTab2, setActiveTab2] = useState(0)

  const tabs = [
    {
      id: 'notas',
      title: 'Plataforma de Notas',
      content: 'Sistema integral para la gestión académica que permite llevar el control de calificaciones, asistencia, horarios y más.',
      image: '/plataforma-notas.png'
    },
    {
      id: 'contable',
      title: 'Plataforma Contable',
      content: 'Herramienta especializada para la gestión financiera de instituciones educativas con reportes personalizados.',
      image: '/plataforma-contable.png'
    },
    {
      id: 'diplomas',
      title: 'Servicios de Diplomas',
      content: 'Emisión de diplomas digitales y físicos con validación en blockchain para garantizar su autenticidad.',
      image: '/diplomas.jpg'
    }
  ]
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
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Nuestras Plataformas
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas específicamente para las necesidades de las instituciones educativas.
          </p>
        </motion.div>

        <Tabs.Root 
          value={activeTab.toString()} 
          onValueChange={(value) => setActiveTab(parseInt(value))}
          className="flex flex-col md:flex-row gap-8"
        >
          <Tabs.List className="flex md:flex-col gap-2 md:w-1/3">
            {tabs.map((tab, index) => (
              <Tabs.Trigger
                key={tab.id}
                value={index.toString()}
                className={`px-6 py-3 text-left rounded-lg transition-colors ${activeTab === index ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                {tab.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <div className="md:w-2/3">
            {tabs.map((tab, index) => (
              <Tabs.Content key={tab.id} value={index.toString()} asChild>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{tab.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{tab.content}</p>
                      <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                        Saber más
                      </button>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <Image 
                        src={tab.image} 
                        width={500}
                        height={300}
                        alt={tab.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </Tabs.Content>
            ))}
          </div>
        </Tabs.Root>
      </div>

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
                onClick={() => setActiveTab2(index)}
                className={`flex flex-col items-center p-4 rounded-lg transition-all duration-200 ${
                  activeTab2 === index
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-700'
                    : 'bg-gray-50 dark:bg-gray-800 border-2 border-transparent hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <feature.icon className={`h-8 w-8 mb-2 ${
                  activeTab2 === index 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-400 dark:text-gray-500'
                }`} />
                <span className={`text-xs font-medium text-center ${
                  activeTab2 === index
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
                 const IconComponent = features[activeTab2].icon;
                 return <IconComponent className="h-12 w-12 text-blue-600 dark:text-blue-400" />;
               })()}
               <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {features[activeTab2].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {features[activeTab2].description}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features[activeTab2].benefits.map((benefit, index) => (
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
    </section>
  )
}