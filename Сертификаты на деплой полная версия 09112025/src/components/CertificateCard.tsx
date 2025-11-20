import { ImageWithFallback } from './figma/ImageWithFallback'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCart } from './CartContext'
import { useState } from 'react'
import { CartModal } from './CartModal'
import { NightsSelector } from './NightsSelector'

interface CertificateCardProps {
  title: string
  description: string
  price: string
  period: string
  variants: string
  forPeople: string
  image: string
  badge?: string
  showAddToCart?: boolean
}

export function CertificateCard({ 
  title, 
  description, 
  price, 
  period, 
  variants, 
  forPeople, 
  image,
  badge,
  showAddToCart = false
}: CertificateCardProps) {
  const { addToCart } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedNights, setSelectedNights] = useState(1)

  const basePrice = parseInt(price.replace(/[^\d]/g, ''))

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    
    addToCart({
      id: `cert-${title.toLowerCase().replace(/\s+/g, '-')}-${selectedNights}nights`,
      title: title,
      price: basePrice,
      nights: selectedNights,
      durationType: "ночь",
      image: image,
      category: variants
    })

    // Открываем модальное окно корзины автоматически
    setIsCartOpen(true)
  }

  const getTotalPrice = () => {
    return basePrice * selectedNights
  }

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <div className="relative">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
          {badge && (
            <div className="absolute top-3 left-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {badge}
            </div>
          )}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            {variants}
          </div>
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            {forPeople}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          
          {showAddToCart && (
            <>
              {/* Селектор количества ночей */}
              <div className="mb-4">
                <NightsSelector
                  value={selectedNights}
                  onChange={setSelectedNights}
                  basePrice={basePrice}
                  minNights={1}
                  maxNights={14}
                />
              </div>

              {/* Отображение цены */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    {getTotalPrice().toLocaleString()} ₽
                  </div>
                  <div className="text-gray-500 text-sm">
                    за {selectedNights} {selectedNights === 1 ? 'ночь' : selectedNights <= 4 ? 'ночи' : 'ночей'}
                  </div>
                  {selectedNights > 1 && (
                    <div className="text-gray-400 text-xs">
                      {basePrice.toLocaleString()} ₽ за ночь
                    </div>
                  )}
                </div>
              </div>

              {/* Кнопка добавления в корзину */}
              <Button
                onClick={handleAddToCart}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                В корзину
              </Button>
            </>
          )}

          {/* Если не показываем кнопку "В корзину", показываем базовую цену */}
          {!showAddToCart && (
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-2xl font-bold text-gray-900">{price}</span>
                <span className="text-gray-500 text-sm ml-1">/ {period}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}