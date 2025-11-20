import React, { useState } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog'
import { X, Gift, Package } from 'lucide-react'
import { PackagingCarousel } from './PackagingCarousel'
import { EnvelopeCarousel } from './EnvelopeCarousel'

// Импорты изображений фирменных конвертов
import envelopeRomanticSunset from 'figma:asset/79a80dd324991daf45cd90a9f2912d78d0a8ec45.png'
import envelopeLavenderFields from 'figma:asset/4ecdb0f39700ddb61bd3ccb8acf64bca3bd0b0d8.png'
import envelopeVanAdventure from 'figma:asset/bb648890e682023fbc81607c5abc842ad9bbc3af.png'

// Импорт изображений подарочной упаковки
import giftBoxImage from 'figma:asset/04287b7f73e032685ba62d79514fe52a223ac325.png'
import giftBoxMountain from 'figma:asset/92ca04646725e7f39ab9d8bcb08f47961641c825.png'
import giftBoxLavender from 'figma:asset/e1779cb0f5e1a750e3a441574dc7071d3a0585f5.png'
import giftBoxVan from 'figma:asset/272b4b8040c9a5ae11a753a5cfdc6dd695e15d4b.png'

// Варианты упаковок с реальными изображениями (обновлено!)
const packagingOptions = [
  { id: 'premium', name: 'Премиальная коробка ручной работы', image: giftBoxImage },
  { id: 'premium-mountain', name: 'Премиум коробка с горным пейзажем', image: giftBoxMountain },
  { id: 'premium-lavender', name: 'Премиум коробка с лавандовыми полями', image: giftBoxLavender },
  { id: 'premium-van', name: 'Премиум коробка с фургон-приключением', image: giftBoxVan }
]

// Варианты конвертов с реальными изображениями
const envelopeOptions = [
  { id: 'sunset', name: 'Романтический закат', image: envelopeRomanticSunset },
  { id: 'lavender', name: 'Лавандовые поля', image: envelopeLavenderFields },
  { id: 'van', name: 'Путешествие на фургоне', image: envelopeVanAdventure }
]

interface PackagingModalProps {
  isOpen: boolean
  onClose: () => void
  trigger?: React.ReactNode
}

export function PackagingModal({ isOpen, onClose, trigger }: PackagingModalProps) {
  const [deliveryType, setDeliveryType] = useState<'electronic' | 'envelope' | 'packaging'>('electronic')
  const [selectedPackaging, setSelectedPackaging] = useState<string | null>(null)
  const [selectedEnvelope, setSelectedEnvelope] = useState<string | null>(null)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
            Добавьте к заказу подарочную упаковку
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Выберите способ получения вашего сертификата
          </DialogDescription>
        </DialogHeader>

        {/* Выбор способа получения */}
        <div className="space-y-4 mt-6">
          {/* Электронный сертификат */}
          <label 
            className={`block p-6 rounded-xl border-2 cursor-pointer transition-all ${
              deliveryType === 'electronic'
                ? 'border-emerald-500 bg-emerald-50 shadow-md'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <input
              type="radio"
              name="deliveryType"
              value="electronic"
              checked={deliveryType === 'electronic'}
              onChange={() => setDeliveryType('electronic')}
              className="sr-only"
            />
            <div className="flex items-start gap-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                deliveryType === 'electronic'
                  ? 'border-emerald-600 bg-emerald-600'
                  : 'border-gray-300'
              }`}>
                {deliveryType === 'electronic' && (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Электронный сертификат</h3>
                <p className="text-sm text-gray-600">Получите сертификат на e-mail сразу после оплаты</p>
              </div>
              <Package className="w-8 h-8 text-emerald-600" />
            </div>
          </label>

          {/* В фирменном конверте */}
          <label 
            className={`block p-6 rounded-xl border-2 cursor-pointer transition-all ${
              deliveryType === 'envelope'
                ? 'border-emerald-500 bg-emerald-50 shadow-md'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <input
              type="radio"
              name="deliveryType"
              value="envelope"
              checked={deliveryType === 'envelope'}
              onChange={() => setDeliveryType('envelope')}
              className="sr-only"
            />
            <div className="flex items-start gap-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                deliveryType === 'envelope'
                  ? 'border-emerald-600 bg-emerald-600'
                  : 'border-gray-300'
              }`}>
                {deliveryType === 'envelope' && (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Электронный сертификат в фирменном конверте</h3>
                <p className="text-sm text-gray-600">Красивый фирменный конверт с сертификатом</p>
              </div>
              <Gift className="w-8 h-8 text-emerald-600" />
            </div>
          </label>

          {/* Карусель конвертов - показывается только при выборе "envelope" */}
          {deliveryType === 'envelope' && (
            <div className="pl-10 pr-10 py-6 bg-gray-50 rounded-xl animate-in fade-in slide-in-from-top-4 duration-300">
              <h4 className="font-semibold text-gray-900 mb-4 text-center">Выберите дизайн конверта</h4>
              <EnvelopeCarousel
                options={envelopeOptions}
                selectedId={selectedEnvelope}
                onSelect={setSelectedEnvelope}
              />
            </div>
          )}

          {/* В подарочной упаковке */}
          <label 
            className={`block p-6 rounded-xl border-2 cursor-pointer transition-all ${
              deliveryType === 'packaging'
                ? 'border-emerald-500 bg-emerald-50 shadow-md'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <input
              type="radio"
              name="deliveryType"
              value="packaging"
              checked={deliveryType === 'packaging'}
              onChange={() => setDeliveryType('packaging')}
              className="sr-only"
            />
            <div className="flex items-start gap-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${
                deliveryType === 'packaging'
                  ? 'border-emerald-600 bg-emerald-600'
                  : 'border-gray-300'
              }`}>
                {deliveryType === 'packaging' && (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Электронный сертификат в подарочной упаковке и фирменном конверте</h3>
                <p className="text-sm text-gray-600">Полный набор: упаковка + конверт + сертификат</p>
              </div>
              <Gift className="w-8 h-8 text-amber-500" />
            </div>
          </label>

          {/* Карусель упаковок - показывается только при выборе "packaging" */}
          {deliveryType === 'packaging' && (
            <div className="pl-10 pr-10 py-6 bg-gray-50 rounded-xl animate-in fade-in slide-in-from-top-4 duration-300">
              <h4 className="font-semibold text-gray-900 mb-4 text-center">Выберите дизайн упаковки</h4>
              <PackagingCarousel
                options={packagingOptions}
                selectedId={selectedPackaging}
                onSelect={setSelectedPackaging}
              />

              {selectedPackaging && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4 text-center">Выберите дизайн конверта</h4>
                  <EnvelopeCarousel
                    options={envelopeOptions}
                    selectedId={selectedEnvelope}
                    onSelect={setSelectedEnvelope}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
          <Button 
            variant="outline" 
            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
            onClick={onClose}
          >
            Закрыть
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}