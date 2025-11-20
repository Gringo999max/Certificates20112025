import React, { useState, useCallback, Suspense } from 'react'
import { Toaster } from './components/ui/sonner'
import { CartProvider } from './components/CartContext'
import { FloatingCartButton } from './components/FloatingCartButton'
import { ErrorBoundary } from './components/ErrorBoundary'
import { DevNavigationButton } from './components/DevNavigationButton'

// Import only essential home page components synchronously
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ExtendedGlampingSection from './components/ExtendedGlampingSection'
import GiftOptionsSection from './components/GiftOptionsSection'
import ReviewsSection from './components/ReviewsSection'
import CorporateGiftSection from './components/CorporateGiftSection'
import HowItWorksSection from './components/HowItWorksSection'
import FAQSection from './components/FAQSection'
import RegionsSection from './components/RegionsSection'
import PromoSection from './components/PromoSection'
import Footer from './components/Footer'

// Lazy load page components to improve initial load time
const DeliveryPaymentPage = React.lazy(() => import('./components/DeliveryPaymentPage'))
const CorporateB2BPage = React.lazy(() => import('./components/CorporateB2BPage'))
const ReviewsPage = React.lazy(() => import('./components/ReviewsPage'))
const AboutPage = React.lazy(() => import('./components/AboutPage'))
const CertificateActivationPage = React.lazy(() => import('./components/CertificateActivationPage'))
const PetFriendlyGlampingPage = React.lazy(() => import('./components/PetFriendlyGlampingPage'))
const HowItWorksPage = React.lazy(() => import('./components/HowItWorksPage'))
const HowItWorksVariants = React.lazy(() => import('./components/HowItWorksVariants'))
const HowItWorksTestPage = React.lazy(() => import('./components/HowItWorksTestPage'))
const MobileCheckoutLayoutTest = React.lazy(() => import('./components/MobileCheckoutLayoutTest'))
const AnthropicDeliveryTestPage = React.lazy(() => import('./components/AnthropicDeliveryTestPage'))
const HowItWorksB2BTestPage = React.lazy(() => import('./components/HowItWorksB2BTestPage').then(module => ({ default: module.HowItWorksB2BTestPage })))
const HRProcessTestPage = React.lazy(() => import('./components/HRProcessTestPage').then(module => ({ default: module.HRProcessTestPage })))
const HRProcessLayoutTestPage = React.lazy(() => import('./components/HRProcessLayoutTestPage').then(module => ({ default: module.HRProcessLayoutTestPage })))
const HRDashboardPage = React.lazy(() => import('./components/HRDashboardPage'))
const HRDashboardShowcaseTestPage = React.lazy(() => import('./components/HRDashboardShowcaseTestPage'))
const NewYearPromoTestPage = React.lazy(() => import('./components/NewYearPromoTestPage'))
const CorporateB2BFinalCTAVariants = React.lazy(() => import('./components/CorporateB2BFinalCTAVariants'))
const B2BPackagesTiersTestPage = React.lazy(() => import('./components/B2BPackagesTiersVariants').then(module => ({ default: module.B2BPackagesTiersTestPage })))
const B2BPackagesByPriceTestPage = React.lazy(() => import('./components/B2BPackagesByPriceVariants').then(module => ({ default: module.B2BPackagesByPriceTestPage })))
const B2BPackagesByPriceV2TestPage = React.lazy(() => import('./components/B2BPackagesByPriceV2Variants').then(module => ({ default: module.B2BPackagesByPriceV2TestPage })))
const CorporateGiftReasonsTestPage = React.lazy(() => import('./components/CorporateGiftReasonsTestPage').then(module => ({ default: module.CorporateGiftReasonsTestPage })))
const CorporateGiftSectionHomeTestPage = React.lazy(() => import('./components/CorporateGiftSectionHomeVariants').then(module => ({ default: module.CorporateGiftSectionHomeTestPage })))

// Enhanced loading component with better UX
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      <p className="text-sm text-gray-600">Загружаем страницу...</p>
    </div>
  </div>
)

