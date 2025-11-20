import React, { useState, useEffect, useCallback } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from './ui/carousel'

interface ProductImageCarouselProps {
  images: (string | React.ReactNode)[]
  alt: string
  isMobile: boolean
}

/**
 * ProductImageCarousel - Интерактивная галерея фотографий товара
 * 
 * Особенности:
 * - Свайп влево-вправо для переключения между изображениями
 * - Увеличенный размер фото в 2 раза от оригинала:
 *   * Мобильная: w-32 h-32 (128x128px) вместо w-16 h-16
 *   * Десктоп: w-24 h-20 sm:w-32 sm:h-24 вместо w-12 h-10 sm:w-16 sm:h-12
 * - Индикаторы-точки внизу (только если изображений > 1)
 * - Бесконечная прокрутка для лучшего UX
 * - Плавные анимации переходов
 */
export function ProductImageCarousel({ images, alt, isMobile }: ProductImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Если изображений нет, показываем fallback
  if (!images || images.length === 0) {
    return (
      <div className={`${isMobile ? 'w-32 h-32' : 'w-24 h-20 sm:w-32 sm:h-24'} rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0`}>
        <span className="text-gray-400 text-sm">Нет фото</span>
      </div>
    )
  }

  // Если только одно изображение, показываем без карусели
  if (images.length === 1) {
    const sizeClass = isMobile ? 'w-32 h-32' : 'w-24 h-20 sm:w-32 sm:h-24'
    const image = images[0]

    if (typeof image === 'string') {
      return (
        <div className={`${sizeClass} rounded-lg overflow-hidden flex-shrink-0`}>
          <img src={image} alt={alt} className="w-full h-full object-cover" />
        </div>
      )
    }

    // Если это React компонент
    return (
      <div className={`${sizeClass} rounded-lg overflow-hidden flex-shrink-0`}>
        {image}
      </div>
    )
  }

  const sizeClass = isMobile ? 'w-32 h-32' : 'w-24 h-20 sm:w-32 sm:h-24'

  return (
    <div className={`${sizeClass} rounded-lg overflow-hidden flex-shrink-0 relative`}>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: 'start',
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className={`${sizeClass}`}>
                {typeof image === 'string' ? (
                  <img 
                    src={image} 
                    alt={`${alt} - фото ${index + 1}`} 
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                ) : (
                  <div className="w-full h-full">
                    {image}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Индикаторы точки */}
        {images.length > 1 && (
          <div className="absolute bottom-1 left-0 right-0 flex justify-center items-center gap-1 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  current === index 
                    ? 'bg-white opacity-100' 
                    : 'bg-white opacity-50'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Перейти к фото ${index + 1}`}
              />
            ))}
          </div>
        )}
      </Carousel>
    </div>
  )
}

export default ProductImageCarousel
