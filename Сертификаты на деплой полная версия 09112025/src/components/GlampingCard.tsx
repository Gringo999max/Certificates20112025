import { ImageWithFallback } from './figma/ImageWithFallback'
import { ArrowRight } from 'lucide-react'

interface GlampingCardProps {
  title: string
  subtitle: string
  description: string
  priceFrom: string
  locations: string
  features: string
  image: string
  badge?: string
  onClick?: () => void
}

export function GlampingCard({ 
  title, 
  subtitle,
  description, 
  priceFrom, 
  locations, 
  features, 
  image,
  badge,
  onClick
}: GlampingCardProps) {
  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {badge && (
          <div className="absolute top-3 left-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {badge}
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
          {locations}
        </div>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
          {features}
        </div>
      </div>
      
      <div className="p-4 group-hover:-translate-y-2 transition-transform duration-300">
        <h3 className="font-semibold text-base mb-1 leading-relaxed tracking-tight">{title}</h3>
        <p className="text-gray-500/80 text-xs mb-2 leading-relaxed">{subtitle}</p>
        <p className="text-gray-600/75 text-xs mb-3 line-clamp-2 leading-relaxed">{description}</p>
        
        <div className="flex items-end justify-between h-8">
          <div>
            <span className="text-gray-500/70 text-xs tracking-wide">от </span>
            <span className="text-lg font-extrabold text-gray-900 tracking-tight">{priceFrom}</span>
            <span className="text-gray-500/70 text-xs tracking-wide"> / ночь</span>
          </div>
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-50 group-hover:bg-emerald-600 transition-colors duration-300">
            <ArrowRight className="w-3 h-3 text-emerald-600 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>
    </div>
  )
}