import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight, CheckCircle, Briefcase, Users, BarChart3, Sparkles, FileText, TrendingUp } from 'lucide-react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { FoxGivingGift, FoxChoosing, FoxBooking, FoxInGlamping } from './FoxIllustrations'
import step1Image from 'figma:asset/473c627910d9537f1ff6b8d1db2964f79ea88c39.png'
import step2Image from 'figma:asset/bf412929b27600f04ec71124eb18e40eb9366774.png'
import step3Image from 'figma:asset/0c06a85ab403bb43c88e7bd4c6161dca48c59a1d.png'

interface HowItWorksB2BVariantsProps {
  variant: 'current' | 'images' | 'minimal' | 'timeline' | 'numbered' | 'roi-focused'
  onCTA?: () => void
}

export function HowItWorksB2BVariants({ variant, onCTA }: HowItWorksB2BVariantsProps) {
  // Current variant with Fox illustrations (4 steps)
  const hrSteps = [
    {
      number: "01",
      title: "Вы дарите сертификат",
      description: "Вы выбираете пакет и количество. Юридическое оформление и оплата счета занимает 1 день",
      illustration: <FoxGivingGift />
    },
    {
      number: "02", 
      title: "Получатель выбирает сам",
      description: "Сотрудник самостоятельно выбирает локацию, дату и удобный формат отдыха из 500+ глэмпингов",
      illustration: <FoxChoosing />
    },
    {
      number: "03",
      title: "Мы предоставляем отчетность", 
      description: "Вы получаете доступ к Личному кабинету HR, где видите: сколько сертификатов активировано, сколько использовано и кому нужно напомнить об отдыхе",
      illustration: <FoxBooking />
    },
    {
      number: "04",
      title: "Глэмпинг встречает гостей",
      description: "Сотрудники укрепляют ментальное здоровье и возвращаются с новой энергией для работы",
      illustration: <FoxInGlamping />
    }
  ]

  // Image-based variant (4 steps)
  const imageSteps = [
    {
      number: 1,
      title: 'Выберите корпоративный пакет',
      description: 'Готовые решения для команд от 10 до 500+ сотрудников с гибкими условиями',
      image: step1Image,
    },
    {
      number: 2,
      title: 'Персонализируйте сертификаты',
      description: 'Добавьте логотип компании и персональное обращение к каждому сертификату',
      image: step2Image,
    },
    {
      number: 3,
      title: 'Сотрудники выбирают глэмпинг',
      description: 'Среди 500+ локаций по всей России можно найти идеальное место для отдыха',
      image: step3Image,
    },
    {
      number: 4,
      title: 'Отслеживайте использование',
      description: 'Получайте детальную аналитику и отчетность по использованию сертификатов',
      image: 'https://images.unsplash.com/photo-1690120634477-b83d4ca63ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMG5hdHVyZSUyMHJlbGF4fGVufDF8fHx8MTc2MTc0NjgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    }
  ]

  // Minimal icon-based variant
  const minimalSteps = [
    {
      icon: <Briefcase className="w-10 h-10 text-emerald-600" />,
      title: 'Выберите пакет',
      description: 'Готовые решения или персональное предложение'
    },
    {
      icon: <Sparkles className="w-10 h-10 text-emerald-600" />,
      title: 'Персонализируйте',
      description: 'Логотип и брендинг компании'
    },
    {
      icon: <Users className="w-10 h-10 text-emerald-600" />,
      title: 'Команда выбирает',
      description: '500+ локаций по всей России'
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-emerald-600" />,
      title: 'Получайте отчеты',
      description: 'Детальная аналитика использования'
    }
  ]

  // Timeline variant
  const timelineSteps = [
    {
      step: '1',
      title: 'Консультация и выбор',
      description: 'Подберем оптимальный пакет для вашей команды',
      duration: '1 день'
    },
    {
      step: '2',
      title: 'Оформление и персонализация',
      description: 'Добавим брендинг и подготовим сертификаты',
      duration: '1-2 дня'
    },
    {
      step: '3',
      title: 'Доставка и активация',
      description: 'Доставим сертификаты и предоставим доступ к ЛК',
      duration: 'От 2 часов'
    },
    {
      step: '4',
      title: 'Отчетность и поддержка',
      description: 'Следим за использованием и помогаем команде',
      duration: 'Постоянно'
    }
  ]

  if (variant === 'current') {
    return (
      <section className="py-12 lg:py-20 bg-gradient-to-b from-white via-emerald-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 lg:mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Как это работает?
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Четыре простых шага до корпоративного Well-being решения
            </motion.p>
          </div>

          {/* Desktop: Grid (4 columns) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {hrSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 relative group hover:-translate-y-2 border-2 border-emerald-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6 flex justify-center items-center">
                  {step.illustration}
                </div>
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-lg font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                
                {/* Стрелка между шагами */}
                {index < hrSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-emerald-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-6 px-6 pb-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {hrSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-3xl shadow-lg border-2 border-emerald-100 w-[280px] flex-shrink-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="mb-4 scale-90 flex justify-center items-center">
                    {step.illustration}
                  </div>
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-lg font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
            {/* Scroll indicator для mobile */}
            <div className="flex justify-center gap-2 mt-6">
              {hrSteps.map((_, index) => (
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

  if (variant === 'images') {
    return (
      <section className="py-12 lg:py-20 bg-gradient-to-b from-white via-amber-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 lg:mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Как это работает?
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Четыре простых шага до незабываемого корпоративного отдыха
            </motion.p>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {imageSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-200 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-xl font-bold">{step.number}</span>
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
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connector (except last) */}
                {index < imageSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-emerald-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-6 px-6 pb-4 scrollbar-hide mb-8">
            <div className="flex gap-4 min-w-max">
              {imageSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100 w-[280px] flex-shrink-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Number Badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-40 mb-4 rounded-2xl overflow-hidden bg-amber-50">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
            {/* Scroll indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {imageSteps.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-emerald-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          {onCTA && (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all"
                onClick={onCTA}
              >
                Получить спецпредложение
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    )
  }

  if (variant === 'minimal') {
    return (
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 lg:mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Как это работает?
            </motion.h2>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {minimalSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-6 px-6 pb-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {minimalSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white w-[240px] flex-shrink-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    {step.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {minimalSteps.map((_, index) => (
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

  if (variant === 'timeline') {
    return (
      <section className="py-12 lg:py-20 bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 lg:mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Как это работает?
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              От заявки до первого отчета
            </motion.p>
          </div>

          {/* Desktop: Timeline */}
          <div className="hidden md:block relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-emerald-200" />
            
            <div className="grid grid-cols-4 gap-8 relative">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10">
                    {step.step}
                  </div>
                  
                  <div className="pt-24 bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-emerald-200 transition-all duration-300">
                    <div className="text-emerald-600 font-semibold text-sm mb-2">{step.duration}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-6 px-6 pb-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max pb-8">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative w-[260px] flex-shrink-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                    <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg mb-4">
                      {step.step}
                    </div>
                    <div className="text-emerald-600 font-semibold text-sm mb-2">{step.duration}</div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  
                  {/* Arrow */}
                  {index < timelineSteps.length - 1 && (
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-emerald-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-2">
              {timelineSteps.map((_, index) => (
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

  // Numbered Cards Variant - крупные номера
  if (variant === 'numbered') {
    const numberedSteps = [
      {
        number: '01',
        title: 'Выберите пакет',
        description: 'Готовые решения для команд от 10 до 500+ сотрудников. Или создайте индивидуальное предложение с персональным менеджером.',
        icon: <Briefcase className="w-8 h-8 text-white" />
      },
      {
        number: '02',
        title: 'Персонализация',
        description: 'Добавьте логотип компании, брендинг и персональное обращение. Каждый сертификат — уникальный.',
        icon: <Sparkles className="w-8 h-8 text-white" />
      },
      {
        number: '03',
        title: 'Команда выбирает',
        description: '500+ локаций глэмпингов по всей России. Сотрудники сами выбирают место и дату отдыха.',
        icon: <Users className="w-8 h-8 text-white" />
      },
      {
        number: '04',
        title: 'HR-аналитика',
        description: 'Получайте детальную отчетность: кто активировал, кто отдохнул, кому напомнить. Полный контроль.',
        icon: <BarChart3 className="w-8 h-8 text-white" />
      }
    ]

    return (
      <section className="py-12 lg:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 lg:mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Как это работает?
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Четыре шага до счастливой команды
            </motion.p>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {numberedSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-gray-100 hover:border-emerald-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Огромный номер на фоне */}
                <div className="absolute top-4 right-4 text-[120px] font-bold text-emerald-50 leading-none select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="relative z-10 text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-6 px-6 pb-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {numberedSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-100 w-[280px] flex-shrink-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Огромный номер на фоне */}
                  <div className="absolute top-2 right-2 text-[100px] font-bold text-emerald-50 leading-none select-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    {step.icon}
                  </div>

                  <h3 className="relative z-10 text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="relative z-10 text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {numberedSteps.map((_, index) => (
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

  // ROI-Focused Variant - акцент на бизнес-результаты
  if (variant === 'roi-focused') {
    const roiSteps = [
      {
        step: '1',
        title: 'Консультация',
        metric: 'За 1 день',
        description: 'Персональный менеджер подберёт оптимальный пакет и рассчитает ROI для вашей команды',
        result: 'Экономия до 30%',
        icon: <Users className="w-6 h-6 text-emerald-600" />
      },
      {
        step: '2',
        title: 'Оформление',
        metric: 'За 2-3 дня',
        description: 'Юридическое оформление, персонализация с логотипом и подготовка сертификатов',
        result: '0 рутины для HR',
        icon: <FileText className="w-6 h-6 text-emerald-600" />
      },
      {
        step: '3',
        title: 'Активация',
        metric: 'Мгновенно',
        description: 'Электронная доставка сертификатов и доступ к личному кабинету для отслеживания',
        result: '100% контроль',
        icon: <Sparkles className="w-6 h-6 text-emerald-600" />
      },
      {
        step: '4',
        title: 'Результат',
        metric: 'Через 1-3 мес.',
        description: 'Сотрудники отдыхают, вы получаете отчётность и измеряете влияние на продуктивность',
        result: '↑17% retention',
        icon: <TrendingUp className="w-6 h-6 text-emerald-600" />
      }
    ]

    return (
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 lg:mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Как это работает?
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              От заявки до измеримых бизнес-результатов
            </motion.p>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-emerald-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-emerald-100">
                    {step.icon}
                  </div>
                  <div className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                    {step.metric}
                  </div>
                </div>

                {/* Title with number */}
                <div className="mb-3">
                  <span className="text-sm text-gray-500 font-medium">Шаг {step.step}</span>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Result badge */}
                <div className="pt-4 border-t border-emerald-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-emerald-700">{step.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-6 px-6 pb-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {roiSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 shadow-lg border-2 border-emerald-100 w-[280px] flex-shrink-0"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md border border-emerald-100">
                      {step.icon}
                    </div>
                    <div className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                      {step.metric}
                    </div>
                  </div>

                  {/* Title with number */}
                  <div className="mb-3">
                    <span className="text-xs text-gray-500 font-medium">Шаг {step.step}</span>
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Result badge */}
                  <div className="pt-4 border-t border-emerald-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-semibold text-emerald-700">{step.result}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {roiSteps.map((_, index) => (
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

  return null
}

export default HowItWorksB2BVariants
