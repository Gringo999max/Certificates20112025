import { useState } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

const reviews = [
  {
    id: 1,
    name: "@sergey_p",
    text: "Жена подарила мне этот сертификат — это было просто волшебно! Давно мечтал выбраться из города. Поездка полностью превзошла ожидания: полная невозмутимость в невероятно комфортных условиях.",
    avatar: "https://images.unsplash.com/photo-1625181796571-7f0d4571ab12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXQlMjBoYXBweXxlbnwxfHx8fDE3NTc1MzI1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "@anna.vasileva",
    text: "Искала особенный подарок на юбилей подруге — что-то большее, чем духи. Сертификат от Глэмпинги.рф стал идеальным решением! Подруга до сих пор в восторге от своих выходных. Серьезно, лучшая идея для подарка, когда хочешь по-настоящему удивить!",
    avatar: "https://images.unsplash.com/photo-1672675611932-9d722165f0ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBzbWlsZXxlbnwxfHx8fDE3NTc1MzI1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "@vika_travels",
    text: "Лучший подарок — это впечатления! Благодаря сертификату от родителей мы провели выходные в сказочной атмосфере на природе. Полное расслабление и отличный сервис!",
    avatar: "https://images.unsplash.com/photo-1753161023962-665967602405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwcG9ydHJhaXQlMjBjdXN0b21lcnxlbnwxfHx8fDE3NTc1MzI1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "@kate_yoga",
    text: "Мои нервы были на пределе, и этот сертификат стал настоящим спасением. Глэмпинг дал полное умиротворение — единение с природой, но со всеми удобствами. Я снова готова покорять мир!",
    avatar: "https://images.unsplash.com/photo-1704054006064-2c5b922e7a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwaGFwcHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTc0NzY3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    name: "@elena_m",
    text: "Так удобно! Сын подарил нам с мужем сертификат, и мы сами выбрали дату и место. Муж был в шоке от такой свободы выбора! Идеальное решение для тех, кто хочет сам решать, где и когда отдыхать.",
    avatar: "https://images.unsplash.com/photo-1733180961468-3c075a25da01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBiZWFyZCUyMGhhcHB5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3NTMyNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  // Get visible reviews based on screen size
  const getVisibleReviews = (itemsPerView: number) => {
    const visibleReviews = []
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % reviews.length
      visibleReviews.push(reviews[index])
    }
    return visibleReviews
  }

  return (
    <section className="w-full px-6 py-8 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            Отзывы счастливых получателей
          </h2>
          <p className="text-gray-600/80 max-w-3xl mx-auto leading-relaxed">
            Более 15 000 довольных клиентов уже оценили качество наших глэмпингов и удобство мгновенного бронирования
          </p>
        </div>

        {/* Carousel Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5 text-emerald-600" />
          </Button>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5 text-emerald-600" />
          </Button>

          {/* Desktop: 3 cards in a row */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 transition-all duration-500">
            {getVisibleReviews(3).map((review, index) => (
              <div key={`${review.id}-${currentIndex}-${index}`} className="group">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-200/50 h-full flex flex-col">
                  <div className="flex-1 mb-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="relative">
                        <ImageWithFallback
                          src={review.avatar}
                          alt={`Аватар ${review.name}`}
                          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white">
                          <Star className="w-3 h-3 text-white fill-current" />
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-800/90 text-sm leading-relaxed mb-4 line-clamp-6">
                      {review.text}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <p className="text-emerald-700/80 text-sm font-medium tracking-wide">
                      {review.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet: 2 cards per row */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6 transition-all duration-500">
            {getVisibleReviews(2).map((review, index) => (
              <div key={`${review.id}-${currentIndex}-${index}`} className="group">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-200/50 h-full flex flex-col">
                  <div className="flex-1 mb-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="relative">
                        <ImageWithFallback
                          src={review.avatar}
                          alt={`Аватар ${review.name}`}
                          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white">
                          <Star className="w-3 h-3 text-white fill-current" />
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-800/90 text-sm leading-relaxed mb-4 line-clamp-4">
                      {review.text}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <p className="text-emerald-700/80 text-sm font-medium tracking-wide">
                      {review.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: 1 card per row */}
          <div className="grid grid-cols-1 md:hidden gap-6 transition-all duration-500">
            {getVisibleReviews(1).map((review, index) => (
              <div key={`${review.id}-${currentIndex}-${index}`} className="group">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-200/50">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <ImageWithFallback
                        src={review.avatar}
                        alt={`Аватар ${review.name}`}
                        className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-white">
                        <Star className="w-2.5 h-2.5 text-white fill-current" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-gray-800/90 text-sm leading-relaxed mb-3">
                        {review.text}
                      </p>
                      <p className="text-emerald-700/80 text-sm font-medium tracking-wide">
                        {review.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-emerald-600 w-8'
                    : 'bg-emerald-200 hover:bg-emerald-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2 tracking-tight">15 000+</div>
            <p className="text-gray-600/80 text-sm leading-relaxed">Довольных клиентов</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2 tracking-tight">4.9</div>
            <p className="text-gray-600/80 text-sm leading-relaxed">Средняя оценка</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2 tracking-tight">98%</div>
            <p className="text-gray-600/80 text-sm leading-relaxed">Рекомендуют друзьям</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection