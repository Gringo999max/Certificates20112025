# 📦 B2B Well-being - Список файлов для копирования

## 🎯 Что копировать разработчику

---

## ✅ МИНИМАЛЬНЫЙ ПАКЕТ (Вариант 1: БЕЗ Header/Footer)

### **Основные компоненты** (6 файлов)
```
✅ /components/CorporateB2BPage.tsx
✅ /components/CorporateB2BPageV2.tsx
✅ /components/CorporateQuizSection.tsx
✅ /components/CorporateGiftReasonsSection.tsx
✅ /components/TypewriterText.tsx
✅ /components/FoxIllustrations.tsx
```

### **Утилиты** (1 файл)
```
✅ /components/figma/ImageWithFallback.tsx
```

### **UI компоненты Shadcn** (вся папка ui/ - ~40 файлов)
```
✅ /components/ui/button.tsx
✅ /components/ui/input.tsx
✅ /components/ui/checkbox.tsx
✅ /components/ui/progress.tsx
✅ /components/ui/card.tsx
✅ /components/ui/badge.tsx
✅ /components/ui/accordion.tsx
✅ /components/ui/alert-dialog.tsx
✅ /components/ui/alert.tsx
✅ /components/ui/aspect-ratio.tsx
✅ /components/ui/avatar.tsx
✅ /components/ui/breadcrumb.tsx
✅ /components/ui/calendar.tsx
✅ /components/ui/carousel.tsx
✅ /components/ui/chart.tsx
✅ /components/ui/collapsible.tsx
✅ /components/ui/command.tsx
✅ /components/ui/context-menu.tsx
✅ /components/ui/dialog.tsx
✅ /components/ui/drawer.tsx
✅ /components/ui/dropdown-menu.tsx
✅ /components/ui/form.tsx
✅ /components/ui/hover-card.tsx
✅ /components/ui/input-otp.tsx
✅ /components/ui/label.tsx
✅ /components/ui/menubar.tsx
✅ /components/ui/navigation-menu.tsx
✅ /components/ui/pagination.tsx
✅ /components/ui/popover.tsx
✅ /components/ui/radio-group.tsx
✅ /components/ui/resizable.tsx
✅ /components/ui/scroll-area.tsx
✅ /components/ui/select.tsx
✅ /components/ui/separator.tsx
✅ /components/ui/sheet.tsx
✅ /components/ui/sidebar.tsx
✅ /components/ui/skeleton.tsx
✅ /components/ui/slider.tsx
✅ /components/ui/sonner.tsx
✅ /components/ui/switch.tsx
✅ /components/ui/table.tsx
✅ /components/ui/tabs.tsx
✅ /components/ui/textarea.tsx
✅ /components/ui/toggle-group.tsx
✅ /components/ui/toggle.tsx
✅ /components/ui/tooltip.tsx
✅ /components/ui/use-mobile.ts
✅ /components/ui/utils.ts
```

### **Стили** (1 файл)
```
✅ /styles/globals.css
```

### **ИТОГО Вариант 1:** ~48 файлов

---

## ✅ ПОЛНЫЙ ПАКЕТ (Вариант 2: С Header/Footer)

### Всё из Варианта 1 ПЛЮС:

```
✅ /components/Header.tsx
✅ /components/Footer.tsx
```

### **ИТОГО Вариант 2:** ~50 файлов

---

## 📋 Инструкция по копированию

### **Шаг 1: Создай структуру папок**

```bash
mkdir -p b2b-handoff/components/ui
mkdir -p b2b-handoff/components/figma
mkdir -p b2b-handoff/styles
```

### **Шаг 2: Скопируй основные компоненты**

```bash
# Основные страницы
cp components/CorporateB2BPage.tsx b2b-handoff/components/
cp components/CorporateB2BPageV2.tsx b2b-handoff/components/

# Зависимости
cp components/CorporateQuizSection.tsx b2b-handoff/components/
cp components/CorporateGiftReasonsSection.tsx b2b-handoff/components/
cp components/TypewriterText.tsx b2b-handoff/components/
cp components/FoxIllustrations.tsx b2b-handoff/components/

# Утилиты
cp components/figma/ImageWithFallback.tsx b2b-handoff/components/figma/

# UI компоненты (вся папка)
cp -r components/ui/* b2b-handoff/components/ui/

# Стили
cp styles/globals.css b2b-handoff/styles/
```

### **Шаг 3: (Опционально) Добавь Header/Footer**

