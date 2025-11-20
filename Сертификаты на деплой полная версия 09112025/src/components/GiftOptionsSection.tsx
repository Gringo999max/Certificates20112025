import React, { useState, useMemo, useCallback, useRef } from 'react'
import { Smartphone, Mail, Package, Gift, Upload, Plus, ShoppingCart, Sparkles } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { useCart } from './CartContext'
import { Button } from './ui/button'
import { PackagingModal } from './PackagingModal'
import exampleImage from 'figma:asset/976f5285f8ffe388a593f6065ddefe4dfd2e3b29.png'

// Импорты новых электронных сертификатов
import winterCertificate from 'figma:asset/1b038ede49cc4bd71a076dea283da6102d83a91c.png'
import mountainLake from 'figma:asset/fb9a51260de5a817061843b770e3d65e5d7b55a5.png'
import lavenderValley from 'figma:asset/eaa25147861ce239d9e19d943d2bb9344972513e.png'
import greenHills from 'figma:asset/7810d8a7d4bf118cf4d79c50b97bd42ca54af713.png'

// Импорты изображений фирменных конвертов
import envelopeForestDome from 'figma:asset/a46a95fc611af71a5067207e0b3e7d423353d1a7.png'
import envelopeRomanticSunset from 'figma:asset/79a80dd324991daf45cd90a9f2912d78d0a8ec45.png'
import envelopeLavenderFields from 'figma:asset/4ecdb0f39700ddb61bd3ccb8acf64bca3bd0b0d8.png'
import envelopeVanAdventure from 'figma:asset/bb648890e682023fbc81607c5abc842ad9bbc3af.png'

// Импорт изображений подарочной упаковки
import giftBoxImage from 'figma:asset/04287b7f73e032685ba62d79514fe52a223ac325.png'
import giftBoxMountain from 'figma:asset/92ca04646725e7f39ab9d8bcb08f47961641c825.png'
import giftBoxLavender from 'figma:asset/e1779cb0f5e1a750e3a441574dc7071d3a0585f5.png'
import giftBoxVan from 'figma:asset/272b4b8040c9a5ae11a753a5cfdc6dd695e15d4b.png'

// Тестовые изображения глэмпингов для галереи
const testGlampingImages = [
  'https://images.unsplash.com/photo-1662791231593-57253ecfd795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRlbnQlMjBuYXR1cmV8ZW58MXx8fHwxNzYwMjQwNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1740437260482-7720ee580010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYW1waW5nJTIwZm9yZXN0fGVufDF8fHx8MTc2MDI4Mjg4MXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1685630708639-16d601a55734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMGRvbWUlMjBzdW5zZXR8ZW58MXx8fHwxNzYwMjgyODgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1738911203225-0b0d3362e01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNhbXBpbmclMjBtb3VudGFpbnN8ZW58MXx8fHwxNzYwMjgyODgyfDA&ixlib=rb-4.1.0&q=80&w=1080'
]

