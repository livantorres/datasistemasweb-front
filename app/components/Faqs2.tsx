'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Faqs() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      question: '¿Cómo puedo registrarme en la plataforma?',
      answer: 'El registro es simple y gratuito. Solo necesitas proporcionar tu información básica, verificar tu email y podrás comenzar a explorar todos los recursos disponibles.'
    },
    {
      question: '¿Los diplomas son reconocidos oficialmente?',
      answer: 'Sí, todos nuestros diplomas y certificaciones son emitidos por instituciones educativas acreditadas y tienen reconocimiento oficial tanto a nivel nacional como internacional.'
    },
    {
      question: '¿Puedo acceder a los recursos desde mi móvil?',
      answer: 'Absolutamente. Nuestra plataforma es completamente responsive y puedes acceder desde cualquier dispositivo: computadora, tablet o smartphone.'
    },
    {
      question: '¿Hay algún costo por usar la plataforma?',
      answer: 'Ofrecemos tanto contenido gratuito como premium. Los recursos básicos son completamente gratuitos, mientras que algunos cursos especializados pueden tener un costo.'
    },
    {
      question: '¿Cómo funciona el sistema de seguimiento del progreso?',
      answer: 'Nuestro sistema te permite ver tu progreso en tiempo real, incluyendo cursos completados, calificaciones obtenidas y tiempo dedicado al aprendizaje.'
    },
    {
      question: '¿Puedo descargar los recursos para uso offline?',
      answer: 'Sí, muchos de nuestros recursos están disponibles para descarga, permitiéndote estudiar sin conexión a internet cuando lo necesites.'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10 dark:divide-gray-100/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white text-center mb-16">
            Preguntas Frecuentes
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-100/10">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt>
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-start justify-between text-left text-gray-900 dark:text-white"
                  >
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {openFaq === index ? (
                        <ChevronUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-400 dark:text-gray-500" />
                      )}
                    </span>
                  </button>
                </dt>
                {openFaq === index && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 