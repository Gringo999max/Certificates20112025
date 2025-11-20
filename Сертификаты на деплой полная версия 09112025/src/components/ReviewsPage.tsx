/**
 * ReviewsPage.tsx - Страница отзывов с видео и фото
 * 
 * ========================================
 * 📹 ДЛЯ РАЗРАБОТЧИКОВ: Библиотеки для отображения видео
 * ========================================
 * 
 * Для корректного и быстрого отображения видео отзывов рекомендуется использовать:
 * 
 * 1. **react-player** (рекомендуется для большинства случаев)
 *    - Установка: npm install react-player
 *    - Поддерживает YouTube, Vimeo, MP4, WebM и другие форматы
 *    - Lazy loading, автоматическая оптимизация
 *    - Пример использования:
 *      import ReactPlayer from 'react-player'
 *      <ReactPlayer url="/path/to/video.mp4" controls width="100%" height="100%" />
 * 
 * 2. **video.js** (для продвинутого контроля)
 *    - Установка: npm install video.js
 *    - Мощная библиотека с плагинами (качество, субтитры, аналитика)
 *    - Адаптивный плеер с кастомизацией UI
 *    - Пример: import videojs from 'video.js'
 * 
 * 3. **plyr** (легковесная альтернатива)
 *    - Установка: npm install plyr-react
 *    - Современный минималистичный дизайн
 *    - Малый размер библиотеки (~10 KB gzipped)
 *    - Хорошая доступность (a11y)
 * 
 * 4. **Нативный HTML5 <video>** (для простых случаев)
 *    - Встроенный в браузер, не требует библиотек
 *    - Рекомендуется добавить:
 *      - preload="metadata" — для быстрой загрузки
 *      - poster="thumbnail.jpg" — превью перед воспроизведением
 *      - playsInline — для iOS
 *      - loading="lazy" — ленивая загрузка
 * 
 * ========================================
 * 🎨 Оптимизация отображения:
 * ========================================
 * - Используйте intersection observer для ленивой загрузки видео
 * - Сжимайте превью (thumbnail) до WebP формата
 * - Для карусели видео: загружайте только видимые элементы
 * - Добавьте скелетоны (skeleton screens) на время загрузки
 * 
 * См. также: REVIEWS_MEDIA_REQUIREMENTS.md
 */

import React, { useState, useEffect } from 'react'
import { Header } from './Header'
import Footer from './Footer'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Star, Play, Quote, Camera, Heart, MessageCircle, ThumbsUp, Send, ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ReviewSubmissionForm, SuccessDialog } from './ReviewSubmissionForm'

interface ReviewsPageProps {
  onNavigateToHome: () => void
  onNavigateToGiftOptions: () => void
  onNavigateToDelivery: () => void
  onNavigateToCorporate: () => void
  onNavigateToReviews: () => void
  onNavigateToAbout: () => void
  onNavigateToActivation?: () => void
  onNavigateToHowItWorks?: () => void
}

interface Review {
  id: number
  username: string
  name: string
  avatar: string
  photo: string
  text: string
  rating: number
  date: string
  likes: number
  category: 'gift' | 'recipient' | 'corporate'
}

interface VideoReview {
  id: number
  title: string
  description: string
  thumbnail: string
  duration: string
  views: string
}

