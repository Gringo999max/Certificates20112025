import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Star, MessageCircle, Heart, Award, TrendingUp } from 'lucide-react'

// Топ последних отзывов для превью
const topReviews = [
  {
    id: 1,
    name: 'Индира О.',
    avatar: 'https://images.unsplash.com/photo-1664312572933-0563f14484a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdCUyMGhhcHB5fGVufDF8fHx8MTc2MDg1NTExOHww&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Именинник был в неописуемом восторге! Лучший подарок!',
    rating: 5,
    date: '15 октября 2025'
  },
  {
    id: 2,
    name: 'Виктория К.',
    avatar: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYwODU1MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'За упаковку отдельный респект ❤️❤️',
    rating: 5,
    date: '12 октября 2025'
  },
  {
    id: 3,
    name: 'Оксана Ш.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4MDI0OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    text: 'Это чудесное погружение в природу России ✨',
    rating: 5,
    date: '8 октября 2025'
  }
]

// Категории отзывов
const categories = [
  {
    id: 'gift',
    name: 'О подарке',
    icon: Heart,
    color: 'bg-pink-100 text-pink-600',
    count: '120+'
  },
  {
    id: 'experience',
    name: 'Об отдыхе',
    icon: Star,
    color: 'bg-yellow-100 text-yellow-600',
    count: '200+'
  },
  {
    id: 'service',
    name: 'О сервисе',
    icon: Award,
    color: 'bg-blue-100 text-blue-600',
    count: '80+'
  }
]

interface ReviewsPopoverProps {
  isVisible: boolean
  onClose: () => void
  onNavigateToReviews?: () => void
}

export function ReviewsPopover({ isVisible, onClose, onNavigateToReviews }: ReviewsPopoverProps) {
  if (!isVisible) return null

  const handleNavigate = () => {
    onClose()
    if (onNavigateToReviews) {
      onNavigateToReviews()
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
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          <h3 className="font-semibold text-emerald-900">
            Отзывы наших клиентов
          </h3>
        </div>
        <p className="text-sm text-gray-600">
          Более 400 довольных клиентов делятся впечатлениями
        </p>
      </div>

      {/* Статистика */}
      <div className="mb-5 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-3xl font-bold text-gray-900">4.9</span>
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            </div>
            <div className="text-xs text-gray-600">Средняя оценка</div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-600">400+</div>
            <div className="text-xs text-gray-600">Отзывов</div>
          </div>

          <div className="text-right">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span className="text-lg font-bold text-emerald-600">98%</span>
            </div>
            <div className="text-xs text-gray-600">Рекомендуют</div>
          </div>
        </div>
      </div>

      {/* Категории отзывов */}
      <div className="mb-5">
        <h4 className="font-medium text-gray-900 text-sm mb-3">
          📝 Категории отзывов:
        </h4>
        <div className="grid grid-cols-3 gap-2">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <button
                key={category.id}
                onClick={handleNavigate}
                className="p-2 rounded-lg hover:bg-emerald-50 cursor-pointer transition-colors group text-center border border-gray-200 hover:border-emerald-300"
              >
                <div className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-1 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="text-xs font-medium text-gray-900 mb-0.5">{category.name}</div>
                <div className="text-xs text-gray-500">{category.count}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Последние отзывы */}
      <div className="mb-5">
        <h4 className="font-medium text-gray-900 text-sm mb-3 flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          Последние отзывы:
        </h4>
        <div className="space-y-3">
          {topReviews.map((review) => (
            <div
              key={review.id}
              onClick={handleNavigate}
              className="p-3 rounded-lg hover:bg-emerald-50 cursor-pointer transition-colors group border border-gray-100"
            >
              <div className="flex items-start gap-2 mb-2">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{review.name}</span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-1">
                    {review.text}
                  </p>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA кнопки */}
      <div className="space-y-2">
        <Button 
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm py-2"
          onClick={handleNavigate}
        >
          Читать все отзывы
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full text-sm border-emerald-200 text-emerald-700 hover:bg-emerald-50"
          onClick={handleNavigate}
        >
          Оставить свой отзыв
        </Button>
      </div>

      {/* Индикатор доверия */}
      <div className="mt-4 pt-4 border-t border-emerald-100">
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <Award className="w-3 h-3 text-emerald-600" />
          <span>Все отзывы проверены модерацией</span>
        </div>
      </div>
    </div>
  )
}
