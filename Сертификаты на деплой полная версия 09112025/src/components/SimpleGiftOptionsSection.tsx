import React, { useState, useMemo, useCallback } from 'react'
import { Smartphone, Mail, Package, ShoppingCart } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

// Импорты новых электронных сертификатов
import mountainLake from 'figma:asset/131508b83f614db7da381141f568df476cf863af.png'
import lavenderValley from 'figma:asset/ea944e588e2882b2c426b3b4dcace60c8a6a3927.png'
import greenHills from 'figma:asset/6d5d9ed559b8c1715814b10874299d123240af48.png'

// Импорты изображений фирменных конвертов
import envelopeRomanticSunset from 'figma:asset/79a80dd324991daf45cd90a9f2912d78d0a8ec45.png'
import envelopeLavenderFields from 'figma:asset/4ecdb0f39700ddb61bd3ccb8acf64bca3bd0b0d8.png'
import envelopeVanAdventure from 'figma:asset/bb648890e682023fbc81607c5abc842ad9bbc3af.png'

const SimpleGiftOptionsSection = () => {
  const [activeTab, setActiveTab] = useState('electronic')

  const tabs = useMemo(() => [
    {
      id: 'electronic',
      label: 'Электронный сертификат',
      icon: Smartphone,
      description: 'Мгновенная доставка на email'
    },
    {
      id: 'envelope',
      label: 'Фирменный конверт',
      icon: Mail,
      description: 'Красивая упаковка с доставкой'
    },
    {
      id: 'gift',
      label: 'Подарочная упаковка',
      icon: Package,
      description: 'Премиум упаковка для особых случаев'
    }
  ], [])

  // Контент для электронных сертификатов
  const electronicContent = useMemo(() => [
    {
      id: 1,
      image: mountainLake,
      title: "Горное озеро",
      description: "Романтическое путешествие к живописному озеру"
    },
    {
      id: 2,
      image: lavenderValley,
      title: "Лавандовая долина",
      description: "Уютный отдых среди ароматных лавандовых полей"
    },
    {
      id: 3,
      image: greenHills,
      title: "Зеленые холмы",
      description: "Приключенческое путешествие по зеленым просторам"
    }
  ], [])

  // Контент для фирменных конвертов
  const envelopeContent = useMemo(() => [
    {
      id: 1,
      image: envelopeRomanticSunset,
      title: "Романтический закат",
      description: "Влюбленная пара любуется закатом у озера"
    },
    {
      id: 2,
      image: envelopeLavenderFields,
      title: "Лавандовые поля",
      description: "Ароматные поля лаванды и живописные холмы"
    },
    {
      id: 3,
      image: envelopeVanAdventure,
      title: "Путешествие на фургоне",
      description: "Приключения среди зеленых полей и холмов"
    }
  ], [])

  // Контент для подарочных упаковок
  const giftContent = useMemo(() => [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1667864811044-b0bcd9ed4a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZ2lmdCUyMGJveCUyMHBhc3RlbCUyMHJpYmJvbnxlbnwxfHx8fDE3NTc1OTM4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Пастельная элегантность",
      description: "Нежная коробка с атласной лентой и бантом"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1676214120538-330d6abb0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMGdpZnQlMjBib3glMjBkcmllZCUyMGZsb3dlcnN8ZW58MXx8fHwxNzU3NTkzODMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Крафт с сухоцветами",
      description: "Экологичная упаковка с натуральным декором"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1702215111752-0e79f4ff7845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnaWZ0JTIwZW52ZWxvcGUlMjBiZWlnZXxlbnwxfHx8fDE3NTc1OTM4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Бежевый конверт люкс",
      description: "Изысканный конверт с золотистыми деталями"
    }
  ], [])

  const content = useMemo(() => {
    switch (activeTab) {
      case 'electronic':
        return electronicContent
      case 'envelope':
        return envelopeContent
      case 'gift':
        return giftContent
      default:
        return electronicContent
    }
  }, [activeTab, electronicContent, envelopeContent, giftContent])

  const getGridClass = useMemo(() => {
    return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
  }, [])

  const handleCardClick = useCallback((item: any) => {
    // Простое действие при клике - добавление в корзину
    console.log('Добавлен в корзину:', item)
    // Здесь можно добавить логику добавления в корзину
  }, [])

  const renderSimpleCard = useCallback((item: any) => {
    return (
      <div 
        key={item.id} 
        onClick={() => handleCardClick(item)}
        className="group relative bg-white rounded-xl p-4 shadow-sm hover:shadow-2xl hover:scale-110 transition-all duration-500 border border-gray-100 cursor-pointer transform hover:-translate-y-2"
      >
        <div className="aspect-[4/3] mb-3 overflow-hidden rounded-lg bg-gray-50 relative">
          <ImageWithFallback
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay с градиентом при hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
          
          {/* Иконка корзины с анимацией */}
          <div className="absolute top-3 right-3 bg-emerald-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500">
            <ShoppingCart className="w-4 h-4" />
          </div>
          
          {/* Кнопка "Выбрать" внизу изображения */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <div className="bg-white/95 backdrop-blur-sm text-emerald-700 px-3 py-2 rounded-lg text-center text-sm font-medium shadow-lg">
              Выбрать дизайн
            </div>
          </div>
        </div>
        
        <div className="space-y-1">
          <h4 className="text-gray-900 text-sm group-hover:text-emerald-700 transition-colors duration-300">{item.title}</h4>
          <p className="text-gray-600 text-xs group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
        </div>
        
        {/* Декоративный элемент */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-full h-full bg-emerald-500 rounded-full animate-ping"></div>
        </div>
      </div>
    )
  }, [handleCardClick])

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-8">
          <h2 className="text-gray-900 mb-2">Способы доставки подарков (простой hover)</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите наиболее удобный способ получения подарочного сертификата
          </p>
        </div>

        {/* Табы */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            const isActive = activeTab === tab.id
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl text-left transition-all duration-300 ${
                  isActive 
                    ? 'bg-emerald-600 text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 shadow-sm hover:shadow-md'
                }`}
              >
                <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                <div>
                  <div className="font-medium text-sm">{tab.label}</div>
                  <div className={`text-xs ${isActive ? 'text-emerald-100' : 'text-gray-500'}`}>
                    {tab.description}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Сетка карточек */}
        <div className={`grid gap-6 ${getGridClass}`}>
          {content.map(renderSimpleCard)}
        </div>

      </div>
    </section>
  )
}

export default SimpleGiftOptionsSection