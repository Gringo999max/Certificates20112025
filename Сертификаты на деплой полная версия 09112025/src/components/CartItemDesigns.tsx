import React from 'react'
import { Button } from './ui/button'
import { X, Plus, Minus, Moon, Star, Sparkles } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface CartItem {
  id: string
  title: string
  category: string
  image: string
  price: number
  quantity: number
  nights: number
}

interface CartItemDesignProps {
  item: CartItem
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

// Вариант 1: Премиум карточный дизайн
export function PremiumCardDesign({ item, onUpdateQuantity, onRemove }: CartItemDesignProps) {
  const formatNightsText = (nights: number) => {
    if (nights === 1) return '1 ночь'
    if (nights >= 2 && nights <= 4) return `${nights} ночи`
    return `${nights} ночей`
  }

  return (
    <div className="relative bg-gradient-to-br from-white via-gray-50/50 to-emerald-50/30 rounded-2xl p-6 shadow-lg border border-emerald-100/50 hover:shadow-xl transition-all duration-300">
      {/* Декоративные элементы */}
      <div className="absolute top-2 right-2 opacity-10">
        <Sparkles className="w-6 h-6 text-emerald-600" />
      </div>
      
      <div className="flex gap-6 items-center">
        {/* Изображение в премиум рамке */}
        <div className="relative">
          <div className="w-20 h-16 rounded-xl overflow-hidden shadow-md ring-2 ring-emerald-100">
            <ImageWithFallback
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
            <Star className="w-2.5 h-2.5 text-white fill-current" />
          </div>
        </div>
        
        {/* Основная информация */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
              {item.category}
            </span>
            <div className="flex items-center gap-1 text-emerald-600">
              <Moon className="w-3 h-3" />
              <span className="text-sm font-medium">{formatNightsText(item.nights)}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {item.category === '100 вариантов' ? 
              'Подарочный сертификат на отдых в любом из 100 необычных отелей' :
              'Подарочный сертификат включает 100+ комплексов, коттеджей и отелей высокого уровня на природе и в городе'
            }
          </p>
        </div>
        
        {/* Премиум контролы */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-1">
            <Button
              size="sm"
              variant="outline"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="w-9 h-9 p-0 flex items-center justify-center border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 rounded-lg"
            >
              <Minus className="w-5 h-5 text-emerald-600" />
            </Button>
            
            <div className="w-12 h-9 bg-emerald-50 border-2 border-emerald-200 rounded-lg flex flex-col items-center justify-center">
              <div className="text-sm font-bold text-gray-900">{item.quantity}</div>
            </div>
            
            <Button
              size="sm"
              variant="outline"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="w-9 h-9 p-0 flex items-center justify-center border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 rounded-lg"
            >
              <Plus className="w-5 h-5 text-emerald-600" />
            </Button>
          </div>
          
          <div className="text-xs text-emerald-600 text-center">
            {item.quantity === 1 ? 'сертификат' : 
             item.quantity >= 2 && item.quantity <= 4 ? 'сертификата' :
             'сертификатов'}
          </div>
          
          <div className="text-center">
            <div className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              {(item.price * item.nights * item.quantity).toLocaleString()} ₽
            </div>
          </div>
        </div>
        
        {/* Кнопка удаления */}
        <Button
          size="sm"
          variant="ghost"
          onClick={() => onRemove(item.id)}
          className="w-8 h-8 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 absolute top-2 right-2"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

// Вариант 2: Минималистичный дизайн
export function MinimalistDesign({ item, onUpdateQuantity, onRemove }: CartItemDesignProps) {
  const formatNightsText = (nights: number) => {
    if (nights === 1) return '1 ночь'
    if (nights >= 2 && nights <= 4) return `${nights} ночи`
    return `${nights} ночей`
  }

  return (
    <div className="py-6 px-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors">
      <div className="flex items-center gap-6">
        {/* Минималистичное изображение */}
        <div className="w-16 h-12 rounded-lg overflow-hidden border border-gray-200">
          <ImageWithFallback
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Информация */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h4 className="font-medium text-gray-900 text-base mb-1">{item.title}</h4>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span>{item.category}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Moon className="w-3 h-3" />
                  <span>{formatNightsText(item.nights)}</span>
                </div>
              </div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onRemove(item.id)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            {/* Улучшенные контролы */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 p-0 flex items-center justify-center border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 rounded-lg"
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </Button>
                
                <div className="w-10 h-8 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-900">
                    {item.quantity}
                  </span>
                </div>
                
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 p-0 flex items-center justify-center border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 rounded-lg"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </Button>
              </div>
              
              <span className="text-sm text-gray-500">
                {item.quantity === 1 ? 'сертификат' : 
                 item.quantity >= 2 && item.quantity <= 4 ? 'сертификата' :
                 'сертификатов'}
              </span>
            </div>
            
            {/* Цена */}
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-900">
                {(item.price * item.nights * item.quantity).toLocaleString()} ₽
              </div>
              <div className="text-xs text-gray-500">
                {item.price.toLocaleString()} ₽ × {item.nights} × {item.quantity}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Вариант 3: Компактный блочный дизайн
export function CompactBlockDesign({ item, onUpdateQuantity, onRemove }: CartItemDesignProps) {
  const formatNightsText = (nights: number) => {
    if (nights === 1) return '1 ночь'
    if (nights >= 2 && nights <= 4) return `${nights} ночи`
    return `${nights} ночей`
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-emerald-200 transition-colors">
      <div className="p-4">
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* Изображение */}
          <div className="col-span-2">
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Информация */}
          <div className="col-span-5">
            <h4 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">{item.title}</h4>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{item.category}</span>
              <div className="flex items-center gap-1 text-emerald-600">
                <Moon className="w-3 h-3" />
                <span className="text-xs">{formatNightsText(item.nights)}</span>
              </div>
            </div>
          </div>
          
          {/* Контролы количества */}
          <div className="col-span-3">
            <div className="flex items-center justify-center gap-1">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="w-7 h-7 p-0 flex items-center justify-center border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 rounded-lg"
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </Button>
              
              <div className="w-8 h-7 bg-gray-50 border-2 border-gray-200 rounded-lg flex flex-col items-center justify-center mx-1">
                <div className="text-sm font-semibold text-gray-900">{item.quantity}</div>
              </div>
              
              <Button
                size="sm"
                variant="outline"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="w-7 h-7 p-0 flex items-center justify-center border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 rounded-lg"
              >
                <Plus className="w-4 h-4 text-gray-600" />
              </Button>
            </div>
          </div>
          
          {/* Цена и удаление */}
          <div className="col-span-2 text-right">
            <div className="text-sm font-bold text-gray-900 mb-1">
              {(item.price * item.nights * item.quantity).toLocaleString()} ₽
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onRemove(item.id)}
              className="w-6 h-6 p-0 text-gray-400 hover:text-red-500"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Нижняя полоска с деталями */}
      <div className="bg-gray-50 px-4 py-2 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>
            {item.quantity === 1 ? '1 сертификат' : 
             item.quantity >= 2 && item.quantity <= 4 ? `${item.quantity} сертификата` :
             `${item.quantity} сертификатов`}
          </span>
          <span>{item.price.toLocaleString()} ₽ за ночь</span>
        </div>
      </div>
    </div>
  )
}