// Error fallback component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="min-h-screen flex items-center justify-center bg-white p-6">
    <div className="text-center space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Что-то пошло не так</h2>
      <p className="text-sm text-gray-600">Произошла ошибка при загрузке страницы</p>
      <button 
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
      >
        Перезагрузить страницу
      </button>
    </div>
  </div>
)

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Use useCallback to prevent unnecessary re-renders
  const navigateToDelivery = useCallback(() => {
    setCurrentPage('delivery')
  }, [])

  const navigateToHome = useCallback(() => {
    setCurrentPage('home')
  }, [])

  const navigateToCorporate = useCallback(() => {
    setCurrentPage('corporate')
  }, [])

  const navigateToReviews = useCallback(() => {
    setCurrentPage('reviews')
  }, [])

  const navigateToAbout = useCallback(() => {
    setCurrentPage('about')
  }, [])

  const navigateToActivation = useCallback(() => {
    setCurrentPage('activation')
  }, [])

  const navigateToPetFriendly = useCallback(() => {
    setCurrentPage('pet-friendly')
  }, [])

  const navigateToHowItWorks = useCallback(() => {
    setCurrentPage('how-it-works')
  }, [])

  const navigateToHowItWorksVariants = useCallback(() => {
    setCurrentPage('how-it-works-variants')
  }, [])

  const navigateToHowItWorksTest = useCallback(() => {
    setCurrentPage('how-it-works-test')
  }, [])

  const navigateToMobileCheckoutTest = useCallback(() => {
    setCurrentPage('mobile-checkout-test')
  }, [])

  const navigateToAnthropicDeliveryTest = useCallback(() => {
    setCurrentPage('anthropic-delivery-test')
  }, [])

  const navigateToHowItWorksB2BTest = useCallback(() => {
    setCurrentPage('how-it-works-b2b-test')
  }, [])

  const navigateToHRProcessTest = useCallback(() => {
    setCurrentPage('hr-process-test')
  }, [])

  const navigateToHRDashboard = useCallback(() => {
    setCurrentPage('hr-dashboard')
  }, [])

  const navigateToHRDashboardShowcaseTest = useCallback(() => {
    setCurrentPage('hr-dashboard-showcase-test')
  }, [])

  const navigateToHRProcessLayoutTest = useCallback(() => {
    setCurrentPage('hr-process-layout-test')
  }, [])

  const navigateToNewYearPromoTest = useCallback(() => {
    setCurrentPage('new-year-promo-test')
  }, [])

  const navigateToB2BFinalCTATest = useCallback(() => {
    setCurrentPage('b2b-final-cta-test')
  }, [])

  const navigateToB2BPackagesTest = useCallback(() => {
    setCurrentPage('b2b-packages-test')
  }, [])

  const navigateToB2BPackagesPriceTest = useCallback(() => {
    setCurrentPage('b2b-packages-price-test')
  }, [])

  const navigateToB2BPackagesPriceV2Test = useCallback(() => {
    setCurrentPage('b2b-packages-price-v2-test')
  }, [])

  const navigateToCorporateGiftReasonsTest = useCallback(() => {
    setCurrentPage('corporate-gift-reasons-test')
  }, [])

  const navigateToCorporateGiftHomeTest = useCallback(() => {
    setCurrentPage('corporate-gift-home-test')
  }, [])

  const navigateToGiftOptions = useCallback(() => {
    setCurrentPage('home')
    // Небольшая задержка для завершения рендера, затем скролл к секции
    setTimeout(() => {
      const certificatesElement = document.getElementById('certificates-section')
      if (certificatesElement) {
        certificatesElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }, [])

  // Common navigation props object
  const navigationProps = {
    onNavigateToHome: navigateToHome,
    onNavigateToGiftOptions: navigateToGiftOptions,
    onNavigateToDelivery: navigateToDelivery,
    onNavigateToCorporate: navigateToCorporate,
    onNavigateToReviews: navigateToReviews,
    onNavigateToAbout: navigateToAbout,
    onNavigateToActivation: navigateToActivation,
    onNavigateToHowItWorks: navigateToHowItWorks,
    onNavigateToHRDashboard: navigateToHRDashboard
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'delivery':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <DeliveryPaymentPage {...navigationProps} />
          </Suspense>
        )
      case 'corporate':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <CorporateB2BPage {...navigationProps} />
          </Suspense>
        )
      case 'reviews':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <ReviewsPage {...navigationProps} />
          </Suspense>
        )

      case 'about':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <AboutPage {...navigationProps} />
          </Suspense>
        )
      case 'activation':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <CertificateActivationPage {...navigationProps} />
          </Suspense>
        )
      case 'pet-friendly':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <PetFriendlyGlampingPage {...navigationProps} />
          </Suspense>
        )
      case 'how-it-works':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HowItWorksPage {...navigationProps} />
          </Suspense>
        )
      case 'how-it-works-variants':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HowItWorksVariants onNavigateToGiftOptions={navigateToGiftOptions} />
          </Suspense>
        )
      case 'how-it-works-test':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HowItWorksTestPage onNavigateToHome={navigateToHome} />
          </Suspense>
        )
      case 'mobile-checkout-test':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <MobileCheckoutLayoutTest onBack={navigateToHome} />
          </Suspense>
        )
      case 'anthropic-delivery-test':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <AnthropicDeliveryTestPage onNavigateToHome={navigateToHome} />
          </Suspense>
        )
      case 'how-it-works-b2b-test':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HowItWorksB2BTestPage onBack={navigateToHome} />
          </Suspense>
        )
      case 'hr-process-test':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HRProcessTestPage onBack={navigateToHome} />
          </Suspense>
        )
      case 'hr-dashboard':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HRDashboardPage />
          </Suspense>
        )
      case 'hr-dashboard-showcase-test':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HRDashboardShowcaseTestPage 
              onBack={navigateToHome}
              onNavigateToHRDashboard={navigateToHRDashboard}
            />
          </Suspense>
        )
      case 'hr-process-layout-test':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HRProcessLayoutTestPage onBack={navigateToHome} />
          </Suspense>
        )
      case 'new-year-promo-test':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <NewYearPromoTestPage onBack={navigateToHome} />
          </Suspense>
        )
      case 'b2b-final-cta-test':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <CorporateB2BFinalCTAVariants />
          </Suspense>
        )
      case 'b2b-packages-test':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <B2BPackagesTiersTestPage />
          </Suspense>
        )
      case 'b2b-packages-price-test':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <B2BPackagesByPriceTestPage />
          </Suspense>
        )
      case 'b2b-packages-price-v2-test':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <B2BPackagesByPriceV2TestPage />
          </Suspense>
        )
      case 'corporate-gift-reasons-test':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <CorporateGiftReasonsTestPage />
          </Suspense>
        )
      case 'corporate-gift-home-test':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <CorporateGiftSectionHomeTestPage />
          </Suspense>
        )

      default:
        return (
          <div className="min-h-screen bg-white">
            <Header {...navigationProps} />
            <HeroSection />
            <ExtendedGlampingSection onNavigateToPetFriendly={navigateToPetFriendly} />
            <GiftOptionsSection />
            <ReviewsSection />
            <CorporateGiftSection onNavigateToGiftOptions={navigateToGiftOptions} />
            <HowItWorksSection onNavigateToGiftOptions={navigateToGiftOptions} />
            <FAQSection onNavigateToHowItWorks={navigateToHowItWorks} />
            <RegionsSection />
            <PromoSection onNavigateToGiftOptions={navigateToGiftOptions} />
            <Footer {...navigationProps} />
          </div>
        )
    }
  }

  return (
    <ErrorBoundary fallback={ErrorFallback}>
      <CartProvider>
        <ErrorBoundary>
          {renderPage()}
        </ErrorBoundary>
        <FloatingCartButton />
        {currentPage === 'home' && (
          <DevNavigationButton 
            onNavigateToHowItWorksTest={navigateToHowItWorksTest}
            onNavigateToHowItWorksVariants={navigateToHowItWorksVariants}
            onNavigateToHowItWorksB2BTest={navigateToHowItWorksB2BTest}
            onNavigateToHRProcessTest={navigateToHRProcessTest}
            onNavigateToAnthropicDeliveryTest={navigateToAnthropicDeliveryTest}
            onNavigateToHRDashboard={navigateToHRDashboard}
            onNavigateToHRDashboardShowcaseTest={navigateToHRDashboardShowcaseTest}
            onNavigateToHRProcessLayoutTest={navigateToHRProcessLayoutTest}
            onNavigateToNewYearPromoTest={navigateToNewYearPromoTest}
            onNavigateToB2BFinalCTATest={navigateToB2BFinalCTATest}
            onNavigateToB2BPackagesTest={navigateToB2BPackagesTest}
            onNavigateToB2BPackagesPriceTest={navigateToB2BPackagesPriceTest}
            onNavigateToB2BPackagesPriceV2Test={navigateToB2BPackagesPriceV2Test}
            onNavigateToCorporateGiftReasonsTest={navigateToCorporateGiftReasonsTest}
            onNavigateToCorporateGiftHomeTest={navigateToCorporateGiftHomeTest}
          />
        )}
        <Toaster />
      </CartProvider>
    </ErrorBoundary>
  )
}