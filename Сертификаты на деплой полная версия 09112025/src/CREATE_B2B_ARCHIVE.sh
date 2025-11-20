#!/bin/bash

# 🎯 B2B Well-being Handoff - Автоматическое создание архива
# Версия: 1.0 для конкретной структуры проекта

echo "════════════════════════════════════════════════════════"
echo "  🚀 Создание B2B Well-being архива для разработчика"
echo "════════════════════════════════════════════════════════"
echo ""

# Цвета
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 1. Создание структуры
echo "${BLUE}📁 Создание структуры папок...${NC}"
mkdir -p b2b-handoff/components/ui
mkdir -p b2b-handoff/components/figma
mkdir -p b2b-handoff/styles
echo "${GREEN}✅ Структура создана${NC}"
echo ""

# 2. Копирование основных компонентов
echo "${BLUE}📄 Копирование основных компонентов (6 файлов)...${NC}"
cp components/CorporateB2BPage.tsx b2b-handoff/components/
cp components/CorporateB2BPageV2.tsx b2b-handoff/components/
cp components/CorporateQuizSection.tsx b2b-handoff/components/
cp components/CorporateGiftReasonsSection.tsx b2b-handoff/components/
cp components/TypewriterText.tsx b2b-handoff/components/
cp components/FoxIllustrations.tsx b2b-handoff/components/
echo "${GREEN}✅ CorporateB2BPage.tsx${NC}"
echo "${GREEN}✅ CorporateB2BPageV2.tsx${NC}"
echo "${GREEN}✅ CorporateQuizSection.tsx${NC}"
echo "${GREEN}✅ CorporateGiftReasonsSection.tsx${NC}"
echo "${GREEN}✅ TypewriterText.tsx${NC}"
echo "${GREEN}✅ FoxIllustrations.tsx${NC}"
echo ""

# 3. Копирование утилит
echo "${BLUE}🛠️  Копирование утилит...${NC}"
cp components/figma/ImageWithFallback.tsx b2b-handoff/components/figma/
echo "${GREEN}✅ ImageWithFallback.tsx${NC}"
echo ""

