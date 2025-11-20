import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { 
  Building2, 
  Users, 
  Award, 
  TrendingUp, 
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  Target,
  Zap,
  Shield
} from 'lucide-react';
import { CorporateRequestFormModal } from './CorporateRequestFormModal';

interface CorporateB2BFinalCTAVariantsProps {
  onRequestConsultation?: () => void;
  onSelectCertificates?: () => void;
}

// Вариант 1: Статистика + Социальное доказательство
export const Variant1StatsSocial: React.FC<CorporateB2BFinalCTAVariantsProps> = ({
  onRequestConsultation,
  onSelectCertificates
}) => {
  const stats = [
    {
      icon: Building2,
      number: "175+",
      label: "компаний доверяют нам",
      description: "От стартапов до корпораций"
    },
    {
      icon: Users,
      number: "50,000+",
      label: "счастливых сотрудников",
      description: "Уже получили отдых"
    },
    {
      icon: Award,
      number: "4.9",
      label: "средняя оценка",
      description: "Из 5 возможных"
    },
    {
      icon: TrendingUp,
      number: "92%",
      label: "возврат клиентов",
      description: "Заказывают повторно"
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Card */}
        <motion.div
          className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6" />
            <span className="text-sm uppercase tracking-wider font-semibold text-emerald-100">
              Присоединяйтесь к лидерам
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы инвестировать в команду?
          </h2>
          
          <p className="text-lg text-emerald-50 mb-8 max-w-2xl mx-auto">
            Наши консультанты помогут подобрать идеальное решение для вашей компании. 
            Бесплатная консультация за 15 минут.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-emerald-700 hover:bg-emerald-50 shadow-lg text-lg px-8"
              onClick={onRequestConsultation}
            >
              Оставить заявку
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8"
              onClick={onSelectCertificates}
            >
              Выбрать сертификаты
            </Button>
          </div>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-emerald-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Без предоплаты</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Персональный менеджер</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Вариант 2: Преимущества + Ограниченное предложение
export const Variant2BenefitsUrgency: React.FC<CorporateB2BFinalCTAVariantsProps> = ({
  onRequestConsultation,
  onSelectCertificates
}) => {
  const benefits = [
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Проверенные глэмпинги с рейтингом 4.5+"
    },
    {
      icon: Users,
      title: "Персональный сервис",
      description: "Личный менеджер для вашей компании"
    },
    {
      icon: Zap,
      title: "Быстрый запуск",
      description: "Готовое решение за 24 часа"
    },
    {
      icon: Heart,
      title: "HR-поддержка",
      description: "Аналитика и отчетность в кабинете"
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold">Новогодняя акция</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Мы создали сервис, который решает все задачи корпоративных подарков — 
              от выбора до аналитики эффективности.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}</div>
          </motion.div>

          {/* Right: CTA Card */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="font-semibold">Специальное предложение</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Скидка 15% на первый заказ
              </h3>
              
              <p className="text-gray-300 mb-6">
                При заказе от 10 сертификатов до конца года. 
                Успейте порадовать команду незабываемым подарком!
              </p>
              
              {/* Features list */}
              <div className="space-y-3 mb-8">
                {[
                  'Индивидуальное брендирование сертификатов',
                  'HR кабинет с аналитикой использования',
                  'Персональный менеджер на связи 24/7',
                  'Гибкие условия оплаты для корпоративных клиентов'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                <Button 
                  size="lg"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg text-lg"
                  onClick={onRequestConsultation}
                >
                  Получить скидку 15%
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="ghost"
                  className="w-full text-white hover:bg-white/10 text-lg"
                  onClick={onSelectCertificates}
                >
                  Посмотреть сертификаты
                </Button>
              </div>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                ⏰ Предложение действует до 31 декабря 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Вариант 3: Минималистичный фокус на действие
export const Variant3MinimalAction: React.FC<CorporateB2BFinalCTAVariantsProps> = ({
  onRequestConsultation,
  onSelectCertificates
}) => {
  const steps = [
    {
      icon: Target,
      title: "Расскажите о задаче",
      description: "2 минуты на заявку"
    },
    {
      icon: Users,
      title: "Получите предложение",
      description: "Персональное в течение часа"
    },
    {
      icon: Sparkles,
      title: "Дарите радость",
      description: "Команда в восторге"
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main heading */}
          <div className="mb-6">
            <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold mb-4">
              Начните сегодня
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Один звонок до счастливой команды
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наши эксперты помогут выбрать и оформить корпоративные сертификаты 
              под ваши цели и бюджет
            </p>
          </div>

          {/* Quick steps */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 my-12 max-w-3xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={index}>
                  <motion.div
                    className="flex items-center gap-4 md:flex-col md:items-center text-left md:text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg text-lg px-10 py-6"
              onClick={onRequestConsultation}
            >
              <span className="flex items-center gap-2">
                Заказать звонок
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-10 py-6"
              onClick={onSelectCertificates}
            >
              Выбрать сертификаты самостоятельно
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-200 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-amber-200 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white" />
              </div>
              <span>175+ компаний</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-current" />
              <span>4.9 из 5.0</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Безопасные платежи</span>
            </div>
          </div>

          {/* Contact info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Или напишите нам: <a href="mailto:corporate@glampings.ru" className="text-emerald-600 hover:underline font-semibold">corporate@glampings.ru</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Тестовая страница для сравнения вариантов
export default function CorporateB2BFinalCTAVariants() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const handleConsultation = () => {
    setIsFormModalOpen(true);
  };

  const handleSelectCertificates = () => {
    alert('Перейти к выбору сертификатов');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-gray-900">Сравнение вариантов финального CTA</h1>
            <div className="flex gap-4">
              <a href="#variant1" className="text-sm text-emerald-600 hover:underline">Вариант 1</a>
              <a href="#variant2" className="text-sm text-emerald-600 hover:underline">Вариант 2</a>
              <a href="#variant3" className="text-sm text-emerald-600 hover:underline">Вариант 3</a>
            </div>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div id="variant1" className="border-b-8 border-gray-300">
        <div className="bg-white py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Вариант 1: Статистика + Социальное доказательство</h2>
                <p className="text-gray-600">Упор на цифры, достижения и массовое доверие</p>
              </div>
              <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold">
                Рекомендуется
              </div>
            </div>
          </div>
        </div>
        <Variant1StatsSocial 
          onRequestConsultation={handleConsultation}
          onSelectCertificates={handleSelectCertificates}
        />
      </div>

      <div id="variant2" className="border-b-8 border-gray-300">
        <div className="bg-white py-8">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Вариант 2: Преимущества + Ограниченное предложение</h2>
            <p className="text-gray-600">Акцент на выгоду и срочность (новогодняя акция)</p>
          </div>
        </div>
        <Variant2BenefitsUrgency 
          onRequestConsultation={handleConsultation}
          onSelectCertificates={handleSelectCertificates}
        />
      </div>

      <div id="variant3" className="border-b-8 border-gray-300">
        <div className="bg-white py-8">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Вариант 3: Минималистичный фокус на действие</h2>
            <p className="text-gray-600">Простота, ясность и призыв к немедленному контакту</p>
          </div>
        </div>
        <Variant3MinimalAction 
          onRequestConsultation={handleConsultation}
          onSelectCertificates={handleSelectCertificates}
        />
      </div>

      {/* Recommendations */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Рекомендации по выбору:</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold mb-2">✅ Вариант 1</h3>
              <p className="text-sm text-gray-300">
                Лучший для B2B - показывает масштаб, доверие и результаты. 
                Статистика убеждает руководителей и HR.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold mb-2">🎁 Вариант 2</h3>
              <p className="text-sm text-gray-300">
                Отлично для сезонных кампаний (Новый год, праздники). 
                Создает срочность и демонстрирует выгоду.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold mb-2">🎯 Вариант 3</h3>
              <p className="text-sm text-gray-300">
                Идеален для тех, кто уже принял решение. 
                Простой и прямой путь к конверсии.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      <CorporateRequestFormModal 
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
      />
    </div>
  );
}
