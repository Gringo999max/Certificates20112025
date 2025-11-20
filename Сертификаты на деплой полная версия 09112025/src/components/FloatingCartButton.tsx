import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { useCart } from './CartContext'
import { CheckoutModal } from './CheckoutModal'

export function FloatingCartButton() {
  const { getTotalItems, getTotalPrice } = useCart()
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const totalCertificates = getTotalItems()

  if (totalCertificates === 0) return null

  return (
    <>
      {/* ВАРИАНТ 3: Фирменный Cuva стиль с hover */}
      <div className="fixed top-24 right-4 md:right-24 z-40 flex items-center gap-4 group">
        {/* Зеленый прямоугольник с ценой и количеством - появляется при hover */}
        <div className="bg-[#007a55] text-white px-6 py-3 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-3 group-hover:translate-x-0 hidden md:block">
          <div className="whitespace-nowrap">
            <div className="text-sm opacity-90">
              {totalCertificates} {totalCertificates === 1 ? 'сертификат' : totalCertificates < 5 ? 'сертификата' : 'сертификатов'}
            </div>
            <div className="font-medium">
              {getTotalPrice().toLocaleString()} ₽
            </div>
          </div>
        </div>
        
        {/* Белая круглая кнопка */}
        <button
          onClick={() => setIsCheckoutOpen(true)}
          className="bg-white/50 md:bg-white hover:bg-white/60 md:hover:bg-gray-50 text-[#007a55]/60 md:text-[#007a55] rounded-full p-6 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,122,85,0.3)] transition-all duration-200 backdrop-blur-md md:backdrop-blur-none"
          aria-label={`Корзина: ${totalCertificates} товаров на сумму ${getTotalPrice().toLocaleString()} рублей`}
        >
          <div className="relative">
            <ShoppingCart className="w-8 h-8" />
            <span className="absolute -top-2 -right-2 bg-red-500/90 md:bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center font-medium shadow-lg">
              {totalCertificates > 99 ? '99+' : totalCertificates}
            </span>
          </div>
        </button>
      </div>

      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  )
}