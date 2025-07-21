import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES = [
  {
    id: 1,
    title: "Plataforma Datasisweb",
    description: "Solución integral para gestión empresarial con módulos personalizables.",
    features: [
      "Gestión de inventarios",
      "Facturación electrónica",
      "Reportes en tiempo real",
      "Multi-usuario"
    ],
    icon: "📊"
  },
  {
    id: 2,
    title: "Datasisweb Contable",
    description: "Sistema especializado para la gestión contable y financiera.",
    features: [
      "Libros contables automáticos",
      "Conciliación bancaria",
      "Impuestos y retenciones",
      "Integración con SRI"
    ],
    icon: "💰"
  },
  {
    id: 3,
    title: "Diseño Gráfico - Publicidad",
    description: "Soluciones creativas para tu marca y comunicación corporativa.",
    features: [
      "Diseño de logotipos",
      "Material publicitario",
      "Redes sociales",
      "Presentaciones corporativas"
    ],
    icon: "🎨"
  },
  {
    id: 4,
    title: "Diplomas y certificados",
    description: "Certificados digitales con validación en blockchain.",
    features: [
      "Diseño personalizado",
      "Sistema de verificación",
      "Plantillas profesionales",
      "Entrega digital y física"
    ],
    icon: "🏅"
  }
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Tabs */}
          <div className="lg:col-span-2">
            <div className="space-y-2">
              {SERVICES.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all ${activeTab === index 
                    ? 'bg-primary dark:bg-secondary text-white shadow-md' 
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{service.icon}</span>
                    <span className="font-medium">{service.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={SERVICES[activeTab].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {SERVICES[activeTab].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {SERVICES[activeTab].description}
                </p>
                <ul className="space-y-3">
                  {SERVICES[activeTab].features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary dark:text-secondary mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 px-6 py-3 bg-primary hover:bg-primary-dark dark:bg-secondary dark:hover:bg-secondary-dark text-white rounded-lg transition-colors">
                  Más información
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}