import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { SuccessScreen } from './SuccessScreen'

interface CorporateQuizSectionProps {
  onSubmit?: (data: any) => void
}

export function CorporateQuizSection({ onSubmit }: CorporateQuizSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })
  const [consent, setConsent] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  // Проверка валидности формы
  useEffect(() => {
    const isFormValid = 
      formData.name.trim() !== '' && 
      formData.phone.trim() !== '' && 
      consent
    setIsValid(isFormValid)
  }, [formData, consent])

  // Загрузка данных из localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('corporateQuizData')
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData)
        setFormData({
          name: parsed.name || '',
          phone: parsed.phone || ''
        })
        setConsent(parsed.consent || false)
      } catch (e) {
        console.error('Error loading quiz data:', e)
      }
    }
  }, [])

  // Сохранение данных в localStorage
  useEffect(() => {
    localStorage.setItem('corporateQuizData', JSON.stringify({ ...formData, consent }))
  }, [formData, consent])

  const handleFormChange = (name: string, value: string | boolean) => {
    if (name === 'consent') {
      setConsent(value as boolean)
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = () => {
    console.log('Form completed:', { ...formData, consent })
    if (onSubmit) {
      onSubmit({ ...formData, consent })
    }
    setIsCompleted(true)
    // Очистка данных после отправки
    localStorage.removeItem('corporateQuizData')
  }

  const handleReset = () => {
    setIsCompleted(false)
    setFormData({ name: '', phone: '' })
    setConsent(false)
  }

  const handleContinue = () => {
    const formSection = document.getElementById('request-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Градиентный фон с волнами - КОРПОРАТИВНЫЕ ЦВЕТА */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-500">
        {/* Волнообразные формы */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path
              d="M0,400 C300,200 600,600 1200,300 L1200,0 L0,0 Z"
              fill="url(#gradient1)"
            />
            <path
              d="M0,600 C400,400 800,700 1200,500 L1200,800 L0,800 Z"
              fill="url(#gradient2)"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - Заголовок */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">
                Получите персональное коммерческое предложение
              </h2>

              <p className="text-emerald-100 text-lg leading-relaxed">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут для расчёта персональной скидки и подготовки коммерческого предложения
              </p>
            </motion.div>
          </div>

          {/* Правая колонка - Форма */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <AnimatePresence mode="wait">
              {isCompleted ? (
                <SuccessScreen
                  onReset={handleReset}
                  onContinue={handleContinue}
                  showButtons={true}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl text-gray-900 mb-2">
                      Куда отправить предложение?
                    </h3>
                    <p className="text-gray-600">
                      Рассчитаем стоимость корпоративного заказа с вашей персональной скидкой за 5 минут
                    </p>
                  </div>

                  {/* Форма контактов */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Как вас зовут?
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleFormChange('name', e.target.value)}
                        placeholder="Введите ваше имя"
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-2">
                        Ваш номер телефона:
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleFormChange('phone', e.target.value)}
                        placeholder="+7 (xxx) xxx-xx-xx"
                        className="w-full"
                        required
                      />
                    </div>

                    {/* Согласие на обработку данных */}
                    <div className="flex items-start gap-3 mt-6">
                      <Checkbox
                        id="consent"
                        checked={consent}
                        onCheckedChange={(checked) => handleFormChange('consent', checked === true)}
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                        Даю согласие на обработку персональных данных
                      </label>
                    </div>

                    <p className="text-sm text-emerald-600 mt-4">
                      Отправим пакетное предложение под ваш запрос в WhatsApp или Telegram
                    </p>
                  </div>

                  {/* Кнопка отправки */}
                  <div className="flex items-center justify-end">
                    <Button
                      onClick={handleSubmit}
                      disabled={!isValid}
                      className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      Получить предложение
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
