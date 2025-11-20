import React, { useState } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { CheckCircle, Sparkles, Target, Heart, Users, TrendingUp, Award, Zap, Crown, Building2, Star, Gift, Repeat, Gem } from 'lucide-react'
import { motion } from 'motion/react'

interface B2BPackagesByPriceVariantsProps {
  onRequestClick: () => void
}

export function B2BPackagesByPriceVariants({ onRequestClick }: B2BPackagesByPriceVariantsProps) {
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
            Вариант 1: По опыту
          </Button>
          <Button
            variant={activeVariant === 2 ? 'default' : 'outline'}
            onClick={() => setActiveVariant(2)}
            className={activeVariant === 2 ? 'bg-emerald-600 hover:bg-emerald-700' : 'hover:bg-emerald-50'}
          >
            Вариант 2: По эффекту
          </Button>
          <Button
            variant={activeVariant === 3 ? 'default' : 'outline'}
            onClick={() => setActiveVariant(3)}
            className={activeVariant === 3 ? 'bg-emerald-600 hover:bg-emerald-700' : 'hover:bg-emerald-50'}
          >
            Вариант 3: По стратегии
          </Button>
        </div>

        {/* Вариант 1: По уровню опыта */}
        {activeVariant === 1 && <Variant1 onRequestClick={onRequestClick} />}

        {/* Вариант 2: По измеримому эффекту */}
        {activeVariant === 2 && <Variant2 onRequestClick={onRequestClick} />}

        {/* Вариант 3: По стратегии использования */}
        {activeVariant === 3 && <Variant3 onRequestClick={onRequestClick} />}
      </div>
    </div>
  )
}

