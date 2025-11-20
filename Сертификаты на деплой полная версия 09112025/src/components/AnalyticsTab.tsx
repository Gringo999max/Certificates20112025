import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Calendar, TrendingUp, Users, Clock, MapPin } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  LabelList
} from 'recharts'

// Воронка конверсии
const funnelData = [
  { name: 'Выдано', value: 150, fill: '#10b981' },
  { name: 'Активировано', value: 112, fill: '#3b82f6' },
  { name: 'Использовано', value: 89, fill: '#14b8a6' },
]

// Распределение по отделам
const departmentData = [
  { department: 'Разработка', issued: 45, activated: 38, used: 32, rate: 71 },
  { department: 'Продажи', issued: 42, activated: 35, used: 28, rate: 67 },
  { department: 'Маркетинг', issued: 28, activated: 20, used: 15, rate: 54 },
  { department: 'Финансы', issued: 15, activated: 10, used: 8, rate: 53 },
  { department: 'HR', issued: 12, activated: 6, used: 4, rate: 33 },
  { department: 'IT', issued: 8, activated: 3, used: 2, rate: 25 },
]

// Время до активации (histogram)
const activationTimeData = [
  { days: '0-3 дня', count: 42 },
  { days: '4-7 дней', count: 35 },
  { days: '8-14 дней', count: 20 },
  { days: '15-30 дней', count: 10 },
  { days: '30+ дней', count: 5 },
]

// Тренд за год
const yearTrendData = [
  { month: 'Янв', issued: 8, activated: 5, used: 3 },
  { month: 'Фев', issued: 10, activated: 7, used: 5 },
  { month: 'Мар', issued: 15, activated: 12, used: 8 },
  { month: 'Апр', issued: 18, activated: 14, used: 10 },
  { month: 'Май', issued: 22, activated: 18, used: 14 },
  { month: 'Июн', issued: 25, activated: 20, used: 16 },
  { month: 'Июл', issued: 28, activated: 24, used: 20 },
  { month: 'Авг', issued: 32, activated: 28, used: 24 },
  { month: 'Сен', issued: 30, activated: 25, used: 20 },
  { month: 'Окт', issued: 35, activated: 30, used: 26 },
  { month: 'Ноя', issued: 28, activated: 23, used: 18 },
  { month: 'Дек', issued: 24, activated: 19, used: 14 },
]

// География использования
const geographyData = [
  { region: 'Карелия', visits: 28, percentage: 31 },
  { region: 'Алтай', visits: 22, percentage: 25 },
  { region: 'Байкал', visits: 18, percentage: 20 },
  { region: 'Кавказ', visits: 12, percentage: 13 },
  { region: 'Камчатка', visits: 10, percentage: 11 },
]

// Engagement метрики по месяцам
const engagementData = [
  { month: 'Май', nps: 65, satisfaction: 78 },
  { month: 'Июнь', nps: 68, satisfaction: 80 },
  { month: 'Июль', nps: 70, satisfaction: 82 },
  { month: 'Авг', nps: 71, satisfaction: 85 },
  { month: 'Сент', nps: 72, satisfaction: 87 },
  { month: 'Окт', nps: 72, satisfaction: 88 },
]

