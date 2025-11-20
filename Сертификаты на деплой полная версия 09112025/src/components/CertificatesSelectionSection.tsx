import React from 'react'
import { Button } from './ui/button'
import { CheckCircle } from 'lucide-react'
import certificateImage from 'figma:asset/59d0cd518141401a74312451a994de3362fa4335.png'

interface CertificatesSelectionSectionProps {
  onSelectGift?: () => void
}

export function CertificatesSelectionSection({ onSelectGift }: CertificatesSelectionSectionProps) {
  const packages = [
    {
      title: "Необычные выходные",
      price: "6 700 ₽",
      period: "/ночь",
      variants: "400+ вариантов для двоих",
      description: "Глэмпинги и необычные варианты для отдыха на природе",
      features: ["Pet-friendly локации", "Звездное небо", "Костры и барбекю"],
      popular: false
    },
    {
      title: "Побег из города", 
      price: "9 900 ₽",
      period: "/ночь",
      variants: "300+ вариантов для двоих",
      description: "Домики и коттеджи для комфортного отдыха на природе",
      features: ["Уединенные локации", "Панорамные виды", "Активности"],
      popular: true
    },
    {
      title: "Семейный уикенд",
      price: "13 700 ₽", 
      period: "/ночь",
      variants: "200+ вариантов для семьи",
      description: "Глэмпинги и коттеджи для отдыха с детьми",
      features: ["Детские зоны", "Семейные активности", "Безопасность"],
      popular: false
    },
    {
      title: "Релакс с SPA",
      price: "18 900 ₽",
      period: "/ночь", 
      variants: "150+ вариантов",
      description: "Глэмпинги с банями, джакузи и SPA-процедурами",
      features: ["Бани и сауны", "Джакузи", "Массаж"],
      popular: false
    }
  ]

  return (
    <section id="certificates-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Выберите подарочный сертификат</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-white border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${pkg.popular ? 'border-emerald-500 shadow-lg' : 'border-gray-200'}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-600">{pkg.period}</span>
                </div>
                <p className="text-sm text-emerald-600 font-medium mb-2">{pkg.variants}</p>
                <p className="text-sm text-gray-600">{pkg.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${pkg.popular ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                onClick={onSelectGift}
              >
                Выбрать пакет
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}