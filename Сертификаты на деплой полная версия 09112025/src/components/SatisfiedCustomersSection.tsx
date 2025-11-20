import React, { useState, useEffect } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Review {
  id: number
  username: string
  avatar: string
  photo: string
  text: string
}

export function SatisfiedCustomersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(4) // По умолчанию десктоп

  // Данные довольных покупателей
  const satisfiedCustomers: Review[] = [
    {
      id: 1,
      username: "@indra.obl",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTgwMjQ5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      photo: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBoYXBweSUyMHRvZ2V0aGVyfGVufDF8fHx8MTc1ODAyNTQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Именинник был в неописуемом восторге, сказала, что не запечатлела лица при вручении такого подарка. Благодарю компанию @hellocuva за качественность, желаю вашему проекту дальнейшего развития и процветания!"
    },
    {
      id: 2,
      username: "@kimviktoriav",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfHx8fDE3NTgwMjQ5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      photo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwYm94JTIwcmVkJTIwcmliYm9ufGVufDF8fHx8MTc1ODAyNTQ3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      text: "А внутри сертификат на отдых в одном из 70 отелей по всей России. Когда я увидела сертификат — за это спасибо финансово доступно, потом ещё буду у них с такими крутыми идеями. Правда же, супер идея для подарка? А за упаковку отдельный респект ❤️❤️"
    },
    {
      id: 3,
      username: "@lana.gek",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwYmxvbmRlfGVufDF8fHx8MTc1ODAyNDkzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      photo: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBuYXR1cmUlMjBvdXRkb29yJTIwaGFwcHl8ZW58MXx8fHwxNzU4MDI1NDczfDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Увидела в таргетированной рекламе в ленте и решила — это будет идеальный подарок. Мне не нужно выбирать отель загазнее. Лёша сам выберет, куда мы поедем (это очень круто!) Ему очень понравилось. Я я счастлива от этого 🧡"
    },
    {
      id: 4,
      username: "@attyakova_diana",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwYnJ1bmV0dGV8ZW58MXx8fHwxNzU4MDI0OTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      photo: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwY2VydGlmaWNhdGUlMjB3aGl0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzU4MDI1NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Вы всегда угадаете с сюрпризом, так как счастливчик, который станет обладателем такого подарка САМ выберет любой отель из доступных для поездки. А самое главное сертификат действует на две персоны, можно активировать в течении 2-х лет."
    }
  ]

  // Определяем количество карточек в зависимости от размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4) // lg: 4 карточки
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2) // md: 2 карточки
      } else {
        setCardsPerView(1) // mobile: 1 карточка
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Функции навигации для карусели
  const nextReviews = () => {
    setCurrentIndex((prev) => (prev + 1) % satisfiedCustomers.length)
  }
  
  const prevReviews = () => {
    setCurrentIndex((prev) => (prev - 1 + satisfiedCustomers.length) % satisfiedCustomers.length)
  }

  // Вычисляем процент сдвига в зависимости от количества карточек на экране
  const getTransformPercentage = () => {
    return (100 / cardsPerView) * currentIndex
  }

  return (
    <section id="satisfied-customers-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Довольные покупатели
        </h2>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevReviews}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextReviews}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          {/* Reviews Grid - Responsive */}
          <div className="overflow-hidden px-12 md:px-14 lg:px-16">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${getTransformPercentage()}%)` }}
            >
              {satisfiedCustomers.map((review) => (
                <div key={review.id} className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-2 md:px-3">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-full overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Photo at the top */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <ImageWithFallback
                        src={review.photo}
                        alt={`Фото отзыва ${review.username}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 md:p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                          <ImageWithFallback
                            src={review.avatar}
                            alt={review.username}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-gray-900 text-sm">{review.username}</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SatisfiedCustomersSection
