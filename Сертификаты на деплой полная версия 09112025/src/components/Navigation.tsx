import React from 'react'
import { Button } from './ui/button'
import { Users, Home, Truck, Star, MessageCircle, Gift } from 'lucide-react'

interface NavigationProps {
  currentPage: string
  onPageChange: (page: string) => void
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  // Для страниц отличных от главной, показываем полную навигацию
  if (currentPage !== 'home') {
    return (
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-200 px-6 py-3 flex items-center gap-4 z-50">
        <button 
          onClick={() => onPageChange('home')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            currentPage === 'home' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:text-emerald-600'
          }`}
        >
          <Home size={20} />
          Главная
        </button>
        
        <button 
          onClick={() => onPageChange('delivery')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            currentPage === 'delivery' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:text-emerald-600'
          }`}
        >
          <Truck size={20} />
          Доставка
        </button>
        
        <button 
          onClick={() => onPageChange('reviews')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            currentPage === 'reviews' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:text-emerald-600'
          }`}
        >
          <Star size={20} />
          Отзывы
        </button>
        
        <Button 
          onClick={() => onPageChange('corporate')}
          className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
        >
          Корпоративные подарки
        </Button>
        
        <button 
          onClick={() => onPageChange('about')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            currentPage === 'about' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:text-emerald-600'
          }`}
        >
          <Users size={20} />
          О нас
        </button>
        
        <button 
          onClick={() => onPageChange('activation')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            currentPage === 'activation' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:text-emerald-600'
          }`}
        >
          <Gift size={20} />
          Активация
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button 
        onClick={() => onPageChange('delivery')}
        className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
      >
        Доставка и оплата
      </Button>
      <Button 
        onClick={() => onPageChange('corporate')}
        className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
      >
        Корпоративные подарки
      </Button>
      
      <button 
        onClick={() => onPageChange('about')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          currentPage === 'about' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:text-emerald-600'
        }`}
      >
        <Users size={20} />
        О нас
      </button>
      
      <button 
        onClick={() => onPageChange('activation')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          currentPage === 'activation' ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:text-emerald-600'
        }`}
      >
        <Gift size={20} />
        Активация
      </button>
    </div>
  )
}