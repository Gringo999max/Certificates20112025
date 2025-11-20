import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { HowItWorksModal, CertificateType } from './HowItWorksModal'

interface FAQSectionProps {
  onNavigateToHowItWorks?: () => void
  isOnHowItWorksPage?: boolean
  certificateType?: CertificateType
}

const FAQSection = ({ onNavigateToHowItWorks, isOnHowItWorksPage = false, certificateType = 'default' }: FAQSectionProps) => {
  const [isHowItWorksModalOpen, setIsHowItWorksModalOpen] = useState(false)
  const faqData = [
    {
      question: "Кто выбирает глэмпинг и дату заезда?",
      answer: (
        <span>
          Человек, получивший сертификат, сам выбирает глэмпинг или эко-отель и дату заезда. На это у них есть <strong>2 года</strong> с момента покупки.
        </span>
      )
    },
    {
      question: "Как использовать сертификат?",
      answer: "Для бронирования достаточно ввести уникальный промокод из сертификата на странице оплаты. Таким образом получатель подарочного сертификата может забронировать проживание в любом объекте из нашей базы онлайн, в режиме реального времени."
    },
    {
      question: "Как выглядит подарочный сертификат?",
      answer: "Электронный сертификат моментально отправляется на вашу электронную почту после оплаты. Его можно распечатать или переслать получателю. Цена подарка нигде не указывается."
    },
    {
      question: "Почему подарочный сертификат на Глэмпинги.рф - лучший сертификат для отдыха на природе?",
      answer: (
        <div>
          <p className="mb-4 font-bold">Мы предлагаем уникальное сочетание преимуществ:</p>
          <ul className="space-y-2 mb-4">
            <li>• Подарок с открытой датой заезда</li>
            <li>• Выбор из проверенных глэмпингов с высокими рейтингами</li>
            <li>• Идеальное решение, если вы не знаете точных планов получателя</li>
          </ul>
          <p className="mb-4 font-bold">Главное наше отличие от других сервисов:</p>
          <ul className="space-y-2">
            <li>• Собственная технологичная платформа онлайн-тревел-агентства (OTA)</li>
            <li>• Работаем с объектами по паритету цен, без накруток</li>
            <li>• Мгновенное онлайн-бронирование без звонков и ожидания</li>
            <li>• Получатель сразу получает подтверждение бронирования</li>
          </ul>
        </div>
      )
    },
    {
      question: "Как получить и оплатить сертификат?",
      answer: "При выборе электронного сертификата он поступит на вашу почту сразу после оплаты на сайте."
    },
    {
      question: "Какой срок действия сертификата?",
      answer: (
        <span>
          Срок действия сертификатов — <strong>2 года</strong> с момента покупки.
        </span>
      )
    },
    {
      question: "Что будет, если выбранный объект дороже/дешевле номинала сертификата?",
      answer: (
        <ul className="space-y-2">
          <li>• Если выбранный глэмпинг <strong>дороже номинала сертификата</strong>, получатель сможет просто доплатить разницу при бронировании на сайте</li>
          <li>• Если глэмпинг <strong>дешевле номинала сертификата</strong>, остаток средств сохранится на счете сертификата, и его можно будет использовать для оплаты следующих бронирований</li>
        </ul>
      )
    },
    {
      question: "Дороже ли у вас, чем напрямую в глэмпинге?",
      answer: (
        <ul className="space-y-2">
          <li>• Стоимость глэмпингов аналогична ценам при бронировании напрямую</li>
          <li>• Мы большое онлайн тревел агенство (OTA) — работаем по паритету цен</li>
          <li>• Отличаемся от других сервисов, которые продают сертификаты с накруткой</li>
          <li>• Получатель сам выбирает объект и доступные даты онлайн</li>
          <li>• Не нужно звонить и ждать согласования — мгновенное бронирование</li>
        </ul>
      )
    },
    {
      question: "Чем глэмпинг отличается от обычного отеля или кемпинга?",
      answer: "Глэмпинг — это сочетание комфорта отельного номера с возможностью жить на природе. В отличие от палаточного кемпинга, вам не нужно везти с собой снаряжение — в глэмпингах есть все удобства, включая кровать, санузел и электричество. А от отеля его отличает уникальная атмосфера единения с природой и живописное расположение, которое не всегда доступно отелям."
    },
    {
      question: "Какие гарантии, что все будет хорошо?",
      answer: (
        <ul className="space-y-2">
          <li>• Согласно публичной оферте, с каждым глэмпингом и экоотелем у нас заключен договор, который гарантирует выполнение наших обязательств в установленные сроки</li>
          <li>• У нас амбициозные планы на будущее, и мы не заинтересованы в отрицательных отзывах о нашем сервисе</li>
        </ul>
      )
    },
    {
      question: "Что делать, если бронирование срывается по вине глэмпинга?",
      answer: "Такие случаи крайне редки, так как все объекты в нашей базе проверены. Однако, если это произойдет, получателю будет предоставлен новый сертификат на ту же сумму. Глэмпинг, по вине которого сорвалось бронирование, будет оштрафован нами в соответствии с договором."
    },
    {
      question: "Можно ли отправиться в глэмпинг или эко-отель с детьми?",
      answer: "Да, можно."
    },
    {
      question: "Можно ли отправиться в глэмпинг или эко-отель с питомцем?",
      answer: (
        <ul className="space-y-2">
          <li>• В большинство глэмпингов можно отправиться с питомцем</li>
          <li>• У нас есть специальные фильтры для поиска pet-friendly объектов</li>
          <li>• При бронировании нужно указать, что планируется путешествие с питомцами</li>
          <li>• Отображаются только те глэмпинги, где возможно размещение с питомцами</li>
          <li>• За проживание с питомцами может взиматься дополнительная плата на месте</li>
          <li>• Размер платы указывается в карточке глэмпинга</li>
        </ul>
      )
    },
    {
      question: "Где находятся глэмпинги и экоотели?",
      answer: "Большинство глэмпингов расположены вблизи Москвы, Санкт-Петербурга, Казани, Сочи, Екатеринбурга, Нижнего Новгорода, Самары и других крупных городов. Также есть отели в популярных туристических местах: в Карелии, на Кавказе, на Байкале, на Алтае, в Калининграде и других."
    },
    {
      question: "Можно ли купить сертификат для себя?",
      answer: "Если вы уже выбрали отель и хотите купить сертификат для себя, лучше бронировать глэмпинг или эко-отель напрямую на нашем сайте."
    }
  ]

  return (
    <section className="py-4 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-gray-900 mb-4 font-bold text-[36px]">Частые задаваемы вопросы (FAQ)</h2>
          <div className="text-gray-600 max-w-2xl mx-auto">
            <p className="mb-2 text-[20px]">
              Обязательно посмотрите{' '}
              <button 
                className="text-green-600 hover:text-green-700 underline transition-colors text-[20px]"
                onClick={() => {
                  if (isOnHowItWorksPage) {
                    setIsHowItWorksModalOpen(true)
                  } else if (onNavigateToHowItWorks) {
                    onNavigateToHowItWorks()
                  }
                }}
              >
                как это работает
              </button>
            </p>
            <p className="text-[20px]">Если останутся вопросы — ищите ответы ниже.</p>
          </div>
        </div>
        
        <Accordion type="multiple" className="w-full space-y-6">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-gray-200 pb-2"
            >
              <AccordionTrigger className="py-6 text-left hover:no-underline [&[data-state=open]>.plus-icon]:hidden [&[data-state=open]>.minus-icon]:block [&>svg]:hidden">
                <span className="text-gray-900 hover:text-green-600 transition-colors text-[20px] pr-4">
                  {faq.question}
                </span>
                <div className="shrink-0">
                  <Plus className="plus-icon h-6 w-6 text-gray-500 hover:text-green-600 transition-colors" />
                  <Minus className="minus-icon h-6 w-6 text-gray-500 hover:text-green-600 transition-colors hidden" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="text-gray-600 leading-relaxed text-[18px]">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Модальное окно "Как это работает" */}
      <HowItWorksModal 
        isOpen={isHowItWorksModalOpen}
        onClose={() => setIsHowItWorksModalOpen(false)}
        certificateType={certificateType}
      />
    </section>
  )
}

export default FAQSection