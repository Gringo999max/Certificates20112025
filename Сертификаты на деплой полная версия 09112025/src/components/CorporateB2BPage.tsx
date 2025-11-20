import React, { useState, useCallback, useEffect } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { TypewriterText } from './TypewriterText'
import { RotatingRecipient } from './RotatingRecipient'
import { FoxGivingGift, FoxChoosing, FoxBooking, FoxInGlamping } from './FoxIllustrations'
import { CorporateGiftReasonsSection } from './CorporateGiftReasonsSection'
import { CorporateGiftReasonsSectionVariant2 } from './CorporateGiftReasonsSectionVariants'
import { CorporateQuizSection } from './CorporateQuizSection'
import { HRDashboardTrackingSection } from './HRDashboardTrackingSection'
import { BusinessResultsSection } from './BusinessResultsSection'
import { Header } from './Header'
import Footer from './Footer'
import { 
  Building2, CheckCircle, ArrowRight, TrendingUp, Users, 
  Heart, Shield, Zap, Award, BarChart3, Clock, Sparkles,
  FileText, Briefcase, Target, Phone, Mail, AlertCircle, ChevronRight
} from 'lucide-react'
import { motion } from 'motion/react'
import { CertificateVariant3 } from './B2BCertificateHeroVariants'
import { FallingSnowflakes, ChristmasGarland } from './NewYearDecorations'
import { NewYearPromoVariant1 } from './NewYearPromoVariants'
import { CorporateRequestFormModal } from './CorporateRequestFormModal'
import { RegionsSection } from './RegionsSection'
import { ChevronLeft, Gift, Star, Quote, ThumbsUp, MessageCircle, ChevronDown } from 'lucide-react'
import { Badge } from './ui/badge'
import { Variant2 } from './B2BPackagesByPriceV2Variants'

// Импорт изображений для блока "Как это работает?"
import step1Image from 'figma:asset/473c627910d9537f1ff6b8d1db2964f79ea88c39.png'
import step2Image from 'figma:asset/bf412929b27600f04ec71124eb18e40eb9366774.png'
import step3Image from 'figma:asset/0c06a85ab403bb43c88e7bd4c6161dca48c59a1d.png'

// Импорт изображений сертификатов для блока упаковки
import winterCertificate from 'figma:asset/1b038ede49cc4bd71a076dea283da6102d83a91c.png'
import lavenderCertificate from 'figma:asset/eaa25147861ce239d9e19d943d2bb9344972513e.png'
import sunsetCertificate from 'figma:asset/fb9a51260de5a817061843b770e3d65e5d7b55a5.png'
import vanCertificate from 'figma:asset/7810d8a7d4bf118cf4d79c50b97bd42ca54af713.png'

// Импорты изображений фирменных конвертов
import envelopeForestDome from 'figma:asset/a46a95fc611af71a5067207e0b3e7d423353d1a7.png'
import envelopeRomanticSunset from 'figma:asset/79a80dd324991daf45cd90a9f2912d78d0a8ec45.png'
import envelopeLavenderFields from 'figma:asset/4ecdb0f39700ddb61bd3ccb8acf64bca3bd0b0d8.png'
import envelopeVanAdventure from 'figma:asset/bb648890e682023fbc81607c5abc842ad9bbc3af.png'

// Импорт изображений подарочной упаковки
import giftBoxImage from 'figma:asset/04287b7f73e032685ba62d79514fe52a223ac325.png'
import giftBoxMountain from 'figma:asset/92ca04646725e7f39ab9d8bcb08f47961641c825.png'
import giftBoxLavender from 'figma:asset/e1779cb0f5e1a750e3a441574dc7071d3a0585f5.png'
import giftBoxVan from 'figma:asset/272b4b8040c9a5ae11a753a5cfdc6dd695e15d4b.png'

