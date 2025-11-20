import React from 'react'
import { ArrowRight, Building2, CheckCircle2, Users, Gift, TrendingUp, Heart, Star, Award, Sparkles } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface CorporateGiftSectionProps {
  onNavigateToCorporate?: () => void
}

// ========================================
// ВАРИАНТ 1: МИНИМАЛИСТИЧНЫЙ С ФОКУСОМ НА WELLBEING
// ========================================
export function CorporateGiftSectionVariant1({ onNavigateToCorporate }: CorporateGiftSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50/30 via-white to-teal-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-emerald-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Левая часть - контент */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 mb-6 rounded-full px-4 py-2 w-fit border border-emerald-200">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-semibold">Забота о команде</span>
              </div>
              
              <h2 className="text-gray-900 mb-4 leading-tight">
                Корпоративные подарки для заботы о сотрудниках
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Инвестируйте в wellbeing вашей команды. Сертификаты на глэмпинг — это не просто подарок, 
                а инструмент повышения лояльности и снижения выгорания.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">−23% выгорание</div>
                    <div className="text-xs text-gray-600 mt-1">По данным наших корпоративных клиентов</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">+89% лояльность</div>
                    <div className="text-xs text-gray-600 mt-1">Рост удовлетворенности работой</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Персональная упаковка</div>
                    <div className="text-xs text-gray-600 mt-1">С вашим логотипом и брендингом</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">От 10 сертификатов</div>
                    <div className="text-xs text-gray-600 mt-1">Специальные корпоративные тарифы</div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={onNavigateToCorporate}
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all duration-300 group shadow-md hover:shadow-xl w-fit"
              >
                <span className="font-semibold">Рассчитать стоимость</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Правая часть - изображение */}
            <div className="relative overflow-hidden min-h-[500px] lg:min-h-[600px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29yayUyMG9mZmljZSUyMGhhcHB5fGVufDF8fHx8MTc1ODAzMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Счастливая команда в офисе"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ========================================
