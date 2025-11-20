import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Mail, CreditCard, Truck, Package, Clock, Shield, ExternalLink, Building } from 'lucide-react'

const deliveryOptions = [
  {
    id: 'instant',
    title: 'Электронный сертификат',
    subtitle: 'Мгновенная доставка на email',
    description: 'Получите за 1 минуту после оплаты',
    price: 'Бесплатно',
    time: 'Мгновенно',
    icon: Mail,
    color: 'bg-green-100 text-green-600',
    badge: 'Популярно'
  },
  {
    id: 'pickup',
    title: 'Самовывоз из офиса',
    subtitle: 'в центре Москвы',
    description: 'ЖК «Династия», бесплатная парковка',
    price: 'Бесплатно',
    time: 'Готов через час',
    icon: Building,
    color: 'bg-emerald-100 text-emerald-600',
    badge: 'Бесплатно'
  },
  {
    id: 'courier',
    title: 'Курьерская доставка',
    subtitle: 'по Москве',
    description: 'Стандартная 1-2 дня • Быстрая 2 часа',
    price: 'От 900 ₽',
    time: 'От 2 часов',
    icon: Truck,
    color: 'bg-orange-100 text-orange-600',
    badge: '2 часа'
  },
  {
    id: 'post',
    title: 'Пункт выдачи',
    subtitle: 'по всей России',
    description: 'Яндекс Маркет, Пятёрочка, Перекрёсток',
    price: '300 ₽',
    time: 'От 3-х дней',
    details: '1000 городов России',
    icon: Package,
    color: 'bg-purple-100 text-purple-600',
    badge: 'По России'
  }
]

const paymentMethods = [
  { name: 'Банковские карты', icon: '💳' },
  { name: 'СБП', icon: '🏦' },
  { name: 'Яндекс Пэй', icon: '🟡' },
  { name: 'Apple Pay', icon: '🍎' },
  { name: 'Google Pay', icon: '🔵' }
]

interface DeliveryPopoverProps {
  isVisible: boolean
  onClose: () => void
  onNavigateToDelivery?: () => void
}

export function DeliveryPopover({ isVisible, onClose, onNavigateToDelivery }: DeliveryPopoverProps) {
  if (!isVisible) return null

  const handleNavigateClick = () => {
    onClose()
    if (onNavigateToDelivery) {
      onNavigateToDelivery()
    }
  }

  return (
    <div 
      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-emerald-100 p-6 z-50"
      onMouseEnter={() => {}}
      onMouseLeave={onClose}
    >
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Truck className="w-5 h-5 text-emerald-600" />
          <h3 className="font-semibold text-emerald-900">
            Доставка и оплата
          </h3>
        </div>
        <p className="text-sm text-gray-600">
          Удобные способы получения и оплаты
        </p>
      </div>

      <div className="space-y-3 mb-5">
        {deliveryOptions.map((option) => {
          const IconComponent = option.icon
          return (
            <div
              key={option.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-emerald-50 cursor-pointer transition-colors group"
              onClick={handleNavigateClick}
            >
              <div className={`p-2 rounded-lg ${option.color} group-hover:scale-110 transition-transform`}>
                <IconComponent className="w-4 h-4" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-gray-900 text-sm">
                    {option.title}
                  </h4>
                  {option.badge && (
                    <Badge variant="secondary" className="text-xs px-2 py-0">
                      {option.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-500 mb-1">
                  {option.subtitle}
                </p>
                <p className="text-xs text-gray-400 mb-2">
                  {option.description}
                </p>
                {option.details && (
                  <p className="text-xs text-gray-400 mb-2">
                    {option.details}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-emerald-600">
                    {option.price}
                  </div>
                  <div className="text-xs text-gray-400">
                    {option.time}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-gray-900 text-sm mb-2 flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-emerald-600" />
          Способы оплаты
        </h4>
        <div className="flex flex-wrap gap-2">
          {paymentMethods.map((method, index) => (
            <div key={index} className="flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-md">
              <span className="text-sm">{method.icon}</span>
              <span className="text-xs text-gray-600">{method.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-emerald-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Shield className="w-3 h-3" />
            <span>Безопасная оплата</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>Возврат 14 дней</span>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-emerald-600 border-emerald-200 hover:bg-emerald-50"
          onClick={handleNavigateClick}
        >
          <ExternalLink className="w-3 h-3 mr-2" />
          Подробнее о доставке
        </Button>
      </div>
    </div>
  )
}