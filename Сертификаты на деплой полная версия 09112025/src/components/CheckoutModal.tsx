import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription, DialogClose } from './ui/dialog'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Checkbox } from './ui/checkbox'
import { Calendar } from './ui/calendar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { X, Phone, Mail, Clock, ChevronLeft, ChevronRight, Moon, Plus, Minus, AlertCircle, RotateCcw, CheckCircle, Package, MapPin } from 'lucide-react'
import { useCart } from './CartContext'
import { CartItemCard } from './CartItemCard'
import petFriendlyImage from 'figma:asset/cf91bbdd44cef2cea48334b86d2f5786cb049591.png'
import { PremiumCardDesign, MinimalistDesign } from './CartItemDesigns'

// Импорт изображений сертификатов
import winterCertificate from 'figma:asset/1b038ede49cc4bd71a076dea283da6102d83a91c.png'
import lavenderCertificate from 'figma:asset/eaa25147861ce239d9e19d943d2bb9344972513e.png'
import sunsetCertificate from 'figma:asset/fb9a51260de5a817061843b770e3d65e5d7b55a5.png'
import vanCertificate from 'figma:asset/7810d8a7d4bf118cf4d79c50b97bd42ca54af713.png'

// Импорт изображений фирменных конвертов
import envelopeForestDome from 'figma:asset/a46a95fc611af71a5067207e0b3e7d423353d1a7.png'
import envelopeRomanticSunset from 'figma:asset/79a80dd324991daf45cd90a9f2912d78d0a8ec45.png'
import envelopeLavenderFields from 'figma:asset/4ecdb0f39700ddb61bd3ccb8acf64bca3bd0b0d8.png'
import envelopeVanAdventure from 'figma:asset/bb648890e682023fbc81607c5abc842ad9bbc3af.png'

// Импорт изображений подарочной упаковки
import giftBoxImage from 'figma:asset/04287b7f73e032685ba62d79514fe52a223ac325.png'
import giftBoxMountain from 'figma:asset/92ca04646725e7f39ab9d8bcb08f47961641c825.png'
import giftBoxLavender from 'figma:asset/e1779cb0f5e1a750e3a441574dc7071d3a0585f5.png'
import giftBoxVan from 'figma:asset/272b4b8040c9a5ae11a753a5cfdc6dd695e15d4b.png'

import { ImageWithFallback } from './figma/ImageWithFallback'

// Тестовые изображения глэмпингов для галереи
const testGlampingImages = [
  'https://images.unsplash.com/photo-1662791231593-57253ecfd795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRlbnQlMjBuYXR1cmV8ZW58MXx8fHwxNzYwMjQwNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1740437260482-7720ee580010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYW1waW5nJTIwZm9yZXN0fGVufDF8fHx8MTc2MDI4Mjg4MXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1685630708639-16d601a55734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMGRvbWUlMjBzdW5zZXR8ZW58MXx8fHwxNzYwMjgyODgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1738911203225-0b0d3362e01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNhbXBpbmclMjBtb3VudGFpbnN8ZW58MXx8fHwxNzYwMjgyODgyfDA&ixlib=rb-4.1.0&q=80&w=1080'
]

interface CheckoutModalProps {
  trigger?: React.ReactNode
  selectedCertificate?: {
    name: string
    description: string
    price: number
    type: string
  }
  onClose?: () => void
  // Контролируемый режим (для FloatingCartButton)
  isOpen?: boolean
}

const deliveryOptionsData = [
  {
    id: 'electronic',
    name: 'Электронный сертификат',
    price: 0,
    description: 'Электронный сертификат приходит на почту сразу после оплаты.',
    icon: '💌'
  },
  {
    id: 'envelope',
    name: 'В фирменном конверте',
    price: 290,
    description: 'Аккуратная доставка в стильном фирменном конверте.',
    icon: '✉'
  },
  {
    id: 'gift-package',
    name: 'В подарочной упаковке',
    price: 1190,
    description: 'Доставка в подарочной упаковке по Москве за 1-2 дня, в другие города России — от 2 до 8 рабочих дней.',
    icon: '🎁'
  }
]

// Подарочная упаковка с реальными изображениями
const packagingOptions = [
  { id: 'premium', name: 'Премиальная коробка ручной работы', image: giftBoxImage },
  { id: 'premium-mountain', name: 'Премиум коробка с горным пейзажем', image: giftBoxMountain },
  { id: 'premium-lavender', name: 'Премиум коробка с лавандовыми полями', image: giftBoxLavender },
  { id: 'premium-van', name: 'Премиум коробка с фургон-приключением', image: giftBoxVan }
]

// Фирменные конверты с реальными изображениями
const envelopeOptions = [
  { id: 'forest-dome', name: 'Домик в лесу', image: envelopeForestDome },
  { id: 'sunset', name: 'Романтический закат', image: envelopeRomanticSunset },
  { id: 'lavender', name: 'Лавандовые поля', image: envelopeLavenderFields },
  { id: 'van', name: 'Путешествие на фургоне', image: envelopeVanAdventure }
]

const moscowDeliveryOptions = [
  { 
    id: 'pickup', 
    name: 'Самовывоз из офиса', 
    price: 0, 
    time: 'Через 3 часа',
    icon: '🏢'
  },
  { 
    id: 'courier', 
    name: 'Доставка с курьером', 
    price: 450, 
    time: 'Сегодня или позже',
    icon: '🚴'
  },
  { 
    id: 'pickup-point', 
    name: 'Доставка до пункта выдачи', 
    price: 300, 
    time: '1-5 дней',
    icon: '📦'
  },
  { 
    id: 'express', 
    name: 'Быстрая доставка с курьером за 2 часа', 
    price: 900, 
    time: '2 часа',
    icon: '⚡'
  }
]

// Опции доставки для Москвы за пределами МКАД
const moscowOutsideMkadDeliveryOptions = [
  { 
    id: 'pickup', 
    name: 'Самовывоз из офиса', 
    price: 0, 
    time: 'Через 3 часа',
    icon: '🏢'
  },
  { 
    id: 'pickup-point', 
    name: 'Доставка до пункта выдачи', 
    price: 300, 
    time: '1-5 дней',
    icon: '📦'
  },
  { 
    id: 'express', 
    name: 'Быстрая доставка с курьером за 2 часа', 
    price: 900, 
    time: 'сегодня или позже',
    icon: '⚡'
  }
]

// Опции доставки для Санкт-Петербурга и ЛО
const spbDeliveryOptions = [
  { 
    id: 'pickup-point', 
    name: 'Доставка до пункта выдачи', 
    price: 300, 
    time: '2-6 дней',
    icon: '📦'
  }
]

// Опции доставки для других городов и населённых пунктов
const otherCityDeliveryOptions = [
  { 
    id: 'pickup-point', 
    name: 'Доставка до пункта выдачи', 
    price: 300, 
    time: '≈ 1-10 дней',
    icon: '📦'
  }
]

