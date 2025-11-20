import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Building, TrendingUp, TrendingDown, Heart, Battery, Zap, Star, Shield } from 'lucide-react'

// Измеримые бизнес-результаты
const wellbeingMetrics = [
  {
    metric: '↓ 23%',
    title: 'Снижение больничных',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    metric: '↑ 18%',
    title: 'Рост продуктивности',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    metric: '+32',
    title: 'NPS сотрудников',
    color: 'bg-rose-100 text-rose-600'
  }
]

const corporatePackages = [
  {
    id: 'routine-escape',
    title: 'Побег от рутины',
    subtitle: 'Короткая пауза',
    description: 'Дать мозгу отдохнуть от экранов и дедлайнов',
    priceFrom: '10 000 ₽',
    icon: Battery,
    color: 'bg-emerald-100 text-emerald-600',
    result: 'Вернется с улыбкой в понедельник'
  },
  {
    id: 'energy-restore',
    title: 'Восстановление энергии',
    subtitle: 'Полноценная перезагрузка',
    description: 'Восстановить силы для следующих месяцев работы',
    priceFrom: '20 000 ₽',
    icon: Zap,
    color: 'bg-teal-100 text-teal-600',
    badge: 'Популярно',
    result: 'Вернется мотивированным на квартал'
  },
  {
    id: 'mindset-shift',
    title: 'Трансформация mindset',
    subtitle: 'Смена перспективы',
    description: 'Выйти из операционки и переосмыслить приоритеты',
    priceFrom: '30 000 ₽',
    icon: Star,
    color: 'bg-slate-100 text-slate-900',
    result: 'Вернется с новыми идеями и энергией'
  }
]

const advantages = [
  'Скидки от 15% при заказе от 10 сертификатов',
  'HR Dashboard с детальной аналитикой',
  'Брендирование сертификатов вашей компанией',
  'Персональный менеджер и сопровождение'
]

interface CorporatePopoverProps {
  isVisible: boolean
  onClose: () => void
}

export function CorporatePopover({ isVisible, onClose }: CorporatePopoverProps) {
  if (!isVisible) return null

  return (
    <div 
      className="absolute top-full left-0 mt-2 w-[480px] bg-white rounded-xl shadow-xl border border-emerald-100 p-6 z-50"
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Building className="w-5 h-5 text-emerald-600" />
          <h3 className="font-semibold text-emerald-900">
            Корпоративные подарки
          </h3>
        </div>
        <p className="text-sm text-gray-600">
          Well-being решения для бизнеса
        </p>
      </div>

      {/* Измеримые результаты */}
      <div className="mb-5 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
        <h4 className="font-medium text-gray-900 text-sm mb-3">
          📊 Измеримые бизнес-результаты:
        </h4>
        <div className="grid grid-cols-3 gap-3">
          {wellbeingMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`${metric.color} rounded-lg p-2 mb-1`}>
                <div className="font-bold text-lg">{metric.metric}</div>
              </div>
              <div className="text-xs text-gray-600">{metric.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Пакеты */}
      <div className="space-y-3 mb-5">
        <h4 className="font-medium text-gray-900 text-sm">
          🎁 Выберите решение:
        </h4>
        {corporatePackages.map((pkg) => {
          const IconComponent = pkg.icon
          return (
            <div
              key={pkg.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 cursor-pointer transition-colors group border border-gray-200 hover:border-emerald-300"
            >
              <div className={`p-2 rounded-lg ${pkg.color} group-hover:scale-110 transition-transform`}>
                <IconComponent className="w-4 h-4" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-gray-900 text-sm">
                    {pkg.title}
                  </h4>
                  {pkg.badge && (
                    <Badge variant="secondary" className="text-xs px-2 py-0 bg-orange-100 text-orange-700">
                      {pkg.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-500 mb-2">
                  {pkg.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {pkg.result}
                  </span>
                  <span className="text-sm font-semibold text-emerald-600">
                    от {pkg.priceFrom}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mb-4 p-3 bg-emerald-50 rounded-lg">
        <h4 className="font-medium text-emerald-900 text-sm mb-2">
          ✨ Преимущества для бизнеса:
        </h4>
        <ul className="space-y-1">
          {advantages.map((advantage, index) => (
            <li key={index} className="text-xs text-emerald-700 flex items-start gap-1">
              <span className="text-emerald-500 mt-0.5">•</span>
              {advantage}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        <Button 
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm py-2"
        >
          Подобрать решение
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full text-sm border-emerald-200 text-emerald-700 hover:bg-emerald-50"
        >
          Получить КП
        </Button>
      </div>

      <div className="mt-4 pt-4 border-t border-emerald-100">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>📞 +7 (495) 123-45-67</span>
          <span>📧 b2b@глэмпинги.рф</span>
        </div>
      </div>
    </div>
  )
}