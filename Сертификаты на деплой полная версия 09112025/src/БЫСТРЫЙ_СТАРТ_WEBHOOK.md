# 🚀 Webhook - Быстрый старт

## 1️⃣ Измените URL (10 секунд)

Откройте файл:
```
/config/webhooks.ts
```

Найдите строку:
```typescript
export const CORPORATE_REQUEST_WEBHOOK_URL = 'https://your-webhook-url.com/api/corporate-requests';
```

Замените на свой URL:
```typescript
export const CORPORATE_REQUEST_WEBHOOK_URL = 'https://ВАШ-СЕРВЕР.com/api/webhook';
```

**Сохраните файл. Готово!**

---

## 2️⃣ Формат данных, который придёт на webhook

```json
{
  "name": "Имя",
  "company": "Название компании",
  "email": "email@company.ru",
  "phone": "+7 (xxx) xxx-xx-xx",
  "employees": "100",
  "message": "Текст сообщения",
  "timestamp": "2025-11-07T14:30:00.000Z",
  "source": "corporate_modal"
}
```

---

## 3️⃣ Протестируйте (30 секунд)

### Вариант А: webhook.site
1. Откройте: https://webhook.site
2. Скопируйте ваш уникальный URL
3. Вставьте в `/config/webhooks.ts`
4. Отправьте заявку через форму
5. Обновите webhook.site - увидите данные!

### Вариант Б: curl
```bash
curl -X POST https://ВАШ-URL.com/api/webhook \
  -H "Content-Type: application/json" \
  -d '{"name":"Тест","company":"Test","email":"test@test.com","phone":"+7 (999) 999-99-99","timestamp":"2025-11-07T12:00:00Z","source":"test"}'
```

---

## 4️⃣ Пример обработки на сервере

### Node.js
```javascript
app.post('/api/webhook', (req, res) => {
  console.log('Новая заявка:', req.body);
  // Сохраните в БД, отправьте email и т.д.
  res.json({ success: true });
});
```

### Python
```python
@app.route('/api/webhook', methods=['POST'])
def webhook():
    data = request.json
    print('Новая заявка:', data)
    return {'success': True}
```

---

## ✅ Готово!

Теперь все корпоративные заявки автоматически отправляются на ваш webhook!

---

## 📖 Подробная документация

- `WEBHOOK_ИНСТРУКЦИЯ.md` - Инструкция на русском
- `ПРИМЕРЫ_ДАННЫХ_WEBHOOK.md` - Примеры данных
- `WEBHOOK_INTEGRATION_GUIDE.md` - Техническая документация
