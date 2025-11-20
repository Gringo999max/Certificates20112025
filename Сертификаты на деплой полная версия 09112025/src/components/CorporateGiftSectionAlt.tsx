import React from 'react'
import { ArrowRight, Leaf } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const CorporateGiftSectionAlt = () => {
  const handleCorporateClick = () => {
    // Переход на страницу корпоративных подарков
    console.log('Переход на страницу корпоративных подарков')
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden" style={{
          background: 'linear-gradient(135deg, #9caf88 0%, #a8b89a 50%, #95a085 100%)',
        }}>
          {/* Текстура льна */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0),
                radial-gradient(circle at 3px 3px, #ffffff 0.5px, transparent 0)
              `,
              backgroundSize: '20px 20px, 40px 40px'
            }}
          ></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px] relative">
            {/* Левая часть - контент */}
            <div className="flex flex-col justify-center p-8 lg:p-12 relative z-10">
              <div className="inline-flex items-center gap-2 text-white/90 mb-6 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
                <Leaf className="w-4 h-4" />
                <span className="text-sm">Экологично и премиально</span>
              </div>
              
              <h2 className="text-white mb-6 max-w-sm">
                Корпоративные подарки 
                <span className="block text-white/90">от природы</span>
              </h2>
              
              <p className="text-white/85 mb-8 max-w-md leading-relaxed">
                Дарите опыт единения с природой. Наши эко-сертификаты на глэмпинг создают 
                незабываемые впечатления и укрепляют связь с окружающим миром.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span className="text-sm">Устойчивый туризм и забота о природе</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span className="text-sm">Персональное сопровождение заказа</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span className="text-sm">Премиальная упаковка из эко-материалов</span>
                </div>
              </div>
              
              <button
                onClick={handleCorporateClick}
                className="inline-flex items-center gap-2 bg-white text-stone-800 px-8 py-3.5 rounded-full hover:bg-white/95 transition-all duration-300 group shadow-lg hover:shadow-xl self-start"
              >
                <span>Заказать консультацию</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Правая часть - изображение */}
            <div className="relative overflow-hidden lg:rounded-r-3xl">
              {/* Основное изображение */}
              <div className="relative h-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1750057081431-c1dd80a5cd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGdpZnQlMjBib3glMjBuYXR1cmFsJTIwd29vZCUyMHN0b25lfGVufDF8fHx8MTc1NzU5ODIwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Эко подарок на природе"
                  className="w-full h-full object-cover"
                />
                
                {/* Мягкий градиент для атмосферы */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-stone-900/10"></div>
                
                {/* Размытый природный фон */}
                <div className="absolute inset-0 opacity-20">
                  <div 
                    className="absolute inset-0 blur-[2px]"
                    style={{
                      background: `
                        radial-gradient(ellipse at top, rgba(76, 106, 67, 0.3) 0%, transparent 50%),
                        radial-gradient(ellipse at bottom right, rgba(139, 158, 126, 0.2) 0%, transparent 60%)
                      `
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Органические декоративные элементы */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-12 right-6 w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="absolute top-1/3 right-16 w-1.5 h-1.5 bg-white/25 rounded-full"></div>
              
              {/* Тонкие линии природы */}
              <svg className="absolute bottom-6 left-6 w-12 h-8 text-white/20" viewBox="0 0 48 32" fill="none">
                <path 
                  d="M2 30 Q 12 20, 24 22 T 46 30" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  fill="none"
                />
                <path 
                  d="M6 28 Q 16 18, 28 20 T 44 28" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                  fill="none"
                />
              </svg>
            </div>
          </div>
          
          {/* Дополнительные органические элементы */}
          <div className="absolute top-12 left-12 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/3 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  )
}

export default CorporateGiftSectionAlt