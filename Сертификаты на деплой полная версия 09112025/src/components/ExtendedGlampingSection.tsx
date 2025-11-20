import image_d844dc6f93bb986e09666a59a4c3b742996440b7 from 'figma:asset/d844dc6f93bb986e09666a59a4c3b742996440b7.png';
import { GlampingCard } from './GlampingCard'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Gift, HelpCircle, Phone, MessageCircle, ArrowRight } from 'lucide-react'

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

export function ExtendedGlampingSection({ onNavigateToPetFriendly }: { onNavigateToPetFriendly?: () => void }) {
  return (
    <section id="certificates-selection-section" className="w-full px-6 py-8 bg-white" data-section="certificates">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            Выберите подарочный сертификат
          </h2>
          <p className="text-gray-600/80 max-w-3xl mx-auto leading-relaxed">
            Мгновенное бронирование с актуальными ценами и проверенной доступностью. Никаких звонков и ожиданий — всё онлайн!
Выберите идеальный подарок из нашей полной коллекции. От романтических выходных до приключений с питомцами — у нас есть сертификат для каждого случая.
          </p>
        </div>
        
        {/* First row - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {glampings.slice(0, 4).map((glamping, index) => (
            <GlampingCard 
              key={index} 
              {...glamping} 
              onClick={index === 0 ? onNavigateToPetFriendly : undefined}
            />
          ))}
        </div>

        {/* Second row - 2 cards + 2 special cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Existing cards 5-6 */}
          {glampings.slice(4, 6).map((glamping, index) => (
            <GlampingCard key={index + 4} {...glamping} />
          ))}

          {/* Special Card 7 - Gift Certificate */}
          <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-indigo-200">
            <div className="relative">
              <ImageWithFallback
                src={image_d844dc6f93bb986e09666a59a4c3b742996440b7}
                alt="Подарочный сертификат"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Универсально
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                500+ локаций
              </div>
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                <Gift className="w-4 h-4 inline mr-1" />
                Любой номинал
              </div>
            </div>
            
            <div className="p-4 group-hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-semibold text-base mb-1 leading-relaxed tracking-tight">Подарочный сертификат на сумму</h3>
              <p className="text-gray-500/80 text-xs mb-2 leading-relaxed">Получатель выберет любой глэмпинг</p>
              <p className="text-gray-600/75 text-xs mb-3 line-clamp-2 leading-relaxed">
                Когда сложно определиться с выбором. Подарите универсальный сертификат.
              </p>
              
              <div className="flex items-end justify-between h-8">
                <div>
                  <span className="text-gray-500/70 text-xs tracking-wide">от </span>
                  <span className="text-lg font-extrabold text-indigo-600 tracking-tight">1 000 ₽</span>
                </div>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition-colors duration-300">
                  <ArrowRight className="w-3 h-3 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              {/* Убираем кнопки "В корзину" и "Заказ в один клик" с главной страницы */}
            </div>
          </div>

          {/* Special Card 8 - Help Card */}
          <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-emerald-200">
            <div className="relative">
              <ImageWithFallback
                src="figma:asset/a47e0f990f7039e42b912e2b0858a17ef84b9842.png"
                alt="Винтажный дисковый телефон"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                24/7 поддержка
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <MessageCircle className="w-3 h-3" />
              </div>
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                <HelpCircle className="w-4 h-4 inline mr-1" />
                Бесплатно
              </div>
            </div>
            
            <div className="p-4 group-hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-semibold text-base mb-1 leading-relaxed tracking-tight">Сложно выбрать ил непонятно?</h3>
              <p className="text-gray-500/80 text-xs mb-2 leading-relaxed">Поможем вам разобраться WhatsApp, TG или позвоните по телефону.</p>

              
              <div className="flex items-end justify-between h-8">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500/80">
                    <Phone className="w-3 h-3" />
                    <span className="tracking-wide">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500/80">
                    <MessageCircle className="w-3 h-3" />
                    <span className="tracking-wide">WhatsApp чат</span>
                  </div>
                </div>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 group-hover:bg-emerald-600 transition-colors duration-300">
                  <ArrowRight className="w-3 h-3 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default ExtendedGlampingSection