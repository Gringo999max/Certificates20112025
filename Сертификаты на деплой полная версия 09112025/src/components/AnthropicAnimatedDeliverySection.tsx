import React, { useState, useEffect } from 'react'
import { Monitor, Mail, Gift, Upload, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { motion, AnimatePresence } from 'motion/react'

// Импорт изображений сертификатов
import winterCertificate from 'figma:asset/1b038ede49cc4bd71a076dea283da6102d83a91c.png'
import sunsetCertificate from 'figma:asset/fb9a51260de5a817061843b770e3d65e5d7b55a5.png'
import lavenderCertificate from 'figma:asset/eaa25147861ce239d9e19d943d2bb9344972513e.png'
import vanCertificate from 'figma:asset/7810d8a7d4bf118cf4d79c50b97bd42ca54af713.png'

interface DeliveryOption {
  id: string
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  badge?: string
  isPrimary?: boolean
}

interface CertificatePreview {
  id: string
  image: string
  title: string
  description: string
}

const AnthropicAnimatedDeliverySection = () => {
  const [selectedOption, setSelectedOption] = useState<string>('electronic')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const deliveryOptions: DeliveryOption[] = [
    {
      id: 'electronic',
      icon: Monitor,
      title: 'Электронный',
      description: 'Мгновенная доставка на email',
      features: ['Моментально', 'Удобно', 'Экологично'],
      badge: 'РЕКОМЕНДУЕМ',
      isPrimary: true
    },
    {
      id: 'envelope',
      icon: Mail,
      title: 'Конверт',
      description: 'Красивая упаковка с доставкой',
      features: ['Физический подарок', '3-5 дней']
    },
    {
      id: 'premium',
      icon: Gift,
      title: 'Премиум',
      description: 'Премиум упаковка для особых случаев',
      features: ['Роскошная упаковка', '3-5 дней'],
      badge: 'ПРЕМИУМ'
    },
    {
      id: 'custom',
      icon: Upload,
      title: 'Свой дизайн',
      description: 'Загрузите свое изображение',
      features: ['Персонализация', 'Уникально']
    }
  ]

  const certificatePreviews: CertificatePreview[] = [
    {
      id: 'winter',
      image: winterCertificate,
      title: 'Зимняя сказка',
      description: 'Новогодний дизайн с ёлкой и зимними мотивами'
    },
    {
      id: 'sunset',
      image: sunsetCertificate,
      title: 'Романтический закат',
      description: 'Идеально для пар и романтических подарков'
    },
    {
      id: 'lavender',
      image: lavenderCertificate,
      title: 'Лавандовые поля',
      description: 'Нежный и спокойный дизайн'
    },
    {
      id: 'van',
      image: vanCertificate,
      title: 'Путешествие на фургоне',
      description: 'Для любителей приключений'
    }
  ]

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % certificatePreviews.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + certificatePreviews.length) % certificatePreviews.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{ 
        backgroundColor: '#f7f4ed',
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(92, 74, 58, 0.03) 10px, rgba(92, 74, 58, 0.03) 20px),
          repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(92, 74, 58, 0.03) 10px, rgba(92, 74, 58, 0.03) 20px)
        `
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .anthropic-heading {
          font-family: 'Crimson Pro', serif;
        }
        
        .anthropic-ui {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-10">
        {/* Header Section - Animated */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(204, 120, 92, 0.1)' }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <Gift className="w-8 h-8" style={{ color: '#cc785c' }} />
          </motion.div>
          
          <motion.h2 
            className="anthropic-heading mb-4"
            style={{ 
              fontSize: '40px', 
              fontWeight: 700, 
              color: '#2a2118',
              letterSpacing: '-0.02em'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            Дарите как хотите!
          </motion.h2>
          
          <motion.p 
            className="anthropic-ui max-w-2xl mx-auto"
            style={{ 
              fontSize: '16px', 
              color: '#5c4a3a',
              opacity: 0.9,
              lineHeight: '1.6'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            Выберите идеальный способ подарить незабываемые впечатления в глэмпинге
          </motion.p>
        </motion.div>

        {/* Delivery Options Grid - Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {deliveryOptions.map((option, index) => {
            const Icon = option.icon
            const isSelected = selectedOption === option.id
            const isHovered = hoveredCard === option.id
            
            return (
              <motion.button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                onHoverStart={() => setHoveredCard(option.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="anthropic-ui text-left p-8 relative cursor-pointer"
                style={{ 
                  borderRadius: '12px',
                  backgroundColor: isSelected || option.isPrimary ? '#f5e6d8' : 'white',
                  border: isSelected ? '3px solid #cc785c' : isHovered ? '2px solid #cc785c' : option.isPrimary ? '2px solid #cc785c' : '1.5px solid #d4c5b0',
                  transition: 'border 0.3s ease-out'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: 'easeOut', 
                  delay: 0.5 + (index * 0.1) 
                }}
                whileHover={{ 
                  y: -4,
                  boxShadow: '0 8px 24px rgba(204, 120, 92, 0.15)',
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Badge */}
                {option.badge && (
                  <motion.div 
                    className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                    style={{ 
                      backgroundColor: '#cc785c',
                      color: 'white',
                      borderRadius: '4px',
                      letterSpacing: '0.05em'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: 'easeOut', 
                      delay: 0.7 + (index * 0.1) 
                    }}
                  >
                    {option.badge}
                  </motion.div>
                )}

                {/* Selection Checkmark - Animated */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div 
                      className="absolute top-4 left-4 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#cc785c' }}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Icon - Animated on hover */}
                <motion.div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  style={{ 
                    backgroundColor: isSelected ? 'rgba(204, 120, 92, 0.15)' : 'rgba(92, 74, 58, 0.08)',
                    marginTop: option.badge ? '24px' : '0'
                  }}
                  animate={{ 
                    scale: isHovered ? 1.1 : 1,
                    backgroundColor: isSelected ? 'rgba(204, 120, 92, 0.15)' : isHovered ? 'rgba(204, 120, 92, 0.1)' : 'rgba(92, 74, 58, 0.08)'
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <Icon 
                    className="w-6 h-6" 
                    style={{ color: isSelected || isHovered ? '#cc785c' : '#5c4a3a' }} 
                  />
                </motion.div>

                {/* Title */}
                <h3 
                  className="font-semibold mb-2"
                  style={{ 
                    fontSize: '18px',
                    color: '#2a2118'
                  }}
                >
                  {option.title}
                </h3>

                {/* Description */}
                <p 
                  className="mb-4"
                  style={{ 
                    fontSize: '14px',
                    color: '#5c4a3a',
                    opacity: 0.8,
                    lineHeight: '1.5'
                  }}
                >
                  {option.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {option.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs"
                      style={{ 
                        color: '#5c4a3a',
                        opacity: 0.7
                      }}
                    >
                      • {feature}
                    </span>
                  ))}
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Visual Preview Carousel - Animated */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
        >
          <h3 
            className="anthropic-ui text-center mb-8"
            style={{ 
              fontSize: '24px',
              fontWeight: 600,
              color: '#2a2118'
            }}
          >
            Примеры дизайнов сертификатов
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden" style={{ borderRadius: '12px' }}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                  }}
                  className="bg-white"
                  style={{ 
                    border: '1px solid #d4c5b0',
                    boxShadow: '0 4px 12px rgba(92, 74, 58, 0.08)',
                    borderRadius: '12px',
                    overflow: 'hidden'
                  }}
                >
                  <div className="aspect-[2/1] relative overflow-hidden">
                    <ImageWithFallback
                      src={certificatePreviews[currentSlide].image}
                      alt={certificatePreviews[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to bottom, transparent 60%, rgba(42, 33, 24, 0.7))'
                      }}
                    />
                  </div>
                  <div className="p-8">
                    <h4 
                      className="anthropic-ui font-semibold mb-2"
                      style={{ 
                        fontSize: '20px',
                        color: '#2a2118'
                      }}
                    >
                      {certificatePreviews[currentSlide].title}
                    </h4>
                    <p 
                      className="anthropic-ui"
                      style={{ 
                        fontSize: '14px',
                        color: '#5c4a3a',
                        opacity: 0.8
                      }}
                    >
                      {certificatePreviews[currentSlide].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows - Animated on hover */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white flex items-center justify-center"
              style={{ 
                border: '1.5px solid #d4c5b0',
                boxShadow: '0 2px 8px rgba(92, 74, 58, 0.1)'
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 4px 12px rgba(92, 74, 58, 0.15)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <ChevronLeft className="w-6 h-6" style={{ color: '#5c4a3a' }} />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white flex items-center justify-center"
              style={{ 
                border: '1.5px solid #d4c5b0',
                boxShadow: '0 2px 8px rgba(92, 74, 58, 0.1)'
              }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 4px 12px rgba(92, 74, 58, 0.15)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <ChevronRight className="w-6 h-6" style={{ color: '#5c4a3a' }} />
            </motion.button>

            {/* Navigation Dots - Animated */}
            <div className="flex justify-center gap-2 mt-6">
              {certificatePreviews.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="rounded-full transition-all"
                  style={{ 
                    backgroundColor: currentSlide === index ? '#cc785c' : '#d4c5b0',
                    height: '8px'
                  }}
                  animate={{ 
                    width: currentSlide === index ? '32px' : '8px'
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section - Animated */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1.1 }}
        >
          <motion.button
            className="anthropic-ui inline-flex items-center gap-3 font-medium"
            style={{ 
              backgroundColor: '#5c4a3a',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '12px',
              fontSize: '16px',
              boxShadow: '0 4px 12px rgba(92, 74, 58, 0.2)'
            }}
            whileHover={{ 
              y: -2,
              backgroundColor: '#4a3a2e',
              boxShadow: '0 6px 16px rgba(92, 74, 58, 0.3)',
              transition: { duration: 0.2, ease: 'easeOut' }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Gift className="w-5 h-5" />
            Добавить подарочную упаковку
          </motion.button>
          
          <motion.p 
            className="anthropic-ui mt-4"
            style={{ 
              fontSize: '14px',
              color: '#5c4a3a',
              opacity: 0.7
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.3 }}
          >
            Посмотрите варианты красивой упаковки с автоматическими каруселями
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default AnthropicAnimatedDeliverySection
