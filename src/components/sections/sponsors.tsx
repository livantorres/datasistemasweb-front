import { motion } from 'framer-motion';

const SPONSORS = [
  { id: 1, name: 'Sponsor 1', logo: '/sponsors/sponsor1.png' },
  { id: 2, name: 'Sponsor 2', logo: '/sponsors/sponsor2.png' },
  { id: 3, name: 'Sponsor 3', logo: '/sponsors/sponsor3.png' },
  { id: 4, name: 'Sponsor 4', logo: '/sponsors/sponsor4.png' },
  { id: 5, name: 'Sponsor 5', logo: '/sponsors/sponsor5.png' },
];

export default function SponsorsSection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
        >
          Nuestros Aliados
        </motion.h2>

        <div className="relative overflow-hidden py-8">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10"></div>

          <motion.div
            animate={{
              x: ['0%', '-100%'],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }
            }}
            className="flex space-x-16 items-center"
          >
            {[...SPONSORS, ...SPONSORS].map((sponsor, index) => (
              <div key={`${sponsor.id}-${index}`} className="flex-shrink-0">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}