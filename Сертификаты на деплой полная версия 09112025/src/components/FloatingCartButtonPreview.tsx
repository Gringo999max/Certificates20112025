import React from 'react'
import { ShoppingCart, X, Moon } from 'lucide-react'

/**
 * ПРЕВЬЮ НОВОГО ДИЗАЙНА FloatingCartButton
 * 
 * Изменения:
 * 1. ✅ Кнопка поднята выше (bottom-20 вместо bottom-6)
 * 2. ✅ Зелёный цвет более спокойный (#007a55 вместо emerald-600)
 * 3. ✅ Крестик для удаления встроен в кнопку (правый верхний угол)
 * 4. ✅ Убраны фиолетовая и красная кнопки
 * 5. ✅ При клике на основную область - открытие чекаута
 * 6. ✅ При клике на крестик - очистка корзины
 */

interface FloatingCartButtonPreviewProps {
  totalCertificates?: number
  totalNights?: number
  totalPrice?: number
}

export function FloatingCartButtonPreview({ 
  totalCertificates = 3,
  totalNights = 6,
  totalPrice = 45000
}: FloatingCartButtonPreviewProps) {
  
  const handleMainButtonClick = () => {
    console.log('Открытие страницы оформления заказа')
  }

  const handleClearCart = (e: React.MouseEvent) => {
    e.stopPropagation() // Предотвращаем открытие чекаута
    console.log('Очистка корзины')
  }

  return (
    <div className="fixed bottom-20 right-6 z-40">
      {/* Основная кнопка корзины с встроенным крестиком */}
      <button
        onClick={handleMainButtonClick}
        className="relative bg-[#007a55] hover:bg-[#006644] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-3 min-w-[60px] group"
        aria-label={`Корзина: ${totalCertificates} товаров на сумму ${totalPrice.toLocaleString()} рублей`}
      >
        {/* Крестик для удаления - правый верхний угол */}
        <div
          onClick={handleClearCart}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleClearCart(e as any)
            }
          }}
          className="absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 z-10 cursor-pointer"
          aria-label="Очистить корзину"
          title="Очистить корзину"
        >
          <X className="w-3.5 h-3.5" />
        </div>

        {/* Иконка корзины с badge */}
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          {totalCertificates > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalCertificates > 99 ? '99+' : totalCertificates}
            </span>
          )}
        </div>
        
        {/* Расширенная информация при hover */}
        <div className="hidden group-hover:flex flex-col items-start text-left transition-all duration-200">
          <div className="flex items-center gap-2">
            <span className="font-medium">{totalCertificates}</span>
            <span className="text-sm opacity-90">
              {totalCertificates === 1 ? 'сертификат' : totalCertificates < 5 ? 'сертификата' : 'сертификатов'}
            </span>
          </div>
          {totalNights > 0 && (
            <div className="flex items-center gap-1 text-xs opacity-80">
              <Moon className="w-3 h-3" />
              <span>{totalNights} ночей отдыха</span>
            </div>
          )}
          <div className="text-sm font-medium">
            {totalPrice.toLocaleString()} ₽
          </div>
        </div>
      </button>
    </div>
  )
}

// Компонент для демонстрации разных состояний
export function FloatingCartButtonPreviewDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Превью нового дизайна FloatingCartButton
          </h1>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">
                ✨ Что изменилось:
              </h2>
              <ul className="space-y-2 text-blue-800">
                <li>✅ <strong>Позиция выше:</strong> Кнопка поднята с bottom-6 на bottom-20</li>
                <li>✅ <strong>Спокойный зелёный:</strong> #007a55 вместо яркого emerald-600</li>
                <li>✅ <strong>Встроенный крестик:</strong> Красный крестик в правом верхнем углу для удаления</li>
                <li>✅ <strong>Убраны лишние кнопки:</strong> Нет фиолетовой (тест) и красной (удаление) кнопок</li>
                <li>✅ <strong>Прямой переход:</strong> Клик на кнопку → сразу страница оформления</li>
                <li>✅ <strong>Раздельные действия:</strong> Клик на крестик → очистка корзины (stopPropagation)</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-amber-900 mb-2">
                🎯 Логика работы:
              </h2>
              <ul className="space-y-2 text-amber-800">
                <li>• <strong>Клик на основную кнопку:</strong> Открывает CheckoutModal</li>
                <li>• <strong>Клик на крестик:</strong> Вызывает clearCart() с подтверждением</li>
                <li>• <strong>Hover:</strong> Показывает детали (кол-во, ночи, сумма)</li>
              </ul>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Посмотрите справа внизу экрана →
              </h3>
              <p className="text-gray-600">
                Кнопка корзины отображается в правом нижнем углу. 
                Наведите курсор, чтобы увидеть детали заказа.
              </p>
            </div>
          </div>
        </div>

        {/* Визуальное сравнение */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              ❌ Старый дизайн
            </h3>
            <div className="bg-gray-100 rounded-lg p-4 space-y-3">
              <div className="flex flex-col items-end gap-2">
                <div className="bg-purple-500 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center text-xs">
                  🧪
                </div>
                <div className="bg-red-500 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center text-xs">
                  🗑️
                </div>
                <div className="bg-emerald-600 text-white rounded-full p-3 flex items-center gap-2">
                  <div className="relative">
                    🛒
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      3
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                3 отдельные кнопки, яркий зелёный
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              ✅ Новый дизайн
            </h3>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex justify-end">
                <div className="relative bg-[#007a55] text-white rounded-full p-3 flex items-center gap-2">
                  <button className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    ✕
                  </button>
                  <div className="relative">
                    🛒
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      3
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center mt-3">
                1 кнопка, спокойный зелёный, крестик сверху
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Рабочая кнопка справа внизу */}
      <FloatingCartButtonPreview 
        totalCertificates={3}
        totalNights={6}
        totalPrice={45000}
      />
    </div>
  )
}

export default FloatingCartButtonPreview
