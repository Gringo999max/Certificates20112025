import React from 'react'
import { Eye } from 'lucide-react'

interface PreviewNavigationButtonProps {
  onClick: () => void
}

export function PreviewNavigationButton({ onClick }: PreviewNavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed top-20 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-105 group flex items-center gap-2"
      title="Посмотреть превью новой кнопки корзины"
    >
      <Eye className="w-5 h-5" />
      <span className="hidden md:inline text-sm font-medium">Варианты дизайна корзины</span>
    </button>
  )
}

export default PreviewNavigationButton
