import { GlampingCard } from './GlampingCard'

const glampings = [
  {
    title: "Отдых в глэмпинге с питомцем",
    subtitle: "Подарок, который дарит радость вдвойне",
    description: "Дайте возможность отправиться в приключение вместе с лучшим четвероногим другом",
    priceFrom: "5 000 ₽",
    locations: "300+ локаций",
    features: "Pet-friendly",
    image: "https://images.unsplash.com/photo-1596383924639-fe5d552cc862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBwZXQlMjBnbGFtcGluZyUyMGNhYmlufGVufDF8fHx8MTc1NzQ5Nzc5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "Уникально"
  },
  {
    title: "Романтическая подборка",
    subtitle: "Уют и звезды для двоих",
    description: "Идеальный подарок для влюблённых. Подарите паре возможность провести время наедине",
    priceFrom: "9 800 ₽",
    locations: "200+ локаций",
    features: "Для влюбленных",
    image: "https://images.unsplash.com/photo-1746967114409-afd87e73055a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjByb21hbnRpYyUyMGdsYW1waW5nfGVufDF8fHx8MTc1NzQ5NzI4NXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Запоминающиеся выходные",
    subtitle: "Откройте свою историю приключений",
    description: "Подарок для тех, кто ищет впечатлений",
    priceFrom: "6 800 ₽",
    locations: "300+ локаций",
    features: "Яркие впечатления",
    image: "https://images.unsplash.com/photo-1593053272490-e0ed6d6a42c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMGRvbWUlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzU3NDk3Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Отдых всей семьей",
    subtitle: "Семейный уют на лоне природы",
    description: "Самый ценный подарок — время вместе. Подарите семье комфортный отдых",
    priceFrom: "13 100 ₽",
    locations: "180+ локаций",
    features: "Для всей семьи",
    image: "https://images.unsplash.com/photo-1731343887055-9660abaf93fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBnbGFtcGluZyUyMGNoaWxkcmVufGVufDF8fHx8MTc1NzQ5NzgwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Для небольших компаний",
    subtitle: "Идеальное место для друзей и близких",
    description: "Идеальный подарок для друзей.",
    priceFrom: "16 700 ₽",
    locations: "120+ локаций",
    features: "До 8 человек",
    image: "https://images.unsplash.com/photo-1708094018248-c110ceb1aa37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwZ3JvdXAlMjBnbGFtcGluZ3xlbnwxfHx8fDE3NTc0OTc4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "Популярно"
  },
  {
    title: "Полный релакс",
    subtitle: "Расслабление в каждой детали",
    description: "Подарок для души и тела.",
    priceFrom: "20 400 ₽",
    locations: "80+ локаций",
    features: "Баня + купель",
    image: "https://images.unsplash.com/photo-1743286159555-ea765c1bc5e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVuYSUyMGJhdGglMjBnbGFtcGluZyUyMHdlbGxuZXNzfGVufDF8fHx8MTc1NzQ5NzgwMHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
]

export function GlampingSection() {
  return (
    <section className="w-full px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            Выберите идеальный глэмпинг для отдыха
          </h2>
          <p className="text-gray-600/80 max-w-2xl mx-auto leading-relaxed">
            Мгновенное бронирование с актуальными ценами и проверенной доступностью. 
            Никаких звонков и ожиданий — всё онлайн!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {glampings.map((glamping, index) => (
            <GlampingCard key={index} {...glamping} />
          ))}
        </div>
      </div>
    </section>
  )
}