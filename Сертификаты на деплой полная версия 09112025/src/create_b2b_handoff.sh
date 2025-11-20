#!/bin/bash

# 🎯 B2B Well-being Handoff - Скрипт автоматического создания архива
# Версия: 1.0
# Дата: 27 октября 2025

echo "🚀 Создание архива B2B Well-being страниц..."
echo ""

# Цвета для вывода
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Создание структуры папок
echo "${BLUE}📁 Создание структуры папок...${NC}"
mkdir -p b2b-handoff/components/{ui,figma} b2b-handoff/styles
echo "${GREEN}✅ Структура создана${NC}"
echo ""

# 2. Копирование основных компонентов
echo "${BLUE}📄 Копирование основных компонентов...${NC}"
cp components/CorporateB2BPage.tsx b2b-handoff/components/
cp components/CorporateB2BPageV2.tsx b2b-handoff/components/
cp components/CorporateQuizSection.tsx b2b-handoff/components/
cp components/CorporateGiftReasonsSection.tsx b2b-handoff/components/
cp components/TypewriterText.tsx b2b-handoff/components/
cp components/FoxIllustrations.tsx b2b-handoff/components/
echo "${GREEN}✅ Скопировано 6 основных компонентов${NC}"
echo ""

# 3. Копирование утилит
echo "${BLUE}🛠️  Копирование утилит...${NC}"
cp components/figma/ImageWithFallback.tsx b2b-handoff/components/figma/
echo "${GREEN}✅ Утилиты скопированы${NC}"
echo ""

