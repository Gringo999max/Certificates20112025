import React from 'react'
import { Header } from './Header'
import Footer from './Footer'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { 
  Mail, 
  MapPin, 
  Truck, 
  Package, 
  CreditCard, 
  RotateCcw,
  Clock,
  Zap,
  Building,
  Globe,
  FileText
} from 'lucide-react'
import certificateImage from 'figma:asset/fb9a51260de5a817061843b770e3d65e5d7b55a5.png'
import yandexMarketLogo from 'figma:asset/e541c82dc1d16b0d9828d030bd1bc8326253560e.png'
import pyaterochkaLogo from 'figma:asset/586894e1eb9ab400cb190afffd6aede6c08cfdcd.png'
import perekrestokLogo from 'figma:asset/57ea8bdd40eda2a30d273d0efc117ab1b9064f5e.png'

interface DeliveryPaymentPageProps {
  onNavigateToHome: () => void
  onNavigateToGiftOptions: () => void
  onNavigateToDelivery: () => void
  onNavigateToCorporate: () => void
  onNavigateToReviews: () => void
  onNavigateToAbout: () => void
  onNavigateToActivation?: () => void
}

const deliveryOptions = [
  {
    title: 'Моментальное получение',
    subtitle: 'по электронной почте',
    description: 'Самый быстрый вариант. Сертификат в электронном виде отправится на электронную почту сразу после оплаты. Его можно распечатать или просто переслать получателю.',
    details: [
      'Срок доставки: мгновенно',
      'Стоимость доставки: 0 ₽',
      'Оплата: картой на сайте'
    ],
    icon: Mail,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50',
    badge: 'Быстро',
    badgeColor: 'bg-blue-100 text-blue-700'
  },
  {
    title: 'Пункт выдачи',
    subtitle: 'по всей России',
    description: 'Помимо Москвы, доставка осуществляется в 1000 городов России в ПВЗ Яндекс Маркет, Пятёрочка и Перекрёсток. Удобное место получения смотрите на сайте службы доставки.',
    details: [
      'Срок доставки: от 3-х рабочих дней',
      'Стоимость доставки: 300 ₽',
      'Оплата: картой на сайте'
    ],
    icon: Package,
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-50',
    badge: 'По России',
    badgeColor: 'bg-purple-100 text-purple-700'
  },
  {
    title: 'Курьерская доставка',
    subtitle: 'по Москве',
    description: 'Курьеры работают каждый день и доставят сертификат в удобный для вас промежуток времени.',
    details: [
      {
        type: 'Стандартная доставка',
        info: [
          'Срок: 1—2 дня',
          'Оплата: картой на сайте'
        ]
      },
      {
        type: 'Быстрая доставка',
        info: [
          'Доступна в пределах МКАД, при заказе с 11:00 до 19:00 в будни и с 11:00 о 17:00 в выходные.',
          'Срок: 2 часа с момента подтверждения заказа',
          'Стоимость доставки: 900 ₽',
          'Оплата: картой на сайте'
        ]
      }
    ],
    icon: Truck,
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-50',
    badge: 'Популярно',
    badgeColor: 'bg-orange-100 text-orange-700'
  },
  {
    title: 'Самовывоз из офиса',
    subtitle: 'в центре Москвы',
    description: null, // Будет отображаться кастомная структура
    details: [
      'Стоимость доставки: 0 ₽',
      'Оплата: картой при получении или на сайте',
      'Есть бесплатная парковка прямо у офиса'
    ],
    icon: Building,
    iconColor: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    badge: 'Бесплатно',
    badgeColor: 'bg-emerald-100 text-emerald-700'
  }
]

const paymentMethods = [
  {
    title: 'Банковской картой',
    description: 'Если заказ забирается самовывозом в офисе, то оплата осуществляется картой в офисе. Оплата курьеру не осуществляется.',
    details: 'Для выбора оплаты товара с помощью банковской карты на соответствующей странице необходимо нажать кнопку «Оплата заказа» банковской картой. Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем:',
    securityInfo: 'Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB.',
    icon: CreditCard,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    title: 'Возврат товара',
    description: 'Срок возврата товара составляет 14 дней с момента его получения.',
    details: 'Возврат переведённых средств, производится на ваш банковский счёт в течение 10 рабочих дней (срок зависит от банка, который выдал вашу банковскую карту).',
    icon: RotateCcw,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50'
  }
]