# 4. Копирование UI компонентов
echo "${BLUE}🎨 Копирование UI компонентов (~47 файлов)...${NC}"
cp components/ui/*.tsx b2b-handoff/components/ui/ 2>/dev/null
cp components/ui/*.ts b2b-handoff/components/ui/ 2>/dev/null
UI_COUNT=$(ls -1 b2b-handoff/components/ui/ | wc -l)
echo "${GREEN}✅ Скопировано ${UI_COUNT} UI компонентов${NC}"
echo ""

# 5. Копирование стилей
echo "${BLUE}🎨 Копирование стилей...${NC}"
cp styles/globals.css b2b-handoff/styles/
echo "${GREEN}✅ globals.css${NC}"
echo ""

# 6. Создание package.json
echo "${BLUE}📦 Создание package.json...${NC}"
cat > b2b-handoff/package.json << 'EOF'
{
  "name": "b2b-wellbeing-pages",
  "version": "1.0.0",
  "description": "B2B Well-being страницы для корпоративных клиентов глэмпинг сертификатов",
  "main": "components/CorporateB2BPage.tsx",
  "dependencies": {
    "react": "^18.0.0",
    "lucide-react": "^0.263.1",
    "motion": "^10.16.2"
  },
  "peerDependencies": {
    "tailwindcss": "^4.0.0"
  },
  "keywords": ["b2b", "wellbeing", "corporate", "react", "tailwind"],
  "author": "глэмпинги.рф"
}
EOF
echo "${GREEN}✅ package.json создан${NC}"
echo ""

# 7. Создание README.md
echo "${BLUE}📖 Создание README.md...${NC}"
cat > b2b-handoff/README.md << 'EOF'
# 🌿 B2B Well-being Страницы

> Высококонверсионные B2B страницы для корпоративных клиентов глэмпинг сертификатов

## 🚀 Быстрый старт

### 1. Установка зависимостей
```bash
npm install lucide-react motion
```

### 2. Копирование файлов
Скопируй папку `components/` и `styles/` в свой проект

### 3. Настройка роутинга

**Next.js App Router:**
```tsx
// app/corporate-b2b/page.tsx
import { CorporateB2BPage } from '@/components/CorporateB2BPage'
export default function Page() {
  return <CorporateB2BPage {...navigationProps} />
}
```

**React Router:**
```tsx
<Route path="/corporate-b2b" element={<CorporateB2BPage {...props} />} />
<Route path="/corporate-b2b-v2" element={<CorporateB2BPageV2 {...props} />} />
```

## 📦 Что внутри

### 2 готовые страницы:
- **v1: Well-being фокус** - CorporateB2BPage.tsx
- **v2: ROI фокус** - CorporateB2BPageV2.tsx

### Функционал:
✅ Hero с TypewriterText анимацией
✅ Научные факты (38% ↓ стресс, 52% ↑ лояльность)
✅ HR процесс визуализация
✅ B2B пакеты (Старт, Профи, Премиум)
✅ Интерактивный квиз (4 шага)
✅ Блок доверия компаний
✅ Полная адаптивность

## 🔧 Подключение API для квиза

В файле `components/CorporateQuizSection.tsx` найди:

```tsx
const handleSubmit = () => {
  console.log('Quiz completed:', quizData) // ← ЗАМЕНИ НА API CALL
  
  fetch('/api/corporate-quiz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quizData)
  })
}
```

## 📁 Структура

```
components/
├── CorporateB2BPage.tsx              # v1
├── CorporateB2BPageV2.tsx            # v2
├── CorporateQuizSection.tsx          # Квиз
├── CorporateGiftReasonsSection.tsx   # Блок причин
├── TypewriterText.tsx                # Анимация
├── FoxIllustrations.tsx              # Иллюстрации
├── figma/
│   └── ImageWithFallback.tsx
└── ui/                               # Shadcn UI (~47 файлов)

styles/
└── globals.css
```

## 🎨 Технологии

- React 18+, TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- Lucide React
- Shadcn UI

## ⏱️ Время интеграции

~1-2 часа

## 📖 Документация

См. **INTEGRATION.md** для подробной инструкции

---

**Версия:** 1.0  
**Автор:** глэмпинги.рф
EOF
echo "${GREEN}✅ README.md создан${NC}"
echo ""

# 8. Копирование INTEGRATION.md
echo "${BLUE}📋 Создание INTEGRATION.md...${NC}"
if [ -f "B2B_HANDOFF_GUIDE.md" ]; then
  cp B2B_HANDOFF_GUIDE.md b2b-handoff/INTEGRATION.md
  echo "${GREEN}✅ INTEGRATION.md скопирован${NC}"
else
  cat > b2b-handoff/INTEGRATION.md << 'EOF'
# Интеграция B2B Well-being страниц

## 1️⃣ Установка зависимостей

```bash
npm install lucide-react motion
```

## 2️⃣ Копирование файлов

1. Скопируй `components/` в свой проект
2. Скопируй `styles/globals.css`
3. Убедись, что Tailwind CSS v4 настроен

## 3️⃣ Настройка роутинга

### Next.js:
```tsx
// app/corporate-b2b/page.tsx
import { CorporateB2BPage } from '@/components/CorporateB2BPage'

export default function Page() {
  return <CorporateB2BPage 
    onNavigateToHome={() => router.push('/')}
    onNavigateToGiftOptions={() => router.push('/gift-options')}
    onNavigateToDelivery={() => router.push('/delivery')}
    onNavigateToCorporate={() => router.push('/corporate')}
    onNavigateToReviews={() => router.push('/reviews')}
    onNavigateToAbout={() => router.push('/about')}
  />
}
```

### React Router:
```tsx
<Route path="/corporate-b2b" element={
  <CorporateB2BPage 
    onNavigateToHome={() => navigate('/')}
    // ... остальные пропсы
  />
} />
```

## 4️⃣ Подключение API квиза

В `CorporateQuizSection.tsx`:

```tsx
const handleSubmit = () => {
  // Замени на свой API endpoint:
  fetch('/api/corporate-quiz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quizData)
  })
  .then(res => res.json())
  .then(data => {
    console.log('Success:', data)
    // Показать успешное сообщение
  })
}
```

## 5️⃣ Production Checklist

- [ ] Установлены зависимости
- [ ] Скопированы файлы
- [ ] Настроен роутинг
- [ ] Подключен API квиза
- [ ] Протестирована адаптивность
- [ ] Проверены все анимации

---

**Время интеграции:** ~1-2 часа
EOF
  echo "${GREEN}✅ INTEGRATION.md создан${NC}"
fi
echo ""

# 9. Создание архива
echo "${BLUE}📦 Создание ZIP архива...${NC}"
zip -r b2b-handoff.zip b2b-handoff/ > /dev/null 2>&1
echo "${GREEN}✅ Архив создан: b2b-handoff.zip${NC}"
echo ""

# 10. Статистика
echo "════════════════════════════════════════════════════════"
echo "${BLUE}📊 СТАТИСТИКА АРХИВА:${NC}"
echo "────────────────────────────────────────────────────────"
TOTAL_FILES=$(find b2b-handoff -type f | wc -l)
ARCHIVE_SIZE=$(ls -lh b2b-handoff.zip | awk '{print $5}')
echo "  📁 Всего файлов: ${GREEN}${TOTAL_FILES}${NC}"
echo "  📦 Размер архива: ${GREEN}${ARCHIVE_SIZE}${NC}"
echo "  📍 Расположение: ${GREEN}./b2b-handoff.zip${NC}"
echo "────────────────────────────────────────────────────────"
echo ""

# 11. Список файлов в архиве
echo "${BLUE}📋 Файлы в архиве:${NC}"
echo ""
echo "${YELLOW}Основные компоненты:${NC}"
echo "  ✅ CorporateB2BPage.tsx"
echo "  ✅ CorporateB2BPageV2.tsx"
echo "  ✅ CorporateQuizSection.tsx"
echo "  ✅ CorporateGiftReasonsSection.tsx"
echo "  ✅ TypewriterText.tsx"
echo "  ✅ FoxIllustrations.tsx"
echo ""
echo "${YELLOW}Утилиты:${NC}"
echo "  ✅ ImageWithFallback.tsx"
echo ""
echo "${YELLOW}UI компоненты:${NC}"
echo "  ✅ ~${UI_COUNT} файлов из /ui/"
echo ""
echo "${YELLOW}Стили:${NC}"
echo "  ✅ globals.css"
echo ""
echo "${YELLOW}Документация:${NC}"
echo "  ✅ README.md"
echo "  ✅ INTEGRATION.md"
echo "  ✅ package.json"
echo ""

# 12. Финал
echo "════════════════════════════════════════════════════════"
echo "${GREEN}╔════════════════════════════════════════════════════╗${NC}"
echo "${GREEN}║                                                    ║${NC}"
echo "${GREEN}║        ✅ АРХИВ УСПЕШНО СОЗДАН!                    ║${NC}"
echo "${GREEN}║                                                    ║${NC}"
echo "${GREEN}║    📦 Файл: b2b-handoff.zip                        ║${NC}"
echo "${GREEN}║    📊 Размер: ${ARCHIVE_SIZE}                              ║${NC}"
echo "${GREEN}║    📁 Файлов: ${TOTAL_FILES}                                 ║${NC}"
echo "${GREEN}║                                                    ║${NC}"
echo "${GREEN}║    🚀 ГОТОВ К ОТПРАВКЕ РАЗРАБОТЧИКУ!               ║${NC}"
echo "${GREEN}║                                                    ║${NC}"
echo "${GREEN}╚════════════════════════════════════════════════════╝${NC}"
echo ""

# 13. Следующие шаги
echo "${BLUE}📋 СЛЕДУЮЩИЕ ШАГИ:${NC}"
echo ""
echo "1️⃣  Проверь архив:"
echo "   ${YELLOW}unzip -l b2b-handoff.zip | head -20${NC}"
echo ""
echo "2️⃣  Отправь разработчику файл:"
echo "   ${YELLOW}b2b-handoff.zip${NC}"
echo ""
echo "3️⃣  Напиши разработчику:"
echo '   "'${YELLOW}Смотри INTEGRATION.md внутри архива${NC}'"'
echo ""
echo "4️⃣  Опционально - очисти временные файлы:"
echo "   ${YELLOW}rm -rf b2b-handoff/${NC}"
echo ""
echo "════════════════════════════════════════════════════════"
echo "${GREEN}✨ Готово! Удачной интеграции! ✨${NC}"
echo ""
