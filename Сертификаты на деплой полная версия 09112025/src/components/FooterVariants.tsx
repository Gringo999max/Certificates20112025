import { Mountain, Users, Building2, Info, Mail, MapPin, FileText, Phone } from 'lucide-react'

interface FooterVariantsProps {
  variant?: 'v1' | 'v2' | 'v3' | 'v4' | 'v5'
  onNavigateToHome?: () => void
  onNavigateToGiftOptions?: () => void
  onNavigateToDelivery?: () => void
  onNavigateToCorporate?: () => void
  onNavigateToReviews?: () => void
  onNavigateToAbout?: () => void
  onNavigateToActivation?: () => void
  onNavigateToHowItWorks?: () => void
}

export function FooterVariants({ 
  variant = 'v1',
  onNavigateToHome,
  onNavigateToGiftOptions,
  onNavigateToDelivery,
  onNavigateToCorporate,
  onNavigateToReviews,
  onNavigateToAbout,
  onNavigateToActivation,
  onNavigateToHowItWorks
}: FooterVariantsProps) {
  // Автоматический расчет года для копирайта
  const startYear = 2019
  const currentYear = new Date().getFullYear()
  const yearRange = startYear === currentYear ? `${currentYear}` : `${startYear}–${currentYear}`

  const footerData = {
    company: {
      name: 'ГЛЭМПИНГИ.РФ',
      year: '2025',
      yearRange: yearRange,
      copyright: 'Все права защищены ©',
      privacy: 'Политика конфиденциальности',
      agreement: 'Пользовательского соглашения по подарочным сертификатам',
      disclaimer: 'Информация не является публичной офертой, которая определяется положениями Статья 437 ГК РФ'
    },
    guests: {
      title: 'ГОСТЯМ',
      links: [
        'Подарочный сертификат',
        'Отзывы',
        'Глэмпинги Подмосковья',
        'Ленинградская область',
        'Республика Карелия',
        'Республика Алтай',
        'Тверская область',
        'Тульская область',
        'Популярные подборки',
        'Карта Глэмпингов России',
        'Вопросы и ответы',
        'Интересные статьи',
        'Контакты'
      ]
    },
    owners: {
      title: 'ВЛАДЕЛЬЦАМ ОБЪЕКТОВ',
      links: [
        'Вход для владельцев объектов размещения',
        'Договор Оферта',
        'Реквизиты',
        'Инструкция по регистрации объекта на сайте Глэмпинги.рф'
      ]
    },
    about: {
      title: 'О НАС',
      links: [
        'О нас',
        'СМИ и партнеры о нас'
      ]
    }
  }

  // Варинт 1: Современный светлый с декоративными элементами
  if (variant === 'v1') {
    return (
      <footer className="relative bg-gradient-to-br from-white via-emerald-50 to-blue-50 text-gray-900 border-t border-gray-200">
        {/* Декоративные элементы */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* Основной контент */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Колонка с логотипом и информацией */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Mountain className="w-8 h-8 text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900">{footerData.company.name}</h3>
              </div>
              <p className="text-sm text-gray-600">
                {footerData.company.name} - {footerData.company.year}. {footerData.company.copyright}
              </p>
              <div className="space-y-2">
                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700 block transition-colors">
                  {footerData.company.privacy}
                </a>
                <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700 block transition-colors">
                  {footerData.company.agreement}
                </a>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                {footerData.company.disclaimer}
              </p>
              <div className="flex gap-3 pt-4">
                <a href="#" className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors shadow-md">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full flex items-center justify-center transition-colors shadow-md">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm5.5-8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Гостям */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-emerald-600" />
                <h4 className="font-semibold text-gray-900 tracking-wide">{footerData.guests.title}</h4>
              </div>
              <ul className="space-y-2">
                {footerData.guests.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors flex items-start gap-2 group">
                      <span className="text-emerald-600 mt-1 group-hover:translate-x-1 transition-transform">›</span>
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Владельцам объектов */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-emerald-600" />
                <h4 className="font-semibold text-gray-900 tracking-wide">{footerData.owners.title}</h4>
              </div>
              <ul className="space-y-2">
                {footerData.owners.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors flex items-start gap-2 group">
                      <span className="text-emerald-600 mt-1 group-hover:translate-x-1 transition-transform">›</span>
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* О нас */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-emerald-600" />
                <h4 className="font-semibold text-gray-900 tracking-wide">{footerData.about.title}</h4>
              </div>
              <ul className="space-y-2">
                {footerData.about.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors flex items-start gap-2 group">
                      <span className="text-emerald-600 mt-1 group-hover:translate-x-1 transition-transform">›</span>
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Разделитель */}
          <div className="border-t border-gray-300 pt-8">
            <p className="text-center text-sm text-gray-600">
              © {footerData.company.yearRange} {footerData.company.name}. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    )
  }

  // Вариант 2: Светлый с волнистым разделителем
  if (variant === 'v2') {
    return (
      <footer className="bg-white text-gray-900">
        {/* Верхняя волна */}
        <div className="relative h-12 bg-gradient-to-r from-emerald-500 to-emerald-600">
          <svg className="absolute bottom-0 w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-white"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Колонка 1: Логотип и инфо */}
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{footerData.company.name}</h3>
                <p className="text-sm text-gray-600">{footerData.company.year}</p>
              </div>
              
              <div className="space-y-3">
                <a href="#" className="block text-sm text-emerald-600 hover:text-emerald-700 transition-colors">
                  {footerData.company.privacy}
                </a>
                <a href="#" className="block text-sm text-emerald-600 hover:text-emerald-700 transition-colors">
                  {footerData.company.agreement}
                </a>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-200 pt-4">
                {footerData.company.disclaimer}
              </p>

              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg flex items-center justify-center transition-all transform hover:scale-110">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm5.5-8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Колонка 2: Гостям */}
            <div>
              <h4 className="font-bold text-lg mb-6 pb-2 border-b-2 border-emerald-500 inline-block text-gray-900">
                {footerData.guests.title}
              </h4>
              <ul className="space-y-3 mt-6">
                {footerData.guests.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 hover:pl-2 transition-all duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Колонка 3: Владельцам */}
            <div>
              <h4 className="font-bold text-lg mb-6 pb-2 border-b-2 border-emerald-500 inline-block text-gray-900">
                {footerData.owners.title}
              </h4>
              <ul className="space-y-3 mt-6">
                {footerData.owners.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 hover:pl-2 transition-all duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Колонка 4: О нас */}
            <div>
              <h4 className="font-bold text-lg mb-6 pb-2 border-b-2 border-emerald-500 inline-block text-gray-900">
                {footerData.about.title}
              </h4>
              <ul className="space-y-3 mt-6">
                {footerData.about.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 hover:pl-2 transition-all duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Нижняя часть */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              © {footerData.company.yearRange} {footerData.company.name}. {footerData.company.copyright}
            </p>
          </div>
        </div>
      </footer>
    )
  }

  // Вариант 3: Асимметричный светлый с акцентной карточкой
  if (variant === 'v3') {
    return (
      <footer className="bg-gradient-to-b from-gray-50 to-white text-gray-900 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Левая большая колонка */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                    <Mountain className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{footerData.company.name}</h3>
                    <p className="text-sm text-emerald-100">Отдых на природе</p>
                  </div>
                </div>

                <p className="text-white mb-6 leading-relaxed">
                  Подарите незабываемые впечатления! Более 500 уникальных глэмпингов по всей России.
                </p>

                <div className="space-y-3 mb-6">
                  <a href="#" className="block text-sm text-white hover:text-emerald-100 transition-colors underline">
                    {footerData.company.privacy}
                  </a>
                  <a href="#" className="block text-sm text-white hover:text-emerald-100 transition-colors underline">
                    {footerData.company.agreement}
                  </a>
                </div>

                <div className="flex gap-3">
                  <a href="#" className="w-11 h-11 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-11 h-11 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl flex items-center justify-center transition-all">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm5.5-8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed bg-gray-100 p-4 rounded-lg border border-gray-200">
                {footerData.company.disclaimer}
              </p>
            </div>

            {/* Правые три колонки */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Гостям */}
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full">
                    <Users className="w-4 h-4 text-emerald-600" />
                    <h4 className="font-bold text-sm text-emerald-700">{footerData.guests.title}</h4>
                  </div>
                </div>
                <ul className="space-y-3">
                  {footerData.guests.links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2 group">
                        <span className="w-1 h-1 bg-emerald-500 rounded-full group-hover:w-2 transition-all"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Владельцам */}
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <h4 className="font-bold text-sm text-blue-700">{footerData.owners.title}</h4>
                  </div>
                </div>
                <ul className="space-y-3">
                  {footerData.owners.links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                        <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* О нас */}
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                    <Info className="w-4 h-4 text-purple-600" />
                    <h4 className="font-bold text-sm text-purple-700">{footerData.about.title}</h4>
                  </div>
                </div>
                <ul className="space-y-3">
                  {footerData.about.links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2 group">
                        <span className="w-1 h-1 bg-purple-500 rounded-full group-hover:w-2 transition-all"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Нижняя часть */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                © {footerData.company.yearRange} {footerData.company.name}. {footerData.company.copyright}
              </p>
              <div className="flex gap-6 text-sm text-gray-600">
                <a href="#" className="hover:text-emerald-600 transition-colors">Контакты</a>
                <a href="#" className="hover:text-emerald-600 transition-colors">Поддержка</a>
                <a href="#" className="hover:text-emerald-600 transition-colors">Карта сайта</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  // Вариант 4: Светлый минималистичный с карточками
  if (variant === 'v4') {
    return (
      <footer className="bg-gradient-to-b from-gray-50 to-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Основной контент */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Карточка: Гостям */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-lg text-gray-900">{footerData.guests.title}</h4>
              </div>
              <ul className="space-y-3">
                {footerData.guests.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2 group/link">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
                      <span className="group-hover/link:translate-x-1 transition-transform">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Карточка: Владельцам объектов */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-lg text-gray-900">{footerData.owners.title}</h4>
              </div>
              <ul className="space-y-3">
                {footerData.owners.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group/link">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
                      <span className="group-hover/link:translate-x-1 transition-transform">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Карточка: О нас */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-lg text-gray-900">{footerData.about.title}</h4>
              </div>
              <ul className="space-y-3">
                {footerData.about.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2 group/link">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
                      <span className="group-hover/link:translate-x-1 transition-transform">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Карточка: Контакты и социальные сети */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 shadow-lg text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-lg">{footerData.company.name}</h4>
              </div>
              
              <p className="text-sm text-emerald-50 mb-6 leading-relaxed">
                Откройте мир незабываемого отдыха на природе в более чем 500 локациях по России
              </p>

              <div className="space-y-3 mb-6">
                <a href="#" className="block text-sm text-white/90 hover:text-white transition-colors underline">
                  {footerData.company.privacy}
                </a>
                <a href="#" className="block text-sm text-white/90 hover:text-white transition-colors underline">
                  {footerData.company.agreement}
                </a>
              </div>

              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm5.5-8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer и Copyright */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              {footerData.company.disclaimer}
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-600 text-center">
                © {footerData.company.yearRange} {footerData.company.name}. {footerData.company.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  // Вариант 5: Двухуровневый с яркими визуальными элементами
  if (variant === 'v5') {
    return (
      <footer className="relative overflow-hidden">
        {/* Верхняя часть - основной контент */}
        <div className="relative bg-white border-t border-emerald-400">
          {/* Декоративные круги */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-500 rounded-full"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500 rounded-full"></div>
            <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-purple-500 rounded-full"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Левая часть - Логотип и описание (4 колонки) */}
              <div className="lg:col-span-4">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-700 rounded-2xl flex items-center justify-center shadow-xl transform rotate-6 hover:rotate-0 transition-transform">
                    <Mountain className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{footerData.company.name}</h3>
                    <p className="text-sm text-emerald-600">Отдых на природе с комфортом</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Подарите незабываемый отдых! Более 500 уникальных глэмпингов в 40 регионах России ждут ваших гостей.
                </p>

                <div className="flex gap-4 mb-6">
                  <a href="#" className="flex-1 h-12 bg-blue-500 hover:bg-blue-600 rounded-xl flex items-center justify-center text-white transition-all shadow-md hover:shadow-lg">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </a>
                  <a href="#" className="flex-1 h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl flex items-center justify-center text-white transition-all shadow-md hover:shadow-lg">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.07 4H8.93C7.03 4 6 5.03 6 6.93v10.14C6 19.03 7.03 20 8.93 20h6.14c1.9 0 2.93-1.03 2.93-2.93V6.93C18 5.03 16.97 4 15.07 4zm1.41 11.62c-.13.53-.67 1.07-1.2 1.19-.35.08-.94.17-2.77.17-2.67 0-3.04-.16-3.5-.25-.52-.12-1.06-.66-1.19-1.19C7.74 15.04 7.66 14.46 7.66 12c0-2.46.08-3.04.16-3.54.13-.53.67-1.07 1.19-1.19.46-.09.83-.25 3.5-.25 1.83 0 2.42.09 2.77.17.53.12 1.07.66 1.2 1.19.08.5.16 1.08.16 3.54 0 2.46-.08 3.04-.16 3.62z"/>
                      <path d="M12.28 9.53c-.26-.17-.59-.17-.85 0l-2.11 1.36c-.33.21-.48.61-.39.98.09.37.42.63.8.63h4.22c.38 0 .71-.26.8-.63.09-.37-.06-.77-.39-.98l-2.11-1.36z"/>
                    </svg>
                  </a>
                </div>

                <div className="space-y-2">
                  <a href="#" className="block text-sm text-emerald-600 hover:text-emerald-700 transition-colors font-medium">
                    → {footerData.company.privacy}
                  </a>
                  <a href="#" className="block text-sm text-emerald-600 hover:text-emerald-700 transition-colors font-medium">
                    → {footerData.company.agreement}
                  </a>
                </div>
              </div>

              {/* Правая часть - Ссылки (8 колонок) */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Гостям */}
                <div>
                  <div className="flex items-center gap-2 mb-6 pb-3 border-b-2 border-emerald-500">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">{footerData.guests.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {footerData.guests.links.map((link, index) => (
                      <li key={index}>
                        <a 
                          href="#" 
                          className="text-sm text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2 group"
                          onClick={(e) => {
                            e.preventDefault()
                            if (link === 'Отзывы' && onNavigateToReviews) {
                              onNavigateToReviews()
                            } else if (link === 'Подарочный сертификат' && onNavigateToHome) {
                              onNavigateToHome()
                            }
                          }}
                        >
                          <span className="w-0 group-hover:w-3 h-0.5 bg-emerald-500 transition-all"></span>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Владельцам */}
                <div>
                  <div className="flex items-center gap-2 mb-6 pb-3 border-b-2 border-blue-500">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">{footerData.owners.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {footerData.owners.links.map((link, index) => (
                      <li key={index}>
                        <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                          <span className="w-0 group-hover:w-3 h-0.5 bg-blue-500 transition-all"></span>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* О нас */}
                <div>
                  <div className="flex items-center gap-2 mb-6 pb-3 border-b-2 border-purple-500">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Info className="w-5 h-5 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">{footerData.about.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {footerData.about.links.map((link, index) => (
                      <li key={index}>
                        <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2 group">
                          <span className="w-0 group-hover:w-3 h-0.5 bg-purple-500 transition-all"></span>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть - Copyright и disclaimer */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
              <p className="text-sm text-gray-400">
                © {footerData.company.yearRange} {footerData.company.name}. {footerData.company.copyright}
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-emerald-400 transition-colors">Контакты</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Поддержка</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">FAQ</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Карта сайта</a>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-700 pt-6">
              {footerData.company.disclaimer}
            </p>
          </div>
        </div>
      </footer>
    )
  }

  return null
}