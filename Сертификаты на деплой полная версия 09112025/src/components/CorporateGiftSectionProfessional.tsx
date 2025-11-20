import React from 'react'
import { ArrowRight, Briefcase, Award, Users } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const CorporateGiftSectionProfessional = () => {
  const handleCorporateClick = () => {
    // Переход на страницу корпоративных подарков
    console.log('Переход на страницу корпоративных подарков')
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl overflow-hidden border border-gray-100">
          {/* Геометрический паттерн фона */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0L0 15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
              `
            }}
          ></div>
          
          {/* Дополнительная тонкая сетка */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(rgba(55, 65, 81, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(55, 65, 81, 0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          ></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[420px] relative">
            {/* Левая часть - контент */}
            <div className="flex flex-col justify-center p-8 lg:p-12 relative z-10">
              <div className="inline-flex items-center gap-3 text-slate-600 mb-6 bg-white/60 backdrop-blur-sm rounded-full px-5 py-2.5 w-fit border border-gray-200/50">
                <Briefcase className="w-4 h-4 text-slate-700" />
                <span className="text-sm">Корпоративные решения</span>
              </div>
              
              <h2 className="text-slate-900 mb-6 max-w-sm">
                Профессиональные 
                <span className="block text-slate-700">подарки для бизнеса</span>
              </h2>
              
              <p className="text-slate-600 mb-8 max-w-md leading-relaxed">
                Создайте незабываемые впечатления для ваших сотрудников и партнеров. 
                Наши корпоративные сертификаты — это инвестиция в отношения и лояльность команды.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-gray-200/50">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-slate-800 mb-1">Корпоративные скидки</h4>
                    <p className="text-sm text-slate-600">Специальные тарифы от 10 сертификатов</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-gray-200/50">
                  <div className="flex items-center justify-center w-8 h-8 bg-slate-100 rounded-lg">
                    <Users className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="text-slate-800 mb-1">Специальные тарифы от 10 сертификатов</h4>
                    <p className="text-sm text-slate-600">Выгодные условия для корпоративных клиентов</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleCorporateClick}
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-xl hover:bg-slate-800 transition-all duration-300 group shadow-lg hover:shadow-slate-900/25 self-start"
              >
                <span>Получить предложение</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Правая часть - изображение */}
            <div className="relative overflow-hidden lg:rounded-r-3xl">
              {/* Основное изображение */}
              <div className="relative h-full bg-gradient-to-br from-slate-100 to-blue-50">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1671749999622-4087a86868cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnaWZ0JTIwYm94JTIwZmxhdCUyMGxheSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTc1OTgzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Профессиональный корпоративный подарочный набор"
                  className="w-full h-full object-cover"
                />
                
                {/* Профессиональный overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/5"></div>
                
                {/* Качественная подсветка */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10"></div>
              </div>
              
              {/* Профессиональные акценты */}
              <div className="absolute top-8 right-8 flex gap-2">
                <div className="w-2 h-2 bg-blue-400/60 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-400/60 rounded-full"></div>
              </div>
              
              <div className="absolute bottom-8 right-8 flex gap-1.5">
                <div className="w-1.5 h-1.5 bg-blue-500/40 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-500/40 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-blue-400/30 rounded-full"></div>
              </div>
              
              {/* Минимальные геометрические акценты */}
              <div className="absolute top-1/4 right-6 w-8 h-8 border border-white/20 rounded-lg rotate-12"></div>
              <div className="absolute bottom-1/3 left-6 w-6 h-6 border border-blue-200/30 rounded-full"></div>
              
              {/* Профессиональные линии */}
              <svg className="absolute bottom-6 left-8 w-16 h-8 text-slate-300/30" viewBox="0 0 64 32" fill="none">
                <rect x="0" y="14" width="12" height="2" fill="currentColor" rx="1"/>
                <rect x="16" y="16" width="8" height="1" fill="currentColor" rx="0.5"/>
                <rect x="28" y="15" width="10" height="1.5" fill="currentColor" rx="0.75"/>
                <rect x="42" y="14.5" width="6" height="2" fill="currentColor" rx="1"/>
                <rect x="52" y="16" width="4" height="1" fill="currentColor" rx="0.5"/>
              </svg>
            </div>
          </div>
          
          {/* Дополнительные профессиональные элементы */}
          <div className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-br from-blue-50/30 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-12 right-12 w-16 h-16 bg-gradient-to-br from-slate-50/40 to-transparent rounded-full blur-lg"></div>
          
          {/* Тонкий внутренний border для премиальности */}
          <div className="absolute inset-1 rounded-3xl border border-white/20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}

export default CorporateGiftSectionProfessional