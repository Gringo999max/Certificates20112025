// This file has been moved inline to CheckoutModal.tsx to avoid import issues
// Functions are now directly included in the component to prevent timeout errors

export interface CartItem {
  id: string
  title: string
  price: number
  nights: number
  durationType: string
  image: string
  category: string
  quantity: number
}

export interface GroupedOrderItem {
  nights: number
  quantity: number
  totalPrice: number
}

/**
 * Склонение существительных в зависимости от числа
 */
export function declensionNoun(count: number, one: string, two: string, five: string): string {
  const lastDigit = count % 10
  const lastTwoDigits = count % 100
  
  // Исключения для 11-14
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return five
  }
  
  // Обычные правила склонения
  if (lastDigit === 1) {
    return one
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return two
  } else {
    return five
  }
}

/**
 * Склонение слова "сертификат"
 */
export function declensionCertificate(count: number): string {
  return declensionNoun(count, 'сертификат', 'сертификата', 'сертификатов')
}

/**
 * Склонение слова "ночь"
 */
export function declensionNight(count: number): string {
  return declensionNoun(count, 'ночь', 'ночи', 'ночей')
}

/**
 * Преобразование числа в текстовое представление для начала предложения
 */
export function numberToText(count: number): string {
  const textNumbers: { [key: number]: string } = {
    1: 'один',
    2: 'два', 
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять',
    10: 'десять'
  }
  
  return textNumbers[count] || count.toString()
}

/**
 * Группировка товаров корзины по количеству ночей
 */
export function groupOrderByNights(items: CartItem[]): GroupedOrderItem[] {
  const groups: { [key: number]: GroupedOrderItem } = {}
  
  items.forEach(item => {
    if (!groups[item.nights]) {
      groups[item.nights] = {
        nights: item.nights,
        quantity: 0,
        totalPrice: 0
      }
    }
    
    groups[item.nights].quantity += item.quantity
    groups[item.nights].totalPrice += item.price * item.nights * item.quantity
  })
  
  // Сортируем по количеству ночей (по возрастанию)
  return Object.values(groups).sort((a, b) => a.nights - b.nights)
}

/**
 * Генерация читаемого описания заказа
 */
export function generateOrderDescription(items: CartItem[]): string {
  const groups = groupOrderByNights(items)
  
  if (groups.length === 0) {
    return ''
  }
  
  const descriptions = groups.map(group => {
    const certificateWord = declensionCertificate(group.quantity)
    const nightWord = declensionNight(group.nights)
    const quantityText = numberToText(group.quantity)
    
    return `${quantityText} ${certificateWord} на ${group.nights} ${nightWord}`
  })
  
  // Соединяем описания
  if (descriptions.length === 1) {
    return descriptions[0]
  } else if (descriptions.length === 2) {
    return `${descriptions[0]} и ${descriptions[1]}`
  } else {
    // Для 3+ элементов: "один на 1 ночь, два на 3 ночи и три на 5 ночей"
    const lastItem = descriptions.pop()
    return `${descriptions.join(', ')} и ${lastItem}`
  }
}

/**
 * Получение сводной информации о заказе
 */
export function getOrderSummary(items: CartItem[]) {
  const totalCertificates = items.reduce((total, item) => total + item.quantity, 0)
  const totalNights = items.reduce((total, item) => total + (item.nights * item.quantity), 0)
  const totalPrice = items.reduce((total, item) => total + (item.price * item.nights * item.quantity), 0)
  const description = generateOrderDescription(items)
  const groups = groupOrderByNights(items)
  
  return {
    totalCertificates,
    totalNights,
    totalPrice,
    description,
    groups,
    items
  }
}

/**
 * Форматирование числа с правильными разделителями
 */
export function formatPrice(price: number): string {
  return price.toLocaleString('ru-RU')
}