import React, { useState } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { NewYearPromoVariant1, NewYearPromoVariant2, NewYearPromoVariant3 } from './NewYearPromoVariants';

const NewYearPromoTestPage = ({ onBack }: { onBack: () => void }) => {
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);

  const variants = [
    {
      id: 1,
      name: 'Вариант 1: "Зимняя Сказка"',
      description: 'Классический новогодний дизайн с ёлкой, подарками и традиционными зимними цветами',
      features: ['🎄 Традиционная новогодняя атмосфера', '❄️ Анимированные падающие снежинки', '🎁 Тёмный фон с золотыми акцентами', '✨ Праздничные иконки и декор'],
      component: <NewYearPromoVariant1 />
    },
    {
      id: 2,
      name: 'Вариант 2: "Снежный Минимализм"',
      description: 'Современный, чистый и элегантный дизайн в светлых тонах',
      features: ['🎨 Минималистичный светлый дизайн', '☁️ Чистые линии и пространство', '📊 Акцент на информации и цифрах', '💼 Профессиональный деловой стиль'],
      component: <NewYearPromoVariant2 />
    },
    {
      id: 3,
      name: 'Вариант 3: "Праздничное Волшебство"',
      description: 'Яркий и динамичный дизайн с анимациями, градиентами и wow-эффектом',
      features: ['🌟 Динамичные анимации и эффекты', '🎆 Яркие градиенты и цвета', '✨ Анимированные частицы', '🎊 Максимальная праздничность'],
      component: <NewYearPromoVariant3 />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={onBack}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Назад
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                  Новогодние Промо-Блоки
                </h1>
                <p className="text-sm text-gray-500">Сравните 3 варианта дизайна</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selector */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-white text-xl font-bold mb-4">Выберите вариант для предпросмотра:</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setSelectedVariant(null)}
              variant={selectedVariant === null ? 'default' : 'outline'}
              className={selectedVariant === null ? 'bg-white text-emerald-700 hover:bg-gray-100' : 'bg-white/20 text-white border-white/30 hover:bg-white/30'}
            >
              Все варианты
            </Button>
            {variants.map((variant) => (
              <Button
                key={variant.id}
                onClick={() => setSelectedVariant(variant.id)}
                variant={selectedVariant === variant.id ? 'default' : 'outline'}
                className={selectedVariant === variant.id ? 'bg-white text-emerald-700 hover:bg-gray-100' : 'bg-white/20 text-white border-white/30 hover:bg-white/30'}
              >
                {variant.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        {selectedVariant === null ? (
          // Show all variants
          <div className="space-y-16">
            {variants.map((variant) => (
              <div key={variant.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Variant Info Header */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-6">
                  <div className="max-w-7xl mx-auto">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {variant.name}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {variant.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {variant.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-200">
                              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button
                        onClick={() => setSelectedVariant(variant.id)}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white"
                      >
                        Просмотр
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Variant Preview */}
                <div className="border-t-4 border-emerald-500">
                  {variant.component}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Show single variant
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-7xl mx-auto">
            {/* Variant Info Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-8">
              <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {variants.find(v => v.id === selectedVariant)?.name}
                </h3>
                <p className="text-emerald-100 text-lg mb-6">
                  {variants.find(v => v.id === selectedVariant)?.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {variants.find(v => v.id === selectedVariant)?.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Variant Preview */}
            <div>
              {variants.find(v => v.id === selectedVariant)?.component}
            </div>
          </div>
        )}
      </div>

      {/* Recommendations */}
      <div className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Рекомендации по выбору</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-2 border-emerald-200">
              <h3 className="font-bold text-gray-900 mb-2">🎄 Вариант 1</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Когда использовать:</strong> Если хотите создать традиционную новогоднюю атмосферу
              </p>
              <p className="text-sm text-gray-600">
                <strong>Для кого:</strong> Компании с консервативной культурой, партнёры из традиционных отраслей
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">❄️ Вариант 2</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Когда использовать:</strong> Нужен профессиональный деловой стиль с намёком на праздник
              </p>
              <p className="text-sm text-gray-600">
                <strong>Для кого:</strong> B2B клиенты, технологические компании, стартапы
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
              <h3 className="font-bold text-gray-900 mb-2">✨ Вариант 3</h3>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Когда использовать:</strong> Хотите максимально привлечь внимание и создать WOW-эффект
              </p>
              <p className="text-sm text-gray-600">
                <strong>Для кого:</strong> Креативные агентства, event-компании, молодая аудитория
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewYearPromoTestPage;