// ВАРИАНТ 2: ПРЕМИУМ С МЕТРИКАМИ И ВИЗУАЛЬНЫМИ АКЦЕНТАМИ
// ========================================
export function CorporateGiftSectionVariant2({ onNavigateToCorporate }: CorporateGiftSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 mb-4 rounded-full px-4 py-2 border border-amber-500/30">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold">Премиум решение для бизнеса</span>
          </div>
          <h2 className="text-white mb-4 leading-tight">
            Корпоративные подарки нового уровня
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Повышайте вовлеченность команды и демонстрируйте заботу с помощью 
            премиальных сертификатов на глэмпинг
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Метрика 1 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">+89%</div>
                <div className="text-sm text-gray-400">Лояльность</div>
              </div>
            </div>
            <p className="text-sm text-gray-300">Рост удовлетворенности сотрудников после получения подарка</p>
          </div>

          {/* Метрика 2 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Компаний</div>
              </div>
            </div>
            <p className="text-sm text-gray-300">Доверяют нам корпоративные подарки и wellbeing программы</p>
          </div>

          {/* Метрика 3 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">−23%</div>
                <div className="text-sm text-gray-400">Выгорание</div>
              </div>
            </div>
            <p className="text-sm text-gray-300">Снижение уровня профессионального выгорания в команде</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Что входит в корпоративный пакет?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Персональное брендирование</div>
                    <div className="text-sm text-gray-400 mt-1">Ваш логотип, цвета и послание на каждом сертификате</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Премиум упаковка</div>
                    <div className="text-sm text-gray-400 mt-1">4 варианта подарочных коробок ручной работы с крафтовым дизайном</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Менеджер проекта</div>
                    <div className="text-sm text-gray-400 mt-1">Персональное сопровождение от заказа до получения</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Специальные тарифы</div>
                    <div className="text-sm text-gray-400 mt-1">Выгодные условия от 10 сертификатов</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1741217531460-fb52b48107b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGV4Y2hhbmdpbmclMjBnaWZ0JTIwZWxlZ2FudCUyMG1pbmltYWx8ZW58MXx8fHwxNzU3NTk4MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Элегантный обмен подарками"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-gray-400 text-sm mb-1">Минимальный заказ</div>
                <div className="text-white text-xl font-bold">От 10 сертификатов</div>
              </div>
              <button
                onClick={onNavigateToCorporate}
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all duration-300 group shadow-lg hover:shadow-emerald-500/20"
              >
                <span className="font-semibold">Оставить заявку</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ========================================
// ВАРИАНТ 3: КОМПАКТНЫЙ С ФОКУСОМ НА ДЕЙСТВИЕ (CTA)
// ========================================
export function CorporateGiftSectionVariant3({ onNavigateToCorporate }: CorporateGiftSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 to-emerald-900 rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Декоративные элементы */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Левая часть */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 mb-6 rounded-full px-4 py-2 w-fit border border-amber-500/30">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-semibold">Для бизнеса</span>
              </div>
              
              <h2 className="text-white mb-4 leading-tight">
                Подарите команде незабываемые впечатления
              </h2>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Сертификаты на глэмпинг — это больше, чем подарок. 
                Это забота о wellbeing ваших сотрудников и инвестиция в их лояльность.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">+89%</div>
                  <div className="text-sm text-gray-300">Рост лояльности</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-amber-400 mb-1">500+</div>
                  <div className="text-sm text-gray-300">Компаний с нами</div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white">
                  <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">Персональное брендирование с вашим логотипом</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-sm">4 варианта премиальной упаковки ручной работы</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">Специальные корпоративные тарифы от 10 штук</span>
                </div>
              </div>
              
              <button
                onClick={onNavigateToCorporate}
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 group shadow-lg hover:shadow-xl w-fit font-semibold"
              >
                <span>Рассчитать стоимость</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Правая часть - изображение */}
            <div className="relative">
              <div className="aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY2VsZWJyYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzU4MDMwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Команда празднует успех"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Плавающая карточка */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-2xl p-4 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Средняя оценка</div>
                    <div className="text-lg font-bold text-gray-900">4.9/5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ========================================
// ЭКСПОРТ КОМПОНЕНТА ДЛЯ ТЕСТИРОВАНИЯ
// ========================================
export function CorporateGiftSectionHomeTestPage() {
  const handleNavigate = () => {
    console.log('Переход на корпоративную страницу')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Тест: 3 варианта блока корпоративных подарков для главной страницы
          </h1>
          <p className="text-gray-600">
            Выберите лучший вариант для размещения на главной странице после блока с сертификатами
          </p>
        </div>
      </div>

      {/* Вариант 1 */}
      <div className="border-b-8 border-blue-500">
        <div className="bg-blue-50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold text-blue-900">
              Вариант 1: Минималистичный с фокусом на Wellbeing
            </h2>
            <p className="text-blue-700 text-sm">
              Светлый дизайн, сетка с метриками, акцент на заботе о команде
            </p>
          </div>
        </div>
        <CorporateGiftSectionVariant1 onNavigateToCorporate={handleNavigate} />
      </div>

      {/* Вариант 2 */}
      <div className="border-b-8 border-purple-500">
        <div className="bg-purple-50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold text-purple-900">
              Вариант 2: Премиум с метриками и визуальными акцентами
            </h2>
            <p className="text-purple-700 text-sm">
              Темный фон, крупные метрики, детализация пакета, премиальный вид
            </p>
          </div>
        </div>
        <CorporateGiftSectionVariant2 onNavigateToCorporate={handleNavigate} />
      </div>

      {/* Вариант 3 */}
      <div className="border-b-8 border-green-500">
        <div className="bg-green-50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold text-green-900">
              Вариант 3: Компактный с фокусом на действие (CTA)
            </h2>
            <p className="text-green-700 text-sm">
              Темная карточка, 2 колонки, плавающий бейдж с рейтингом, призыв к действию
            </p>
          </div>
        </div>
        <CorporateGiftSectionVariant3 onNavigateToCorporate={handleNavigate} />
      </div>

      {/* Итоговая информация */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">📊 Сравнение вариантов</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-bold text-blue-400 mb-3">Вариант 1</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✅ Чистый, светлый дизайн</li>
                <li>✅ Сетка 2×2 с метриками</li>
                <li>✅ Фокус на wellbeing</li>
                <li>✅ Большое изображение справа</li>
                <li>⚠️ Занимает много места</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-bold text-purple-400 mb-3">Вариант 2</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✅ Премиальный темный фон</li>
                <li>✅ Крупные метрики сверху</li>
                <li>✅ Детальное описание</li>
                <li>✅ Контраст с остальной страницей</li>
                <li>⚠️ Самый большой блок</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-bold text-green-400 mb-3">Вариант 3</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✅ Компактный, не перегружен</li>
                <li>✅ Сильный CTA призыв</li>
                <li>✅ Плавающий рейтинг-бейдж</li>
                <li>✅ 2 колонки с балансом</li>
                <li>✅ Оптимальный размер</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
            <h3 className="font-bold text-emerald-400 mb-2">💡 Рекомендация</h3>
            <p className="text-gray-300">
              <strong>Вариант 3</strong> — оптимальный выбор для главной страницы. 
              Он компактный, не перегружает интерфейс, имеет сильный призыв к действию 
              и современный дизайн с темным фоном, который контрастирует с остальными светлыми блоками.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
