import React from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { 
  Activity, FileText, TrendingUp, Download, 
  BarChart3, Clock, CheckCircle
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import dashboardImage from 'figma:asset/99e0045f89765c03360c8598e07ee821f317aec7.png'

interface HRDashboardTrackingSectionProps {
  onNavigateToHRDashboard?: () => void
}

export function HRDashboardTrackingSection({ onNavigateToHRDashboard }: HRDashboardTrackingSectionProps) {
  const features = [
    {
      icon: Activity,
      title: 'Real-time данные',
      description: 'Мониторинг активации сертификатов в режиме реального времени',
      color: 'emerald'
    },
    {
      icon: FileText,
      title: 'Отчеты',
      description: 'Детальные отчеты по командам и департаментам',
      color: 'emerald'
    },
    {
      icon: TrendingUp,
      title: 'ROI анализ',
      description: 'Калькулятор возврата инвестиций в Well-being',
      color: 'emerald'
    },
    {
      icon: Download,
      title: 'Экспорт данных',
      description: 'Выгрузка данных в Excel и PDF форматах',
      color: 'emerald'
    }
  ]

  const dashboardStats = [
    { label: 'Аналитика', value: '20+ метрик' },
    { label: 'Обновление', value: 'Real-time' }
  ]

  return (
    <section className="py-8 lg:py-10 bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with step number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 lg:mb-6"
        >
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">4</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-200 px-2.5 sm:px-3 py-1 rounded-full mb-2">
                <BarChart3 className="w-3 h-3 text-emerald-700" />
                <span className="text-xs font-semibold text-emerald-700">Для HR-отдела</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Отслеживайте использование
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
                Получайте детальную аналитику и отчетность по использованию сертификатов. 
                Real-time мониторинг активации, детальные отчеты по командам, ROI калькулятор и экспорт данных.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content: Split Layout */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          {/* Left: Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2 lg:space-y-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-2 sm:gap-3 group"
              >
                <div className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-all duration-300`}>
                  <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 group-hover:text-white transition-colors duration-300`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-0.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA Button */}
            {onNavigateToHRDashboard && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="pt-1 sm:pt-2"
              >
                <Button
                  onClick={onNavigateToHRDashboard}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all group text-xs sm:text-sm"
                >
                  <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
                  <span className="hidden sm:inline">Открыть демо HR Dashboard</span>
                  <span className="sm:hidden">Открыть демо</span>
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Dashboard mockup with glow effect */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Dashboard image with browser chrome */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-xl overflow-hidden p-0.5">
                {/* Browser bar */}
                <div className="bg-white px-2 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 rounded-t-lg border-b">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400" />
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400" />
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-gray-100 rounded px-2 py-0.5 text-[10px] sm:text-xs text-gray-500 hidden sm:block">
                    https://глэмпинги.рф/hr-dashboard
                  </div>
                </div>
                
                {/* Dashboard screenshot */}
                <div className="bg-white">
                  <ImageWithFallback
                    src={dashboardImage} 
                    alt="HR Dashboard Interface" 
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Floating stats badges */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 flex-wrap justify-center max-w-full px-4">
                {dashboardStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md border border-emerald-100"
                  >
                    <div className="text-center">
                      <div className="text-[10px] sm:text-xs text-gray-500">{stat.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-emerald-600">{stat.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-6 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
