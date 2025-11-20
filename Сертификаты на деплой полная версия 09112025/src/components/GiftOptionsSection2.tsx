import React, { useState, useMemo, useCallback, useRef } from 'react'
import { Smartphone, Mail, Package, Gift, Upload, Plus } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import exampleImage from 'figma:asset/976f5285f8ffe388a593f6065ddefe4dfd2e3b29.png'

// Импорты новых электронных сертификатов
import bannerImage from 'figma:asset/4aea96e41c4e52607c9611a364a6da071e0abac4.png'
import familyImage from 'figma:asset/70349575acaa59c345f1c559014a5cf37cb565aa.png'
import mountainLake from 'figma:asset/fb9a51260de5a817061843b770e3d65e5d7b55a5.png'

// Импорты изображений фирменных конвертов
import envelopeRomanticSunset from 'figma:asset/79a80dd324991daf45cd90a9f2912d78d0a8ec45.png'
import envelopeLavenderFields from 'figma:asset/4ecdb0f39700ddb61bd3ccb8acf64bca3bd0b0d8.png'
import envelopeVanAdventure from 'figma:asset/bb648890e682023fbc81607c5abc842ad9bbc3af.png'

const GiftOptionsSection2 = () => {
  const [activeTab, setActiveTab] = useState('electronic')
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const lastMouseY = useRef(0)

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
    },
    {
      id: 'custom',
      label: 'Свой дизайн',
      icon: Upload,
      description: 'Загрузите свое изображение'
    }
  ], [])

  // Контент для электронных сертификатов
  const electronicContent = useMemo(() => [
    {
      id: 1,
      image: bannerImage,
      title: "Отдых на природе",
      description: "Подарите близким незабываемый отдых среди живописной природы"
    },
    {
      id: 2,
      image: familyImage,
      title: "Семейное счастье",
      description: "Идеальное место для создания семейных воспоминаний"
    },
    {
      id: 3,
      image: mountainLake,
      title: "Романтический закат",
      description: "Влюбленная пара любуется закатом у озера"
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
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1617118601021-4992c028fe5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZ2lmdCUyMGJveCUyMGV1Y2FseXB0dXN8ZW58MXx8fHwxNzU3NTkzODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Розовый эвкалипт",
      description: "Романтичная коробка с эвкалиптовым декором"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1669913574933-4289cf92e05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGdpZnQlMjBib3glMjBzYXRpbiUyMHJpYmJvbnxlbnwxfHx8fDE3NTc1OTM4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Белоснежная классика",
      description: "Классическая белая коробка с сатиновой лентой"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1740842028123-56fd319de33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGtyYWZ0JTIwZW52ZWxvcGUlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc1NzU5Mzg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Минималистичный крафт",
      description: "Стильный крафтовый конверт в эко-стиле"
    }
  ], [])

  // Контент для кастомного дизайна
  const customContent = useMemo(() => [
    {
      id: 1,
      image: exampleImage,
      title: "Свой дизайн сертификата",
      description: "Загрузите собственное изображение",
      isCustom: true
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
      case 'custom':
        return customContent
      default:
        return electronicContent
    }
  }, [activeTab, electronicContent, envelopeContent, giftContent, customContent])

  const getGridClass = useMemo(() => {
    switch (activeTab) {
      case 'electronic':
        return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
      case 'envelope':
        return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
      case 'gift':
        return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
      case 'custom':
        return 'grid-cols-1 md:grid-cols-1 lg:grid-cols-1'
      default:
        return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-3'
    }
  }, [activeTab])

  // Функции для управления hover эффектом
  const handleMouseEnter = useCallback((itemId: number, e: React.MouseEvent) => {
    lastMouseY.current = e.clientY
    setHoveredCard(itemId)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const currentY = e.clientY
    
    // Если мышка движется вверх на значительное расстояние, скрываем hover
    if (lastMouseY.current - currentY > 10) {
      setHoveredCard(null)
    }
    
    lastMouseY.current = currentY
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredCard(null)
  }, [])

  const handleCardClick = useCallback((item: any) => {
    if (item.isCustom) {
      // Создаем скрытый input для загрузки файла
      const fileInput = document.createElement('input')
      fileInput.type = 'file'
      fileInput.accept = 'image/png, image/jpeg'
      fileInput.style.display = 'none'
      
      fileInput.onchange = (e: any) => {
        const files = e.target.files
        if (files && files[0]) {
          const file = files[0]
          
          // Проверяем размер файла (4 МБ = 4 * 1024 * 1024 байт)
          if (file.size > 4 * 1024 * 1024) {
            alert('Размер файла не должен превышать 4 МБ')
            return
          }
          
          // Проверяем тип файла
          if (!['image/png', 'image/jpeg'].includes(file.type)) {
            alert('Поддерживаются только файлы PNG и JPEG')
            return
          }
          
          console.log('Загружен файл:', file.name, file.size + ' байт')
          
          // Здесь можно добавить логику загрузки файла на сервер
          // const formData = new FormData()
          // formData.append('image', file)
          
          alert(`Файл "${file.name}" успешно загружен!`)
        }
      }
      
      document.body.appendChild(fileInput)
      fileInput.click()
      document.body.removeChild(fileInput)
    } else {
      // Простое действие при клике на обычные сертификаты
      console.log('Выбран сертификат:', item)
    }
  }, [])

  const renderCard = useCallback((item: any) => {
    // Если это кастомный дизайн, показываем форму загрузки
    if (item.isCustom) {
      return (
        <div key={item.id} className="max-w-md mx-auto">
          <div className="bg-white rounded-xl p-6 border-2 border-dashed border-gray-300 hover:border-emerald-400 transition-colors duration-300 relative">
            {/* Красный квадрат для кастомного дизайна */}
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded shadow-sm">
              Доработать раздел
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <Upload className="w-8 h-8 text-emerald-600" />
              </div>
              
              <div>
                <h3 className="text-gray-900 text-lg mb-2">Свой дизайн сертификата</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Нажмите кнопку или перетащите изображение в эту форму
                </p>
              </div>
              
              <button 
                onClick={() => handleCardClick(item)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
              >
                Загрузить изображение
              </button>
              
              <p className="text-gray-500 text-xs">
                PNG или JPEG размером до 4 МБ
              </p>
              
              <p className="text-gray-500 text-xs">
                Загружая изображения, вы соглашаетесь с{' '}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  условиями загрузки изображений
                </span>
              </p>
            </div>
          </div>
          
          {/* Кнопка "Свой дизайн" как на примере */}
          <div className="mt-4">
            <button 
              onClick={() => handleCardClick(item)}
              className="w-full bg-white border-2 border-gray-300 hover:border-emerald-400 rounded-lg py-3 px-4 text-gray-700 font-medium transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Свой дизайн
            </button>
          </div>
        </div>
      )
    }

    // Обычные карточки
    const isHovered = hoveredCard === item.id
    
    return (
      <div 
        key={item.id} 
        onClick={() => handleCardClick(item)}
        onMouseEnter={(e) => handleMouseEnter(item.id, e)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative bg-white rounded-xl p-4 shadow-sm transition-all duration-300 border border-gray-100 cursor-pointer ${
          isHovered ? 'scale-[2] shadow-lg z-50' : 'hover:shadow-md'
        }`}
      >
        <div className="aspect-[4/3] mb-3 overflow-hidden rounded-lg bg-gray-50 relative">
          <ImageWithFallback
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />

        </div>
        
        <div className="space-y-1">
          <h4 className="text-gray-900 text-sm">{item.title}</h4>
          <p className="text-gray-600 text-xs">{item.description}</p>
        </div>
      </div>
    )
  }, [handleCardClick, hoveredCard, activeTab, handleMouseEnter, handleMouseMove, handleMouseLeave])

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId)
  }, [])

  return (
    <section className="w-full px-6 py-8 bg-gradient-to-br from-emerald-25 to-teal-25">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 text-emerald-600 mr-3" />
            <h2 className="text-3xl md:text-4xl text-gray-900">
              Дарите как хотите!
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите идеальный способ подарить незабываемые впечатления в глэмпинге
          </p>
        </div>

        {/* Вкладки */}
        <div className="flex flex-col md:flex-row justify-center mb-8">
          <div className="flex flex-col md:flex-row bg-white rounded-2xl p-2 shadow-sm border border-gray-100 mx-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative flex items-center px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">{tab.label}</div>
                    <div className={`text-sm ${
                      activeTab === tab.id ? 'text-emerald-100' : 'text-gray-500'
                    }`}>
                      {tab.description}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Сетка карточек */}
        <div className={`grid gap-6 ${getGridClass}`}>
          {content.map(renderCard)}
        </div>

      </div>
    </section>
  )
}

export default GiftOptionsSection2