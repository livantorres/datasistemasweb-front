export default function LogoCloud() {
    const logos = [
      { name: 'Universidad Nacional', logo: '🏛️' },
      { name: 'Instituto Tecnológico', logo: '🎓' },
      { name: 'Colegio Superior', logo: '📚' },
      { name: 'Academia de Ciencias', logo: '🔬' },
      { name: 'Centro de Estudios', logo: '📖' },
      { name: 'Escuela de Artes', logo: '🎨' },
    ]
  
    return (
      <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            {logos.map((item, index) => (
              <div
                key={item.name}
                className="col-span-1 flex justify-center"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex flex-col items-center group">
                  <div className="text-4xl mb-2 transform transition-transform duration-300 group-hover:scale-110">
                    {item.logo}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center font-medium">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  } 