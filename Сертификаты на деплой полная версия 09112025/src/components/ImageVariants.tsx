import { ImageWithFallback } from './figma/ImageWithFallback'

const imageVariants = [
  {
    id: 1,
    title: "Вариант 1: Пара улыбается на фоне глэмпинга в лесу",
    description: "couple smiling glamping forest evening",
    url: "https://images.unsplash.com/photo-1720526246574-1708bb31a2d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzbWlsaW5nJTIwZ2xhbXBpbmclMjBmb3Jlc3QlMjBldmVuaW5nfGVufDF8fHx8MTc1NzU4MjE4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Вариант 2: Счастливая пара на природе с освещением",
    description: "happy couple outdoor camping lights",
    url: "https://images.unsplash.com/photo-1631722235421-2f4d55468fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMG91dGRvb3IlMjBjYW1waW5nJTIwbGlnaHRzfGVufDF8fHx8MTc1NzU4MjE4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Вариант 3: Романтическая пара в глэмпинге на закате",
    description: "romantic glamping couple forest sunset",
    url: "https://images.unsplash.com/photo-1558715585-9b706788d173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGdsYW1waW5nJTIwY291cGxlJTIwZm9yZXN0JTIwc3Vuc2V0fGVufDF8fHx8MTc1NzU4MjE4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Вариант 4: Молодая пара на природе с теплым освещением",
    description: "young couple nature camping warm lights",
    url: "https://images.unsplash.com/photo-1720526246574-1708bb31a2d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGNvdXBsZSUyMG5hdHVyZSUyMGNhbXBpbmclMjB3YXJtJTIwbGlnaHRzfGVufDF8fHx8MTc1NzU4MjE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    title: "Вариант 5: Пара смеется на природе вечером",
    description: "couple laughing outdoor accommodation evening",
    url: "https://images.unsplash.com/photo-1650595808040-e58faadbc6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsYXVnaGluZyUyMG91dGRvb3IlMjBhY2NvbW1vZGF0aW9uJTIwZXZlbmluZ3xlbnwxfHx8fDE3NTc1ODIxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
]

export function ImageVariants() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Выберите лучшее изображение для hero-секции</h2>
        <p className="text-gray-600 text-center mb-12">Все варианты передают эмоции пары, природу и атмосферу глэмпинга</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageVariants.map((variant) => (
            <div key={variant.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-[4/3] relative">
                <ImageWithFallback
                  src={variant.url}
                  alt={variant.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{variant.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{variant.description}</p>
                <button 
                  onClick={() => {
                    console.log(`Выбран вариант ${variant.id}: ${variant.url}`)
                    alert(`Выбран вариант ${variant.id}! URL скопирован в консоль.`)
                  }}
                  className="w-full bg-[#007a55] hover:bg-[#006644] text-white py-2 px-4 rounded-lg transition-colors"
                >
                  Выбрать этот вариант
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            После выбора варианта, сообщите номер, и я заменю изображение в hero-секции
          </p>
          <p className="text-sm text-gray-500">
            Также можно кликнуть на кнопку "Выбрать" - URL будет выведен в консоль браузера
          </p>
        </div>
      </div>
    </section>
  )
}