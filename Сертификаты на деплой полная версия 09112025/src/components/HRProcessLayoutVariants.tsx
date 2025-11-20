import React from 'react'
import { ArrowRight, BarChart3, TrendingUp, Users, ChevronRight, FileText, Download } from 'lucide-react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface Step {
  number: number
  title: string
  description: string
  image: string
}

interface HRProcessLayoutVariantsProps {
  mainSteps: Step[]
  hrStep: Step
  variant: 'split' | 'banner' | 'standard'
}

export function HRProcessLayoutVariants({ mainSteps, hrStep, variant }: HRProcessLayoutVariantsProps) {
  if (variant === 'split') {
    return <SplitLayoutVariant mainSteps={mainSteps} hrStep={hrStep} />
  }
  
  if (variant === 'banner') {
    return <BannerLayoutVariant mainSteps={mainSteps} hrStep={hrStep} />
  }
  
  return <StandardLayoutVariant mainSteps={mainSteps} hrStep={hrStep} />
}

// Вариант 1: Split Layout - 3 шага слева, HR карточка справа
function SplitLayoutVariant({ mainSteps, hrStep }: { mainSteps: Step[], hrStep: Step }) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8F9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">Как это работает?</h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            Простой процесс от выбора до результата
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left side - Main 3 steps */}
          <div className="lg:col-span-2 space-y-8">
            {mainSteps.map((step, index) => (
              <div key={step.number} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#2D5A3D] text-white flex items-center justify-center">
                      <span>{step.number}</span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-shrink-0 w-full md:w-48 h-32 rounded-xl overflow-hidden">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="mb-3">{step.title}</h3>
                    <p className="text-[#666666]">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for non-last steps */}
                  {index < mainSteps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-[#2D5A3D] opacity-30" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right side - HR Analytics Card (Sticky) */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-[#2D5A3D] to-[#1a3a28] rounded-2xl p-8 text-white shadow-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <BarChart3 className="w-4 h-4" />
                <span className="text-sm">Для HR-отдела</span>
              </div>

              {/* Content */}
              <h3 className="mb-4 text-white">{hrStep.title}</h3>
              <p className="text-white/90 mb-6">
                {hrStep.description}
              </p>

              {/* Stats */}
              <div className="space-y-4 mb-6 pb-6 border-b border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">Real-time аналитика</span>
                  <TrendingUp className="w-5 h-5 text-[#7FBA7A]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">Отчеты по команде</span>
                  <Users className="w-5 h-5 text-[#7FBA7A]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">ROI калькулятор</span>
                  <BarChart3 className="w-5 h-5 text-[#7FBA7A]" />
                </div>
              </div>

              {/* CTA */}
              <Button 
                className="w-full bg-white text-[#2D5A3D] hover:bg-white/90"
              >
                Открыть демо HR Dashboard
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Image preview */}
              <div className="mt-6 rounded-lg overflow-hidden border-2 border-white/20">
                <ImageWithFallback
                  src={hrStep.image}
                  alt="HR Dashboard Preview"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Вариант 2: Banner Layout - 3 шага вертикально, HR баннер внизу
function BannerLayoutVariant({ mainSteps, hrStep }: { mainSteps: Step[], hrStep: Step }) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8F9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">Как это работает?</h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            Простой процесс от выбора до результата
          </p>
        </div>

        {/* Main 3 Steps - Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {mainSteps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connecting line */}
              {index < mainSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-[#2D5A3D]/20 -translate-x-4" />
              )}
              
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                {/* Step number */}
                <div className="w-14 h-14 rounded-full bg-[#2D5A3D] text-white flex items-center justify-center mb-4">
                  <span>{step.number}</span>
                </div>

                {/* Image */}
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-[#666666]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* HR Analytics Banner */}
        <div className="relative">
          {/* Decorative element */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#2D5A3D] rounded-full flex items-center justify-center shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>

          <div className="bg-gradient-to-r from-[#2D5A3D] via-[#1a3a28] to-[#2D5A3D] rounded-2xl p-8 md:p-12 text-white shadow-xl overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side - Content */}
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-sm">Для HR-отдела</span>
                  </div>

                  <h3 className="mb-4 text-white">{hrStep.title}</h3>
                  <p className="text-white/90 mb-6">
                    {hrStep.description}
                  </p>

                  {/* Features list */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#7FBA7A] flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">Real-time данные</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#7FBA7A] flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">Отчеты</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#7FBA7A] flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">ROI анализ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#7FBA7A] flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm">Экспорт данных</span>
                    </div>
                  </div>

                  <Button 
                    className="bg-white text-[#2D5A3D] hover:bg-white/90"
                  >
                    Открыть демо HR Dashboard
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Right side - Image */}
                <div className="hidden md:block">
                  <div className="rounded-xl overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform">
                    <ImageWithFallback
                      src={hrStep.image}
                      alt="HR Dashboard Preview"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Вариант 3: Standard Layout - Все 4 шага как обычные карточки (4-й стилизован как остальные)
function StandardLayoutVariant({ mainSteps, hrStep }: { mainSteps: Step[], hrStep: Step }) {
  // HR features для 4-го шага
  const hrFeatures = [
    {
      icon: TrendingUp,
      title: 'Real-time данные',
      description: 'Мониторинг активации сертификатов в режиме реального времени'
    },
    {
      icon: FileText,
      title: 'Отчеты',
      description: 'Детальные отчеты по командам и департаментам'
    },
    {
      icon: BarChart3,
      title: 'ROI анализ',
      description: 'Калькулятор возврата инвестиций в Well-being'
    },
    {
      icon: Download,
      title: 'Экспорт данных',
      description: 'Выгрузка данных в Excel и PDF форматах'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8F9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">Как это работает?</h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            Простой процесс от выбора до результата
          </p>
        </div>

        {/* All 4 Steps - Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mainSteps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connecting line (desktop only) */}
              {index < mainSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-6 h-0.5 bg-[#2D5A3D]/20 z-0" />
              )}
              
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all h-full relative z-10">
                {/* Step number */}
                <div className="w-12 h-12 rounded-full bg-[#2D5A3D] text-white flex items-center justify-center mb-4">
                  <span>{step.number}</span>
                </div>

                {/* Image */}
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-lg">{step.title}</h3>
                <p className="text-[#666666] text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4th Step - HR Dashboard (styled as standard step but with special content) */}
        <div className="mt-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border-2 border-[#2D5A3D]/10">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left side - Main content */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2D5A3D] text-white flex items-center justify-center">
                    <span>{hrStep.number}</span>
                  </div>
                  
                  <div className="flex-1">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#F8F9F5] rounded-full px-3 py-1 mb-3">
                      <BarChart3 className="w-4 h-4 text-[#2D5A3D]" />
                      <span className="text-xs text-[#2D5A3D]">Для HR-отдела</span>
                    </div>
                    
                    <h3 className="mb-3">{hrStep.title}</h3>
                    <p className="text-[#666666]">
                      Получайте детальную аналитику и отчетность по использованию сертификатов. Real-time мониторинг активации, детальные отчеты по командам, ROI калькулятор и экспорт данных.
                    </p>
                  </div>
                </div>

                {/* HR Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {hrFeatures.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div 
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-xl bg-[#F8F9F5] hover:bg-[#2D5A3D]/5 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#2D5A3D] flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm mb-1">{feature.title}</h4>
                          <p className="text-xs text-[#666666] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* CTA Button */}
                <Button 
                  className="bg-[#2D5A3D] text-white hover:bg-[#1a3a28] w-full sm:w-auto"
                >
                  Открыть демо HR Dashboard
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Right side - Dashboard Preview Image */}
              <div className="lg:sticky lg:top-24">
                <div className="rounded-xl overflow-hidden border-2 border-[#2D5A3D]/10 shadow-lg">
                  <ImageWithFallback
                    src={hrStep.image}
                    alt="HR Dashboard Preview"
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
                
                {/* Stats below image */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-[#F8F9F5] rounded-lg">
                    <div className="text-[#2D5A3D] mb-1">5 вкладок</div>
                    <div className="text-xs text-[#666666]">Dashboard</div>
                  </div>
                  <div className="text-center p-3 bg-[#F8F9F5] rounded-lg">
                    <div className="text-[#2D5A3D] mb-1">20+ метрик</div>
                    <div className="text-xs text-[#666666]">Аналитика</div>
                  </div>
                  <div className="text-center p-3 bg-[#F8F9F5] rounded-lg">
                    <div className="text-[#2D5A3D] mb-1">Real-time</div>
                    <div className="text-xs text-[#666666]">Обновление</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
