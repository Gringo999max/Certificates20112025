import { CertificateCard } from './CertificateCard'

const certificates = [
  {
    title: "Необычные выходные",
    description: "Много глэмпингов в живописных и красивых местах: необычные варианты для отдыха",
    price: "6 700 ₽",
    period: "ночь",
    variants: "100 вариантов",
    forPeople: "для двоих",
    image: "https://images.unsplash.com/photo-1666468275621-6e842e623227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMGNhYmluJTIwZm9yZXN0fGVufDF8fHx8MTc1NzQ5MjcxMXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Побег из города",
    description: "Домики и коттеджи для комфортного отдыха на природе",
    price: "9 900 ₽",
    period: "ночь",
    variants: "400 вариантов",
    forPeople: "для двоих",
    image: "https://images.unsplash.com/photo-1746478621977-0a6690e93982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMGx1eHVyeSUyMHRlbnR8ZW58MXx8fHwxNzU3NDk3MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Семейный уикенд",
    description: "Отели, усадьбы и коттеджи для отдыха с детьми",
    price: "13 700 ₽",
    period: "ночь",
    variants: "200 вариантов",
    forPeople: "",
    image: "https://images.unsplash.com/photo-1593053272490-e0ed6d6a42c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMGRvbWUlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzU3NDk3Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Отдых во SPA-сение",
    description: "Загородные и горячие отели с бассейнами и спа",
    price: "18 900 ₽",
    period: "ночь",
    variants: "60 вариантов",
    forPeople: "",
    image: "https://images.unsplash.com/photo-1720424643392-4b63bd63d271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMGdsYW1waW5nfGVufDF8fHx8MTc1NzQ5NzI4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Романтичный глэмпинг",
    description: "Уютные домики для влюбленных",
    price: "12 500 ₽",
    period: "ночь",
    variants: "100 вариантов",
    forPeople: "для влюбленных",
    image: "https://images.unsplash.com/photo-1746967114409-afd87e73055a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjByb21hbnRpYyUyMGdsYW1waW5nfGVufDF8fHx8MTc1NzQ5NzI4NXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Дом на дереве",
    description: "Экзотические места для особенного отдыха",
    price: "15 200 ₽",
    period: "ночь",
    variants: "100 вариантов",
    forPeople: "без ограничений",
    image: "https://images.unsplash.com/photo-1574415638920-a59fb48496fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMHRyZWVob3VzZSUyMG5hdHVyZXxlbnwxfHx8fDE3NTc0OTcyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
]

export function CertificatesSection() {
  return (
    <section className="w-full px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Выберите подарочный сертификат
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  )
}