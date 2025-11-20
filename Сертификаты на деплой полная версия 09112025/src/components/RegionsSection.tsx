import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

const regions = [
  {
    name: "Московская область",
    description: "Глэмпинги рядом со столицей для незабываемого отдыха",
    image: "https://images.unsplash.com/photo-1655985313952-4a182841d6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Njb3clMjByZWdpb24lMjBuYXRpb25hbCUyMHBhcmslMjBmb3Jlc3RzfGVufDF8fHx8MTc1NzkzMDA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Регионы золотого кольца",
    description: "Древние города с православными храмами и богатой историей",
    image: "https://images.unsplash.com/photo-1627907107700-eae68f80bdbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXNzaWElMjBnb2xkZW4lMjByaW5nJTIwbW9uYXN0ZXJ5JTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzU3OTMwNDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Ленинградская область", 
    description: "Уютные глэмпинги в живописных местах Северной столицы",
    image: "https://images.unsplash.com/photo-1719681820293-f2a4f2e48a2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW5pbmdyYWQlMjByZWdpb24lMjBsYWRvZ2ElMjBsYWtlJTIwbmF0dXJlfGVufDF8fHx8MTc1NzkzMDA2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Республика Татарстан",
    description: "Комфортный отдых в ргионе с богатой культурой",
    image: "https://images.unsplash.com/photo-1727640500482-568543804bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXRhcnN0YW4lMjB2b2xnYSUyMHJpdmVyJTIwbmF0dXJlfGVufDF8fHx8MTc1NzkzMDA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Краснодарский край",
    description: "Глэмпинги у Черного моря и в горах Кавказа", 
    image: "https://images.unsplash.com/photo-1690256184500-70544223ab61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXVjYXN1cyUyMG1vdW50YWlucyUyMHNvY2hpJTIwcm9zYSUyMGtodXRvcnxlbnwxfHx8fDE3NTc5MzAwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Свердловская область",
    description: "Отдых на Урале среди живописных гор и лесов",
    image: "https://images.unsplash.com/photo-1654192541419-eea56035d65d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmFsJTIwbW91bnRhaW5zJTIwdGFnYW5heSUyMG5hdGlvbmFsJTIwcGFya3xlbnwxfHx8fDE3NTc5MzAwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Нижегородская область",
    description: "Глэмпинги на берегах Волги  в живописной природе",
    image: "https://images.unsplash.com/photo-1715252315218-123d39389b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xnYSUyMHJpdmVyJTIwbml6aG5peSUyMG5vdmdvcm9kfGVufDF8fHx8MTc1NzkyOTczN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Самарская область",
    description: "Уютные места для отдыха в Поволжье",
    image: "https://images.unsplash.com/photo-1755789383349-c56c22ec7e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1hcmElMjBiZW5kJTIwdm9sZ2ElMjByaXZlciUyMG5hdHVyZSUyMHJlc2VydmV8ZW58MXx8fHwxNzU3OTMwMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Республика Карелия",
    description: "Первозданная природа, озера и леса севера",
    image: "https://images.unsplash.com/photo-1750590525490-61b67c91d751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJlbGlhJTIwd2lsZGVybmVzcyUyMGxha2VzJTIwZm9yZXN0c3xlbnwxfHx8fDE3NTc5Mjk3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Кавказ",
    description: "Величественные горы и уникальная природа",
    image: "https://images.unsplash.com/photo-1544376383-f6418ae57526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXVjYXN1cyUyMG1vdW50YWluJTIwcGVha3MlMjBzbm93fGVufDF8fHx8MTc1NzkyOTc0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Озеро Байкал",
    description: "Жемчужина Сибири - самое глубокое озеро в мире",
    image: "https://images.unsplash.com/photo-1723606085770-9693d60f9ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwYmFpa2FsJTIwY3J5c3RhbCUyMGNsZWFyfGVufDF8fHx8MTc1NzkyOTc1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Алтай",
    description: "Горные пейзажи и нетронутая природа Сибири",
    image: "https://images.unsplash.com/photo-1667389812429-c5492bdd1342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHRhaSUyMGdvbGRlbiUyMG1vdW50YWlucyUyMHN0ZXBwZXxlbnwxfHx8fDE3NTc5Mjk3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Калининградская область",
    description: "Балтийское побережье и янтарные берега",
    image: "https://images.unsplash.com/photo-1687652967163-3f31838a21ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYWxpbmluZ3JhZCUyMGJhbHRpYyUyMHNlYSUyMGFtYmVyfGVufDF8fHx8MTc1NzkyOTc1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Камчатка",
    description: "Край вулканов, гейзеров и дикой природы",
    image: "https://images.unsplash.com/photo-1669681056199-4f6dca0cd6e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYW1jaGF0a2ElMjB2b2xjYW5vZXMlMjBnZXlzZXJzJTIwcGVuaW5zdWxhfGVufDF8fHx8MTc1NzkzMDA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Сахалин",
    description: "Остров с уникальной природой и морскими пейзажами",
    image: "https://images.unsplash.com/photo-1647895330641-4a961bee406c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWtoYWxpbiUyMGlzbGFuZCUyMGxpZ2h0aG91c2UlMjBuYXR1cmV8ZW58MXx8fHwxNzU3OTMwMDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
]

export function RegionsSection() {
  return (
    <section className="w-full px-6 py-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-gray-900 font-bold text-[36px]">
            Где можно будет отдохнуть
          </h2>
          <a 
            href="#" 
            className="text-green-600 hover:text-green-700 transition-colors text-[18px]"
          >
            Перейти в каталог →
          </a>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {regions.map((region, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
                  <ImageWithFallback
                    src={region.image}
                    alt={region.name}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-4">
                    <h3 className="text-gray-900 mb-2 text-[20px]">{region.name}</h3>
                    <p className="text-gray-600 text-[16px] leading-relaxed">
                      {region.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white border-gray-200 hover:bg-gray-50" />
          <CarouselNext className="right-4 bg-white border-gray-200 hover:bg-gray-50" />
        </Carousel>
      </div>
    </section>
  )
}

export default RegionsSection