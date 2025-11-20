import React from 'react'
import { motion } from 'motion/react'
import {
  Users, CheckCircle, Clock, Package, ArrowUpRight, ArrowDownRight,
  AlertCircle, XCircle, Heart, Shield, Award, TrendingUp
} from 'lucide-react'
import { Card } from './ui/card'
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

// График активаций по месяцам
const activationsData = [
  { month: 'Май', activated: 12, used: 8 },
  { month: 'Июнь', activated: 18, used: 14 },
  { month: 'Июль', activated: 25, used: 20 },
  { month: 'Авг', activated: 32, used: 28 },
  { month: 'Сент', activated: 28, used: 22 },
  { month: 'Окт', activated: 35, used: 30 },
]

// Круговая диаграмма статусов
const statusData = [
  { name: 'Использовано', value: 89, color: '#10b981' },
  { name: 'Активировано', value: 23, color: '#3b82f6' },
  { name: 'Выдано', value: 33, color: '#f59e0b' },
  { name: 'Просрочено', value: 5, color: '#ef4444' },
]

// Популярные локации
const popularLocations = [
  { name: 'Лесной Приют МО', bookings: 28 },
  { name: 'Карельские Зори ЛО', bookings: 24 },
  { name: 'Уральская Усадьба', bookings: 19 },
  { name: 'Казанская Дача', bookings: 16 },
  { name: 'Карелия Eco Resort', bookings: 14 },
  { name: 'Алтай Mountain View', bookings: 11 },
  { name: 'Байкал Nature Camp', bookings: 9 },
]

export const DashboardTab = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 border-2 border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-emerald-600" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">150</div>
            <div className="text-sm text-gray-500">Всего выдано</div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-6 border-2 border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-blue-600">75%</div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">112</div>
            <div className="text-sm text-gray-500">Активировано</div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6 border-2 border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <div className="text-sm font-semibold text-teal-600">59%</div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">89</div>
            <div className="text-sm text-gray-500">Использовано</div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-6 border-2 border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <ArrowDownRight className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">5.2</div>
            <div className="text-sm text-gray-500">Средний срок активации (дни)</div>
          </Card>
        </motion.div>
      </div>

      {/* Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-amber-900 mb-1">Истекают через 30 дней</div>
            <div className="text-sm text-amber-700">5 сертификатов требуют внимания</div>
          </div>
        </div>
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 flex items-start gap-3">
          <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-red-900 mb-1">Не активированы 60+ дней</div>
            <div className="text-sm text-red-700">12 сертификатов неактивны</div>
          </div>
        </div>
        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-4 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-emerald-900 mb-1">Новые активации</div>
            <div className="text-sm text-emerald-700">18 за последнюю неделю</div>
          </div>
        </div>
      </motion.div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activations Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="lg:col-span-2"
        >
          <Card className="p-6 border-2 border-gray-100">
            <h3 className="font-bold text-gray-900 mb-6">Динамика активаций и использования</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={activationsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="activated" stroke="#10b981" strokeWidth={3} name="Активировано" />
                <Line type="monotone" dataKey="used" stroke="#14b8a6" strokeWidth={3} name="Использовано" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Status Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="p-6 border-2 border-gray-100">
            <h3 className="font-bold text-gray-900 mb-6">Статусы сертификатов</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Well-being Impact & Popular Locations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Well-being Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card className="p-6 border-2 border-gray-100">
            <h3 className="font-bold text-gray-900 mb-6">Well-being Impact</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-emerald-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Профилактика выгорания</div>
                    <div className="text-sm text-gray-600">Снижение больничных</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-emerald-600">↓ 23%</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Рост продуктивности</div>
                    <div className="text-sm text-gray-600">Производительность труда</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600">↑ 18%</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-rose-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-rose-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Укрепление лояльности</div>
                    <div className="text-sm text-gray-600">Net Promoter Score</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-rose-600">+32</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Popular Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="p-6 border-2 border-gray-100">
            <h3 className="font-bold text-gray-900 mb-6">Популярные локации</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={popularLocations} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis dataKey="name" type="category" width={150} stroke="#6b7280" />
                <Tooltip />
                <Bar dataKey="bookings" fill="#10b981" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
