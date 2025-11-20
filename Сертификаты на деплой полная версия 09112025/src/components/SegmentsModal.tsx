import { useState } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog'
import { Badge } from './ui/badge'
import { Heart, Users, Calendar, Baby, PawPrint, Waves, Gift, HelpCircle } from 'lucide-react'

const segments = [
  {
    id: 'pets',
    title: 'Отдых в глэмпинге с питомцем',
    subtitle: 'Подарок, который дарит радость вдвойне',
    description: 'Дайте возможность отправиться в приключение вместе с лучшим четвероногим другом. Получатель сможет мгновенно забронировать отдых, не беспокоясь о размещении питомца.',
    priceFrom: '4 500 ₽ / ночь',
    locations: '300+ локаций',
    features: 'Pet-friendly',
    icon: PawPrint,
    badge: 'Уникально',
    color: 'bg-amber-100 text-amber-600'
  },
  {
    id: 'romantic',
    title: 'Романтическая подборка',
    subtitle: 'Уют и звезды для двоих',
    description: 'Идеальный подарок для влюблённых. Подарите паре возможность провести время наедине в самых атмосферных глэмпингах России. Получатель сможет забронировать свой отдых мгновенно.',
    priceFrom: '8 900 ₽ / ночь',
    locations: '200+ локаций',
    features: 'Для влюбленных',
    icon: Heart,
    color: 'bg-rose-100 text-rose-600'
  },
  {
    id: 'weekend',
    title: 'Запоминающиеся выходные',
    subtitle: 'Откройте свою историю приключений',
    description: 'Подарок для тех, кто ищет впечатлений. Дайте близкому человеку возможность сбежать от рутины и получить новые эмоции. Получатель сможет выбрать и забронировать отдых в один клик.',
    priceFrom: '6 200 ₽ / ночь',
    locations: '300+ локаций',
    features: 'Яркие впечатления',
    icon: Calendar,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'family',
    title: 'Отдых всей семьей',
    subtitle: 'Семейный уют на лоне природы',
    description: 'Самый ценный подарок — время вместе. Подарите семье комфортный отдых на природе, где каждый найдет занятие по душе. Получатель сможет легко выбрать даты и мгновенно забронировать.',
    priceFrom: '11 900 ₽ / ночь',
    locations: '180+ локаций',
    features: 'Для всей семьи',
    icon: Baby,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 'friends',
    title: 'Для небольших компаний',
    subtitle: 'Идеальное место для друзей и близких',
    description: 'Идеальный подарок для друзей. Преподнесите возможность собраться вместе, чтобы отдохнуть от суеты и создать общие воспоминания. Получатель сможет выбрать подходящий глэмпинг и сразу же его забронировать.',
    priceFrom: '15 200 ₽ / ночь',
    locations: '120+ локаций',
    features: 'До 8 человек',
    icon: Users,
    badge: 'Популярно',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'relax',
    title: 'Полный релакс',
    subtitle: 'Расслабление в каждой детали',
    description: 'Подарок для души и тела. Преподнесите возможность насладиться традиционным русским паром и теплом горячего чана прямо посреди природы. Получатель сможет легко забронировать идеальную дату.',
    priceFrom: '18 500 ₽ / ночь',
    locations: '80+ локаций',
    features: 'Баня + купель',
    icon: Waves,
    color: 'bg-teal-100 text-teal-600'
  }
]

export function SegmentsModal() {
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline"
          className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 tracking-wide"
        >
          Все сегменты отдыха
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-2 leading-tight tracking-tight">
            Выберите идеальный тип отдыха
          </DialogTitle>
          <DialogDescription className="text-gray-600/80 text-center leading-relaxed">
            Мгновенное бронирование с актуальными ценами и проверенной доступностью
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {segments.map((segment) => {
            const IconComponent = segment.icon
            return (
              <div
                key={segment.id}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedSegment === segment.id 
                    ? 'border-emerald-500 bg-emerald-50' 
                    : 'border-gray-200 hover:border-emerald-300'
                }`}
                onClick={() => setSelectedSegment(segment.id)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-3 rounded-full ${segment.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <h3 className="font-semibold text-gray-900 leading-relaxed tracking-tight">
                        {segment.title}
                      </h3>
                      {segment.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {segment.badge}
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600/80 font-medium leading-relaxed">
                      {segment.subtitle}
                    </p>
                    
                    <p className="text-xs text-gray-500/80 line-clamp-3 leading-relaxed">
                      {segment.description}
                    </p>
                  </div>
                  
                  <div className="w-full space-y-2 pt-2 border-t border-gray-100">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500/70 tracking-wide">От</span>
                      <span className="font-extrabold text-emerald-600 tracking-tight">
                        {segment.priceFrom}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs text-gray-500/80">
                      <span className="tracking-wide">{segment.locations}</span>
                      <span className="tracking-wide">{segment.features}</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white tracking-wide"
                  >
                    Выбрать
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Additional Options */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Custom Amount Block */}
          <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 rounded-full flex-shrink-0">
                <Gift className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Подарочный сертификат на сумму
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Получатель выберет любой глэмпинг
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Когда сложно определиться с выбором. Подарите универсальный сертификат с гибким номиналом. Получатель сможет использовать его для оплаты любого глэмпинга из нашей базы.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-indigo-600">от 1 000 ₽</span>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                    Универсально
                  </Badge>
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  Выбрать сумму
                </Button>
              </div>
            </div>
          </div>

          {/* Help Block */}
          <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-100 rounded-full flex-shrink-0">
                <HelpCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Сложно выбрать или непонятно?
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Поможем вам разобраться
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Задайте нам вопрос в WhatsApp или позвоните по телефону. Мы поможем подобрать идеальный подарок и расскажем о всех преимуществах отдыха в глэмпингах.
                </p>
                <div className="flex gap-3 mb-4">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>📞</span>
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span>💬</span>
                    <span>WhatsApp</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
                  Помогите разобраться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}