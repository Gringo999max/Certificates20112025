import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Package, Sparkles, BarChart3, MapPin, Clock, RefreshCw, Smartphone, Heart } from 'lucide-react';

// Импортируем реальное изображение сертификата
import certificateImage from 'figma:asset/1b038ede49cc4bd71a076dea283da6102d83a91c.png';

// Вариант 1: "Живой" сертификат с динамическими данными
export const CertificateVariant1 = () => {
  const [amount, setAmount] = useState(50000);
  const amounts = [50000, 100000, 500000];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % amounts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAmount(amounts[currentIndex]);
  }, [currentIndex]);

  const badges = [
    { icon: Building2, text: '100+ компаний', delay: 0.2 },
    { icon: Package, text: 'От 10 сертификатов', delay: 0.4 },
    { icon: Sparkles, text: 'Персонализация под бренд', delay: 0.6 },
    { icon: BarChart3, text: 'Отчетность использования', delay: 0.8 }
  ];

  return (
    <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
      {/* Плавающие бейджи */}
      {badges.map((badge, index) => {
        const positions = [
          { top: '5%', left: '0%' },
          { top: '10%', right: '0%' },
          { bottom: '15%', left: '0%' },
          { bottom: '10%', right: '0%' }
        ];
        
        const Icon = badge.icon;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: badge.delay, duration: 0.5 }}
            className="absolute bg-white rounded-full px-3 py-2 shadow-lg border-2 border-emerald-200 flex items-center gap-2 z-10"
            style={positions[index]}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <Icon className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{badge.text}</span>
          </motion.div>
        );
      })}

      {/* Сертификат */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="relative w-full max-w-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 blur-2xl rounded-3xl transform translate-y-4" />
        
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-emerald-100">
          <img
            src={certificateImage}
            alt="B2B Сертификат"
            className="w-full h-auto"
          />
          
          {/* Анимированная сумма поверх сертификата */}
          <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-emerald-600/95 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={amount}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="font-bold text-lg md:text-2xl"
                >
                  {amount.toLocaleString('ru-RU')} ₽
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Вариант 2: Стопка сертификатов
export const CertificateVariant2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
      {/* Счетчик */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full shadow-lg z-20 text-xs md:text-sm"
      >
        <p className="font-bold whitespace-nowrap">От 10 до 1000+ сертификатов</p>
      </motion.div>

      {/* Пульсирующий бейдж скидки */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-12 md:top-16 right-[5%] md:right-[15%] bg-red-500 text-white px-3 py-1.5 rounded-full shadow-lg z-20"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <p className="font-bold text-xs md:text-sm">Скидки до 30%</p>
      </motion.div>

      {/* Стопка сертификатов */}
      <div
        className="relative w-full max-w-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ height: '400px' }}
      >
        {[3, 2, 1, 0].map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: index === 0 ? 1 : 0.7 - (index * 0.15),
              y: 0,
              scale: 1 - (index * 0.03),
              rotateZ: isHovered && index === 0 ? -3 : 0,
              translateY: isHovered && index === 0 ? -20 : 0
            }}
            transition={{ 
              duration: 0.4,
              delay: index * 0.1 
            }}
            className="absolute left-0 right-0"
            style={{
              zIndex: 10 - index,
              top: `${index * 12}px`,
              left: `${index * 8}px`,
              right: `${-index * 8}px`,
            }}
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-emerald-100">
              <img
                src={certificateImage}
                alt="B2B Сертификат"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Вариант 3: Сертификат + Benefits (улучшенный с B2B бейджами + аватары команды)
export const CertificateVariant3 = () => {
  const [activeBadge, setActiveBadge] = useState<number | null>(null);

  const benefits = [
    { icon: MapPin, text: '500+ локаций', position: { top: '10%', left: '2%' }, delay: 0.2, color: 'emerald' },
    { icon: Clock, text: '2 года действия', position: { top: '10%', right: '2%' }, delay: 0.4, color: 'blue' },
    { icon: RefreshCw, text: 'Безлимитный обмен', position: { bottom: '20%', left: '2%' }, delay: 0.6, color: 'purple' },
    { icon: Smartphone, text: 'Цифровой + физический', position: { bottom: '20%', right: '2%' }, delay: 0.8, color: 'teal' }
  ];

  // Новые B2B бейджи (из Варианта 1)
  const b2bBadges = [
    { icon: Sparkles, text: 'Персонализация под бренд', position: { top: '5%', left: '15%' }, delay: 1.0 },
    { icon: BarChart3, text: 'Отчетность использования', position: { bottom: '-5%', right: '8%' }, delay: 1.2 }
  ];

  // Аватары команды (из Концепта 1)
  const teamMembers = [
    { initials: 'АС', color: 'bg-blue-500', offset: 0 },
    { initials: 'МК', color: 'bg-green-500', offset: 1 },
    { initials: 'ЕВ', color: 'bg-purple-500', offset: 2 },
    { initials: 'ДН', color: 'bg-orange-500', offset: 3 }
  ];

  return (
    <div className="relative flex items-center justify-center min-h-[280px] lg:min-h-[500px]">
      {/* Benefits бейджи */}
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        const isActive = activeBadge === index;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: isActive ? 1.15 : 1,
            }}
            transition={{ delay: benefit.delay, duration: 0.5 }}
            whileHover={{ scale: 1.15 }}
            onHoverStart={() => setActiveBadge(index)}
            onHoverEnd={() => setActiveBadge(null)}
            className={`absolute bg-white rounded-full p-3 shadow-xl border-2 cursor-pointer z-10 ${
              isActive ? 'border-emerald-600' : 'border-gray-200'
            }`}
            style={benefit.position}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: benefit.delay
            }}
          >
            <div className="flex flex-col items-center gap-1 w-16 md:w-20">
              <Icon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? 'text-emerald-600' : 'text-gray-600'}`} />
              <span className={`text-[10px] md:text-xs font-medium text-center leading-tight ${isActive ? 'text-emerald-600' : 'text-gray-700'}`}>
                {benefit.text}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Новые B2B бейджи из Варианта 1 */}
      {b2bBadges.map((badge, index) => {
        const Icon = badge.icon;
        
        return (
          <motion.div
            key={`b2b-${index}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: badge.delay, duration: 0.5 }}
            className="absolute rounded-full px-3 py-2 shadow-lg border-2 flex items-center gap-2 z-20 bg-emerald-100/90 backdrop-blur-sm border-emerald-300"
            style={badge.position}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <Icon className="w-4 h-4 text-emerald-700" />
            <span className="text-xs font-medium whitespace-nowrap text-emerald-700">
              {badge.text}
            </span>
          </motion.div>
        );
      })}

      {/* Сертификат в центре */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full max-w-2xl z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-2xl rounded-3xl transform translate-y-4" />
        
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-purple-100">
          <img
            src={certificateImage}
            alt="B2B Сертификат"
            className="w-full h-auto"
          />
          
          {/* Аватары команды в правом нижнем углу сертификата */}
          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-2 py-1.5 md:px-3 md:py-2 rounded-full shadow-lg border border-gray-200">
            <div className="flex -space-x-2">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.3 }}
                  className={`${member.color} w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white text-[10px] md:text-xs font-bold border-2 border-white shadow-md hover:scale-110 transition-transform cursor-pointer`}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                >
                  {member.initials}
                </motion.div>
              ))}
            </div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.3 }}
              className="text-[10px] md:text-xs font-medium text-gray-700 whitespace-nowrap"
            >
              Для команды
            </motion.span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Вариант 4: Текущий с изображением природы (для сохранения оригинала)
export const CertificateVariant4Original = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <img
        src={imageUrl}
        alt="Мотивированный сотрудник на природе"
        className="w-full h-[33vh] md:h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
      />
      
      {/* Floating badge */}
      <div className="absolute -bottom-6 -left-6 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border-2 border-emerald-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-emerald-600">+35%</div>
            <div className="text-xs md:text-sm text-gray-600">продуктивность</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
