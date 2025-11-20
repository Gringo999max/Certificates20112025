import React, { useState } from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Check, Sparkles, Gift } from 'lucide-react'
import { PackagingModal } from './PackagingModal'
import deliveryOptionsImage from 'figma:asset/14331dc383f21dc848a4e193d04722b0f65eb0f2.png'

// Импорт изображения фирменного конверта для физической доставки
import envelopeForestDome from 'figma:asset/a46a95fc611af71a5067207e0b3e7d423353d1a7.png'

const deliveryOptions = [
  {
    id: 'electronic',
    title: 'Электронный сертификат',
    features: [
      'Отправка на электронную почту',
      '14 вариантов готовых шаблонов',
      'Разработка кастомизированного электронного сертификата в вашем фирменном стиле'
    ],
    image: deliveryOptionsImage,
    imageStyle: 'object-left',
    badge: 'Мгновенно',
    badgeColor: 'bg-blue-100 text-blue-700',
    popular: false
  },
  {
    id: 'physical',
    title: 'Конверт или коробка ручной работы',
    features: [
      'Отправка в любой город России',
      '14 вариантов упаковки',
      'Разработка индивидуального дизайна'
    ],
    image: envelopeForestDome,
    imageStyle: 'object-cover',
    badge: 'Премиум',
    badgeColor: 'bg-amber-100 text-amber-700',
    popular: true,
    ctaText: 'Смотреть варианты упаковки',
    ctaVariant: 'outline'
  }
]

interface DeliveryOptionsSectionProps {
  onViewPackaging?: () => void
}

export function DeliveryOptionsSection({ onViewPackaging }: DeliveryOptionsSectionProps) {
  const [isPackagingModalOpen, setIsPackagingModalOpen] = useState(false)

  return (
    <section className="w-full px-6 py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Варианты доставки сертификатов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Выберите удобный формат получения: мгновенная электронная доставка или красивая упаковка ручной работы
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {deliveryOptions.map((option) => (
            <Card 
              key={option.id} 
              className={`relative overflow-hidden bg-white border-2 transition-all duration-300 hover:shadow-xl ${
                option.popular ? 'border-amber-200 shadow-lg' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Popular Badge */}
              {option.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-amber-500 text-white shadow-md">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Популярный выбор
                  </Badge>
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={option.image}
                  alt={option.title}
                  className={`w-full h-full object-cover ${option.imageStyle}`}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Badge on Image */}
                <div className="absolute bottom-4 left-4">
                  <Badge className={option.badgeColor}>
                    {option.badge}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {option.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="w-5 h-5 text-emerald-500" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-gray-100">
                  {option.ctaText ? (
                    <Button 
                      variant={option.ctaVariant as any}
                      className={`w-full ${
                        option.ctaVariant === 'outline' 
                          ? 'border-amber-600 text-amber-600 hover:bg-amber-50' 
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                      onClick={() => setIsPackagingModalOpen(true)}
                    >
                      <Gift className="w-4 h-4 mr-2" />
                      {option.ctaText}
                    </Button>
                  ) : (
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Заказать электронный сертификат
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Не можете выбрать?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Наши консультанты помогут подобрать оптимальный вариант доставки, 
              учитывая ваши пожелания и сроки получения подарка
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Получить консультацию
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Часто задаваемые вопросы
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Packaging Modal */}
      <PackagingModal 
        isOpen={isPackagingModalOpen}
        onClose={() => setIsPackagingModalOpen(false)}
      />
    </section>
  )
}