# 🔧 Webhook - Для разработчиков

## 📁 Структура файлов

```
/config/webhooks.ts                      ← Конфигурация URL
/utils/webhookService.ts                 ← Логика отправки
/components/CorporateRequestFormModal.tsx ← Использование webhook
```

---

## ⚙️ Конфигурация

### `/config/webhooks.ts`

```typescript
// Основной URL для продакшена
export const CORPORATE_REQUEST_WEBHOOK_URL = 
  'https://your-webhook-url.com/api/corporate-requests';

// Для разных окружений
export const WEBHOOK_URLS = {
  production: 'https://api.prod.com/webhook',
  staging: 'https://api.staging.com/webhook',
  development: 'http://localhost:3000/webhook',
};

// Текущее окружение
const ENVIRONMENT: 'production' | 'staging' | 'development' = 'production';

// Функция для получения URL
export const getWebhookUrl = () => WEBHOOK_URLS[ENVIRONMENT];
```

**Как использовать:**
- Для простой настройки: меняйте `CORPORATE_REQUEST_WEBHOOK_URL`
- Для множественных окружений: используйте `getWebhookUrl()`

---

## 🔌 API сервиса

### `/utils/webhookService.ts`

#### Основная функция: `sendCorporateRequest`

```typescript
import { sendCorporateRequest } from '../utils/webhookService';

// Использование
const result = await sendCorporateRequest(
  {
    name: 'Иван Петров',
    company: 'ООО Компания',
    email: 'ivan@company.ru',
    phone: '+7 (912) 345-67-89',
    employees: '150',      // опционально
    message: 'Текст...',   // опционально
  },
  'corporate_modal'  // источник (опционально, по умолчанию 'corporate_b2b_page')
);

if (result.success) {
  console.log('✅ Успешно отправлено');
} else {
  console.error('❌ Ошибка:', result.error);
}
```

#### Интерфейс данных

```typescript
export interface CorporateRequestData {
  // Обязательные
  name: string;
  company: string;
  email: string;
  phone: string;
  
  // Необязательные
  employees?: string;
  message?: string;
  
  // Автоматически добавляются
  timestamp: string;      // ISO 8601
  source: string;
  userAgent?: string;
  pageUrl?: string;
}
```

#### Тестовая функция

```typescript
import { createTestRequest } from '../utils/webhookService';

const testData = createTestRequest();
console.log(testData);
// Вернёт тестовую заявку для отладки
```

---

## 🚀 Использование в компонентах

### Пример: Модальная форма

```typescript
import { sendCorporateRequest } from '../utils/webhookService';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Валидация...
  
  try {
    const result = await sendCorporateRequest(formData, 'corporate_modal');
    
    if (result.success) {
      // Успех - показываем уведомление
      setSubmitSuccess(true);
    } else {
      // Ошибка - обрабатываем
      console.error('Ошибка отправки:', result.error);
    }
  } catch (error) {
    console.error('Критическая ошибка:', error);
  }
};
```

### Пример: Простая форма

```typescript
import { sendCorporateRequest } from '../utils/webhookService';

async function submitForm(data) {
  const result = await sendCorporateRequest(data);
  return result.success;
}
```

---

## 📦 Формат запроса

### HTTP запрос

```http
POST https://your-webhook-url.com/api/corporate-requests
Content-Type: application/json

{
  "name": "Иван Петров",
  "company": "ООО Компания",
  "email": "ivan@company.ru",
  "phone": "+7 (912) 345-67-89",
  "employees": "150",
  "message": "Текст сообщения",
  "timestamp": "2025-11-07T14:30:00.000Z",
  "source": "corporate_modal",
  "userAgent": "Mozilla/5.0...",
  "pageUrl": "https://глэмпинги.рф/corporate"
}
```

### Ответ сервера (ожидаемый)

```json
{
  "success": true,
  "message": "Заявка получена",
  "requestId": "12345"
}
```

---

## 🛠️ Обработка на сервере

### Node.js + Express

```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/corporate-requests', async (req, res) => {
  try {
    const data = req.body;
    
    // Валидация
    const required = ['name', 'company', 'email', 'phone'];
    for (const field of required) {
      if (!data[field]) {
        return res.status(400).json({
          success: false,
          error: `Поле ${field} обязательно`
        });
      }
    }
    
    // Валидация email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return res.status(400).json({
        success: false,
        error: 'Некорректный email'
      });
    }
    
    // Ваша бизнес-логика
    await saveToDatabase(data);
    await sendEmailNotification(data);
    
    // Успешный ответ
    res.json({
      success: true,
      message: 'Заявка получена',
      requestId: Date.now()
    });
    
  } catch (error) {
    console.error('Ошибка:', error);
    res.status(500).json({
      success: false,
      error: 'Внутренняя ошибка сервера'
    });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### Python + Flask

```python
from flask import Flask, request, jsonify
import re
from datetime import datetime

app = Flask(__name__)

@app.route('/api/corporate-requests', methods=['POST'])
def handle_request():
    try:
        data = request.json
        
        # Валидация
        required_fields = ['name', 'company', 'email', 'phone']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({
                    'success': False,
                    'error': f'Поле {field} обязательно'
                }), 400
        
        # Валидация email
        email_pattern = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
        if not re.match(email_pattern, data['email']):
            return jsonify({
                'success': False,
                'error': 'Некорректный email'
            }), 400
        
        # Бизнес-логика
        save_to_database(data)
        send_email_notification(data)
        
        return jsonify({
            'success': True,
            'message': 'Заявка получена',
            'requestId': int(datetime.now().timestamp())
        }), 200
        
    except Exception as e:
        print(f'Ошибка: {e}')
        return jsonify({
            'success': False,
            'error': 'Внутренняя ошибка сервера'
        }), 500