// Функция для форматирования телефонного номера
function formatPhoneNumber(input: string): string {
  const numbers = input.replace(/\D/g, '')
  
  if (numbers.length === 0) {
    return '+7'
  }
  
  let cleanNumbers = numbers.startsWith('8') ? '7' + numbers.slice(1) : numbers
  
  if (cleanNumbers.startsWith('7')) {
    cleanNumbers = cleanNumbers.slice(1)
  }
  
  cleanNumbers = cleanNumbers.slice(0, 10)
  
  if (cleanNumbers.length === 0) {
    return '+7'
  }
  
  let formatted = '+7 ('
  formatted += cleanNumbers.slice(0, 3)
  
  if (cleanNumbers.length > 3) {
    formatted += ') ' + cleanNumbers.slice(3, 6)
  }
  
  if (cleanNumbers.length > 6) {
    formatted += '-' + cleanNumbers.slice(6, 8)
  }
  
  if (cleanNumbers.length > 8) {
    formatted += '-' + cleanNumbers.slice(8, 10)
  }
  
  return formatted
}

// Подарочная упаковка с реальными изображениями
const packagingOptions = [
  { id: 'premium', name: 'Премиальная коробка ручной работы', image: giftBoxImage },
  { id: 'premium-mountain', name: 'Премиум коробка с горным пейзажем', image: giftBoxMountain },
  { id: 'premium-lavender', name: 'Премиум коробка с лавандовыми полями', image: giftBoxLavender },
  { id: 'premium-van', name: 'Премиум коробка с фургон-приключением', image: giftBoxVan }
]

