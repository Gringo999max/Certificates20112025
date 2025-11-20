import React from 'react'
import { Button } from './ui/button'
import { Plus, Minus, X } from 'lucide-react'
import { useIsMobile } from './ui/use-mobile'
import { ProductImageCarousel } from './ProductImageCarousel'

interface CartItem {
  id: string
  title: string
  images: (string | React.ReactNode)[] // Массив изображений: может быть строки URL или React компоненты
  nights: number
  quantity: number
  price: number
  category?: string
  description?: string // Опциональное кастомное описание
}

interface CartItemCardProps {
  item: CartItem
  onQuantityChange: (itemId: string, newQuantity: number, nights: number) => void
  onDelete: () => void
  formatPrice: (price: number) => string
  getItemKey: (id: string, nights: number) => string
  isDeleting?: boolean
}

function getItemDescription(item: CartItem): string {
  // Если есть кастомное описание, используем его
  if (item.description) {
    return item.description
  }
  
  // Иначе определяем по категории
  if (item.category === '100 вариантов') {
    return 'Подарочный сертификат включает 500+ коттеджей, глэмпингов и отелей высокого уровня на природе'
  }
  return 'Подарочный сертификат включает 100+ комплексов, коттеджей и отелей высокого уровня на природе и в городе'
}

function getNightsText(nights: number): string {
  if (nights === 1) return 'Одна ночь'
  if (nights === 2) return 'Две ночи (+6 700 ₽)'
  if (nights === 3) return 'Три ночи (+13 400 ₽)'
  return `${nights} ночей`
}

function getQuantityText(quantity: number): string {
  if (quantity === 1) return 'сертификат'
  if (quantity >= 2 && quantity <= 4) return 'сертификата'
  return 'сертификатов'
}

/**
 * CartItemCard - Адаптивная карточка товара для формы оформления заказа
 * 
 * На мобильных устройствах (<768px) отображается в карточном стиле (Вариант 3):
 * - Верхняя часть: изображение + информация о товаре
 * - Нижняя часть: контролы количества + цена
 * - Экономит ~44% места по сравнению с десктопной версией
 * 
 * На десктопе (≥768px) отображается в горизонтальном стиле:
 * - Все элементы в одну строку
 * - Сохранена оригинальная структура для лучшего использования пространства
 */
export function CartItemCard({
  item,
  onQuantityChange,
  onDelete,
  formatPrice,
  getItemKey,
  isDeleting = false
}: CartItemCardProps) {
  const isMobile = useIsMobile()

  const handleDecrease = () => {
    if (item.quantity === 1) {
      // Если количество 1, вызываем onDelete
      onDelete()
    } else {
      // Если больше 1, просто уменьшаем
      onQuantityChange(item.id, item.quantity - 1, item.nights)
    }
  }

  const handleIncrease = () => {
    onQuantityChange(item.id, item.quantity + 1, item.nights)
  }

  // Мобильная версия - Вариант 3 (карточный стиль)
  if (isMobile) {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
        <div className="flex gap-3 p-3">
          <ProductImageCarousel images={item.images} alt={item.title} isMobile={isMobile} />
          <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm text-gray-900 line-clamp-2 flex-1">{item.title}</h3>
              <Button
                size="sm"
                variant="ghost"
                onClick={onDelete}
                className="w-6 h-6 p-0 text-gray-400 hover:text-red-500 flex-shrink-0"
              >
                <X className="w-3.5 h-3.5" />
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              🌙 Количество ночей: {getNightsText(item.nights)}
            </p>
            <p className="text-xs text-gray-600 line-clamp-2">
              {getItemDescription(item)}
            </p>
          </div>
        </div>
        <div className="bg-gray-50 px-3 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleDecrease}
              className="w-8 h-8 p-0 rounded bg-white"
            >
              <Minus className="w-3 h-3" />
            </Button>
            <span className="text-sm min-w-[20px] text-center">{item.quantity}</span>
            <Button
              size="sm"
              variant="outline"
              onClick={handleIncrease}
              className="w-8 h-8 p-0 rounded bg-white"
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
          <div className="text-sm text-gray-900">
            {formatPrice(item.price * item.nights * item.quantity)} ₽
          </div>
        </div>
      </div>
    )
  }

  // Десктопная версия - текущий горизонтальный стиль
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {/* Галерея изображений товара */}
      <ProductImageCarousel images={item.images} alt={item.title} isMobile={isMobile} />
      
      {/* Основная информация */}
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 text-base mb-1">{item.title}</h4>
        <div className="text-sm text-gray-600 mb-1">
          <span>🌙 Количество ночей: </span>
          <span className="font-medium">
            {getNightsText(item.nights)}
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">
          {getItemDescription(item)}
        </p>
      </div>
      
      {/* Контролы количества */}
      <div className="flex items-center gap-2 ml-4">
        {/* Контролы количества */}
        <div className="flex items-center gap-1">
          <Button
            size="sm"
            variant="outline"
            onClick={handleDecrease}
            className="w-5 h-5 p-0 rounded border-gray-300 flex items-center justify-center"
          >
            <Minus className="w-2.5 h-2.5" />
          </Button>
          <span className="text-xs font-medium min-w-[15px] text-center">
            {item.quantity}
          </span>
          <span className="text-xs text-gray-600">
            {getQuantityText(item.quantity)}
          </span>
          <Button
            size="sm"
            variant="outline"
            onClick={handleIncrease}
            className="w-5 h-5 p-0 rounded border-gray-300 flex items-center justify-center"
          >
            <Plus className="w-2.5 h-2.5" />
          </Button>
        </div>
        
        {/* Цена */}
        <div className="text-right min-w-[80px]">
          <div className="font-semibold text-gray-900">
            {formatPrice(item.price * item.nights * item.quantity)} ₽
          </div>
        </div>
        
        {/* Кнопка удаления */}
        <Button
          size="sm"
          variant="ghost"
          onClick={onDelete}
          className="w-6 h-6 p-0 text-gray-400 hover:text-red-500"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

export default CartItemCard
