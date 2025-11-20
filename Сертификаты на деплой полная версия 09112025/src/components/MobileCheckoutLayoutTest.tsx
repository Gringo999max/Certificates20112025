import React, { useState } from 'react'
import { Button } from './ui/button'
import { Plus, Minus, X, ArrowLeft } from 'lucide-react'
import petFriendlyImage from 'figma:asset/cf91bbdd44cef2cea48334b86d2f5786cb049591.png'

/**
 * MobileCheckoutLayoutTest - Тестовая страница для сравнения различных вариантов 
 * компоновки карточек товаров в форме оформления заказа на мобильных устройствах
 * 
 * Варианты:
 * 1. Горизонтальный компактный - информация в 2 колонки
 * 2. Вертикальный минималистичный - без описания, компактные контролы
 * 3. Карточный стиль - как в интернет-магазинах
 * 4. Список с badge - очень компактный с badge для количества
 */

interface CartItem {
  id: string
  title: string
  image: string
  nights: number
  quantity: number
  price: number
  category: string
}

const SAMPLE_ITEM: CartItem = {
  id: 'pet-friendly',
  title: 'Глэмпинг: отдых в глэмпинге с питомцем',
  image: petFriendlyImage,
  nights: 2,
  quantity: 1,
  price: 24900,
  category: '100 вариантов'
}

const SAMPLE_DESCRIPTION = 'Подарочный сертификат включает 500+ коттеджей, глэмпингов и отелей высокого уровня на природе'

function formatPrice(price: number): string {
  return price.toLocaleString('ru-RU')
}

interface MobileCheckoutLayoutTestProps {
  onBack?: () => void
}

