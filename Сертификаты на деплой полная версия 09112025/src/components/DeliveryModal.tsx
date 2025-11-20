import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from './ui/dialog'
import { Mail, MapPin, Truck, Package, X } from 'lucide-react'
import { motion } from 'motion/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

interface DeliveryModalProps {
  trigger: React.ReactNode
}

export function DeliveryModal({ trigger }: DeliveryModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="!w-[95vw] sm:!w-[90vw] md:!w-[85vw] lg:!w-[80vw] !max-w-[1400px] !min-w-0 mx-auto p-0 bg-white rounded-2xl md:rounded-3xl border-0 shadow-2xl overflow-hidden !max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">Доставка и оплата</DialogTitle>
        <DialogDescription className="sr-only">
          Выберите подходящий способ доставки сертификата глэмпинга
        </DialogDescription>
        
        {/* Кнопка закрытия */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 md:right-4 md:top-4 z-50 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
        </button>

        <motion.div 
          className="p-4 md:p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Заголовок */}
          <div className="text-left mb-4 md:mb-8 pr-10">
            <h2 className="text-base md:text-xl lg:text-2xl font-medium text-gray-700 uppercase tracking-wide">
              Доставка и оплата
            </h2>
          </div>

          {/* Контент с вкладками для мобильных и сеткой для десктопа */}
          
          {/* Мобильная версия с вкладками (до md) */}
          <div className="block md:hidden">
            <Tabs defaultValue="instant" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-4 h-auto">
                <TabsTrigger value="instant" className="text-xs p-2">
                  <div className="flex flex-col items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>E-mail</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="pickup" className="text-xs p-2">
                  <div className="flex flex-col items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Офис</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="courier" className="text-xs p-2">
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-4 h-4" />
                    <span>Курьер</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="points" className="text-xs p-2">
                  <div className="flex flex-col items-center gap-1">
                    <Package className="w-4 h-4" />
                    <span>ПВЗ</span>
                  </div>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="instant" className="space-y-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Моментально</h3>
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                      Быстро
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-700">Сертификат в электронном виде отправится на почту сразу после оплаты.</p>
                <div className="space-y-1.5 text-xs text-gray-600">
                  <p>• <strong>Срок:</strong> мгновенно</p>
                  <p>• <strong>Стоимость:</strong> 0 ₽</p>
                  <p>• <strong>Оплата:</strong> картой на сайте</p>
                </div>
              </TabsContent>

              <TabsContent value="pickup" className="space-y-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Самовывоз</h3>
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                      Бесплатно
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-700">г. Москва, Хорошёвское шоссе, д. 25А, корп. 3</p>
                <p className="text-xs text-gray-600">Метро «Полежаевская» или «Хорошёвская», 3–4 минуты пешком.</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p className="font-medium text-gray-700">Часы работы:</p>
                  <p>• Будни: 10:00–21:00</p>
                  <p>• Выходные: 11:00–18:00</p>
                </div>
                <p className="text-xs text-green-600 font-medium">✓ Бесплатная парковка</p>
              </TabsContent>

              <TabsContent value="courier" className="space-y-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Курьер</h3>
                    <span className="inline-block bg-orange-100 text-orange-700 text-xs font-medium px-2 py-1 rounded">
                      Популярно
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">1. Быстрая (2 часа)</p>
                    <p className="text-xs text-gray-600">В пределах МКАД, будни 11:00–19:00, выходные 11:00–17:00</p>
                    <p className="text-xs text-gray-700 mt-1">• <strong>Стоимость:</strong> 900 ₽</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">2. Стандартная</p>
                    <p className="text-xs text-gray-600">• <strong>Срок:</strong> 1–2 дня</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="points" className="space-y-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">ПВЗ по России</h3>
                    <span className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded">
                      1000 городов
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-700">Доставка в 1000 городов России.</p>
                <div className="space-y-1.5 text-xs text-gray-600">
                  <p>• <strong>Срок:</strong> от 3-х дней</p>
                  <p>• <strong>Стоимость:</strong> 500 ₽</p>
                </div>
                <a href="https://dostavka.yandex.ru/pickup-point/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 underline inline-block">
                  Посмотреть пункты выдачи →
                </a>
              </TabsContent>
            </Tabs>
          </div>

          {/* Десктопная версия с сеткой (от md) */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Моментальное получение */}
            <div className="text-left">
              <div className="mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Моментально</h3>
                <p className="text-sm text-gray-600 mb-2">по электронной почте</p>
                <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded">
                  Быстро
                </span>
              </div>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>Сертификат в электронном виде отправится на почту сразу после оплаты.</p>
                <div className="space-y-1 mt-2">
                  <p><span className="font-medium">Срок:</span> мгновенно</p>
                  <p><span className="font-medium">Стоимость:</span> 0 ₽</p>
                  <p><span className="font-medium">Оплата:</span> картой</p>
                </div>
              </div>
            </div>

            {/* Самовывоз из офиса */}
            <div className="text-left">
              <div className="mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Самовывоз</h3>
                <p className="text-sm text-gray-600 mb-2">из офиса в Москве</p>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded">
                  Бесплатно
                </span>
              </div>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>г. Москва, Хорошёвское шоссе, д. 25А, корп. 3, ЖК «Династия»</p>
                <p className="text-xs">Метро «Полежаевская» или «Хорошёвская», 3–4 мин.</p>
                <div className="mt-2">
                  <p className="font-medium text-xs">Часы работы:</p>
                  <p className="text-xs">Будни: 10:00–21:00</p>
                  <p className="text-xs">Выходные: 11:00–18:00</p>
                </div>
                <p className="text-green-600 font-medium text-xs">✓ Парковка</p>
              </div>
            </div>

            {/* Курьерская доставка */}
            <div className="text-left">
              <div className="mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <Truck className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Курьер</h3>
                <p className="text-sm text-gray-600 mb-2">по Москве</p>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1 rounded">
                  Популярно
                </span>
              </div>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <div>
                  <p className="font-medium text-xs">1. Быстрая (2 часа)</p>
                  <p className="text-xs">В пределах МКАД</p>
                  <p className="text-xs mt-1">Стоимость: 900 ₽</p>
                  
                  <p className="font-medium text-xs mt-2">2. Стандартная</p>
                  <p className="text-xs">Срок: 1–2 дня</p>
                </div>
              </div>
            </div>

            {/* Пункты выдачи */}
            <div className="text-left">
              <div className="mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">ПВЗ</h3>
                <p className="text-sm text-gray-600 mb-2">по всей России</p>
                <span className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded">
                  1000 городов
                </span>
              </div>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p className="text-xs">Доставка в 1000 городов России.</p>
                <div className="space-y-1 mt-2">
                  <p className="text-xs"><span className="font-medium">Срок:</span> от 3-х дней</p>
                  <p className="text-xs"><span className="font-medium">Стоимость:</span> 500 ₽</p>
                </div>
                <a href="https://dostavka.yandex.ru/pickup-point/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:text-blue-800 underline inline-block">
                  Посмотреть ПВЗ →
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}