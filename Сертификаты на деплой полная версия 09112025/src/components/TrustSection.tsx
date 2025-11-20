import React from 'react'
import { CheckCircle, Building2, Shield, Package, Percent, Award } from 'lucide-react'
import { motion } from 'motion/react'

export function TrustSection() {
  const benefits = [
    {
      icon: <Percent className="w-5 h-5" />,
      title: "Экономия до 30% бюджета",
      description: "Эксклюзивные партнерские скидки в 500+ глэмпингах по всей России"
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Персональный менеджер",
      description: "Индивидуальное сопровождение и консультации на всех этапах сотрудничества"
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: "Брендинг под компанию",
      description: "Персонализация сертификатов с логотипом и фирменными элементами"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Корпоративные условия",
      description: "Гибкая система скидок и особые условия для постоянных клиентов"
    }
  ]

  // SVG логотипы компаний (упрощенные версии)
  const companyLogos = [
    {
      name: "Unicredit",
      logo: (
        <div className="h-12 flex items-center justify-center px-6">
          <svg viewBox="0 0 120 40" className="h-8 w-auto">
            <rect x="0" y="15" width="8" height="8" fill="#E31837" />
            <rect x="10" y="15" width="8" height="8" fill="#E31837" />
            <rect x="20" y="15" width="8" height="8" fill="#E31837" />
            <text x="35" y="25" className="fill-gray-700 text-sm font-bold">UniCredit</text>
          </svg>
        </div>
      )
    },
    {
      name: "Gazprom",
      logo: (
        <div className="h-12 flex items-center justify-center px-6">
          <svg viewBox="0 0 140 40" className="h-8 w-auto">
            <circle cx="20" cy="20" r="12" fill="#0066CC" />
            <text x="40" y="25" className="fill-blue-700 text-sm font-bold">ГАЗПРОМ</text>
          </svg>
        </div>
      )
    },
    {
      name: "Tatneft",
      logo: (
        <div className="h-12 flex items-center justify-center px-6">
          <svg viewBox="0 0 120 40" className="h-8 w-auto">
            <path d="M8 8 L32 8 L20 24 Z" fill="#00AA44" />
            <text x="40" y="25" className="fill-green-700 text-sm font-bold">Tatneft</text>
          </svg>
        </div>
      )
    },
    {
      name: "Peak",
      logo: (
        <div className="h-12 flex items-center justify-center px-6">
          <svg viewBox="0 0 100 40" className="h-8 w-auto">
            <path d="M8 28 L20 8 L32 28 Z" fill="#666666" />
            <text x="40" y="25" className="fill-gray-700 text-sm font-bold">PEAK</text>
          </svg>
        </div>
      )
    },
    {
      name: "УралВагонЗавод",
      logo: (
        <div className="h-12 flex items-center justify-center px-6">
          <svg viewBox="0 0 180 40" className="h-8 w-auto">
            <rect x="8" y="12" width="24" height="16" rx="2" fill="#FF6600" />
            <circle cx="12" cy="32" r="3" fill="#FF6600" />
            <circle cx="28" cy="32" r="3" fill="#FF6600" />
            <text x="40" y="22" className="fill-orange-700 text-xs font-bold">УралВагон</text>
            <text x="40" y="32" className="fill-orange-700 text-xs font-bold">Завод</text>
          </svg>
        </div>
      )
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-emerald-500"></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-blue-500"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 rounded-full bg-purple-500"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 rounded-full bg-pink-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              175+ компаний выбирают glamping.RF
            </h2>
            
            {/* Animated Badge with years */}
            <motion.div 
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 12 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-8 bg-red-500 text-white px-3 py-1 rounded-full shadow-lg transform"
            >
              <div className="font-bold text-lg">5</div>
            </motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-emerald-600 font-medium mt-4"
          >
            5 лет на рынке впечатлений
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors"
                  >
                    <div className="text-emerald-600 group-hover:text-emerald-700 transition-colors">
                      {benefit.icon}
                    </div>
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="w-6 h-6 text-emerald-600" />
              <h3 className="text-xl font-bold text-gray-900">
                Нам доверяют крупные компании
              </h3>
            </div>
            <p className="text-gray-500">
              Более 175 компаний уже выбрали glamping.RF для корпоративных подарков
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {companyLogos.map((company, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer"
              >
                {company.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">
                Присоединяйтесь к успешным компаниям
              </h3>
              <p className="text-emerald-100 mb-4">
                Получите персональное предложение с максимальными скидками
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Бесплатная консультация</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Персональные условия</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Быстрое оформление</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}