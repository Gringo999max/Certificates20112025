import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { Heart, ShoppingCart, Zap, Truck, Shield, PawPrint, Trees, Calendar, Users, ChevronLeft, ChevronRight, ArrowRight, Gift } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { CheckoutModal } from './CheckoutModal'
import { QuickOrderModal } from './QuickOrderModal'
import { DeliveryModal } from './DeliveryModal'
import { PackagingCarousel } from './PackagingCarousel'
import { EnvelopeCarousel } from './EnvelopeCarousel'
import { Header } from './Header'
import Footer from './Footer'
import FAQSection from './FAQSection'
import { SatisfiedCustomersSection } from './SatisfiedCustomersSection'
import step1Image from 'figma:asset/473c627910d9537f1ff6b8d1db2964f79ea88c39.png'
import step2Image from 'figma:asset/bf412929b27600f04ec71124eb18e40eb9366774.png'
import step3Image from 'figma:asset/0c06a85ab403bb43c88e7bd4c6161dca48c59a1d.png'
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

interface NavigationProps {
  onNavigateToHome: () => void
  onNavigateToGiftOptions: () => void
  onNavigateToDelivery: () => void
  onNavigateToCorporate: () => void
  onNavigateToReviews: () => void
  onNavigateToAbout: () => void
  onNavigateToActivation: () => void
  onNavigateToHowItWorks?: () => void
}

interface PetFriendlyGlampingPageProps extends NavigationProps {}

const glampingOptions = [
  {
    id: 'pet-glamping-1',
    title: 'Подарочный сертификат на отдых с питомцем',
    subtitle: 'В одном из 50+ глэмпингов с размещением животных',
    description: 'Уютные глэмпинги, где ваш четвероногий друг будет желанным гостем. Специальные зоны для выгула, миски и лежанки уже ждут!',
    price: 24900,
    originalPrice: 29900,
    category: 'Отдых с питомцами',
    image: 'https://images.unsplash.com/photo-1668496196236-0ad2355f8f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHBldHMlMjBkb2dzJTIwbmF0dXJlJTIwY2FtcGluZ3xlbnwxfHx8fDE3NTgwMjk3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Зоны для выгула', 'Миски и лежанки', 'Ветлиника рядом', 'Огороженная территория'],
    validityPeriod: '2 года на активацию'
  },
  {
    id: 'pet-glamping-2', 
    title: 'Премиум отдых с питомцем',
    subtitle: 'Люксовые глэмпинги с VIP-услугами для животных',
    description: 'Эксклюзивные глэмпинги с персональным грумером, кинологом и ветеринаром. Ваш питомец получит королевский уход!',
    price: 39900,
    originalPrice: 45900,
    category: 'Премиум с питомцами',
    image: 'https://images.unsplash.com/photo-1703257258601-ef632cc3912b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYW1waW5nJTIwdGVudCUyMHBldHMlMjBhbGxvd2VkfGVufDF8fHx8MTc1ODAyOTczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Персональный грумер', 'Игровая зона', 'Спа для животных', 'Фотосессия с питомцем'],
    validityPeriod: '2 года на активацию'
  }
]

const durationOptions = [
  { value: '1-night', label: 'Одна ночь', multiplier: 1 },
  { value: '2-nights', label: 'Две ночи', multiplier: 1.8 },
  { value: '3-nights', label: 'Три ночи', multiplier: 2.5 }
]

