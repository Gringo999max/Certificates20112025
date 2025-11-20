import React, { useState } from 'react'
import { ArrowLeft, Layout, Columns, Info } from 'lucide-react'
import { Button } from './ui/button'
import { HRProcessLayoutVariants } from './HRProcessLayoutVariants'

interface HRProcessLayoutTestPageProps {
  onBack?: () => void
}

export function HRProcessLayoutTestPage({ onBack }: HRProcessLayoutTestPageProps = {}) {
  const [selectedVariant, setSelectedVariant] = useState<'split' | 'banner' | 'standard'>('standard')

  // Unsplash images
  const step1Image = 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=800&q=80'
  const step2Image = 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&q=80'
  const step3Image = 'https://images.unsplash.com/photo-1542228262-3a6d6fec01c4?w=800&q=80'
  const hrStepImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYyMTQwMDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'

  const mainSteps = [
    {
      number: 1,
      title: 'Вы дарите сертификат',
      description: 'Готовые решения для команд (10–500+). Логотип, персональное обращение. Электронные сертификаты или в подарочной упаковке, HR Личный кабинет.',
      image: step1Image,
    },
    {
      number: 2,
      title: 'Получатель выбирает сам',
      description: 'Сотрудник самостоятельно выбирает локацию, дату и удобный формат отдыха из 500+ глэмпингов. Полная свобода выбора — каждый находит идеальный вариант.',
      image: step2Image,
    },
    {
      number: 3,
      title: 'Глэмпинг или эко-отель встречает гостей',
      description: 'Сотрудники укрепляют ментальное здоровье и возвращаются с новой энергией для работы. Инвестиция в Well-being окупается повышенной продуктивностью.',
      image: step3Image,
    },
  ]

  const hrStep = {
    number: 4,
    title: 'Отслеживайте использование',
    description: 'Получайте детальную аналитику и отчетность по использованию сертификатов. Real-time мониторинг активации, детальные отчеты по командам, ROI калькулятор и экспорт данных.',
    image: hrStepImage,
  }

  const variants = [
    {
      id: 'standard' as const,
      name: 'Standard Layout (Рекомендуется)',
      description: '3 шага grid + 4-й шаг внизу как обычная карточка',
      icon: Layout,
      pros: [
        '✨ 4-й шаг стилизован как обычный шаг',
        'Визуально единообразно со всеми шагами',
        'HR функционал показан детально с фичами',
        'Отличная работа на всех устройствах',
        'Dashboard preview справа с характеристиками'
      ],
      cons: [
        'Занимает больше вертикального пространства',
        '4-й шаг виден только при скролле вниз'
      ]
    },
    {
      id: 'split' as const,
      name: 'Split Layout',
      description: '3 шага слева, HR карточка справа (sticky)',
      icon: Columns,
      pros: [
        'HR блок всегда виден при скролле',
        'Четкое разделение: процесс vs аналитика',
        'Хорошо работает на desktop',
        'Визуально выделяет HR функционал'
      ],
      cons: [
        'На mobile превращается в вертикальный список',
        'Занимает больше места по горизонтали'
      ]
    },
    {
      id: 'banner' as const,
      name: 'Banner Layout',
      description: '3 шага grid, HR баннер внизу',
      icon: Layout,
      pros: [
        'Отлично на всех устройствах',
        'HR баннер как "бонус" после основного процесса',
        'Более компактное размещение',
        'Легко добавить CTA в баннер'
      ],
      cons: [
        'HR блок виден только при скролле вниз',
        'Менее заметен чем в split варианте'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="fixed top-4 left-4 z-[100] inline-flex items-center gap-2 bg-[#2D5A3D] hover:bg-[#1a3a28] text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Главная</span>
        </button>
      )}
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2D5A3D] to-[#1a3a28] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {onBack ? (
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-2 mb-4 text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Вернуться на главную</span>
            </button>
          ) : (
            <a 
              href="/"
              className="inline-flex items-center gap-2 mb-4 text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Вернуться на главную</span>
            </a>
          )}

          <h1 className="mb-4 text-white">Тестирование HR Process Layout</h1>
          <p className="text-white/90 max-w-3xl">
            Сравните два варианта отображения 4-го шага (HR-аналитика). Выберите наиболее подходящий вариант для интеграции на корпоративную страницу.
          </p>
        </div>
      </div>

      {/* Info Alert */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-blue-900 mb-2">Проблема с 4-м шагом</h3>
              <p className="text-blue-800 mb-3">
                4-й шаг "Отслеживайте использование" относится к HR-отделу и аналитике, а не является последовательным этапом процесса для сотрудников. 
                Нужно визуально отделить его от основных 3-х шагов.
              </p>
              <p className="text-blue-800">
                <strong>Цель:</strong> Показать основной процесс (шаги 1-3) и параллельно выделить HR функционал как дополнительную возможность.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Variant Selector */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="mb-6">Выберите вариант для просмотра</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {variants.map((variant) => {
              const Icon = variant.icon
              const isSelected = selectedVariant === variant.id
              
              return (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant.id)}
                  className={`text-left p-6 rounded-xl border-2 transition-all ${
                    isSelected
                      ? 'border-[#2D5A3D] bg-[#F8F9F5] shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-[#2D5A3D] text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1">{variant.name}</h3>
                      <p className="text-sm text-[#666666]">{variant.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-green-700 mb-2">✅ Преимущества:</p>
                      <ul className="text-sm text-[#666666] space-y-1">
                        {variant.pros.map((pro, idx) => (
                          <li key={idx}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-orange-700 mb-2">⚠️ Недостатки:</p>
                      <ul className="text-sm text-[#666666] space-y-1">
                        {variant.cons.map((con, idx) => (
                          <li key={idx}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-white">
        <div className="py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-2">Предварительный просмотр</h2>
            <p className="text-[#666666]">
              Текущий вариант: <strong>{variants.find(v => v.id === selectedVariant)?.name}</strong>
            </p>
          </div>
        </div>

        <HRProcessLayoutVariants 
          mainSteps={mainSteps}
          hrStep={hrStep}
          variant={selectedVariant}
        />
      </div>

      {/* Recommendations */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8">Рекомендации по выбору</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#2D5A3D] to-[#1a3a28] text-white p-6 rounded-xl border-2 border-[#2D5A3D] relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-[#7FBA7A] text-white text-xs px-3 py-1 rounded-full">
                Рекомендуется
              </div>
              <h3 className="mb-4 text-white">Standard Layout</h3>
              <p className="text-white/90 mb-4 text-sm">
                Выбирайте этот вариант, если:
              </p>
              <ul className="space-y-2 text-white/90 text-sm">
                <li>• Нужна визуальная целостность всех 4-х шагов</li>
                <li>• Хотите детально показать HR функционал</li>
                <li>• Важна отличная работа на всех устройствах</li>
                <li>• Нужны фичи и характеристики Dashboard</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="mb-4 text-[#2D5A3D]">Split Layout</h3>
              <p className="text-[#666666] mb-4 text-sm">
                Выбирайте этот вариант, если:
              </p>
              <ul className="space-y-2 text-[#666666] text-sm">
                <li>• Хотите максимально выделить HR Dashboard</li>
                <li>• Целевая аудитория в основном на desktop</li>
                <li>• Важна постоянная видимость HR функционала</li>
                <li>• Нужно показать HR Dashboard как ключевую фичу</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="mb-4 text-[#2D5A3D]">Banner Layout</h3>
              <p className="text-[#666666] mb-4 text-sm">
                Выбирайте этот вариант, если:
              </p>
              <ul className="space-y-2 text-[#666666] text-sm">
                <li>• Важна отличная работа на всех устройствах</li>
                <li>• HR Dashboard как "бонус" после основного процесса</li>
                <li>• Нужна более компактная верстка</li>
                <li>• Хотите добавить яркий CTA для HR Dashboard</li>
              </ul>
            </div>
          </div>

          {/* Implementation note */}
          <div className="mt-8 bg-[#F8F9F5] p-6 rounded-xl">
            <h3 className="mb-3">Как внедрить в CorporateB2BPage.tsx</h3>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <pre className="text-sm text-[#666666] overflow-x-auto">
{`import { HRProcessLayoutVariants } from './HRProcessLayoutVariants'

// В компоненте CorporateB2BPage:
<HRProcessLayoutVariants
  mainSteps={imageSteps.slice(0, 3)} // Первые 3 шага
  hrStep={imageSteps[3]} // 4-й шаг
  variant="standard" // или "split", "banner"
/>`}
              </pre>
            </div>
            
            {/* Why Standard? */}
            <div className="mt-4 bg-white p-4 rounded-lg border-2 border-[#2D5A3D]/20">
              <h4 className="text-sm mb-2 text-[#2D5A3D]">💡 Почему рекомендуем Standard Layout?</h4>
              <ul className="text-xs text-[#666666] space-y-1">
                <li>✅ <strong>Визуальная целостность:</strong> Все 4 шага выглядят единообразно</li>
                <li>✅ <strong>Детальность:</strong> Показываем все фичи HR Dashboard с описанием</li>
                <li>✅ <strong>Адаптивность:</strong> Отлично работает на mobile и desktop</li>
                <li>✅ <strong>Информативность:</strong> Dashboard preview + характеристики</li>
                <li>✅ <strong>Фокус:</strong> 4-й шаг не отвлекает от основного процесса, но остается заметным</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
