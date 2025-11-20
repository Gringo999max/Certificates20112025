import React from 'react'
import { motion } from 'motion/react'
import { FileText, Download, Calendar, Clock, Filter } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export const ReportsTab = () => {
  const reports = [
    {
      name: 'Ежемесячный Well-being отчет',
      date: '01.10.2024',
      type: 'PDF',
      size: '2.4 MB',
      status: 'ready'
    },
    {
      name: 'Квартальный Executive Summary',
      date: '01.09.2024',
      type: 'PDF',
      size: '3.1 MB',
      status: 'ready'
    },
    {
      name: 'Финансовый отчет Q3 2024',
      date: '30.09.2024',
      type: 'Excel',
      size: '1.8 MB',
      status: 'ready'
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Отчеты</h2>
          <p className="text-sm text-gray-500 mt-1">
            Генерация и управление отчетами по Well-being программе
          </p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
          <FileText className="w-4 h-4 mr-2" />
          Создать отчет
        </Button>
      </div>

      {/* Report Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all cursor-pointer">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Ежемесячный отчет</h3>
            <p className="text-sm text-gray-600 mb-4">
              Статистика активаций, использования и Well-being метрики за месяц
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Создать
            </Button>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Executive Summary</h3>
            <p className="text-sm text-gray-600 mb-4">
              Квартальный отчет для руководства с ROI и ключевыми метриками
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Создать
            </Button>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6 border-2 border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all cursor-pointer">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Финансовый отчет</h3>
            <p className="text-sm text-gray-600 mb-4">
              Бюджет, расходы и ROI калькулятор Well-being программы
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Создать
            </Button>
          </Card>
        </motion.div>
      </div>

      {/* Generated Reports */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="p-6 border-2 border-gray-100">
          <h3 className="font-bold text-gray-900 mb-6">История отчетов</h3>
          <div className="space-y-3">
            {reports.map((report, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{report.name}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-gray-500">{report.date}</span>
                      <Badge variant="outline" className="text-xs">
                        {report.type}
                      </Badge>
                      <span className="text-sm text-gray-500">{report.size}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* ROI Calculator Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="p-6 border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50">
          <h3 className="font-bold text-gray-900 mb-6">ROI Калькулятор</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Инвестиция в программу:</span>
                <span className="font-bold text-gray-900">2 250 000 ₽</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Снижение больничных (-23%):</span>
                <span className="font-bold text-emerald-600">+520 000 ₽</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Рост продуктивности (+15%):</span>
                <span className="font-bold text-emerald-600">+1 200 000 ₽</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Снижение текучести (-30%):</span>
                <span className="font-bold text-emerald-600">+800 000 ₽</span>
              </div>
            </div>
            <div className="flex flex-col justify-center bg-white p-6 rounded-xl border-2 border-emerald-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">ROI программы</p>
                <p className="text-5xl font-bold text-emerald-600 mb-2">+13%</p>
                <p className="text-sm text-gray-600 mb-4">Экономия: 270 000 ₽</p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                  Подробный расчет
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
