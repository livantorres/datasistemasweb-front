import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { id: 1, value: 95, label: "Clientes satisfechos", suffix: "%" },
  { id: 2, value: 10, label: "Años de experiencia", suffix: "+" },
  { id: 3, value: 500, label: "Proyectos completados", suffix: "+" },
  { id: 4, value: 24, label: "Soporte garantizado", suffix: "/7" }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-primary dark:bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // ms
    const increment = target / (duration / 16); // 60fps

    const timer = setInterval(() => {
      setCount((prev) => {
        const newCount = prev + increment;
        if (newCount >= target) {
          clearInterval(timer);
          return target;
        }
        return newCount;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <h3 className="text-4xl md:text-5xl font-bold">
      {Math.floor(count)}
      {suffix}
    </h3>
  );
}