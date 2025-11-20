import React from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Gift, Award, Star, CheckCircle, Heart, Target, Users, TrendingUp, Sparkles, Shield, Zap } from 'lucide-react'

interface CorporateGiftReasonsSectionProps {
  onSelectGift?: () => void
}

// ============================================
// ВАРИАНТ 1: Фокус на Well-being и HR-метрики
// ============================================
export function CorporateGiftReasonsSectionVariant1({ onSelectGift }: CorporateGiftReasonsSectionProps) {
  const giftReasons = [
    {
      id: 1,
      title: 'Профилактика выгорания сотрудников',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: Shield,
      description: 'Отдых на природе — доказанный способ восстановления ментального здоровья. Снижение больничных на 23%',
      metric: '↓ 23% больничных'
    },
    {
      id: 2,
      title: 'Рост продуктивности команды',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: TrendingUp,
      description: 'Сотрудники возвращаются с новой энергией и фокусом. Рост производительности на 18%',
      metric: '↑ 18% эффективность'
    },
    {
      id: 3,
      title: 'Укрепление корпоративной культуры',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: Heart,
      description: 'Покажите заботу о личном благополучии. NPS сотрудников вырастет на 32 пункта',
      metric: 'NPS +32 пункта'
    },
    {
      id: 4,
      title: 'Привлечение талантов',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: Sparkles,
      description: 'Well-being программа — конкурентное преимущество при найме топ-специалистов',
      metric: 'Преимущество на рынке'
    }
  ]

  return (
    <section className="w-full px-6 py-16 bg-gradient-to-b from-emerald-50 via-teal-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">Измеримая польза для бизнеса</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            Инвестируйте в well-being — получайте реальные результаты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Отдых в глэмпингах — это не просто подарок, а HR-инструмент с измеримым ROI
          </p>
        </div>

        {/* Gift Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {giftReasons.map((reason) => {
            const IconComponent = reason.icon
            
            return (
              <Card 
                key={reason.id} 
                className="group relative overflow-hidden bg-white border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-600/40 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  
                  {/* Metric badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <p className="text-xs font-bold text-emerald-600">{reason.metric}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-gray-900 font-bold text-lg leading-tight mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-200"
                    onClick={onSelectGift}
                  >
                    Выбрать пакет
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

// ============================================
// ВАРИАНТ 2: Фокус на Персонализации и Кейсы
// ============================================
export function CorporateGiftReasonsSectionVariant2({ onSelectGift }: CorporateGiftReasonsSectionProps) {
  const giftReasons = [
    {
      id: 1,
      title: 'Новогодние подарки для команды',
      image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: Gift,
      description: 'Замените стандартные новогодние наборы на сертификаты с персональным оформлением',
      badge: 'Сезонное'
    },
    {
      id: 2,
      title: 'Годовщины и юбилеи сотрудников',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: Award,
      description: '5, 10, 15 лет в компании — значимые вехи заслуживают особого признания',
      badge: 'Популярное'
    },
    {
      id: 3,
      title: 'Премии за достижение KPI',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: Target,
      description: 'Награда за выполнение целей, которая мотивирует и восстанавливает силы',
      badge: 'Эффективно'
    },
    {
      id: 4,
      title: 'VIP-подарки для партнёров',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: Star,
      description: 'Престижный подарок для ключевых клиентов и партнеров с индивидуальным подходом',
      badge: 'Премиум'
    }
  ]

  return (
    <section className="w-full px-6 py-16 bg-gradient-to-b from-white via-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <Gift className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Для любого повода</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            Универсальный подарок для корпоративных событий
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            От новогодних праздников до годовщин — сертификаты подходят для любого случая
          </p>
        </div>

        {/* Gift Reasons - Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 px-4 md:px-0">
          {giftReasons.map((reason) => {
            const IconComponent = reason.icon
            
            return (
              <Card 
                key={reason.id} 
                className="group relative overflow-hidden bg-white border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex-shrink-0 w-[85vw] md:w-auto snap-center"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {reason.badge}
                    </div>
                  </div>
                  
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
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ============================================
// ВАРИАНТ 3: Минималистичный с акцентом на ROI
// ============================================
export function CorporateGiftReasonsSectionVariant3({ onSelectGift }: CorporateGiftReasonsSectionProps) {
  const giftReasons = [
    {
      id: 1,
      title: 'Снижение текучести кадров',
      icon: Users,
      description: 'Забота о well-being повышает удержание сотрудников на 34%',
      metric: '-34%',
      metricLabel: 'Текучесть',
      color: 'emerald'
    },
    {
      id: 2,
      title: 'Экономия на больничных',
      icon: Shield,
      description: 'Профилактика выгорания сокращает количество больничных на 23%',
      metric: '270k₽',
      metricLabel: 'Экономия/год',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Рост вовлечённости',
      icon: Zap,
      description: 'Сотрудники возвращаются с новой энергией и мотивацией к работе',
      metric: '+18%',
      metricLabel: 'Продуктивность',
      color: 'teal'
    },
    {
      id: 4,
      title: 'Улучшение имиджа работодателя',
      icon: Star,
      description: 'Well-being программа повышает привлекательность компании для талантов',
      metric: '+72',
      metricLabel: 'NPS',
      color: 'amber'
    }
  ]

  return (
    <section className="w-full px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            Подарок с измеримой выгодой для бизнеса
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Инвестиция в отдых сотрудников оку��ается через снижение издержек и рост эффективности
          </p>
        </div>

        {/* Gift Reasons Grid - Minimalist cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {giftReasons.map((reason) => {
            const IconComponent = reason.icon
            const colorClasses = {
              emerald: {
                bg: 'bg-emerald-50',
                icon: 'text-emerald-600',
                metric: 'text-emerald-600',
                border: 'border-emerald-200'
              },
              blue: {
                bg: 'bg-blue-50',
                icon: 'text-blue-600',
                metric: 'text-blue-600',
                border: 'border-blue-200'
              },
              teal: {
                bg: 'bg-teal-50',
                icon: 'text-teal-600',
                metric: 'text-teal-600',
                border: 'border-teal-200'
              },
              amber: {
                bg: 'bg-amber-50',
                icon: 'text-amber-600',
                metric: 'text-amber-600',
                border: 'border-amber-200'
              }
            }[reason.color]
            
            return (
              <div 
                key={reason.id} 
                className="group text-center"
              >
                {/* Icon circle */}
                <div className={`w-20 h-20 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-10 h-10 ${colorClasses.icon}`} />
                </div>

                {/* Metric */}
                <div className="mb-4">
                  <div className={`text-4xl font-bold ${colorClasses.metric} mb-1`}>
                    {reason.metric}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    {reason.metricLabel}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button 
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            onClick={onSelectGift}
          >
            Рассчитать ROI для вашей компании
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Получите персональный расчет окупаемости well-being программы
          </p>
        </div>
      </div>
    </section>
  )
}
