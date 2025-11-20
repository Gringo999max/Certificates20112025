import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Check, Gift, Search, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import step1Image from 'figma:asset/473c627910d9537f1ff6b8d1db2964f79ea88c39.png'
import step2Image from 'figma:asset/bf412929b27600f04ec71124eb18e40eb9366774.png'
import step3Image from 'figma:asset/0c06a85ab403bb43c88e7bd4c6161dca48c59a1d.png'

interface HowItWorksVariantsProps {
  onNavigateToGiftOptions?: () => void
}

export function HowItWorksVariants({ onNavigateToGiftOptions }: HowItWorksVariantsProps) {
  const [activeVariant, setActiveVariant] = useState<number>(1)

  const steps = [
    {
      number: 1,
      title: 'Дарите сертификат',
      description: 'Доставка в красивой упаковке (от 2 часов) или мгновенно на email',
      image: step1Image,
      icon: Gift,
      color: 'orange'
    },
    {
      number: 2,
      title: 'Получатель выбирает глэмпинг',
      description: 'Среди 500+ локаций по всей России можно найти идеальное место для отдыха',
      image: step2Image,
      icon: Search,
      color: 'blue'
    },
    {
      number: 3,
      title: 'Глэмпинг забронирован и ждёт гостей',
      description: 'Можно отправляться на отдых и наслаждаться природой',
      image: step3Image,
      icon: MapPin,
      color: 'green'
    }
  ]

  // Вариант 1: Горизонтальные карточки с большими иллюстрациями
  const Variant1 = () => (
    <div className="w-full py-16 px-6 bg-gradient-to-b from-white via-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Как это работает?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Три простых шага до незабываемого отдыха на природе
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-200 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-xl">{step.number}</span>
              </div>

              {/* Image */}
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-amber-50">
                <ImageWithFallback
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Arrow connector (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-8 h-8 text-emerald-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all"
            onClick={onNavigateToGiftOptions}
          >
            Выбрать сертификат
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )

  // Вариант 2: Вертикальный timeline с большими изображениями слева
  const Variant2 = () => (
    <div className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Как это работает?
          </h2>
          <p className="text-xl text-gray-600">
            Путь от подарка до незабываемых впечатлений
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Image Side */}
              <div className="flex-1 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-amber-50 aspect-[4/3]">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Number overlay */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl text-emerald-600">{step.number}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full">
                  <step.icon className="w-5 h-5" />
                  <span className="text-sm">Шаг {step.number}</span>
                </div>
                <h3 className="text-3xl md:text-4xl text-gray-900">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4 text-gray-900">
              Готовы начать?
            </h3>
            <p className="text-gray-600 mb-6">
              Подарите незабываемые впечатления уже сегодня
            </p>
            <Button 
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-2xl"
              onClick={onNavigateToGiftOptions}
            >
              Выбрать сертификат
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )

  // Вариант 3: Компактный с иконками и маленькими превью
  const Variant3 = () => (
    <div className="w-full py-16 px-6 bg-gradient-to-b from-amber-50/50 via-white to-emerald-50/50">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Как это работает?
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-orange-200 via-blue-200 to-green-200" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                  {/* Number Circle */}
                  <div className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    step.color === 'orange' ? 'bg-orange-500' :
                    step.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                  } text-white shadow-lg`}>
                    <span className="text-2xl">{step.number}</span>
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-40 mb-6 rounded-2xl overflow-hidden bg-amber-50">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg mb-3 text-center text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-2xl"
            onClick={onNavigateToGiftOptions}
          >
            Выбрать сертификат
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )

  // Вариант 4: Минималистичный с акцентом на изображения
  const Variant4 = () => (
    <div className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-gray-900 text-center">
            Как это работает
          </h2>
        </motion.div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Image - alternating sides */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-amber-100 aspect-[4/3] group">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                    step.color === 'orange' ? 'bg-orange-100' :
                    step.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    <span className={`text-4xl ${
                      step.color === 'orange' ? 'text-orange-600' :
                      step.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                    }`}>
                      {step.number}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl text-gray-900">
                  {step.title}
                </h3>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {index === steps.length - 1 && (
                  <div className="pt-4">
                    <Button 
                      size="lg"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-2xl"
                      onClick={onNavigateToGiftOptions}
                    >
                      Начать выбирать
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Variant Selector */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-2xl text-gray-900">Варианты блока "Как это работает"</h1>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => setActiveVariant(num)}
                  className={`px-6 py-2 rounded-lg transition-all ${
                    activeVariant === num
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Вариант {num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Render Active Variant */}
      <div className="pt-8">
        {activeVariant === 1 && <Variant1 />}
        {activeVariant === 2 && <Variant2 />}
        {activeVariant === 3 && <Variant3 />}
        {activeVariant === 4 && <Variant4 />}
      </div>

      {/* Variant Description */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl mb-4 text-gray-900">
            {activeVariant === 1 && '📱 Вариант 1: Горизонтальные карточки'}
            {activeVariant === 2 && '📋 Вариант 2: Вертикальный timeline'}
            {activeVariant === 3 && '⚡ Вариант 3: Компактный с иконками'}
            {activeVariant === 4 && '🎨 Вариант 4: Минималистичный'}
          </h3>
          <p className="text-gray-600">
            {activeVariant === 1 && 'Классический подход с тремя карточками в ряд. Большие иллюстрации, стрелки между шагами, hover-эффекты. Идеально для десктопа.'}
            {activeVariant === 2 && 'Альтернирующиеся блоки с изображениями то слева, то справа. Создаёт динамичный поток информации, приятный для чтения.'}
            {activeVariant === 3 && 'Компактный дизайн с цветными бейджами-номерами и линией связи между шагами. Хорошо работает на всех устройствах.'}
            {activeVariant === 4 && 'Чистый минималистичный дизайн с фокусом на больших изображениях и просторе. Каждый шаг получает максимум внимания.'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksVariants