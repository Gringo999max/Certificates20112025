# 🎄 Готовый код для копирования - Новогоднее оформление

## ⚡ БЫСТРАЯ ВЕРСИЯ (Вариант Б - рекомендуемый)

### Шаг 1: Импорты
```tsx
// Добавить в начало CorporateB2BPage.tsx (после существующих импортов):
import { FallingSnowflakes, ChristmasGarland } from './NewYearDecorations'
import { NewYearPromoVariant2 } from './NewYearPromoVariants'
```

### Шаг 2: Декорации
```tsx
// В начале return, сразу после открывающего <div>:
return (
  <div className="min-h-screen bg-white">
    {/* 🎄 Новогодние декорации */}
    <FallingSnowflakes count={25} speed="normal" />
    <ChristmasGarland />
```

### Шаг 3: Промо-блок
```tsx
// Найти секцию "Well-being Наука" (примерно строка 700-750)
// После закрывающего </section> этой секции вставить:

{/* 🎅 Новогодний промо-блок */}
<NewYearPromoVariant2 />
```

**ГОТОВО!** 3 простых добавления = полное новогоднее оформление ✨

---

## 🎁 РАСШИРЕННАЯ ВЕРСИЯ (Вариант В - максимум)

### 1. Импорты
```tsx
import { FallingSnowflakes, ChristmasGarland, GoldenConfetti } from './NewYearDecorations'
import { NewYearPromoVariant1 } from './NewYearPromoVariants'
import { Snowflake, TreePine, Gift, Sparkles, Calendar } from 'lucide-react'
```

### 2. Декорации
```tsx
{/* Новогодние декорации */}
<FallingSnowflakes count={30} speed="normal" />
<ChristmasGarland />
```

### 3. Бейдж в Hero Section
```tsx
// Найти Hero Section, перед заголовком "Корпоративные подарки" добавить:

<motion.div 
  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border-2 border-emerald-200"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  <Snowflake className="w-5 h-5 text-blue-500" />
  <span className="text-sm font-semibold text-gray-700">
    🎄 Новогодняя коллекция 2025
  </span>
  <Sparkles className="w-5 h-5 text-amber-500" />
</motion.div>

<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
  Корпоративные подарки<br />с заботой о well-being
</h1>
```

### 4. Новогодние иконки в Well-being карточках
```tsx
// Найти массив wellbeingBenefits и изменить иконки:

const wellbeingBenefits = [
  {
    icon: (
      <div className="relative">
        <Shield className="w-12 h-12 text-emerald-600" />
        <Snowflake className="w-4 h-4 text-blue-400 absolute -top-1 -right-1 animate-pulse" />
      </div>
    ),
    title: "Профилактика выгорания",
    description: "Эмоциональная разгрузка вдали от экранов"
  },
  {
    icon: (
      <div className="relative">
        <TrendingUp className="w-12 h-12 text-emerald-600" />
        <Sparkles className="w-4 h-4 text-amber-400 absolute -top-1 -right-1 animate-pulse" />
      </div>
    ),
    title: "Рост продуктивности",
    description: "Сотрудник возвращается заряженным и сфокусированным"
  },
  {
    icon: (
      <div className="relative">
        <Heart className="w-12 h-12 text-emerald-600" />
        <Gift className="w-4 h-4 text-red-400 absolute -top-1 -right-1 animate-pulse" />
      </div>
    ),
    title: "Укрепление лояльности",
    description: "Показываете, что компания заботится о личном благополучии"
  }
]
```

### 5. Зимний фон для секции "Well-being Наука"
```tsx
// Найти секцию с научными фактами и изменить className:

<section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
  {/* Декоративные снежинки на фоне */}
  <div className="absolute inset-0 opacity-5 pointer-events-none">
    <Snowflake className="absolute top-10 left-10 w-32 h-32 text-blue-600 rotate-12" />
    <Snowflake className="absolute bottom-10 right-10 w-40 h-40 text-cyan-600 -rotate-12" />
    <Snowflake className="absolute top-1/2 left-1/3 w-24 h-24 text-blue-600 rotate-45" />
    <Snowflake className="absolute top-1/3 right-1/4 w-28 h-28 text-cyan-500 -rotate-45" />
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* Остальной контент секции */}
```

### 6. Промо-блок
```tsx
{/* После секции "Well-being Наука" */}
<NewYearPromoVariant1 />
```

### 7. Новогодний заголовок формы
```tsx
// Найти форму заявки, заменить заголовок на:

<div className="text-center mb-12">
  <motion.div 
    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-red-100 px-6 py-3 rounded-full mb-4 border-2 border-amber-300"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    animate={{ 
      boxShadow: [
        "0 0 0 0 rgba(251, 191, 36, 0)",
        "0 0 0 8px rgba(251, 191, 36, 0.2)",
        "0 0 0 0 rgba(251, 191, 36, 0)",
      ]
    }}
    transition={{ 
      y: { duration: 0.5 },
      boxShadow: { duration: 2, repeat: Infinity }
    }}
  >
    <TreePine className="w-5 h-5 text-green-600" />
    <span className="font-bold text-gray-800">
      Специальное новогоднее предложение
    </span>
    <Gift className="w-5 h-5 text-red-600" />
  </motion.div>
  
  <motion.h2 
    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
  >
    Успейте заказать до Нового Года
  </motion.h2>
  
  <motion.p 
    className="text-xl text-gray-600"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    Оставьте заявку сегодня и получите{' '}
    <span className="text-emerald-600 font-bold">скидку 15%</span>{' '}
    на пакеты от 50 сертификатов
  </motion.p>

  {/* Таймер */}
  <motion.div 
    className="mt-6 inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-green-50 px-8 py-4 rounded-2xl border-2 border-emerald-200"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 }}
    animate={{
      boxShadow: [
        "0 0 20px rgba(16, 185, 129, 0.2)",
        "0 0 40px rgba(16, 185, 129, 0.4)",
        "0 0 20px rgba(16, 185, 129, 0.2)",
      ]
    }}
  >
    <Calendar className="w-6 h-6 text-red-600" />
    <div className="text-left">
      <p className="text-sm text-gray-600">До Нового Года осталось</p>
      <p className="text-2xl font-bold text-gray-900">
        {(() => {
          const today = new Date();
          const newYear = new Date(today.getFullYear() + 1, 0, 1);
          const diff = newYear.getTime() - today.getTime();
          return Math.ceil(diff / (1000 * 60 * 60 * 24));
        })()} дней
      </p>
    </div>
    <Sparkles className="w-6 h-6 text-amber-500" />
  </motion.div>
</div>
```

### 8. Конфетти при отправке формы
```tsx
// В начале компонента, добавить state:
const [showConfetti, setShowConfetti] = useState(false)

// В handleSubmit, после успешной отправки:
const handleSubmit = useCallback((e: React.FormEvent) => {
  e.preventDefault()
  setSubmitAttempted(true)
  
  const errors = validateForm()
  setFormErrors(errors)
  
  if (Object.keys(errors).length === 0) {
    setIsSubmitting(true)
    
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setShowConfetti(true) // ← ДОБАВИТЬ ЭТУ СТРОКУ
      
      setTimeout(() => {
        setSubmitSuccess(false)
        setShowConfetti(false) // ← И ЭТУ
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '+7',
          employees: '',
          message: ''
        })
        setSubmitAttempted(false)
      }, 3000)
    }, 1500)
  }
}, [formData, validateForm])

// В render, перед формой:
<GoldenConfetti trigger={showConfetti} />

<form onSubmit={handleSubmit}>
  {/* форма */}
</form>
```

### 9. Праздничная рамка для партнёров
```tsx
// Найти секцию с логотипами партнёров и обернуть:

<section className="py-12 bg-gradient-to-r from-emerald-50 via-white to-teal-50 border-y-4 border-emerald-200 relative">
  {/* Декоративные полоски */}
  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-green-500 to-red-500" />
  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-green-500 to-red-500" />
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <motion.p 
      className="text-center text-gray-600 mb-8 flex items-center justify-center gap-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <TreePine className="w-5 h-5 text-green-600" />
      <span>Нам доверяют лучшие компании России</span>
      <Gift className="w-5 h-5 text-red-600" />
    </motion.p>
    
    {/* Логотипы */}
  </div>
</section>
```

### 10. Новогодние CTA кнопки
```tsx
// Найти основную CTA кнопку "Оставить заявку" и заменить на:

<Button 
  type="submit"
  size="lg"
  disabled={isSubmitting}
  className="w-full bg-gradient-to-r from-red-600 via-red-500 to-green-600 hover:from-red-700 hover:via-red-600 hover:to-green-700 text-white px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
>
  <span className="relative z-10 flex items-center justify-center gap-2">
    {isSubmitting ? (
      <>
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        Отправка...
      </>
    ) : submitSuccess ? (
      <>
        <CheckCircle className="w-5 h-5" />
        Отправлено!
      </>
    ) : (
      <>
        <Gift className="w-5 h-5" />
        Оставить заявку
        <Sparkles className="w-5 h-5" />
      </>
    )}
  </span>
  
  {/* Анимированный блик */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
    initial={{ x: '-100%' }}
    animate={{ x: '200%' }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      repeatDelay: 1,
      ease: "linear"
    }}
  />
</Button>
```

---

## 📝 Чеклист копирования

### Быстрая версия (Вариант Б):
- [ ] Скопировать импорты (Шаг 1)
- [ ] Добавить декорации в return (Шаг 2)
- [ ] Вставить промо-блок (Шаг 3)
- [ ] Проверить на десктопе
- [ ] Проверить на мобильном
- [ ] ✅ Готово!

### Полная версия (Вариант В):
- [ ] Скопировать импорты (#1)
- [ ] Добавить декорации (#2)
- [ ] Бейдж в Hero (#3)
- [ ] Новогодние иконки в Well-being (#4)
- [ ] Зимний фон научных фактов (#5)
- [ ] Промо-блок (#6)
- [ ] Новогодний заголовок формы (#7)
- [ ] Конфетти при отправке (#8)
- [ ] Праздничная рамка партнёров (#9)
- [ ] Новогодние CTA кнопки (#10)
- [ ] Проверить всё на десктопе
- [ ] Проверить всё на мобильном
- [ ] ✅ Готово!

---

## 🎯 Где что копировать

```
CorporateB2BPage.tsx

СТРОКИ 1-25: Импорты
├─ Добавить: импорты декораций (Шаг 1)

СТРОКИ 400+: return начало
├─ Добавить: декорации (Шаг 2)

СТРОКИ 450+: Hero Section
├─ Добавить: бейдж "Новогодняя коллекция" (#3)

СТРОКИ 210-225: wellbeingBenefits массив
├─ Изменить: иконки с новогодними акцентами (#4)

СТРОКИ 650+: Well-being Наука секция
├─ Изменить: фон на зимний (#5)

СТРОКИ 700+: После Well-being Наука
├─ Вставить: промо-блок (#6)

СТРОКИ 900+: Форма заявки
├─ Изменить: заголовок + таймер (#7)
├─ Добавить: state для конфетти (#8 начало)
├─ Изменить: handleSubmit (#8 продолжение)
├─ Добавить: <GoldenConfetti /> перед формой (#8 конец)
├─ Изменить: CTA кнопка (#10)

СТРОКИ 1100+: Партнёры
├─ Обернуть: праздничной рамкой (#9)
```

---

## ⚡ Супер-быстрая версия (1 файл, готов к копированию)

Если нужно всё сразу, я могу создать готовый файл CorporateB2BPage.tsx с уже встроенным новогодним оформлением.

**Сказать "создай готовый файл"** - и я сделаю полностью готовую версию страницы.

---

## 🎁 Готово!

Весь код готов к копированию.  
Выберите вариант и начинайте копировать! 🚀

**Нужна помощь?**
- Скажите какой вариант хотите (Б или В)
- Или попросите создать готовый файл целиком
- Я помогу с внедрением! 🎄✨
