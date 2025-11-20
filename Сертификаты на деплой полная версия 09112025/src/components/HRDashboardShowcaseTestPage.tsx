import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, Laptop, Grid3x3, TrendingUp, Clock } from 'lucide-react'
import { Button } from './ui/button'
import { 
  HRDashboardShowcaseVariantA, 
  HRDashboardShowcaseVariantB,
  HRDashboardShowcaseVariantC,
  HRDashboardShowcaseVariantD 
} from './HRDashboardShowcaseVariants'
import { HRDashboardShowcaseSection } from './HRDashboardShowcaseSection'

interface HRDashboardShowcaseTestPageProps {
  onBack: () => void
  onNavigateToHRDashboard?: () => void
}

export function HRDashboardShowcaseTestPage({ 
  onBack,
  onNavigateToHRDashboard 
}: HRDashboardShowcaseTestPageProps) {
  const [selectedVariant, setSelectedVariant] = useState<'current' | 'a' | 'b' | 'c' | 'd'>('current')

  const variants = [
    {
      id: 'current' as const,
      name: 'Current (Гибридный)',
      description: 'Текущая версия - сочетание features + metrics + preview',
      icon: Grid3x3,
      component: HRDashboardShowcaseSection
    },
    {
      id: 'a' as const,
      name: 'Variant A: Laptop Hero',
      description: 'Большой MacBook mockup в центре с темным фоном',
      icon: Laptop,
      component: HRDashboardShowcaseVariantA
    },
    {
      id: 'b' as const,
      name: 'Variant B: Feature Grid',
      description: 'Современный grid из 6 карточек фич с метриками',
      icon: Grid3x3,
      component: HRDashboardShowcaseVariantB
    },
    {
      id: 'c' as const,
      name: 'Variant C: Split Screen Stats',
      description: 'Большие цифры слева, dashboard preview справа',
      icon: TrendingUp,
      component: HRDashboardShowcaseVariantC
    },
    {
      id: 'd' as const,
      name: 'Variant D: Timeline Journey',
      description: 'Процесс работы с HR Dashboard в течение дня',
      icon: Clock,
      component: HRDashboardShowcaseVariantD
    }
  ]

  const selectedVariantData = variants.find(v => v.id === selectedVariant)
  const SelectedComponent = selectedVariantData?.component

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Назад
            </Button>
            <h1 className="font-bold text-gray-900">HR Dashboard Showcase — Варианты</h1>
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Variant selector */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {variants.map((variant) => {
              const isSelected = selectedVariant === variant.id
              const Icon = variant.icon

              return (
                <motion.button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-200 bg-white hover:border-emerald-200'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-emerald-500' : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-sm mb-1 ${
                        isSelected ? 'text-emerald-900' : 'text-gray-900'
                      }`}>
                        {variant.name}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {variant.description}
                      </p>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="mt-2 text-xs font-semibold text-emerald-600">
                      ✓ Выбрано
                    </div>
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Variant display */}
      <div className="py-8">
        <motion.div
          key={selectedVariant}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {SelectedComponent && (
            <SelectedComponent onNavigateToHRDashboard={onNavigateToHRDashboard} />
          )}
        </motion.div>
      </div>

      {/* Comparison notes */}
      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="font-bold text-gray-900 mb-6">Сравнение вариантов</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Current */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-sm">Current (Гибридный)</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✓ Сбалансированный</li>
                <li>✓ Много информации</li>
                <li>✓ Browser preview</li>
                <li>✓ Анимированные метрики</li>
                <li>⚠ Может быть перегружен</li>
              </ul>
            </div>

            {/* Variant A */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-sm">Variant A: Laptop Hero</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✓ WOW-эффект</li>
                <li>✓ Premium look</li>
                <li>✓ Темный фон (контраст)</li>
                <li>✓ Floating badges</li>
                <li>⚠ Может быть слишком flashy</li>
              </ul>
            </div>

            {/* Variant B */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-sm">Variant B: Feature Grid</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✓ Чистый и простой</li>
                <li>✓ Легко читается</li>
                <li>✓ Хорошо на мобиле</li>
                <li>✓ 6 равных карточек</li>
                <li>⚠ Меньше визуальной магии</li>
              </ul>
            </div>

            {/* Variant C */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-sm">Variant C: Split Screen</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✓ Фокус на цифрах</li>
                <li>✓ Яркий градиент</li>
                <li>✓ Большие метрики</li>
                <li>✓ Real-time badge</li>
                <li>⚠ Агрессивный цвет</li>
              </ul>
            </div>

            {/* Variant D */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-sm">Variant D: Timeline</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>✓ Storytelling</li>
                <li>✓ Понятный процесс</li>
                <li>✓ Эмоциональная связь</li>
                <li>✓ Уникальный подход</li>
                <li>⚠ Длиннее других</li>
              </ul>
            </div>
          </div>

          {/* Recommendation */}
          <div className="mt-8 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-xl">
            <h3 className="font-bold text-emerald-900 mb-2">💡 Рекомендация</h3>
            <p className="text-sm text-emerald-800">
              <strong>Variant B (Feature Grid)</strong> — самый универсальный и легко читаемый. 
              Хорошо работает на всех устройствах и не перегружает информацией.
            </p>
            <p className="text-sm text-emerald-800 mt-2">
              <strong>Variant A (Laptop Hero)</strong> — если нужен WOW-эффект и premium позиционирование.
            </p>
            <p className="text-sm text-emerald-800 mt-2">
              <strong>Variant D (Timeline)</strong> — если важен storytelling и эмоциональная связь с HR.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HRDashboardShowcaseTestPage
