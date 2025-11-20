import { ImageWithFallback } from './figma/ImageWithFallback'
import { useState } from 'react'
import step1Image from 'figma:asset/473c627910d9537f1ff6b8d1db2964f79ea88c39.png'
import step2Image from 'figma:asset/bf412929b27600f04ec71124eb18e40eb9366774.png'
import step3Image from 'figma:asset/0c06a85ab403bb43c88e7bd4c6161dca48c59a1d.png'

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleSelectCertificate = () => {
    // Закрываем модальное окно
    setIsModalOpen(false)
    
    // Небольшая задержка перед прокруткой, чтобы модальное окно успело закрыться
    setTimeout(() => {
      const certificatesElement = document.getElementById('certificates-section')
      if (certificatesElement) {
        certificatesElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }
  
  return (
    <section className="w-full px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="flex flex-col lg:flex-row min-h-[500px]">
            {/* Левая часть - зеленый блок с контентом */}
            <div className="flex-1 bg-[#007a55] relative p-8 lg:p-16 flex flex-col justify-center overflow-hidden">
              
              {/* Декоративные элементы - природа и отдых */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Листья разных размеров */}
                <div className="absolute top-12 right-16 w-8 h-12 bg-emerald-300/12 rounded-full transform rotate-45 before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-1 before:h-8 before:bg-emerald-400/10"></div>
                <div className="absolute top-32 right-8 w-6 h-10 bg-emerald-200/15 rounded-full transform rotate-12"></div>
                <div className="absolute bottom-24 left-8 w-10 h-6 bg-emerald-100/18 rounded-full transform -rotate-45"></div>
                <div className="absolute bottom-16 left-20 w-5 h-8 bg-emerald-300/10 rounded-full transform rotate-30"></div>
                
                {/* Горы - треугольные силуэты */}
                <div className="absolute top-8 left-1/4 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[24px] border-l-transparent border-r-transparent border-b-emerald-200/8"></div>
                <div className="absolute top-6 left-1/3 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[18px] border-l-transparent border-r-transparent border-b-emerald-300/10"></div>
                <div className="absolute bottom-12 right-1/4 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[15px] border-l-transparent border-r-transparent border-b-emerald-100/12"></div>
                
                {/* Деревья - вертикальные стволы с кронами */}
                <div className="absolute top-1/4 left-8">
                  <div className="w-1.5 h-16 bg-emerald-400/8"></div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-emerald-300/10 rounded-full"></div>
                </div>
                <div className="absolute bottom-1/3 right-12">
                  <div className="w-1 h-12 bg-emerald-200/10"></div>
                  <div className="absolute -top-1 -left-1.5 w-4 h-4 bg-emerald-100/15 rounded-full"></div>
                </div>
                
                {/* Звезды для ночного неба */}
                <div className="absolute top-16 left-1/3 w-2 h-2 bg-emerald-200/15 transform rotate-45 before:content-[''] before:absolute before:inset-0 before:bg-emerald-200/15 before:transform before:rotate-90"></div>
                <div className="absolute top-24 left-1/2 w-1.5 h-1.5 bg-emerald-100/20 transform rotate-45 before:content-[''] before:absolute before:inset-0 before:bg-emerald-100/20 before:transform before:rotate-90"></div>
                <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-emerald-300/12 transform rotate-45 before:content-[''] before:absolute before:inset-0 before:bg-emerald-300/12 before:transform before:rotate-90"></div>
                
                {/* Палатка силуэт */}
                <div className="absolute bottom-20 right-20 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-emerald-200/12">
                  <div className="absolute top-2 -left-6 w-12 h-0.5 bg-emerald-200/8"></div>
                </div>
                
                {/* Костер - маленькие языки пламени */}
                <div className="absolute top-2/3 left-12">
                  <div className="w-1 h-3 bg-orange-300/15 rounded-t-full transform rotate-12"></div>
                  <div className="absolute -left-0.5 top-1 w-1 h-2 bg-orange-200/12 rounded-t-full transform -rotate-12"></div>
                  <div className="absolute left-0.5 top-1 w-0.5 h-2 bg-yellow-300/10 rounded-t-full"></div>
                </div>
                
                {/* Облака */}
                <div className="absolute top-10 right-1/3 flex space-x-1">
                  <div className="w-4 h-2 bg-emerald-100/8 rounded-full"></div>
                  <div className="w-3 h-1.5 bg-emerald-100/6 rounded-full"></div>
                  <div className="w-2 h-1 bg-emerald-100/10 rounded-full"></div>
                </div>
                
                {/* Тропинка - пунктирная линия */}
                <div className="absolute bottom-1/3 left-1/3 transform rotate-12">
                  <div className="w-2 h-0.5 bg-emerald-200/8 mb-1"></div>
                  <div className="w-1.5 h-0.5 bg-emerald-200/6 mb-1"></div>
                  <div className="w-2 h-0.5 bg-emerald-200/8 mb-1"></div>
                </div>
                
                {/* Птички в небе */}
                <div className="absolute top-20 right-1/4 transform rotate-12">
                  <div className="w-1 h-0.5 bg-emerald-200/10 transform rotate-45"></div>
                  <div className="absolute left-1 w-1 h-0.5 bg-emerald-200/10 transform -rotate-45"></div>
                </div>
                <div className="absolute top-28 right-1/3 transform rotate-45">
                  <div className="w-0.5 h-0.5 bg-emerald-100/12 transform rotate-45"></div>
                  <div className="absolute left-0.5 w-0.5 h-0.5 bg-emerald-100/12 transform -rotate-45"></div>
                </div>
              </div>
              
              {/* Контент поверх декоративных элементов */}
              <div className="relative z-10">
                {/* Основной заголовок */}
                <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Подарите<br />
                  близким<br />
                  отдых на природе
                </h1>
                
                {/* Подзаголовок */}
                <p className="text-white/90 text-lg lg:text-xl mb-12 leading-relaxed max-w-md">
                  Получатель сертификата<br />
                  сам выберет отель и дату
                </p>
                
                {/* Кнпки и блок */}
                <div className="flex flex-col sm:flex-row items-start gap-6 relative">
                  {/* Оранжевая кнопка */}
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#ff9800] hover:bg-[#f57c00] text-white px-8 py-4 rounded-full font-semibold text-base tracking-wide uppercase transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    КАК ЭТО РАБОТАЕТ?
                  </button>
                  
                  {/* Желтый блок "500+ объектов" */}
                  <div className="transform rotate-[-8deg] bg-[#faffa1] px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    <span className="text-[#5a4627] font-medium text-lg whitespace-nowrap">
                      500+ объектов  40 регионах России
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Правая часть - фото */}
            <div className="flex-1 relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1666468275621-6e842e623227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMGNhYmluJTIwZm9yZXN0fGVufDF8fHx8MTc1NzQ5MjcxMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Глэмпинг в лесу"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно "Как это работает" */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Серый оверлей фон */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Контент модального окна */}
          <div className="relative z-10 w-full max-w-5xl mx-4">
            {/* Кнопка закрытия (X) */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 z-20 w-7 h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors shadow-lg"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m18 6-12 12" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            
            {/* Основной контент - карточки "Как это работает" */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="w-full p-8">
                {/* Заголовок */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl mb-3 text-gray-900">
                    Как это работает?
                  </h2>
                  <p className="text-gray-600">
                    Три простых шага до незабываемого отдыха на природе
                  </p>
                </div>

                {/* Карточки с шагами */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Шаг 1 */}
                  <div className="relative bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-emerald-200 transition-all group">
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-lg">1</span>
                    </div>
                    <div className="relative w-full h-32 mb-4 rounded-xl overflow-hidden bg-amber-50">
                      <ImageWithFallback
                        src={step1Image}
                        alt="Выберите подарочный сертификат"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-base mb-2 text-gray-900">
                      Вы дарите сертификат
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Доставка в красивой упаковке (от 2 часов) или мгновенно на email
                    </p>
                  </div>

                  {/* Шаг 2 */}
                  <div className="relative bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-emerald-200 transition-all group">
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-lg">2</span>
                    </div>
                    <div className="relative w-full h-32 mb-4 rounded-xl overflow-hidden bg-amber-50">
                      <ImageWithFallback
                        src={step2Image}
                        alt="Получатель выбирает глэмпинг"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-base mb-2 text-gray-900">
                      Получатель выбирает глэмпинг
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Среди 500+ локаций по всей России можно найти идеальное место для отдыха
                    </p>
                  </div>

                  {/* Шаг 3 */}
                  <div className="relative bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-emerald-200 transition-all group">
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-lg">3</span>
                    </div>
                    <div className="relative w-full h-32 mb-4 rounded-xl overflow-hidden bg-amber-50">
                      <ImageWithFallback
                        src={step3Image}
                        alt="Глэмпинг забронирован и ждёт гостей"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-base mb-2 text-gray-900">
                      Глэмпинг забронирован и ждёт гостей
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Можно отправляться на отдых и наслаждаться природой
                    </p>
                  </div>
                </div>

                {/* нопка "Выбрать сертификат" */}
                <div className="mt-8 text-center">
                  <button
                    onClick={handleSelectCertificate}
                    className="bg-[#007a55] hover:bg-[#006644] text-white px-8 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Выбрать сертификат
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default HeroSection