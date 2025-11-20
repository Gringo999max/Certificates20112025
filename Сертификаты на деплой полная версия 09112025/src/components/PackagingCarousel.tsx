import React, { useState, useEffect } from 'react'
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface PackagingOption {
  id: string
  name: string
  gradient?: string // Опционально для обратной совместимости
  image?: string    // Новое поле для изображений
}

interface PackagingCarouselProps {
  options: PackagingOption[]
  selectedId?: string | null
  onSelect?: (id: string) => void
  isPromo?: boolean // Промо-режим без функционала выбора
}

export function PackagingCarousel({ options, selectedId, onSelect, isPromo = false }: PackagingCarouselProps) {
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
        aria-label="Предыдущий вариант"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Кнопка "Вперёд" */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition-all shadow-lg flex items-center justify-center"
        aria-label="Следующий вариант"
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
            {extendedOptions.map((pkg, idx) => (
              <div key={`${pkg.id}-${idx}`} className="relative flex-shrink-0" style={{ width: 'calc(33.333% - 0.5rem)' }}>
                <label 
                  className="cursor-pointer block"
                  onMouseEnter={() => setHoveredId(pkg.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {!isPromo && (
                    <input
                      type="radio"
                      name="packaging"
                      value={pkg.id}
                      checked={selectedId === pkg.id}
                      onChange={() => onSelect?.(pkg.id)}
                      className="sr-only"
                    />
                  )}
                  <div className={`relative w-full aspect-square rounded-xl border-3 transition-all transform ${ 
                    hoveredId === pkg.id ? 'scale-110 z-20' : 'scale-100'
                  } ${
                    !isPromo && selectedId === pkg.id 
                      ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className={`w-full h-full ${pkg.image ? 'bg-gray-50' : `bg-gradient-to-br ${pkg.gradient}`} rounded-xl flex items-center justify-center relative overflow-hidden`}>
                      {pkg.image ? (
                        <ImageWithFallback
                          src={pkg.image}
                          alt={pkg.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <span className="text-3xl">🎁</span>
                      )}
                      
                      {/* Selection indicator */}
                      {!isPromo && selectedId === pkg.id && (
                        <div className="absolute top-2 right-2 flex items-center gap-1 bg-emerald-600 rounded-full px-2 py-1">
                          <span className="text-white text-xs font-medium">выбрано</span>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}

                      {/* Увеличенный preview при hover */}
                      {hoveredId === pkg.id && (
                        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center p-4 animate-in fade-in zoom-in duration-200">
                          <div className="text-center">
                            {pkg.image ? (
                              <ImageWithFallback
                                src={pkg.image}
                                alt={pkg.name}
                                className="w-full h-full object-contain rounded-xl mb-2"
                              />
                            ) : (
                              <span className="text-5xl mb-2 block">🎁</span>
                            )}
                            <p className="text-sm font-medium text-gray-900">{pkg.name}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-900 font-medium mt-2 text-center leading-tight">{pkg.name}</p>
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
              aria-label={`Перейти к варианту ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}