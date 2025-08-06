'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
// Después
import Image from 'next/image';
export default function Faqs() {
  const faqs = [
    {
      id: '1',
      question: '¿Cómo implementamos la plataforma en mi institución?',
      answer: 'Nuestro equipo de implementación guía a tu institución a través de un proceso estructurado que incluye capacitación, migración de datos y soporte continuo.',
      image: '/implementacion.jpg'
    },
    {
      id: '2',
      question: '¿Qué seguridad tienen los datos en la plataforma?',
      answer: 'Utilizamos encriptación de extremo a extremo, backups diarios y protocolos de seguridad avanzados para proteger toda la información.',
      image: '/seguridad.jpg'
    },
    {
      id: '3',
      question: '¿Ofrecen soporte técnico continuo?',
      answer: 'Sí, contamos con un equipo de soporte disponible 24/7 para resolver cualquier incidencia y asesoramiento continuo.',
      image: '/soporte.jpg'
    },
    {
      id: '4',
      question: '¿Se puede integrar con otros sistemas?',
      answer: 'Nuestras plataformas cuentan con APIs abiertas para integración con sistemas de pago, gestión documental y otras herramientas.',
      image: '/integracion.jpg'
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Resuelve tus dudas sobre nuestras plataformas y servicios.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <Accordion.Item key={faq.id} value={faq.id} asChild>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {faq.question}
                      </span>
                      <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <Accordion.Content asChild>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                        <div>
                          <p className="text-gray-600 dark:text-gray-400">
                            {faq.answer}
                          </p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow">
                          <Image 
                            src={faq.image} 
                            alt={faq.question}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </Accordion.Content>
                </motion.div>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  )
}