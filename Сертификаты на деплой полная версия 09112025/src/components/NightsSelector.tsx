import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Moon, Calendar, Plus } from 'lucide-react'

interface NightsSelectorProps {
  value: number
  onChange: (nights: number) => void
  minNights?: number
  maxNights?: number
  basePrice?: number
  className?: string
}

export function NightsSelector({ 
  value, 
  onChange, 
  minNights = 1, 
  maxNights = 30,
  basePrice = 0,
  className = "" 
}: NightsSelectorProps) {
  const [showCustomInput, setShowCustomInput] = useState(false)
  const [customNights, setCustomNights] = useState(value.toString())

  const quickOptions = [
    { nights: 1, label: '1 ночь', popular: false },
    { nights: 2, label: '2 ночи', popular: true },
    { nights: 3, label: '3 ночи', popular: false }
  ]

  const handleQuickSelect = (nights: number) => {
    onChange(nights)
    setShowCustomInput(false)
  }

  const handleCustomSubmit = () => {
    const nights = parseInt(customNights)
    if (nights >= minNights && nights <= maxNights) {
      onChange(nights)
      setShowCustomInput(false)
    }
  }

  const handleCustomInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '' || /^\d+$/.test(value)) {
      setCustomNights(value)
    }
  }

  const getTotalPrice = (nights: number) => {
    return basePrice * nights
  }

  const formatNightsText = (nights: number) => {
    if (nights === 1) return '1 ночь'
    if (nights >= 2 && nights <= 4) return `${nights} ночи`
    return `${nights} ночей`
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <Moon className="w-4 h-4 text-emerald-600" />
        <Label className="text-sm font-medium text-gray-900">
          Количество ночей
        </Label>
      </div>

      {/* Быстрый выбор */}
      <div className="grid grid-cols-3 gap-2">
        {quickOptions.map((option) => (
          <Button
            key={option.nights}
            variant={value === option.nights ? "default" : "outline"}
            size="sm"
            onClick={() => handleQuickSelect(option.nights)}
            className={`
              relative transition-all duration-200 text-xs px-3 py-2 h-auto
              ${value === option.nights 
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600' 
                : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
              }
            `}
          >
            {option.popular && (
              <div className="absolute -top-2 -right-1 bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                ✨
              </div>
            )}
            <div className="text-center">
              <div className="font-medium">{option.label}</div>
              {basePrice > 0 && (
                <div className="text-[10px] opacity-80 mt-0.5">
                  {getTotalPrice(option.nights).toLocaleString()} ₽
                </div>
              )}
            </div>
          </Button>
        ))}
      </div>

      {/* Кнопка "Другое количество" */}
      {!showCustomInput ? (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowCustomInput(true)}
          className="w-full border-dashed border-gray-300 hover:border-emerald-400 text-gray-600 hover:text-emerald-600 h-auto py-3"
        >
          <Plus className="w-4 h-4 mr-2" />
          Другое количество
        </Button>
      ) : (
        /* Поле ввода кастомного количества */
        <div className="space-y-3 p-3 border border-gray-200 rounded-lg bg-gray-50">
          <Label className="text-sm text-gray-700">
            Введите количество ночей ({minNights}-{maxNights})
          </Label>
          <div className="flex gap-2">
            <Input
              type="text"
              value={customNights}
              onChange={handleCustomInputChange}
              placeholder={`От ${minNights} до ${maxNights}`}
              className="flex-1 h-9"
              autoFocus
            />
            <Button
              size="sm"
              onClick={handleCustomSubmit}
              disabled={
                !customNights || 
                parseInt(customNights) < minNights || 
                parseInt(customNights) > maxNights
              }
              className="bg-emerald-600 hover:bg-emerald-700 h-9 px-4"
            >
              ОК
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowCustomInput(false)}
            className="w-full text-gray-500 hover:text-gray-700 h-8"
          >
            Отмена
          </Button>
        </div>
      )}

      {/* Отображение выбранного количества */}
      {value > 0 && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-800">
                Выбрано: {formatNightsText(value)}
              </span>
            </div>
            {basePrice > 0 && (
              <div className="text-right">
                <div className="text-lg font-bold text-emerald-600">
                  {getTotalPrice(value).toLocaleString()} ₽
                </div>
                <div className="text-xs text-emerald-600 opacity-80">
                  {basePrice.toLocaleString()} ₽ за ночь
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}