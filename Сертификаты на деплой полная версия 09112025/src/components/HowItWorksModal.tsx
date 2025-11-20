import { ImageWithFallback } from './figma/ImageWithFallback'
import step1Image from 'figma:asset/473c627910d9537f1ff6b8d1db2964f79ea88c39.png'
import step2Image from 'figma:asset/bf412929b27600f04ec71124eb18e40eb9366774.png'
import step3Image from 'figma:asset/0c06a85ab403bb43c88e7bd4c6161dca48c59a1d.png'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

export type CertificateType = 'default' | 'pet-friendly'

interface HowItWorksModalProps {
  isOpen: boolean
  onClose: () => void
  certificateType?: CertificateType
}

export function HowItWorksModal({ isOpen, onClose, certificateType = 'default' }: HowItWorksModalProps) {
  const [isMobile, setIsMobile] = useState(false)

  // Определяем, мобильное ли устройство
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Блокируем прокрутку body при открытии модального окна
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSelectCertificate = () => {
    // Закрываем модальное окно
    onClose()
    
    // Небольшая задержка перед прокруткой, чтобы модальное окно успело закрыться
    setTimeout(() => {
      const certificatesElement = document.getElementById('certificates-section')
      if (certificatesElement) {
        certificatesElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }

  // Определяем тексты в зависимости от типа сертификата
  const getStepContent = () => {
    const isPetFriendly = certificateType === 'pet-friendly'
    
    return {
      step2Description: isPetFriendly 
        ? 'Среди 500+ локаций по всей России можно найти идеальное место для отдыха с питомцем'
        : 'Среди 500+ локаций по всей России можно найти идеальное место для отдыха',
      step3Description: isPetFriendly
        ? 'Можно отправляться на отдых и наслаждаться природой с питомцем'
        : 'Можно отправляться на отдых и наслаждаться природой'
    }
  }

  const stepContent = getStepContent()

  // Контент для мобильной версии (компактный)
  const MobileContent = () => (
    <div className="space-y-3 pb-4">
      {/* Шаг 1 */}
      <div className="relative bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
        <div className="absolute -top-2 -left-2 w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-md z-10">
          <span className="text-xs font-bold">1</span>
        </div>
        <div className="relative w-full h-16 mb-2 rounded-md overflow-hidden bg-amber-50">
          <ImageWithFallback
            src={step1Image}
            alt="Дарите сертификат"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xs mb-1 text-gray-900 font-semibold">
          Дарите сертификат
        </h3>
        <p className="text-[11px] text-gray-600 leading-snug">
          Доставка в красивой упаковке (от 2 часов) или мгновенно на email
        </p>
      </div>

      {/* Шаг 2 */}
      <div className="relative bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
        <div className="absolute -top-2 -left-2 w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-md z-10">
          <span className="text-xs font-bold">2</span>
        </div>
        <div className="relative w-full h-16 mb-2 rounded-md overflow-hidden bg-amber-50">
          <ImageWithFallback
            src={step2Image}
            alt="Получатель выбирает глэмпинг"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xs mb-1 text-gray-900 font-semibold">
          Получатель выбирает глэмпинг
        </h3>
        <p className="text-[11px] text-gray-600 leading-snug">
          {stepContent.step2Description}
        </p>
      </div>

      {/* Шаг 3 */}
      <div className="relative bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
        <div className="absolute -top-2 -left-2 w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-md z-10">
          <span className="text-xs font-bold">3</span>
        </div>
        <div className="relative w-full h-16 mb-2 rounded-md overflow-hidden bg-amber-50">
          <ImageWithFallback
            src={step3Image}
            alt="Глэмпинг забронирован и ждёт гостей"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xs mb-1 text-gray-900 font-semibold">
          Глэмпинг забронирован и ждёт гостей
        </h3>
        <p className="text-[11px] text-gray-600 leading-snug">
          {stepContent.step3Description}
        </p>
      </div>
    </div>
  )

  // Контент для десктопной версии
  const DesktopContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Шаг 1 */}
      <div className="relative bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-emerald-200 transition-all group">
        <div className="absolute -top-3 -left-3 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
          <span className="text-lg">1</span>
        </div>
        <div className="relative w-full h-32 mb-4 rounded-xl overflow-hidden bg-amber-50">
          <ImageWithFallback
            src={step1Image}
            alt="Дарите сертификат"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="text-base mb-2 text-gray-900">
          Дарите сертификат
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Доставка в красивой упаковке (от 2 часов) или мгновенно на email
        </p>
      </div>

      {/* Шаг 2 */}
      <div className="relative bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-emerald-200 transition-all group">
        <div className="absolute -top-3 -left-3 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
          <span className="text-lg">2</span>
        </div>
        <div className="relative w-full h-32 mb-4 rounded-xl overflow-hidden bg-amber-50">
          <ImageWithFallback
            src={step2Image}
            alt="Получатель выбирает глэмпинг"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="text-base mb-2 text-gray-900">
          Получатель выбирает глэмпинг
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {stepContent.step2Description}
        </p>
      </div>

      {/* Шаг 3 */}
      <div className="relative bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-emerald-200 transition-all group">
        <div className="absolute -top-3 -left-3 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
          <span className="text-lg">3</span>
        </div>
        <div className="relative w-full h-32 mb-4 rounded-xl overflow-hidden bg-amber-50">
          <ImageWithFallback
            src={step3Image}
            alt="Глэмпинг забронирован и ждёт гостей"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="text-base mb-2 text-gray-900">
          Глэмпинг забронирован и ждёт гостей
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {stepContent.step3Description}
        </p>
      </div>
    </div>
  )

  // МОБИЛЬНАЯ ВЕРСИЯ: Кастомное модальное окно без Drawer
  if (isMobile) {
    return (
      <>
        {/* Оверлей */}
        <div 
          className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-200"
          onClick={onClose}
        />
        
        {/* Модальное окно */}
        <div 
          className="fixed inset-x-0 bottom-0 z-50 animate-in slide-in-from-bottom duration-300"
          style={{ maxHeight: '90vh' }}
        >
          {/* Контейнер с белым фоном */}
          <div className="bg-white rounded-t-2xl shadow-2xl flex flex-col" style={{ height: '90vh' }}>
            {/* Серая полоска для свайпа */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1 bg-gray-300 rounded-full" />
            </div>
            
            {/* Header - фиксированный */}
            <div className="flex-shrink-0 border-b border-gray-200 pb-3 px-4">
              <div className="relative text-center">
                {/* Кнопка закрытия */}
                <button
                  onClick={onClose}
                  className="absolute top-0 right-0 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                
                <h3 className="text-lg text-gray-900 font-semibold pr-10">
                  Как это работает?
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  Три простых шага до незабываемого отдыха
                </p>
              </div>
            </div>
            
            {/* Прокручиваемая область - ключевая часть! */}
            <div 
              className="flex-1 overflow-y-auto overflow-x-hidden px-4 pt-4 bg-gray-50"
              style={{
                WebkitOverflowScrolling: 'touch',
                overscrollBehavior: 'contain'
              }}
            >
              <MobileContent />
            </div>
            
            {/* Footer с кнопкой - фиксированный */}
            <div className="flex-shrink-0 bg-white border-t border-gray-200 p-4 shadow-lg">
              <button
                onClick={handleSelectCertificate}
                className="w-full bg-[#007a55] hover:bg-[#006644] text-white px-6 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 shadow-md active:scale-95"
              >
                Выбрать сертификат
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  // ДЕСКТОПНАЯ ВЕРСИЯ: Modal
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Серый оверлей фон */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Контент модального окна */}
      <div className="relative z-10 w-full max-w-5xl mx-4">
        {/* Кнопка закрытия (X) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-7 h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors shadow-lg"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m18 6-12 12" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        
        {/* Основной контент - карточки "Как это работает" */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="w-full p-8">
            {/* Заголовок */}
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-3 text-gray-900">
                Как это работает?
              </h2>
              <p className="text-gray-600">
                Три простых шага до незабываемого отдыха на природе
              </p>
            </div>

            <DesktopContent />

            {/* Кнопка "Выбрать сертификат" */}
            <div className="mt-8 text-center">
              <button
                onClick={handleSelectCertificate}
                className="bg-[#007a55] hover:bg-[#006644] text-white px-8 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Выбрать сертификат
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