export function ReviewsPage({ 
  onNavigateToHome, 
  onNavigateToGiftOptions, 
  onNavigateToDelivery, 
  onNavigateToCorporate, 
  onNavigateToReviews, 
  onNavigateToAbout, 
  onNavigateToActivation,
  onNavigateToHowItWorks
}: ReviewsPageProps) {
  const [filter, setFilter] = useState<'all' | 'gift' | 'recipient' | 'corporate'>('all')
  const [visibleReviews, setVisibleReviews] = useState(3)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  // Автоматический скролл вверх при монтировании страницы
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Данные отзывов
  const allReviews: Review[] = [
    {
      id: 1,
      username: "@indra.obl",
      name: "Индира Облакова",
      avatar: "https://images.unsplash.com/photo-1664312572933-0563f14484a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdCUyMGhhcHB5fGVufDF8fHx8MTc2MDg1NTExOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      photo: "https://images.unsplash.com/photo-1534085257125-2a318a47c1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMGdsYW1waW5nJTIwbmF0dXJlfGVufDF8fHx8MTc2MDg1NTExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Именинник был в неописуемом восторге! Благодарю компанию за качественность и красивую упаковку. Желаю вашему проекту дальнейшего развития и процветания! Это лучший подарок, который я когда-либо дарила.",
      rating: 5,
      date: "15 октября 2025",
      likes: 142,
      category: 'gift'
    },
    {
      id: 2,
      username: "@kimviktoriav",
      name: "Виктория Ким",
      avatar: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYwODU1MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      photo: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwYm94JTIwcmVkJTIwcmliYm9ufGVufDF8fHx8MTc1ODAyNTQ3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      text: "А внутри сертификат на отдых в одном из 70 отелей по всей России! Финансово доступно, потом ещё буду у них покупать с такими крутыми идеями. За упаковку отдельный респект ❤️❤️",
      rating: 5,
      date: "12 октября 2025",
      likes: 98,
      category: 'gift'
    },
    {
      id: 3,
      username: "@oksana_sharafkina",
      name: "Оксана Шарафкина",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4MDI0OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMG5hdHVyZSUyMHJlbGF4fGVufDF8fHx8MTc1ODAyNTQ4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Это было прекрасно! Огромнейшие благодарности всей команде! Это чудесное погружение в природу России ✨ Теперь это стало нашей семейной традицией! СПАСИБО! 😊",
      rating: 5,
      date: "8 октября 2025",
      likes: 156,
      category: 'recipient'
    },
    {
      id: 4,
      username: "@alexandrpragden",
      name: "Александр Прагден",
      avatar: "https://images.unsplash.com/photo-1614790670977-146eac66306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGhhcHB5JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjA4NTUxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      photo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBjYW1waW5nJTIwbmF0dXJlJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc1ODAyNTQ4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Классный отдых на природе! Идеальное место для перезагрузки. Комфорт и единение с природой одновременно. Рекомендую всем, кто устал от городской суеты!",
      rating: 5,
      date: "5 октября 2025",
      likes: 87,
      category: 'recipient'
    },
    {
      id: 5,
      username: "@lana.gek",
      name: "Лана Гек",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwYmxvbmRlfGVufDF8fHx8MTc1ODAyNDkzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      photo: "https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjByb21hbnRpYyUyMHN1bnNldCUyMG5hdHVyZXxlbnwxfHx8fDE3NjA4NTUxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Увидела в рекламе и решила — это будет идеальный подарок. Мне не нужно выбирать место заранее. Лёша сам выбрал, куда мы поедем (это очень круто!) Он счастлив, я счастлива 🧡",
      rating: 5,
      date: "2 октября 2025",
      likes: 203,
      category: 'gift'
    },
    {
      id: 6,
      username: "@attyakova_diana",
      name: "Диана Аттякова",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwYnJ1bmV0dGV8ZW58MXx8fHwxNzU4MDI0OTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      photo: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwY2VydGlmaWNhdGUlMjB3aGl0ZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzU4MDI1NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Вы всегда угадаете с сюрпризом! Получатель САМ выберет любой отель из доступных. А самое главное — сертификат на две персоны, можно активировать в течение 2-х лет!",
      rating: 5,
      date: "28 сентября 2025",
      likes: 134,
      category: 'gift'
    },
    {
      id: 7,
      username: "@travel_marina",
      name: "Марина Путешественница",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcmVkJTIwaGFpcnxlbnwxfHx8fDE3NTgwMjQ5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      photo: "https://images.unsplash.com/photo-1584068921546-2d799f7aaf1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB2YWNhdGlvbiUyMG5hdHVyZSUyMGNhbXBpbmd8ZW58MXx8fHwxNzYwODU1MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Купили для всей команды после успешного проекта. Все в восторге! Удобно, что каждый сам выбирает локацию и даты. Корпоративный подарок года! 🎉",
      rating: 5,
      date: "25 сентября 2025",
      likes: 178,
      category: 'corporate'
    },
    {
      id: 8,
      username: "@dmitry_ceo",
      name: "Дмитрий Руководитель",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzU4MDI0OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      photo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwY2FiaW4lMjBuYXR1cmUlMjByZWxheHxlbnwxfHx8fDE3NTgwMjU0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Наша компания заказала 20 сертификатов на Новый год. Прекрасная упаковка, быстрая доставка, индивидуальный подход. Все сотрудники довольны! Будем заказывать ещё.",
      rating: 5,
      date: "20 сентября 2025",
      likes: 221,
      category: 'corporate'
    },
    {
      id: 9,
      username: "@happy_yulia",
      name: "Юлия Счастливая",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwZ2xhc3Nlc3xlbnwxfHx8fDE3NTgwMjQ5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      photo: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBtb3VudGFpbiUyMGxha2V8ZW58MXx8fHwxNzU4MDI1NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Это отличные впечатления! Лучший подарок, который я получала! Природа, комфорт, романтика — всё в одном месте. Спасибо родителям за такой сюрприз! 🤩",
      rating: 5,
      date: "18 сентября 2025",
      likes: 167,
      category: 'recipient'
    },
    {
      id: 10,
      username: "@elena_travel",
      name: "Елена Путешественница",
      avatar: "https://images.unsplash.com/photo-1682615239006-5c36f33cfff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwaGFwcHklMjBvdXRkb29yfGVufDF8fHx8MTc2MDg2NTU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      photo: "https://images.unsplash.com/photo-1715529023436-ad8c4a4f202e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRlbnQlMjBmb3Jlc3QlMjBuYXR1cmV8ZW58MXx8fHwxNzYwODY1NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Провела выходные в глэмпинге недалеко от Москвы. Это было невероятно! Чистый воздух, тишина и комфорт. Обязательно вернусь снова!",
      rating: 5,
      date: "15 сентября 2025",
      likes: 145,
      category: 'recipient'
    },
    {
      id: 11,
      username: "@igor_outdoor",
      name: "Игорь Активный",
      avatar: "https://images.unsplash.com/photo-1757620765404-a1ee66df5e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHNtaWxpbmclMjBuYXR1cmAxfGVufDF8fHx8MTc2MDg2NTU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      photo: "https://images.unsplash.com/photo-1680246638284-0a34ea41cc76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwbmF0dXJlJTIwc3Vuc2V0JTIwdmlld3xlbnwxfHx8fDE3NjA4NjU1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Подарил жене на годовщину. Она была в восторге! Выбрали место с видом на озеро. Потрясающие закаты и звёздное небо. Лучший подарок! 🌟",
      rating: 5,
      date: "12 сентября 2025",
      likes: 189,
      category: 'gift'
    },
    {
      id: 12,
      username: "@svetlana_design",
      name: "Светлана Дизайнер",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1ODAyNDk3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      photo: "https://images.unsplash.com/photo-1755540735876-ff503cf594fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwY2VydGlmaWNhdGUlMjBlbGVnYW50JTIwd2hpdGV8ZW58MXx8fHwxNzYwODY1NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Упаковка просто восхитительная! Минималистичный дизайн, качественные материалы. Получателю понравится даже до того, как откроет 😍",
      rating: 5,
      date: "8 сентября 2025",
      likes: 211,
      category: 'gift'
    },
    {
      id: 13,
      username: "@pavel_it",
      name: "Павел Программист",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGdsYXNzZXN8ZW58MXx8fHwxNzU4MDI0OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      photo: "https://images.unsplash.com/photo-1540393197857-d22739aa6396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkb21lJTIwZ2xhbXBpbmclMjBzdGFyc3xlbnwxfHx8fDE3NjA4NjU1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      text: "Отличный вариант для тех, кто хочет отдохнуть от компьютера и города. Провёл три дня без интернета — лучшая перезагрузка! Рекомендую 👍",
      rating: 5,
      date: "5 сентября 2025",
      likes: 156,
      category: 'recipient'
    },
    {
      id: 14,
      username: "@anna_hr_manager",
      name: "Анна HR-менеджер",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU4MDI0OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      photo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBvdXRkb29yfGVufDF8fHx8MTc1ODAyNTQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Заказываем сертификаты для наших лучших сотрудников уже второй год подряд. Это действительно мотивирует команду! Все довольны 🎁",
      rating: 5,
      date: "1 сентября 2025",
      likes: 234,
      category: 'corporate'
    },
    {
      id: 15,
      username: "@maxim_adventures",
      name: "Максим Приключенец",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGJlYXJkfGVufDF8fHx8MTc1ODAyNDk4NXww&ixlib=rb-4.1.0&q=80&w=1080",
      photo: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwYWR2ZW50dXJlJTIwbW91bnRhaW58ZW58MXx8fHwxNzU4MDI1NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Получил сертификат от друзей на день рождения. Выбрал глэмпинг в горах — это было незабываемо! Спасибо за крутую идею подарка! 🏔️",
      rating: 5,
      date: "28 августа 2025",
      likes: 198,
      category: 'recipient'
    }
  ]

  // Видео отзывы
  const videoReviews: VideoReview[] = [
    {
      id: 1,
      title: "Семейный отдых в глэмпинге",
      description: "Родители получили сертификат на годовщину свадьбы",
      thumbnail: "https://images.unsplash.com/photo-1511895426328-dc8714191300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjZWxlYnJhdGlvbiUyMGdpZnR8ZW58MXx8fHwxNzU4MDI0OTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "2:34",
      views: "12.3К"
    },
    {
      id: 2,
      title: "Романтический сюрприз",
      description: "Подарок на день рождения любимой",
      thumbnail: "https://images.unsplash.com/photo-1607103509048-3b0c7ac644e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoYXBweSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc1ODAyNDk1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "1:45",
      views: "8.7К"
    },
    {
      id: 3,
      title: "Корпоративный глэмпинг",
      description: "Сертификат лучшему сотруднику месяца",
      thumbnail: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBnaWZ0JTIwZ2l2aW5nfGVufDF8fHx8MTc1ODAyNDk1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3:12",
      views: "15.1К"
    }
  ]

  // Фильтрация отзывов
  const filteredReviews = filter === 'all' 
    ? allReviews 
    : allReviews.filter(review => review.category === filter)

  const displayedReviews = filteredReviews.slice(0, visibleReviews)

  const loadMore = () => {
    setVisibleReviews(prev => prev + 3)
  }

  const handleFilterChange = (newFilter: 'all' | 'gift' | 'recipient' | 'corporate') => {
    setFilter(newFilter)
    setVisibleReviews(3) // Сброс до начального значения при смене фильтра
  }

  // Склонение слова "отзыв"
  const getReviewWord = (count: number) => {
    const lastDigit = count % 10
    const lastTwoDigits = count % 100
    
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return 'отзывов'
    }
    if (lastDigit === 1) {
      return 'отзыв'
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return 'отзыва'
    }
    return 'отзывов'
  }

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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-emerald-200">
              <Star className="w-4 h-4 mr-2 fill-emerald-600" />
              15 000+ довольных клиентов
            </Badge>
            
            <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
              Смотрите,<br />что о нас говорят
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Реальные истории людей, которые дарили впечатления или получали незабываемый отдых в глэмпингах
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
                <div className="text-4xl text-emerald-600 mb-2">15 000+</div>
                <p className="text-gray-600">Довольных клиентов</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-4xl text-emerald-600">4.9</span>
                  <Star className="w-8 h-8 text-emerald-500 fill-emerald-500" />
                </div>
                <p className="text-gray-600">Средняя оценка</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
                <div className="text-4xl text-emerald-600 mb-2">98%</div>
                <p className="text-gray-600">Рекомендуют друзьям</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-b border-gray-200 sticky top-0 bg-white z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => handleFilterChange('all')}
              className={filter === 'all' ? 'bg-emerald-600 hover:bg-emerald-700' : 'hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300'}
            >
              Все отзывы ({allReviews.length})
            </Button>
            <Button
              variant={filter === 'gift' ? 'default' : 'outline'}
              onClick={() => handleFilterChange('gift')}
              className={filter === 'gift' ? 'bg-emerald-600 hover:bg-emerald-700' : 'hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300'}
            >
              <Heart className="w-4 h-4 mr-2" />
              Дарители ({allReviews.filter(r => r.category === 'gift').length})
            </Button>
            <Button
              variant={filter === 'recipient' ? 'default' : 'outline'}
              onClick={() => handleFilterChange('recipient')}
              className={filter === 'recipient' ? 'bg-emerald-600 hover:bg-emerald-700' : 'hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300'}
            >
              <ThumbsUp className="w-4 h-4 mr-2" />
              Получатели ({allReviews.filter(r => r.category === 'recipient').length})
            </Button>
            <Button
              variant={filter === 'corporate' ? 'default' : 'outline'}
              onClick={() => handleFilterChange('corporate')}
              className={filter === 'corporate' ? 'bg-emerald-600 hover:bg-emerald-700' : 'hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300'}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Корпоративные ({allReviews.filter(r => r.category === 'corporate').length})
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedReviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={review.photo}
                    alt={`Фото отзыва ${review.username}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={
                      review.category === 'gift' 
                        ? 'bg-pink-100 text-pink-700 border-pink-200' 
                        : review.category === 'recipient'
                        ? 'bg-blue-100 text-blue-700 border-blue-200'
                        : 'bg-purple-100 text-purple-700 border-purple-200'
                    }>
                      {review.category === 'gift' && <Heart className="w-3 h-3 mr-1" />}
                      {review.category === 'recipient' && <ThumbsUp className="w-3 h-3 mr-1" />}
                      {review.category === 'corporate' && <MessageCircle className="w-3 h-3 mr-1" />}
                      {review.category === 'gift' ? 'Даритель' : review.category === 'recipient' ? 'Получатель' : 'Корпоратив'}
                    </Badge>
                  </div>

                  {/* Quote Icon Overlay */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Quote className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {review.text}
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                        <ImageWithFallback
                          src={review.avatar}
                          alt={review.username}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-900">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.username}</p>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-400">
                      {review.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleReviews < filteredReviews.length && (
            <div className="text-center mt-12">
              <Button
                onClick={loadMore}
                variant="outline"
                className="bg-white hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 px-8 py-3"
              >
                <ChevronDown className="w-4 h-4 mr-2" />
                Загрузить ещё 3 {getReviewWord(3)}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Video Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200 border-red-200">
              <Play className="w-4 h-4 mr-2" />
              Видео отзывы
            </Badge>
            <h2 className="text-4xl text-gray-900 mb-4">
              Моменты радости
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Смотрите реальные эмоции людей, получивших сертификат или отдохнувших в глэмпинге
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoReviews.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl">
                      <Play className="w-10 h-10 text-emerald-600 ml-1 fill-emerald-600" />
                    </div>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {video.duration}
                  </div>

                  {/* Views badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    <Camera className="w-3 h-3" />
                    {video.views} просмотров
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Share Your Story */}
      <section className="py-10 bg-white border-t-4 border-emerald-500">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            <Star className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            <Star className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            <Star className="w-5 h-5 text-emerald-600 fill-emerald-600" />
          </div>
          
          <h3 className="text-xl text-gray-900 mb-2">
            Поделитесь своей историей
          </h3>
          
          <p className="text-sm text-gray-600 mb-5">
            Расскажите о своих впечатлениях и получите бонусные сертификаты
          </p>

          <Button 
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            onClick={() => setIsFormOpen(true)}
          >
            <Send className="w-4 h-4 mr-2" />
            Отправить отзыв
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer 
        onNavigateToHome={onNavigateToHome}
        onNavigateToGiftOptions={onNavigateToGiftOptions}
        onNavigateToDelivery={onNavigateToDelivery}
        onNavigateToCorporate={onNavigateToCorporate}
        onNavigateToReviews={onNavigateToReviews}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToActivation={onNavigateToActivation}
        onNavigateToHowItWorks={onNavigateToHowItWorks}
      />

      {/* Review Submission Form */}
      <ReviewSubmissionForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSuccess={() => setShowSuccessDialog(true)}
      />

      {/* Success Dialog */}
      <SuccessDialog
        isOpen={showSuccessDialog}
        onClose={() => setShowSuccessDialog(false)}
      />
    </div>
  )
}

export default ReviewsPage