const envelopeOptions = [
  { id: 'forest-dome', name: 'Домик в лесу', image: envelopeForestDome },
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

// Корпоративные отзывы (скопировано из ReviewsPage)
const corporateReviews = [
  {
    id: 7,
    username: "@travel_marina",
    name: "Марина Путешественница",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcmVkJTIwaGFpcnxlbnwxfHx8fDE3NTgwMjQ5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    photo: "https://images.unsplash.com/photo-1584068921546-2d799f7aaf1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB2YWNhdGlvbiUyMG5hdHVyZSUyMGNhbXBpbmd8ZW58MXx8fHwxNzYwODU1MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Купили для всей команды после успешного проекта. Все в восторге! Удобно, что каждый сам выбирает локацию и даты. Корпоративный подарок года! 🎉",
    rating: 5,
    date: "25 сентября 2025",
    category: 'corporate'
  },
  {
    id: 8,
    username: "@dmitry_ceo",
    name: "Дмитрий Руководитель",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzU4MDI0OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    photo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwY2FiaW4lMjBuYXR1cmUlMjByZWxheHxlbnwxfHx8fDE3NTgwMjU0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Наша компания заказала 20 сертификатов на Новый год. Прекрасная упаковка, быстрая доставка, индивидуальный подход. Все сотрудники довольны! Будем заказывать ещё.",
    rating: 5,
    date: "20 сентября 2025",
    category: 'corporate'
  },
  {
    id: 14,
    username: "@anna_hr_manager",
    name: "Анна HR-менеджер",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU4MDI0OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    photo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBvdXRkb29yfGVufDF8fHx8MTc1ODAyNTQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Заказываем сертификаты для наших лучших сотрудников уже второй год подряд. Это действительно мотивирует команду! Все довольны 🎁",
    rating: 5,
    date: "1 сентября 2025",
    category: 'corporate'
  }
]

// Partner logos
import nornickelLogo from 'figma:asset/4c8b6db05c932cfffc985522af051f14decfbd9b.png'
import severstalLogo from 'figma:asset/2c94ccc2413274e45d27396820e5564643720681.png'
import cianLogo from 'figma:asset/5a68e50dcca847af7365add8cb07b18810f77a5e.png'
import tochkaLogo from 'figma:asset/f17565d382dbb15e5064f07be3f3e72246b10bf0.png'

interface CorporateB2BPageProps {
  onNavigateToHome: () => void
  onNavigateToGiftOptions: () => void
  onNavigateToDelivery: () => void
  onNavigateToCorporate: () => void
  onNavigateToReviews: () => void
  onNavigateToAbout: () => void
  onNavigateToActivation?: () => void
  onNavigateToHowItWorks?: () => void
  onNavigateToHRDashboard?: () => void
}

// Компонент "Корпоративные отзывы" (скопировано из ReviewsPage)
function CorporateReviewsSection() {
  const [visibleReviews, setVisibleReviews] = useState(3)

  const displayedReviews = corporateReviews.slice(0, visibleReviews)

  const loadMore = () => {
    setVisibleReviews(prev => Math.min(prev + 3, corporateReviews.length))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200">
            <MessageCircle className="w-4 h-4 mr-2" />
            Корпоративные (3)
          </Badge>
          <h2 className="text-4xl text-gray-900 mb-4">
            Что говорят компании
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Реальные отзывы HR-менеджеров и руководителей о корпоративных подарках
          </p>
        </div>

        {/* Сетка отзывов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={review.photo}
                  alt={`Фото отзыва ${review.username}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Корпоратив
                  </Badge>
                </div>

                {/* Quote Icon Overlay */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {review.text}
                </p>
                
                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={review.avatar}
                        alt={review.username}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.username}</p>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-400">
                    {review.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleReviews < corporateReviews.length && (
          <div className="text-center mt-12">
            <Button
              onClick={loadMore}
              variant="outline"
              className="bg-white hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 px-8 py-3"
            >
              <ChevronDown className="w-4 h-4 mr-2" />
              Загрузить ещё отзывы
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

// Компонент "Варианты оформления подарочного сертификата" (скопировано из PetFriendlyGlampingPage)
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
                  <ImageWithFallback
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
                      aria-label={`Перейти к дизайну ${idx + 1}`}
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

export function CorporateB2BPage({ 
  onNavigateToHome, 
  onNavigateToGiftOptions, 
  onNavigateToDelivery, 
  onNavigateToCorporate, 
  onNavigateToReviews, 
  onNavigateToAbout, 
  onNavigateToActivation,
  onNavigateToHowItWorks,
  onNavigateToHRDashboard
}: CorporateB2BPageProps) {

  // Состояние модального окна формы заявки
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  

  // Состояние формы заявки
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '+7',
    employees: '',
    message: ''
  })
  
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Валидация формы
  const validateForm = useCallback(() => {
    const errors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Заполните обязательное поле'
    }
    
    if (!formData.company.trim()) {
      errors.company = 'Заполните обязательное поле'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Заполните обязательное поле'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Введите корректный email адрес'
    }
    
    if (!formData.phone.trim() || formData.phone.trim() === '+7') {
      errors.phone = 'Заполните обязательное поле'
    } else if (formData.phone.replace(/\D/g, '').length !== 11) {
      errors.phone = 'Номер должен содержать 10 цифр'
    }
    
    return errors
  }, [formData])

  // Обработчик изменения поля
  const handleInputChange = useCallback((field: string, value: any) => {
    let finalValue = value
    if (field === 'phone') {
      finalValue = formatPhoneNumber(value)
    }
    
    setFormData(prev => ({ ...prev, [field]: finalValue }))
    
    // Очищаем ошибку для этого поля при изменении
    if (formErrors[field]) {
      setFormErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }, [formErrors])

  // Обработчик отправки формы
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setSubmitAttempted(true)
    
    const errors = validateForm()
    setFormErrors(errors)
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true)
      
      setTimeout(() => {
        console.log('Form submitted:', formData)
        setIsSubmitting(false)
        setSubmitSuccess(true)
        
        setTimeout(() => {
          setSubmitSuccess(false)
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '+7',
            employees: '',
            message: ''
          })
          setSubmitAttempted(false)
        }, 3000)
      }, 1500)
    }
  }, [formData, validateForm])

  // Функции навигации
  const openFormModal = () => {
    setIsFormModalOpen(true)
  }

  const scrollToPackages = () => {
    const packagesSection = document.getElementById('b2b-wellbeing-packages-emotional')
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // HR-процесс
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

  // B2B пакеты
  const b2bPackages = [
    {
      name: "Базовый Well-being",
      price: "От 15 000 ₽",
      perPerson: "/ чел.",
      offer: "Выходные в глэмпинге 2 ночи",
      features: [
        "Более 300 базовых локаций",
        "Самостоятельное бронирование",
        "Электронная доставка",
        "Срок действия 12 месяцев"
      ],
      icon: <Sparkles className="w-8 h-8" />,
      gradient: "from-emerald-50 to-teal-50"
    },
    {
      name: "Расширенный Комфорт",
      price: "От 25 000 ₽",
      perPerson: "/ чел.",
      offer: "Отдых 2 ночи с питанием / SPA-услугами",
      features: [
        "Более 400 премиум локаций",
        "Питание включено",
        "SPA-услуги и активности",
        "Приоритетная поддержка"
      ],
      icon: <Award className="w-8 h-8" />,
      gradient: "from-teal-50 to-cyan-50",
      popular: true
    },
    {
      name: "Премиум Перезагрузка",
      price: "От 40 000 ₽",
      perPerson: "/ чел.",
      offer: "Длинный уикенд 3 ночи + баня/чан",
      features: [
        "Топ-100 эксклюзивных локаций",
        "Полный пансион + баня",
        "Индивидуальный трансфер",
        "Персональный консьерж"
      ],
      icon: <Target className="w-8 h-8" />,
      gradient: "from-cyan-50 to-blue-50"
    },
    {
      name: "Универсальный Номинал",
      price: "Любая сумма",
      perPerson: "от 1 000 ₽",
      offer: "Полный контроль бюджета",
      features: [
        "Гибкий бюджет под задачи",
        "Все 500+ локаций",
        "Комбинирование услуг",
        "Максимальная свобода выбора"
      ],
      icon: <Briefcase className="w-8 h-8" />,
      gradient: "from-blue-50 to-indigo-50"
    }
  ]



  return (
    <div className="min-h-screen bg-white">
      {/* 🎄 Новогодние декорации */}
      <FallingSnowflakes count={25} speed="normal" />
      <ChristmasGarland />
      
      {/* Fixed Back Button for debugging */}
      <button
        onClick={onNavigateToHome}
        className="fixed top-4 left-4 z-[100] bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl flex items-center gap-2"
        title="Вернуться на главную"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="hidden sm:inline">Главная</span>
      </button>
      
      {/* Header */}
      <Header 
        onNavigateToHome={onNavigateToHome}
        onNavigateToGiftOptions={onNavigateToGiftOptions}
        onNavigateToDelivery={onNavigateToDelivery}
        onNavigateToCorporate={onNavigateToCorporate}
        onNavigateToReviews={onNavigateToReviews}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToActivation={onNavigateToActivation}
      />

      {/* 🎅 Новогодний промо-блок "Зимняя Сказка" */}
      <NewYearPromoVariant1 onRequestClick={openFormModal} />

      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 lg:py-24 overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 text-emerald-700 px-4 py-2 rounded-full mb-3 lg:mb-6 shadow-sm">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">B2B Well-being Решение</span>
              </div>
              
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 lg:mb-6 leading-tight">
                Подарите{' '}
                <span className="text-[rgba(108,123,115,0.98)] text-lg md:text-4xl lg:text-5xl">
                  сотрудникам, клиентам и партнёрам
                </span>
                {' '}не отдых, а
                <br />
                <span className="text-xl md:text-4xl lg:text-5xl">
                  <TypewriterText 
                    words={['энергию', 'защиту от выгорания', 'ментальное здоровье']} 
                    className="text-emerald-600" 
                  />
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-600 mb-4 lg:mb-8 leading-relaxed">
                Well-being решение для отдыха на природе. <strong>Более 500 локаций по России.</strong> Мотивируйте команду, укрепляйте ментальное здоровье и получайте отчетность по использованию сертификатов.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-4 lg:mb-8">
                <Button 
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  onClick={openFormModal}
                >
                  Оставить заявку
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={scrollToPackages}
                  className="hidden md:flex border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-full px-8 py-4 transition-all duration-200"
                >
                  Посмотреть B2B-пакеты
                </Button>
              </div>

              {/* Our Partners */}
              <div className="mt-4 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200 pb-8 lg:pb-0">
                <p className="text-sm text-gray-600 mb-3 lg:mb-4">Нас выбирают</p>
                <div className="flex justify-between md:gap-6 items-center">
                  <img src={nornickelLogo} alt="Норникель" className="h-8 md:h-14 w-auto transition-all duration-300" />
                  <img src={severstalLogo} alt="Северсталь" className="h-8 md:h-14 w-auto transition-all duration-300" />
                  <img src={cianLogo} alt="Циан" className="h-8 md:h-14 w-auto transition-all duration-300" />
                  <img src={tochkaLogo} alt="Точка Банк" className="h-6 md:h-9 w-auto transition-all duration-300" />
                </div>
              </div>
            </motion.div>

            <div className="relative order-1 lg:order-2">
              <CertificateVariant3 />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Как это работает? - 3 шага */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-8 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-gray-900 font-bold text-[36px]">
              Как это работает?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-[16px]">
              3 простых шага до незабываемого корпоративного отдыха
            </p>
          </motion.div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden relative">
          <div className="overflow-x-auto scrollbar-hide pb-8 pt-6 relative">
            <div className="flex gap-6 px-6" style={{ width: 'max-content' }}>
            {/* Шаг 1 */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-200 group w-[320px] md:w-auto flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              whileHover={{ y: -8 }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-xl">1</span>
              </div>

              {/* Illustration */}
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-amber-50">
                <ImageWithFallback
                  src={step1Image}
                  alt="Вы дарите сертификат"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-gray-900 text-[17px] font-bold">
                Вы дарите сертификат
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Готовые решения для команд (10–500+). Логотип, персональное обращение. Электронные сертификаты или в подарочной упаковке, HR Личный кабинет.
              </p>

              {/* Arrow connector (except last) */}
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                <ArrowRight className="w-8 h-8 text-emerald-400" />
              </div>
            </motion.div>

            {/* Шаг 2 */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-200 group w-[320px] md:w-auto flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-xl">2</span>
              </div>

              {/* Illustration */}
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-amber-50">
                <ImageWithFallback
                  src={step2Image}
                  alt="Получатель выбирает сам"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-gray-900 font-bold text-center text-[17px]">
                Получатель выбирает сам
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Сотрудник самостоятельно выбирает локацию, дату и удобный формат отдыха 
                из 500+ глэмпингов. Полная свобода выбора — каждый находит идеальный вариант.
              </p>

              {/* Arrow connector (except last) */}
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                <ArrowRight className="w-8 h-8 text-emerald-400" />
              </div>
            </motion.div>

            {/* Шаг 3 */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-200 group w-[320px] md:w-auto flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8 }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-xl">3</span>
              </div>

              {/* Illustration */}
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-amber-50">
                <ImageWithFallback
                  src={step3Image}
                  alt="Глэмпинг или эко-отель встречает гостей"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-gray-900 text-[20px] font-bold text-center">
                Глэмпинг или эко-отель встречает гостей
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Сотрудники укрепляют ментальное здоровье и возвращаются с новой энергией 
                для работы. Инвестиция в Well-being окупается повышенной продуктивностью.
              </p>
            </motion.div>
          </div>
          
          {/* Gradient overlay to indicate more content */}
          <div className="absolute right-0 top-0 bottom-8 w-16 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none" />
        </div>
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden md:block max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Шаг 1 */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-200 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              whileHover={{ y: -8 }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-xl">1</span>
              </div>

              {/* Illustration */}
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-amber-50">
                <ImageWithFallback
                  src={step1Image}
                  alt="Вы дарите сертификат"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-gray-900 text-[17px] font-bold">
                Вы дарите сертификат
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Готовые решения для команд (10–500+). Логотип, персональное обращение. Электронные сертификаты или в подарочной упаковке, HR Личный кабинет.
              </p>

              {/* Arrow connector (except last) */}
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                <ArrowRight className="w-8 h-8 text-emerald-400" />
              </div>
            </motion.div>

            {/* Шаг 2 */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-200 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-xl">2</span>
              </div>

              {/* Illustration */}
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-amber-50">
                <ImageWithFallback
                  src={step2Image}
                  alt="Получатель выбирает сам"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-gray-900 font-bold text-center text-[17px]">
                Получатель выбирает сам
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Сотрудник самостоятельно выбирает локацию, дату и удобный формат отдыха 
                из 500+ глэмпингов. Полная свобода выбора — каждый находит идеальный вариант.
              </p>

              {/* Arrow connector (except last) */}
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                <ArrowRight className="w-8 h-8 text-emerald-400" />
              </div>
            </motion.div>

            {/* Шаг 3 */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-200 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8 }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-xl">3</span>
              </div>

              {/* Illustration */}
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-amber-50">
                <ImageWithFallback
                  src={step3Image}
                  alt="Глэмпинг или эко-отель встречает гостей"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-gray-900 text-[20px] font-bold text-center">
                Глэмпинг или эко-отель встречает гостей
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Сотрудники укрепляют ментальное здоровье и возвращаются с новой энергией 
                для работы. Инвестиция в Well-being окупается повышенной продуктивностью.
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                const packagesSection = document.getElementById('b2b-wellbeing-packages-emotional')
                if (packagesSection) {
                  packagesSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Выбрать пакет
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* HR Dashboard Tracking Section */}
      <HRDashboardTrackingSection onNavigateToHRDashboard={onNavigateToHRDashboard} />

      {/* 3.5. Блок "По эмоциональному результату" (Вариант 2) */}
      <section id="b2b-wellbeing-packages-emotional" className="py-16 md:py-24 bg-white">
        <Variant2 onRequestClick={openFormModal} />
      </section>

      {/* Измеримые бизнес-результаты */}
      <BusinessResultsSection />

      {/* 5. Блок "Варианты оформления подарочного сертификата" (скопировано со страницы PetFriendlyGlampingPage) */}
      <PackagingCTASection />

      {/* 6. Блок "Подарок, который оценят" - Вариант 2 (Персонализация) */}
      <CorporateGiftReasonsSectionVariant2 onSelectGift={onNavigateToGiftOptions} />

      {/* 7. Квиз - Получить спецпредложение */}
      <div id="special-offer-quiz">
        <CorporateQuizSection 
          onSubmit={(data) => {
            console.log('B2B Quiz data received:', data)
          }}
        />
      </div>

      {/* 8. Блок "Где можно будет отдохнуть" (скопировано с главной страницы) */}
      <RegionsSection />

      {/* 9. Блок "Корпоративные отзывы" (скопировано из ReviewsPage) */}
      <CorporateReviewsSection />

      {/* 10. CTA Form - Форма заявки */}
      <section id="request-form" className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Оставьте заявку на корпоративные условия</h2>
            <p className="text-lg md:text-xl text-gray-600">Мы свяжемся с вами в течение рабочего дня</p>
          </div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitSuccess && (
              <div className="mb-6 p-4 bg-emerald-50 border-2 border-emerald-500 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <div className="text-emerald-900">Отлично! Ваша заявка принята</div>
                  <div className="text-sm text-emerald-700">Наш менеджер свяжется с вами в течение 30 минут для уточнения деталей.</div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Ваше имя *</label>
                <div className="relative">
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Введите ваше имя"
                    data-field="name"
                    className={`${formErrors.name ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-emerald-600'} transition-all`}
                    disabled={isSubmitting}
                  />
                  {formErrors.name && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {formErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Компания *</label>
                <div className="relative">
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Название компании"
                    data-field="company"
                    className={`${formErrors.company ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-emerald-600'} transition-all`}
                    disabled={isSubmitting}
                  />
                  {formErrors.company && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                {formErrors.company && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {formErrors.company}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Email *</label>
                <div className="relative">
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    data-field="email"
                    className={`${formErrors.email ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-emerald-600'} transition-all`}
                    disabled={isSubmitting}
                  />
                  {formErrors.email && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {formErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Телефон *</label>
                <div className="relative">
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+7 (xxx) xxx-xx-xx"
                    data-field="phone"
                    className={`${formErrors.phone ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-emerald-600'} transition-all`}
                    disabled={isSubmitting}
                  />
                  {formErrors.phone && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                {formErrors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {formErrors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">Количество сотрудников</label>
              <Input
                type="text"
                value={formData.employees}
                onChange={(e) => handleInputChange('employees', e.target.value)}
                placeholder="Примерное количество"
                className="border-gray-200 focus:border-emerald-600"
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">Дополнительная информация</label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Расскажите о ваших потребностях, предпочтениях или задайте вопросы"
                rows={4}
                className="border-gray-200 focus:border-emerald-600 resize-none"
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button 
                type="submit" 
                size="lg" 
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={isSubmitting || submitSuccess}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Отправка...
                  </>
                ) : submitSuccess ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Отправлено!
                  </>
                ) : (
                  <>
                    Отправить заявку
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>corp@глэмпинги.рф</span>
                </div>
              </div>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Модальное окно формы заявки */}
      <CorporateRequestFormModal 
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
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

export default CorporateB2BPage