// ВАРИАНТ 1: ПО УРОВНЮ ОПЫТА
// Позиционирование: Какое качество отдыха получает сотрудник
function Variant1({ onRequestClick }: { onRequestClick: () => void }) {
  const packages = [
    {
      badge: 'Базовый отдых',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      price: 'от 10 000 ₽',
      subtitle: 'на человека',
      icon: <Sparkles className="w-8 h-8 text-emerald-600" />,
      experience: 'Выходные на природе',
      description: 'Базовая перезагрузка: 2 ночи в глэмпинге, чтобы отключиться от работы',
      whatIncluded: [
        '2 ночи проживания',
        '300+ локаций на выбор',
        'Самостоятельное бронирование',
        'Срок действия 12 месяцев'
      ],
      comparison: 'Дешевле 2 походов к психологу',
      comparisonColor: 'bg-emerald-50 text-emerald-800',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
      borderColor: 'border-emerald-200 hover:border-emerald-400'
    },
    {
      badge: 'Wellness отдых',
      badgeColor: 'bg-teal-100 text-teal-700',
      price: 'от 20 000 ₽',
      subtitle: 'на человека',
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      experience: 'Комплексная перезагрузка',
      description: 'Отдых + оздоровление: проживание, питание, баня/SPA',
      whatIncluded: [
        '2-3 ночи с питанием',
        '400+ премиум локаций',
        'Баня/SPA включены',
        'Активности на природе',
        'Приоритетная поддержка'
      ],
      comparison: 'Стоимость корп. тренинга на 1 день',
      comparisonColor: 'bg-teal-50 text-teal-800',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-teal-600 hover:bg-teal-700',
      borderColor: 'border-teal-300 hover:border-teal-500',
      popular: true
    },
    {
      badge: 'Трансформация',
      badgeColor: 'bg-slate-100 text-slate-900',
      price: 'от 30 000 ₽',
      subtitle: 'на человека',
      icon: <Crown className="w-8 h-8 text-slate-900" />,
      experience: 'Глубокая перезагрузка',
      description: 'Премиум опыт: длинный уикенд в топ-локациях с полным сервисом',
      whatIncluded: [
        '3-4 ночи полный пансион',
        'Топ-100 эксклюзивных мест',
        'Персональный консьерж',
        'Трансфер и активности',
        'Выделенная поддержка 24/7'
      ],
      comparison: 'Меньше месячного абонемента фитнес-клуба',
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
          Выберите уровень Well-being опыта, который получит каждый человек из вашей команды
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

            {/* Что включено */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-3">Что включено:</div>
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

// ВАРИАНТ 2: ПО ИЗМЕРИМОМУ ЭФФЕКТУ НА СОТРУДНИКА
// Позиционирование: Какой ROI на одного человека
function Variant2({ onRequestClick }: { onRequestClick: () => void }) {
  const packages = [
    {
      badge: 'Entry Well-being',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      price: 'от 10 000 ₽',
      subtitle: 'на человека',
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      effect: '+15% к продуктивности',
      metrics: 'на следующие 2 недели',
      description: 'Быстрая перезагрузка для восстановления фокуса и энергии',
      roi: [
        'Снижение стресса за 2 дня',
        'Возвращение мотивации',
        'Улучшение настроения в команде',
        'ROI ~150% через месяц'
      ],
      calculation: 'Если сотрудник зарабатывает 150к/мес, прирост в 15% = 22.5к дополнительной ценности',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
      borderColor: 'border-emerald-200 hover:border-emerald-400'
    },
    {
      badge: 'Optimal Well-being',
      badgeColor: 'bg-teal-100 text-teal-700',
      price: 'от 20 000 ₽',
      subtitle: 'на человека',
      icon: <Award className="w-8 h-8 text-teal-600" />,
      effect: '-30% выгорание',
      metrics: 'устойчивый эффект на квартал',
      description: 'Комплексное восстановление для профилактики выгорания',
      roi: [
        'Профилактика burnout',
        'Повышение лояльности',
        'Снижение больничных',
        'ROI ~300% через квартал'
      ],
      calculation: 'Стоимость замены сотрудника = 3-6 его зарплат. Профилактика выгорания окупается в 3-5 раз',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-teal-600 hover:bg-teal-700',
      borderColor: 'border-teal-300 hover:border-teal-500',
      popular: true
    },
    {
      badge: 'Premium Well-being',
      badgeColor: 'bg-slate-100 text-slate-900',
      price: 'от 30 000 ₽',
      subtitle: 'на человека',
      icon: <Star className="w-8 h-8 text-slate-900" />,
      effect: '+50% удержание',
      metrics: 'долгосрочный эффект на год',
      description: 'Трансформационный опыт для ключевых сотрудников',
      roi: [
        'Удержание топ-талантов',
        'Укрепление культуры заботы',
        'Конкурентное преимущество',
        'ROI ~500% через год'
      ],
      calculation: 'Найм нового senior = 500к-2М. Удержание 1 ключевого сотрудника = экономия 1-5М₽',
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
          Выберите пакет по ожидаемому бизнес-эффекту на одного человека
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
                  Лучший ROI
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

              {/* Эффект */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-xl mb-3">
                <div className="flex items-center gap-2 mb-1">
                  {pkg.icon}
                  <div className="text-2xl text-emerald-700">{pkg.effect}</div>
                </div>
                <div className="text-sm text-gray-600">{pkg.metrics}</div>
              </div>
              
              <p className="text-sm text-gray-600">{pkg.description}</p>
            </div>

            {/* ROI */}
            <div className="mb-4">
              <div className="text-sm text-gray-500 mb-3">Измеримый эффект:</div>
              <div className="space-y-2">
                {pkg.roi.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Расчет */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
              <p className="text-xs text-amber-900">
                💰 <strong>Расчет:</strong> {pkg.calculation}
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
            <strong>Data-driven подход:</strong> Все метрики основаны на исследованиях Well-being эффекта природы.
          </p>
          <p className="text-sm text-gray-600">
            Предоставим доступ к HR Dashboard для отслеживания использования сертификатов.
          </p>
        </div>
      </div>
    </div>
  )
}

// ВАРИАНТ 3: ПО СТРАТЕГИИ ИСПОЛЬЗОВАНИЯ
// Позиционирование: Как компания использует подарки
function Variant3({ onRequestClick }: { onRequestClick: () => void }) {
  const packages = [
    {
      badge: 'Разовый подарок',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      price: 'от 10 000 ₽',
      subtitle: 'на человека',
      icon: <Gift className="w-8 h-8 text-emerald-600" />,
      strategy: 'Точечная благодарность',
      useCase: 'Для: разовых событий и достижений',
      description: 'Поблагодарите сотрудников за важный проект или достижение цели',
      scenarios: [
        'Завершение крупного проекта',
        'Личные достижения',
        'Day of Employee',
        'Новогодние подарки'
      ],
      howMuch: 'Обычно берут: 5-20 сертификатов',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
      borderColor: 'border-emerald-200 hover:border-emerald-400'
    },
    {
      badge: 'Регулярная программа',
      badgeColor: 'bg-teal-100 text-teal-700',
      price: 'от 20 000 ₽',
      subtitle: 'на человека',
      icon: <Repeat className="w-8 h-8 text-teal-600" />,
      strategy: 'Квартальная мотивация',
      useCase: 'Для: регулярных Well-being программ',
      description: 'Включите в квартальную программу мотивации или Well-being calendar',
      scenarios: [
        'Ежеквартальные бонусы',
        'Well-being календарь',
        'Performance rewards',
        'Профилактика выгорания'
      ],
      howMuch: 'Обычно берут: 20-100 сертификатов',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-teal-600 hover:bg-teal-700',
      borderColor: 'border-teal-300 hover:border-teal-500',
      popular: true
    },
    {
      badge: 'Системная культура',
      badgeColor: 'bg-slate-100 text-slate-900',
      price: 'от 30 000 ₽',
      subtitle: 'на человека',
      icon: <Gem className="w-8 h-8 text-slate-900" />,
      strategy: 'Годовая Well-being стратегия',
      useCase: 'Для: компаний с культурой заботы',
      description: 'Встройте в HR-стратегию как инструмент удержания и развития культуры',
      scenarios: [
        'Годовой Well-being бюджет',
        'Retention программа для топов',
        'Employer branding',
        'Best place to work стратегия'
      ],
      howMuch: 'Обычно берут: 100-500+ сертификатов',
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
          Выберите пакет в зависимости от стратегии использования Well-being подарков
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
                  Популярный
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

              {/* Стратегия */}
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  {pkg.icon}
                  <div className="text-lg text-gray-900">{pkg.strategy}</div>
                </div>
                <div className="text-sm text-emerald-600 mb-2">{pkg.useCase}</div>
              </div>
              
              <p className="text-sm text-gray-600">{pkg.description}</p>
            </div>

            {/* Сценарии */}
            <div className="mb-4">
              <div className="text-sm text-gray-500 mb-3">Популярные сценарии:</div>
              <div className="space-y-2">
                {pkg.scenarios.map((scenario, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{scenario}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Сколько берут */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
              <p className="text-xs text-blue-900">
                📊 {pkg.howMuch}
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
            <strong>Гибкий подход:</strong> Можете начать с разовых подарков и перейти к системной программе.
          </p>
          <p className="text-sm text-gray-600">
            Многие компании начинают с 10-15 сертификатов, а через год масштабируют до 200+.
          </p>
        </div>
      </div>
    </div>
  )
}

// Тестовая страница для просмотра всех вариантов
export function B2BPackagesByPriceTestPage() {
  const handleRequestClick = () => {
    console.log('Форма заявки открыта')
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-emerald-600 text-white py-8 mb-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl mb-2">Тестовая страница: B2B-пакеты по цене (3 варианта)</h1>
          <p className="text-emerald-100">
            Три разных подхода к позиционированию тарифов "от 10к", "от 20к", "от 30к" на человека
          </p>
        </div>
      </div>

      <B2BPackagesByPriceVariants onRequestClick={handleRequestClick} />

      {/* Сравнение подходов */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl text-gray-900 mb-6">Анализ подхода "По цене на человека":</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border-2 border-emerald-200">
              <h4 className="text-lg text-emerald-700 mb-3">✅ Преимущества</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Психология инвестиции в человека</li>
                <li>• Легко сравнить с альтернативами</li>
                <li>• Убирает барьер "нужно 200 штук"</li>
                <li>• Фокус на качестве, а не количестве</li>
                <li>• Можно купить даже 1 сертификат</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-amber-200">
              <h4 className="text-lg text-amber-700 mb-3">🎯 Ключевые инсайты</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 10к = доступная точка входа</li>
                <li>• 20к = sweet spot (well-being)</li>
                <li>• 30к = премиум (трансформация)</li>
                <li>• Нет минимума по объему!</li>
                <li>• Маленькая компания может взять топ-пакет</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg text-gray-900 mb-2">Вариант 1: По уровню опыта</h4>
              <p className="text-gray-600">
                <strong>Логика:</strong> Какое качество отдыха получает каждый сотрудник.<br />
                • 10к = "Выходные на природе" (базовая перезагрузка)<br />
                • 20к = "Комплексная перезагрузка" (отдых + wellness)<br />
                • 30к = "Глубокая перезагрузка" (трансформационный опыт)<br />
                <strong>Для кого:</strong> Компании, которые думают о качестве заботы.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-gray-900 mb-2">Вариант 2: По измеримому эффекту на сотрудника</h4>
              <p className="text-gray-600">
                <strong>Логика:</strong> Какой ROI на одного человека.<br />
                • 10к = "+15% продуктивность" (ROI 150% через месяц)<br />
                • 20к = "-30% выгорание" (ROI 300%, экономия на замене)<br />
                • 30к = "+50% удержание" (ROI 500%, экономия 1-5М на найме)<br />
                <strong>Для кого:</strong> Data-driven компании с фокусом на метрики.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-gray-900 mb-2">Вариант 3: По стратегии использования</h4>
              <p className="text-gray-600">
                <strong>Логика:</strong> Как компания встраивает подарки в HR-практики.<br />
                • 10к = "Разовый подарок" (за проект, праздник)<br />
                • 20к = "Регулярная программа" (квартальная мотивация)<br />
                • 30к = "Системная культура" (годовая Well-being стратегия)<br />
                <strong>Для кого:</strong> Компании на разных стадиях зрелости HR.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-200">
            <h4 className="text-lg text-emerald-900 mb-2">💡 Главное отличие от "по количеству":</h4>
            <p className="text-emerald-800">
              <strong>"По количеству":</strong> "Вам нужно собрать 200 человек" (барьер для малого бизнеса)
              <br />
              <strong>"По цене на человека":</strong> "Выберите, сколько инвестировать в каждого" (доступно всем)
              <br /><br />
              Теперь даже стартап из 5 человек может выбрать премиум-пакет 30к, потому что это про <strong>качество заботы</strong>, а не размер компании!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
