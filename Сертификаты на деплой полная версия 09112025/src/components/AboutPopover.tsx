import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Heart, Users, Award, MapPin, TrendingUp, Shield, Sparkles, Globe } from 'lucide-react'

// Ключевые цифры компании
const keyMetrics = [
  {
    value: '3+',
    label: 'Года на рынке',
    icon: TrendingUp,
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    value: '500+',
    label: 'Партнёров',
    icon: MapPin,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    value: '10K+',
    label: 'Довольных гостей',
    icon: Users,
    color: 'bg-purple-100 text-purple-600'
  }
]

// Преимущества работы с нами
const advantages = [
  {
    icon: Shield,
    title: 'Проверенные объекты',
    description: 'Каждый глэмпинг проходит отбор'
  },
  {
    icon: Heart,
    title: 'Забота о клиентах',
    description: 'Поддержка 24/7 до и во время отдыха'
  },
  {
    icon: Award,
    title: 'Гарантия качества',
    description: '98% гостей рекомендуют нас'
  }
]

interface AboutPopoverProps {
  isVisible: boolean
  onClose: () => void
  onNavigateToAbout?: () => void
}

export function AboutPopover({ isVisible, onClose, onNavigateToAbout }: AboutPopoverProps) {
  if (!isVisible) return null

  const handleNavigate = () => {
    onClose()
    if (onNavigateToAbout) {
      onNavigateToAbout()
    }
  }

  return (
    <div 
      className="absolute top-full left-0 mt-2 w-[420px] bg-white rounded-xl shadow-xl border border-emerald-100 p-6 z-50"
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      {/* Заголовок */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Globe className="w-5 h-5 text-emerald-600" />
          <h3 className="font-semibold text-emerald-900">
            О компании Глэмпинги.РФ
          </h3>
        </div>
        <p className="text-sm text-gray-600">
          Делаем путешествия по России доступными и незабываемыми
        </p>
      </div>

      {/* Миссия */}
      <div className="mb-5 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
        <div className="flex items-start gap-2 mb-3">
          <Heart className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-emerald-900 text-sm mb-1">
              Наша миссия
            </h4>
            <p className="text-xs text-emerald-700">
              Мы создаём сервис подарочных сертификатов, чтобы каждый мог подарить близким возможность открыть для себя красоту российской природы.
            </p>
          </div>
        </div>
      </div>

      {/* Ключевые цифры */}
      <div className="mb-5">
        <h4 className="font-medium text-gray-900 text-sm mb-3">
          📊 Цифры и факты:
        </h4>
        <div className="grid grid-cols-3 gap-3">
          {keyMetrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <div
                key={index}
                className="p-3 rounded-lg bg-gray-50 border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 cursor-pointer transition-all group text-center"
                onClick={handleNavigate}
              >
                <div className={`w-10 h-10 ${metric.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-xs text-gray-600 leading-tight">{metric.label}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Преимущества */}
      <div className="mb-5">
        <h4 className="font-medium text-gray-900 text-sm mb-3">
          ✨ Почему выбирают нас:
        </h4>
        <div className="space-y-3">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <div
                key={index}
                onClick={handleNavigate}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 cursor-pointer transition-colors group border border-gray-100"
              >
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-gray-900 text-sm mb-1">
                    {advantage.title}
                  </h5>
                  <p className="text-xs text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Команда */}
      <div className="mb-5 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start gap-2">
          <Users className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-blue-800 mb-2">
              <strong>Команда энтузиастов</strong>, которые сами путешествуют и знают каждый уголок России
            </p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white" />
              </div>
              <span className="text-xs text-blue-700">5 человек в команде</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA кнопки */}
      <div className="space-y-2">
        <Button 
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm py-2"
          onClick={handleNavigate}
        >
          Узнать больше о нас
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full text-sm border-emerald-200 text-emerald-700 hover:bg-emerald-50"
          onClick={handleNavigate}
        >
          Наша команда и СМИ о нас
        </Button>
      </div>

      {/* Индикатор доверия */}
      <div className="mt-4 pt-4 border-t border-emerald-100">
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <Award className="w-3 h-3 text-emerald-600" />
          <span>Надёжный партнёр для ваших путешествий</span>
        </div>
      </div>
    </div>
  )
}
