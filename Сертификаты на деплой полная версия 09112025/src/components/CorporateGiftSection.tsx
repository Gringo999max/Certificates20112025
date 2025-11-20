import React from 'react'
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface CorporateGiftSectionProps {
  onNavigateToGiftOptions?: () => void
}

const CorporateGiftSection = ({ onNavigateToGiftOptions }: CorporateGiftSectionProps) => {
  const handleCorporateClick = () => {
    // Переход на страницу корпоративных подарков
    console.log('Переход на страницу корпоративных подарков')
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-gray-200 rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50/50 to-white">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Левая часть - контент (3 колонки) */}
            <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 mb-6 rounded-lg px-4 py-2 w-fit border border-amber-200">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-semibold">Для бизнеса</span>
              </div>
              
              <h2 className="text-gray-900 mb-4 max-w-md leading-tight">
                Корпоративные подарки
              </h2>
              
              <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
                Подарите незабываемые впечатления вашим сотрудникам, клиентам и партнерам. 
                Сертификаты на глэмпинг — это изысканное решение для укрепления деловых отношений.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Персональное сопровождение заказа</div>
                    <div className="text-xs text-gray-500">Выгодные условия для корпоративных клиентов</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Брендирование сертификатов</div>
                    <div className="text-xs text-gray-500">Ваш логотип на подарочных сертификатах</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Корпоративные скидки</div>
                    <div className="text-xs text-gray-500">Специальные тарифы от 10 сертификатов</div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleCorporateClick}
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-xl hover:bg-gray-800 transition-all duration-300 group shadow-md hover:shadow-lg w-fit"
              >
                <span className="font-medium">Узнать подробнее</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Правая часть - изображение (2 колонки) */}
            <div className="lg:col-span-2 relative overflow-hidden min-h-[400px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1741217531460-fb52b48107b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGV4Y2hhbmdpbmclMjBnaWZ0JTIwZWxlZ2FudCUyMG1pbmltYWx8ZW58MXx8fHwxNzU3NTk4MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Элегантный обмен подарками"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-900/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CorporateGiftSection
