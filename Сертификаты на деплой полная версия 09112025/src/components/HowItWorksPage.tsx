import { motion } from 'motion/react'
import { Button } from './ui/button'
import { ArrowLeft, ShoppingBag, Clock, Heart, Star, CheckCircle2, MapPin, Calendar, Users, Gift, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import imgStep1 from "figma:asset/4dfccd32ae5af0dcede65e0fcd60b91d87c1af55.png"
import imgStep2 from "figma:asset/5c6c59f6aa8c5c01b8c2663f5fdf7353fc82e4e1.png"
import imgStep3 from "figma:asset/91c370a99c7e6e4aa88dbd1d52bbb76ad43c4d82.png"
// Images for Variant 2
import step1Image from 'figma:asset/473c627910d9537f1ff6b8d1db2964f79ea88c39.png'
import step2Image from 'figma:asset/bf412929b27600f04ec71124eb18e40eb9366774.png'
import step3Image from 'figma:asset/0c06a85ab403bb43c88e7bd4c6161dca48c59a1d.png'
// Certificate design images
import winterCertificate from 'figma:asset/1b038ede49cc4bd71a076dea283da6102d83a91c.png'
import lavenderCertificate from 'figma:asset/eaa25147861ce239d9e19d943d2bb9344972513e.png'
import sunsetCertificate from 'figma:asset/fb9a51260de5a817061843b770e3d65e5d7b55a5.png'
import vanCertificate from 'figma:asset/7810d8a7d4bf118cf4d79c50b97bd42ca54af713.png'
// Envelope images
import envelopeRomanticSunset from 'figma:asset/79a80dd324991daf45cd90a9f2912d78d0a8ec45.png'
import envelopeLavenderFields from 'figma:asset/4ecdb0f39700ddb61bd3ccb8acf64bca3bd0b0d8.png'
import envelopeVanAdventure from 'figma:asset/bb648890e682023fbc81607c5abc842ad9bbc3af.png'
// Gift box images
import giftBoxImage from 'figma:asset/04287b7f73e032685ba62d79514fe52a223ac325.png'
import giftBoxMountain from 'figma:asset/92ca04646725e7f39ab9d8bcb08f47961641c825.png'
import giftBoxLavender from 'figma:asset/e1779cb0f5e1a750e3a441574dc7071d3a0585f5.png'
import giftBoxVan from 'figma:asset/272b4b8040c9a5ae11a753a5cfdc6dd695e15d4b.png'
import { ExtendedGlampingSection } from './ExtendedGlampingSection'
import { SatisfiedCustomersSection } from './SatisfiedCustomersSection'
import FAQSection from './FAQSection'
import { Header } from './Header'
import Footer from './Footer'
import { useEffect, useState } from 'react'

interface HowItWorksPageProps {
  onNavigateToHome?: () => void
  onNavigateToGiftOptions?: () => void
  onNavigateToReviews?: () => void
  onNavigateToDelivery?: () => void
  onNavigateToCorporate?: () => void
  onNavigateToAbout?: () => void
  onNavigateToActivation?: () => void
  onNavigateToHowItWorks?: () => void
}

export default function HowItWorksPage({ onNavigateToHome, onNavigateToGiftOptions, onNavigateToReviews, onNavigateToDelivery, onNavigateToCorporate, onNavigateToAbout, onNavigateToActivation, onNavigateToHowItWorks }: HowItWorksPageProps) {

  // Автоматический скролл вверх при монтировании страницы
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Скролл к секции с сертификатами
  const handleScrollToCertificates = () => {
    const certificatesSection = document.getElementById('certificates-selection-section')
    if (certificatesSection) {
      certificatesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const steps = [
    {
      number: 1,
      title: 'Выберите подарочный сертификат',
      description: 'Вы выбираете тематический сертификат, количество ночей и дизайн. Получите электронный сертификат за 2 минуты или закажите доставку (от 2 часов) в фирменном конверте/упаковке.',
      image: imgStep1,
      icon: Gift,
      details: [
        'Выберите номинал от 5 000 до 100 000 ₽',
        'Выберите дизайн: электронный, конверт или премиум-упаковка',
        'Добавьте личное поздравление для получателя',
        'Оплатите и получите сертификат за 2 минуты'
      ]
    },
    {
      number: 2,
      title: 'Получатель выбирает глэмпинг из 500+ локаций',
      description: 'Обладатель сертификата самостоятельно выбирает место, даты и количество гостей в удобное время.',
      image: imgStep2,
      icon: Search,
      details: [
        'Более 500 уникальных глэмпингов по всей России',
        'От Байкала до Черного моря, от Карелии до Алтая',
        'Удобные фильтры по региону, датам и удобствам',
        'Срок действия 24 месяца — выбирайте без спешки'
      ]
    },
    {
      number: 3,
      title: 'Бронь подтверждена — отдых начинается',
      description: 'После выбора глэмпинга бронь мгновенно подтверждается, а все детали приходят получателю',
      image: imgStep3,
      icon: MapPin,
      details: [
        'Мгновенное подтверждение бронирования',
        'Все детали и инструкции на email и в SMS',
        'Круглосуточная поддержка до и во время отдыха',
        'Незабываемые впечатления гарантированы'
      ]
    }
  ]

  // Steps for Variant 2 with different images
  const stepsVariant2 = [
    {
      number: 1,
      title: 'Выберите подарочный сертификат',
      description: 'Вы выбираете тематический сертификат, количество ночей и дизайн. Получите электронный сертификат за 2 минуты или закажите доставку (от 2 часов) в фирменном конверте/упаковке',
      image: step1Image,
      icon: Gift,
      details: []
    },
    {
      number: 2,
      title: 'Получатель выбирает глэмпинг из 500+ локаций',
      description: 'Обладатель сертификата самостоятельно выбирает место, даты и количество гостей в удобное время',
      image: step2Image,
      icon: Search,
      details: [
        'Более 500 уникальных глэмпингов по всей России',
        'От Байкала до Черного моря, от Карелии до Алтая',
        'Удобные фильтры по региону, датам и удобствам',
        'Срок действия 24 месяца — выбирайте без спешки'
      ]
    },
    {
      number: 3,
      title: 'Бронь подтверждена — отдых начинается',
      description: 'После выбора глэмпинга бронь мгновенно подтверждается, а все детали приходят получателю',
      image: step3Image,
      icon: MapPin,
      details: [
        'Круглосуточная поддержка до и во время отдыха',
        'Незабываемые впечатления гарантированы'
      ]
    }
  ]

  const benefits = [
    {
      icon: Calendar,
      title: 'Срок действия 24 месяца',
      description: 'Используйте сертификат в удобное вемя без спешки',
      color: 'emerald'
    },
    {
      icon: Clock,
      title: 'Сертификат на email через 2 минуты',
      description: 'И доставка от 2-х часов курьером или в ПВЗ',
      color: 'blue'
    },
    {
      icon: Star,
      title: 'Персональная поддержка',
      description: 'Поможем с выбором и ответим на любые вопросы',
      color: 'amber'
    }
  ]

  const statistics = [
    { value: '15 000+', label: 'Довольных клиентов' },
    { value: '4.9', label: 'Средняя оценка', hasStarIcon: true },
    { value: '98%', label: 'Рекомендуют друзьям' }
  ]

  const colorClasses = {
    emerald: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100',
    blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
    pink: 'bg-pink-50 text-pink-600 hover:bg-pink-100',
    amber: 'bg-amber-50 text-amber-600 hover:bg-amber-100'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white">
      {/* Header */}
      <Header
        onNavigateToHome={onNavigateToHome}
        onNavigateToGiftOptions={onNavigateToGiftOptions}
        onNavigateToDelivery={onNavigateToDelivery}
        onNavigateToCorporate={onNavigateToCorporate}
        onNavigateToReviews={onNavigateToReviews}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToActivation={onNavigateToActivation}
        onNavigateToHowItWorks={onNavigateToHowItWorks}
      />

      {/* Вариант 2: Вертикальный timeline с большими изображениями слева */}
      <section className="w-full py-16 px-6 bg-white">
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
            {stepsVariant2.map((step, index) => (
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
                  
                  {/* Кнопка для Шага 1 */}
                  {step.number === 1 && (
                    <div className="mt-6">
                      <button
                        onClick={handleScrollToCertificates}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                      >
                        Выбрать сертификат
                      </button>
                    </div>
                  )}
                  
                  {/* Details checklist */}
                  {step.details && step.details.length > 0 && (
                    <div className="mt-6 space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Выберите подарочный сертификат */}
      <ExtendedGlampingSection />

      {/* Варианты оформления подарочного сертификата */}
      <PackagingCTASection />

      {/* Statistics Section - 3 Cards */}
      <section className="py-16 bg-emerald-50/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="text-4xl text-emerald-600">{stat.value}</span>
                  {stat.hasStarIcon && <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 text-gray-900">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы делаем процесс покупки и использования сертификатов максимально простым и приятным
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl ${colorClasses[benefit.color as keyof typeof colorClasses]} transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                <div className="mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl mb-3">{benefit.title}</h3>
                <p className="text-sm opacity-90">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Довольные покупатели */}
      <SatisfiedCustomersSection />

      {/* FAQ Section */}
      <FAQSection 
        onNavigateToHowItWorks={onNavigateToHowItWorks} 
        isOnHowItWorksPage={true}
      />

      {/* Footer */}
      <Footer
        onNavigateToHome={onNavigateToHome}
        onNavigateToGiftOptions={onNavigateToGiftOptions}
        onNavigateToDelivery={onNavigateToDelivery}
        onNavigateToCorporate={onNavigateToCorporate}
        onNavigateToReviews={onNavigateToReviews}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToActivation={onNavigateToActivation}
        onNavigateToHowItWorks={onNavigateToHowItWorks}
      />
    </div>
  )
}

// Подарочная упаковка с реальными изображениями
const packagingOptions = [
  { id: 'premium', name: 'Премиальная коробка ручной работы', image: giftBoxImage },
  { id: 'premium-mountain', name: 'Премиум коробка с горным пейзажем', image: giftBoxMountain },
  { id: 'premium-lavender', name: 'Премиум коробка с лавандовыми полями', image: giftBoxLavender },
  { id: 'premium-van', name: 'Премиум коробка с фургон-приключением', image: giftBoxVan }
]

// Фирменные конверты с реальными изображениями
const envelopeOptions = [
  { id: 'sunset', name: 'Романтический закат', image: envelopeRomanticSunset },
  { id: 'lavender', name: 'Лавандовые поля', image: envelopeLavenderFields },
  { id: 'van', name: 'Путешествие на фургоне', image: envelopeVanAdventure }
]

const certificateDesigns = [
  { id: 'winter', name: 'Зимняя сказка', image: winterCertificate },
  { id: 'sunset', name: 'Романтический закат', image: sunsetCertificate },
  { id: 'lavender', name: 'Лавандовые поля', image: lavenderCertificate },
  { id: 'van', name: 'Путешествие на фургоне', image: vanCertificate }
]

function PackagingCTASection() {
  const [currentPackaging, setCurrentPackaging] = useState(0)
  const [currentEnvelope, setCurrentEnvelope] = useState(0)
  const [currentCertificate, setCurrentCertificate] = useState(0)
  
  // Состояния для управления паузой автопрокрутки
  const [isPackagingPaused, setIsPackagingPaused] = useState(false)
  const [isEnvelopePaused, setIsEnvelopePaused] = useState(false)
  const [isCertificatePaused, setIsCertificatePaused] = useState(false)

  // Автопрокрутка для упаковки
  useEffect(() => {
    if (isPackagingPaused) return
    
    const interval = setInterval(() => {
      setCurrentPackaging((prev) => (prev + 1) % packagingOptions.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isPackagingPaused])

  // Автопрокрутка для конвертов
  useEffect(() => {
    if (isEnvelopePaused) return
    
    const interval = setInterval(() => {
      setCurrentEnvelope((prev) => (prev + 1) % envelopeOptions.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isEnvelopePaused])

  // Автопрокрутка для сертификатов
  useEffect(() => {
    if (isCertificatePaused) return
    
    const interval = setInterval(() => {
      setCurrentCertificate((prev) => (prev + 1) % certificateDesigns.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isCertificatePaused])

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* Заголовок секции в обычном контейнере */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-10 h-10 text-purple-600 mr-3" />
            <h2 className="text-3xl text-gray-900">
              Варианты оформления подарочного сертификата
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Познакомьтесь с нашими вариантами упаковки
          </p>
        </div>
      </div>

      {/* Карточки в full-width контейнере на мобильных */}
      <div className="lg:max-w-7xl lg:mx-auto">
        <div className="flex gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 px-4 lg:px-0">
          
          {/* КАРТОЧКА 1: Электронный сертификат */}
          <div 
            className="group relative bg-white rounded-2xl shadow-xl border-2 border-emerald-100 overflow-hidden transition-all hover:shadow-2xl hover:scale-[1.02] lg:hover:scale-[1.10] p-6 flex-shrink-0 w-[92vw] lg:flex-1 lg:w-auto snap-center"
            onMouseEnter={() => setIsCertificatePaused(true)}
            onMouseLeave={() => setIsCertificatePaused(false)}
          >
            <div className="flex flex-col h-full">
              {/* Верхняя часть - инфо */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="text-5xl mb-3">📱</div>
                <h3 className="text-xl text-gray-900 mb-2">
                  Электронный сертификат
                </h3>
                <p className="text-sm text-gray-600">
                  Приходит на почту сразу после оплаты
                </p>
              </div>
              
              {/* Нижняя часть - карусель */}
              <div className="flex-1 relative flex flex-col justify-center">
                {/* Главное изображение */}
                <div className="w-full aspect-square rounded-xl overflow-hidden border-2 border-gray-200 transition-all max-w-sm mx-auto p-3 bg-gray-50">
                  <img
                    src={certificateDesigns[currentCertificate].image}
                    alt={certificateDesigns[currentCertificate].name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Название текущего варианта */}
                <p className="text-sm text-gray-700 mt-4 text-center font-medium">
                  {certificateDesigns[currentCertificate].name}
                </p>
                
                {/* Навигация - видна только при hover */}
                <button
                  onClick={() => setCurrentCertificate((prev) => (prev - 1 + certificateDesigns.length) % certificateDesigns.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition-all shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100"
                  aria-label="Предыдущий дизайн"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentCertificate((prev) => (prev + 1) % certificateDesigns.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition-all shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100"
                  aria-label="Следующий дизайн"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                {/* Точки индикаторы - видны только при hover */}
                <div className="flex justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {certificateDesigns.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentCertificate(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentCertificate 
                          ? 'bg-emerald-600 w-6' 
                          : 'bg-gray-300 hover:bg-gray-400 w-2'
                      }`}
                      aria-label={`Перейт�� к варианту ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* КАРТОЧКА 2: Фирменный конверт */}
          <div 
            className="group relative bg-white rounded-2xl shadow-xl border-2 border-amber-100 overflow-hidden transition-all hover:shadow-2xl hover:scale-[1.02] lg:hover:scale-[1.10] p-6 flex-shrink-0 w-[92vw] lg:flex-1 lg:w-auto snap-center"
            onMouseEnter={() => setIsEnvelopePaused(true)}
            onMouseLeave={() => setIsEnvelopePaused(false)}
          >
            <div className="flex flex-col h-full">
              {/* Верхняя часть - инфо */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="text-5xl mb-3">✉️</div>
                <h3 className="text-xl text-gray-900 mb-2">
                  Фирменный конверт
                </h3>
                <p className="text-sm text-gray-600">
                  Аккуратная доставка в стильном фирменном конверте
                </p>
              </div>
              
              {/* Нижняя часть - карусель */}
              <div className="flex-1 relative flex flex-col justify-center">
                {/* Главное изображение */}
                <div className="w-full aspect-square rounded-xl overflow-hidden border-2 border-gray-200 transition-all max-w-sm mx-auto p-3 bg-gray-50">
                  <ImageWithFallback
                    src={envelopeOptions[currentEnvelope].image}
                    alt={envelopeOptions[currentEnvelope].name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Название текущего варианта */}
                <p className="text-sm text-gray-700 mt-4 text-center font-medium">
                  {envelopeOptions[currentEnvelope].name}
                </p>
                
                {/* Навигация - видна только при hover */}
                <button
                  onClick={() => setCurrentEnvelope((prev) => (prev - 1 + envelopeOptions.length) % envelopeOptions.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-50 transition-all shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100"
                  aria-label="Предыдущий конверт"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentEnvelope((prev) => (prev + 1) % envelopeOptions.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-50 transition-all shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100"
                  aria-label="Следующий конверт"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                {/* Точки индикаторы - видны только при hover */}
                <div className="flex justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {envelopeOptions.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentEnvelope(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentEnvelope 
                          ? 'bg-amber-600 w-6' 
                          : 'bg-gray-300 hover:bg-gray-400 w-2'
                      }`}
                      aria-label={`Перейти к конверту ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* КАРТОЧКА 3: Подарочная упаковка */}
          <div 
            className="group relative bg-white rounded-2xl shadow-xl border-2 border-purple-100 overflow-hidden transition-all hover:shadow-2xl hover:scale-[1.02] lg:hover:scale-[1.10] p-6 flex-shrink-0 w-[92vw] lg:flex-1 lg:w-auto snap-center"
            onMouseEnter={() => setIsPackagingPaused(true)}
            onMouseLeave={() => setIsPackagingPaused(false)}
          >
            <div className="flex flex-col h-full">
              {/* Верхняя часть - инфо */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="text-5xl mb-3">🎁</div>
                <h3 className="text-xl text-gray-900 mb-2">
                  Коробка ручной работы
                </h3>
                <p className="text-sm text-gray-600">
                  Восторг гарантирован еще до того, как получатель заглянет внутрь
                </p>
              </div>
              
              {/* Нижняя часть - карусель упаковки */}
              <div className="flex-1 relative flex flex-col justify-center">
                {/* Главное изображение */}
                <div className="w-full aspect-square rounded-xl overflow-hidden border-2 border-gray-200 transition-all max-w-sm mx-auto p-3 bg-gray-50">
                  <ImageWithFallback
                    src={packagingOptions[currentPackaging].image}
                    alt={packagingOptions[currentPackaging].name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Название текущего варианта */}
                <p className="text-sm text-gray-700 mt-4 text-center font-medium">
                  {packagingOptions[currentPackaging].name}
                </p>
                
                {/* Навигация - видна только при hover */}
                <button
                  onClick={() => setCurrentPackaging((prev) => (prev - 1 + packagingOptions.length) % packagingOptions.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-purple-500 text-purple-600 hover:bg-purple-50 transition-all shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100"
                  aria-label="Предыдущая упаковка"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentPackaging((prev) => (prev + 1) % packagingOptions.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-purple-500 text-purple-600 hover:bg-purple-50 transition-all shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100"
                  aria-label="Следующая упаковка"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                {/* Точки индикаторы - видны только при hover */}
                <div className="flex justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {packagingOptions.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPackaging(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentPackaging 
                          ? 'bg-purple-600 w-6' 
                          : 'bg-gray-300 hover:bg-gray-400 w-2'
                      }`}
                      aria-label={`Перейти к упаковке ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}