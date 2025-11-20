import React, { useState } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { CheckCircle, Sparkles, Heart, Crown, Battery, Zap, Star, Gift, TrendingUp, Users } from 'lucide-react'
import { motion } from 'motion/react'

interface B2BPackagesByPriceV2VariantsProps {
  onRequestClick: () => void
}

export function B2BPackagesByPriceV2Variants({ onRequestClick }: B2BPackagesByPriceV2VariantsProps) {
  const [activeVariant, setActiveVariant] = useState<1 | 2 | 3>(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Переключатель вариантов */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={activeVariant === 1 ? 'default' : 'outline'}
            onClick={() => setActiveVariant(1)}
            className={activeVariant === 1 ? 'bg-emerald-600 hover:bg-emerald-700' : 'hover:bg-emerald-50'}
          >
            Вариант 1: По классу объектов
          </Button>
          <Button
            variant={activeVariant === 2 ? 'default' : 'outline'}
            onClick={() => setActiveVariant(2)}
            className={activeVariant === 2 ? 'bg-emerald-600 hover:bg-emerald-700' : 'hover:bg-emerald-50'}
          >
            Вариант 2: По эмоциональному результату
          </Button>
          <Button
            variant={activeVariant === 3 ? 'default' : 'outline'}
            onClick={() => setActiveVariant(3)}
            className={activeVariant === 3 ? 'bg-emerald-600 hover:bg-emerald-700' : 'hover:bg-emerald-50'}
          >
            Вариант 3: По WOW-эффекту
          </Button>
        </div>

        {/* Вариант 1: По классу объектов + глубине отдыха */}
        {activeVariant === 1 && <Variant1 onRequestClick={onRequestClick} />}

        {/* Вариант 2: По эмоциональному результату */}
        {activeVariant === 2 && <Variant2 onRequestClick={onRequestClick} />}

        {/* Вариант 3: По WOW-эффекту для команды */}
        {activeVariant === 3 && <Variant3 onRequestClick={onRequestClick} />}
      </div>
    </div>
  )
}