function PetFriendlyHeroSection() {
  const [selectedDuration, setSelectedDuration] = useState('1-night')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const currentDuration = durationOptions.find(d => d.value === selectedDuration)
  const basePrice = 24900
  const finalPrice = Math.round(basePrice * (currentDuration?.multiplier || 1))

  // Функция для скролла к блоку с отзывами
  const scrollToReviews = () => {
    const reviewsSection = document.getElementById('satisfied-customers-section')
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const petFriendlyCertificate = {
    name: 'Глэмпинг: отдых в глэмпинге с питомцем',
    description: 'Отдых с питомцами',
    price: finalPrice,
    type: 'pet-friendly'
  }

  // Фотографии глэмпингов с питомцами
  const glampingImages = [
    'https://images.unsplash.com/photo-1703257258601-ef632cc3912b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRlbnQlMjBwZXRzJTIwZG9nfGVufDF8fHx8MTc2MDI4NDg4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1629271910288-34df3dbe67ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBjYW1waW5nJTIwbmF0dXJlfGVufDF8fHx8MTc2MDI4NDg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1755159752699-65d16b98b6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBmcmllbmRseSUyMGNhYmlufGVufDF8fHx8MTc2MDI4NDg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1613211698325-715b9730af34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBmb3Jlc3QlMjB0ZW50fGVufDF8fHx8MTc2MDI4NDg5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1722350643282-768fbff1281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMGRvbWUlMjBwZXRzfGVufDF8fHx8MTc2MDI4NDg5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ]

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + glampingImages.length) % glampingImages.length)
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % glampingImages.length)
  }

  // Минимальное расстояние свайпа для переключения (в пикселях)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handleNextImage()
    } else if (isRightSwipe) {
      handlePrevImage()
    }
  }

  // ОПТИМИЗИРОВАНО: Автоматическое переключение убрано - только ручное управление

  return (
    <section className="pt-6 md:pt-12 lg:pt-20 pb-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Left side - Image Carousel */}
            {/* ОПТИМИЗИРОВАНО: На мобильных 315px (уменьшение на 30%), на десктопе - 500px */}
            <div className="relative bg-gray-100 overflow-hidden group min-h-[315px] md:min-h-[500px]">
              {/* Pet-friendly badge */}
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-white/90 text-gray-700 border-gray-200 text-xs">
                  🐾 Pet-friendly
                </Badge>
              </div>

              {/* Счетчик фотографий */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-black/60 text-white border-0 text-xs px-2 py-0.5">
                  {currentImageIndex + 1} / {glampingImages.length}
                </Badge>
              </div>

              {/* Карусель изображений с поддержкой свайпа */}
              <div 
                className="relative w-full h-full"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <ImageWithFallback
                  src={glampingImages[currentImageIndex]}
                  alt="Глэмпинг с питомцем"
                  className="w-full h-full object-cover"
                />

                {/* Кнопки навигации - показываются всегда на desktop, на mobile только при наличии нескольких фото */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg flex items-center justify-center transition-all z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                  aria-label="Предыдущее фото"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg flex items-center justify-center transition-all z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                  aria-label="Следующее фото"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Индикаторы (точки) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {glampingImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-white w-8'
                          : 'bg-white/60 hover:bg-white/80 w-2'
                      }`}
                      aria-label={`Перейти к фото ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            {/* ОПТИМИЗИРОВАНО: Уменьшены отступы на 20% на мобильных */}
            <div className="p-5 md:p-8 lg:p-10 flex flex-col justify-between">
              {/* Main content */}
              <div className="space-y-4 md:space-y-6">
                <div>
                  <p className="text-emerald-600 font-medium mb-2 text-sm md:text-base">Пушистый космос 🐕</p>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                    Подарочный сертификат на отдых с питомцем
                  </h1>
                  <p className="text-base md:text-lg text-gray-600 mb-3 md:mb-4">
                    В любом из 50+ шикарных глэмпингов
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary" className="px-2.5 py-1 text-xs md:text-sm">
                    <Users className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Для двоих + питомец
                  </Badge>
                  <Badge variant="secondary" className="px-2.5 py-1 text-xs md:text-sm">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    2 года на активацию
                  </Badge>
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Глэмпинги и коттеджи высокого уровня на природе и в городе: получатель сертификата
                  сам выберет куда отправиться и в какие даты весте с любимым питомцем
                </p>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-baseline gap-2 md:gap-3">
                    <span className="text-2xl md:text-3xl font-bold text-gray-900">
                      {finalPrice.toLocaleString()} ₽
                    </span>
                  </div>

                  <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                    <SelectTrigger className="w-full h-10 md:h-12 text-sm md:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {durationOptions.map((duration) => (
                        <SelectItem key={duration.value} value={duration.value}>
                          {duration.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <CheckoutModal
                      selectedCertificate={petFriendlyCertificate}
                      trigger={
                        <Button className="h-10 md:h-12 text-sm md:text-base bg-purple-600 hover:bg-purple-700 text-white font-medium">
                          <ShoppingCart className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                          В корзину
                        </Button>
                      }
                    />
                    <QuickOrderModal
                      productName={petFriendlyCertificate.name}
                      productPrice={petFriendlyCertificate.price}
                      trigger={
                        <Button className="h-10 md:h-12 text-sm md:text-base bg-emerald-600 hover:bg-emerald-700 text-white font-medium">
                          <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                          Заказ в один клик
                        </Button>
                      }
                    />
                  </div>

                  {/* ОПТИМИЗИРОВАНО: Две компактные синие кнопки как в Варианте 1 (только на мобильных) */}
                  <div className="md:hidden grid grid-cols-2 gap-1.5">
                    {/* Кнопка доставки */}
                    <DeliveryModal
                      trigger={
                        <div className="flex items-center justify-center gap-1.5 text-xs text-blue-600 bg-blue-50 p-2 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                          <Truck className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="truncate">От 2ч</span>
                        </div>
                      }
                    />
                    
                    {/* Кнопка отзывов */}
                    <div 
                      onClick={scrollToReviews}
                      className="flex items-center justify-center gap-1.5 text-xs text-blue-600 bg-blue-50 p-2 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
                    >
                      <span className="flex-shrink-0">⭐</span>
                      <span className="truncate">5.0 (1000)</span>
                    </div>
                  </div>

                  {/* Desktop версия - блоки доставки и отзывов */}
                  <div className="hidden md:grid grid-cols-2 gap-3">
                    <DeliveryModal
                      trigger={
                        <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                          <Truck className="w-4 h-4" />
                          <span>Доставка от 2ч</span>
                        </div>
                      }
                    />
                    
                    {/* Кнопка отзывов для desktop */}
                    <div 
                      onClick={scrollToReviews}
                      className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
                    >
                      <span className="flex-shrink-0">⭐</span>
                      <span>Отзывы 5.0 (1000)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom section - Info cards */}
              {/* ОПТИМИЗИРОВАНО: Скрыты на мобильных, показываются только на desktop */}
              <div className="hidden md:grid grid-cols-2 gap-4 mt-8">
                {/* Delivery card */}
                <div className="relative rounded-2xl overflow-hidden h-24 cursor-pointer hover:scale-105 transition-transform">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1755540735876-ff503cf594fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwY2VydGlmaWNhdGUlMjBlbnZlbG9wZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzU4MDMxMDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Варианты доставки"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-orange-600/90 flex items-center justify-center">
                    <div className="text-center text-white px-2">
                      <div className="text-lg mb-1">📦</div>
                      <p className="text-xs font-medium leading-tight">За 2 часа подарочной</p>
                      <p className="text-xs font-medium leading-tight">упаковке или моментально</p>
                      <p className="text-xs font-medium leading-tight">на электронную почту</p>
                    </div>
                  </div>
                </div>

                {/* Reviews card */}
                <div className="relative rounded-2xl overflow-hidden h-24 cursor-pointer hover:scale-105 transition-transform">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHJldmlld3MlMjBmZWVkYmFjayUyMHN0YXJzfGVufDF8fHx8MTc1ODAzMTA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Отзывы"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-emerald-600/90 flex items-center justify-center">
                    <div className="text-center text-white px-2">
                      <div className="text-lg mb-1">⭐</div>
                      <p className="text-xs font-medium leading-tight">Пять звезд и тысяча</p>
                      <p className="text-xs font-medium leading-tight">отзывов на Яндексе</p>
                    </div>
                  </div>
                  {/* TOP выбор badge */}
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-emerald-500 text-white text-xs px-2 py-0.5">
                      ТОП выбор
                    </Badge>
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

function GlampingProductCard({ option }: { option: typeof glampingOptions[0] }) {
  const [selectedDuration, setSelectedDuration] = useState('1-night')
  const [isLiked, setIsLiked] = useState(false)

  const currentDuration = durationOptions.find(d => d.value === selectedDuration)
  const finalPrice = Math.round(option.price * (currentDuration?.multiplier || 1))

  const certificateInfo = {
    name: option.title,
    description: option.category,
    price: finalPrice,
    type: 'pet-friendly'
  }

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <div className="h-80 overflow-hidden">
          <ImageWithFallback
            src={option.image}
            alt={option.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
            isLiked ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
        </button>
        <Badge className="absolute top-4 left-4 bg-emerald-500 text-white">
          <PawPrint className="w-3 h-3 mr-1" />
          Pet-friendly
        </Badge>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">{option.subtitle}</p>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {option.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-gray-900">{finalPrice.toLocaleString()} ₽</span>
            {option.originalPrice && (
              <span className="text-lg text-gray-400 line-through">{Math.round(option.originalPrice * (currentDuration?.multiplier || 1)).toLocaleString()} ₽</span>
            )}
          </div>

          <Select value={selectedDuration} onValueChange={setSelectedDuration}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {durationOptions.map((duration) => (
                <SelectItem key={duration.value} value={duration.value}>
                  {duration.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex gap-3">
            <CheckoutModal
              selectedCertificate={certificateInfo}
              trigger={
                <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  В корзину
                </Button>
              }
            />
            <QuickOrderModal
              productName={certificateInfo.name}
              productPrice={certificateInfo.price}
              trigger={
                <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Zap className="w-4 h-4 mr-2" />
                  Заказ в один клик
                </Button>
              }
            />
          </div>

          <DeliveryModal
            trigger={
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>Доставка от 2-х часов или на e-mail</span>
              </div>
            }
          />
        </div>
      </CardContent>
    </Card>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: 'Дарите сертификат',
      description: 'Доставка в красивой упаковке (от 2 часов) или мгновенно на email',
      image: step1Image,
    },
    {
      number: 2,
      title: 'Получатель выбирает глэмпинг',
      description: 'Среди 500+ локаций по всей России можно найти идеальное место для отдыха с питомцем',
      image: step2Image,
    },
    {
      number: 3,
      title: 'Глэмпинг забронирован и ждёт гостей',
      description: 'Можно отправляться на отдых и наслаждаться природой с питомцем',
      image: step3Image,
    }
  ]

  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-purple-50 via-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Как это работает?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Три простых шага до незабываемого отдыха на природе с питомцем
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200 group"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-xl">{step.number}</span>
              </div>

              {/* Image */}
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-purple-50">
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
                  <ArrowRight className="w-8 h-8 text-purple-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Безопасность для питомцев',
      description: 'Все глэмпинги проверены на безопасность для животных'
    },
    {
      icon: <Trees className="w-6 h-6" />,
      title: 'Природная среда',
      description: 'Просторные территории для игр и прогулок с питомцем'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Гибкое бронирование',
      description: '2 года на активацию сертификата'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Семейный отдых',
      description: 'Идеально для отдыха всей семьей с любимым питомцем'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Почему выбирают нас для отдыха с питомцами</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок секции */}
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

        {/* Три карточки в горизонтальном ряду */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* КАРТОЧКА 1: Электронный сертификат */}
          <div 
            className="flex-1 group relative bg-white rounded-2xl shadow-xl border-2 border-emerald-100 overflow-hidden transition-all hover:shadow-2xl hover:scale-[1.10] p-6"
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
                      aria-label={`Перейти к дизайну ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* КАРТОЧКА 2: Фирменный конверт */}
          <div 
            className="flex-1 group relative bg-white rounded-2xl shadow-xl border-2 border-amber-100 overflow-hidden transition-all hover:shadow-2xl hover:scale-[1.10] p-6"
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
            className="flex-1 group relative bg-white rounded-2xl shadow-xl border-2 border-purple-100 overflow-hidden transition-all hover:shadow-2xl hover:scale-[1.10] p-6"
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

export function PetFriendlyGlampingPage({
  onNavigateToHome,
  onNavigateToGiftOptions,
  onNavigateToDelivery,
  onNavigateToCorporate,
  onNavigateToReviews,
  onNavigateToAbout,
  onNavigateToActivation,
  onNavigateToHowItWorks
}: PetFriendlyGlampingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        onNavigateToDelivery={onNavigateToDelivery}
        onNavigateToHome={onNavigateToHome}
        onNavigateToGiftOptions={onNavigateToGiftOptions}
        onNavigateToCorporate={onNavigateToCorporate}
        onNavigateToReviews={onNavigateToReviews}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToActivation={onNavigateToActivation}
        onNavigateToHowItWorks={onNavigateToHowItWorks}
      />

      {/* Hero Section */}
      <PetFriendlyHeroSection />

      <HowItWorksSection /> 
      <PackagingCTASection />
      <BenefitsSection />
      <SatisfiedCustomersSection />
      <FAQSection onNavigateToHowItWorks={onNavigateToHowItWorks} certificateType="pet-friendly" />
    </div>
  )
}

export default PetFriendlyGlampingPage