if __name__ == '__main__':
    app.run(port=3000)
```

---

## 🧪 Тестирование

### Unit тесты (Jest)

```typescript
import { sendCorporateRequest, createTestRequest } from './webhookService';

describe('webhookService', () => {
  it('должен создать тестовую заявку', () => {
    const testData = createTestRequest();
    expect(testData).toHaveProperty('name');
    expect(testData).toHaveProperty('company');
    expect(testData).toHaveProperty('email');
    expect(testData).toHaveProperty('phone');
  });
  
  it('должен отправить заявку', async () => {
    const result = await sendCorporateRequest({
      name: 'Test',
      company: 'Test Co',
      email: 'test@test.com',
      phone: '+7 (999) 999-99-99'
    });
    
    expect(result).toHaveProperty('success');
  });
});
```

### Интеграционные тесты

```typescript
// Используйте webhook.site или mock сервер
const MOCK_WEBHOOK_URL = 'https://webhook.site/your-unique-url';

test('отправка на реальный webhook', async () => {
  const result = await sendCorporateRequest(
    createTestRequest(),
    'test'
  );
  
  expect(result.success).toBe(true);
});
```

---

## 🐛 Отладка

### Логирование

В `webhookService.ts` уже встроено логирование:

```typescript
console.log('📤 Отправка корпоративной заявки на webhook:', {
  url: CORPORATE_REQUEST_WEBHOOK_URL,
  data: requestData,
});

// После отправки
console.log('✅ Заявка успешно отправлена:', result);

// При ошибке
console.error('❌ Ошибка при отправке заявки:', error);
```

### Просмотр в браузере

1. Откройте DevTools (F12)
2. Перейдите во вкладку Console
3. Отправьте заявку
4. Ищите сообщения с иконками 📤 ✅ ❌

### Network Tab

1. DevTools → Network
2. Отправьте заявку
3. Найдите POST запрос к webhook URL
4. Проверьте:
   - Request Headers
   - Request Payload
   - Response

---

## 🔒 Безопасность

### CORS

Если ваш webhook требует CORS, настройте на сервере:

```javascript
// Express.js
const cors = require('cors');
app.use(cors({
  origin: 'https://глэмпинги.рф',
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));
```

### Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 100 // максимум 100 запросов
});

app.use('/api/corporate-requests', limiter);
```

### Валидация

```javascript
const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().required().min(2).max(100),
  company: Joi.string().required().min(2).max(200),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/).required(),
  employees: Joi.string().optional(),
  message: Joi.string().optional().max(2000),
  timestamp: Joi.string().isoDate().required(),
  source: Joi.string().required()
});

// Использование
const { error, value } = schema.validate(req.body);
if (error) {
  return res.status(400).json({ error: error.details[0].message });
}
```

---

## 📊 Мониторинг

### Sentry (Error tracking)

```typescript
import * as Sentry from '@sentry/browser';

try {
  await sendCorporateRequest(data);
} catch (error) {
  Sentry.captureException(error, {
    tags: {
      type: 'webhook_error',
      source: 'corporate_modal'
    }
  });
}
```

### Google Analytics

```typescript
// После успешной отправки
gtag('event', 'corporate_request_submitted', {
  event_category: 'engagement',
  event_label: source,
  value: formData.employees || 0
});
```

---

## 🔄 Расширение функционала

### Добавление нового webhook

```typescript
// /config/webhooks.ts
export const ALTERNATIVE_WEBHOOK_URL = 'https://backup-webhook.com/api';

// /utils/webhookService.ts
export async function sendToMultipleWebhooks(data, source) {
  const webhooks = [
    CORPORATE_REQUEST_WEBHOOK_URL,
    ALTERNATIVE_WEBHOOK_URL
  ];
  
  const results = await Promise.allSettled(
    webhooks.map(url => 
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source })
      })
    )
  );
  
  return results;
}
```

### Добавление аутентификации

```typescript
// /config/webhooks.ts
export const WEBHOOK_AUTH_TOKEN = 'your-secret-token';

// /utils/webhookService.ts
const response = await fetch(CORPORATE_REQUEST_WEBHOOK_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${WEBHOOK_AUTH_TOKEN}`
  },
  body: JSON.stringify(requestData),
});
```

---

## 📝 Changelog

### v1.0.0 (2025-11-07)
- ✅ Базовая функциональность webhook
- ✅ Конфигурация в `/config/webhooks.ts`
- ✅ Сервис отправки в `/utils/webhookService.ts`
- ✅ Интеграция с `CorporateRequestFormModal`
- ✅ Полное логирование
- ✅ Обработка ошибок

---

## 🎯 TODO (будущие улучшения)

- [ ] Retry логика при ошибках
- [ ] Offline queue для отправки при восстановлении связи
- [ ] Шифрование чувствительных данных
- [ ] Webhook signing для верификации
- [ ] Metrics и аналитика
- [ ] A/B тестирование разных webhook'ов

---

## 📞 Поддержка

**Логи:**
- Консоль браузера (F12 → Console)
- Network tab для HTTP запросов

**Файлы:**
- `/config/webhooks.ts` - конфигурация
- `/utils/webhookService.ts` - логика

**Документация:**
- Для менеджеров: `WEBHOOK_ИНСТРУКЦИЯ.md`
- Для разработчиков: этот файл
- Примеры: `ПРИМЕРЫ_ДАННЫХ_WEBHOOK.md`

---

**Happy coding! 🚀**
