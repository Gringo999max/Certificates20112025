import React from 'react'
import { DeliveryModal } from './DeliveryModal'
import { Truck } from 'lucide-react'

export function DeliveryButton() {
  return (
    <DeliveryModal
      trigger={
        <button className="inline-flex items-center gap-2 px-3 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 border border-blue-200 hover:border-blue-300">
          <Truck className="w-4 h-4" />
          <span>Доставка от 2-х часов или на e-mail</span>
        </button>
      }
    />
  )
}