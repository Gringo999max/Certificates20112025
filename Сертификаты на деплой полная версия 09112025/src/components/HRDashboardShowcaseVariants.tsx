import React, { useState } from 'react'
import { motion } from 'motion/react'
import { 
  BarChart3, CheckCircle, Package, TrendingUp, FileText, 
  Users, Clock, ArrowRight, Sparkles, Monitor, Eye,
  Zap, Target, Shield, Award, ChevronRight, Play,
  LineChart, PieChart, Activity, Download
} from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'

interface VariantProps {
  onNavigateToHRDashboard?: () => void
}

// ============================================
// VARIANT A: "Laptop Hero" - Большой mockup в центре
// ============================================
export function HRDashboardShowcaseVariantA({ onNavigateToHRDashboard }: VariantProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-4 py-2 rounded-full mb-6">
            <Monitor className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-400">Личный кабинет нового поколения</span>
          </div>
          <h2 className="mb-6 text-white max-w-4xl mx-auto">
            HR Dashboard для управления Well-being программой
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Профессиональная аналитика, автоматизация и измерение ROI в одном интерфейсе
          </p>
        </motion.div>

        {/* Giant Laptop Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-12"
        >
          {/* Laptop frame */}
          <div className="relative">
            {/* Screen */}
            <div className="bg-gray-800 rounded-t-2xl p-2 border-2 border-gray-700">
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                {/* Browser chrome */}
                <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
                    https://глэмпинги.рф/hr-dashboard
                  </div>
                  <Shield className="w-4 h-4 text-emerald-500" />
                </div>

                {/* Dashboard content */}
                <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                  {/* Top metrics row */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                      { label: 'Активных', value: '127', icon: Users, color: 'emerald' },
                      { label: 'Активация', value: '84%', icon: TrendingUp, color: 'blue' },
                      { label: 'ROI', value: '+18%', icon: Target, color: 'purple' },
                      { label: 'NPS', value: '76', icon: Award, color: 'amber' }
                    ].map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="bg-white p-4 rounded-xl shadow-md border border-gray-100"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <metric.icon className={`w-4 h-4 text-${metric.color}-600`} />
                          <span className="text-xs text-gray-500">{metric.label}</span>
                        </div>
                        <div className={`text-2xl font-bold text-${metric.color}-600`}>{metric.value}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Динамика активаций</h3>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                      </div>
                    </div>
                    <div className="flex items-end gap-2 h-32">
                      {[45, 52, 48, 65, 72, 68, 78, 85, 82, 90, 88, 95].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                          className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop base */}
            <div className="h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl" />
            <div className="h-2 bg-gray-800 mx-auto" style={{ width: '60%' }} />

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: 'spring' }}
              className="absolute -left-8 top-1/4 bg-emerald-500 text-white px-4 py-3 rounded-2xl shadow-2xl"
            >
              <div className="text-2xl font-bold">150+</div>
              <div className="text-xs">Сертификатов</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, type: 'spring' }}
              className="absolute -right-8 top-1/3 bg-blue-500 text-white px-4 py-3 rounded-2xl shadow-2xl"
            >
              <div className="text-2xl font-bold">10+</div>
              <div className="text-xs">Часов экономии</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, type: 'spring' }}
              className="absolute left-1/4 -bottom-4 bg-purple-500 text-white px-4 py-3 rounded-2xl shadow-2xl"
            >
              <div className="text-2xl font-bold">270k₽</div>
              <div className="text-xs">Экономия/год</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {[
            { icon: BarChart3, title: 'Real-time аналитика', desc: 'Мгновенный доступ к метрикам' },
            { icon: FileText, title: 'Авто-отчеты', desc: 'Готовые отчеты для руководства' },
            { icon: Zap, title: 'Быстрый старт', desc: 'Настройка за 5 минут' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center hover:bg-white/20 transition-all"
            >
              <feature.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={onNavigateToHRDashboard}
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-12 py-6 rounded-full text-lg shadow-2xl hover:scale-105 transition-all"
          >
            <Play className="w-5 h-5 mr-2" />
            Смотреть Live Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

// ============================================
// VARIANT B: "Feature Grid" - Современный grid подход
// ============================================
export function HRDashboardShowcaseVariantB({ onNavigateToHRDashboard }: VariantProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">
            Личный кабинет HR
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Всё необходимое для управления корпоративной Well-being программой
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {/* Feature 1 - Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-2xl"
          >
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3">Аналитика</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Графики активаций, воронка конверсии, тренды использования в реальном времени
            </p>
            <div className="text-3xl font-bold text-emerald-600">84%</div>
            <div className="text-xs text-gray-500">Средняя активация</div>
          </motion.div>

          {/* Feature 2 - Certificates */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-2xl"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3">Сертификаты</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Управление, фильтры по отделам, массовая выдача, детальный просмотр
            </p>
            <div className="text-3xl font-bold text-blue-600">150</div>
            <div className="text-xs text-gray-500">Активных</div>
          </motion.div>

          {/* Feature 3 - ROI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-2xl"
          >
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3">ROI Калькулятор</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Измерение экономии на больничных, продуктивности, окупаемости
            </p>
            <div className="text-3xl font-bold text-purple-600">+18%</div>
            <div className="text-xs text-gray-500">ROI программы</div>
          </motion.div>

          {/* Feature 4 - Reports */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -8 }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-2xl"
          >
            <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3">Отчёты</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Executive Summary, Well-being метрики, финансовые отчеты
            </p>
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5 text-amber-600" />
              <span className="text-sm text-gray-600">PDF, Excel, CSV</span>
            </div>
          </motion.div>

          {/* Feature 5 - Well-being */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -8 }}
            className="bg-gradient-to-br from-rose-50 to-red-50 p-8 rounded-3xl border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-2xl"
          >
            <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3">Well-being</h3>
            <p className="text-gray-600 mb-4 text-sm">
              NPS сотрудников, снижение больничных, удовлетворённость
            </p>
            <div className="text-3xl font-bold text-rose-600">-23%</div>
            <div className="text-xs text-gray-500">Больничных</div>
          </motion.div>

          {/* Feature 6 - Time Savings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -8 }}
            className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl border-2 border-teal-100 hover:border-teal-300 transition-all hover:shadow-2xl"
          >
            <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3">Автоматизация</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Экономия времени HR на рутинных задачах и отчётности
            </p>
            <div className="text-3xl font-bold text-teal-600">10+</div>
            <div className="text-xs text-gray-500">Часов в месяц</div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={onNavigateToHRDashboard}
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 rounded-full shadow-xl hover:scale-105 transition-all"
          >
            Открыть демо панели
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-gray-500 text-sm mt-4">
            Полнофункциональная демо-версия • Без регистрации
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// VARIANT C: "Split Screen Stats" - Акцент на цифрах
// ============================================
export function HRDashboardShowcaseVariantC({ onNavigateToHRDashboard }: VariantProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">HR Analytics Platform</span>
              </div>
              <h2 className="mb-6 text-white">
                Цифры, которые говорят сами за себя
              </h2>
              <p className="text-white/90 text-lg">
                Измеряйте эффективность Well-being программы с профессиональной аналитикой
              </p>
            </div>

            {/* Big stats */}
            <div className="space-y-6">
              {[
                { value: '150', label: 'Выдано сертификатов', sublabel: '+42 за последний месяц', icon: Package },
                { value: '84%', label: 'Активировано', sublabel: 'Выше среднего по рынку (65%)', icon: TrendingUp },
                { value: '+18%', label: 'ROI программы', sublabel: 'Окупаемость за 8 месяцев', icon: Target },
                { value: '270k₽', label: 'Экономия за год', sublabel: 'На больничных и текучке', icon: Award }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/30 p-6 rounded-2xl hover:bg-white/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-white font-semibold mb-1">{stat.label}</div>
                      <div className="text-white/70 text-sm">{stat.sublabel}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={onNavigateToHRDashboard}
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-6 rounded-full shadow-2xl hover:scale-105 transition-all"
            >
              Посмотреть полную статистику
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Mini cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: LineChart, label: 'Тренды', color: 'bg-blue-500' },
                { icon: PieChart, label: 'Распределение', color: 'bg-purple-500' },
                { icon: Activity, label: 'Активность', color: 'bg-pink-500' },
                { icon: Award, label: 'Достижения', color: 'bg-amber-500' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-2xl"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-3`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-gray-900">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Large chart card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900">Динамика Well-being</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                </div>
              </div>
              <div className="flex items-end gap-2 h-40">
                {[40, 48, 55, 50, 62, 70, 68, 75, 82, 78, 85, 92].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                    className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t-lg"
                  />
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm text-gray-600">Янв - Дек 2025</span>
                <span className="text-sm font-semibold text-emerald-600">↗ +34%</span>
              </div>
            </motion.div>

            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="bg-white px-6 py-4 rounded-full shadow-2xl flex items-center justify-center gap-3"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
              </div>
              <span className="font-semibold text-gray-900">Обновляется в реальном времени</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// VARIANT D: "Timeline Journey" - Процесс работы
// ============================================
export function HRDashboardShowcaseVariantD({ onNavigateToHRDashboard }: VariantProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900">
            Ваш день с HR Dashboard
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            От утреннего кофе до финального отчёта — всё под контролем
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-teal-200 to-blue-200" />

            {/* Timeline items */}
            {[
              {
                time: '09:00',
                title: 'Утренний Dashboard',
                desc: 'Открываете панель — видите все ключевые метрики за 30 секунд',
                icon: BarChart3,
                color: 'emerald',
                stats: ['127 активных', '84% конверсия']
              },
              {
                time: '10:30',
                title: 'Массовая выдача',
                desc: 'Выдаёте сертификаты новому отделу в 3 клика, система всё делает сама',
                icon: Package,
                color: 'blue',
                stats: ['25 сертификатов', '2 минуты']
              },
              {
                time: '14:00',
                title: 'Аналитика трендов',
                desc: 'Изучаете, как меняется активность. Графики и фильтры помогают',
                icon: TrendingUp,
                color: 'purple',
                stats: ['+12% за месяц', '3 новых инсайта']
              },
              {
                time: '16:00',
                title: 'Готовый отчёт',
                desc: 'Скачиваете Executive Summary для CFO одной кнопкой',
                icon: FileText,
                color: 'amber',
                stats: ['PDF готов', 'ROI +18%']
              },
              {
                time: '17:30',
                title: 'Well-being метрики',
                desc: 'Проверяете NPS и удовлетворённость сотрудников',
                icon: Users,
                color: 'rose',
                stats: ['NPS 76', '-23% больничных']
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex gap-6 items-start">
                  {/* Time badge */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`relative z-10 w-16 h-16 bg-${item.color}-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ x: 8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                    className="flex-1 bg-white border-2 border-gray-100 p-6 rounded-2xl shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-gray-400">{item.time}</span>
                      <div className="h-px flex-1 bg-gray-200" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.desc}</p>
                    <div className="flex gap-3">
                      {item.stats.map((stat, i) => {
                        const bgColorClass = {
                          emerald: 'bg-emerald-100 text-emerald-700',
                          blue: 'bg-blue-100 text-blue-700',
                          purple: 'bg-purple-100 text-purple-700',
                          amber: 'bg-amber-100 text-amber-700',
                          rose: 'bg-rose-100 text-rose-700'
                        }[item.color]

                        return (
                          <span key={i} className={`${bgColorClass} px-3 py-1 rounded-full text-xs font-semibold`}>
                            {stat}
                          </span>
                        )
                      })}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-br from-emerald-50 to-teal-50 p-12 rounded-3xl"
        >
          <h3 className="font-bold text-gray-900 mb-4 text-2xl">
            Всё это — в одном интерфейсе
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Экономьте 10+ часов в месяц на рутине. Принимайте решения на основе данных. 
            Покажите руководству измеримый ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onNavigateToHRDashboard}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 rounded-full shadow-xl hover:scale-105 transition-all"
            >
              <Eye className="w-5 h-5 mr-2" />
              Попробовать сейчас
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-10 py-6 rounded-full"
            >
              Запросить презентацию
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
