import React, { useState, useEffect } from 'react'
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface EnvelopeOption {
  id: string
  name: string
  color?: string
  sealColor?: string
  image?: string // Опциональное изображение вместо цветов
}

interface EnvelopeCarouselProps {
  options: EnvelopeOption[]
  selectedId?: string | null
  onSelect?: (id: string) => void
  isPromo?: boolean // Промо-режим без функционала выбора
}

export function EnvelopeCarousel({ options, selectedId, onSelect, isPromo = false }: EnvelopeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // Автоматическое переключение каждую секунду
  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % options.length)
    }, 1000) // Каждую секунду

    return () => clearInterval(interval)
  }, [options.length, isPaused])

  // Создаём расширенный массив для бесшовной прокрутки
  const extendedOptions = [...options, ...options, ...options]
  const startIndex = options.length + currentIndex

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + options.length) % options.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % options.length)
  }

  return (
    <div className="relative">
      {/* Кнопка "Назад" */}
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition-all shadow-lg flex items-center justify-center"
        aria-label="Предыдущий конверт"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Кнопка "Вперёд" */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition-all shadow-lg flex items-center justify-center"
        aria-label="Следующий конверт"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden">
          <div 
            className="flex gap-3 transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(calc(-${startIndex * 33.333}% - ${startIndex * 0.75}rem))`
            }}
          >
            {extendedOptions.map((envelope, idx) => (
              <div key={`${envelope.id}-${idx}`} className="relative flex-shrink-0" style={{ width: 'calc(33.333% - 0.5rem)' }}>
                <label 
                  className="cursor-pointer block"
                  onMouseEnter={() => setHoveredId(envelope.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {!isPromo && (
                    <input
                      type="radio"
                      name="envelope"
                      value={envelope.id}
                      checked={selectedId === envelope.id}
                      onChange={() => onSelect?.(envelope.id)}
                      className="sr-only"
                    />
                  )}
                  <div className={`relative w-full aspect-square rounded-xl border-3 transition-all transform overflow-hidden ${
                    hoveredId === envelope.id ? 'scale-110 z-20' : 'scale-100'
                  } ${
                    !isPromo && selectedId === envelope.id 
                      ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`} style={envelope.image ? {} : { backgroundColor: envelope.color }}>
                    {envelope.image ? (
                      // Режим с изображением
                      <ImageWithFallback
                        src={envelope.image}
                        alt={envelope.name}
                        className="w-full h-full object-contain p-2 bg-gray-50"
                      />
                    ) : (
                      // Старый режим с SVG-конвертом
                      <>
                        {/* Envelope flap */}
                        <div 
                          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-12 border-r-12 border-t-8"
                          style={{ 
                            borderLeftColor: 'transparent',
                            borderRightColor: 'transparent',
                            borderTopColor: envelope.color,
                            filter: 'brightness(0.9)'
                          }}
                        />
                        
                        {/* Wax seal */}
                        <div 
                          className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full"
                          style={{ backgroundColor: envelope.sealColor }}
                        />
                      </>
                    )}
                    
                    {/* Selection indicator */}
                    {!isPromo && selectedId === envelope.id && (
                      <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-emerald-600 rounded-full px-2 py-1">
                        <span className="text-white text-xs font-medium">выбрано</span>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}

                    {/* Увеличенный preview при hover */}
                    {hoveredId === envelope.id && (
                      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center p-4 animate-in fade-in zoom-in duration-200">
                        <div className="text-center">
                          {envelope.image ? (
                            <div className="w-20 h-20 mx-auto mb-2">
                              <ImageWithFallback
                                src={envelope.image}
                                alt={envelope.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ) : (
                            <div 
                              className="w-20 h-20 mx-auto rounded-xl mb-2 flex items-center justify-center relative"
                              style={{ backgroundColor: envelope.color }}
                            >
                              <div 
                                className="w-8 h-8 rounded-full"
                                style={{ backgroundColor: envelope.sealColor }}
                              />
                            </div>
                          )}
                          <p className="text-sm font-medium text-gray-900">{envelope.name}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-900 font-medium mt-2 text-center leading-tight">{envelope.name}</p>
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Индикаторы карусели */}
        <div className="flex justify-center gap-2 mt-4">
          {options.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex 
                  ? 'bg-emerald-600 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              aria-label={`Перейти к конверту ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}