import React, { useState } from 'react'
import { Header } from './Header'
import Footer from './Footer'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { CheckCircle, MapPin, Users, Clock, Gift, Star, ArrowRight, ExternalLink } from 'lucide-react'

interface CertificateActivationPageProps {
  onNavigateToHome: () => void
  onNavigateToGiftOptions: () => void
  onNavigateToDelivery: () => void
  onNavigateToCorporate: () => void
  onNavigateToReviews: () => void
  onNavigateToAbout: () => void
  onNavigateToActivation?: () => void
  onNavigateToHowItWorks?: () => void
}

export function CertificateActivationPage({ 
  onNavigateToHome, 
  onNavigateToGiftOptions, 
  onNavigateToDelivery, 
  onNavigateToCorporate, 
  onNavigateToReviews, 
  onNavigateToAbout,
  onNavigateToActivation,
  onNavigateToHowItWorks
}: CertificateActivationPageProps) {

  const glampings = [
    {
      id: 1,
      title: "Карелия",
      description: "Комфортный домик на берегу озера",
      price: "от 10.000 рублей",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwaG91c2UlMjBydXNzaWF8ZW58MXx8fHwxNzU4MDI3MzU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "Ленинградская область",
      description: "Уютный домик в лесу",
      price: "от 8.000 рублей",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBjYWJpbiUyMHJ1c3NpYXxlbnwxfHx8fDE3NTgwMjczNTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "Московская область",
      description: "Купольный шатёр для самых романтичных",
      price: "от 11.000 рублей",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb21lJTIwdGVudCUyMGdsYW1waW5nfGVufDF8fHx8MTc1ODAyNzM2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      title: "Дагестан",
      description: "Домики с самых красивым видом на горы",
      price: "от 7.000 рублей",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNhYmluJTIwdmlld3xlbnwxfHx8fDE3NTgwMjczNjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ]

  const reviews = [
    {
      id: 1,
      author: "@sergey_p",
      text: "Жена подарила мне этот сертификат — это было просто волшебно! Давно мечтал выбраться из города. Поездка полностью превзошла ожидания: полная перезагрузка в невероятно комфортных условиях.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGhhcHB5fGVufDF8fHx8MTc1ODAyNzM2OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      author: "@anna.vasileva",
      text: "Искала особенный подарок на юбилей подруге — что-то большее, чем просто вещь. Сертификат от Глэмпинги.рф стал хитом! Она до сих пор в восторге от своих выходных. Серьезно, лучшая идея для подарка!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwaGFwcHl8ZW58MXx8fHwxNzU4MDI3MzcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      author: "@vika_travels",
      text: "Лучший подарок — это впечатления! Благодаря сертификату от Глэмпинги.рф мы провели выходные, о которых давно мечтали. Полное погружение в сказочную атмосферу и чистое расслабление.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfHx8fDE3NTgwMjczNzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header 
        onNavigateToHome={onNavigateToHome}
        onNavigateToGiftOptions={onNavigateToGiftOptions}
        onNavigateToDelivery={onNavigateToDelivery}
        onNavigateToCorporate={onNavigateToCorporate}
        onNavigateToReviews={onNavigateToReviews}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToActivation={onNavigateToActivation}
        onNavigateToHowItWorks={onNavigateToHowItWorks}
      />

      {/* Breadcrumbs */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex text-sm text-gray-600">
            <button onClick={onNavigateToHome} className="hover:text-emerald-600 transition-colors">
              Главная
            </button>
            <span className="mx-2">›</span>
            <span className="text-gray-900">Инструкция по активации сертификата</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Активация <span className="text-emerald-600">сертификата</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Простая инструкция в 3 шага для активации вашего подарочного сертификата 
            и выбора идеального места для отдыха
          </p>
          <Badge className="bg-emerald-100 text-emerald-700 px-6 py-2">
            <Gift className="w-4 h-4 mr-2" />
            Готовы к приключению?
          </Badge>
        </div>
      </section>

      {/* Design Variants Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Выберите дизайн</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Два варианта оформления инструкции - выберите тот, который вам больше нравится
            </p>
          </div>

          <Tabs defaultValue="modern" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="modern">Современный</TabsTrigger>
              <TabsTrigger value="classic">Классический</TabsTrigger>
            </TabsList>

            {/* Modern Design */}
            <TabsContent value="modern">
              <div className="space-y-16">
                {/* Steps Section - Modern */}
                <div className="space-y-12">
                  {/* Step 1 */}
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                      <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-8 lg:p-12 flex flex-col justify-between">
                        <div>
                          <Badge className="bg-white/20 text-white border-white/30 mb-6">
                            Шаг 01
                          </Badge>
                          <h3 className="text-3xl font-bold mb-4">
                            Выберите глэмпинг или эко-отель
                          </h3>
                          <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-emerald-200 mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-medium mb-1">Выберите категории</p>
                                <p className="text-emerald-100 text-sm">
                                  Укажите желаемые даты поездки, регион и количество человек
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <MapPin className="w-5 h-5 text-emerald-200 mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-medium mb-1">Воспользуйтесь картой</p>
                                <p className="text-emerald-100 text-sm">
                                  Посмотрите расположение объектов на интерактивной карте
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-white text-emerald-600 hover:bg-gray-100 w-fit">
                          Перейти в каталог
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                      <div className="relative">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHNlYXJjaHxlbnwxfHx8fDE3NTgwMjczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Поиск глэмпинга"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </Card>

                  {/* Step 2 */}
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                      <div className="relative lg:order-2">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29raW5nJTIwZm9ybXxlbnwxfHx8fDE3NTgwMjczODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Оформление бронирования"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative bg-gradient-to-br from-amber-500 to-orange-500 text-white p-8 lg:p-12 flex flex-col justify-between lg:order-1">
                        <div>
                          <Badge className="bg-white/20 text-white border-white/30 mb-6">
                            Шаг 02
                          </Badge>
                          <h3 className="text-3xl font-bold mb-4">
                            Оформите бронирование
                          </h3>
                          <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                              <Users className="w-5 h-5 text-amber-200 mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-medium mb-1">Данные</p>
                                <p className="text-amber-100 text-sm">
                                  Заполните контактные данные и введите код купона из сертификата
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-amber-200 mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-medium mb-1">Оплата</p>
                                <p className="text-amber-100 text-sm">
                                  Выберите способ оплаты, если стоимость больше номинала сертификата
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-white text-amber-600 hover:bg-gray-100 w-fit">
                          Перейти в каталог
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Step 3 */}
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 lg:p-12 flex flex-col justify-between">
                        <div>
                          <Badge className="bg-white/20 text-white border-white/30 mb-6">
                            Шаг 03
                          </Badge>
                          <h3 className="text-3xl font-bold mb-4">
                            Подготовьтесь к волшебной поездке
                          </h3>
                          <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                              <Clock className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-medium mb-1">Подтверждение</p>
                                <p className="text-blue-100 text-sm">
                                  Подтверждение бронирования придёт автоматически на электронную почту 
                                  с информацией о глэмпинге и его контактами
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-white text-blue-600 hover:bg-gray-100 w-fit">
                          Перейти в каталог
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                      <div className="relative">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maXJtYXRpb24lMjBlbWFpbHxlbnwxfHx8fDE3NTgwMjczODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Подтверждение бронирования"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Classic Design */}
            <TabsContent value="classic">
              <div className="space-y-16">
                {/* Steps Section - Classic */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Step 1 */}
                  <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-emerald-600">01</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Выберите глэмпинг
                    </h3>
                    <div className="mb-6">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHNlYXJjaHxlbnwxfHx8fDE3NTgwMjczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Поиск глэмпинга"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        Выберите категории и даты
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-500" />
                        Воспользуйтесь картой
                      </li>
                    </ul>
                  </Card>

                  {/* Step 2 */}
                  <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                    <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-amber-600">02</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Оформите бронирование
                    </h3>
                    <div className="mb-6">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29raW5nJTIwZm9ybXxlbnwxfHx8fDE3NTgwMjczODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Оформление бронирования"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-amber-500" />
                        Заполните данные
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-500" />
                        Выберите способ оплаты
                      </li>
                    </ul>
                  </Card>

                  {/* Step 3 */}
                  <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-blue-600">03</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Подготовьтесь к поездке
                    </h3>
                    <div className="mb-6">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maXJtYXRpb24lMjBlbWFpbHxlbnwxfHx8fDE3NTgwMjczODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Подтверждение бронирования"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                      <li className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        Получите подтверждение
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gift Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-6">
          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Вы получили <span className="text-emerald-600">классный подарок</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Хотите порадовать кого‑то таким же сертификатом? У нас более 400 глэмпингов 
                  и эко-отелей, готовых принять вас в любое время.
                </p>
                <Button 
                  size="lg" 
                  className="bg-emerald-600 hover:bg-emerald-700 w-fit"
                  onClick={onNavigateToGiftOptions}
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Сделать подарок
                </Button>
              </div>
              <div className="relative bg-gradient-to-br from-emerald-100 to-green-100">
                <div className="absolute inset-0 bg-emerald-600/10"></div>
                <div className="relative z-10 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <Gift className="w-24 h-24 text-emerald-600 mx-auto mb-4" />
                    <p className="text-emerald-700 font-medium">Подарите впечатления</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Glampings Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Где можно будет отдохнуть</h2>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              Перейти в каталог
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {glampings.map((glamping) => (
              <Card key={glamping.id} className="overflow-hidden border-0 hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={glamping.image}
                    alt={glamping.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{glamping.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{glamping.description}</p>
                  <p className="font-bold text-emerald-600">{glamping.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Отзывы счастливых получателей
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Узнайте, что говорят те, кто уже воспользовался нашими сертификатами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={review.avatar}
                      alt={review.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{review.author}</p>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <Gift className="w-16 h-16 text-white mx-auto mb-6" />
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Готовы активировать сертификат?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Следуйте простой инструкции и отправляйтесь в незабываемое путешествие
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Перейти в каталог
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 px-8"
                onClick={onNavigateToGiftOptions}
              >
                <Gift className="w-5 h-5 mr-2" />
                Купить сертификат
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-emerald-400 mb-2">глэмпинги.рф</h3>
            <p className="text-gray-400">Ваш идеальный глэмпинг всего в один клик</p>
          </div>
          <div className="flex justify-center gap-8 text-sm text-gray-400 mb-6">
            <button onClick={onNavigateToHome} className="hover:text-emerald-400 transition-colors">
              Главная
            </button>
            <button onClick={onNavigateToGiftOptions} className="hover:text-emerald-400 transition-colors">
              Сертификаты
            </button>
            <button onClick={onNavigateToReviews} className="hover:text-emerald-400 transition-colors">
              Отзывы
            </button>
            <button onClick={onNavigateToCorporate} className="hover:text-emerald-400 transition-colors">
              Корпоративные подарки
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            Создаем незабываемые впечатления от отдыха на природе. Спасибо, что выбираете нас!
          </p>
        </div>
      </footer>
    </div>
  )
}

export default CertificateActivationPage