import React from 'react'
import { motion } from 'motion/react'
import { Shield, Heart, TrendingUp, BarChart3 } from 'lucide-react'

export function BusinessResultsSection() {
  const businessResults = [
    {
      icon: Shield,
      title: 'Профилактика выгорания',
      description: 'Эмоциональная разгрузка вдали от экранов',
      metric: '↓ 23% больничных',
      color: 'emerald'
    },
    {
      icon: TrendingUp,
      title: 'Рост продуктивности',
      description: 'Сотрудник возвращается заряженным и сфокусированным',
      metric: '↑ 18% производительность',
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Укрепление лояльности',
      description: 'Показывает, что компания заботится о личном благополучии',
      metric: 'NPS +32 пункта',
      color: 'rose'
    }
  ]

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Измеримые бизнес-результаты
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Отслеживайте реальное влияние well-being программы на команду через панель управления
            </p>
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-4 min-w-max">
              {businessResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group w-72"
                >
                  <div className="h-full bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border-2 border-gray-100 shadow-lg">
                    {/* Icon */}
                    <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${
                      result.color === 'emerald' ? 'from-emerald-100 to-emerald-200' :
                      result.color === 'blue' ? 'from-blue-100 to-blue-200' :
                      'from-rose-100 to-rose-200'
                    } flex items-center justify-center`}>
                      <result.icon className={`w-7 h-7 ${
                        result.color === 'emerald' ? 'text-emerald-600' :
                        result.color === 'blue' ? 'text-blue-600' :
                        'text-rose-600'
                      }`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {result.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {result.description}
                    </p>

                    {/* Metric badge - УВЕЛИЧЕННЫЙ РАЗМЕР */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-base font-bold ${
                      result.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                      result.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                      'bg-rose-100 text-rose-700'
                    }`}>
                      <BarChart3 className="w-4 h-4" />
                      {result.metric}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-6">
            {businessResults.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="h-full bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${
                    result.color === 'emerald' ? 'from-emerald-100 to-emerald-200' :
                    result.color === 'blue' ? 'from-blue-100 to-blue-200' :
                    'from-rose-100 to-rose-200'
                  } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <result.icon className={`w-7 h-7 ${
                      result.color === 'emerald' ? 'text-emerald-600' :
                      result.color === 'blue' ? 'text-blue-600' :
                      'text-rose-600'
                    }`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {result.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {result.description}
                  </p>

                  {/* Metric badge - УВЕЛИЧЕННЫЙ РАЗМЕР */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-base font-bold ${
                    result.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                    result.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                    'bg-rose-100 text-rose-700'
                  }`}>
                    <BarChart3 className="w-4 h-4" />
                    {result.metric}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
