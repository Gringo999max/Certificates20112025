import React, { useState } from 'react'
import { Monitor, Mail, Gift, Upload, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

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

const AnthropicGiftDeliverySection = () => {
  const [selectedOption, setSelectedOption] = useState<string>('electronic')
  const [currentSlide, setCurrentSlide] = useState(0)

  const deliveryOptions: DeliveryOption[] = [
    {
      id: 'electronic',
      icon: Monitor,
      title: 'Электронный сертификат',
      description: 'Мгновенная доставка на email',
      features: ['Моментально', 'Удобно', 'Экологично'],
      badge: 'Рекомендуем',
      isPrimary: true
    },
    {
      id: 'envelope',
      icon: Mail,
      title: 'Фирменный конверт',
      description: 'Красивая упаковка с доставкой',
      features: ['Физический подарок', '3-5 дней']
    },
    {
      id: 'premium',
      icon: Gift,
      title: 'Подарочная упаковка',
      description: 'Премиум упаковка для особых случаев',
      features: ['Роскошная упаковка', '3-5 дней'],
      badge: 'Премиум'
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificatePreviews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificatePreviews.length) % certificatePreviews.length)
  }

  return (
    <section 
      className="py-20 relative"
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
        
        .delivery-card {
          transition: all 300ms ease-out;
        }
        
        .delivery-card:hover {
          transform: translateY(-4px) scale(1.02);
        }
        
        .delivery-card-primary {
          background-color: #f5e6d8;
          border: 2px solid #cc785c;
        }
        
        .delivery-card-default {
          background-color: white;
          border: 1.5px solid #d4c5b0;
        }
        
        .delivery-card-selected {
          background-color: #f5e6d8;
          border: 3px solid #cc785c;
        }
        
        .delivery-card:hover:not(.delivery-card-selected) {
          border-color: #cc785c;
          box-shadow: 0 8px 24px rgba(204, 120, 92, 0.15);
        }
        
        .delivery-card-selected {
          box-shadow: 0 8px 24px rgba(204, 120, 92, 0.2);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
               style={{ backgroundColor: 'rgba(204, 120, 92, 0.1)' }}>
            <Gift className="w-8 h-8" style={{ color: '#cc785c' }} />
          </div>
          
          <h2 
            className="anthropic-heading mb-4"
            style={{ 
              fontSize: '32px', 
              fontWeight: 700, 
              color: '#2a2118',
              letterSpacing: '-0.02em'
            }}
          >
            Дарите как хотите!
          </h2>
          
          <p 
            className="anthropic-ui max-w-2xl mx-auto"
            style={{ 
              fontSize: '16px', 
              color: '#5c4a3a',
              opacity: 0.9,
              lineHeight: '1.6'
            }}
          >
            Выберите идеальный способ подарить незабываемые впечатления в глэмпинге
          </p>
        </div>

        {/* Delivery Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {deliveryOptions.map((option) => {
            const Icon = option.icon
            const isSelected = selectedOption === option.id
            
            return (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`
                  delivery-card anthropic-ui text-left p-8 relative
                  ${isSelected ? 'delivery-card-selected' : option.isPrimary ? 'delivery-card-primary' : 'delivery-card-default'}
                `}
                style={{ borderRadius: '8px' }}
              >
                {/* Badge */}
                {option.badge && (
                  <div 
                    className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                    style={{ 
                      backgroundColor: '#cc785c',
                      color: 'white',
                      borderRadius: '4px',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {option.badge}
                  </div>
                )}

                {/* Selection Checkmark */}
                {isSelected && (
                  <div 
                    className="absolute top-4 left-4 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#cc785c' }}
                  >
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                )}

                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  style={{ 
                    backgroundColor: isSelected ? 'rgba(204, 120, 92, 0.15)' : 'rgba(92, 74, 58, 0.08)',
                    marginTop: option.badge ? '24px' : '0'
                  }}
                >
                  <Icon 
                    className="w-6 h-6" 
                    style={{ color: isSelected ? '#cc785c' : '#5c4a3a' }} 
                  />
                </div>

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
                  {option.features.map((feature, index) => (
                    <span 
                      key={index}
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
              </button>
            )
          })}
        </div>

        {/* Visual Preview Carousel */}
        <div className="mb-16">
          <h3 
            className="anthropic-ui text-center mb-8"
            style={{ 
              fontSize: '20px',
              fontWeight: 600,
              color: '#2a2118'
            }}
          >
            Примеры дизайнов сертификатов
          </h3>

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {certificatePreviews.map((preview) => (
                  <div 
                    key={preview.id}
                    className="w-full flex-shrink-0 px-3"
                  >
                    <div 
                      className="bg-white overflow-hidden"
                      style={{ 
                        borderRadius: '8px',
                        border: '1px solid #d4c5b0',
                        boxShadow: '0 4px 12px rgba(92, 74, 58, 0.08)'
                      }}
                    >
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <ImageWithFallback
                          src={preview.image}
                          alt={preview.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 
                          className="anthropic-ui font-semibold mb-2"
                          style={{ 
                            fontSize: '16px',
                            color: '#2a2118'
                          }}
                        >
                          {preview.title}
                        </h4>
                        <p 
                          className="anthropic-ui"
                          style={{ 
                            fontSize: '14px',
                            color: '#5c4a3a',
                            opacity: 0.8
                          }}
                        >
                          {preview.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white flex items-center justify-center"
              style={{ 
                border: '1.5px solid #d4c5b0',
                boxShadow: '0 2px 8px rgba(92, 74, 58, 0.1)'
              }}
            >
              <ChevronLeft className="w-5 h-5" style={{ color: '#5c4a3a' }} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white flex items-center justify-center"
              style={{ 
                border: '1.5px solid #d4c5b0',
                boxShadow: '0 2px 8px rgba(92, 74, 58, 0.1)'
              }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: '#5c4a3a' }} />
            </button>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {certificatePreviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ 
                    backgroundColor: currentSlide === index ? '#cc785c' : '#d4c5b0'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button
            className="anthropic-ui inline-flex items-center gap-3 font-medium transition-all hover:scale-105"
            style={{ 
              backgroundColor: '#5c4a3a',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '12px',
              fontSize: '16px',
              boxShadow: '0 4px 12px rgba(92, 74, 58, 0.2)'
            }}
          >
            <Gift className="w-5 h-5" />
            Добавить подарочную упаковку
          </button>
          
          <p 
            className="anthropic-ui mt-4"
            style={{ 
              fontSize: '14px',
              color: '#5c4a3a',
              opacity: 0.7
            }}
          >
            Посмотрите варианты красивой упаковки с автоматическими каруселями
          </p>
        </div>
      </div>
    </section>
  )
}

export default AnthropicGiftDeliverySection
