import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Gift, Search, MapPin, CheckCircle2, Clock, Sparkles } from 'lucide-react'

// Краткие шаги процесса
const steps = [
  {
    number: 1,
    title: 'Выберите сертификат',
    description: 'Выберите дизайн и номинал',
    icon: Gift,
    color: 'bg-emerald-100 text-emerald-600',
    time: '2 минуты'
  },
  {
    number: 2,
    title: 'Получатель выбирает',
    description: 'Из 500+ глэмпингов по России',
    icon: Search,
    color: 'bg-blue-100 text-blue-600',
    time: '24 месяца'
  },
  {
    number: 3,
    title: 'Бронь подтверждена',
    description: 'Детали приходят мгновенно',
    icon: MapPin,
    color: 'bg-purple-100 text-purple-600',
    time: 'Сразу'
  }
]

// Ключевые преимущества процесса
const benefits = [
  {
    icon: Clock,
    text: 'Получение за 2 минуты'
  },
  {
    icon: Sparkles,
    text: '500+ локаций'
  },
  {
    icon: CheckCircle2,
    text: 'Срок действия 24 месяца'
  }
]

interface HowItWorksPopoverProps {
  isVisible: boolean
  onClose: () => void
  onNavigateToHowItWorks?: () => void
}

export function HowItWorksPopover({ isVisible, onClose, onNavigateToHowItWorks }: HowItWorksPopoverProps) {
  if (!isVisible) return null

  const handleNavigate = () => {
    onClose()
    if (onNavigateToHowItWorks) {
      onNavigateToHowItWorks()
    }
  }

  return (
    <div 
      className="absolute top-full left-0 mt-2 w-[400px] bg-white rounded-xl shadow-xl border border-emerald-100 p-6 z-50"
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      {/* Заголовок */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Gift className="w-5 h-5 text-emerald-600" />
          <h3 className="font-semibold text-emerald-900">
            Как это работает?
          </h3>
        </div>
        <p className="text-sm text-gray-600">
          Простой процесс в 3 шага
        </p>
      </div>

      {/* Шаги */}
      <div className="space-y-3 mb-5">
        {steps.map((step, index) => {
          const IconComponent = step.icon
          return (
            <div
              key={step.number}
              onClick={handleNavigate}
              className="relative flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 cursor-pointer transition-colors group border border-gray-200 hover:border-emerald-300"
            >
              {/* Линия соединения */}
              {index < steps.length - 1 && (
                <div className="absolute left-[26px] top-[52px] w-0.5 h-6 bg-gray-200 group-hover:bg-emerald-300 transition-colors" />
              )}
              
              {/* Иконка шага */}
              <div className="relative z-10">
                <div className={`w-10 h-10 ${step.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-5 h-5" />
                </div>
              </div>
              
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-emerald-600">Шаг {step.number}</span>
                  <Badge variant="secondary" className="text-xs px-2 py-0 bg-gray-100 text-gray-600">
                    {step.time}
                  </Badge>
                </div>
                <h4 className="font-medium text-gray-900 text-sm mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Преимущества */}
      <div className="mb-5 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
        <h4 className="font-medium text-emerald-900 text-sm mb-3">
          ✨ Ключевые преимущества:
        </h4>
        <div className="space-y-2">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs text-emerald-700">{benefit.text}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Дополнительная информация */}
      <div className="mb-5 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-blue-800">
            <strong>Никаких сложностей!</strong> Процесс занимает всего несколько минут. Получатель сам выберет удобные даты и место.
          </p>
        </div>
      </div>

      {/* CTA кнопки */}
      <div className="space-y-2">
        <Button 
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm py-2"
          onClick={handleNavigate}
        >
          Подробнее о процессе
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full text-sm border-emerald-200 text-emerald-700 hover:bg-emerald-50"
          onClick={() => {
            onClose()
            // Скролл к секции выбора сертификатов на главной
            setTimeout(() => {
              const certificatesSection = document.querySelector('[data-section="certificates"]')
              if (certificatesSection) {
                certificatesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }, 100)
          }}
        >
          Выбрать сертификат
        </Button>
      </div>

      {/* Индикатор */}
      <div className="mt-4 pt-4 border-t border-emerald-100">
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <Sparkles className="w-3 h-3 text-emerald-600" />
          <span>Простой и понятный процесс для каждого</span>
        </div>
      </div>
    </div>
  )
}