// ВАРИАНТ 1: ПО КЛАССУ ОБЪЕКТОВ + ГЛУБИНЕ ОТДЫХА
// Позиционирование: Чем выше цена → тем премиальнее объект + глубже перезагрузка
function Variant1({ onRequestClick }: { onRequestClick: () => void }) {
  const packages = [
    {
      badge: 'Базовый класс',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      price: 'от 10 000 ₽',
      subtitle: 'на человека',
      icon: <Sparkles className="w-8 h-8 text-emerald-600" />,
      experience: 'Выходные на природе',
      description: 'Отдых в уютных глэмпингах базового уровня комфорта',
      whatIncluded: [
        '300+ объектов базового класса',
        '2 ночи проживания',
        'Срок действия 12 месяцев'
      ],
      comparison: 'Дешевле 2 сессий у психолога (10-15к)',
      comparisonColor: 'bg-emerald-50 text-emerald-800',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
      borderColor: 'border-emerald-200 hover:border-emerald-400'
    },
    {
      badge: 'Комфорт класс',
      badgeColor: 'bg-teal-100 text-teal-700',
      price: 'от 20 000 ₽',
      subtitle: 'на человека',
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      experience: 'Комплексная перезагрузка',
      description: 'Отдых в благоустроенных глэмпингах среднего уровня',
      whatIncluded: [
        '200+ объектов комфорт-класса',
        '2-3 ночи проживания',
        'Повышенный уровень комфорта'
      ],
      comparison: 'Стоимость корпоративного тренинга на 1 день (20-30к)',
      comparisonColor: 'bg-teal-50 text-teal-800',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-teal-600 hover:bg-teal-700',
      borderColor: 'border-teal-300 hover:border-teal-500',
      popular: true
    },
    {
      badge: 'Премиум класс',
      badgeColor: 'bg-slate-100 text-slate-900',
      price: 'от 30 000 ₽',
      subtitle: 'на человека',
      icon: <Crown className="w-8 h-8 text-slate-900" />,
      experience: 'Глубокая перезагрузка',
      description: 'Отдых в эксклюзивных глэмпингах премиум-уровня',
      whatIncluded: [
        'Топ-100 премиум объектов',
        '3-4 ночи проживания',
        'Максимальный уровень комфорта'
      ],
      comparison: 'Меньше месячного абонемента в премиум фитнес-клуб (35-50к)',
      comparisonColor: 'bg-slate-50 text-slate-800',
      buttonText: 'Обсудить условия',
      buttonColor: 'bg-slate-900 hover:bg-slate-800',
      borderColor: 'border-slate-300 hover:border-slate-500'
    }
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl text-gray-900 mb-4">
          Инвестируйте в каждого сотрудника
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Выберите уровень комфорта, который получит каждый человек из вашей команды
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${pkg.borderColor} transition-all hover:shadow-xl relative ${pkg.popular ? 'ring-2 ring-teal-400 ring-offset-2' : ''}`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-teal-500 text-white px-4 py-1">
                  Популярный выбор
                </Badge>
              </div>
            )}

            {/* Header */}
            <div className="mb-6">
              <Badge className={`mb-4 ${pkg.badgeColor}`}>
                {pkg.badge}
              </Badge>
              
              {/* Цена */}
              <div className="mb-4">
                <div className="text-4xl text-gray-900 mb-1">{pkg.price}</div>
                <div className="text-sm text-gray-500">{pkg.subtitle}</div>
              </div>

              {/* Опыт */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                  {pkg.icon}
                </div>
                <div className="text-lg text-gray-900">{pkg.experience}</div>
              </div>
              
              <p className="text-sm text-gray-600">{pkg.description}</p>
            </div>

            {/* Что получает */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-3">Что получает:</div>
              <div className="space-y-2">
                {pkg.whatIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Сравнение */}
            <div className={`${pkg.comparisonColor} p-3 rounded-lg mb-6`}>
              <p className="text-xs">
                💡 <strong>Для сравнения:</strong> {pkg.comparison}
              </p>
            </div>

            {/* Button */}
            <Button
              onClick={onRequestClick}
              className={`w-full ${pkg.buttonColor} text-white py-6`}
            >
              {pkg.buttonText}
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12 max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border-2 border-emerald-200">
          <p className="text-gray-700 mb-2">
            <strong>Нет минимальной закупки!</strong> Можете заказать от 1 сертификата.
          </p>
          <p className="text-sm text-gray-600">
            Компании берут от 3 до 500+ сертификатов. Цена зависит только от выбранного пакета.
          </p>
        </div>
      </div>
    </div>
  )
}

// ВАРИАНТ 2: ПО ЭМОЦИОНАЛЬНОМУ РЕЗУЛЬТАТУ
// Позиционирование: Не про услуги, а про то, ЧТО ПОЧУВСТВУЕТ сотрудник
export function Variant2({ onRequestClick }: { onRequestClick: () => void }) {
  const packages = [
    {
      badge: 'Побег от рутины',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      price: 'от 10 000 ₽',
      subtitle: 'на человека',
      icon: <Battery className="w-8 h-8 text-emerald-600" />,
      experience: 'Короткая пауза',
      description: 'Дать мозгу отдохнуть от экранов и дедлайнов',
      whatIncluded: [
        'Базовый уровень объектов',
        'Простой отдых на природе',
        'Восстановление сна и настроения'
      ],
      result: 'Вернется с улыбкой в понедельник',
      resultColor: 'bg-emerald-100 text-emerald-800',
      comparison: 'Цена выходных в отеле (8-12к)',
      comparisonColor: 'bg-emerald-50 text-emerald-800',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
      borderColor: 'border-emerald-200 hover:border-emerald-400'
    },
    {
      badge: 'Восстановление энергии',
      badgeColor: 'bg-teal-100 text-teal-700',
      price: 'от 20 000 ₽',
      subtitle: 'на человека',
      icon: <Zap className="w-8 h-8 text-teal-600" />,
      experience: 'Полноценная перезагрузка',
      description: 'Восстановить силы для следующих месяцев работы',
      whatIncluded: [
        'Средний уровень объектов',
        'Комфортный отдых с природой',
        'Реальное восстановление ресурса'
      ],
      result: 'Вернется мотивированным на квартал',
      resultColor: 'bg-teal-100 text-teal-800',
      comparison: 'Стоимость 4 массажей (5к × 4 = 20к)',
      comparisonColor: 'bg-teal-50 text-teal-800',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-teal-600 hover:bg-teal-700',
      borderColor: 'border-teal-300 hover:border-teal-500',
      popular: true
    },
    {
      badge: 'Трансформация mindset',
      badgeColor: 'bg-slate-100 text-slate-900',
      price: 'от 30 000 ₽',
      subtitle: 'на человека',
      icon: <Star className="w-8 h-8 text-slate-900" />,
      experience: 'Смена перспективы',
      description: 'Выйти из операционки и переосмыслить приоритеты',
      whatIncluded: [
        'Премиум уровень объектов',
        'Пространство для размышлений',
        'Долгосрочный эффект на мышление'
      ],
      result: 'Вернется с новыми идеями и энергией',
      resultColor: 'bg-slate-200 text-slate-900',
      comparison: 'Дешевле бизнес-коуча (50-100к за сессию)',
      comparisonColor: 'bg-slate-50 text-slate-800',
      buttonText: 'Обсудить условия',
      buttonColor: 'bg-slate-900 hover:bg-slate-800',
      borderColor: 'border-slate-300 hover:border-slate-500'
    }
  ]

  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  // Center on middle card (20k package) on mobile
  React.useEffect(() => {
    if (scrollContainerRef.current && window.innerWidth < 768) {
      const container = scrollContainerRef.current
      const cardWidth = container.scrollWidth / packages.length
      const centerPosition = cardWidth * 1 - (container.clientWidth / 2) + (cardWidth / 2)
      container.scrollTo({ left: centerPosition, behavior: 'smooth' })
    }
  }, [])

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl text-gray-900 mb-4">
          Инвестируйте в каждого сотрудника
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Выберите эмоциональный результат, который получит каждый человек
        </p>
      </div>

      {/* Mobile: Horizontal scroll, Desktop: Grid */}
      <div 
        ref={scrollContainerRef}
        className="flex md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4 px-4 md:px-0"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${pkg.borderColor} transition-all hover:shadow-xl relative ${pkg.popular ? 'ring-2 ring-teal-400 ring-offset-2' : ''} flex-shrink-0 w-[85vw] md:w-auto snap-center`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-teal-500 text-white px-4 py-1">
                  Лучший выбор
                </Badge>
              </div>
            )}

            {/* Header */}
            <div className="mb-6">
              <Badge className={`mb-4 ${pkg.badgeColor}`}>
                {pkg.badge}
              </Badge>
              
              {/* Цена */}
              <div className="mb-4">
                <div className="text-4xl text-gray-900 mb-1">{pkg.price}</div>
                <div className="text-sm text-gray-500">{pkg.subtitle}</div>
              </div>

              {/* Опыт */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                  {pkg.icon}
                </div>
                <div className="text-lg text-gray-900">{pkg.experience}</div>
              </div>
              
              <p className="text-sm text-gray-600">{pkg.description}</p>
            </div>

            {/* Что получает */}
            <div className="mb-4">
              <div className="text-sm text-gray-500 mb-3">Что получает:</div>
              <div className="space-y-2">
                {pkg.whatIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Результат */}
            <div className={`${pkg.resultColor} p-3 rounded-lg mb-3`}>
              <p className="text-xs">
                ✨ <strong>Результат:</strong> {pkg.result}
              </p>
            </div>

            {/* Сравнение */}
            <div className={`${pkg.comparisonColor} p-3 rounded-lg mb-6`}>
              <p className="text-xs">
                💡 <strong>Для сравнения:</strong> {pkg.comparison}
              </p>
            </div>

            {/* Button */}
            <Button
              onClick={onRequestClick}
              className={`w-full ${pkg.buttonColor} text-white py-6`}
            >
              {pkg.buttonText}
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12 max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border-2 border-emerald-200">
          <p className="text-gray-700 mb-2">
            <strong>Нет минимальной закупки!</strong> Можете заказать от 1 сертификата.
          </p>
          <p className="text-sm text-gray-600">
            Компании берут от 3 до 500+ сертификатов. Цена зависит только от выбранного пакета.
          </p>
        </div>
      </div>
    </div>
  )
}