```bash
cp components/Header.tsx b2b-handoff/components/
cp components/Footer.tsx b2b-handoff/components/
```

### **Шаг 4: Создай package.json**

```bash
cat > b2b-handoff/package.json << 'EOF'
{
  "name": "b2b-wellbeing-pages",
  "version": "1.0.0",
  "description": "B2B Well-being страницы для глэмпинг сертификатов",
  "dependencies": {
    "react": "^18.0.0",
    "lucide-react": "^0.263.1",
    "motion": "^10.16.2",
    "tailwindcss": "^4.0.0"
  }
}
EOF
```

### **Шаг 5: Создай README**

```bash
cat > b2b-handoff/README.md << 'EOF'
# B2B Well-being Страницы

## Установка
npm install

## Файлы
- CorporateB2BPage.tsx - v1 (Well-being фокус)
- CorporateB2BPageV2.tsx - v2 (ROI фокус)

## Роуты
/corporate-b2b → v1
/corporate-b2b-v2 → v2

## Документация
См. INTEGRATION.md
EOF
```

### **Шаг 6: Создай архив**

```bash
zip -r b2b-handoff.zip b2b-handoff/
```

---

## 🚀 Быстрая команда (всё в одном)

```bash
# Создай папку и скопируй всё
mkdir -p b2b-handoff/components/{ui,figma} b2b-handoff/styles

# Основные файлы
cp components/{CorporateB2BPage,CorporateB2BPageV2,CorporateQuizSection,CorporateGiftReasonsSection,TypewriterText,FoxIllustrations}.tsx b2b-handoff/components/

# UI и утилиты
cp -r components/ui b2b-handoff/components/
cp components/figma/ImageWithFallback.tsx b2b-handoff/components/figma/

# Стили
cp styles/globals.css b2b-handoff/styles/

# Опционально: Header/Footer
cp components/{Header,Footer}.tsx b2b-handoff/components/

# Создай архив
zip -r b2b-handoff.zip b2b-handoff/
```

---

## 📦 Альтернатива: Ручное копирование в GUI

### **Windows/Mac:**

1. Создай папку `b2b-handoff`
2. Внутри создай структуру:
   ```
   b2b-handoff/
   ├── components/
   │   ├── ui/
   │   └── figma/
   └── styles/
   ```
3. Перетащи файлы согласно списку выше
4. Упакуй в ZIP

---

## ✅ Проверочный чеклист

После копирования проверь наличие:

### **Обязательные файлы:**
- [ ] CorporateB2BPage.tsx
- [ ] CorporateB2BPageV2.tsx
- [ ] CorporateQuizSection.tsx
- [ ] CorporateGiftReasonsSection.tsx
- [ ] TypewriterText.tsx
- [ ] FoxIllustrations.tsx
- [ ] ImageWithFallback.tsx
- [ ] globals.css
- [ ] Папка ui/ с ~40 файлами

### **Опциональные файлы:**
- [ ] Header.tsx
- [ ] Footer.tsx

### **Документация:**
- [ ] README.md
- [ ] package.json
- [ ] INTEGRATION.md (скопируй из B2B_HANDOFF_GUIDE.md)

---

## 🎯 Финальная структура архива

```
b2b-handoff.zip
└── b2b-handoff/
    ├── README.md
    ├── INTEGRATION.md
    ├── package.json
    ├── components/
    │   ├── CorporateB2BPage.tsx
    │   ├── CorporateB2BPageV2.tsx
    │   ├── CorporateQuizSection.tsx
    │   ├── CorporateGiftReasonsSection.tsx
    │   ├── TypewriterText.tsx
    │   ├── FoxIllustrations.tsx
    │   ├── Header.tsx (опционально)
    │   ├── Footer.tsx (опционально)
    │   ├── figma/
    │   │   └── ImageWithFallback.tsx
    │   └── ui/
    │       ├── button.tsx
    │       ├── input.tsx
    │       ├── checkbox.tsx
    │       └── ... (~40 файлов)
    └── styles/
        └── globals.css
```

---

## 📊 Размер архива

- **Без Header/Footer:** ~150-200 KB
- **С Header/Footer:** ~200-250 KB

---

## ⚡ Экспресс-метод для разработчика

Просто отправь разработчику:

1. **Этот файл** (B2B_FILES_TO_COPY.md)
2. **Файл инструкций** (B2B_HANDOFF_GUIDE.md)
3. **ZIP архив** с файлами

И скажи: "Смотри INTEGRATION.md внутри архива"

---

**Готово к отправке!** ✅
