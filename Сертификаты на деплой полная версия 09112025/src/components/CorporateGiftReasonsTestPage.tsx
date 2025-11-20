import React, { useState } from 'react'
import { Button } from './ui/button'
import { ArrowLeft, Info } from 'lucide-react'
import { CorporateGiftReasonsSection } from './CorporateGiftReasonsSection'
import { 
  CorporateGiftReasonsSectionVariant1,
  CorporateGiftReasonsSectionVariant2,
  CorporateGiftReasonsSectionVariant3
} from './CorporateGiftReasonsSectionVariants'

type VariantType = 'original' | 'variant1' | 'variant2' | 'variant3'

export function CorporateGiftReasonsTestPage() {
  const [currentVariant, setCurrentVariant] = useState<VariantType>('original')

  const variants = [
    { 
      id: 'original' as VariantType, 
      name: 'Оригинал',
      description: 'Текущая версия на странице'
    },
    { 
      id: 'variant1' as VariantType, 
      name: 'Вариант 1: Well-being метрики',
      description: 'Фокус на HR-показатели и измеримые результаты'
    },
    { 
      id: 'variant2' as VariantType, 
      name: 'Вариант 2: Персонализация',
      description: 'Универсальность для разных корпоративных событий'
    },
    { 
      id: 'variant3' as VariantType, 
      name: 'Вариант 3: ROI фокус',
      description: 'Минималистичный дизайн с акцентом на цифры'
    }
  ]

  const renderCurrentVariant = () => {
    const onSelectGift = () => {
      console.log('Gift selected!')
      alert('Переход к выбору пакета')
    }

    switch (currentVariant) {
      case 'original':
        return <CorporateGiftReasonsSection onSelectGift={onSelectGift} />
      case 'variant1':
        return <CorporateGiftReasonsSectionVariant1 onSelectGift={onSelectGift} />
      case 'variant2':
        return <CorporateGiftReasonsSectionVariant2 onSelectGift={onSelectGift} />
      case 'variant3':
        return <CorporateGiftReasonsSectionVariant3 onSelectGift={onSelectGift} />
      default:
        return <CorporateGiftReasonsSection onSelectGift={onSelectGift} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.history.back()}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Назад
              </Button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Тестирование блока "Подарок, который оценят"
                </h1>
                <p className="text-sm text-gray-500">
                  Сравните разные варианты оформления секции
                </p>
              </div>
            </div>
          </div>

          {/* Variant Selector */}
          <div className="flex flex-wrap gap-2">
            {variants.map((variant) => (
              <Button
                key={variant.id}
                onClick={() => setCurrentVariant(variant.id)}
                variant={currentVariant === variant.id ? 'default' : 'outline'}
                className={`flex-col items-start h-auto py-3 px-4 ${
                  currentVariant === variant.id 
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <span className="font-semibold text-sm">{variant.name}</span>
                <span className={`text-xs mt-1 ${
                  currentVariant === variant.id ? 'text-emerald-100' : 'text-gray-500'
                }`}>
                  {variant.description}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-start gap-2">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800">
              <strong>Тестирование вариантов:</strong> Выберите вариант выше для просмотра. 
              Каждый вариант имеет свой фокус и визуальный стиль.
              {currentVariant === 'variant1' && ' • Well-being метрики: Акцент на измеримые HR-показатели'}
              {currentVariant === 'variant2' && ' • Персонализация: Универсальность для разных событий'}
              {currentVariant === 'variant3' && ' • ROI фокус: Минималистичный дизайн с крупными цифрами'}
            </div>
          </div>
        </div>
      </div>

      {/* Current Variant */}
      <div className="pb-16">
        {renderCurrentVariant()}
      </div>

      {/* Bottom Info */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-sm">
            <strong>Текущий вариант:</strong> {variants.find(v => v.id === currentVariant)?.name}
          </div>
          <div className="text-xs text-gray-400">
            {variants.findIndex(v => v.id === currentVariant) + 1} из {variants.length}
          </div>
        </div>
      </div>
    </div>
  )
}
