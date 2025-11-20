import React from 'react'
import { motion } from 'motion/react'
import { FoxGivingGift, FoxChoosing, FoxBooking, FoxInGlamping } from './FoxIllustrations'
import { ChevronRight, ArrowRight, CheckCircle } from 'lucide-react'

interface HRProcessVariantsProps {
  variant: 'current' | 'cards' | 'horizontal'
}

export function HRProcessVariants({ variant }: HRProcessVariantsProps) {
  const steps = [
    {
      number: '01',
      title: 'Вы дарите сертификат',
      description: 'Вы выбираете пакет и количество. Юридическое оформление и оплата счета занимает 1 день. Мы готовим персонализированные сертификаты с вашим логотипом.',
      illustration: <FoxGivingGift />,
      color: 'emerald'
    },
    {
      number: '02',
      title: 'Получатель выбирает сам',
      description: 'Сотрудник самостоятельно выбирает локацию, дату и удобный формат отдыха из 500+ глэмпингов. Полная свобода выбора — каждый находит идеальный вариант.',
      illustration: <FoxChoosing />,
      color: 'teal'
    },
    {
      number: '03',
      title: 'Мы предоставляем отчетность',
      description: 'Вы получаете доступ к Личному кабинету HR, который позволяет измерять эффективность вашей Well-being программы, контролировать активацию/использование и снижать абсентеизм.',
      illustration: <FoxBooking />,
      color: 'cyan'
    },
    {
      number: '04',
      title: 'Глэмпинг встречает гостей',
      description: 'Сотрудники укрепляют ментальное здоровье и возвращаются с новой энергией для работы. Инвестиция в Well-being окупается повышенной продуктивностью.',
      illustration: <FoxInGlamping />,
      color: 'emerald'
    }
  ]

  // Current variant - вертикальный список
  if (variant === 'current') {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4 text-gray-900">
              Well-being с контролем: Как это работает для HR
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-${step.color}-100 rounded-full flex items-center justify-center`}>
                        <span className={`text-2xl text-${step.color}-600`}>{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                      <div className="mt-4">
                        {step.illustration}
                      </div>
                    </div>
                  </motion.div>
                  
                  {index < steps.length - 1 && (
                    <div className="flex justify-center">
                      <ChevronRight className={`w-8 h-8 text-${step.color}-300 rotate-90`} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Cards variant - карточки в сетке
  if (variant === 'cards') {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Well-being с контролем: Как это работает для HR
            </motion.h2>
          </div>

          {/* Desktop: Grid 2x2 */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-emerald-50/80 to-teal-50/80 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-emerald-100/50 hover:border-emerald-300 group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Номер бейдж */}
                <div className="absolute top-6 right-6 w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>

                {/* Иллюстрация */}
                <div className="mb-6 flex justify-center">
                  <div className="transform group-hover:scale-105 transition-transform">
                    {step.illustration}
                  </div>
                </div>

                {/* Контент */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Декоративная стрелка для продолжения */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity md:hidden">
                    <ArrowRight className="w-4 h-4 text-white rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-6 px-6 pb-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gradient-to-br from-emerald-50/80 to-teal-50/80 rounded-3xl p-6 shadow-lg border-2 border-emerald-100/50 w-[300px] flex-shrink-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Номер бейдж */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>

                  {/* Иллюстрация */}
                  <div className="mb-4 flex justify-center">
                    {step.illustration}
                  </div>

                  {/* Контент */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {steps.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-emerald-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Horizontal variant - горизонтальный timeline на десктопе
  if (variant === 'horizontal') {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Well-being с контролем: Как это работает для HR
            </motion.h2>
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-6 relative">
              {/* Линия соединения */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200" style={{ width: 'calc(100% - 100px)', left: '50px' }} />
              
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Номер на линии */}
                  <div className="flex justify-center mb-8">
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-2xl font-bold">{step.number}</span>
                    </div>
                  </div>

                  {/* Карточка */}
                  <div className="bg-gradient-to-br from-emerald-50/80 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-emerald-100">
                    {/* Иллюстрация */}
                    <div className="mb-4 flex justify-center">
                      <div className="transform hover:scale-105 transition-transform">
                        {step.illustration}
                      </div>
                    </div>

                    {/* Контент */}
                    <h3 className="text-base font-bold text-gray-900 mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>

                  {/* Стрелка между карточками */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-3 top-24 z-20">
                      <ArrowRight className="w-6 h-6 text-emerald-600" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tablet: Grid 2x2 */}
          <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-emerald-50/80 to-white rounded-2xl p-6 shadow-lg border border-emerald-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 pt-2">
                    {step.title}
                  </h3>
                </div>
                
                <div className="mb-4 flex justify-center">
                  {step.illustration}
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Vertical List */}
          <div className="md:hidden space-y-6 max-w-sm mx-auto">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className="bg-gradient-to-br from-emerald-50/80 to-white rounded-2xl p-6 shadow-lg border border-emerald-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-lg font-bold">{step.number}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 pt-2">
                      {step.title}
                    </h3>
                  </div>
                  
                  <div className="mb-4 flex justify-center">
                    {step.illustration}
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {index < steps.length - 1 && (
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-emerald-400 rotate-90" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return null
}
