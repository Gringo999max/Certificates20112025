import React, { useState } from 'react'
import AnthropicGiftDeliverySection from './AnthropicGiftDeliverySection'
import AnthropicAnimatedDeliverySection from './AnthropicAnimatedDeliverySection'
import { ArrowLeft, Zap, Sparkles } from 'lucide-react'

interface AnthropicDeliveryTestPageProps {
  onNavigateToHome?: () => void
}

const AnthropicDeliveryTestPage = ({ onNavigateToHome }: AnthropicDeliveryTestPageProps) => {
  const [showAnimated, setShowAnimated] = useState(true)
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f7f4ed' }}>
      {/* Header */}
      <div className="bg-white border-b" style={{ borderColor: '#d4c5b0' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {onNavigateToHome && (
              <button
                onClick={onNavigateToHome}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-gray-50"
                style={{ color: '#5c4a3a' }}
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Назад на главную</span>
              </button>
            )}
            <h1 
              className="text-xl font-bold"
              style={{ 
                fontFamily: "'Crimson Pro', serif",
                color: '#2a2118'
              }}
            >
              Тест: Выбор способа доставки в стиле Anthropic AI
            </h1>
          </div>
          
          {/* Toggle Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAnimated(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${!showAnimated ? 'bg-orange-100 border-2 border-orange-300' : 'bg-gray-50 border border-gray-200'}`}
              style={{ color: '#5c4a3a' }}
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Базовый</span>
            </button>
            <button
              onClick={() => setShowAnimated(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${showAnimated ? 'bg-orange-100 border-2 border-orange-300' : 'bg-gray-50 border border-gray-200'}`}
              style={{ color: '#5c4a3a' }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">С анимациями</span>
            </button>
          </div>
        </div>
      </div>

      {/* Component */}
      {showAnimated ? <AnthropicAnimatedDeliverySection /> : <AnthropicGiftDeliverySection />}

      {/* Info Panel */}
      <div className="max-w-7xl mx-auto px-10 pb-20">
        <div 
          className="bg-white rounded-lg p-8"
          style={{ 
            border: '1.5px solid #d4c5b0',
            boxShadow: '0 4px 12px rgba(92, 74, 58, 0.08)'
          }}
        >
          <h3 
            className="font-bold mb-4"
            style={{ 
              fontFamily: "'Crimson Pro', serif",
              fontSize: '20px',
              color: '#2a2118'
            }}
          >
            Особенности дизайна в стиле Anthropic AI
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 
                className="font-semibold mb-2"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: '#2a2118'
                }}
              >
                🎨 Цветовая палитра
              </h4>
              <ul 
                className="space-y-1 text-sm"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: '#5c4a3a'
                }}
              >
                <li>• Фон: #f7f4ed (кремовый)</li>
                <li>• Текст: #5c4a3a (коричневый)</li>
                <li>• Акцент: #cc785c (оранжевый)</li>
                <li>• Рамки: #d4c5b0 (светло-коричневый)</li>
              </ul>
            </div>

            <div>
              <h4 
                className="font-semibold mb-2"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: '#2a2118'
                }}
              >
                ✨ Типографика
              </h4>
              <ul 
                className="space-y-1 text-sm"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: '#5c4a3a'
                }}
              >
                <li>• Заголовки: Crimson Pro (serif)</li>
                <li>• UI элементы: Inter (sans-serif)</li>
                <li>• Минималистичный подход</li>
                <li>• Generous white space</li>
              </ul>
            </div>

            <div>
              <h4 
                className="font-semibold mb-2"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: '#2a2118'
                }}
              >
                🎯 Взаимодействие {showAnimated && '+ Анимации'}
              </h4>
              <ul 
                className="space-y-1 text-sm"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: '#5c4a3a'
                }}
              >
                <li>• Hover: Подъем на 4px</li>
                <li>• Выбор: Оранжевая рамка 3px</li>
                <li>• Transitions: 300ms ease-out</li>
                {showAnimated && (
                  <>
                    <li>• Stagger карточек: 0.1s</li>
                    <li>• Галочка: вращение 180°</li>
                    <li>• Карусель: slide эффект</li>
                  </>
                )}
              </ul>
            </div>

            <div>
              <h4 
                className="font-semibold mb-2"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: '#2a2118'
                }}
              >
                📐 Spacing & Layout
              </h4>
              <ul 
                className="space-y-1 text-sm"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: '#5c4a3a'
                }}
              >
                <li>• Padding: 80px vertical</li>
                <li>• Card gap: 24px</li>
                <li>• Border radius: 8-12px</li>
                <li>• Cross-hatch pattern фон</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnthropicDeliveryTestPage
