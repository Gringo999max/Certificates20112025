import React, { useState } from 'react'
import { Button } from './ui/button'
import { HowItWorksB2BVariants } from './HowItWorksB2BVariants'
import { ArrowLeft } from 'lucide-react'

interface HowItWorksB2BTestPageProps {
  onBack?: () => void
}

export function HowItWorksB2BTestPage({ onBack }: HowItWorksB2BTestPageProps = {}) {
  const [variant, setVariant] = useState<'current' | 'images' | 'minimal' | 'timeline' | 'numbered' | 'roi-focused'>('current')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="fixed top-4 left-4 z-[100] inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Главная</span>
        </button>
      )}
      
      {/* Variant Selector */}
      <div className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h1 className="text-xl font-bold text-gray-900">
              Варианты "Как это работает?" для B2B
            </h1>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={variant === 'current' ? 'default' : 'outline'}
                onClick={() => setVariant('current')}
                className={variant === 'current' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                Текущий (Fox)
              </Button>
              <Button
                size="sm"
                variant={variant === 'images' ? 'default' : 'outline'}
                onClick={() => setVariant('images')}
                className={variant === 'images' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                С картинками
              </Button>
              <Button
                size="sm"
                variant={variant === 'minimal' ? 'default' : 'outline'}
                onClick={() => setVariant('minimal')}
                className={variant === 'minimal' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                Минималистичный
              </Button>
              <Button
                size="sm"
                variant={variant === 'timeline' ? 'default' : 'outline'}
                onClick={() => setVariant('timeline')}
                className={variant === 'timeline' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                Timeline
              </Button>
              <Button
                size="sm"
                variant={variant === 'numbered' ? 'default' : 'outline'}
                onClick={() => setVariant('numbered')}
                className={variant === 'numbered' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                Numbered
              </Button>
              <Button
                size="sm"
                variant={variant === 'roi-focused' ? 'default' : 'outline'}
                onClick={() => setVariant('roi-focused')}
                className={variant === 'roi-focused' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                ROI-Focused
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-blue-900 mb-3">Описание вариантов:</h2>
          <ul className="space-y-2 text-blue-800">
            <li><strong>Текущий (Fox):</strong> С иллюстрациями лисичек, 4 шага для HR. Иконки отцентрованы.</li>
            <li><strong>С картинками:</strong> Взят дизайн с главной страницы, адаптирован для B2B с 4 шагами.</li>
            <li><strong>Минималистичный:</strong> Простые иконки без фонов, легкий и современный.</li>
            <li><strong>Timeline:</strong> Временная шкала с указанием длительности каждого этапа.</li>
            <li><strong>Numbered:</strong> Крупные номера на фоне карточек, акцент на последовательности.</li>
            <li><strong>ROI-Focused:</strong> Акцент на бизнес-результаты и метрики для каждого шага.</li>
          </ul>
        </div>
      </div>

      {/* Selected Variant */}
      <HowItWorksB2BVariants 
        variant={variant}
        onCTA={() => console.log('CTA clicked')}
      />

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6">
          <h3 className="font-bold text-emerald-900 mb-2">Все варианты:</h3>
          <ul className="text-emerald-800 space-y-1 text-sm">
            <li>✅ Горизонтальная прокрутка на мобиле</li>
            <li>✅ Индикаторы прокрутки (точки)</li>
            <li>✅ Плавные анимации появления</li>
            <li>✅ 4 шага в каждом варианте</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksB2BTestPage
