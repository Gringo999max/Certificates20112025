import React from 'react'
import { motion } from 'motion/react'
import { 
  BarChart3, CheckCircle, Package, TrendingUp, FileText, 
  Users, Clock, ArrowRight, Sparkles 
} from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'

interface HRDashboardShowcaseSectionProps {
  onNavigateToHRDashboard?: () => void
}

export function HRDashboardShowcaseSection({ onNavigateToHRDashboard }: HRDashboardShowcaseSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">Личный кабинет HR-менеджера</span>
          </div>
          <h2 className="mb-[14px] text-gray-900 max-w-5xl mx-auto text-[30px] font-bold mt-[0px]">
            Управляйте Well-being программой из единой панели
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Профессиональный инструмент для HR с детальной аналитикой, автоматическими отчетами 
            и измерением эффективности инвестиций в здоровье команды
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Main features list */}
              <div className="space-y-4">
                {[
                  {
                    icon: BarChart3,
                    title: 'Аналитика в реальном времени',
                    description: 'Dashboard с графиками активаций, использования и воронкой конверсии',
                    color: 'emerald'
                  },
                  {
                    icon: Package,
                    title: 'Управление сертификатами',
                    description: 'Массовые действия, фильтры по отделам, детальный просмотр и экспорт',
                    color: 'blue'
                  },
                  {
                    icon: TrendingUp,
                    title: 'ROI калькулятор',
                    description: 'Измеряйте экономию на больничных, рост продуктивности и окупаемость',
                    color: 'teal'
                  },
                  {
                    icon: FileText,
                    title: 'Автоматические отчеты',
                    description: 'Executive Summary, Well-being метрики, финансовая отчетность',
                    color: 'amber'
                  },
                  {
                    icon: Users,
                    title: 'Well-being метрики',
                    description: 'NPS сотрудников, снижение больничных, удовлетворенность программой',
                    color: 'purple'
                  },
                  {
                    icon: Clock,
                    title: 'Экономия времени',
                    description: 'Автоматизация рутины освобождает 10+ часов HR в месяц',
                    color: 'rose'
                  },
                ].map((feature, index) => {
                  const bgColorClass = {
                    emerald: 'bg-emerald-100',
                    blue: 'bg-blue-100',
                    teal: 'bg-teal-100',
                    amber: 'bg-amber-100',
                    purple: 'bg-purple-100',
                    rose: 'bg-rose-100'
                  }[feature.color]
                  
                  const iconColorClass = {
                    emerald: 'text-emerald-600',
                    blue: 'text-blue-600',
                    teal: 'text-teal-600',
                    amber: 'text-amber-600',
                    purple: 'text-purple-600',
                    rose: 'text-rose-600'
                  }[feature.color]

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 items-start group"
                    >
                      <div className={`w-12 h-12 ${bgColorClass} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <feature.icon className={`w-6 h-6 ${iconColorClass}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  onClick={onNavigateToHRDashboard}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                >
                  Открыть демо панели
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Right side - Animated Metrics & Browser Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Animated Metrics Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '150', label: 'Выдано сертификатов', color: 'emerald', delay: 0 },
                  { value: '75%', label: 'Активировано', color: 'blue', delay: 0.1 },
                  { value: '+13%', label: 'ROI программы', color: 'teal', delay: 0.2 },
                  { value: '270k₽', label: 'Экономия за год', color: 'amber', delay: 0.3 },
                ].map((metric, index) => {
                  const borderColorClass = {
                    emerald: 'border-emerald-200',
                    blue: 'border-blue-200',
                    teal: 'border-teal-200',
                    amber: 'border-amber-200'
                  }[metric.color]
                  
                  const textColorClass = {
                    emerald: 'text-emerald-600',
                    blue: 'text-blue-600',
                    teal: 'text-teal-600',
                    amber: 'text-amber-600'
                  }[metric.color]

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: metric.delay, type: 'spring', stiffness: 100 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <Card className={`p-6 border-2 ${borderColorClass} bg-white hover:shadow-xl transition-all`}>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: metric.delay + 0.3 }}
                          className={`text-3xl font-bold ${textColorClass} mb-2`}
                        >
                          {metric.value}
                        </motion.div>
                        <p className="text-sm text-gray-600">{metric.label}</p>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>

              {/* Mini Browser Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                {/* Browser window mockup */}
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
                  {/* Browser header */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 ml-2">
                      глэмпинги.рф/hr-dashboard
                    </div>
                  </div>

                  {/* Dashboard preview content */}
                  <div className="p-6 bg-gray-50">
                    {/* Mini header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="h-3 w-32 bg-gray-300 rounded mb-2" />
                        <div className="h-2 w-24 bg-gray-200 rounded" />
                      </div>
                      <div className="w-8 h-8 bg-emerald-500 rounded-full" />
                    </div>

                    {/* Mini metrics */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-3 rounded-lg border border-gray-200">
                          <div className="h-2 w-full bg-emerald-200 rounded mb-2" />
                          <div className="h-4 w-8 bg-emerald-400 rounded mb-1" />
                          <div className="h-1 w-12 bg-gray-200 rounded" />
                        </div>
                      ))}
                    </div>

                    {/* Mini chart */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="h-2 w-24 bg-gray-300 rounded mb-3" />
                      <div className="flex items-end gap-1 h-20">
                        {[40, 55, 65, 50, 70, 85, 75, 90].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: 'spring' }}
                  className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Live Demo</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
