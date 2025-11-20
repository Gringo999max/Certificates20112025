import React, { useState } from 'react'
import { LayoutGrid, Workflow, ChevronUp, Footprints, Sparkles, Package, BarChart3, Monitor, Columns, TreePine, MessageSquare, Layers, DollarSign, Gem, Gift, Building2 } from 'lucide-react'

interface DevNavigationButtonProps {
  onNavigateToHowItWorksTest?: () => void
  onNavigateToHowItWorksVariants?: () => void
  onNavigateToHowItWorksB2BTest?: () => void
  onNavigateToHRProcessTest?: () => void
  onNavigateToAnthropicDeliveryTest?: () => void
  onNavigateToHRDashboard?: () => void
  onNavigateToHRDashboardShowcaseTest?: () => void
  onNavigateToHRProcessLayoutTest?: () => void
  onNavigateToNewYearPromoTest?: () => void
  onNavigateToB2BFinalCTATest?: () => void
  onNavigateToB2BPackagesTest?: () => void
  onNavigateToB2BPackagesPriceTest?: () => void
  onNavigateToB2BPackagesPriceV2Test?: () => void
  onNavigateToCorporateGiftReasonsTest?: () => void
  onNavigateToCorporateGiftHomeTest?: () => void
}

export function DevNavigationButton({ 
  onNavigateToHowItWorksTest,
  onNavigateToHowItWorksVariants,
  onNavigateToHowItWorksB2BTest,
  onNavigateToHRProcessTest,
  onNavigateToAnthropicDeliveryTest,
  onNavigateToHRDashboard,
  onNavigateToHRDashboardShowcaseTest,
  onNavigateToHRProcessLayoutTest,
  onNavigateToNewYearPromoTest,
  onNavigateToB2BFinalCTATest,
  onNavigateToB2BPackagesTest,
  onNavigateToB2BPackagesPriceTest,
  onNavigateToB2BPackagesPriceV2Test,
  onNavigateToCorporateGiftReasonsTest,
  onNavigateToCorporateGiftHomeTest
}: DevNavigationButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const testPages = [
    {
      name: 'Тест "Как это работает"',
      icon: Workflow,
      onClick: onNavigateToHowItWorksTest,
      color: 'bg-emerald-600 hover:bg-emerald-700'
    },
    {
      name: 'Варианты "Как это работает"',
      icon: LayoutGrid,
      onClick: onNavigateToHowItWorksVariants,
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      name: '🎯 Варианты B2B "Как это работает"',
      icon: Sparkles,
      onClick: onNavigateToHowItWorksB2BTest,
      color: 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700'
    },
    {
      name: '🦊 HR-процесс с лисичками (3 варианта)',
      icon: Footprints,
      onClick: onNavigateToHRProcessTest,
      color: 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600'
    },
    {
      name: 'Тест Anthropic AI доставки',
      icon: Package,
      onClick: onNavigateToAnthropicDeliveryTest,
      color: 'bg-yellow-600 hover:bg-yellow-700'
    },
    {
      name: '📊 HR Dashboard (Личный кабинет)',
      icon: BarChart3,
      onClick: onNavigateToHRDashboard,
      color: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
    },
    {
      name: '🎨 HR Dashboard Showcase (5 вариантов)',
      icon: Monitor,
      onClick: onNavigateToHRDashboardShowcaseTest,
      color: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
    },
    {
      name: '🔄 HR Process Layout (2 варианта)',
      icon: Columns,
      onClick: onNavigateToHRProcessLayoutTest,
      color: 'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700'
    },
    {
      name: '🎄 Новогодние Промо-Блоки (3 варианта)',
      icon: TreePine,
      onClick: onNavigateToNewYearPromoTest,
      color: 'bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700'
    },
    {
      name: '💼 B2B Финальный CTA (3 варианта)',
      icon: MessageSquare,
      onClick: onNavigateToB2BFinalCTATest,
      color: 'bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700'
    },
    {
      name: '📦 B2B Пакеты Тарифы (3 варианта)',
      icon: Layers,
      onClick: onNavigateToB2BPackagesTest,
      color: 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700'
    },
    {
      name: '💰 B2B Пакеты по Цене (3 варианта)',
      icon: DollarSign,
      onClick: onNavigateToB2BPackagesPriceTest,
      color: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
    },
    {
      name: '💎 B2B Пакеты по Цене V2 (улучшенные)',
      icon: Gem,
      onClick: onNavigateToB2BPackagesPriceV2Test,
      color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
    },
    {
      name: '🎁 Подарок который оценят (3 варианта)',
      icon: Gift,
      onClick: onNavigateToCorporateGiftReasonsTest,
      color: 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700'
    },
    {
      name: '🏠 Корп. блок для ГЛАВНОЙ (3 варианта) 🆕',
      icon: Building2,
      onClick: onNavigateToCorporateGiftHomeTest,
      color: 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700'
    }
  ]

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* Menu */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-2 min-w-[280px]">
          <div className="space-y-1">
            {testPages.map((page, index) => {
              const Icon = page.icon
              return (
                <button
                  key={index}
                  onClick={() => {
                    page.onClick?.()
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-white ${page.color}`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{page.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-2xl transition-all ${
          isOpen ? 'scale-110 rotate-180' : 'hover:scale-110'
        }`}
        title="Тестовые страницы"
      >
        {isOpen ? (
          <ChevronUp className="w-6 h-6" />
        ) : (
          <LayoutGrid className="w-6 h-6" />
        )}
      </button>
    </div>
  )
}

export default DevNavigationButton