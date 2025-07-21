import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const FOOTER_LINKS = [
  {
    title: "Empresa",
    links: ["Nosotros", "Servicios", "Clientes", "Contacto"]
  },
  {
    title: "Legal",
    links: ["Política de privacidad", "Términos de servicio", "Garantías"]
  },
  {
    title: "Recursos",
    links: ["Documentación", "Tutoriales", "Blog", "FAQs"]
  }
];

const SOCIAL_LINKS = [
  { icon: <FiFacebook />, url: "#" },
  { icon: <FiTwitter />, url: "#" },
  { icon: <FiInstagram />, url: "#" },
  { icon: <FiLinkedin />, url: "#" }
];

const RECENT_CLIENTS = [
  { name: "Client 1", logo: "/clients/client1.png" },
  { name: "Client 2", logo: "/clients/client2.png" },
  { name: "Client 3", logo: "/clients/client3.png" },
  { name: "Client 4", logo: "/clients/client4.png" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <img 
              src="/logo-large-white.png" 
              alt="DatasistemasWeb" 
              className="h-12 mb-4"
            />
            <p className="mb-6">
              Soluciones tecnológicas innovadoras para potenciar tu negocio en la era digital.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Síguenos en ${social.icon}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {FOOTER_LINKS.map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Recent clients */}
          <div>
            <h3 className="text-white font-semibold mb-4">Clientes recientes</h3>
            <div className="grid grid-cols-2 gap-4">
              {RECENT_CLIENTS.map((client, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 p-3 rounded-lg flex items-center justify-center"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-10 object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left md:flex md:justify-between">
          <p>© {new Date().getFullYear()} DatasistemasWeb. Todos los derechos reservados.</p>
          <p>Desarrollado con ❤️ en Colombia</p>
        </div>
      </div>
    </footer>
  );
}