import { Button } from './ui/button'
import { Zap, Star, Mail, Gift } from 'lucide-react'

interface NewHowItWorksSectionProps {
  onNavigateToGiftOptions?: () => void
}

export function NewHowItWorksSection({ onNavigateToGiftOptions }: NewHowItWorksSectionProps) {
  return (
    <section className="w-full py-10 px-6 bg-gradient-to-b from-white to-emerald-25">
      <div className="max-w-7xl mx-auto">
        {/* Trust Indicators */}
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
              <Gift className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">12,847 сертификатов подарено</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">4.9/5 рейтинг (1,847 отзывов)</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
              <Mail className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-gray-700">Доставка на email за 2 минуты</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-emerald-50 rounded-2xl p-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-emerald-900 mb-1">
                Готовы подарить незабываемые эмоции?
              </h4>
              <p className="text-sm text-emerald-700">
                Начните с выбора идеального сертификата прямо сейчас
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" onClick={onNavigateToGiftOptions}>
                Выбрать сертификат
              </Button>
            </div>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '⚡', stat: '< 1 мин', label: 'Время покупки' },
            { icon: '🎯', stat: '500+', label: 'Локаций' },
            { icon: '❤️', stat: '24 мес', label: 'Срок действия' },
            { icon: '🏆', stat: '98%', label: 'Довольных гостей' }
          ].map((item, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-xl border border-gray-100">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-2xl font-bold text-emerald-600 mb-1">{item.stat}</div>
              <div className="text-sm text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewHowItWorksSection