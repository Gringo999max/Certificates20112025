import React from 'react'
import { Header } from './Header'
import Footer from './Footer'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, MapPin, Heart, Users, Award, Globe, ChevronLeft, ChevronRight } from 'lucide-react'

interface AboutPageProps {
  onNavigateToHome: () => void
  onNavigateToGiftOptions: () => void
  onNavigateToDelivery: () => void
  onNavigateToCorporate: () => void
  onNavigateToReviews: () => void
  onNavigateToAbout: () => void
  onNavigateToActivation?: () => void
}

interface TeamMember {
  id: number
  name: string
  role: string
  photo: string
  travel: string
  location: string
}

interface MediaItem {
  id: number
  title: string
  description: string
  link: string
  source: string
  image: string
  bgColor: string
  date: string
}

export function AboutPage({ onNavigateToHome, onNavigateToGiftOptions, onNavigateToDelivery, onNavigateToCorporate, onNavigateToReviews, onNavigateToAbout, onNavigateToActivation }: AboutPageProps) {
  
  // Данные команды
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Наталья",
      role: "Основательница",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4MDI3MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      travel: "экспедиция на Шантарские острова",
      location: "Камчатка"
    },
    {
      id: 2,
      name: "Михаил",
      role: "Сооснователь",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODAyNzA3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      travel: "проехал по Транссибу от Москвы до Улан-Удэ с остановкой во всех крупных городах",
      location: "Байкал"
    },
    {
      id: 3,
      name: "Марина",
      role: "Менеджер",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwc21pbGluZ3xlbnwxfHx8fDE3NTgwMjcwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      travel: "проехала от Белого моря до Черного моря на машине",
      location: "Горы, море и лес"
    },
    {
      id: 4,
      name: "Инна",
      role: "Менеджер",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1ODAyNzA4NXww&ixlib=rb-4.1.0&q=80&w=1080",
      travel: "восхождение на вулкан Мутновский",
      location: "Камчатка"
    },
    {
      id: 5,
      name: "Яна",
      role: "Аналитик",
      photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwcmVkJTIwaGFpcnxlbnwxfHx8fDE3NTgwMjcwODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      travel: "северное сияние в Териберке",
      location: "Карелия"
    }
  ]

  // Данные СМИ
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      title: "Глэмпинги.РФ – отдых мечты с шансом на победу вместе с О'кей!",
      description: "Подробнее об условиях участия можно узнать по ссылке",
      link: "https://www.okmarket.ru/promo-selo/",
      source: "О'кей",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMHNob3BwaW5nfGVufDF8fHx8MTc1ODAyNzA5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      bgColor: "from-yellow-100 to-orange-100",
      date: "2024-06-01"
    },
    {
      id: 2,
      title: "Глэмпинги.РФ – путешествие с питомцем в удовольствие",
      description: "Ищите список пет-френдли объектов на сайте Четыре лапы",
      link: "https://4lapy.ru/journal/info/glempingi-rf/",
      source: "Четыре лапы",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBmcmllbmRseSUyMHRyYXZlbHxlbnwxfHx8fDE3NTgwMjcwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bgColor: "from-emerald-100 to-green-100",
      date: "2024-03-01"
    },
    {
      id: 3,
      title: "Праздники на природе: выбираем глэмпинг и эко-отель",
      description: "Ищите нашу подборку на сайте Афиши",
      link: "https://www.afisha.ru/article/prazdniki-na-prirode-vybiraem-glemping-i-eko-otel-v-moskovskoy-oblasti/",
      source: "Афиша",
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBob2xpZGF5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU4MDI3MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      bgColor: "from-blue-100 to-purple-100",
      date: "2023-12-01"
    },
    {
      id: 4,
      title: "Интервью для Hotelier.pro",
      description: "Читайте наше интервью изданию Hotelier.pro",
      link: "https://hotelier.pro/interviews/item/osnovatel-portala-glempingi-rf-natalya-grinina-gostyam-vazhny-tseny-komfort-servis-razvlecheniya-i-pitanie-/",
      source: "Hotelier.pro",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGludGVydmlld3xlbnwxfHx8fDE3NTgwMjcxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bgColor: "from-gray-100 to-slate-100",
      date: "2023-10-01"
    },
    {
      id: 5,
      title: "Радиоэфир на Серебряном Дожде",
      description: "Запись эфира вы можете найти в Youtube",
      link: "https://youtu.be/PtePDBmY6iI?t=4268",
      source: "Серебряный Дождь",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRpbyUyMHN0dWRpb3xlbnwxfHx8fDE3NTgwMjcxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bgColor: "from-indigo-100 to-blue-100",
      date: "2023-08-01"
    },
    {
      id: 6,
      title: "Даже в лесу отдых может быть пятизвездочным",
      description: "Читайте наше интервью изданию Петербургский дневник",
      link: "https://spbdnevnik.ru/news/2022-05-30/na-prirode-s-komfortom-razbiraemsya-chto-takoe-glemping",
      source: "Петербургский дневник",
      image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBsdXh1cnklMjBsb2RnZXxlbnwxfHx8fDE3NTgwMjcxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bgColor: "from-green-100 to-emerald-100",
      date: "2022-05-01"
    }
  ]

  // State for media carousel
  const [mediaIndex, setMediaIndex] = React.useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = React.useState(false);

  // Helper function to get items per slide based on screen size
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 3; // Desktop
    }
    return 3;
  };

  const [itemsPerSlide, setItemsPerSlide] = React.useState(3);
  const totalSlides = React.useMemo(() => Math.ceil(mediaItems.length / itemsPerSlide), [mediaItems.length, itemsPerSlide]);

  // Auto-advance carousel every 5 seconds
  React.useEffect(() => {
    if (isCarouselHovered) return; // Don't auto-advance when hovering
    
    const interval = setInterval(() => {
      setMediaIndex((prev) => prev < totalSlides - 1 ? prev + 1 : 0);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalSlides, isCarouselHovered]);

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
      // Reset to first slide when resizing
      setMediaIndex(0);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = [
      'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
      'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

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
      />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex mb-8 text-sm text-gray-600">
            <button onClick={onNavigateToHome} className="hover:text-emerald-600 transition-colors">
              Главная
            </button>
            <span className="mx-2">›</span>
            <span className="text-gray-900">О нас</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                О сервисе <span className="text-emerald-600">Глэмпинги.рф</span>
              </h1>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge className="bg-emerald-100 text-emerald-700 px-4 py-2">
                  <Globe className="w-4 h-4 mr-2" />
                  350+ объектов
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  От Калининграда до Сахалина
                </Badge>
                <Badge className="bg-purple-100 text-purple-700 px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  С 2018 года
                </Badge>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed">
                Мы создали удобную платформу для поиска и бронирования уникальных глэмпингов 
                и эко-отелей по всей России, чтобы каждый путешественник мог найти идеальное место для отдыха.
              </p>
            </div>

            <div className="relative">
              {/* Video placeholder - в реальном проекте здесь будет видео */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-200 to-teal-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMG5hdHVyZSUyMHJlbGF4fGVufDF8fHx8MTc1ODAyNzEwOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="О нас видео"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[16px] border-l-emerald-600 border-y-[12px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              <strong>Всем привет!</strong>
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Меня зовут Наталья Гринина, я основательница проекта <strong className="text-emerald-600">Глэмпинги.рф</strong>.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              В 2018 году, во время увлекательных путешествий по России вместе с подругой, я задумалась о возможности создать свой собственный глэмпинг и одновременно разработать платформу для бронирования и продвижения подобных мест отдыха. Обладая опытом создания IT-продуктов, я решила воплотить эту идею в жизнь. Так возникли два проекта: <strong className="text-emerald-600">Глэмпинги.рф</strong> и наш собственный глэмпинг.
            </p>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-400 my-8">
              <p className="text-lg text-gray-800 mb-0">
                Сегодня, в середине 2024 года, наш каталог представляет более <strong className="text-yellow-600">350 уникальных глэмпингов и эко-отелей</strong>, охватывая пространство от Калининграда до Сахалина. Вместе с командой единомышленников мы создали удобную систему фильтров и подборок, чтобы каждый путешественник мог найти идеальное место для отдыха, соответствующее его желаниям и стилю жизни.
              </p>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              Мы понимаем, что выбор и планирование качественного отдыха на природе требует особого внимания. Поэтому мы стараемся предоставить посетителям нашего сайта исчерпывающую информацию о глэмпинге и эко-отелях, чтобы сделать процесс выбора места для отдыха максимально простым и информативным.
            </p>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-400 my-8">
              <p className="text-lg text-gray-800 mb-0">
                Мы стремимся <strong className="text-yellow-600">вдохновить вас на новые приключения</strong> и создать для вас незабываемые впечатления от отдыха на природе.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Команда единомышленников, объединенных любовью к путешествиям и стремлением создать лучший сервис для отдыха на природе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-700 backdrop-blur-sm">
                      {member.role}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{member.name}</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Самое запоминающееся путешествие:</p>
                      <p className="text-gray-800">{member.travel}</p>
                    </div>
                    
                    <div className="flex items-center text-emerald-600">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <p className="font-medium">Место силы: {member.location}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">СМИ о нас</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Нас замечают ведущие издания и медиа. Читайте публикации о нашем проекте и интервью с основателями.
            </p>
          </div>

          {/* Media Carousel */}
          <div 
            className="relative"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
          >
            {/* Navigation Arrows */}
            <button 
              onClick={() => setMediaIndex((prev) => prev > 0 ? prev - 1 : totalSlides - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button 
              onClick={() => setMediaIndex((prev) => prev < totalSlides - 1 ? prev + 1 : 0)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${mediaIndex * 100}%)` }}
              >
                {/* Group media items by 3 */}
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                      {mediaItems.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((item) => (
                        <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                          <div className={`relative aspect-video bg-gradient-to-br ${item.bgColor}`}>
                            <ImageWithFallback
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-white/90 text-gray-700 backdrop-blur-sm">
                                {item.source}
                              </Badge>
                            </div>
                            <div className="absolute top-4 right-4">
                              <Badge className="bg-emerald-600 text-white px-3 py-1 text-xs font-medium">
                                {formatDate(item.date)}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="p-6">
                            <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                              {item.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {item.description}
                            </p>
                            
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                              onClick={() => window.open(item.link, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Читать статью
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setMediaIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === mediaIndex ? 'bg-emerald-600' : 'bg-gray-300'
                  } ${index === mediaIndex && !isCarouselHovered ? 'animate-pulse' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <Heart className="w-16 h-16 text-white mx-auto mb-6" />
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Готовы к новым приключениям?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам путешественников, которые уже открыли для себя 
              удивительный мир глэмпингов с нашей помощью
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8"
                onClick={onNavigateToGiftOptions}
              >
                <Globe className="w-5 h-5 mr-2" />
                Найти глэмпинг
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 px-8"
                onClick={onNavigateToHome}
              >
                <Users className="w-5 h-5 mr-2" />
                На главную
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
            <p className="text-gray-400">Вдохновляем на новые приключения с 2018 года</p>
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

      <Footer />
    </div>
  )
}

export default AboutPage