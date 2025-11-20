import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { SegmentsModal } from './SegmentsModal'
import { CertificatesPopover } from './CertificatesPopover'
import { DeliveryPopover } from './DeliveryPopover'
import { CorporatePopover } from './CorporatePopover'
import { ReviewsPopover } from './ReviewsPopover'
import { HowItWorksPopover } from './HowItWorksPopover'
import { AboutPopover } from './AboutPopover'
import imgLogoGreenWithBackground1 from "figma:asset/31e0ef610d564e9ff53b08c79ad785a20bb1a154.png"
import { imgLine2 } from "../imports/svg-b1e7o"
import { Menu } from 'lucide-react'

interface HeaderProps {
  onNavigateToDelivery?: () => void
  onNavigateToHome?: () => void
  onNavigateToGiftOptions?: () => void
  onNavigateToCorporate?: () => void
  onNavigateToReviews?: () => void
  onNavigateToAbout?: () => void
  onNavigateToActivation?: () => void
  onNavigateToHowItWorks?: () => void
}

export function Header({ onNavigateToDelivery, onNavigateToHome, onNavigateToGiftOptions, onNavigateToCorporate, onNavigateToReviews, onNavigateToAbout, onNavigateToActivation, onNavigateToHowItWorks }: HeaderProps) {
  const [showCertificatesPopover, setShowCertificatesPopover] = useState(false)
  const [showDeliveryPopover, setShowDeliveryPopover] = useState(false)
  const [showCorporatePopover, setShowCorporatePopover] = useState(false)
  const [showReviewsPopover, setShowReviewsPopover] = useState(false)
  const [showHowItWorksPopover, setShowHowItWorksPopover] = useState(false)
  const [showAboutPopover, setShowAboutPopover] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header className="w-full bg-white border-b-2 border-emerald-200 sticky top-0 z-50 backdrop-blur-sm bg-white shadow-md">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-6 py-3 relative">
        <div className="flex items-center justify-between min-h-[42px]">
          
          {/* Логотип */}
          <div className="flex-shrink-0 ml-4">
            <div 
              className="bg-center bg-cover bg-no-repeat h-[42px] w-36" 
              style={{ backgroundImage: `url('${imgLogoGreenWithBackground1}')` }}
            />
          </div>

          {/* Навигация для больших экранов */}
          <nav className="hidden xl:flex items-center gap-6 flex-1 justify-center">
            <div 
              className="relative"
              onMouseEnter={() => setShowCertificatesPopover(true)}
              onMouseLeave={() => setShowCertificatesPopover(false)}
            >
              <a 
                href="#" 
                className="text-sm text-[#007a55] hover:text-emerald-600 transition-colors font-medium tracking-tight whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigateToHome) {
                    onNavigateToHome()
                  }
                }}
              >
                Подарочные сертификаты
              </a>
              <CertificatesPopover 
                isVisible={showCertificatesPopover}
                onClose={() => setShowCertificatesPopover(false)}
              />
            </div>
            
            <div 
              className="relative"
              onMouseEnter={() => setShowDeliveryPopover(true)}
              onMouseLeave={() => setShowDeliveryPopover(false)}
            >
              <a 
                href="#" 
                className="text-sm text-[#007a55] hover:text-emerald-600 transition-colors font-medium tracking-tight whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigateToDelivery) {
                    onNavigateToDelivery()
                  }
                }}
              >
                Доставка и оплата
              </a>  
              <DeliveryPopover 
                isVisible={showDeliveryPopover}
                onClose={() => setShowDeliveryPopover(false)}
                onNavigateToDelivery={onNavigateToDelivery}
              />
            </div>
            
            <div 
              className="relative"
              onMouseEnter={() => setShowReviewsPopover(true)}
              onMouseLeave={() => setShowReviewsPopover(false)}
            >
              <a 
                href="#" 
                className="text-sm text-[#007a55] hover:text-emerald-600 transition-colors font-medium tracking-tight whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigateToReviews) {
                    onNavigateToReviews()
                  }
                }}
              >
                Отзывы
              </a>
              <ReviewsPopover 
                isVisible={showReviewsPopover}
                onClose={() => setShowReviewsPopover(false)}
                onNavigateToReviews={onNavigateToReviews}
              />
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setShowHowItWorksPopover(true)}
              onMouseLeave={() => setShowHowItWorksPopover(false)}
            >
              <a 
                href="#" 
                className="text-sm text-[#007a55] hover:text-emerald-600 transition-colors font-medium tracking-tight whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigateToHowItWorks) {
                    onNavigateToHowItWorks()
                  }
                }}
              >
                Как это работает
              </a>
              <HowItWorksPopover 
                isVisible={showHowItWorksPopover}
                onClose={() => setShowHowItWorksPopover(false)}
                onNavigateToHowItWorks={onNavigateToHowItWorks}
              />
            </div>
            
            <div 
              className="relative"
              onMouseEnter={() => setShowCorporatePopover(true)}
              onMouseLeave={() => setShowCorporatePopover(false)}
            >
              <a 
                href="#" 
                className="text-sm text-[#007a55] hover:text-emerald-600 transition-colors font-medium tracking-tight whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigateToCorporate) {
                    onNavigateToCorporate()
                  }
                }}
              >
                Корпоративные подарки
              </a>
              <CorporatePopover 
                isVisible={showCorporatePopover}
                onClose={() => setShowCorporatePopover(false)}
              />
            </div>
            
            <div 
              className="relative"
              onMouseEnter={() => setShowAboutPopover(true)}
              onMouseLeave={() => setShowAboutPopover(false)}
            >
              <a 
                href="#" 
                className="text-sm text-[#007a55] hover:text-emerald-600 transition-colors font-medium tracking-tight whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigateToAbout) {
                    onNavigateToAbout()
                  }
                }}
              >
                О Нас
              </a>
              <AboutPopover 
                isVisible={showAboutPopover}
                onClose={() => setShowAboutPopover(false)}
                onNavigateToAbout={onNavigateToAbout}
              />
            </div>
            
            <a 
              href="#" 
              className="text-sm text-[#007a55] hover:text-emerald-600 transition-colors font-medium tracking-tight whitespace-nowrap"
            >
              Контакты
            </a>
          </nav>

          {/* Кнопки справа для больших экранов */}
          <div className="hidden lg:flex items-center gap-2">
            <button 
              className="bg-white border border-[#a1f5da] rounded-sm h-[28px] px-3 flex items-center justify-center text-sm text-[#007a55] font-medium tracking-tight hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 whitespace-nowrap"
              onClick={() => {
                if (onNavigateToActivation) {
                  onNavigateToActivation()
                }
              }}
            >
              Активировать сертификат
            </button>
            
            <div className="flex items-center justify-center w-6 h-6 mx-1">
              <div className="w-6 h-px rotate-90 opacity-30">
                <img className="block w-full h-px" src={imgLine2} />
              </div>
            </div>
            
            <button 
              className="bg-[#1b916b] border border-[#1b916b] rounded-sm h-[28px] px-3 flex items-center justify-center text-sm text-white font-medium tracking-tight hover:bg-emerald-700 transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md"
              onClick={onNavigateToGiftOptions}
            >
              Выбрать объект
            </button>
          </div>

          {/* Мобильное меню - кнопка */}
          <button 
            className="lg:hidden text-[#007a55] hover:text-emerald-600 transition-colors p-2"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label="Открыть меню"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Мобильное меню */}
        {showMobileMenu && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-emerald-50 shadow-lg xl:hidden z-40">
            <nav className="px-4 py-4 space-y-3">
              <div>
                <button 
                  className="text-sm text-[#007a55] hover:text-emerald-600 transition-colors font-medium tracking-tight block py-2 w-full text-left"
                  onClick={() => {
                    if (onNavigateToHome) {
                      onNavigateToHome()
                      setShowMobileMenu(false)
                    } else {
                      setShowCertificatesPopover(!showCertificatesPopover)
                    }
                  }}
                >
                  Подарочные сертификаты
                </button>
                {showCertificatesPopover && (
                  <div className="pl-4 mt-2">
                    <CertificatesPopover 
                      isVisible={true}
                      onClose={() => setShowCertificatesPopover(false)}
                    />
                  </div>
                )}
              </div>
              
              <div>
                <button 
                  className="text-sm text-[#007a55] hover:text-emerald-600 transition-colors font-medium tracking-tight block py-2 w-full text-left"
                  onClick={() => {
                    if (onNavigateToDelivery) {
                      onNavigateToDelivery()
                      setShowMobileMenu(false)
                    } else {
                      setShowDeliveryPopover(!showDeliveryPopover)
                    }
                  }}
                >
                  Доставка и оплата
                </button>
                {showDeliveryPopover && (
                  <div className="pl-4 mt-2">
                    <DeliveryPopover 
                      isVisible={true}
                      onClose={() => setShowDeliveryPopover(false)}
                      onNavigateToDelivery={onNavigateToDelivery}
                    />
                  </div>
                )}
              </div>
              
              <a 
                href="#" 
                className="text-sm text-[#007a55] hover:text-emerald-600 transition-colors font-medium tracking-tight block py-2"
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigateToReviews) {
                    onNavigateToReviews()
                    setShowMobileMenu(false)
                  }
                }}
              >
                Отзывы
              </a>

              <a 
                href="#" 
                className="text-sm text-[#007a55] hover:text-emerald-600 transition-colors font-medium tracking-tight block py-2"
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigateToHowItWorks) {
                    onNavigateToHowItWorks()
                    setShowMobileMenu(false)
                  }
                }}
              >
                Как это работает
              </a>
              
              <div>
                <button 
                  className="text-sm text-[#007a55] hover:text-emerald-600 transition-colors font-medium tracking-tight block py-2 w-full text-left"
                  onClick={() => {
                    if (onNavigateToCorporate) {
                      onNavigateToCorporate()
                      setShowMobileMenu(false)
                    } else {
                      setShowCorporatePopover(!showCorporatePopover)
                    }
                  }}
                >
                  Корпоративные подарки
                </button>
                {showCorporatePopover && (
                  <div className="pl-4 mt-2">
                    <CorporatePopover 
                      isVisible={true}
                      onClose={() => setShowCorporatePopover(false)}
                    />
                  </div>
                )}
              </div>
              
              <a 
                href="#" 
                className="text-sm text-[#007a55] hover:text-emerald-600 transition-colors font-medium tracking-tight block py-2"
                onClick={(e) => {
                  e.preventDefault()
                  if (onNavigateToAbout) {
                    onNavigateToAbout()
                  }
                }}
              >
                О Нас
              </a>
              
              <a 
                href="#" 
                className="text-sm text-[#007a55] hover:text-emerald-600 transition-colors font-medium tracking-tight block py-2"
              >
                Контакты
              </a>

              <div className="flex flex-col gap-3 pt-4 border-t border-emerald-100">
                <button 
                  className="bg-white border border-[#a1f5da] rounded-sm h-[36px] px-4 flex items-center justify-center text-sm text-[#007a55] font-medium tracking-tight hover:bg-emerald-50 transition-colors"
                  onClick={() => {
                    if (onNavigateToActivation) {
                      onNavigateToActivation()
                      setShowMobileMenu(false)
                    }
                  }}
                >
                  Активировать сертификат
                </button>
                
                <button 
                  className="bg-[#1b916b] border border-[#1b916b] rounded-sm h-[36px] px-4 flex items-center justify-center text-sm text-white font-medium tracking-tight hover:bg-emerald-700 transition-colors shadow-sm"
                  onClick={onNavigateToGiftOptions}
                >
                  Выбрать объект
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header