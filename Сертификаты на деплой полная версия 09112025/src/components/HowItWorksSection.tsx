import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import step1Image from 'figma:asset/473c627910d9537f1ff6b8d1db2964f79ea88c39.png'
import step2Image from 'figma:asset/bf412929b27600f04ec71124eb18e40eb9366774.png'
import step3Image from 'figma:asset/0c06a85ab403bb43c88e7bd4c6161dca48c59a1d.png'

interface HowItWorksSectionProps {
  onNavigateToGiftOptions?: () => void
}

export function HowItWorksSection({ onNavigateToGiftOptions }: HowItWorksSectionProps) {
  const steps = [
    {
      number: 1,
      title: 'Дарите сертификат',
      description: 'Доставка в красивой упаковке (от 2 часов) или мгновенно на email',
      image: step1Image,
    },
    {
      number: 2,
      title: 'Получатель выбирает глэмпинг',
      description: 'Среди 500+ локаций по всей России можно найти идеальное место для отдыха',
      image: step2Image,
    },
    {
      number: 3,
      title: 'Глэмпинг забронирован и ждёт гостей',
      description: 'Можно отправляться на отдых и наслаждаться природой',
      image: step3Image,
    }
  ]

  return (
    <div className="w-full py-16 px-6 bg-gradient-to-b from-white via-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Как это работает?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Три простых шага до незабываемого отдыха на природе
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-200 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-xl">{step.number}</span>
              </div>

              {/* Image */}
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-amber-50">
                <ImageWithFallback
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Arrow connector (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-8 h-8 text-emerald-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all"
            onClick={onNavigateToGiftOptions}
          >
            Выбрать сертификат
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default HowItWorksSection