export default function MobileCheckoutLayoutTest({ onBack }: MobileCheckoutLayoutTestProps) {
  const [quantities, setQuantities] = useState({
    variant1: 1,
    variant2: 1,
    variant3: 1,
    variant4: 1,
    variant5: 1
  })

  const updateQuantity = (variant: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [variant]: Math.max(1, prev[variant as keyof typeof prev] + delta)
    }))
  }

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      window.history.back()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto space-y-8">
        {/* Кнопка назад */}
        <div className="pt-4">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </Button>
        </div>

        {/* Заголовок */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl text-gray-900">Тест компоновки карточек</h1>
          <p className="text-sm text-gray-600">Сравните варианты и выберите лучший</p>
        </div>

        {/* ВАРИАНТ 1: Горизонтальный компактный (2 колонки) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-gray-900">Вариант 1: Горизонтальный компактный</h2>
            <span className="text-xs text-gray-500">2 колонки</span>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200">
            <div className="space-y-2.5">
              <div className="flex gap-3">
                {/* Левая колонка: Изображение + Название */}
                <div className="flex-1 flex gap-2 min-w-0">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={SAMPLE_ITEM.image} alt={SAMPLE_ITEM.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm text-gray-900 mb-0.5 line-clamp-2">{SAMPLE_ITEM.title}</h3>
                  </div>
                </div>
                
                {/* Правая колонка: Цена + Контролы */}
                <div className="flex flex-col items-end justify-between gap-2">
                  <div className="text-right">
                    <div className="text-sm text-gray-900">{formatPrice(SAMPLE_ITEM.price * SAMPLE_ITEM.nights * quantities.variant1)} ₽</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity('variant1', -1)}
                      disabled={quantities.variant1 <= 1}
                      className="w-6 h-6 p-0 rounded"
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="text-xs min-w-[16px] text-center">{quantities.variant1}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity('variant1', 1)}
                      className="w-6 h-6 p-0 rounded"
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Дополнительная информация */}
              <div className="space-y-1 pl-14">
                <p className="text-xs text-gray-500">🌙 Количество ночей: 2 ночи (+6 700 ₽)</p>
                <p className="text-xs text-gray-600 line-clamp-2">{SAMPLE_DESCRIPTION}</p>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500 pl-3">
            ✅ Компактно<br/>
            ✅ Вся информация видна<br/>
            ⚠️ Требует прокрутки для длинного описания
          </div>
        </div>

        {/* ВАРИАНТ 2: Вертикальный минималистичный */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-gray-900">Вариант 2: Вертикальный минималистичный</h2>
            <span className="text-xs text-gray-500">с описанием</span>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200">
            <div className="flex items-start gap-3">
              <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                <img src={SAMPLE_ITEM.image} alt={SAMPLE_ITEM.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="text-sm text-gray-900 mb-1 line-clamp-1">{SAMPLE_ITEM.title}</h3>
                  <p className="text-xs text-gray-500 mb-1">🌙 Количество ночей: 2 ночи</p>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-1">{SAMPLE_DESCRIPTION}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900">{formatPrice(SAMPLE_ITEM.price * SAMPLE_ITEM.nights * quantities.variant2)} ₽</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity('variant2', -1)}
                      disabled={quantities.variant2 <= 1}
                      className="w-7 h-7 p-0 rounded"
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="text-xs min-w-[40px] text-center">{quantities.variant2} шт</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity('variant2', 1)}
                      className="w-7 h-7 p-0 rounded"
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                  <Button size="sm" variant="ghost" className="w-7 h-7 p-0 text-gray-400">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500 pl-3">
            ✅ Компактно<br/>
            ✅ Вся информация есть<br/>
            ⚠️ Много текста в правой части
          </div>
        </div>

        {/* ВАРИАНТ 3: Карточный стиль интернет-магазина */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-gray-900">Вариант 3: Карточный стиль</h2>
            <span className="text-xs text-gray-500">как магазин</span>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <div className="flex gap-3 p-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img src={SAMPLE_ITEM.image} alt={SAMPLE_ITEM.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm text-gray-900 line-clamp-2 flex-1">{SAMPLE_ITEM.title}</h3>
                  <Button size="sm" variant="ghost" className="w-6 h-6 p-0 text-gray-400 flex-shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500">🌙 Количество ночей: 2 ночи (+6 700 ₽)</p>
                <p className="text-xs text-gray-600 line-clamp-2">{SAMPLE_DESCRIPTION}</p>
              </div>
            </div>
            <div className="bg-gray-50 px-3 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateQuantity('variant3', -1)}
                  disabled={quantities.variant3 <= 1}
                  className="w-8 h-8 p-0 rounded bg-white"
                >
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="text-sm min-w-[20px] text-center">{quantities.variant3}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateQuantity('variant3', 1)}
                  className="w-8 h-8 p-0 rounded bg-white"
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
              <div className="text-sm text-gray-900">
                {formatPrice(SAMPLE_ITEM.price * SAMPLE_ITEM.nights * quantities.variant3)} ₽
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500 pl-3">
            ✅ Привычный стиль<br/>
            ✅ Четкое разделение<br/>
            ✅ Вся информация есть
          </div>
        </div>

        {/* ВАРИАНТ 4: Супер-компактный с badge */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-gray-900">Вариант 4: Супер-компактный</h2>
            <span className="text-xs text-gray-500">badge стиль</span>
          </div>
          <div className="bg-white rounded-xl p-2.5 shadow-sm border border-gray-200">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <img src={SAMPLE_ITEM.image} alt={SAMPLE_ITEM.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-[#007a55] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {quantities.variant4}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-gray-900 line-clamp-1 mb-0.5">{SAMPLE_ITEM.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900">{formatPrice(SAMPLE_ITEM.price * SAMPLE_ITEM.nights * quantities.variant4)} ₽</span>
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity('variant4', 1)}
                    className="w-6 h-6 p-0 rounded"
                  >
                    <Plus className="w-2.5 h-2.5" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity('variant4', -1)}
                    disabled={quantities.variant4 <= 1}
                    className="w-6 h-6 p-0 rounded"
                  >
                    <Minus className="w-2.5 h-2.5" />
                  </Button>
                </div>
              </div>
              <div className="pl-14 space-y-0.5">
                <p className="text-xs text-gray-500">🌙 Количество ночей: 2 ночи</p>
                <p className="text-xs text-gray-600 line-clamp-2">{SAMPLE_DESCRIPTION}</p>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500 pl-3">
            ✅ Компактный<br/>
            ✅ Badge показывает количество<br/>
            ✅ Вся информация видна
          </div>
        </div>

        {/* ВАРИАНТ 5: Список с инлайн контролами */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-gray-900">Вариант 5: Список с инлайн контролами</h2>
            <span className="text-xs text-gray-500">оптимальный</span>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200">
            <div className="space-y-2.5">
              {/* Верхняя строка: Изображение + Название + Удалить */}
              <div className="flex items-start gap-2.5">
                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={SAMPLE_ITEM.image} alt={SAMPLE_ITEM.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-gray-900 line-clamp-2 pr-6">{SAMPLE_ITEM.title}</h3>
                </div>
                <Button size="sm" variant="ghost" className="w-6 h-6 p-0 text-gray-400 -mt-1">
                  <X className="w-3.5 h-3.5" />
                </Button>
              </div>
              
              {/* Средняя строка: Описание */}
              <div className="pl-[60px]">
                <p className="text-xs text-gray-500 mb-1">🌙 Количество ночей: 2 ночи</p>
                <p className="text-xs text-gray-600 line-clamp-2">{SAMPLE_DESCRIPTION}</p>
              </div>
              
              {/* Нижняя строка: Количество + Цена */}
              <div className="flex items-center justify-between pl-[60px]">
                <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2 py-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => updateQuantity('variant5', -1)}
                    disabled={quantities.variant5 <= 1}
                    className="w-5 h-5 p-0 hover:bg-white"
                  >
                    <Minus className="w-2.5 h-2.5" />
                  </Button>
                  <span className="text-xs min-w-[12px] text-center">{quantities.variant5}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => updateQuantity('variant5', 1)}
                    className="w-5 h-5 p-0 hover:bg-white"
                  >
                    <Plus className="w-2.5 h-2.5" />
                  </Button>
                </div>
                <div className="text-sm text-gray-900">
                  {formatPrice(SAMPLE_ITEM.price * SAMPLE_ITEM.nights * quantities.variant5)} ₽
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500 pl-3">
            ✅ Оптимальный баланс<br/>
            ✅ Все элементы доступны<br/>
            ✅ Хорошая читаемость<br/>
            ✅ Вся информация видна
          </div>
        </div>

        {/* Сравнительная таблица */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <h3 className="text-sm text-gray-900 mb-3">Сравнение высоты карточек (с описанием)</h3>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600">Вариант 1 (Горизонтальный):</span>
              <span className="text-gray-900">~120px</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Вариант 2 (Минималистичный):</span>
              <span className="text-gray-900">~125px</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Вариант 3 (Карточный):</span>
              <span className="text-gray-900">~150px</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Вариант 4 (Супер-компактный):</span>
              <span className="text-gray-900">~100px</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Вариант 5 (Инлайн) ⭐:</span>
              <span className="text-gray-900">~130px</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="text-gray-600">Текущий вариант:</span>
              <span className="text-red-500">~180px 📏</span>
            </div>
          </div>
        </div>

        {/* Рекомендация */}
        <div className="bg-[#007a55] text-white rounded-xl p-4">
          <h3 className="text-sm mb-2">💡 Рекомендация</h3>
          <p className="text-xs leading-relaxed">
            Для мобильной версии рекомендую <strong>Вариант 4 (Супер-компактный)</strong> - 
            он предлагает отличный баланс между компактностью и полнотой информации. 
            Экономия места: ~44% по сравнению с текущей версией.
          </p>
          <p className="text-xs leading-relaxed mt-2">
            <strong>Альтернатива:</strong> Вариант 1 (Горизонтальный компактный) - 
            экономия ~33%, более привычная горизонтальная компоновка.
          </p>
          <p className="text-xs leading-relaxed mt-2 opacity-90">
            <strong>Для десктопа:</strong> Оставить текущий вариант или использовать Вариант 5 
            для единообразия на всех устройствах.
          </p>
        </div>
      </div>
    </div>
  )
}
