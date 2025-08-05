'use client'

import { useEffect, useState } from 'react'
import { Users, BookOpen, Award, Building } from 'lucide-react'

export default function Stats() {
  const [counts, setCounts] = useState({
    registros: 0,
    soportes: 0,
    usuarios: 0,
    institutions: 0,
  })

  const stats = [
    {
      name: 'Registros Procesados',
      value: counts.registros,
      icon: Award,
      suffix: '+',
    },
    {
      name: 'Soportes Tecnicos',
      value: counts.soportes,
      icon: BookOpen,
      suffix: '+',
    },
    {
      name: 'Usuarios Que Nos Certifican',
      value: counts.usuarios,
      icon: Users,
      suffix: '+',
    },
    {
      name: 'Instituciones Educativas',
      value: counts.institutions,
      icon: Building,
      suffix: '+',
    },
  ]

  useEffect(() => {
    const targetCounts = {
      registros: 1378113586,
      soportes: 5233,
      usuarios: 1047,
      institutions: 279,
    }

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const timer = setInterval(() => {
      setCounts(prev => ({
        registros: Math.min(prev.registros + Math.ceil(targetCounts.registros / steps), targetCounts.registros),
        soportes: Math.min(prev.soportes + Math.ceil(targetCounts.soportes / steps), targetCounts.soportes),
        usuarios: Math.min(prev.usuarios + Math.ceil(targetCounts.usuarios / steps), targetCounts.usuarios),
        institutions: Math.min(prev.institutions + Math.ceil(targetCounts.institutions / steps), targetCounts.institutions),
      }))
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-blue-600 dark:bg-blue-700 py-6 sm:py-6">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:max-w-none">
    { /* <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Números que Hablan
        </h2>
        <p className="mt-4 text-lg leading-8 text-blue-100">
          Descubre el impacto de nuestras plataformas
        </p>
      </div>*/}

      <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="flex flex-col bg-blue-500/20 dark:bg-blue-800/30 p-8">
            <dt className="text-sm font-semibold leading-6 text-blue-100">
              {stat.name}
            </dt>
            <dd className="order-first text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
              <stat.icon className="h-8 w-8 text-white" />
              {stat.value.toLocaleString()}{stat.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
</div>

  )
} 