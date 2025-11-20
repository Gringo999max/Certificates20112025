import React from 'react';
import { motion } from 'motion/react';
import { Gift, Sparkles, Star, Calendar, Users, Award, ArrowRight, Snowflake, TreePine, PartyPopper } from 'lucide-react';
import { Button } from './ui/button';

// ============================================
// ВАРИАНТ 1: "Зимняя Сказка" 
// Классический новогодний дизайн с ёлкой и подарками
// ============================================

interface NewYearPromoVariant1Props {
  onRequestClick?: () => void;
}

export const NewYearPromoVariant1 = ({ onRequestClick }: NewYearPromoVariant1Props) => {
  return (
    <section className="relative py-16 md:py-24 px-6 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-white/30">
          <TreePine className="w-32 h-32" />
        </div>
        <div className="absolute bottom-10 right-10 text-white/30">
          <TreePine className="w-40 h-40" />
        </div>
        <div className="absolute top-1/2 left-1/4 text-white/20">
          <Snowflake className="w-24 h-24" />
        </div>
        <div className="absolute top-1/4 right-1/4 text-white/20">
          <Snowflake className="w-20 h-20" />
        </div>
      </div>

      {/* Animated Snow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/40"
            initial={{ 
              top: -20, 
              left: `${Math.random() * 100}%`,
              rotate: 0 
            }}
            animate={{ 
              top: '100%',
              rotate: 360
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear'
            }}
          >
            <Snowflake className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Christmas Tree Icon */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Christmas Tree Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <TreePine className="w-5 h-5 text-emerald-300" />
            <span className="text-white font-semibold">Новогоднее предложение 2025</span>
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Подарите команде<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-200 to-yellow-300">
              Новогоднее волшебство
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Корпоративные сертификаты на отдых в глэмпингах — лучший подарок для сотрудников, 
            клиентов и партнёров
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Gift className="w-8 h-8" />,
              title: "До 31 декабря",
              description: "Специальные условия на корпоративные пакеты от 10 сертификатов"
            },
            {
              icon: <PartyPopper className="w-8 h-8" />,
              title: "Праздничная упаковка",
              description: "Эксклюзивный новогодний дизайн сертификатов с вашим логотипом"
            },
            {
              icon: <Star className="w-8 h-8" />,
              title: "Доставка до праздника",
              description: "Гарантированная доставка всех сертификатов до Нового Года"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-yellow-300 mb-4 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-emerald-100 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                  🎁 Скидка 15% на заказы от 50 сертификатов
                </p>
                <p className="text-emerald-100">
                  Оставьте заявку до 15 декабря и получите лучшие условия
                </p>
              </div>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold px-8 py-6 rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all whitespace-nowrap"
                onClick={onRequestClick}
              >
                Оставить заявку
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Countdown Timer (optional) */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-emerald-200 text-sm">
            ⏰ До конца акции осталось: <span className="font-bold text-yellow-300">23 дня</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// ВАРИАНТ 2: "Снежный Минимализм"
// Современный, чистый, элегантный дизайн
// ============================================
export const NewYearPromoVariant2 = () => {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white overflow-hidden">
      {/* Minimal Snow Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="snow-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#60a5fa" opacity="0.3" />
              <circle cx="50" cy="50" r="1.5" fill="#3b82f6" opacity="0.2" />
              <circle cx="80" cy="30" r="1" fill="#60a5fa" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#snow-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <Snowflake className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800">Новогодняя коллекция</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Зимний отдых<br />
              <span className="text-blue-600">в подарок</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Сертификаты на глэмпинг — это не просто подарок. 
              Это инвестиция в благополучие вашей команды и крепкие деловые отношения.
            </p>

            {/* Clean Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { number: "500+", label: "Локаций" },
                { number: "15%", label: "Скидка" },
                { number: "24/7", label: "Поддержка" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl shadow-lg"
              >
                Запросить предложение
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-6 rounded-xl"
              >
                Каталог пакетов
              </Button>
            </div>
          </motion.div>

          {/* Right Side: Visual Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              {/* Decorative corner elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-500 rounded-full opacity-10" />

              <div className="space-y-8">
                {/* Gift Package Info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Корпоративные пакеты</h3>
                    <p className="text-gray-600 text-sm">От 10 до 1000+ сертификатов с брендированием</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Гибкий срок действия</h3>
                    <p className="text-gray-600 text-sm">Сертификат действителен 1 год с момента активации</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">HR-панель управления</h3>
                    <p className="text-gray-600 text-sm">Полный контроль и аналитика использования</p>
                  </div>
                </div>

                {/* Promo Badge */}
                <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 border-2 border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Новогодняя акция</p>
                      <p className="text-2xl font-bold text-gray-900">-15% на заказы 50+</p>
                    </div>
                    <Sparkles className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// ВАРИАНТ 3: "Праздничное Волшебство"
// Яркий дизайн с анимациями и градиентами
// ============================================
export const NewYearPromoVariant3 = () => {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-gradient-to-br from-purple-900 via-blue-900 to-emerald-900 overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {i % 2 === 0 ? (
              <Sparkles className="w-6 h-6 text-yellow-300" />
            ) : (
              <Star className="w-4 h-4 text-blue-300" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Content */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Animated Badge */}
          <motion.div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md px-8 py-4 rounded-full mb-8 border border-white/30"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.4)",
                "0 0 40px rgba(59, 130, 246, 0.4)",
                "0 0 20px rgba(168, 85, 247, 0.4)",
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </motion.div>
            <span className="text-white font-bold text-lg">Новогодняя магия 2025</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-6 h-6 text-blue-300" />
            </motion.div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Дарите{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
              впечатления,
            </span>
            <br />
            а не вещи
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Корпоративные сертификаты на отдых в глэмпингах — подарок, который запомнится надолго. 
            Для сотрудников, клиентов и партнёров.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Gift className="w-8 h-8" />,
                title: "Пакеты от 10 шт",
                gradient: "from-pink-500 to-purple-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "HR Dashboard",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Брендирование",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                icon: <PartyPopper className="w-8 h-8" />,
                title: "Скидки до 15%",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${feature.gradient} p-1 rounded-2xl`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 h-full">
                  <div className="text-white mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 md:p-16 border border-white/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="max-w-3xl mx-auto">
              <motion.div
                className="text-6xl md:text-7xl mb-6"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🎁
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Успейте заказать до 15 декабря
              </h3>
              
              <p className="text-xl text-blue-100 mb-8">
                и получите <span className="text-yellow-300 font-bold">скидку 15%</span> на пакеты от 50 сертификатов
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 hover:from-yellow-500 hover:via-orange-500 hover:to-pink-500 text-gray-900 font-bold px-10 py-7 rounded-2xl shadow-2xl text-lg"
                >
                  <Sparkles className="mr-2 w-6 h-6" />
                  Оформить заявку
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-7 rounded-2xl text-lg"
                >
                  Скачать каталог
                </Button>
              </div>

              {/* Timer */}
              <motion.div 
                className="mt-8 inline-flex items-center gap-2 bg-red-500/20 px-6 py-3 rounded-full border border-red-400/30"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(239, 68, 68, 0.3)",
                    "0 0 20px rgba(239, 68, 68, 0.5)",
                    "0 0 10px rgba(239, 68, 68, 0.3)",
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Calendar className="w-5 h-5 text-red-300" />
                <span className="text-white font-semibold">
                  До конца акции: <span className="text-yellow-300">12 дней</span>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
