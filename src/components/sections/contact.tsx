import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

export default function ContactSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-8 md:p-10"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              ¿Cómo podemos ayudarte?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Estamos listos para responder tus preguntas y brindarte el mejor servicio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Información de contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMapPin className="text-primary dark:text-secondary mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Dirección</h4>
                    <p className="text-gray-600 dark:text-gray-300">Av. Principal 123, Oficina 456</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiPhone className="text-primary dark:text-secondary mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Teléfono</h4>
                    <p className="text-gray-600 dark:text-gray-300">+593 98 765 4321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiMail className="text-primary dark:text-secondary mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@datasistemasweb.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiClock className="text-primary dark:text-secondary mt-1 mr-3" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Horario</h4>
                    <p className="text-gray-600 dark:text-gray-300">Lun-Vie: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary dark:focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="¿Cómo podemos ayudarte?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark dark:bg-secondary dark:hover:bg-secondary-dark text-white py-3 px-6 rounded-lg transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://wa.me/593987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chatear por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}