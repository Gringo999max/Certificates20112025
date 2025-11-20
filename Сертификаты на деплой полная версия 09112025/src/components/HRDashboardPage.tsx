import React, { useState } from 'react'
import {
  Bell, LogOut, Package, BarChart3, FileText, Settings as SettingsIcon, Menu, X, MessageSquare, BookOpen, ArrowLeft
} from 'lucide-react'
import { DashboardTab } from './DashboardTab'
import { CertificatesTab } from './CertificatesTab'
import { AnalyticsTab } from './AnalyticsTab'
import { ReportsTab } from './ReportsTab'
import { SettingsTab } from './SettingsTab'

type TabType = 'dashboard' | 'certificates' | 'analytics' | 'reports' | 'settings'

const HRDashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>('dashboard')

  const tabs = [
    { id: 'dashboard' as TabType, name: 'Dashboard', icon: BarChart3 },
    { id: 'certificates' as TabType, name: 'Сертификаты', icon: Package },
    { id: 'analytics' as TabType, name: 'Аналитика', icon: BarChart3 },
    { id: 'reports' as TabType, name: 'Отчеты', icon: FileText },
    { id: 'settings' as TabType, name: 'Настройки', icon: SettingsIcon },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />
      case 'certificates':
        return <CertificatesTab />
      case 'analytics':
        return <AnalyticsTab />
      case 'reports':
        return <ReportsTab />
      case 'settings':
        return <SettingsTab />
      default:
        return <DashboardTab />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">HR Panel</span>
            </div>
            <button 
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Back Button - Mobile Only */}
          <div className="p-4 border-b border-gray-200 lg:hidden">
            <a 
              href="/corporate-b2b"
              className="flex items-center gap-3 px-4 py-3 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Вернуться назад</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setSidebarOpen(false)
                  }}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl w-full transition-colors
                    ${activeTab === tab.id 
                      ? 'bg-emerald-50 text-emerald-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </button>
              )
            })}

            <div className="pt-4 mt-4 border-t border-gray-200">
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span>Поддержка</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                <BookOpen className="w-5 h-5" />
                <span>База знаний</span>
              </a>
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">АС</span>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Анна Сергеевна</div>
                <div className="text-sm text-gray-500">HR Manager</div>
              </div>
              <LogOut className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button 
                  className="lg:hidden"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <Menu className="w-6 h-6 text-gray-600" />
                </button>
                <a 
                  href="/corporate-b2b"
                  className="hidden lg:flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors group"
                  title="Вернуться на страницу корпоративных подарков"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-medium">Назад</span>
                </a>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {tabs.find(t => t.id === activeTab)?.name || 'Dashboard'}
                  </h1>
                  <p className="text-sm text-gray-500">ТехноСтарт ООО • Корпоративная программа Well-being</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Tab Content */}
        <main className="p-6">
          {renderTabContent()}
        </main>
      </div>
    </div>
  )
}

export default HRDashboardPage