export const AnalyticsTab = () => {
  const [period, setPeriod] = useState('year')

  return (
    <div className="space-y-6">
      {/* Header with Period Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Расширенная аналитика</h2>
          <p className="text-sm text-gray-500 mt-1">
            Глубокий анализ эффективности Well-being программы
          </p>
        </div>
        <div className="flex gap-3">
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[200px]">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Последние 7 дней</SelectItem>
              <SelectItem value="month">Последние 30 дней</SelectItem>
              <SelectItem value="quarter">Квартал</SelectItem>
              <SelectItem value="year">Год</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Выбрать период
          </Button>
        </div>
      </div>

      {/* Conversion Funnel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 border-2 border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">Воронка конверсии</h3>
            <div className="text-sm text-gray-500">
              Общая конверсия: <span className="font-bold text-emerald-600">59%</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-emerald-50 p-4 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Выдано</span>
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">150</div>
              <div className="text-sm text-gray-500 mt-1">100%</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Активировано</span>
                <TrendingUp className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">112</div>
              <div className="text-sm text-gray-500 mt-1">75% от выданных</div>
            </div>
            <div className="bg-teal-50 p-4 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Использовано</span>
                <TrendingUp className="w-4 h-4 text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">89</div>
              <div className="text-sm text-gray-500 mt-1">59% от выданных • 79% от активированных</div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Department Performance & Activation Time */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-6 border-2 border-gray-100">
            <h3 className="font-bold text-gray-900 mb-6">Распределение по отделам</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="department" stroke="#6b7280" angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Bar dataKey="issued" fill="#10b981" name="Выдано" />
                <Bar dataKey="activated" fill="#3b82f6" name="Активировано" />
                <Bar dataKey="used" fill="#14b8a6" name="Использовано" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Activation Time Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6 border-2 border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-900">Время до активации</h3>
              <div className="text-sm text-gray-500">
                Среднее: <span className="font-bold text-emerald-600">5.2 дня</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={activationTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="days" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Bar dataKey="count" fill="#10b981" radius={[8, 8, 0, 0]}>
                  <LabelList dataKey="count" position="top" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Year Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="p-6 border-2 border-gray-100">
          <h3 className="font-bold text-gray-900 mb-6">Тренд за год</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={yearTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="issued" stroke="#10b981" strokeWidth={3} name="Выдано" />
              <Line type="monotone" dataKey="activated" stroke="#3b82f6" strokeWidth={3} name="Активировано" />
              <Line type="monotone" dataKey="used" stroke="#14b8a6" strokeWidth={3} name="Использовано" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      {/* Geography & Engagement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Geography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6 border-2 border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-gray-900">География использования</h3>
            </div>
            <div className="space-y-4">
              {geographyData.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{item.region}</span>
                      <span className="text-sm text-gray-600">{item.visits} поездок</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-emerald-500 h-2 rounded-full transition-all"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-600 w-12 text-right">
                    {item.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Engagement Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="p-6 border-2 border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-gray-900">Engagement метрики</h3>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="nps"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  name="NPS Score"
                  dot={{ fill: '#3b82f6', r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="satisfaction"
                  stroke="#14b8a6"
                  strokeWidth={3}
                  name="Удовлетворенность %"
                  dot={{ fill: '#14b8a6', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Department Details Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="p-6 border-2 border-gray-100">
          <h3 className="font-bold text-gray-900 mb-6">Детальная статистика по отделам</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Отдел</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Выдано</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Активировано</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Использовано</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Конверсия</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Рейтинг</th>
                </tr>
              </thead>
              <tbody>
                {departmentData.map((dept, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{dept.department}</td>
                    <td className="py-3 px-4 text-right text-gray-600">{dept.issued}</td>
                    <td className="py-3 px-4 text-right text-gray-600">{dept.activated}</td>
                    <td className="py-3 px-4 text-right text-gray-600">{dept.used}</td>
                    <td className="py-3 px-4 text-right">
                      <span className={`font-semibold ${dept.rate >= 60 ? 'text-emerald-600' : dept.rate >= 40 ? 'text-amber-600' : 'text-red-600'}`}>
                        {dept.rate}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < Math.floor(dept.rate / 20) ? 'bg-emerald-500' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>

      {/* Insights & Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Card className="p-6 border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50">
          <h3 className="font-bold text-gray-900 mb-4">💡 Автоматические инсайты</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-emerald-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Лучший результат</p>
                  <p className="text-sm text-gray-600">
                    Отдел Разработки показывает конверсию 71% - это на 12% выше среднего. 
                    Рекомендуем изучить их подход.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Требует внимания</p>
                  <p className="text-sm text-gray-600">
                    IT отдел имеет низкую активацию (25%). Рекомендуем провести опрос 
                    и отправить персональные напоминания.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
