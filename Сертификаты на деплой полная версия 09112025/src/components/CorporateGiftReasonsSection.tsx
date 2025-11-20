import React from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Gift, Award, Star, CheckCircle } from 'lucide-react'
import exampleImage from 'figma:asset/e94def04d7024fb336979259b45d67eaa629b698.png'

const giftReasons = [
  {
    id: 1,
    title: 'Отметить значимые даты для компании',
    image: 'https://images.unsplash.com/photo-1608870229932-cec85e0390ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBjZWxlYnJhdGlvbiUyMGdpZnQlMjBidXNpbmVzcyUyMG1pbGVzdG9uZXxlbnwxfHx8fDE3NTgwMTg1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Gift,
    description: 'Юбилеи компании, достижение важных показателей, открытие новых офисов'
  },
  {
    id: 2,
    title: 'Поздравить с юбилеем работы',
    image: 'https://images.unsplash.com/photo-1710854897963-d45e8e26f7fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3JrZXIlMjBhbm5pdmVyc2FyeSUyMGNlbGVicmF0aW9uJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1ODAxODU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Award,
    description: '5, 10, 15 лет работы в компании — значимые вехи карьеры сотрудника'
  },
  {
    id: 3,
    title: 'Показать уровень сервиса и укрепить лояльность',
    image: 'https://images.unsplash.com/photo-1677129661598-98356ff05627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHJlc3RhdXJhbnQlMjBtZWV0aW5nJTIwc2VydmljZSUyMGV4Y2VsbGVuY2UlMjB0ZWFtfGVufDF8fHx8MTc1ODAxODU2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Star,
    description: 'Подарки клиентам и партнерам для укрепления деловых отношений'
  },
  {
    id: 4,
    title: 'Отпразднать завершение проекта',
    image: 'https://images.unsplash.com/photo-1667864811044-b0bcd9ed4a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwY29tcGxldGlvbiUyMGNlbGVicmF0aW9uJTIwZ2lmdCUyMGJveCUyMHJpYmJvbnxlbnwxfHx8fDE3NTgwMTg1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: CheckCircle,
    description: 'Успешное завершение важных проектов заслуживает особого признания'
  }
]

interface CorporateGiftReasonsSectionProps {
  onSelectGift?: () => void
}

export function CorporateGiftReasonsSection({ onSelectGift }: CorporateGiftReasonsSectionProps) {
  return (
    <section className="w-full px-6 py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            Подарок, который оценят и запомнят надолго
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Почему лучше подарить сертификат на отдых в отели?
          </p>
        </div>

        {/* Gift Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {giftReasons.map((reason) => {
            const IconComponent = reason.icon
            
            return (
              <Card 
                key={reason.id} 
                className="group relative overflow-hidden bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {reason.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white transition-colors duration-200"
                    onClick={onSelectGift}
                  >
                    Выбрать подарок
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}