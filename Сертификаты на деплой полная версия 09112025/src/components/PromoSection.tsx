import { Button } from './ui/button'
import { Home, Zap, DollarSign, Target, Shield } from 'lucide-react'

interface PromoSectionProps {
  onNavigateToGiftOptions?: () => void
}

export function PromoSection({ onNavigateToGiftOptions }: PromoSectionProps) {
  const handleScrollToCertificates = () => {
    const certificatesElement = document.getElementById('certificates-section')
    if (certificatesElement) {
      certificatesElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    onNavigateToGiftOptions?.()
  }

  return (
    <section className="w-full px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 md:p-12 border-2 border-emerald-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Левая часть - заголовок и CTA */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-600 text-white rounded-full px-4 py-2 text-sm font-semibold mb-4">
                <Shield className="w-4 h-4" />
                Лидер рынка
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Почему Глэмпинги.рф
              </h2>
              
              <p className="text-gray-600 text-lg mb-6">
                Мы создали самый удобный сервис для поиска и бронирования глэмпингов в России
              </p>

              <Button 
                className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-6 text-lg"
                onClick={handleScrollToCertificates}
              >
                Выбрать сертификат
              </Button>
            </div>

            {/* Правая часть - компактный список */}
            <div className="grid grid-cols-1 gap-6">
              {/* Преимущество 1 */}
              <div className="group flex items-start gap-4 transition-all hover:translate-x-2">
                <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <Home className="w-7 h-7 text-white transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    Большой выбор глэмпингов
                  </h4>
                  <p className="text-gray-600">
                    более 500+ объектов размещения
                  </p>
                </div>
              </div>

              {/* Преимущество 2 */}
              <div className="group flex items-start gap-4 transition-all hover:translate-x-2">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <Zap className="w-7 h-7 text-white transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    Мгновенное бронирование
                  </h4>
                  <p className="text-gray-600">
                    Никаких звонков и ожидания подтверждения
                  </p>
                </div>
              </div>

              {/* Преимущество 3 */}
              <div className="group flex items-start gap-4 transition-all hover:translate-x-2">
                <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <DollarSign className="w-7 h-7 text-white transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    Актуальные цены
                  </h4>
                  <p className="text-gray-600">
                    Только проверенные цены в реальном времени
                  </p>
                </div>
              </div>

              {/* Преимущество 4 */}
              <div className="group flex items-start gap-4 transition-all hover:translate-x-2">
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  <Target className="w-7 h-7 text-white transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    Экспертная подборка
                  </h4>
                  <p className="text-gray-600">
                    Мы знаем о глэмпингах всё — от романтики до релакса
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoSection
