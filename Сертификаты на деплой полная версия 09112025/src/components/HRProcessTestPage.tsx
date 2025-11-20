import React, { useState } from 'react'
import { Button } from './ui/button'
import { HRProcessVariants } from './HRProcessVariants'
import { ArrowLeft } from 'lucide-react'

interface HRProcessTestPageProps {
  onBack: () => void
}

export function HRProcessTestPage({ onBack }: HRProcessTestPageProps) {
  const [variant, setVariant] = useState<'current' | 'cards' | 'horizontal'>('current')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка управления */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Назад
              </Button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Тестирование блока "HR-процесс"
                </h1>
                <p className="text-sm text-gray-500">
                  Well-being с контролем: Как это работает для HR
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={variant === 'current' ? 'default' : 'outline'}
                onClick={() => setVariant('current')}
                className={variant === 'current' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                Текущий (вертикальный)
              </Button>
              <Button
                size="sm"
                variant={variant === 'cards' ? 'default' : 'outline'}
                onClick={() => setVariant('cards')}
                className={variant === 'cards' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                Карточки 2x2
              </Button>
              <Button
                size="sm"
                variant={variant === 'horizontal' ? 'default' : 'outline'}
                onClick={() => setVariant('horizontal')}
                className={variant === 'horizontal' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                Горизонтальный Timeline
              </Button>
            </div>
          </div>

          {/* Описания вариантов */}
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Описание вариантов:</h3>
            <ul className="space-y-2 text-blue-800">
              <li><strong>Текущий (вертикальный):</strong> Вертикальный список с разделителями-стрелками. Классический подход.</li>
              <li><strong>Карточки 2x2:</strong> Сетка 2x2 с карточками на светлом фоне. Иллюстрации внутри карточек с номерами в правом верхнем углу.</li>
              <li><strong>Горизонтальный Timeline:</strong> Горизонтальная временная шкала на десктопе с номерами на линии, карточки ниже.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Превью варианта */}
      <div className="py-8">
        <HRProcessVariants variant={variant} />
      </div>

      {/* Информация о текущем варианте */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-900 mb-3">
            Активный вариант: {
              variant === 'current' ? 'Текущий (вертикальный)' :
              variant === 'cards' ? 'Карточки 2x2' :
              'Горизонтальный Timeline'
            }
          </h3>
          
          <div className="space-y-3 text-sm text-gray-600">
            {variant === 'current' && (
              <>
                <p><strong>Особенности:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Вертикальный список с разделителями</li>
                  <li>Круглые номера слева</li>
                  <li>Иллюстрации лисичек под текстом</li>
                  <li>Стрелки-разделители между шагами</li>
                  <li>Простой и понятный формат</li>
                </ul>
                <p className="mt-3"><strong>Преимущества:</strong> Привычный формат, легко читается, хорошо работает на всех устройствах.</p>
              </>
            )}

            {variant === 'cards' && (
              <>
                <p><strong>Особенности:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Сетка 2x2 на десктопе</li>
                  <li>Карточки с градиентным фоном (emerald → teal)</li>
                  <li>Номера в правом верхнем углу карточек</li>
                  <li>Иллюстрации в центре карточки</li>
                  <li>Hover-эффекты (подъём карточки, увеличение номера)</li>
                  <li>Горизонтальная прокрутка на мобиле</li>
                </ul>
                <p className="mt-3"><strong>Преимущества:</strong> Современный, визуально привлекательный, хорошо использует пространство экрана.</p>
              </>
            )}

            {variant === 'horizontal' && (
              <>
                <p><strong>Особенности:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Горизонтальный timeline на больших экранах</li>
                  <li>Линия соединения между шагами</li>
                  <li>Номера на линии, карточки ниже</li>
                  <li>Стрелки между карточками</li>
                  <li>Адаптивный: 2x2 на планшете, вертикальный список на мобиле</li>
                </ul>
                <p className="mt-3"><strong>Преимущества:</strong> Инновационный дизайн, показывает процесс как путь, подчёркивает последовательность.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
