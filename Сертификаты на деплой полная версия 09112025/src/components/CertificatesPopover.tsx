import { useState } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Heart, Users, Sparkles, Baby, Coffee, Waves, Gift, HelpCircle, Clock, Mail, Award } from 'lucide-react'

const certificateTypes = [
  {
    id: 'unusual',
    title: 'Необычные выходные',
    subtitle: 'Откройте свою историю приключений',
    description: 'Много глэмпингов в живописных и красивых местах',
    priceFrom: '6 700 ₽',
    variants: '100 вариантов',
    icon: Sparkles,
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    id: 'escape',
    title: 'Побег из города',
    subtitle: 'Комфортный отдых на природе',
    description: 'Домики и коттеджи для комфортного отдыха на природе',
    priceFrom: '9 900 ₽',
    variants: '400 вариантов',
    icon: Coffee,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    id: 'romantic',
    title: 'Романтичный глэмпинг',
    subtitle: 'Уют и звезды для двоих',
    description: 'Уютные домики для влюбленных',
    priceFrom: '12 500 ₽',
    variants: '100 вариантов',
    icon: Heart,
    color: 'bg-red-100 text-red-600'
  },
  {
    id: 'family',
    title: 'Семейный уикенд',
    subtitle: 'Семейный уют на лоне природы',
    description: 'Отели, усадьбы и коттеджи для отдыха с детьми',
    priceFrom: '13 700 ₽',
    variants: '200 вариантов',
    icon: Baby,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'treehouse',
    title: 'Дом на дереве',
    subtitle: 'Экзотические места',
    description: 'Экзотические места для особенного отдыха',
    priceFrom: '15 200 ₽',
    variants: '100 вариантов',
    icon: Sparkles,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 'spa',
    title: 'Отдых во SPA-сение',
    subtitle: 'Расслабление в каждой детали',
    description: 'Загородные отели с бассейнами и спа',
    priceFrom: '18 900 ₽',
    variants: '60 вариантов',
    icon: Waves,
    color: 'bg-teal-100 text-teal-600'
  },
  {
    id: 'certificate',
    title: 'Универсальный сертификат',
    subtitle: 'Получатель выберет сам',
    description: 'Сертификат на любую сумму - получатель выберет любой глэмпинг',
    priceFrom: '1 000 ₽',
    variants: '500+ локаций',
    icon: Gift,
    color: 'bg-indigo-100 text-indigo-600',
    badge: 'Универсально'
  },
  {
    id: 'help',
    title: 'Сложно выбрать?',
    subtitle: 'Поможем вам разобраться',
    description: 'WhatsApp, TG или позвоните по телефону',
    priceFrom: 'Бесплатно',
    variants: '24/7 поддержка',
    icon: HelpCircle,
    color: 'bg-emerald-100 text-emerald-600'
  }
]

interface CertificatesPopoverProps {
  isVisible: boolean
  onClose: () => void
}

export function CertificatesPopover({ isVisible, onClose }: CertificatesPopoverProps) {
  if (!isVisible) return null

  const scrollToCertificates = () => {
    onClose()
    // Scroll to the certificates section
    setTimeout(() => {
      const certificatesSection = document.querySelector('[data-section="certificates"]')
      if (certificatesSection) {
        certificatesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <div 
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-xl shadow-xl border border-emerald-100 z-50"
      onMouseEnter={() => {}} // Предотвращаем закрытие при наведении на попап
      onMouseLeave={onClose}
    >
      <div className="p-5">
        {/* Горизонтальная сетка из 4 колонок */}
        <div className="grid grid-cols-4 gap-4">
          {certificateTypes.map((cert) => {
            const IconComponent = cert.icon
            return (
              <button
                key={cert.id}
                onClick={scrollToCertificates}
                className="text-left p-4 rounded-lg hover:bg-emerald-50 cursor-pointer transition-all duration-200 group border border-gray-200 hover:border-emerald-300 min-h-[140px] flex flex-col hover:shadow-md"
              >
                {/* Иконка */}
                <div className="mb-3 flex-shrink-0">
                  <div className={`w-8 h-8 ${cert.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>
                
                {/* Заголовок с бейджем */}
                <div className="mb-3 flex-shrink-0">
                  <h4 className="text-xs font-medium text-gray-900 mb-2 leading-tight group-hover:text-emerald-700 transition-colors">
                    {cert.title}
                  </h4>
                  {cert.badge && (
                    <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-700">
                      {cert.badge}
                    </Badge>
                  )}
                </div>
                
                {/* Описание */}
                <p className="text-[10px] text-gray-500 mb-3 leading-relaxed flex-grow">
                  {cert.description}
                </p>
                
                {/* Цена и варианты */}
                <div className="mt-auto flex-shrink-0">
                  <div className="text-xs font-semibold text-emerald-600 mb-1">
                    от {cert.priceFrom}
                  </div>
                  <div className="text-[10px] text-gray-400">
                    {cert.variants}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Нижняя информация */}
        <div className="mt-5 pt-4 border-t border-emerald-100">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <Gift className="w-3 h-3 text-white" />
              </div>
              <span>Действует 24 месяца</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <Award className="w-3 h-3 text-white" />
              </div>
              <span>98% довольных гостей</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-3 h-3 text-white" />
              </div>
              <span>500+ проверенных объектов</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <Clock className="w-3 h-3 text-white" />
              </div>
              <span>Доставка от 2-х часов</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <Mail className="w-3 h-3 text-white" />
              </div>
              <span>Или письмом на почту</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}