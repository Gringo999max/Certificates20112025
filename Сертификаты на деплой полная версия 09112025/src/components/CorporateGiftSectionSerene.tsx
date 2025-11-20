import React from 'react'
import { ArrowRight, Heart, Globe } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const CorporateGiftSectionSerene = () => {
  const handleCorporateClick = () => {
    // Переход на страницу корпоративных подарков
    console.log('Переход на страницу корпоративных подарков')
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-stone-50 via-neutral-50 to-amber-50/30 rounded-[2rem] overflow-hidden shadow-sm border border-stone-100/50">
          {/* Тонкая текстура льна */}
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 1px,
                  rgba(120, 113, 108, 0.1) 1px,
                  rgba(120, 113, 108, 0.1) 2px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 1px,
                  rgba(120, 113, 108, 0.05) 1px,
                  rgba(120, 113, 108, 0.05) 2px
                )
              `,
              backgroundSize: '20px 20px, 25px 25px'
            }}
          ></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[450px] relative">
            {/* Левая часть - чистая минимальная область для текста */}
            <div className="flex flex-col justify-center p-10 lg:p-16 relative z-10">
              <div className="inline-flex items-center gap-3 text-stone-600 mb-8 bg-white/40 backdrop-blur-sm rounded-2xl px-6 py-3 w-fit border border-stone-200/30">
                <Heart className="w-4 h-4 text-amber-700" />
                <span className="text-sm">Вдумчивые подарки</span>
              </div>
              
              <h2 className="text-stone-900 mb-8 max-w-md leading-tight">
                Корпоративные подарки 
                <span className="block text-stone-700 mt-2">с душой и заботой о природе</span>
              </h2>
              
              <p className="text-stone-600 mb-10 max-w-lg leading-relaxed">
                Создавайте значимые связи через подарки, которые отражают ваши ценности. 
                Наши эко-сертификаты упакованы в устойчивые материалы и дарят незабываемые моменты единения с природой.
              </p>
              
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-6 h-6 bg-amber-100 rounded-full mt-0.5">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-stone-700 text-sm leading-relaxed">
                      <span className="text-stone-800">Устойчивая упаковка</span> — переработанные материалы и натуральные ленты
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-6 h-6 bg-stone-100 rounded-full mt-0.5">
                    <Globe className="w-3 h-3 text-stone-600" />
                  </div>
                  <div>
                    <p className="text-stone-700 text-sm leading-relaxed">
                      <span className="text-stone-800">Забота о планете</span> — каждый подарок поддерживает экотуризм
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-stone-700 text-sm leading-relaxed">
                      <span className="text-stone-800">Персональный подход</span> — индивидуальная консультация и оформление
                    </p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleCorporateClick}
                className="inline-flex items-center gap-3 bg-stone-800 text-stone-50 px-10 py-4 rounded-2xl hover:bg-stone-700 transition-all duration-500 group shadow-lg hover:shadow-stone-800/20 self-start"
              >
                <span>Создать особенный подарок</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Правая часть - высокоугловая съемка премиального подарка */}
            <div className="relative overflow-hidden lg:rounded-r-[2rem]">
              {/* Размытый природный фон (березы/холмы) */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 via-stone-50/30 to-amber-50/40"></div>
              
              {/* Тонкий намек на латвийский пейзаж */}
              <div 
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  background: `
                    radial-gradient(ellipse 80% 60% at 70% 20%, rgba(34, 69, 61, 0.15) 0%, transparent 50%),
                    radial-gradient(ellipse 60% 40% at 20% 80%, rgba(120, 113, 108, 0.1) 0%, transparent 60%),
                    linear-gradient(165deg, rgba(245, 245, 244, 0.3) 0%, rgba(255, 251, 235, 0.2) 100%)
                  `
                }}
              ></div>
              
              {/* Основное изображение подарка */}
              <div className="relative h-full flex items-center justify-center p-8">
                <div className="relative max-w-md w-full">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1731686830798-01ca32301c22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZ2lmdCUyMGJveCUyMG5hdHVyYWwlMjBsaW5lbiUyMHJpYmJvbiUyMHN0b25lfGVufDF8fHx8MTc1NzU5ODUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Изысканный эко-подарок с натуральными материалами"
                    className="w-full h-auto object-contain drop-shadow-lg"
                  />
                  
                  {/* Мягкий рассеянный свет */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-lg"></div>
                  
                  {/* Деликатные тени для глубины */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-stone-200/20 rounded-full blur-xl"></div>
                </div>
              </div>
              
              {/* Минимальные природные акценты */}
              <div className="absolute top-12 right-12 w-1 h-1 bg-amber-300/60 rounded-full"></div>
              <div className="absolute bottom-16 left-8 w-1.5 h-1.5 bg-green-200/50 rounded-full"></div>
              <div className="absolute top-1/3 left-12 w-0.5 h-0.5 bg-stone-300/40 rounded-full"></div>
              
              {/* Органические штрихи */}
              <svg className="absolute bottom-8 right-8 w-8 h-6 text-stone-300/25" viewBox="0 0 32 24" fill="none">
                <path 
                  d="M2 22 Q 8 18, 16 19 Q 24 20, 30 22" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                  fill="none"
                />
                <path 
                  d="M4 20 Q 12 16, 20 17 Q 26 18, 28 20" 
                  stroke="currentColor" 
                  strokeWidth="0.3" 
                  fill="none"
                />
              </svg>
              
              {/* Деликатные листья */}
              <svg className="absolute top-8 left-8 w-6 h-8 text-green-200/30" viewBox="0 0 24 32" fill="none">
                <path 
                  d="M12 2 Q 18 8, 20 16 Q 18 24, 12 30 Q 6 24, 4 16 Q 6 8, 12 2" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                  fill="currentColor" 
                  fillOpacity="0.1"
                />
              </svg>
            </div>
          </div>
          
          {/* Очень тонкие декоративные элементы для атмосферы */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-50/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-16 w-24 h-24 bg-gradient-to-br from-green-50/15 to-transparent rounded-full blur-2xl"></div>
          
          {/* Внутренняя тонкая рамка для премиальности */}
          <div className="absolute inset-2 rounded-[1.75rem] border border-white/30 pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}

export default CorporateGiftSectionSerene