const GiftOptionsSection = () => {
  const [activeTab, setActiveTab] = useState('electronic')
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isPackagingModalOpen, setIsPackagingModalOpen] = useState(false)
  const mousePosition = useRef({ x: 0, y: 0 })
  const lastMouseY = useRef(0)
  const { addToCart } = useCart()

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
      id: 0,
      image: winterCertificate,
      title: "Зимняя сказка",
      description: "Новогодний дизайн с ёлкой, домиком и гирляндами",
      basePrice: 15000
    },
    {
      id: 1,
      image: mountainLake,
      title: "Романтический закат",
      description: "Влюбленная пара любуется закатом у озера",
      basePrice: 15000
    },
    {
      id: 2,
      image: lavenderValley,
      title: "Лавандовые поля",
      description: "Ароматные поля лаванды и живописные холмы",
      basePrice: 18000
    },
    {
      id: 3,
      image: greenHills,
      title: "Путешествие на фургоне",
      description: "Приключения среди зеленых полей и холмов",
      basePrice: 22000
    }
  ], [])

  // Контент для фирменных конвертов
  const envelopeContent = useMemo(() => [
    {
      id: 1,
      image: envelopeForestDome,
      title: "Домик в лесу",
      description: "Уютный домик среди хвойного леса и паутины"
    },
    {
      id: 2,
      image: envelopeRomanticSunset,
      title: "Романтический закат",
      description: "Влюбленная пара любуется закатом у озера"
    },
    {
      id: 3,
      image: envelopeLavenderFields,
      title: "Лавандовые поля",
      description: "Ароматные поля лаванды и живописные холмы"
    },
    {
      id: 4,
      image: envelopeVanAdventure,
      title: "Путешествие на фургоне",
      description: "Приключения среди зеленых полей и холмов"
    }
  ], [])

  // Контент для подарочной упаковки с реальными изображениями (4 варианта)
  const giftContent = useMemo(() => [
    {
      id: 1,
      image: giftBoxImage,
      title: "Премиальная коробка ручной работы",
      description: "Крафтовая коробка с белой лентой, золотыми звёздами и новогодней открыткой",
      basePrice: 15000
    },
    {
      id: 2,
      image: giftBoxMountain,
      title: "Премиум коробка с горным пейзажем",
      description: "Крафтовая коробка с сертификатом горного озера и белоснежных вершин",
      basePrice: 15000
    },
    {
      id: 3,
      image: giftBoxLavender,
      title: "Премиум коробка с лавандовыми полями",
      description: "Крафтовая коробка с сертификатом ароматных лавандовых полей",
      basePrice: 15000
    },
    {
      id: 4,
      image: giftBoxVan,
      title: "Премиум коробка с фургон-приключением",
      description: "Крафтовая коробка с сертификатом путешествия среди зелёных холмов",
      basePrice: 15000
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
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      case 'envelope':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' // Единый размер со всеми табами
      case 'gift':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' // Единый размер со всеми табами
      case 'custom':
        return 'grid-cols-1 md:grid-cols-1 lg:grid-cols-1'
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
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

  const handleAddToCart = useCallback((item: any) => {
    addToCart({
      id: `gift-option-${item.id}`,
      title: item.title,
      price: item.basePrice,
      nights: 1,
      durationType: "ночь",
      images: [
        item.image,
        testGlampingImages[0],
        testGlampingImages[1],
        testGlampingImages[2]
      ],
      category: "Электронный сертификат"
    })
    
    // Показываем уведомление (можно добавить toast)
    console.log(`Добавлен в корзину: ${item.title}`)
  }, [addToCart])

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
    } else if (activeTab === 'electronic') {
      // Для электронных сертификатов добавляем в корзину
      handleAddToCart(item)
    } else {
      // Для других табов просто логируем
      console.log('Выбран сертификат:', item)
    }
  }, [activeTab, handleAddToCart])

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

    // Обычные карточки для всех табов
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
  }, [handleCardClick, hoveredCard, activeTab, handleMouseEnter, handleMouseMove, handleMouseLeave, handleAddToCart])

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId)
  }, [])

  return (
    <section id="certificates-section" className="w-full px-6 py-8 bg-gradient-to-br from-emerald-25 to-teal-25">
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

        {/* Кнопка для тестирования упаковки */}
        <div className="mt-12 text-center">
          <Button
            onClick={() => setIsPackagingModalOpen(true)}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <Sparkles className="w-6 h-6" />
            🎁 Добавить подарочную упаковку
            <Sparkles className="w-6 h-6" />
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            Посмотрите варианты красивой упаковки с автоматическими каруселями
          </p>
        </div>

      </div>

      {/* Модальное окно упаковки */}
      <PackagingModal 
        isOpen={isPackagingModalOpen}
        onClose={() => setIsPackagingModalOpen(false)}
      />
    </section>
  )
}

export default GiftOptionsSection