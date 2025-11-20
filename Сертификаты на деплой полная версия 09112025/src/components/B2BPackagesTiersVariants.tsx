import React, { useState } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { CheckCircle, Sparkles, Target, Rocket, Users, TrendingUp, Award, Zap, Crown, Building2, Star } from 'lucide-react'
import { motion } from 'motion/react'

interface B2BPackagesTiersVariantsProps {
  onRequestClick: () => void
}

export function B2BPackagesTiersVariants({ onRequestClick }: B2BPackagesTiersVariantsProps) {
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
            Вариант 1: По целям
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
            Вариант 3: По стадии
          </Button>
        </div>

        {/* Вариант 1: По целям использования */}
        {activeVariant === 1 && <Variant1 onRequestClick={onRequestClick} />}

        {/* Вариант 2: По измеримому эффекту */}
        {activeVariant === 2 && <Variant2 onRequestClick={onRequestClick} />}

        {/* Вариант 3: По стадии внедрения */}
        {activeVariant === 3 && <Variant3 onRequestClick={onRequestClick} />}
      </div>
    </div>
  )
}

// ВАРИАНТ 1: ПО ЦЕЛЯМ ИСПОЛЬЗОВАНИЯ
// Позиционирование: Что компания хочет достичь
function Variant1({ onRequestClick }: { onRequestClick: () => void }) {
  const packages = [
    {
      badge: 'Стартер',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      title: 'от 10',
      subtitle: 'сертификатов',
      icon: <Rocket className="w-8 h-8 text-emerald-600" />,
      purpose: 'Протестировать эффект',
      description: 'Для компаний, которые хотят попробовать Well-being подарки',
      features: [
        'Базовая персонализация',
        'Email-доставка',
        'Базовая отчетность'
      ],
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
      borderColor: 'border-emerald-200 hover:border-emerald-400'
    },
    {
      badge: 'Бизнес',
      badgeColor: 'bg-teal-100 text-teal-700',
      title: 'от 50',
      subtitle: 'сертификатов',
      icon: <Target className="w-8 h-8 text-teal-600" />,
      purpose: 'Мотивировать команду',
      description: 'Для квартальных программ мотивации и командных достижений',
      features: [
        'Полная персонализация',
        'Физическая + Email доставка',
        'Расширенная аналитика',
        'Персональный менеджер'
      ],
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-teal-600 hover:bg-teal-700',
      borderColor: 'border-teal-300 hover:border-teal-500',
      popular: true
    },
    {
      badge: 'Корпоративный',
      badgeColor: 'bg-slate-100 text-slate-900',
      title: 'от 200',
      subtitle: 'сертификатов',
      icon: <Crown className="w-8 h-8 text-slate-900" />,
      purpose: 'Создать культуру заботы',
      description: 'Для компаний, которые строят долгосрочную Well-being программу',
      features: [
        'Premium персонализация',
        'VIP упаковка',
        'HR-интеграция и API',
        'Выделенная поддержка 24/7'
      ],
      buttonText: 'Обсудить условия',
      buttonColor: 'bg-slate-900 hover:bg-slate-800',
      borderColor: 'border-slate-300 hover:border-slate-500'
    }
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl text-gray-900 mb-4">
          B2B-пакеты для вашей команды
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Готовые решения для команд от 10 до 500+ сотрудников
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
              <div className="mb-4">
                <div className="text-4xl text-gray-900 mb-1">{pkg.title}</div>
                <div className="text-sm text-gray-500">{pkg.subtitle}</div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                  {pkg.icon}
                </div>
                <div className="text-lg text-gray-900">{pkg.purpose}</div>
              </div>
              <p className="text-sm text-gray-600">{pkg.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {pkg.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
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

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Не нашли подходящий пакет? Создадим индивидуальное предложение
        </p>
        <Button
          onClick={onRequestClick}
          variant="outline"
          className="text-emerald-600 border-emerald-300 hover:bg-emerald-50"
        >
          Получить персональное предложение →
        </Button>
      </div>
    </div>
  )
}

// ВАРИАНТ 2: ПО ИЗМЕРИМОМУ ЭФФЕКТУ
// Позиционирование: Какой результат получит компания
function Variant2({ onRequestClick }: { onRequestClick: () => void }) {
  const packages = [
    {
      badge: 'Стартер',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      title: 'от 10',
      subtitle: 'сертификатов',
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      effect: '+15% вовлеченность',
      metrics: 'Повышение настроения команды',
      description: 'Первый шаг к Well-being культуре. Идеально для пилотного проекта',
      features: [
        'Базовая персонализация',
        'Email-доставка',
        'Базовая отчетность'
      ],
      result: 'Результат: Счастливые сотрудники уже через неделю',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
      borderColor: 'border-emerald-200 hover:border-emerald-400'
    },
    {
      badge: 'Бизнес',
      badgeColor: 'bg-teal-100 text-teal-700',
      title: 'от 50',
      subtitle: 'сертификатов',
      icon: <Award className="w-8 h-8 text-teal-600" />,
      effect: '+30% продуктивность',
      metrics: 'Снижение выгорания на 25%',
      description: 'Квартальная программа с измеримым эффектом на KPI команды',
      features: [
        'Полная персонализация',
        'Физическая + Email доставка',
        'Расширенная аналитика',
        'Персональный менеджер'
      ],
      result: 'Результат: ROI 300% через квартал',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-teal-600 hover:bg-teal-700',
      borderColor: 'border-teal-300 hover:border-teal-500',
      popular: true
    },
    {
      badge: 'Корпоративный',
      badgeColor: 'bg-slate-100 text-slate-900',
      title: 'от 200',
      subtitle: 'сертификатов',
      icon: <Building2 className="w-8 h-8 text-slate-900" />,
      effect: '+50% удержание',
      metrics: 'Текучка снижается до 5%',
      description: 'Годовая Well-being программа с трансформацией корпоративной культуры',
      features: [
        'Premium персонализация',
        'VIP упаковка',
        'HR-интеграция и API',
        'Выделенная поддержка 24/7'
      ],
      result: 'Результат: Экономия 20M₽ на найме',
      buttonText: 'Обсудить условия',
      buttonColor: 'bg-slate-900 hover:bg-slate-800',
      borderColor: 'border-slate-300 hover:border-slate-500'
    }
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl text-gray-900 mb-4">
          B2B-пакеты для вашей команды
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Выберите пакет по ожидаемому эффекту для бизнеса
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
              <div className="mb-4">
                <div className="text-4xl text-gray-900 mb-1">{pkg.title}</div>
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

            {/* Features */}
            <div className="space-y-3 mb-6">
              {pkg.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Result */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
              <p className="text-sm text-amber-900">{pkg.result}</p>
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

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Не нашли подходящий пакет? Создадим индивидуальное предложение
        </p>
        <Button
          onClick={onRequestClick}
          variant="outline"
          className="text-emerald-600 border-emerald-300 hover:bg-emerald-50"
        >
          Получить персональное предложение →
        </Button>
      </div>
    </div>
  )
}

// ВАРИАНТ 3: ПО СТАДИИ ВНЕДРЕНИЯ
// Позиционирование: Где компания находится в пути Well-being
function Variant3({ onRequestClick }: { onRequestClick: () => void }) {
  const packages = [
    {
      badge: 'Стартер',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      title: 'от 10',
      subtitle: 'сертификатов',
      icon: <Sparkles className="w-8 h-8 text-emerald-600" />,
      stage: 'Начало пути',
      journey: 'Шаг 1: Знакомство с Well-being',
      description: 'Первые шаги к культуре заботы. Покажите команде, что их ценят',
      features: [
        'Базовая персонализация',
        'Email-доставка',
        'Базовая отчетность'
      ],
      quote: '"Мы начали с 15 сертификатов. Через год - 200!"',
      company: '— Startup из Москвы',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
      borderColor: 'border-emerald-200 hover:border-emerald-400'
    },
    {
      badge: 'Бизнес',
      badgeColor: 'bg-teal-100 text-teal-700',
      title: 'от 50',
      subtitle: 'сертификатов',
      icon: <Users className="w-8 h-8 text-teal-600" />,
      stage: 'Рост культуры',
      journey: 'Шаг 2: Регулярная практика',
      description: 'Командные ритуалы и квартальные программы Well-being',
      features: [
        'Полная персонализация',
        'Физическая + Email доставка',
        'Расширенная аналитика',
        'Персональный менеджер'
      ],
      quote: '"Теперь это часть нашей культуры"',
      company: '— HR-директор IT-компании',
      buttonText: 'Запросить предложение',
      buttonColor: 'bg-teal-600 hover:bg-teal-700',
      borderColor: 'border-teal-300 hover:border-teal-500',
      popular: true
    },
    {
      badge: 'Корпоративный',
      badgeColor: 'bg-slate-100 text-slate-900',
      title: 'от 200',
      subtitle: 'сертификатов',
      icon: <Star className="w-8 h-8 text-slate-900" />,
      stage: 'Зрелость программы',
      journey: 'Шаг 3: Системный подход',
      description: 'Well-being как конкурентное преимущество в найме и удержании',
      features: [
        'Premium персонализация',
        'VIP упаковка',
        'HR-интеграция и API',
        'Выделенная поддержка 24/7'
      ],
      quote: '"Best place to work - благодаря Well-being"',
      company: '— CEO крупной корпорации',
      buttonText: 'Обсудить условия',
      buttonColor: 'bg-slate-900 hover:bg-slate-800',
      borderColor: 'border-slate-300 hover:border-slate-500'
    }
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl text-gray-900 mb-4">
          B2B-пакеты для вашей команды
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Выберите пакет в зависимости от стадии вашей Well-being программы
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
              <div className="mb-4">
                <div className="text-4xl text-gray-900 mb-1">{pkg.title}</div>
                <div className="text-sm text-gray-500">{pkg.subtitle}</div>
              </div>

              {/* Journey */}
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  {pkg.icon}
                  <div className="text-lg text-gray-900">{pkg.stage}</div>
                </div>
                <div className="text-sm text-emerald-600 mb-2">{pkg.journey}</div>
              </div>

              <p className="text-sm text-gray-600">{pkg.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {pkg.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-gray-50 border-l-4 border-emerald-500 p-4 mb-6">
              <p className="text-sm italic text-gray-700 mb-1">{pkg.quote}</p>
              <p className="text-xs text-gray-500">{pkg.company}</p>
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

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Не нашли подходящий пакет? Создадим индивидуальное предложение
        </p>
        <Button
          onClick={onRequestClick}
          variant="outline"
          className="text-emerald-600 border-emerald-300 hover:bg-emerald-50"
        >
          Получить персональное предложение →
        </Button>
      </div>
    </div>
  )
}

// Тестовая страница для просмотра всех вариантов
export function B2BPackagesTiersTestPage() {
  const handleRequestClick = () => {
    console.log('Форма заявки открыта')
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-emerald-600 text-white py-8 mb-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl mb-2">Тестовая страница: B2B-пакеты (3 варианта)</h1>
          <p className="text-emerald-100">
            Три разных подхода к позиционированию тарифов "от 10", "от 50", "от 200"
          </p>
        </div>
      </div>

      <B2BPackagesTiersVariants onRequestClick={handleRequestClick} />

      {/* Описание вариантов */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl text-gray-900 mb-6">Описание вариантов:</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg text-gray-900 mb-2">Вариант 1: По целям использования</h4>
              <p className="text-gray-600">
                <strong>Логика:</strong> Фокус на том, ЧТО компания хочет достичь.<br />
                • от 10 = "Протестировать эффект"<br />
                • от 50 = "Мотивировать команду"<br />
                • от 200 = "Создать культуру заботы"<br />
                <strong>Для кого:</strong> Компании, которые думают о конкретных задачах.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-gray-900 mb-2">Вариант 2: По измеримому эффекту</h4>
              <p className="text-gray-600">
                <strong>Логика:</strong> Фокус на измеримых бизнес-результатах.<br />
                • от 10 = "+15% вовлеченность"<br />
                • от 50 = "+30% продуктивность, ROI 300%"<br />
                • от 200 = "+50% удержание, экономия 20M₽"<br />
                <strong>Для кого:</strong> Data-driven компании, которым нужны цифры.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-gray-900 mb-2">Вариант 3: По стадии внедрения</h4>
              <p className="text-gray-600">
                <strong>Логика:</strong> Фокус на пути развития Well-being культуры.<br />
                • от 10 = "Начало пути" (с кейсом "начали с 15, через год - 200")<br />
                • от 50 = "Рост культуры" (регулярная практика)<br />
                • от 200 = "Зрелость программы" (системный подход)<br />
                <strong>Для кого:</strong> Компании, которые думают о долгосрочном развитии.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-emerald-50 rounded-xl border-2 border-emerald-200">
            <h4 className="text-lg text-emerald-900 mb-2">💡 Ключевая психология:</h4>
            <p className="text-emerald-800">
              Во всех трёх вариантах даже маленькая компания видит ценность пакета "от 200",
              потому что он позиционируется не как "для больших компаний", а как:
              <br />• "Высший уровень заботы о культуре"
              <br />• "Максимальный измеримый эффект"
              <br />• "Зрелость Well-being программы"
              <br /><br />
              Это не про размер компании, а про амбиции и ценности!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