// ВАРИАНТ 3: ПО WOW-ЭФФЕКТУ ДЛЯ КОМАНДЫ
// Позиционирование: Как это повлияет на атмосферу в команде и восприятие компании
export function Variant3({ onRequestClick }: { onRequestClick: () => void }) {
  const packages = [
    {
      badge: 'Приятный сюрприз',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      price: 'от 10 000 ₽',
      subtitle: 'на человека',
      icon: <Gift className="w-8 h-8 text-emerald-600" />,
      experience: 'Заботливый жест',
      description: 'Показать команде, что их ценят',
      whatIncluded: [
        'Базовые объекты',
        'Приятный weekend подарок',
        '"Спасибо за работу" в действии'
      ],
      socialEffect: 'Расскажет друзьям: "Компания подарила отдых!"',
      socialColor: 'bg-emerald-100 text-emerald-800',
      comparison: 'Как денежный бонус 10к, но приятнее',
      comparisonColor: 'bg-emerald-50 text-emerald-800',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
      borderColor: 'border-emerald-200 hover:border-emerald-400'
    },
    {
      badge: 'Запоминающийся опыт',
      badgeColor: 'bg-teal-100 text-teal-700',
      price: 'от 20 000 ₽',
      subtitle: 'на человека',
      icon: <TrendingUp className="w-8 h-8 text-teal-600" />,
      experience: 'О чем будут говорить',
      description: 'Создать впечатление, которое запомнится',
      whatIncluded: [
        'Объекты среднего класса',
        'Опыт выше ожиданий',
        'Повод гордиться компанией'
      ],
      socialEffect: 'Запостит в соцсетях с благодарностью компании',
      socialColor: 'bg-teal-100 text-teal-800',
      comparison: 'Как бонус 20к, но с эмоциями',
      comparisonColor: 'bg-teal-50 text-teal-800',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-teal-600 hover:bg-teal-700',
      borderColor: 'border-teal-300 hover:border-teal-500',
      popular: true
    },
    {
      badge: 'WOW-впечатление',
      badgeColor: 'bg-slate-100 text-slate-900',
      price: 'от 30 000 ₽',
      subtitle: 'на человека',
      icon: <Users className="w-8 h-8 text-slate-900" />,
      experience: 'Employer branding в действии',
      description: 'Подарок, который делает компанию мечтой для талантов',
      whatIncluded: [
        'Премиум объекты',
        'Уровень, о котором мечтают',
        'Конкурентное преимущество'
      ],
      socialEffect: 'Станет причиной, почему друзья захотят к вам на работу',
      socialColor: 'bg-slate-200 text-slate-900',
      comparison: 'Как годовой фитнес (30-40к), но с WOW-эффектом',
      comparisonColor: 'bg-slate-50 text-slate-800',
      buttonText: 'Обсудить условия',
      buttonColor: 'bg-slate-900 hover:bg-slate-800',
      borderColor: 'border-slate-300 hover:border-slate-500'
    }
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl text-gray-900 mb-4">
          Инвестируйте в каждого сотрудника
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Выберите WOW-эффект, который создаст каждый подарок для вашей команды
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${pkg.borderColor} transition-all hover:shadow-xl relative ${pkg.popular ? 'ring-2 ring-teal-400 ring-offset-2' : ''}`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-teal-500 text-white px-4 py-1">
                  Максимальный эффект
                </Badge>
              </div>
            )}

            {/* Header */}
            <div className="mb-6">
              <Badge className={`mb-4 ${pkg.badgeColor}`}>
                {pkg.badge}
              </Badge>
              
              {/* Цена */}
              <div className="mb-4">
                <div className="text-4xl text-gray-900 mb-1">{pkg.price}</div>
                <div className="text-sm text-gray-500">{pkg.subtitle}</div>
              </div>

              {/* Опыт */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                  {pkg.icon}
                </div>
                <div className="text-lg text-gray-900">{pkg.experience}</div>
              </div>
              
              <p className="text-sm text-gray-600">{pkg.description}</p>
            </div>

            {/* Что получает */}
            <div className="mb-4">
              <div className="text-sm text-gray-500 mb-3">Что получает:</div>
              <div className="space-y-2">
                {pkg.whatIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Социальный эффект */}
            <div className={`${pkg.socialColor} p-3 rounded-lg mb-3`}>
              <p className="text-xs">
                🎉 <strong>Социальный эффект:</strong> {pkg.socialEffect}
              </p>
            </div>

            {/* Сравнение */}
            <div className={`${pkg.comparisonColor} p-3 rounded-lg mb-6`}>
              <p className="text-xs">
                💡 <strong>Для сравнения:</strong> {pkg.comparison}
              </p>
            </div>

            {/* Button */}
            <Button
              onClick={onRequestClick}
              className={`w-full ${pkg.buttonColor} text-white py-6`}
            >
              {pkg.buttonText}
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12 max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border-2 border-emerald-200">
          <p className="text-gray-700 mb-2">
            <strong>Нет минимальной закупки!</strong> Можете заказать от 1 сертификата.
          </p>
          <p className="text-sm text-gray-600">
            Компании берут от 3 до 500+ сертификатов. Цена зависит только от выбранного пакета.
          </p>
        </div>
      </div>
    </div>
  )
}

// Тестовая страница для просмотра всех вариантов
export function B2BPackagesByPriceV2TestPage() {
  const handleRequestClick = () => {
    console.log('Форма заявки открыта')
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-emerald-600 text-white py-8 mb-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl mb-2">Тестовая страница: B2B-пакеты по цене V2 (3 новых варианта)</h1>
          <p className="text-emerald-100">
            Три улучшенных подхода без упоминания дополнительных услуг — фокус на премиальности объектов
          </p>
        </div>
      </div>

      <B2BPackagesByPriceV2Variants onRequestClick={handleRequestClick} />

      {/* Анализ обновлений */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl text-gray-900 mb-6">✨ Ключевые улучшения в V2:</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border-2 border-red-200">
              <h4 className="text-lg text-red-700 mb-3">❌ Убрали из V1</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• "Самостоятельное бронирование"</li>
                <li>• "Баня/SPA включены"</li>
                <li>• "Приоритетная поддержка"</li>
                <li>• "Персональный консьерж"</li>
                <li>• "Трансфер и активности"</li>
                <li>• Все упоминания доп. услуг</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-emerald-200">
              <h4 className="text-lg text-emerald-700 mb-3">✅ Добавили/Усилили</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Фокус на КЛАССЕ объектов</li>
                <li>• Блок сравнения с альтернативами</li>
                <li>• "Нет минимальной закупки!"</li>
                <li>• "От 3 до 500+ сертификатов"</li>
                <li>• Эмоциональные результаты</li>
                <li>• WOW-эффект для команды</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border-2 border-emerald-200">
              <h4 className="text-lg text-emerald-900 mb-3">🎯 Вариант 1: По классу объектов + глубине отдыха</h4>
              <p className="text-emerald-800 text-sm mb-3">
                <strong>Главный фокус:</strong> Чем выше цена → тем премиальнее объект + глубже перезагрузка
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-emerald-700 mb-1">10 000 ₽ — Базовый класс</div>
                  <div className="text-gray-600">"Выходные на природе"</div>
                  <div className="text-gray-500 mt-1">300+ объектов базового класса</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-teal-700 mb-1">20 000 ₽ — Комфорт класс</div>
                  <div className="text-gray-600">"Комплексная перезагрузка"</div>
                  <div className="text-gray-500 mt-1">200+ объектов комфорт-класса</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-slate-700 mb-1">30 000 ₽ — Премиум класс</div>
                  <div className="text-gray-600">"Глубокая перезагрузка"</div>
                  <div className="text-gray-500 mt-1">Топ-100 премиум объектов</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
              <h4 className="text-lg text-blue-900 mb-3">💙 Вариант 2: По эмоциональному результату</h4>
              <p className="text-blue-800 text-sm mb-3">
                <strong>Главный фокус:</strong> Не про услуги, а про то, ЧТО ПОЧУВСТВУЕТ сотрудник
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-emerald-700 mb-1">10 000 ₽ — Побег от рутины</div>
                  <div className="text-gray-600">"Короткая пауза"</div>
                  <div className="text-gray-500 mt-1">✨ Вернется с улыбкой в понедельник</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-teal-700 mb-1">20 000 ₽ — Восстановление энергии</div>
                  <div className="text-gray-600">"Полноценная перезагрузка"</div>
                  <div className="text-gray-500 mt-1">✨ Вернется мотивированным на квартал</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-slate-700 mb-1">30 000 ₽ — Трансформация mindset</div>
                  <div className="text-gray-600">"Смена перспективы"</div>
                  <div className="text-gray-500 mt-1">✨ Вернется с новыми идеями и энергией</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
              <h4 className="text-lg text-purple-900 mb-3">🎉 Вариант 3: По WOW-эффекту для команды</h4>
              <p className="text-purple-800 text-sm mb-3">
                <strong>Главный фокус:</strong> Как это повлияет на атмосферу в команде и восприятие компании
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-emerald-700 mb-1">10 000 ₽ — Приятный сюрприз</div>
                  <div className="text-gray-600">"Заботливый жест"</div>
                  <div className="text-gray-500 mt-1">🎉 "Компания подарила отдых!"</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-teal-700 mb-1">20 000 ₽ — Запоминающийся опыт</div>
                  <div className="text-gray-600">"О чем будут говорить"</div>
                  <div className="text-gray-500 mt-1">🎉 Запостит в соцсетях</div>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-slate-700 mb-1">30 000 ₽ — WOW-впечатление</div>
                  <div className="text-gray-600">"Employer branding в действии"</div>
                  <div className="text-gray-500 mt-1">🎉 Друзья захотят к вам на работу</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl border-2 border-emerald-300">
            <h4 className="text-lg text-emerald-900 mb-3">🎯 Главное отличие от V1:</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>V1:</strong> Упоминались "баня/SPA", "трансфер", "консьерж" → создавало впечатление, что мы продаем дополнительные услуги
              </p>
              <p>
                <strong>V2:</strong> Только класс объектов + эмоциональный результат → фокус на качестве места и опыте
              </p>
              <p className="text-emerald-700 pt-2">
                💡 <strong>Инсайт:</strong> 10к, 20к, 30к — это не про "что еще включено", а про "насколько премиальное место для отдыха"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
