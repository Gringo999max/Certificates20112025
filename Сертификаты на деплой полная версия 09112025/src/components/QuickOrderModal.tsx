import React, { useState } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from './ui/dialog'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { X, Phone, MessageCircle, CheckCircle2, Clock, Zap, HeartHandshake, Send, Moon } from 'lucide-react'
import { useCart } from './CartContext'

interface QuickOrderModalProps {
  trigger: React.ReactNode
  productName?: string
  productPrice?: number
}

export function QuickOrderModal({ trigger, productName = "Подарочный сертификат", productPrice }: QuickOrderModalProps) {
  const [phone, setPhone] = useState('+7 ')
  const [contactMethod, setContactMethod] = useState('phone')
  const [agreed, setAgreed] = useState(true) // Сразу выбрана
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { items, getTotalPrice } = useCart()

  const formatNightsText = (nights: number) => {
    if (nights === 1) return '1 ночь'
    if (nights >= 2 && nights <= 4) return `${nights} ночи`
    return `${nights} ночей`
  }

  const getOrderSummary = () => {
    if (items.length === 0) return null
    
    const totalNights = items.reduce((total, item) => total + (item.nights * item.quantity), 0)
    const totalCertificates = items.reduce((total, item) => total + item.quantity, 0)
    
    return {
      totalNights,
      totalCertificates,
      totalPrice: getTotalPrice()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const phoneDigits = phone.replace(/\D/g, '')
    if (phoneDigits.length < 11 || !agreed) return

    setIsSubmitting(true)
    
    // Имитация отправки
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Автоматически закрываем через 3 секунды
    setTimeout(() => {
      setIsSuccess(false)
      setPhone('+7 ')
      setContactMethod('phone')
      setAgreed(true)
    }, 3000)
    
    // Здесь будет логика отправки заявки
    const orderData = {
      phone, 
      contactMethod, 
      productName, 
      productPrice,
      orderSummary: getOrderSummary(),
      items: items
    }
    console.log('Заявка отправлена:', orderData)
  }

  const formatPhoneNumber = (value: string) => {
    // Убираем все символы кроме цифр
    const digits = value.replace(/\D/g, '')
    
    // Если пустая строка, возвращаем +7
    if (digits.length === 0) {
      return '+7 '
    }
    
    // Если начинается с 8, заменяем на 7
    let processedDigits = digits
    if (processedDigits.startsWith('8')) {
      processedDigits = '7' + processedDigits.slice(1)
    }
    
    // Если не начинается с 7, добавляем 7 в начало
    if (!processedDigits.startsWith('7')) {
      processedDigits = '7' + processedDigits
    }
    
    // Убираем лишние цифры (максимум 11 цифр)
    processedDigits = processedDigits.slice(0, 11)
    
    // Форматирование по частям
    let formatted = '+7'
    
    if (processedDigits.length > 1) {
      const areaCode = processedDigits.slice(1, 4)
      if (areaCode.length > 0) {
        formatted += ` (${areaCode}`
        if (areaCode.length === 3) {
          formatted += ')'
        }
      }
      
      if (processedDigits.length > 4) {
        const firstPart = processedDigits.slice(4, 7)
        if (firstPart.length > 0) {
          formatted += ` ${firstPart}`
        }
        
        if (processedDigits.length > 7) {
          const secondPart = processedDigits.slice(7, 9)
          if (secondPart.length > 0) {
            formatted += `-${secondPart}`
          }
          
          if (processedDigits.length > 9) {
            const thirdPart = processedDigits.slice(9, 11)
            if (thirdPart.length > 0) {
              formatted += `-${thirdPart}`
            }
          }
        }
      }
    }
    
    return formatted
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cursorPosition = e.target.selectionStart || 0
    const prevLength = phone.length
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
    
    // Корректировка позиции курсора после форматирования
    setTimeout(() => {
      const input = e.target
      const newLength = formatted.length
      const lengthDiff = newLength - prevLength
      let newCursorPosition = cursorPosition + lengthDiff
      
      // Если курсор попал на символ форматирования, перемещаем его
      const formattingChars = ['(', ')', ' ', '-']
      while (newCursorPosition < formatted.length && 
             formattingChars.includes(formatted[newCursorPosition])) {
        newCursorPosition++
      }
      
      input.setSelectionRange(newCursorPosition, newCursorPosition)
    }, 0)
  }

  const orderSummary = getOrderSummary()

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-4xl mx-auto p-0 overflow-hidden border-0 shadow-2xl [&>button]:hover:bg-gray-200 [&>button]:hover:text-gray-800">
        <div className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50">
          {/* Скрытые элементы для доступности */}
          <DialogTitle className="sr-only">Быстрый заказ</DialogTitle>
          <DialogDescription className="sr-only">
            Форма быстрого заказа для получения консультации по подарочным сертификатам глэмпинга
          </DialogDescription>
          
          {/* Декоративные элементы */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
          
          {/* Content */}
          <form onSubmit={handleSubmit} className="p-8">
            {isSuccess ? (
              /* Success screen */
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Заявка отправлена! 🎉
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Наш менеджер свяжется с вами в течение 5 минут
                </p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Ожидайте звонка</span>
                  </div>
                  <p className="text-green-700">
                    Номер: <strong className="text-green-800">{phone}</strong>
                  </p>
                </div>
              </div>
            ) : (
              /* Form content */
              <>
                {/* Заголовок формы */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Быстрый заказ</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch">
                  {/* Левая колонка - поля ввода */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Phone input */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                            <Phone className="w-4 h-4 text-white" />
                          </div>
                          <Label htmlFor="phone" className="text-base font-semibold text-gray-900">
                            Ваш номер телефона
                          </Label>
                        </div>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 z-10">
                            <span className="text-xl">🇷🇺</span>
                          </div>
                          <Input
                            id="phone"
                            type="text"
                            placeholder="+7 (999) 123-45-67"
                            value={phone}
                            onChange={handlePhoneChange}
                            autoComplete="new-password"
                            className="pl-16 h-12 text-lg bg-gray-50 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 rounded-xl transition-all duration-200 text-gray-900 [&:-webkit-autofill]:!bg-emerald-50 [&:-webkit-autofill]:!text-emerald-800 [&:-webkit-autofill]:![-webkit-text-fill-color:#059669] [&:-webkit-autofill]:![-webkit-box-shadow:0_0_0px_1000px_rgb(236_253_245)_inset]"
                            style={{ 
                              WebkitTextFillColor: '#111827 !important', 
                              color: '#111827 !important',
                              WebkitBoxShadow: '0 0 0px 1000px rgb(249, 250, 251) inset !important',
                              backgroundColor: 'rgb(249, 250, 251) !important'
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact method */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <MessageCircle className="w-4 h-4 text-white" />
                          </div>
                          <Label className="text-base font-semibold text-gray-900">
                            Как с вами связаться?
                          </Label>
                        </div>
                        <RadioGroup value={contactMethod} onValueChange={setContactMethod}>
                          <div className="grid grid-cols-3 gap-3">
                            <Label
                              htmlFor="phone-contact"
                              className={`
                                relative flex items-center justify-center p-3 pr-8 rounded-lg border-2 cursor-pointer transition-all duration-200
                                ${contactMethod === 'phone' 
                                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                                  : 'border-gray-200 hover:border-gray-300 bg-white'
                                }
                              `}
                            >
                              <RadioGroupItem value="phone" id="phone-contact" className="sr-only" />
                              <span className="font-medium text-sm text-[12px] text-left">По телефону</span>
                              <Phone className="w-3.5 h-3.5 absolute top-1.5 right-1.5 opacity-50" />
                            </Label>
                            <Label
                              htmlFor="whatsapp-contact"
                              className={`
                                relative flex items-center justify-center p-3 pr-8 rounded-lg border-2 cursor-pointer transition-all duration-200
                                ${contactMethod === 'whatsapp' 
                                  ? 'border-green-500 bg-green-50 text-green-700' 
                                  : 'border-gray-200 hover:border-gray-300 bg-white'
                                }
                              `}
                            >
                              <RadioGroupItem value="whatsapp" id="whatsapp-contact" className="sr-only" />
                              <span className="font-medium text-sm">В WhatsApp</span>
                              <MessageCircle className="w-3.5 h-3.5 absolute top-1.5 right-1.5 opacity-50" />
                            </Label>
                            <Label
                              htmlFor="telegram-contact"
                              className={`
                                relative flex items-center justify-center p-3 pr-8 rounded-lg border-2 cursor-pointer transition-all duration-200
                                ${contactMethod === 'telegram' 
                                  ? 'border-blue-500 bg-blue-50 text-blue-700' 
                                  : 'border-gray-200 hover:border-gray-300 bg-white'
                                }
                              `}
                            >
                              <RadioGroupItem value="telegram" id="telegram-contact" className="sr-only" />
                              <span className="font-medium text-sm">В Телеграме</span>
                              <Send className="w-3.5 h-3.5 absolute top-1.5 right-1.5 opacity-50" />
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  {/* Правая колонка - информация "Как работает" - теперь на половину экрана */}
                  <div className="lg:col-span-2">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-bold text-blue-900">
                          Как работает «Заказ в 1 клик»?
                        </h4>
                      </div>
                      <ul className="space-y-3 flex-1 flex flex-col justify-center">
                        {[
                          { icon: "⚡", text: "Менеджер свяжется с вами в течение 5 минут" },
                          { icon: "🎯", text: "Поможет выбрать подходящий сертификат" },
                          { icon: "📦", text: "Расскажет о доставке и оплате" },
                          { icon: "🕘", text: "Работаем с 9:00 до 21:00 ежедневно" }
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                            <span className="text-blue-800 text-sm leading-relaxed">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Блок заказа на всю ширину */}
                {orderSummary && (
                  <div className="mt-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-5 border border-emerald-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                        <Moon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-emerald-900">
                        Ваш заказ
                      </h4>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="flex justify-between items-center">
                        <span className="text-emerald-800 text-sm">Сертификатов:</span>
                        <span className="font-medium text-emerald-900">{orderSummary.totalCertificates}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-emerald-800 text-sm">Общее количество ночей:</span>
                        <span className="font-medium text-emerald-900">{orderSummary.totalNights}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-emerald-800 font-medium">Итого:</span>
                        <span className="text-xl font-bold text-emerald-900">
                          {orderSummary.totalPrice.toLocaleString()} ₽
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {!isSuccess && (
              <div className="mt-6 space-y-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                {/* Agreement */}
                <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-xl">
                  <Checkbox
                    id="agreement"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    className="mt-1 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                  />
                  <Label htmlFor="agreement" className="text-sm text-gray-700 leading-relaxed">
                    Согласен с <a href="#" className="text-emerald-600 hover:text-emerald-700 underline text-[11px]">Пользовательским соглашением</a> и <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">Политикой обработки персональных данных</a>
                  </Label>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={phone.replace(/\D/g, '').length < 11 || !agreed || isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Обрабатываем заявку...
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <HeartHandshake className="w-5 h-5" />
                      Заказать сертификат
                    </div>
                  )}
                </Button>
              </div>
            )}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}