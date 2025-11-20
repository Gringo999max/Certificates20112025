import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

// Тестовые изображения глэмпингов для галереи
const testGlampingImages = [
  'https://images.unsplash.com/photo-1662791231593-57253ecfd795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRlbnQlMjBuYXR1cmV8ZW58MXx8fHwxNzYwMjQwNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1740437260482-7720ee580010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYW1waW5nJTIwZm9yZXN0fGVufDF8fHx8MTc2MDI4Mjg4MXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1685630708639-16d601a55734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMGRvbWUlMjBzdW5zZXR8ZW58MXx8fHwxNzYwMjgyODgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1738911203225-0b0d3362e01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNhbXBpbmclMjBtb3VudGFpbnN8ZW58MXx8fHwxNzYwMjgyODgyfDA&ixlib=rb-4.1.0&q=80&w=1080'
]

export interface CartItem {
  id: string
  title: string
  price: number
  nights: number        // НОВОЕ: Количество выбранных ночей
  durationType: string  // ИЗМЕНЕНО: Тип периода ("ночь", "выходные", "неделя")
  images: (string | React.ReactNode)[] // ИЗМЕНЕНО: Массив изображений для галереи
  category: string
  quantity: number      // Количество сертификатов (остается)
}

// Функция для создания уникального ключа товара
function getItemKey(id: string, nights: number): string {
  return `${id}-${nights}`
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: string, nights?: number) => void
  updateQuantity: (id: string, quantity: number, nights?: number) => void
  updateNights: (id: string, nights: number) => void  // НОВОЕ: Изменение количества ночей
  getTotalItems: () => number
  getTotalPrice: () => number
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Добавляем тестовые товары при первой загрузке для тестирования
  useEffect(() => {
    const testItems: CartItem[] = [
      {
        id: 'pet-friendly-glamping-2nights',
        title: 'Глэмпинг: отдых в глэмпинге с питомцем',
        price: 24900,
        nights: 2,
        durationType: 'ночь',
        images: [
          testGlampingImages[0],
          testGlampingImages[1],
          testGlampingImages[2],
          testGlampingImages[3]
        ],
        category: '100 вариантов',
        quantity: 1
      },
      {
        id: 'pet-friendly-glamping-1night',
        title: 'Глэмпинг: отдых в глэмпинге с питомцем', 
        price: 24900,
        nights: 1,
        durationType: 'ночь',
        images: [
          testGlampingImages[2],
          testGlampingImages[3],
          testGlampingImages[0]
        ],
        category: '100 вариантов',
        quantity: 1
      },
      {
        id: 'family-glamping', 
        title: 'Глэмпинг: семейный отдых',
        price: 19900,
        nights: 3,
        durationType: 'ночь',
        images: [
          testGlampingImages[3],
          testGlampingImages[1],
          testGlampingImages[0],
          testGlampingImages[2]
        ],
        category: '200 вариантов',
        quantity: 2
      }
    ]
    setItems(testItems)
  }, [])

  const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.id === newItem.id && item.nights === newItem.nights
      )
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === existingItem.id && item.nights === existingItem.nights
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id: string, nights?: number) => {
    setItems(prevItems => prevItems.filter(item => {
      if (nights) {
        return item.id !== id || item.nights !== nights
      } else {
        return item.id !== id
      }
    }))
  }

  const updateQuantity = (id: string, quantity: number, nights?: number) => {
    if (quantity <= 0) {
      removeFromCart(id, nights)
      return
    }
    
    setItems(prevItems =>
      prevItems.map(item => {
        if (nights) {
          return item.id === id && item.nights === nights ? { ...item, quantity } : item
        } else {
          return item.id === id ? { ...item, quantity } : item
        }
      })
    )
  }

  const updateNights = (id: string, nights: number) => {
    if (nights <= 0) {
      return
    }
    
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, nights } : item
      )
    )
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.nights * item.quantity), 0)
  }

  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      updateNights,
      getTotalItems,
      getTotalPrice,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}