# 4. Копирование UI компонентов
echo "${BLUE}🎨 Копирование UI компонентов...${NC}"
cp -r components/ui/* b2b-handoff/components/ui/
echo "${GREEN}✅ UI компоненты скопированы (~40 файлов)${NC}"
echo ""

# 5. Копирование стилей
echo "${BLUE}🎨 Копирование стилей...${NC}"
cp styles/globals.css b2b-handoff/styles/
echo "${GREEN}✅ Стили скопированы${NC}"
echo ""

# 6. Создание package.json
echo "${BLUE}📦 Создание package.json...${NC}"
cat > b2b-handoff/package.json << 'EOF'
{
  "name": "b2b-wellbeing-pages",
  "version": "1.0.0",
  "description": "B2B Well-being страницы для корпоративных клиентов глэмпинг сертификатов. Включает 2 варианта страниц (Well-being фокус и ROI фокус) с интерактивным квизом и полной адаптивностью.",
  "main": "components/CorporateB2BPage.tsx",
  "scripts": {
    "install": "npm install lucide-react motion"
  },
  "keywords": [
    "b2b",
    "wellbeing",
    "corporate",
    "react",
    "typescript",
    "tailwind",
    "glamping",
    "certificates"
  ],
  "author": "глэмпинги.рф",
  "license": "UNLICENSED",
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "^0.263.1",
    "motion": "^10.16.2"
  },
  "peerDependencies": {
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0"
  }
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
```bash
cp -r components/ /path/to/your/project/components/
cp styles/globals.css /path/to/your/project/styles/
```

### 3. Настройка роутинга

#### Next.js:
```tsx
// app/corporate-b2b/page.tsx
import { CorporateB2BPage } from '@/components/CorporateB2BPage'

export default function Page() {
  return <CorporateB2BPage {...navigationProps} />
}
```

#### React Router:
```tsx
<Route path="/corporate-b2b" element={<CorporateB2BPage {...props} />} />
<Route path="/corporate-b2b-v2" element={<CorporateB2BPageV2 {...props} />} />
```

## 📦 Что внутри

### 2 готовые страницы:
- **v1: Well-being фокус** (`CorporateB2BPage.tsx`)
- **v2: ROI фокус** (`CorporateB2BPageV2.tsx`)

### Функционал:
✅ Hero с TypewriterText анимацией
✅ Научные факты и статистика
✅ HR процесс визуализация
✅ B2B пакеты (Старт, Профи, Премиум)
✅ Интерактивный квиз (4 шага)
✅ Блок доверия компаний
✅ Полная адаптивность

## 🔧 Подключение API для квиза

В файле `components/CorporateQuizSection.tsx`:

```tsx
const handleSubmit = () => {
  // ЗАМЕНИ НА API CALL:
  fetch('/api/corporate-quiz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quizData)
  })
}
```

## 📖 Документация

Полная инструкция - см. **INTEGRATION.md**

## ⏱️ Время интеграции

~1-2 часа

## 🎨 Технологии

- React 18+
- TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- Lucide React
- Shadcn UI

---

**Версия:** 1.0  
**Автор:** глэмпинги.рф  
EOF
echo "${GREEN}✅ README.md создан${NC}"
echo ""

# 8. Копирование INTEGRATION.md
echo "${BLUE}📋 Копирование инструкции интеграции...${NC}"
if [ -f "B2B_HANDOFF_GUIDE.md" ]; then
  # Извлекаем секцию INTEGRATION из B2B_HANDOFF_GUIDE.md
  cp B2B_HANDOFF_GUIDE.md b2b-handoff/INTEGRATION.md
  echo "${GREEN}✅ INTEGRATION.md скопирован${NC}"
else
  echo "${YELLOW}⚠️  B2B_HANDOFF_GUIDE.md не найден, пропускаем...${NC}"
fi
echo ""

# 9. Создание архива
echo "${BLUE}📦 Создание архива...${NC}"
zip -r b2b-handoff.zip b2b-handoff/ > /dev/null 2>&1
echo "${GREEN}✅ Архив создан${NC}"
echo ""

# 10. Статистика
echo "${BLUE}📊 Статистика:${NC}"
echo "────────────────────────────────────"
FILE_COUNT=$(find b2b-handoff -type f | wc -l)
ARCHIVE_SIZE=$(du -h b2b-handoff.zip | cut -f1)
echo "  Файлов в архиве: ${GREEN}${FILE_COUNT}${NC}"
echo "  Размер архива: ${GREEN}${ARCHIVE_SIZE}${NC}"
echo "  Расположение: ${GREEN}./b2b-handoff.zip${NC}"
echo "────────────────────────────────────"
echo ""

# 11. Финальное сообщение
echo "${GREEN}╔════════════════════════════════════════╗${NC}"
echo "${GREEN}║                                        ║${NC}"
echo "${GREEN}║    ✅ АРХИВ УСПЕШНО СОЗДАН!            ║${NC}"
echo "${GREEN}║                                        ║${NC}"
echo "${GREEN}║  📦 Файл: b2b-handoff.zip              ║${NC}"
echo "${GREEN}║  📊 Размер: ${ARCHIVE_SIZE}                       ║${NC}"
echo "${GREEN}║  📁 Файлов: ~${FILE_COUNT}                        ║${NC}"
echo "${GREEN}║                                        ║${NC}"
echo "${GREEN}║  🚀 ГОТОВ К ОТПРАВКЕ РАЗРАБОТЧИКУ!     ║${NC}"
echo "${GREEN}║                                        ║${NC}"
echo "${GREEN}╚════════════════════════════════════════╝${NC}"
echo ""

# 12. Следующие шаги
echo "${BLUE}📋 Следующие шаги:${NC}"
echo ""
echo "1️⃣  Проверь архив:"
echo "   ${YELLOW}unzip -l b2b-handoff.zip${NC}"
echo ""
echo "2️⃣  Отправь разработчику:"
echo "   - Файл: ${YELLOW}b2b-handoff.zip${NC}"
echo "   - Инструкция: ${YELLOW}смотри INTEGRATION.md внутри архива${NC}"
echo ""
echo "3️⃣  Опционально - очисти временные файлы:"
echo "   ${YELLOW}rm -rf b2b-handoff/${NC}"
echo ""

# 13. Завершение
echo "${GREEN}✨ Готово! Удачной интеграции! ✨${NC}"
echo ""