// Пункты выдачи с полной информацией
const pickupPoints = [
  { 
    id: 'panfilovskiy', 
    name: 'Москва Панфиловский переулок', 
    address: '121099, Москва, Панфиловский переулок, д.3',
    shortAddress: 'Панфиловский переулок, д.3',
    phone: '+74951570020',
    workingHours: 'пн-вс: 09.00-21.00',
    paymentType: 'выдача заказов с оплатой по факту получения и предоплаченных',
    hasFitting: true,
    lat: 55.7558,
    lng: 37.6173,
    image: 'https://images.unsplash.com/photo-1697935248301-d6f331b26e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwaWNrdXAlMjBwb2ludCUyMHN0b3JlfGVufDF8fHx8MTc1OTMyMTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    id: 'arbat-10', 
    name: 'Москва Арбат', 
    address: '119002, Москва, ул. Арбат, д. 10',
    shortAddress: 'ул. Арбат, д. 10',
    phone: '+74951234567',
    workingHours: 'пн-вс: 10.00-20.00',
    paymentType: 'выдача заказов с оплатой по факту получения и предоплаченных',
    hasFitting: true,
    lat: 55.7514,
    lng: 37.5979,
    image: 'https://images.unsplash.com/photo-1697935248301-d6f331b26e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwaWNrdXAlMjBwb2ludCUyMHN0b3JlfGVufDF8fHx8MTc1OTMyMTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    id: 'tverskaya-15', 
    name: 'Москва Тверская', 
    address: '125009, Москва, ул. Тверская, д. 15',
    shortAddress: 'ул. Тверская, д. 15',
    phone: '+74959876543',
    workingHours: 'пн-вс: 09.00-21.00',
    paymentType: 'выдача заказов с оплатой по факту получения и предоплаченных',
    hasFitting: true,
    lat: 55.7653,
    lng: 37.6051,
    image: 'https://images.unsplash.com/photo-1697935248301-d6f331b26e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwaWNrdXAlMjBwb2ludCUyMHN0b3JlfGVufDF8fHx8MTc1OTMyMTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    id: 'myasnitskaya-24', 
    name: 'Москва Мясницкая', 
    address: '101000, Москва, Мясницкая ул., д. 24',
    shortAddress: 'Мясницкая ул., д. 24',
    phone: '+74951112233',
    workingHours: 'пн-вс: 10.00-22.00',
    paymentType: 'выдача заказов с оплатой по факту получения и предоплаченных',
    hasFitting: true,
    lat: 55.7616,
    lng: 37.6328,
    image: 'https://images.unsplash.com/photo-1697935248301-d6f331b26e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwaWNrdXAlMjBwb2ludCUyMHN0b3JlfGVufDF8fHx8MTc1OTMyMTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    id: 'pyatnitskaya-31', 
    name: 'Москва Пятницкая', 
    address: '115035, Москва, Пятницкая ул., д. 31',
    shortAddress: 'Пятницкая ул., д. 31',
    phone: '+74954445566',
    workingHours: 'пн-вс: 09.00-21.00',
    paymentType: 'выдача заказов с оплатой по факту получения и предоплаченных',
    hasFitting: true,
    lat: 55.7417,
    lng: 37.6279,
    image: 'https://images.unsplash.com/photo-1697935248301-d6f331b26e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwaWNrdXAlMjBwb2ludCUyMHN0b3JlfGVufDF8fHx8MTc1OTMyMTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
]

// Функция создания уникального ключа для товара (вынеена наружу)
function getItemKey(id: string, nights: number): string {
  return `${id}-${nights}`
}

// Вспомогательные функции для форматирования
function formatPrice(price: number | undefined): string {
  return (price || 0).toLocaleString('ru-RU')
}

// Функция для форматирования телефонного номера
function formatPhoneNumber(input: string): string {
  // Убираем все символы кроме цифр
  const numbers = input.replace(/\D/g, '')
  
  // Если пустая строка или только +7, возвращаем +7
  if (numbers.length === 0) {
    return '+7'
  }
  
  // Если начинается с 8, заменяем на 7
  let cleanNumbers = numbers.startsWith('8') ? '7' + numbers.slice(1) : numbers
  
  // Если начинается с 7, убираем её так как мы добавим +7 автоматически
  if (cleanNumbers.startsWith('7')) {
    cleanNumbers = cleanNumbers.slice(1)
  }
  
  // Ограничиваем до 10 цифр
  cleanNumbers = cleanNumbers.slice(0, 10)
  
  // Если нет цифр после удаления 7, возвращаем +7
  if (cleanNumbers.length === 0) {
    return '+7'
  }
  
  // Форматируем номер
  let formatted = '+7 ('
  formatted += cleanNumbers.slice(0, 3)
  
  if (cleanNumbers.length > 3) {
    formatted += ') '
    formatted += cleanNumbers.slice(3, 6)
    
    if (cleanNumbers.length > 6) {
      formatted += '-'
      formatted += cleanNumbers.slice(6, 8)
      
      if (cleanNumbers.length > 8) {
        formatted += '-'
        formatted += cleanNumbers.slice(8, 10)
      }
    }
  }
  
  return formatted
}

// Функция для получения чистого номера (только цифры)
function getCleanPhoneNumber(formatted: string): string {
  const numbers = formatted.replace(/\D/g, '')
  return numbers.startsWith('7') ? numbers : '7' + numbers
}

function declensionCertificate(count: number): string {
  if (count === 1) return 'сертификат'
  if (count >= 2 && count <= 4) return 'сертификата'
  return 'сертификатов'
}

function declensionNight(count: number): string {
  if (count === 1) return 'ночь'
  if (count >= 2 && count <= 4) return 'ночи'
  return 'ночей'
}

function numberToText(count: number): string {
  const numbers = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять']
  return numbers[count] || count.toString()
}

// Дизайны электронных сертификатов
const certificateDesigns = [
  {
    id: 'winter',
    name: 'Зимняя сказка',
    description: 'Новогодний дизайн с зимними мотивами',
    image: winterCertificate
  },
  {
    id: 'sunset',
    name: 'Романтический закат',
    description: 'Уютный дизайн с парой на фоне заката',
    image: sunsetCertificate
  },
  {
    id: 'lavender',
    name: 'Лавандовые поля',
    description: 'Романтичный дизайн с лавандовыми полями',
    image: lavenderCertificate
  },
  {
    id: 'van',
    name: 'Путешествие на фургоне',
    description: 'Дизайн в стиле путешествий с фургоном',
    image: vanCertificate
  }
]

/**
 * CheckoutModal - Полноэкранная форма оформления заказа
 * 
 * Основные функции:
 * - ✅ Валидация формы с красивыми красными рамками и подсветкой ошибок
 * - ✅ Автоскролл к первому полю с ошибкой при валидации
 * - ✅ Зеленые галочки для успешно заполненных полей
 * - ✅ Прогресс-бар показывает процент заполнения формы
 * - ✅ Автосохранение в localStorage (данные не теряются при закрытии)
 * - ✅ Автозагрузка данных из localStorage при открытии
 * - ✅ Адаптивная мобильная версия
 * - ✅ Валидация выбора станции метро для самовывоза
 * - ✅ Валидация выбора пункта выдачи
 * - ✅ Кнопка "Очистить форму" для быстрого сброса всех данных
 * - ✅ Умная кнопка "Оплатить" с динамическим стилем
 * - ✅ Автоформатирование телефонного номера
 */
export function CheckoutModal({ trigger, selectedCertificate, onClose, isOpen }: CheckoutModalProps) {
  const [deliveryMethod, setDeliveryMethod] = useState('electronic')
  const [selectedPackaging, setSelectedPackaging] = useState('')
  const [selectedEnvelope, setSelectedEnvelope] = useState('')
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedCertificateDesign, setSelectedCertificateDesign] = useState('sunset')
  const [deliveryLocation, setDeliveryLocation] = useState('')
  const [moscowDeliveryMethod, setMoscowDeliveryMethod] = useState('') // Способ получения в Москве
  const [deliveryAddress, setDeliveryAddress] = useState({
    street: '',
    apartment: '',
    additional: ''
  })
  
  // Новое состояние для пунктов выдачи
  const [selectedPickupPoint, setSelectedPickupPoint] = useState('')
  const [pickupPointView, setPickupPointView] = useState<'map' | 'details' | 'confirmed'>('map')
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null)
  const [tempSelectedPoint, setTempSelectedPoint] = useState<string>('')
  
  // Состояние для отслеживания валидных полей (для зеленых галочек)
  const [validFields, setValidFields] = useState<{[key: string]: boolean}>({})
  
  // Состояние для промокода
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState<{code: string, discount: number, type: 'percent' | 'fixed'} | null>(null)
  const [promoError, setPromoError] = useState('')
  const [isApplyingPromo, setIsApplyingPromo] = useState(false)
  
  // Состояние для fallback случая (пустая корзина)
  const [fallbackQuantity, setFallbackQuantity] = useState(1)
  const [fallbackNights, setFallbackNights] = useState(2)
  
  // Состояние для удаления товаров с каунтдауном
  const [deletingItems, setDeletingItems] = useState<{[key: string]: {item: any, countdown: number}}>({})
  
  // Состояние для hover эффекта сертификатов
  const [hoveredCertificate, setHoveredCertificate] = useState<string | null>(null)
  
  // Состояние для привлечения внимания к блоку 2
  const [shouldHighlightBlock2, setShouldHighlightBlock2] = useState(false)
  
  // Состояние для отслеживания, был ли пользовательский выбор дизайна электронного сертификата
  const [electronicDesignSelected, setElectronicDesignSelected] = useState(false)
  
  // Ref для отслеживания предыдущего значения deliveryMethod (чтобы не делать автоскролл при изменении количества)
  const prevDeliveryMethodRef = useRef<string>(deliveryMethod)
  
  // Флаг для блокировки автоскролла при изменении количества товаров
  const isQuantityChangingRef = useRef<boolean>(false)
  const quantityChangeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Состояние для валидации формы
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({})
  
  // Отладка изменений состояния ошибок
  useEffect(() => {
    console.log('formErrors изменились:', formErrors)
  }, [formErrors])
  const [submitAttempted, setSubmitAttempted] = useState(false)
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '+7',
    email: '',
    message: '',
    comment: '',
    certificateStart: 'immediate',
    certificateDesign: 'sunset',
    agreedToTerms: false
  })
  
  const { items, getTotalPrice, updateQuantity } = useCart()
  
  // Memoized order summary to prevent unnecessary recalculations
  const orderSummary = useMemo(() => {
    if (items.length === 0) return null
    
    // Фильтруем товары, исключая те, что находятся в процессе удаления
    const activeItems = items.filter(item => !deletingItems[getItemKey(item.id, item.nights)])
    
    const totalCertificates = activeItems.reduce((total, item) => total + item.quantity, 0)
    const totalNights = activeItems.reduce((total, item) => total + (item.nights * item.quantity), 0)
    const totalPrice = activeItems.reduce((total, item) => total + (item.price * item.nights * item.quantity), 0)
    
    // Generate description
    const groups: { [key: number]: { nights: number; quantity: number } } = {}
    
    activeItems.forEach(item => {
      if (!groups[item.nights]) {
        groups[item.nights] = { nights: item.nights, quantity: 0 }
      }
      groups[item.nights].quantity += item.quantity
    })
    
    const sortedGroups = Object.values(groups).sort((a, b) => a.nights - b.nights)
    
    let description = ''
    if (sortedGroups.length === 1) {
      const group = sortedGroups[0]
      const certificateWord = declensionCertificate(group.quantity)
      const nightWord = declensionNight(group.nights)
      const quantityText = numberToText(group.quantity)
      description = `${quantityText} ${certificateWord} на ${group.nights} ${nightWord}`
    } else if (sortedGroups.length > 1) {
      description = `${sortedGroups.length} типа сертификатов`
    }
    
    return {
      totalCertificates,
      totalNights,
      totalPrice,
      description,
      items: activeItems
    }
  }, [items, deletingItems])
  
  // Default certificate info if none provided
  const certificateInfo = selectedCertificate || {
    name: 'Глэмпинг: отдых в глэмпинге с питомцем',
    description: 'Подарочный сертификат включает 500+ коттеджей, глэмпингов и отелей высокого уровня на природе',
    price: 24900,
    type: 'pet-friendly'
  }

  // Расчет стоимости доставки и упаковки
  const deliveryMethodPrice = deliveryOptionsData.find(opt => opt.id === deliveryMethod)?.price || 0
  const moscowDeliveryPrice = moscowDeliveryMethod ? (moscowDeliveryOptions.find(opt => opt.id === moscowDeliveryMethod)?.price || 0) : 0
  const deliveryAndPackagingPrice = deliveryMethodPrice + moscowDeliveryPrice
  
  // Базовая стоимость сертификатов
  const certificatePrice = orderSummary ? (orderSummary.totalPrice || 0) : (certificateInfo.price * fallbackNights * fallbackQuantity)
  const basePrice = certificatePrice + deliveryAndPackagingPrice
  
  // Расчет скидки по промокоду
  const promoDiscount = appliedPromo ? 
    (appliedPromo.type === 'percent' ? Math.round(basePrice * appliedPromo.discount / 100) : appliedPromo.discount) : 0
  const finalPrice = Math.max(0, basePrice - promoDiscount)
  
  // Вычисление прогресса заполнения формы
  const formProgress = useMemo(() => {
    let totalSteps = 0
    let completedSteps = 0
    
    // Шаг 1: Способ доставки (всегда требуется)
    totalSteps++
    if (deliveryMethod) completedSteps++
    
    // Шаг 2: Дизайн конверта/упаковки (только если выбран конверт или упаковка)
    if (deliveryMethod === 'envelope') {
      totalSteps++
      if (selectedEnvelope) completedSteps++
    } else if (deliveryMethod === 'gift-package') {
      totalSteps++
      if (selectedPackaging) completedSteps++
    }
    
    // Шаг 3: Контактная информация (всегда требуется)
    totalSteps++
    if (formData.firstName && formData.lastName && formData.phone && formData.email) {
      completedSteps++
    }
    
    // Шаг 4: Место получения (только для конверта и упаковки)
    if (deliveryMethod === 'envelope' || deliveryMethod === 'gift-package') {
      totalSteps++
      if (deliveryLocation) completedSteps++
    }
    
    // Шаг 5: Способ получения в Москве (только для Москвы)
    if (deliveryLocation === 'moscow-mkad') {
      totalSteps++
      if (moscowDeliveryMethod) completedSteps++
      
      // Подшаг: Пункт выдачи или адрес доставки
      if (moscowDeliveryMethod === 'pickup-point') {
        totalSteps++
        if (selectedPickupPoint) completedSteps++
      } else if (moscowDeliveryMethod === 'courier' || moscowDeliveryMethod === 'express') {
        totalSteps++
        if (deliveryAddress.street) completedSteps++
      }
    }
    
    // Шаг 6: Согласие с условиями (всегда требуется)
    totalSteps++
    if (formData.agreedToTerms) completedSteps++
    
    const percentage = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0
    
    return {
      completed: completedSteps,
      total: totalSteps,
      percentage
    }
  }, [deliveryMethod, selectedEnvelope, selectedPackaging, formData, deliveryLocation, moscowDeliveryMethod, selectedPickupPoint, deliveryAddress])

  const handleQuantityChange = useCallback((itemId: string, newQuantity: number, nights?: number) => {
    // Устанавливаем флаг, что происходит изменение количества
    // Это блокирует автоскролл на 1 секунду
    isQuantityChangingRef.current = true
    
    // Очищаем предыдущий таймаут если он был
    if (quantityChangeTimeoutRef.current) {
      clearTimeout(quantityChangeTimeoutRef.current)
    }
    
    // Сбрасываем флаг через 1 секунду
    quantityChangeTimeoutRef.current = setTimeout(() => {
      isQuantityChangingRef.current = false
    }, 1000)
    
    updateQuantity(itemId, newQuantity, nights)
  }, [updateQuantity])

  // Функции для работы с промокодами
  const availablePromoCodes = {
    'WELCOME10': { discount: 10, type: 'percent' as const, description: 'Скидка 10% для новых клиентов' },
    'SUMMER2024': { discount: 15, type: 'percent' as const, description: 'Летняя скидка 15%' },
    'SAVE500': { discount: 500, type: 'fixed' as const, description: 'Скидка 500 рублей' },
    'FAMILY20': { discount: 20, type: 'percent' as const, description: 'Семейная скидка 20%' }
  }

  const applyPromoCode = useCallback(async () => {
    if (!promoCode.trim()) return
    
    setIsApplyingPromo(true)
    setPromoError('')
    
    // Имитация проверки промокода
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const code = promoCode.trim().toUpperCase()
    const promo = availablePromoCodes[code as keyof typeof availablePromoCodes]
    
    if (promo) {
      setAppliedPromo({
        code,
        discount: promo.discount,
        type: promo.type
      })
      setPromoError('')
    } else {
      setPromoError('Промокод не найден или не действителен')
    }
    
    setIsApplyingPromo(false)
  }, [promoCode])

  const removePromoCode = useCallback(() => {
    setAppliedPromo(null)
    setPromoCode('')
    setPromoError('')
  }, [])

  // Функция очистки всей формы
  const clearForm = useCallback(() => {
    // Очищаем все поля
    setFormData({
      firstName: '',
      lastName: '',
      phone: '+7',
      email: '',
      message: '',
      comment: '',
      certificateStart: 'immediate',
      certificateDesign: 'sunset',
      agreedToTerms: false
    })
    
    // Очищаем состояния доставки
    setDeliveryMethod('electronic')
    setSelectedPackaging('')
    setSelectedEnvelope('')
    setSelectedDate(undefined)
    setSelectedCertificateDesign('sunset')
    setDeliveryLocation('')
    setMoscowDeliveryMethod('')
    setDeliveryAddress({ street: '', apartment: '', additional: '' })
    setSelectedPickupPoint('')
    
    // Очищаем промокод
    setAppliedPromo(null)
    setPromoCode('')
    setPromoError('')
    
    // Очищаем ошибки
    setFormErrors({})
    setSubmitAttempted(false)
    
    // Очищаем localStorage
    try {
      localStorage.removeItem('checkoutFormData')
    } catch (error) {
      console.error('Ошибка при очистке localStorage:', error)
    }
  }, [])

  // Данные для быстрых пожеланий (Вариант 3)
  const QUICK_WISHES = [
    { 
      icon: '🎂', 
      short: 'С ДР!', 
      full: 'С Днем Рождения! Пусть этот год подарит тебе только самые яркие эмоции и запоминающиеся приключения. Мы дарим тебе возможность выбрать идеальный отдых на природе, когда ты сам захочешь.', 
      category: 'universal', 
      color: 'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200' 
    },
    { 
      icon: '💝', 
      short: 'Любимой/му', 
      full: 'Моей любимой (му) с любовью. Этот подарок — наш общий побег от суеты, чтобы побыть вдвоем под звездным небом. Жду, когда мы вместе выберем наш идеальный уголок. Целую!', 
      category: 'romantic', 
      color: 'bg-pink-50 hover:bg-pink-100 text-pink-700 border-pink-200' 
    },
    { 
      icon: '🎉', 
      short: 'Поздравляю', 
      full: 'Поздравляю! С наилучшими пожеланиями! Желаю тебе по-настоящему перезагрузиться и восстановить силы вдали от города. Наша компания дарит тебе этот заслуженный отдых.', 
      category: 'friends', 
      color: 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200' 
    },
    { 
      icon: '🙏', 
      short: 'Спасибо', 
      full: 'Спасибо тебе за всё! Твоя поддержка бесценна, и ты заслуживаешь самого лучшего отдыха. Используй этот сертификат, чтобы выбрать место, где ты сможешь по-настоящему расслабиться.', 
      category: 'gratitude', 
      color: 'bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200' 
    },
    { 
      icon: '🎊', 
      short: 'С праздником', 
      full: 'С праздником! Пусть сбудутся все мечты! В новом году желаю тебе больше спокойствия, ярких впечатлений и времени на себя. Выбирай любой глэмпинг и наслаждайся.', 
      category: 'holiday', 
      color: 'bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200' 
    },
    { 
      icon: '💪', 
      short: 'Отдохни', 
      full: 'Время выдохнуть и перезагрузиться! Хватит откладывать отдых. Это твой личный билет в мир тишины, комфорта и природы. Используй его, чтобы вернуть гармонию.', 
      category: 'motivation', 
      color: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200' 
    },
    { 
      icon: '👨‍👩‍👧‍👦', 
      short: 'От семьи', 
      full: 'От всей нашей семьи с любовью. Мы дарим вам возможность провести бесценное время вместе, создать новые теплые воспоминания и насладиться природой. Ждем ваших фотографий!', 
      category: 'family', 
      color: 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200' 
    },
    { 
      icon: '💕', 
      short: 'Годовщина', 
      full: 'С годовщиной! За нашу любовь! Спасибо за каждый год, проведенный рядом. Этот сертификат — приглашение в новое, романтическое приключение, которое мы разделим вдвоем.', 
      category: 'anniversary', 
      color: 'bg-pink-50 hover:bg-pink-100 text-pink-700 border-pink-200' 
    },
    { 
      icon: '💒', 
      short: 'Свадьба', 
      full: 'С новым этапом! Пусть ваша совместная жизнь будет такой же яркой и уютной, как этот подарок. Желаем вам романтики и незабываемых впечатлений на природе.', 
      category: 'wedding', 
      color: 'bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200' 
    },
    { 
      icon: '🌿', 
      short: 'Здоровья', 
      full: 'Поправляйся! Отдых на природе — лучшее лекарство. Выбери глэмпинг, где ты сможешь подышать свежим воздухом и восстановить силы. Мы очень тебя ждем!', 
      category: 'health', 
      color: 'bg-green-50 hover:bg-green-100 text-green-700 border-green-200' 
    }
  ]

  // Функция для добавления быстрых пожеланий (заменяет текст)
  const addWishText = useCallback((text: string) => {
    setFormData(prev => {
      return { ...prev, message: text } // Полная замена текста вместо накопления
    })
  }, [])

  // Функция валидации формы
  const validateForm = useCallback(() => {
    console.log('validateForm вызвана с данными:', formData)
    const errors: {[key: string]: string} = {}
    
    // ПРИОРИТЕТ 1: Проверка выбора дизайна конверта или упаковки (Блок 2)
    if (deliveryMethod === 'envelope' && !selectedEnvelope) {
      errors.selectedEnvelope = 'Выберите дизайн конверта'
    }
    
    if (deliveryMethod === 'gift-package' && !selectedPackaging) {
      errors.selectedPackaging = 'Выберите дизайн упаковки'
    }
    
    // ПРИОРИТЕТ 2: Проверка контактных данных (Блок 3)
    // Проверка имени
    if (!formData.firstName.trim()) {
      console.log('Ошибка в firstName')
      errors.firstName = 'Заполните обязательное поле'
    }
    
    // Проверка фамилии
    if (!formData.lastName.trim()) {
      errors.lastName = 'Заполните обязательное поле'
    }
    
    // Проверка телефона - строго 11 цифр (7 + 10)
    if (!formData.phone.trim() || formData.phone.trim() === '+7') {
      errors.phone = 'Заполните обязательное поле'
    } else if (formData.phone.replace(/\D/g, '').length !== 11) {
      errors.phone = 'Номер должен содержать 10 цифр'
    }
    
    // Проверка email
    if (!formData.email.trim()) {
      errors.email = 'Заполните обязательное поле'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Введите корректный email адрес'
    }
    
    // Проверка выбора места доставки
    // Место доставки нужно выбрать если:
    // 1. Выбран конверт (envelope)
    // 2. Выбрана упаковка (gift-package)
    // 3. Не выбран электронный сертификат (electronic)
    if (deliveryMethod !== 'electronic' && !deliveryLocation) {
      errors.deliveryLocation = 'Выберите место получения'
    }
    
    // Проверка способа получения в Москве
    if (deliveryLocation === 'moscow-mkad' && !moscowDeliveryMethod) {
      errors.moscowDeliveryMethod = 'Выберите способ получения'
    }
    
    // Проверка пункта выдачи
    if (moscowDeliveryMethod === 'pickup-point' && !selectedPickupPoint) {
      errors.selectedPickupPoint = 'Выберите пункт выдачи'
    }
    
    // Проверка адреса доставки для курьерской доставки
    if ((moscowDeliveryMethod === 'courier' || moscowDeliveryMethod === 'express') && !deliveryAddress.street.trim()) {
      errors.deliveryAddressStreet = 'Укажите адрес доставки'
    }
    
    // Проверка согласия с условиями
    if (!formData.agreedToTerms) {
      errors.agreedToTerms = 'Необходимо согласие с условиями'
    }
    
    console.log('validateForm вернула ошибки:', errors)
    return errors
  }, [formData, deliveryMethod, deliveryLocation, moscowDeliveryMethod, deliveryAddress, selectedEnvelope, selectedPackaging, selectedPickupPoint])

  // Валидация отдельного поля в реальном времени
  const validateSingleField = useCallback((fieldName: string, value: any) => {
    let error = ''
    
    switch (fieldName) {
      case 'firstName':
        if (!value.trim()) error = 'Заполните обязательное поле'
        break
      case 'lastName':
        if (!value.trim()) error = 'Заполните обязательное поле'
        break
      case 'phone':
        if (!value.trim() || value.trim() === '+7') {
          error = 'Заполните обязательное поле'
        } else if (value.replace(/\D/g, '').length !== 11) {
          error = 'Номер должен содержать 10 цифр'
        }
        break
      case 'email':
        if (!value.trim()) {
          error = 'Заполните обязательное поле'
        } else if (!/^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Введите корректный email адрес'
        }
        break
      case 'deliveryLocation':
        if (!value) error = 'Выберите место получения'
        break
      case 'agreedToTerms':
        if (!value) error = 'Необходимо согласие с условиями'
        break
    }
    
    return error
  }, [])

  // Функция обработки изменений полей
  const handleInputChange = useCallback((field: string, value: any) => {
    // Специальная обработка для телефона - автоформатирование перед установкой состояния
    let finalValue = value
    if (field === 'phone') {
      finalValue = formatPhoneNumber(value)
    }
    
    setFormData(prev => ({ ...prev, [field]: finalValue }))
    
    // Валидация в реальном времени при изменении поля
    if (submitAttempted) {
      const fieldError = validateSingleField(field, finalValue)
      
      setFormErrors(prev => {
        const newErrors = { ...prev }
        
        // Для телефона и email: показываем только ошибку "Заполните обязательное поле"
        // Ошибки формата (длина номера, корректность email) показываем только если поле заполнено
        if (fieldError) {
          // Если это телефон или email, и пользователь начал вводить - не показываем ошибки формата
          if (field === 'phone' && finalValue.trim() && finalValue.trim() !== '+7') {
            // Не показываем ошибку "Номер должен содержать 10 цифр" во время ввода
            if (fieldError === 'Номер должен содержать 10 цифр') {
              delete newErrors[field]
            } else {
              newErrors[field] = fieldError
            }
          } else if (field === 'email' && finalValue.trim()) {
            // Не показываем ошибку "Введите корректный email адрес" во время ввода
            if (fieldError === 'Введите корректный email адрес') {
              delete newErrors[field]
            } else {
              newErrors[field] = fieldError
            }
          } else {
            newErrors[field] = fieldError
          }
        } else {
          delete newErrors[field]
        }
        return newErrors
      })
    } else {
      // Очищаем ошибку для этого поля при изменении до первой попытки submit
      if (formErrors[field]) {
        setFormErrors(prev => {
          const newErrors = { ...prev }
          delete newErrors[field]
          return newErrors
        })
      }
    }
  }, [submitAttempted, formErrors, validateSingleField])

  // Функция обработки отправки формы
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    console.log('=== SUBMIT НАЧАТ ===')
    console.log('handleSubmit вызван')
    console.log('Текущие данные формы:', formData)
    setSubmitAttempted(true)
    
    const errors = validateForm()
    console.log('Найденные ошибки:', errors)
    console.log('Количество ошибок:', Object.keys(errors).length)
    setFormErrors(errors)
    
    // Небольшая задержка для применения стилей
    setTimeout(() => {
      console.log('Проверяем применение ошибок после задержки')
      Object.keys(errors).forEach(fieldName => {
        const field = document.querySelector(`[data-field="${fieldName}"]`)
        if (field) {
          console.log(`Поле ${fieldName}:`, {
            hasAriaInvalid: field.getAttribute('aria-invalid'),
            classList: field.className,
            computedBorder: window.getComputedStyle(field).borderColor
          })
        }
      })
    }, 100)
    
    if (Object.keys(errors).length > 0) {
      // Есть ошибки - определяем приоритет прокрутки
      // НО не делаем автоскролл если только что изменилось количество товаров
      if (isQuantityChangingRef.current) {
        console.log('Автоскролл заблокирован: только что изменилось количество товаров')
        console.log('=== SUBMIT ЗАВЕРШЕН С ОШИБКАМИ (без автоскролла) ===')
        return
      }
      
      // Находим самую верхнюю ошибку в порядке следования блоков в форме
      const fieldPriority = [
        'selectedEnvelope',        // Блок 2: Дизайн конверта
        'selectedPackaging',       // Блок 2: Дизайн упаковки
        'firstName',               // Блок 3: Имя
        'lastName',                // Блок 3: Фамилия  
        'phone',                   // Блок 3: Телефон
        'email',                   // Блок 3: Email
        'deliveryLocation',        // Блок 4: Место получения
        'moscowDeliveryMethod',    // Блок 5: Способ получения в Москве
        'selectedPickupPoint',     // Блок 5.1: Пункт выдачи
        'deliveryAddressStreet',   // Блок 5.2: Адрес доставки
        'agreedToTerms'            // Блок 6: Согласие с усл��виями
      ]
      
      // Находим первое поле с ошибкой согласно приоритету
      let firstErrorField: string | null = null
      for (const field of fieldPriority) {
        if (errors[field]) {
          firstErrorField = field
          break
        }
      }
      
      // Если не нашли по приоритету, берем первое из объекта ошибок
      if (!firstErrorField) {
        firstErrorField = Object.keys(errors)[0]
      }
      
      if (firstErrorField) {
        const fieldElement = document.querySelector(`[data-field="${firstErrorField}"]`) || 
                            document.querySelector(`input[data-field="${firstErrorField}"]`) ||
                            document.querySelector(`#${firstErrorField}`)
        if (fieldElement) {
          // Для конверта, упаковки, места доставки, способа получения и пунктов выдачи - прокручиваем к началу блока
          if (firstErrorField === 'selectedEnvelope' || 
              firstErrorField === 'selectedPackaging' || 
              firstErrorField === 'deliveryLocation' || 
              firstErrorField === 'moscowDeliveryMethod' ||
              firstErrorField === 'selectedPickupPoint') {
            fieldElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
            // Добавляем небольшой отступ сверху для лучшей видимости заголовка
            setTimeout(() => {
              window.scrollBy({ top: -80, behavior: 'smooth' })
            }, 300)
          } else {
            // Для остальных полей - прокручиваем к центру
            fieldElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }
      }
      console.log('=== SUBMIT ЗАВЕРШЕН С ОШИБКАМИ ===')
      return
    }
    
    // Форма валидна - продолжаем с оплатой
    console.log('Форма прошла валидацию, отправляем данные:', formData)
    console.log('=== SUBMIT УСПЕШЕН ===')
    
    // Очищаем localStorage после успешной отправки
    try {
      localStorage.removeItem('checkoutFormData')
      console.log('localStorage очищен после успешной отправки')
    } catch (error) {
      console.error('Ошибка при очистке localStorage:', error)
    }
    
    // Здесь будет логика отправки на сервер
  }, [formData, validateForm])

  useEffect(() => {
    // Reset fallback values when items are added to the cart
    if (items.length > 0) {
      setFallbackQuantity(1)
      setFallbackNights(1)
    }
  }, [items.length])

  // Сброс выбора конверта/упаковки при смене метода доставки
  useEffect(() => {
    // Если выбран электронный, сбрасываем конверт и упаковку
    if (deliveryMethod === 'electronic') {
      if (selectedEnvelope) setSelectedEnvelope('')
      if (selectedPackaging) setSelectedPackaging('')
    } else {
      // Если переключаемся с электронного на другой метод, сбрасываем флаг выбора дизайна
      if (electronicDesignSelected) setElectronicDesignSelected(false)
    }
    // Если выбран конверт, сбрасываем упаковку
    if (deliveryMethod === 'envelope' && selectedPackaging) {
      setSelectedPackaging('')
    }
    // Если выбрана упаковка, сбрасываем конверт
    if (deliveryMethod === 'gift-package' && selectedEnvelope) {
      setSelectedEnvelope('')
    }
  }, [deliveryMethod, selectedEnvelope, selectedPackaging, electronicDesignSelected])

  // Сброс выбора места доставки только при переключении на электронный сертификат
  useEffect(() => {
    if (deliveryMethod === 'electronic') {
      if (deliveryLocation) {
        setDeliveryLocation('')
        // Очищаем ошибку валидации для deliveryLocation
        setFormErrors(prev => {
          const newErrors = { ...prev }
          delete newErrors.deliveryLocation
          return newErrors
        })
      }
    }
  }, [deliveryMethod, deliveryLocation])

  // Привлечение внимания к блоку 2 после выбора способа доставки
  useEffect(() => {
    // ВАЖНО: Проверяем, действительно ли изменился deliveryMethod, 
    // чтобы не делать автоскролл при изменении количества товаров
    const deliveryMethodChanged = prevDeliveryMethodRef.current !== deliveryMethod
    
    // Обновляем ref для следующего сравнения
    prevDeliveryMethodRef.current = deliveryMethod
    
    // Если deliveryMethod не изменился, выходим из эффекта
    // Это предотвращает автоскролл при изменении количества товаров или других действиях
    if (!deliveryMethodChanged) {
      return
    }
    
    let scrollTimeout: NodeJS.Timeout | null = null
    let offsetTimeout: NodeJS.Timeout | null = null
    let highlightTimeout: NodeJS.Timeout | null = null
    
    // Если выбран конверт или подарочная упаковка и еще ничего не выбрано, привлекаем внимание к блоку 2
    // Или если выбран электронный сертификат и дизайн ещё не выбирался пользователем, привлекаем внимание
    if ((deliveryMethod === 'envelope' && !selectedEnvelope) || 
        (deliveryMethod === 'gift-package' && !selectedPackaging) ||
        (deliveryMethod === 'electronic' && !electronicDesignSelected)) {
      // Активируем подсветку
      setShouldHighlightBlock2(true)
      
      // Прокручиваем к блоку 2 с небольшой задержкой
      scrollTimeout = setTimeout(() => {
        const block2Element = document.querySelector('[data-block="block-2"]')
        if (block2Element) {
          // Для конвертов используем block: 'start' так как у них много вариантов
          // Для упаковок и электронных - block: 'center' так как вариантов меньше
          if (deliveryMethod === 'envelope') {
            block2Element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            })
            // Добавляем отступ сверху для лучшей видимости заголовка
            offsetTimeout = setTimeout(() => {
              window.scrollBy({ top: -220, behavior: 'smooth' })
            }, 300)
          } else {
            // Для упаковок и электронных сертификатов
            block2Element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            })
          }
        }
      }, 300)
      
      // Убираем подсветку через 6 секунд (3 цикла анимации по 2 секунды)
      highlightTimeout = setTimeout(() => {
        setShouldHighlightBlock2(false)
      }, 6000)
    } else {
      // Если уже сделан выбор, убираем подсветку
      setShouldHighlightBlock2(false)
    }
    
    // Очищаем все таймауты при размонтировании или изменении зависимостей
    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      if (offsetTimeout) clearTimeout(offsetTimeout)
      if (highlightTimeout) clearTimeout(highlightTimeout)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deliveryMethod, selectedEnvelope, selectedPackaging, electronicDesignSelected])

  // Эффект для каунтдауна удаления товаров
  useEffect(() => {
    const intervals: {[key: string]: NodeJS.Timeout} = {}
    
    Object.keys(deletingItems).forEach(itemKey => {
      const deletingItem = deletingItems[itemKey]
      if (deletingItem.countdown > 0) {
        intervals[itemKey] = setInterval(() => {
          setDeletingItems(prev => {
            const newState = { ...prev }
            if (newState[itemKey]) {
              newState[itemKey].countdown -= 1
              if (newState[itemKey].countdown <= 0) {
                // Время истекло - окончательно удаляем товар
                const item = newState[itemKey].item
                handleQuantityChange(item.id, 0, item.nights)
                delete newState[itemKey]
              }
            }
            return newState
          })
        }, 1000)
      }
    })

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval))
    }
  }, [deletingItems, handleQuantityChange])

  // Функция восстановления товара
  const restoreItem = useCallback((itemKey: string) => {
    setDeletingItems(prev => {
      const newState = { ...prev }
      delete newState[itemKey]
      return newState
    })
  }, [])

  // Проверка на пустую корзину после удаления всех товаров
  useEffect(() => {
    const activeItems = items.filter(item => !deletingItems[getItemKey(item.id, item.nights)])
    if (items.length > 0 && activeItems.length === 0 && Object.keys(deletingItems).length === 0) {
      // Если все товары удалены и нет товаров в процессе удаления, закрываем модал
      // Используем setTimeout чтобы избежать обновления состояния родителя во время рендера
      setTimeout(() => {
        if (onClose) {
          if (isOpen !== undefined) {
            onClose(false as any)
          } else {
            onClose()
          }
        }
      }, 0)
    }
  }, [items, deletingItems, onClose, isOpen])

  // Очистка таймаута изменения количества при размонтировании
  useEffect(() => {
    return () => {
      if (quantityChangeTimeoutRef.current) {
        clearTimeout(quantityChangeTimeoutRef.current)
      }
    }
  }, [])

  // Загрузка данных из localStorage при монтировании компонента
  useEffect(() => {
    try {
      const savedData = localStorage.getItem('checkoutFormData')
      if (savedData) {
        const parsed = JSON.parse(savedData)
        if (parsed.formData) setFormData(parsed.formData)
        if (parsed.deliveryMethod) setDeliveryMethod(parsed.deliveryMethod)
        if (parsed.deliveryLocation) setDeliveryLocation(parsed.deliveryLocation)
        if (parsed.moscowDeliveryMethod) setMoscowDeliveryMethod(parsed.moscowDeliveryMethod)
        if (parsed.selectedEnvelope) setSelectedEnvelope(parsed.selectedEnvelope)
        if (parsed.selectedPackaging) setSelectedPackaging(parsed.selectedPackaging)
        if (parsed.selectedPickupPoint) setSelectedPickupPoint(parsed.selectedPickupPoint)
        if (parsed.deliveryAddress) setDeliveryAddress(parsed.deliveryAddress)
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных из localStorage:', error)
    }
  }, [])

  // Сохранение данных в localStorage при изменении
  useEffect(() => {
    try {
      const dataToSave = {
        formData,
        deliveryMethod,
        deliveryLocation,
        moscowDeliveryMethod,
        selectedEnvelope,
        selectedPackaging,
        selectedPickupPoint,
        deliveryAddress
      }
      localStorage.setItem('checkoutFormData', JSON.stringify(dataToSave))
    } catch (error) {
      console.error('Ошибка при сохранении данных в localStorage:', error)
    }
  }, [formData, deliveryMethod, deliveryLocation, moscowDeliveryMethod, selectedEnvelope, selectedPackaging, selectedPickupPoint, deliveryAddress])

  // Отслеживание валидных полей для зеленых галочек
  useEffect(() => {
    const newValidFields: {[key: string]: boolean} = {}
    
    // Проверка имени
    if (formData.firstName.trim().length >= 2) {
      newValidFields.firstName = true
    }
    
    // Проверка фамилии
    if (formData.lastName.trim().length >= 2) {
      newValidFields.lastName = true
    }
    
    // Проверка телефона
    if (formData.phone.replace(/\D/g, '').length === 11) {
      newValidFields.phone = true
    }
    
    // Проверка email
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newValidFields.email = true
    }
    
    // Проверка выбора конверта
    if (deliveryMethod === 'envelope' && selectedEnvelope) {
      newValidFields.selectedEnvelope = true
    }
    
    // Проверка выбора упаковки
    if (deliveryMethod === 'gift-package' && selectedPackaging) {
      newValidFields.selectedPackaging = true
    }
    
    // Проверка места доставки
    if ((deliveryMethod === 'envelope' || deliveryMethod === 'gift-package') && deliveryLocation) {
      newValidFields.deliveryLocation = true
    }
    
    // Проверка способа получения в Москве
    if (deliveryLocation === 'moscow-mkad' && moscowDeliveryMethod) {
      newValidFields.moscowDeliveryMethod = true
    }
    
    // Проверка пункта выдачи
    if (moscowDeliveryMethod === 'pickup-point' && selectedPickupPoint) {
      newValidFields.selectedPickupPoint = true
    }
    
    // Проверка адреса доставки
    if ((moscowDeliveryMethod === 'courier' || moscowDeliveryMethod === 'express') && deliveryAddress.street.trim()) {
      newValidFields.deliveryAddress = true
    }
    
    // Проверка согласия с условиями
    if (formData.agreedToTerms) {
      newValidFields.agreedToTerms = true
    }
    
    setValidFields(newValidFields)
  }, [formData, deliveryMethod, selectedEnvelope, selectedPackaging, deliveryLocation, moscowDeliveryMethod, selectedPickupPoint, deliveryAddress])
  
  // Обработчик закрытия для контролируемого режима
  const handleClose = useCallback(() => {
    if (onClose) {
      // Если передан isOpen, onClose работает как onOpenChange и принимает boolean
      if (isOpen !== undefined) {
        onClose(false as any)
      } else {
        onClose()
      }
    }
  }, [onClose, isOpen])
  
  // Контролируемый режим - когда передан isOpen
  const dialogProps = isOpen !== undefined 
    ? { open: isOpen, onOpenChange: handleClose }
    : {}

  return (
    <Dialog {...dialogProps}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="!max-w-none !w-screen !h-screen !p-0 !m-0 !fixed !inset-0 !bg-white !overflow-y-auto !translate-x-0 !translate-y-0 !transform-none !top-0 !left-0 !border-0 !rounded-none !shadow-none">
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="relative z-10 w-full h-full bg-white">
          <DialogHeader className="sr-only">
            <DialogTitle>Оформление заказа</DialogTitle>
            <DialogDescription>
              Выберите способ получения сертификата и завершите оформление заказа
            </DialogDescription>
          </DialogHeader>
          
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
              <div className="flex-1">
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Оформление заказа</h1>
                {/* Прогресс-бар */}
                <TooltipProvider>
                  <div className="flex items-center gap-3">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden cursor-help">
                          <div 
                            className={`h-full transition-all duration-500 ease-out ${
                              formProgress.percentage === 100 
                                ? 'bg-gradient-to-r from-emerald-600 to-green-500' 
                                : 'bg-emerald-600'
                            }`}
                            style={{ width: `${formProgress.percentage}%` }}
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="max-w-xs">
                        <p className="font-medium mb-1">Прогресс заполнения формы</p>
                        <p className="text-xs text-gray-600">
                          {formProgress.percentage === 100 
                            ? '✅ Все обязательные поля заполнены!' 
                            : `Заполнено ${formProgress.completed} из ${formProgress.total} шагов`}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                    <span className={`text-xs sm:text-sm whitespace-nowrap transition-colors ${
                      formProgress.percentage === 100 ? 'text-emerald-600 font-medium' : 'text-gray-600'
                    }`}>
                      {formProgress.percentage === 100 ? '✓ ' : ''}{formProgress.completed} из {formProgress.total}
                    </span>
                  </div>
                </TooltipProvider>
              </div>
              <DialogClose asChild>
                <Button variant="ghost" size="sm" className="p-2 ml-4">
                  <X className="w-5 h-5" />
                </Button>
              </DialogClose>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <div className="space-y-6 overflow-visible">
              {/* Уведомления об удалении товаров */}
              {Object.entries(deletingItems).map(([itemKey, {item, countdown}]) => (
                <div key={itemKey} className="bg-red-50 border-l-4 border-red-400 p-4 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-3 h-3 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <span className="text-red-800 font-medium text-sm">
                        Вы удалили "{item.title}"
                      </span>
                      <div className="text-sm text-red-600 mt-1">
                        Товар будет удален через {countdown} сек.
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => restoreItem(itemKey)}
                    className="text-red-700 border-red-300 hover:bg-red-100 text-sm px-3 py-1 h-auto"
                  >
                    Вернуть
                  </Button>
                </div>
              ))}

              {/* Новый блок корзины - самый первый и высокий */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                {/* Товары из корзины */}
                {orderSummary && orderSummary.items.length > 0 ? (
                  <div className="space-y-4 sm:space-y-6">
                    {orderSummary.items.map((item, index) => (
                      <CartItemCard
                        key={getItemKey(item.id, item.nights)}
                        item={item}
                        onQuantityChange={handleQuantityChange}
                        onDelete={() => {
                          setDeletingItems(prev => ({
                            ...prev,
                            [getItemKey(item.id, item.nights)]: {item, countdown: 5}
                          }))
                        }}
                        formatPrice={formatPrice}
                        getItemKey={getItemKey}
                        isDeleting={!!deletingItems[getItemKey(item.id, item.nights)]}
                      />
                    ))}
                  </div>
                ) : (
                  /* Fallback для пустой корзины */
                  <CartItemCard
                    item={{
                      id: 'fallback',
                      title: certificateInfo.name,
                      images: certificateInfo.type === 'pet-friendly' ? [
                        petFriendlyImage,
                        testGlampingImages[0],
                        testGlampingImages[1],
                        testGlampingImages[2]
                      ] : [
                        <div key="gift-icon" className="w-full h-full bg-emerald-200 flex items-center justify-center">
                          <span className="text-lg">🎁</span>
                        </div>,
                        testGlampingImages[0],
                        testGlampingImages[1]
                      ],
                      nights: fallbackNights,
                      quantity: fallbackQuantity,
                      price: certificateInfo.price,
                      description: certificateInfo.type === 'pet-friendly' 
                        ? 'Подарочный сертификат на отдых в любом из 300+ объектов с размещением животных'
                        : certificateInfo.description
                    }}
                    onQuantityChange={(_, newQuantity) => setFallbackQuantity(newQuantity)}
                    onDelete={() => {
                      // В fallback режиме просто сбрасываем количество
                      setFallbackQuantity(1)
                      setFallbackNights(1)
                    }}
                    formatPrice={formatPrice}
                    getItemKey={getItemKey}
                  />
                )}
                
                {/* Общая сумма */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="space-y-2">
                    {appliedPromo && promoDiscount > 0 && (
                      <>
                        <div className="flex justify-between items-center text-sm text-gray-600">
                          <span>Сумма заказа:</span>
                          <span>{formatPrice(basePrice)} ₽</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-emerald-600">
                          <span>Скидка по промокоду {appliedPromo.code}:</span>
                          <span>-{formatPrice(promoDiscount)} ₽</span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-gray-900">Итого:</span>
                            <span className="text-lg font-semibold text-emerald-700">{formatPrice(finalPrice)} ₽</span>
                          </div>
                        </div>
                      </>
                    )}
                    {(!appliedPromo || promoDiscount === 0) && (
                      <div className="flex justify-end">
                        <div className="text-lg font-semibold text-gray-900">
                          Сумма: {formatPrice(finalPrice)} ₽
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              
              
              {/* Delivery method selection */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm sm:text-base">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 text-[15px] sm:text-[16px]">Выберите способ получения</h3>
                </div>

                <div className="space-y-4">
                  {deliveryOptionsData.map((option) => (
                    <label key={option.id} className={`block cursor-pointer p-4 rounded-lg border-2 transition-all ${
                      deliveryMethod === option.id 
                        ? 'border-emerald-500 bg-emerald-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="delivery"
                          value={option.id}
                          checked={deliveryMethod === option.id}
                          onChange={(e) => {
                            setDeliveryMethod(e.target.value)
                            // Сбрасываем место получения при выборе электронного сертификата
                            if (e.target.value === 'electronic') {
                              setDeliveryLocation('')
                            }
                            // Очищаем ошибки валидации для конверта/упаковки при смене способа доставки
                            if (submitAttempted) {
                              setFormErrors(prev => {
                                const newErrors = { ...prev }
                                delete newErrors.selectedEnvelope
                                delete newErrors.selectedPackaging
                                // Также очищаем ошибку места доставки если переключились на электронный
                                if (e.target.value === 'electronic') {
                                  delete newErrors.deliveryLocation
                                }
                                return newErrors
                              })
                            }
                          }}
                          className="w-4 h-4 text-emerald-600 mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">{option.icon}</span>
                            <span className="font-medium text-gray-900">
                              {option.name} {option.price > 0 && `(+${option.price} ₽)`}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{option.description}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Packaging selection */}
              {deliveryMethod === 'gift-package' && (
                <div 
                  className={`bg-white border rounded-xl p-6 transition-all ${
                    formErrors.selectedPackaging 
                      ? 'border-2 border-red-500 bg-red-50 shadow-lg ring-2 ring-red-200' 
                      : 'border-gray-200'
                  } ${shouldHighlightBlock2 && !selectedPackaging ? 'attention-pulse' : ''}`}
                  data-field="selectedPackaging"
                  data-block="block-2"
                  aria-invalid={!!formErrors.selectedPackaging}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-semibold transition-all ${
                      shouldHighlightBlock2 && !selectedPackaging 
                        ? 'bg-emerald-600 text-white animate-bounce' 
                        : 'bg-emerald-600 text-white'
                    }`}>
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900">Выберите упаковку</h3>
                    {selectedPackaging && (
                      <span className="ml-auto px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                        Выбрано
                      </span>
                    )}
                    {shouldHighlightBlock2 && !selectedPackaging && (
                      <span className="ml-auto px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-sm font-medium flex items-center gap-2 animate-pulse">
                        <span className="text-base">👇</span>
                        <span>Выберите дизайн</span>
                      </span>
                    )}
                  </div>
                  
                  {/* Error message - moved to top */}
                  {formErrors.selectedPackaging && (
                    <div className="error-text mb-4">
                      *{formErrors.selectedPackaging}
                    </div>
                  )}
                  
                  <p className="text-sm text-gray-600 mb-6">Размер коробки: 21,5 x 17,5 x 4 см</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {packagingOptions.map((pkg) => (
                      <label key={pkg.id} className="cursor-pointer block">
                        <input
                          type="radio"
                          name="packaging"
                          value={pkg.id}
                          checked={selectedPackaging === pkg.id}
                          onChange={() => {
                            setSelectedPackaging(pkg.id)
                            setShouldHighlightBlock2(false)
                            if (submitAttempted) {
                              setFormErrors(prev => {
                                const newErrors = { ...prev }
                                delete newErrors.selectedPackaging
                                return newErrors
                              })
                            }
                          }}
                          className="sr-only"
                        />
                        <div className={`relative w-full aspect-square rounded-xl border-3 transition-all transform hover:scale-105 overflow-hidden ${
                          selectedPackaging === pkg.id 
                            ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-200' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          {/* Изображение упаковки */}
                          <div className="w-full h-full p-2 bg-gray-50">
                            <ImageWithFallback
                              src={pkg.image}
                              alt={pkg.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          
                          {/* Selection indicator */}
                          {selectedPackaging === pkg.id && (
                            <div className="absolute top-2 right-2 flex items-center gap-1 bg-emerald-600 rounded-full px-2 py-1">
                              <span className="text-white text-xs font-medium">выбрано</span>
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-900 font-medium mt-2 text-center leading-tight">{pkg.name}</p>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Envelope selection */}
              {deliveryMethod === 'envelope' && (
                <div 
                  className={`bg-white border rounded-xl p-6 transition-all ${
                    formErrors.selectedEnvelope 
                      ? 'border-2 border-red-500 bg-red-50 shadow-lg ring-2 ring-red-200' 
                      : 'border-gray-200'
                  } ${shouldHighlightBlock2 && !selectedEnvelope ? 'attention-pulse' : ''}`}
                  data-field="selectedEnvelope"
                  data-block="block-2"
                  aria-invalid={!!formErrors.selectedEnvelope}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-semibold transition-all ${
                      shouldHighlightBlock2 && !selectedEnvelope 
                        ? 'bg-emerald-600 text-white animate-bounce' 
                        : 'bg-emerald-600 text-white'
                    }`}>
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900">Выберите конверт</h3>
                    {selectedEnvelope && (
                      <span className="ml-auto px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                        Выбрано
                      </span>
                    )}
                    {shouldHighlightBlock2 && !selectedEnvelope && (
                      <span className="ml-auto px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-sm font-medium flex items-center gap-2 animate-pulse">
                        <span className="text-base">👇</span>
                        <span>Выберите дизайн</span>
                      </span>
                    )}
                  </div>
                  
                  {/* Error message - moved to top */}
                  {formErrors.selectedEnvelope && (
                    <div className="error-text mb-4">
                      *{formErrors.selectedEnvelope}
                    </div>
                  )}
                  
                  <p className="text-sm text-gray-600 mb-6">Размер конверта: 16 x 12 см</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {envelopeOptions.map((envelope) => (
                      <label key={envelope.id} className="cursor-pointer block">
                        <input
                          type="radio"
                          name="envelope"
                          value={envelope.id}
                          checked={selectedEnvelope === envelope.id}
                          onChange={() => {
                            setSelectedEnvelope(envelope.id)
                            setShouldHighlightBlock2(false)
                            if (submitAttempted) {
                              setFormErrors(prev => {
                                const newErrors = { ...prev }
                                delete newErrors.selectedEnvelope
                                return newErrors
                              })
                            }
                          }}
                          className="sr-only"
                        />
                        <div className={`relative w-full aspect-square rounded-xl border-3 transition-all transform hover:scale-105 overflow-hidden ${
                          selectedEnvelope === envelope.id 
                            ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-200' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          {/* Изображение конверта */}
                          <div className="w-full h-full p-2 bg-gray-50">
                            <ImageWithFallback
                              src={envelope.image}
                              alt={envelope.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          
                          {/* Selection indicator */}
                          {selectedEnvelope === envelope.id && (
                            <div className="absolute top-2 right-2 flex items-center gap-1 bg-emerald-600 rounded-full px-2 py-1">
                              <span className="text-white text-xs font-medium">выбрано</span>
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-900 font-medium mt-2 text-center">{envelope.name}</p>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Electronic certificate design selection */}
              {deliveryMethod === 'electronic' && (
                <div 
                  className={`bg-white border rounded-xl p-6 overflow-visible transition-all ${
                    shouldHighlightBlock2 && !electronicDesignSelected ? 'attention-pulse' : 'border-gray-200'
                  }`}
                  data-field="selectedCertificateDesign"
                  data-block="block-2"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-semibold transition-all ${
                      shouldHighlightBlock2 && !electronicDesignSelected
                        ? 'bg-emerald-600 text-white animate-bounce' 
                        : 'bg-emerald-600 text-white'
                    }`}>
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900">Электронный сертификат</h3>
                    {electronicDesignSelected && (
                      <span className="ml-auto px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                        Выбрано
                      </span>
                    )}
                    {shouldHighlightBlock2 && !electronicDesignSelected && (
                      <span className="ml-auto px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-sm font-medium flex items-center gap-2 animate-pulse">
                        <span className="text-base">👇</span>
                        <span>Выберите дизайн</span>
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6">Выберите дизайн вашего электронного сертификата:</p>

                  {/* Certificate design options */}
                  <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {certificateDesigns.map((design, index) => (
                      <label
                        key={design.id}
                        className={`group relative block border-2 rounded-xl cursor-pointer transition-all duration-300 shadow-sm ${
                          selectedCertificateDesign === design.id
                            ? 'border-emerald-500 bg-emerald-50 shadow-md hover:shadow-lg'
                            : 'border-gray-200 hover:border-emerald-300 bg-white hover:shadow-md'
                        }`}
                      >
                        {/* Full certificate image - только картинка увеличивается */}
                        <div className="relative aspect-[4/3] bg-gray-100">
                          <img
                            src={design.image}
                            alt={design.name}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Увеличенная версия при hover - позиционируется снизу */}
                          {hoveredCertificate === design.id && (
                            <div 
                              className="fixed inset-0 pointer-events-none z-[9999] flex items-end justify-center pb-8"
                              onMouseLeave={() => setHoveredCertificate(null)}
                            >
                              <img
                                src={design.image}
                                alt={design.name}
                                className="w-auto h-auto max-w-[40vw] max-h-[35vh] object-contain shadow-2xl rounded-lg transition-all duration-300"
                                style={{ 
                                  animation: 'slideUpFade 0.3s ease-out',
                                }}
                              />
                            </div>
                          )}

                          {/* Radio button overlay */}
                          <div className="absolute top-3 left-3">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              selectedCertificateDesign === design.id 
                                ? 'bg-emerald-600 border-emerald-600' 
                                : 'bg-white/90 border-gray-300'
                            }`}>
                              {selectedCertificateDesign === design.id && (
                                <CheckCircle className="w-3 h-3 text-white" />
                              )}
                            </div>
                          </div>

                          {/* Selected badge */}
                          {selectedCertificateDesign === design.id && (
                            <div className="absolute top-3 right-3 bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                              Выбрано
                            </div>
                          )}

                          {/* Invisible hover trigger - увеличиваем область наведения */}
                          <div 
                            className="absolute inset-0 z-10"
                            onMouseEnter={() => setHoveredCertificate(design.id)}
                            onMouseLeave={() => setHoveredCertificate(null)}
                          />
                        </div>
                        
                        {/* Design info */}
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-900 mb-1">{design.name}</h4>
                          <p className="text-sm text-gray-600 line-clamp-2">{design.description}</p>
                        </div>

                        {/* Hidden radio input */}
                        <input
                          type="radio"
                          name="certificateDesign"
                          value={design.id}
                          checked={selectedCertificateDesign === design.id}
                          onChange={(e) => {
                            setSelectedCertificateDesign(e.target.value)
                            setFormData(prev => ({ ...prev, certificateDesign: e.target.value }))
                            // Отмечаем что пользователь сделал выбор дизайна
                            setElectronicDesignSelected(true)
                            // Отключаем подсветку блока 2 после выбора дизайна
                            setShouldHighlightBlock2(false)
                          }}
                          className="sr-only"
                        />
                      </label>
                    ))}
                  </div>

                  {/* Upload custom design option */}
                  <div className="mt-6">
                    <div className={`border-2 rounded-xl cursor-pointer transition-all overflow-hidden shadow-sm hover:shadow-md ${
                      selectedCertificateDesign === 'custom'
                        ? 'border-emerald-500 bg-emerald-50 shadow-md'
                        : 'border-gray-200 hover:border-emerald-300 bg-white'
                    }`}>
                      <label className="block cursor-pointer">
                        <div className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              selectedCertificateDesign === 'custom' 
                                ? 'bg-emerald-600 border-emerald-600' 
                                : 'bg-white border-gray-300'
                            }`}>
                              <input
                                type="radio"
                                name="certificateDesign"
                                value="custom"
                                checked={selectedCertificateDesign === 'custom'}
                                onChange={(e) => {
                                  setSelectedCertificateDesign(e.target.value)
                                  setFormData(prev => ({ ...prev, certificateDesign: e.target.value }))
                                  // Отмечаем что пользователь сделал выбор дизайна
                                  setElectronicDesignSelected(true)
                                  // Отключаем подсветку блока 2 после выбора дизайна
                                  setShouldHighlightBlock2(false)
                                }}
                                className="sr-only"
                              />
                              {selectedCertificateDesign === 'custom' && (
                                <CheckCircle className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">Загрузить свой дизайн</h4>
                              <p className="text-sm text-gray-600">Используйте собственное изображение для сертификата</p>
                            </div>
                            {selectedCertificateDesign === 'custom' && (
                              <div className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                Выбрано
                              </div>
                            )}
                          </div>
                          
                          {selectedCertificateDesign === 'custom' && (
                            <div className="border-2 border-dashed border-emerald-300 rounded-lg p-6 text-center bg-emerald-25">
                              <div className="space-y-2">
                                <div className="w-10 h-10 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                                  <Package className="w-5 h-5 text-emerald-600" />
                                </div>
                                <p className="text-sm text-gray-700 font-medium">Загрузите файл изображения</p>
                                <p className="text-xs text-gray-500">JPG, PNG • Максимальный размер: 5MB</p>
                                <Button variant="outline" size="sm" className="mt-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                                  Выбрать файл
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>


                </div>
              )}



              {/* Certificate validity */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-4">Когда начнет действовать сертификат?</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="certificateStart"
                      value="immediate"
                      checked={formData.certificateStart === 'immediate'}
                      onChange={(e) => handleInputChange('certificateStart', e.target.value)}
                      className="w-4 h-4 text-emerald-600"
                    />
                    <span className="text-sm text-gray-700">Старт действия сертификата с даты покупки</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="certificateStart"
                      value="delayed"
                      checked={formData.certificateStart === 'delayed'}
                      onChange={(e) => handleInputChange('certificateStart', e.target.value)}
                      className="w-4 h-4 text-emerald-600"
                    />
                    <span className="text-sm text-gray-700">Перенести стартовый срок</span>
                  </label>
                </div>
                
                {/* Calendar appears when delayed is selected */}
                {formData.certificateStart === 'delayed' && (
                  <div className="mt-6">
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border-2 border-emerald-200 p-6 max-w-md mx-auto shadow-lg">
                      <div className="mb-4 text-center">
                        <h4 className="text-lg font-semibold text-emerald-800 mb-2">Выберите дату начала действия</h4>
                        <p className="text-sm text-emerald-600">Сертификат будет действителен в течение 2 лет</p>
                      </div>
                      
                      <div className="flex justify-center">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          className="rounded-xl bg-white border border-emerald-100 shadow-sm"
                        />
                      </div>
                    </div>
                    
                    {selectedDate && (
                      <div className="mt-6 space-y-3">
                        <div className="bg-white rounded-xl border border-emerald-200 p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                            <span className="font-semibold text-emerald-800">Информация о сертификате</span>
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                              <span className="text-gray-600">Начало действия:</span>
                              <span className="font-semibold text-gray-900">
                                {selectedDate.toLocaleDateString('ru-RU', { 
                                  day: 'numeric', 
                                  month: 'long', 
                                  year: 'numeric' 
                                })}
                              </span>
                            </div>
                            
                            <div className="flex justify-between items-center py-2">
                              <span className="text-gray-600">Окончание действия:</span>
                              <span className="font-semibold text-emerald-700">
                                {(() => {
                                  const endDate = new Date(selectedDate)
                                  endDate.setFullYear(endDate.getFullYear() + 2)
                                  return endDate.toLocaleDateString('ru-RU', { 
                                    day: 'numeric', 
                                    month: 'long', 
                                    year: 'numeric' 
                                  })
                                })()}
                              </span>
                            </div>
                          </div>
                          
                          <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">⏰</span>
                              <span className="text-sm text-emerald-700 font-medium">
                                Срок действия: 2 года (24 месяца)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Wish message */}
              <div className="space-y-3">
                <label className="block font-medium text-gray-900">Хотите написать пожелание?</label>
                <p className="text-sm text-gray-600">Мы добавим его на сертификат</p>
                <div className="relative">
                  <Textarea
                    placeholder="Рекомендуем добавить несколько добрых слов с подписью"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="min-h-[80px] bg-gray-50"
                  />
                  {formData.message && (
                    <button
                      onClick={() => handleInputChange('message', '')}
                      className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Вариант 3: Компактная сетка с тултипами */}
                <div className="space-y-3">
                  <p className="text-xs font-medium text-gray-800 flex items-center gap-1">
                    <span>💡</span>
                    <span className="text-[13px]">Быстрые варианты пожеланий:</span>
                  </p>
                  
                  <TooltipProvider>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                      {QUICK_WISHES.map((wish, index) => (
                        <Tooltip key={index}>
                          <TooltipTrigger asChild>
                            <button
                              type="button"
                              onClick={() => addWishText(wish.full)}
                              className={`
                                flex flex-col items-center gap-1 p-3 rounded-lg border transition-all duration-200
                                ${wish.color}
                                transform hover:scale-105 active:scale-95
                              `}
                            >
                              <span className="text-lg">{wish.icon}</span>
                              <span className="text-xs font-medium text-center leading-tight">
                                {wish.short}
                              </span>
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="max-w-48">
                              <p className="font-medium">{wish.short}</p>
                              <p className="text-sm text-gray-600 mt-1">"{wish.full}"</p>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                  
                  <p className="text-xs text-gray-500">
                    💡 Наведите курсор на кнопку, чтобы увидеть полный текст. Нажмите, чтобы добавить в поле.
                  </p>
                </div>
              </div>

              {/* Order comment */}
              <div className="space-y-3">
                <label className="block font-medium text-gray-900">Комментарий к заказу</label>
                <Textarea
                  placeholder="Напишите здесь, если у вас есть особые пожелания"
                  value={formData.comment}
                  onChange={(e) => handleInputChange('comment', e.target.value)}
                  className="min-h-[60px] bg-gray-50"
                />
              </div>

              {/* Customer info */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm sm:text-base">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 text-[15px] sm:text-[16px]">Данные покупателя</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Имя <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        data-field="firstName"
                        id="firstName"
                        aria-invalid={!!formErrors.firstName}
                        aria-describedby={formErrors.firstName ? "firstName-error" : undefined}
                        className={formErrors.firstName ? 'error-field error-animate pr-10' : 'bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-100 pr-10'}
                      />
                      {validFields.firstName && !formErrors.firstName && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    {formErrors.firstName && (
                      <p id="firstName-error" className="error-text text-sm text-[14px]" role="alert">*{formErrors.firstName}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Фамилия <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        data-field="lastName"
                        id="lastName"
                        aria-invalid={!!formErrors.lastName}
                        aria-describedby={formErrors.lastName ? "lastName-error" : undefined}
                        className={formErrors.lastName ? 'error-field error-animate pr-10' : 'bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-100 pr-10'}
                      />
                      {validFields.lastName && !formErrors.lastName && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    {formErrors.lastName && (
                      <p id="lastName-error" className="error-text text-sm text-[14px]" role="alert">*{formErrors.lastName}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Телефон <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+7 (000) 000-00-00"
                        data-field="phone"
                        id="phone"
                        aria-invalid={!!formErrors.phone}
                        aria-describedby={formErrors.phone ? "phone-error" : undefined}
                        className={formErrors.phone ? 'error-field error-animate pr-10' : 'bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-100 pr-10'}
                      />
                      {validFields.phone && !formErrors.phone && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    {formErrors.phone && (
                      <p id="phone-error" className="error-text text-sm text-[14px]" role="alert">*{formErrors.phone}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email (мы отправим на email сертификат и чек) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        data-field="email"
                        id="email"
                        aria-invalid={!!formErrors.email}
                        aria-describedby={formErrors.email ? "email-error" : undefined}
                        className={formErrors.email ? 'error-field error-animate pr-10' : 'bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-100 pr-10'}
                      />
                      {validFields.email && !formErrors.email && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    {formErrors.email && (
                      <p id="email-error" className="error-text text-sm text-[14px]" role="alert">*{formErrors.email}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Delivery location - показывается для всех способов доставки кроме электронного */}
              {deliveryMethod !== 'electronic' && (
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6" data-field="deliveryLocation">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm sm:text-base">
                      4
                    </div>
                    <h3 className="font-semibold text-gray-900 text-[15px] sm:text-[16px]">Выберите место получения</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border-2 transition-all hover:bg-gray-50" 
                      style={{
                        borderColor: deliveryLocation === 'moscow-mkad' ? '#059669' : '#e5e7eb',
                        backgroundColor: deliveryLocation === 'moscow-mkad' ? '#d1fae5' : 'transparent'
                      }}>
                      <input
                        type="radio"
                        name="deliveryLocation"
                        value="moscow-mkad"
                        checked={deliveryLocation === 'moscow-mkad'}
                        onChange={(e) => {
                          setDeliveryLocation(e.target.value)
                          handleInputChange('deliveryLocation', e.target.value)
                          // Очищаем способ получения в Москве при переключении
                          setMoscowDeliveryMethod('')
                          setDeliveryAddress({ street: '', apartment: '', additional: '' })
                          // Очищаем ошибки
                          if (formErrors.moscowDeliveryMethod || formErrors.deliveryAddress) {
                            setFormErrors(prev => {
                              const newErrors = { ...prev }
                              delete newErrors.moscowDeliveryMethod
                              delete newErrors.deliveryAddress
                              return newErrors
                            })
                          }
                        }}
                        className="w-4 h-4 text-emerald-600"
                      />
                      <span className="text-sm text-gray-700">Москва в пределах МКАД</span>
                    </label>
                    
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border-2 transition-all hover:bg-gray-50"
                      style={{
                        borderColor: deliveryLocation === 'moscow-outside-mkad' ? '#059669' : '#e5e7eb',
                        backgroundColor: deliveryLocation === 'moscow-outside-mkad' ? '#d1fae5' : 'transparent'
                      }}>
                      <input
                        type="radio"
                        name="deliveryLocation"
                        value="moscow-outside-mkad"
                        checked={deliveryLocation === 'moscow-outside-mkad'}
                        onChange={(e) => {
                          setDeliveryLocation(e.target.value)
                          handleInputChange('deliveryLocation', e.target.value)
                          setMoscowDeliveryMethod('')
                          setDeliveryAddress({ street: '', apartment: '', additional: '' })
                          // Очищаем ошибки
                          if (formErrors.moscowDeliveryMethod || formErrors.deliveryAddress) {
                            setFormErrors(prev => {
                              const newErrors = { ...prev }
                              delete newErrors.moscowDeliveryMethod
                              delete newErrors.deliveryAddress
                              return newErrors
                            })
                          }
                        }}
                        className="w-4 h-4 text-emerald-600"
                      />
                      <span className="text-sm text-gray-700">Москва за пределами МКАД</span>
                    </label>
                    
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border-2 transition-all hover:bg-gray-50"
                      style={{
                        borderColor: deliveryLocation === 'spb' ? '#059669' : '#e5e7eb',
                        backgroundColor: deliveryLocation === 'spb' ? '#d1fae5' : 'transparent'
                      }}>
                      <input
                        type="radio"
                        name="deliveryLocation"
                        value="spb"
                        checked={deliveryLocation === 'spb'}
                        onChange={(e) => {
                          setDeliveryLocation(e.target.value)
                          handleInputChange('deliveryLocation', e.target.value)
                          setMoscowDeliveryMethod('')
                          setDeliveryAddress({ street: '', apartment: '', additional: '' })
                          // Очищаем ошибки
                          if (formErrors.moscowDeliveryMethod || formErrors.deliveryAddress) {
                            setFormErrors(prev => {
                              const newErrors = { ...prev }
                              delete newErrors.moscowDeliveryMethod
                              delete newErrors.deliveryAddress
                              return newErrors
                            })
                          }
                        }}
                        className="w-4 h-4 text-emerald-600"
                      />
                      <span className="text-sm text-gray-700">Санкт-Петербург и ЛО</span>
                    </label>
                    
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border-2 transition-all hover:bg-gray-50"
                      style={{
                        borderColor: deliveryLocation === 'other' ? '#059669' : '#e5e7eb',
                        backgroundColor: deliveryLocation === 'other' ? '#d1fae5' : 'transparent'
                      }}>
                      <input
                        type="radio"
                        name="deliveryLocation"
                        value="other"
                        checked={deliveryLocation === 'other'}
                        onChange={(e) => {
                          setDeliveryLocation(e.target.value)
                          handleInputChange('deliveryLocation', e.target.value)
                          setMoscowDeliveryMethod('')
                          setDeliveryAddress({ street: '', apartment: '', additional: '' })
                          // Очищаем ошибки
                          if (formErrors.moscowDeliveryMethod || formErrors.deliveryAddress) {
                            setFormErrors(prev => {
                              const newErrors = { ...prev }
                              delete newErrors.moscowDeliveryMethod
                              delete newErrors.deliveryAddress
                              return newErrors
                            })
                          }
                        }}
                        className="w-4 h-4 text-emerald-600"
                      />
                      <span className="text-sm text-gray-700">Другой город или населенный пункт</span>
                    </label>
                  </div>
                  {formErrors.deliveryLocation && (
                    <p className="error-text text-sm text-[14px] mt-3" role="alert">*{formErrors.deliveryLocation}</p>
                  )}
                </div>
              )}

              {/* Moscow delivery method - показывается при выборе "Москва в пределах МКАД", "Москва за пределами МКАД", "Санкт-Петербург и ЛО" или "Другой город" */}
              {(deliveryLocation === 'moscow-mkad' || deliveryLocation === 'moscow-outside-mkad' || deliveryLocation === 'spb' || deliveryLocation === 'other') && (
                <div className={`bg-white border rounded-xl p-4 sm:p-6 transition-all ${
                  formErrors.moscowDeliveryMethod 
                    ? 'border-2 border-red-500 bg-red-50 shadow-lg ring-2 ring-red-200' 
                    : 'border-gray-200'
                }`}>
                  <h3 className="font-semibold text-gray-900 text-[15px] sm:text-[16px] mb-4 sm:mb-6">Способ получения</h3>
                  
                  <div className="space-y-3">
                    {(deliveryLocation === 'other' ? otherCityDeliveryOptions : deliveryLocation === 'spb' ? spbDeliveryOptions : deliveryLocation === 'moscow-outside-mkad' ? moscowOutsideMkadDeliveryOptions : moscowDeliveryOptions).map((option) => (
                      <label 
                        key={option.id}
                        className={`block cursor-pointer p-4 rounded-lg border-2 transition-all ${
                          moscowDeliveryMethod === option.id 
                            ? 'border-emerald-500 bg-emerald-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="radio"
                            name="moscowDelivery"
                            value={option.id}
                            checked={moscowDeliveryMethod === option.id}
                            onChange={(e) => {
                              setMoscowDeliveryMethod(e.target.value)
                              // Сбрасываем адрес при смене способа доставки
                              if (e.target.value !== 'courier' && e.target.value !== 'express') {
                                setDeliveryAddress({ street: '', apartment: '', additional: '' })
                              }
                              // Сбрасываем состояние выбора пункта выдачи
                              if (e.target.value === 'pickup-point') {
                                setPickupPointView('map')
                                setTempSelectedPoint('')
                              } else {
                                setSelectedPickupPoint('')
                              }
                              // Очищаем ошибку при выборе
                              if (formErrors.moscowDeliveryMethod) {
                                setFormErrors(prev => {
                                  const newErrors = { ...prev }
                                  delete newErrors.moscowDeliveryMethod
                                  return newErrors
                                })
                              }
                            }}
                            className="w-4 h-4 text-emerald-600 mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{option.icon}</span>
                              <span className="font-medium text-gray-900">
                                {option.name} {option.price > 0 && `(+${option.price} ₽)`}
                              </span>
                              <span className="text-[11px] font-normal text-gray-500 inline-flex items-center">
                                {" "}— {option.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {formErrors.moscowDeliveryMethod && (
                    <p className="error-text text-sm text-[14px] mt-3" role="alert">*{formErrors.moscowDeliveryMethod}</p>
                  )}
                </div>
              )}

              {/* Office pickup info */}
              {moscowDeliveryMethod === 'pickup' && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-sm text-gray-700">
                      Наш офис находится по адресу: <span className="font-medium">г. Москва, Хорошёвское шоссе, д. 25А, корп. 3</span>. Ближайшие станции метро — <span className="font-medium">«Полежаевская»</span> или <span className="font-medium">«Хорошёвская»</span>. Дорога от метро займёт 3–4 минуты.
                    </p>
                  </div>
                </div>
              )}

              {/* Delivery address form */}
              {(moscowDeliveryMethod === 'courier' || moscowDeliveryMethod === 'express') && (
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                  <h3 className="font-semibold text-gray-900 text-[15px] sm:text-[16px] mb-4 sm:mb-6">Укажите адрес доставки</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Улица, дом, корпус/строение"
                          value={deliveryAddress.street}
                          onChange={(e) => {
                            setDeliveryAddress(prev => ({ ...prev, street: e.target.value }))
                            // Очищаем ошибку при вводе
                            if (formErrors.deliveryAddressStreet) {
                              setFormErrors(prev => {
                                const newErrors = { ...prev }
                                delete newErrors.deliveryAddressStreet
                                return newErrors
                              })
                            }
                          }}
                          data-field="deliveryAddressStreet"
                          aria-invalid={!!formErrors.deliveryAddressStreet}
                          className={formErrors.deliveryAddressStreet ? 'error-field error-animate pr-10' : 'bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-100 pr-10'}
                        />
                        {validFields.deliveryAddress && !formErrors.deliveryAddressStreet && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600">
                            <CheckCircle className="w-5 h-5" />
                          </div>
                        )}
                      </div>
                      {formErrors.deliveryAddressStreet && (
                        <p className="error-text text-sm text-[14px]" role="alert">*{formErrors.deliveryAddressStreet}</p>
                      )}
                    </div>
                    <Input
                      type="text"
                      placeholder="Квартира/офис, код/домофон"
                      value={deliveryAddress.apartment}
                      onChange={(e) => setDeliveryAddress(prev => ({ ...prev, apartment: e.target.value }))}
                      className="bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-100"
                    />
                    <Input
                      type="text"
                      placeholder="Дополнительная информация"
                      value={deliveryAddress.additional}
                      onChange={(e) => setDeliveryAddress(prev => ({ ...prev, additional: e.target.value }))}
                      className="bg-gray-50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-100"
                    />
                  </div>
                </div>
              )}

              {/* Pickup point selector - новый дизайн с тремя состояниями */}
              {moscowDeliveryMethod === 'pickup-point' && (
                <div 
                  className={`bg-white border rounded-xl p-4 sm:p-6 transition-all ${
                    formErrors.selectedPickupPoint 
                      ? 'border-2 border-red-500 bg-red-50 shadow-lg ring-2 ring-red-200' 
                      : 'border-gray-200'
                  }`}
                  data-field="selectedPickupPoint"
                >
                  {pickupPointView === 'map' && (
                    <>
                      <div className="mb-4">
                        <p className="text-sm text-gray-700">
                          Выберите пункт выдачи и{' '}
                          <span className="text-purple-600 font-medium">
                            подтвердите кнопкой «Выбрать отделение»
                          </span>
                          . Для удобства в поиске (лупа на карте) введите город, улицу или станцию метро.
                        </p>
                      </div>

                      {/* Поиск */}
                      <div className="mb-4 flex gap-2">
                        <input
                          type="text"
                          placeholder="Адрес или объект"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                        <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 transition-colors rounded-lg font-medium">
                          Найти
                        </button>
                      </div>

                      {/* Карта с точками */}
                      <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4" style={{ height: '400px' }}>
                        {/* Заглушка карты с точками */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200">
                          <div className="absolute top-2 right-2 bg-white px-3 py-1.5 rounded shadow-sm text-sm">
                            🚦 <span className="text-green-600 font-medium">Пробки</span>
                          </div>
                          
                          {/* Точки пунктов выдачи */}
                          <div className="absolute inset-0 p-8">
                            {pickupPoints.map((point, idx) => {
                              const positions = [
                                { top: '20%', left: '25%' },
                                { top: '40%', left: '60%' },
                                { top: '60%', left: '30%' },
                                { top: '30%', left: '75%' },
                                { top: '70%', left: '55%' }
                              ]
                              return (
                                <button
                                  key={point.id}
                                  onClick={() => {
                                    setTempSelectedPoint(point.id)
                                    setPickupPointView('details')
                                  }}
                                  onMouseEnter={() => setHoveredPoint(point.id)}
                                  onMouseLeave={() => setHoveredPoint(null)}
                                  className={`absolute w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110 ${
                                    hoveredPoint === point.id ? 'bg-red-600 shadow-lg' : 'bg-red-500 shadow-md'
                                  }`}
                                  style={{ 
                                    top: positions[idx]?.top || '50%', 
                                    left: positions[idx]?.left || '50%',
                                    border: '3px solid white'
                                  }}
                                >
                                  <span className="text-white font-semibold text-sm">{idx + 1}</span>
                                </button>
                              )
                            })}
                          </div>
                          
                          {/* Яндекс карты лого */}
                          <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
                            © Яндекс Условия использования
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {pickupPointView === 'details' && tempSelectedPoint && (
                    <>
                      <div className="mb-4">
                        <p className="text-sm text-gray-700">
                          Выберите пункт выдачи и{' '}
                          <span className="text-purple-600 font-medium">
                            подтвердите кнопкой «Выбрать отделение»
                          </span>
                          . Для удобства в поиске (лупа на карте) введите город, улицу или станцию метро.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* Левая колонка - фото и детали */}
                        <div className="space-y-4">
                          {/* Фото */}
                          <div className="relative rounded-lg overflow-hidden" style={{ height: '200px' }}>
                            <img 
                              src={pickupPoints.find(p => p.id === tempSelectedPoint)?.image} 
                              alt="Пункт выдачи"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Детали */}
                          <div className="space-y-3">
                            {pickupPoints.find(p => p.id === tempSelectedPoint)?.hasFitting && (
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                                </div>
                                <span className="text-sm text-gray-700">Есть примерка</span>
                              </div>
                            )}

                            <div>
                              <p className="text-sm font-semibold text-gray-900 mb-1">Адрес:</p>
                              <p className="text-sm text-gray-700">
                                {pickupPoints.find(p => p.id === tempSelectedPoint)?.address}
                              </p>
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-gray-900 mb-1">Телефон:</p>
                              <p className="text-sm text-gray-700">
                                {pickupPoints.find(p => p.id === tempSelectedPoint)?.phone}
                              </p>
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-gray-900 mb-1">Режим работы:</p>
                              <p className="text-sm text-gray-700">
                                {pickupPoints.find(p => p.id === tempSelectedPoint)?.workingHours}
                              </p>
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-gray-900 mb-1">Тип оплаты:</p>
                              <p className="text-sm text-gray-700">
                                {pickupPoints.find(p => p.id === tempSelectedPoint)?.paymentType}
                              </p>
                            </div>
                          </div>

                          {/* Кнопка выбора */}
                          <button
                            onClick={() => {
                              setSelectedPickupPoint(tempSelectedPoint)
                              setPickupPointView('confirmed')
                              // Очищаем ошибку при выборе
                              if (formErrors.selectedPickupPoint) {
                                setFormErrors(prev => {
                                  const newErrors = { ...prev }
                                  delete newErrors.selectedPickupPoint
                                  return newErrors
                                })
                              }
                            }}
                            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg transition-colors font-medium"
                          >
                            Выбрать отделение
                          </button>
                        </div>

                        {/* Правая колонка - карта */}
                        <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ minHeight: '400px' }}>
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200">
                            <div className="absolute top-2 right-2 bg-white px-3 py-1.5 rounded shadow-sm text-sm">
                              🚦 <span className="text-green-600 font-medium">Пробки</span>
                            </div>
                            
                            {/* Выбранная точка в центре */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-12 h-12 rounded-full bg-red-500 border-4 border-white shadow-lg flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            
                            <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
                              © Яндекс Условия использования
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Кнопка назад */}
                      <button
                        onClick={() => setPickupPointView('map')}
                        className="mt-4 text-sm text-gray-600 hover:text-gray-900 underline"
                      >
                        ← Вернуться к списку
                      </button>
                    </>
                  )}

                  {pickupPointView === 'confirmed' && selectedPickupPoint && (
                    <>
                      <div className="mb-4">
                        <p className="text-sm text-gray-700">
                          Выберите пункт выдачи и{' '}
                          <span className="text-purple-600 font-medium">
                            подтвердите кнопкой «Выбрать отделение»
                          </span>
                          . Для удобства в поиске (лупа на карте) введите город, улицу или станцию метро.
                        </p>
                      </div>

                      <div className="bg-emerald-50 border-2 border-emerald-500 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900 mb-2">
                              Выбран пункт выдачи: {pickupPoints.find(p => p.id === selectedPickupPoint)?.address}
                            </p>
                            <button
                              onClick={() => {
                                setPickupPointView('map')
                                setTempSelectedPoint('')
                              }}
                              className="text-purple-600 hover:text-purple-700 underline text-sm font-medium"
                            >
                              Выбрать другой пункт выдачи
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {formErrors.selectedPickupPoint && (
                    <p className="error-text text-sm mt-4" role="alert">*{formErrors.selectedPickupPoint}</p>
                  )}
                </div>
              )}

              {/* Promo code */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <h3 className="font-semibold text-gray-900 text-[15px] sm:text-[16px]">Промокод</h3>
                  {appliedPromo && (
                    <div className="ml-auto flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-emerald-700">
                        -{appliedPromo.type === 'percent' ? `${appliedPromo.discount}%` : `${appliedPromo.discount} ₽`}
                      </span>
                    </div>
                  )}
                </div>

                {!appliedPromo ? (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Введите промокод, если он у вас есть
                    </p>
                    
                    <div className="flex gap-3">
                      <div className="flex-1 relative">
                        <Input
                          type="text"
                          value={promoCode}
                          onChange={(e) => {
                            setPromoCode(e.target.value.toUpperCase())
                            setPromoError('')
                          }}
                          placeholder="Введите промокод"
                          className="bg-gray-50 pr-12"
                          disabled={isApplyingPromo}
                        />
                        {promoCode && (
                          <button
                            onClick={() => setPromoCode('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      
                      <Button
                        onClick={applyPromoCode}
                        disabled={!promoCode.trim() || isApplyingPromo}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 min-w-[100px]"
                      >
                        {isApplyingPromo ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            <span>Проверка</span>
                          </div>
                        ) : (
                          'Применить'
                        )}
                      </Button>
                    </div>

                    {promoError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span className="text-sm text-red-700">{promoError}</span>
                      </div>
                    )}

                    {/* Примеры промокодов для демонстрации */}
                    <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-800 mb-2">💡 Попробуйте промокоды:</p>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(availablePromoCodes).map(([code, info]) => (
                          <button
                            key={code}
                            onClick={() => setPromoCode(code)}
                            className="text-xs bg-white/80 hover:bg-white border border-emerald-200 rounded-md px-2 py-1 text-emerald-700 hover:text-emerald-800 transition-colors"
                          >
                            {code}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                          <span className="text-xs">✓</span>
                        </div>
                        <span className="font-medium text-emerald-800">Промокод применен</span>
                      </div>
                      <button
                        onClick={removePromoCode}
                        className="text-emerald-600 hover:text-emerald-700 text-sm underline"
                      >
                        Удалить
                      </button>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-emerald-700">Код: <span className="font-mono font-medium">{appliedPromo.code}</span></span>
                        <span className="font-medium text-emerald-800">
                          -{appliedPromo.type === 'percent' ? `${appliedPromo.discount}%` : `${formatPrice(appliedPromo.discount)} ₽`}
                        </span>
                      </div>
                      
                      <div className="text-xs text-emerald-600">
                        {availablePromoCodes[appliedPromo.code as keyof typeof availablePromoCodes]?.description}
                      </div>
                      
                      {promoDiscount > 0 && (
                        <div className="pt-2 border-t border-emerald-200 mt-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-emerald-700">Экономия:</span>
                            <span className="font-medium text-emerald-800">{formatPrice(promoDiscount)} ₽</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Price breakdown - показывается после промокода */}
              {(deliveryAndPackagingPrice > 0 || appliedPromo) && (
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4 sm:p-6">
                  <h3 className="font-semibold text-gray-900 text-[15px] sm:text-[16px] mb-3 sm:mb-4">Итоговая стоимость</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-gray-700">
                      <span>Стоимость сертификатов:</span>
                      <span className="font-medium">{formatPrice(certificatePrice)} ₽</span>
                    </div>
                    
                    {deliveryAndPackagingPrice > 0 && (
                      <div className="flex justify-between items-center text-gray-700">
                        <span>Доставка и упаковка:</span>
                        <span className="font-medium">{formatPrice(deliveryAndPackagingPrice)} ₽</span>
                      </div>
                    )}
                    
                    {appliedPromo && promoDiscount > 0 && (
                      <div className="flex justify-between items-center text-emerald-600">
                        <span>Скидка по промокоду:</span>
                        <span className="font-medium">-{formatPrice(promoDiscount)} ₽</span>
                      </div>
                    )}
                    
                    <div className="border-t border-emerald-300 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">Итоговая сумма:</span>
                        <span className="text-2xl font-bold text-emerald-700">{formatPrice(finalPrice)} ₽</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Agreement */}
              <div className="space-y-2">
                <div className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-200 ${
                  formErrors.agreedToTerms 
                    ? 'bg-red-50 border border-red-200' 
                    : 'bg-transparent'
                }`}>
                  <div className="relative pt-1">
                    <Checkbox
                      id="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreedToTerms', checked as boolean)}
                      data-field="agreedToTerms"
                      aria-invalid={!!formErrors.agreedToTerms}
                      className={formErrors.agreedToTerms ? 'error-checkbox error-animate' : ''}
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="agreedToTerms" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
                      Согласен с{' '}
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">
                        Пользовательским соглашением
                      </a>{' '}
                      и{' '}
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">
                        Политикой обработки персональных данных
                      </a>{' '}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    {formErrors.agreedToTerms && (
                      <p className="error-text text-sm mt-1" role="alert">*{formErrors.agreedToTerms}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 pt-4 sm:pt-6 mt-6 sm:mt-8 -mx-4 sm:-mx-6 px-4 sm:px-6 pb-4 sm:pb-0">
                {/* Сообщение о готовности формы */}
                {formProgress.percentage === 100 && (
                  <div className="mb-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm text-emerald-800 font-medium">
                      Отлично! Форма заполнена, можно оплачивать
                    </span>
                  </div>
                )}
                
                <Button
                  type="submit"
                  className={`w-full h-12 sm:h-14 text-base sm:text-lg font-semibold transition-all duration-200 text-white ${
                    formData.agreedToTerms && formData.firstName.trim() && formData.lastName.trim() && formData.phone.trim() && formData.phone.trim() !== '+7' && formData.email.trim()
                      ? 'bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl active:scale-[0.98] sm:hover:scale-[1.02]'
                      : 'bg-emerald-300 hover:bg-emerald-400'
                  }`}
                >
                  Оплатить {formatPrice(finalPrice)} ₽
                </Button>
                
                {/* Показываем сообщение об ошибках */}
                {Object.keys(formErrors).length > 0 && submitAttempted && (
                  <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-sm text-red-700 font-medium">
                        Заполните, пожалуйста, обязательные поля
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