const companyRequisites = [
  { label: 'Название организации', value: 'ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ ГРИНИН МИХАИЛ ВИКТОРОВИЧ' },
  { label: 'Юридический адрес организации', value: '123007, РОССИЯ, Г МОСКВА, Г МОСКВА, ХОРОШЁВСКОЕ ШОССЕ, Д 25А, КОРП 3, КВ 428' },
  { label: 'ИНН', value: '771978267128' },
  { label: 'ОГРН/ОГРНИП', value: '322774600392121' },
  { label: 'Расчетный счет', value: '40802810400003421263' },
  { label: 'Банк', value: 'АО \"ТИНЬКОФФ БАНК\"' },
  { label: 'ИНН банка', value: '7710140679' },
  { label: 'БИК банка', value: '044525974' },
  { label: 'Корреспондентский счет банка', value: '30101810145250000974' },
  { label: 'Юридический адрес банка', value: 'Москва, 127287, ул. Хуторская 2-я, д. 38А, стр. 26' }
]

export function DeliveryPaymentPage({ onNavigateToHome, onNavigateToGiftOptions, onNavigateToDelivery, onNavigateToCorporate, onNavigateToReviews, onNavigateToAbout, onNavigateToActivation }: DeliveryPaymentPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        onNavigateToHome={onNavigateToHome}
        onNavigateToGiftOptions={onNavigateToGiftOptions}
        onNavigateToDelivery={onNavigateToDelivery}
        onNavigateToCorporate={onNavigateToCorporate}
        onNavigateToReviews={onNavigateToReviews}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToActivation={onNavigateToActivation}
      />      
      {/* Hero Section */}
      <section className="w-full px-6 py-12 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Способы доставки
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            От мгновенной доставки на email до курьерской доставки по всей Росии
          </p>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="w-full px-6 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {deliveryOptions.map((option, index) => {
              const IconComponent = option.icon
              
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`${option.bgColor} p-3 rounded-xl`}>
                        <IconComponent className={`w-6 h-6 ${option.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{option.title}</h3>
                          <Badge className={option.badgeColor}>{option.badge}</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{option.subtitle}</p>
                        
                        {/* Бейджи партнеров для Пункта выдачи */}
                        {option.title === 'Пункт выдачи' && (
                          <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                            <div className="bg-orange-50 border border-orange-200 px-2 py-1 rounded flex items-center gap-1 whitespace-nowrap">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                              <span className="text-[10px] font-medium text-orange-700">Яндекс Маркет</span>
                            </div>
                            <div className="bg-green-50 border border-green-200 px-2 py-1 rounded flex items-center gap-1 whitespace-nowrap">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                              <span className="text-[10px] font-medium text-green-700">Пятёрочка</span>
                            </div>
                            <div className="bg-red-50 border border-red-200 px-2 py-1 rounded flex items-center gap-1 whitespace-nowrap">
                              <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                              <span className="text-[10px] font-medium text-red-700">Перекрёсток</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Логотипы партнеров для Пункта выдачи - скрыты на мобильной */}
                    {option.title === 'Пункт выдачи' && (
                      <div className="hidden md:flex flex-col gap-2 items-end flex-shrink-0">
                        <div className="flex items-center gap-2">
                          <img src={yandexMarketLogo} alt="Яндекс Маркет" className="h-5 w-auto object-contain" />
                          <img src={perekrestokLogo} alt="Перекрёсток" className="h-5 w-auto object-contain" />
                        </div>
                        <img src={pyaterochkaLogo} alt="Пятёрочка" className="h-6 w-auto object-contain mr-2" />
                      </div>
                    )}
                  </div>
                  
                  {option.title === 'Пункт выдачи' ? (
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Помимо Москвы, доставка осуществляется в 1000 городов России в ПВЗ Яндекс Маркет, Пятёрочка и Перекрёсток. Удобное место получения смотрите на{' '}
                      <a 
                        href="https://dostavka.yandex.ru/pickup-point/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-600 underline hover:text-emerald-700"
                      >
                        сайте службы доставки
                      </a>.
                    </p>
                  ) : option.title === 'Моментальное получение' ? (
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Самый быстрый вариант.{' '}
                      <HoverCard openDelay={200} closeDelay={100}>
                        <HoverCardTrigger asChild>
                          <span className="text-emerald-600 underline decoration-dotted cursor-help hover:text-emerald-700">
                            Сертификат в электронном виде
                          </span>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 p-0 border-none shadow-2xl" side="top">
                          <div className="bg-white rounded-lg overflow-hidden">
                            <img 
                              src={certificateImage} 
                              alt="Пример электронного сертификата" 
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                      {' '}отправится на электронную почту сразу после оплаты. Его можно распечатать или просто переслать получателю.
                    </p>
                  ) : option.title === 'Самовывоз из офиса' ? (
                    <div className="text-gray-700 mb-4 leading-relaxed space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Мы находимся по адресу: г. Москва, Хорошёвское шоссе, д. 25А, корп. 3, ЖК «Династия».</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Ближайшие станции метро — «Полежаевская» или «Хорошёвская». Дорога от метро займёт 3–4 минуты.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium mb-1">Часы работы</p>
                          <p className="text-sm text-gray-600">По будням: с 10:00 до 21:00</p>
                          <p className="text-sm text-gray-600">По выходным: с 11:00 до 18:00</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Перед визитом, пожалуйста, оформите заказ на сайте или по телефону. На сборку нам потребуется не менее часа.</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-700 mb-4 leading-relaxed">{option.description}</p>
                  )}
                  
                  <div className="space-y-2">
                    {Array.isArray(option.details) ? (
                      option.details.map((detail, detailIndex) => (
                        <div key={detailIndex}>
                          {typeof detail === 'string' ? (
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                              <span className="w-1 h-1 bg-emerald-500 rounded-full inline-block"></span>
                              {detail}
                            </p>
                          ) : (
                            <div className="mb-3">
                              <p className="font-medium text-gray-800 mb-1">{detail.type}</p>
                              {detail.info.map((info, infoIndex) => (
                                <p key={infoIndex} className="text-sm text-gray-600 flex items-center gap-2 ml-4">
                                  <span className="w-1 h-1 bg-gray-400 rounded-full inline-block"></span>
                                  {info}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      option.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1 h-1 bg-emerald-500 rounded-full inline-block"></span>
                          {detail}
                        </p>
                      ))
                    )}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Requisites */}
      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center leading-tight tracking-tight">
            Реквизиты Глэмпинги.рф
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Юридическая информация и банковские реквизиты нашей компании
          </p>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gray-50 border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-emerald-50 p-3 rounded-xl">
                  <FileText className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Реквизиты</h3>
                  <p className="text-gray-600">Официальная информация об организации</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {companyRequisites.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                      <div className="sm:w-1/3">
                        <p className="text-sm font-medium text-gray-700">{item.label}</p>
                      </div>
                      <div className="sm:w-2/3">
                        <p className="text-gray-900">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="w-full px-6 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center leading-tight tracking-tight">
            Способы и описание оплаты
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Безопасные и удобные способы оплаты ваших сертификатов
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {paymentMethods.map((method, index) => {
              const IconComponent = method.icon
              
              return (
                <Card key={index} className="p-6 bg-white border border-gray-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${method.bgColor} p-3 rounded-xl`}>
                      <IconComponent className={`w-6 h-6 ${method.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{method.description}</p>
                  
                  {method.details && (
                    <div className="mb-4">
                      <p className="text-gray-600 leading-relaxed">{method.details}</p>
                    </div>
                  )}

                  {method.title === 'Банковской картой' && (
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gray-100 px-3 py-1 rounded text-sm font-medium text-gray-600">МІР</div>
                      <div className="bg-gray-100 px-3 py-1 rounded text-sm font-medium text-gray-600">VISA</div>
                      <div className="bg-gray-100 px-3 py-1 rounded text-sm font-medium text-gray-600">MasterCard</div>
                      <div className="bg-gray-100 px-3 py-1 rounded text-sm font-medium text-gray-600">JCB</div>
                    </div>
                  )}
                  
                  {method.securityInfo && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 leading-relaxed">{method.securityInfo}</p>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 py-12 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  Не можете выбрать?
                </h3>
                <p className="text-gray-600">
                  Мы поможем выбрать оптимальный способ доставки и ответим на все вопросы
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Связаться с нами
              </Button>
              <Button 
                variant="outline" 
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                onClick={onNavigateToGiftOptions}
              >
                Выбрать сертификат
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DeliveryPaymentPage