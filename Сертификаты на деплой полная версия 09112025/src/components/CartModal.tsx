import React from 'react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog'
import { X, Plus, Minus, ShoppingBag, Moon } from 'lucide-react'
import { useCart } from './CartContext'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { CheckoutModal } from './CheckoutModal'

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, updateQuantity, updateNights, removeFromCart, getTotalPrice } = useCart()

  const formatNightsText = (nights: number) => {
    if (nights === 1) return '1 ночь'
    if (nights >= 2 && nights <= 4) return `${nights} ночи`
    return `${nights} ночей`
  }

  if (items.length === 0) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md p-0 bg-white border-0 shadow-xl">
          <DialogTitle className="sr-only">Корзина покупок</DialogTitle>
          <DialogDescription className="sr-only">
            Ваша корзина пуста. Добавьте товары для оформления заказа.
          </DialogDescription>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Корзина</h2>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onClose}
                className="p-1 h-auto w-auto hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Корзина пуста</h3>
              <p className="text-gray-500 text-sm">Добавьте сертификаты для оформления заказа</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg p-0 bg-white border-0 shadow-xl max-h-[90vh] overflow-hidden">
        <DialogTitle className="sr-only">Корзина покупок - {items.length} товаров</DialogTitle>
        <DialogDescription className="sr-only">
          Управляйте товарами в корзине: изменяйте количество, удаляйте товары или переходите к оформлению заказа.
        </DialogDescription>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">
            Корзина ({items.length})
          </h2>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="p-1 h-auto w-auto hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 max-h-96">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={`${item.id}-${item.nights}`} className="border border-gray-100 rounded-lg p-4">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 mb-2">{item.category}</p>
                    
                    {/* Информация о ночах */}
                    <div className="flex items-center gap-1 mb-3">
                      <Moon className="w-3 h-3 text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-600">
                        {formatNightsText(item.nights)}
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {item.category === '100 вариантов' ? 
                        'Подарочный сертификат на отдых в любом из 100 необычных отелей' :
                        'Подарочный сертификат включает 100+ комплексов, коттеджей и отелей высокого уровня на природе и в городе'
                      }
                    </p>
                  </div>
                  
                  {/* Контролы количества и цена */}
                  <div className="flex items-center gap-2 ml-4">
                    <div className="flex items-center gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 p-0 flex items-center justify-center border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 rounded-lg"
                        aria-label={`Уменьшить количество ${item.title}`}
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </Button>
                      
                      <div className="w-8 h-7 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center mx-1">
                        <span className="text-xs font-semibold text-gray-900">
                          {item.quantity}
                        </span>
                      </div>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 p-0 flex items-center justify-center border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-200 rounded-lg"
                        aria-label={`Увеличить количество ${item.title}`}
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </Button>
                      
                      <span className="text-xs text-gray-600 ml-1">
                        {item.quantity === 1 ? 'сертификат' : 
                         item.quantity >= 2 && item.quantity <= 4 ? 'сертификата' :
                         'сертификатов'}
                      </span>
                    </div>
                    
                    {/* Цена */}
                    <div className="text-right min-w-[80px]">
                      <div className="font-semibold text-gray-900 text-sm">
                        {(item.price * item.nights * item.quantity).toLocaleString()} ₽
                      </div>
                    </div>
                    
                    {/* Кнопка удаления */}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromCart(item.id)}
                      className="w-6 h-6 p-0 text-gray-400 hover:text-red-500"
                      aria-label={`Удалить ${item.title} из корзины`}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-medium text-gray-900">Итого:</span>
            <span className="text-xl font-semibold text-emerald-600">
              {getTotalPrice().toLocaleString()} ₽
            </span>
          </div>
          
          <CheckoutModal
            trigger={
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-base">
                Оформить заказ
              </Button>
            }
            onClose={onClose}
          />          
          
          <Button 
            variant="ghost" 
            className="w-full mt-3 text-gray-600 hover:text-gray-800" 
            onClick={onClose}
          >
            Продолжить покупки
          </Button>
          
          {getTotalPrice() >= 15000 && (
            <div className="mt-4 text-center">
              <p className="text-sm text-emerald-600 font-medium">
                🚚 Бесплатная доставка
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}