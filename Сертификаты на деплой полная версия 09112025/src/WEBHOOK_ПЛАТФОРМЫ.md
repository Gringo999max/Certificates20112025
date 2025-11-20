# 🔌 Интеграция Webhook с популярными платформами

## 📋 Содержание
- [n8n](#n8n)
- [Zapier](#zapier)
- [Make (Integromat)](#make-integromat)
- [Pipedream](#pipedream)
- [Google Apps Script](#google-apps-script)
- [Airtable](#airtable)
- [Notion](#notion)

---

## n8n

### Настройка в 3 шага:

1. **Создайте новый workflow в n8n**
2. **Добавьте триггер "Webhook"**
   - Method: POST
   - Path: `/corporate-requests` (или любой)
   - Response Mode: "onReceived"
3. **Скопируйте Webhook URL** и вставьте в `/config/webhooks.ts`

### Пример workflow:

```
Webhook → Filter → Google Sheets → Email
```

**Полезные ноды:**
- **Google Sheets** - сохранить в таблицу
- **Gmail** - отправить уведомление
- **Slack** - уведомление в канал
- **Telegram** - сообщение в бот
- **Notion** - создать запись
- **HTTP Request** - отправить в CRM

### Пример маппинга полей для Google Sheets:

| Столбец | Значение из webhook |
|---------|-------------------|
| A (Дата) | `{{ $json.timestamp }}` |
| B (Имя) | `{{ $json.name }}` |
| C (Компания) | `{{ $json.company }}` |
| D (Email) | `{{ $json.email }}` |
| E (Телефон) | `{{ $json.phone }}` |
| F (Сотрудников) | `{{ $json.employees }}` |
| G (Сообщение) | `{{ $json.message }}` |

---

## Zapier

### Настройка:

1. **Создайте новый Zap**
2. **Триггер: Webhooks by Zapier**
   - Event: Catch Hook
   - Скопируйте Webhook URL
3. **Вставьте URL в** `/config/webhooks.ts`
4. **Отправьте тестовую заявку** для получения sample data
5. **Добавьте Actions:**
   - Google Sheets (добавить строку)
   - Gmail (отправить email)
   - Slack (отправить сообщение)
   - и т.д.

### Популярные интеграции:

**Zap 1: Заявка → Google Sheets + Email**
```
Trigger: Webhook
↓
Action 1: Google Sheets - Create Row
↓
Action 2: Gmail - Send Email
```

**Zap 2: Заявка → Slack + Notion**
```
Trigger: Webhook
↓
Filter: Only if employees > 100
↓
Action 1: Slack - Send Message to #sales
↓
Action 2: Notion - Create Database Item
```

---

## Make (Integromat)

### Настройка:

1. **Создайте новый Scenario**
2. **Добавьте модуль "Webhooks"**
   - Выберите "Custom webhook"
   - Add → Create a webhook
   - Скопируйте URL
3. **Вставьте в** `/config/webhooks.ts`
4. **Добавьте модули обработки:**
   - Google Sheets
   - Email
   - Slack
   - CRM системы

### Пример сценария:

```
Webhook 
  ↓
Router
  ├→ [Крупная компания] → Slack канал #vip-leads
  └→ [Обычная заявка] → Google Sheets
```

**Условие для Router:**
```
employees > 200
```

---

## Pipedream

### Настройка:

1. **Создайте новый Workflow**
2. **Триггер: HTTP / Webhook**
   - Method: POST
   - Скопируйте endpoint URL
3. **Вставьте в** `/config/webhooks.ts`
4. **Добавьте steps:**

```javascript
// Step 1: Parse data
export default defineComponent({
  async run({ steps, $ }) {
    const { name, company, email, phone } = steps.trigger.event.body;
    return { name, company, email, phone };
  }
})

// Step 2: Send to Google Sheets
// Step 3: Send Email
// Step 4: Post to Slack
```

---

## Google Apps Script

### Создайте Google Sheets с Apps Script:

1. **Откройте Google Sheets**
2. **Extensions → Apps Script**
3. **Вставьте код:**

```javascript
function doPost(e) {
  try {
    // Парсим данные
    const data = JSON.parse(e.postData.contents);
    
    // Получаем активный лист
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Добавляем строку
    sheet.appendRow([
      new Date(data.timestamp),
      data.name,
      data.company,
      data.email,
      data.phone,
      data.employees || '',
      data.message || '',
      data.source
    ]);
    
    // Опционально: отправляем email
    MailApp.sendEmail({
      to: 'your@email.com',
      subject: `Новая корпоративная заявка от ${data.company}`,
      body: `
        Компания: ${data.company}
        Контакт: ${data.name}
        Email: ${data.email}
        Телефон: ${data.phone}
        Сотрудников: ${data.employees || 'не указано'}
        Сообщение: ${data.message || 'нет'}
      `
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Заявка получена'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. **Deploy → New deployment**
   - Type: Web app
   - Execute as: Me
   - Who has access: Anyone
5. **Скопируйте Web app URL**
6. **Вставьте в** `/config/webhooks.ts`

### Настройте заголовки таблицы:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Дата | Имя | Компания | Email | Телефон | Сотрудников | Сообщение | Источник |

---

## Airtable

### Вариант 1: Через n8n/Zapier/Make

Используйте workflow:
```
Webhook → Airtable (Create Record)
```

### Вариант 2: Через Airtable Automations

1. **Создайте таблицу "Заявки"** в Airtable
2. **Используйте интеграцию через Zapier:**
   - Trigger: Webhook
   - Action: Airtable - Create Record

### Поля в Airtable:

| Поле | Тип | Значение |
|------|-----|----------|
| Дата | Date | timestamp |
| Имя | Single line text | name |
| Компания | Single line text | company |
| Email | Email | email |
| Телефон | Phone | phone |
| Сотрудников | Number | employees |
| Сообщение | Long text | message |
| Источник | Single select | source |
| Статус | Single select | Новая / В работе / Закрыта |

---

## Notion

### Через Zapier/Make/n8n:

1. **Создайте базу данных в Notion** "Корпоративные заявки"
2. **Настройте поля:**
   - 📅 Дата (Date)
   - 👤 Имя (Text)
   - 🏢 Компания (Text)
   - 📧 Email (Email)
   - 📱 Телефон (Phone)
   - 👥 Сотрудников (Number)
   - 💬 Сообщение (Text)
   - 🏷️ Статус (Select: Новая, В работе, Закрыта)
   - 🔗 Источник (Text)

3. **Интеграция через n8n:**
```
Webhook → Notion (Create Database Item)
```

### Маппинг для Notion (n8n):

```json
{
  "Дата": "{{ $json.timestamp }}",
  "Имя": "{{ $json.name }}",
  "Компания": "{{ $json.company }}",
  "Email": "{{ $json.email }}",
  "Телефон": "{{ $json.phone }}",
  "Сотрудников": "{{ $json.employees }}",
  "Сообщение": "{{ $json.message }}",
  "Статус": "Новая",
  "Источник": "{{ $json.source }}"
}
```

---

## 📊 Сравнение платформ

| Платформа | Сложность | Бесплатно | Лучше для |
|-----------|-----------|-----------|-----------|
| **n8n** | Средняя | ✅ (self-hosted) | Сложные workflows, self-hosted |
| **Zapier** | Легко | ⚠️ (100 tasks/мес) | Быстрый старт, много интеграций |
| **Make** | Средняя | ⚠️ (1000 ops/мес) | Сложная логика, визуальный редактор |
| **Pipedream** | Сложная | ✅ (generous free tier) | Разработчики, кастомный код |
| **Apps Script** | Средняя | ✅ | Google Workspace, бесплатно |

---

## 💡 Рекомендации

### Для новичков:
👉 **Zapier** - самый простой интерфейс

### Для техспециалистов:
👉 **n8n** или **Pipedream** - больше возможностей

### Для бюджетных проектов:
👉 **Google Apps Script** - 100% бесплатно

### Для визуальной работы:
👉 **Make (Integromat)** - лучший визуальный редактор

---

## 🎯 Готовые сценарии

### Сценарий 1: Простой (Google Sheets + Email)
```
Webhook → Google Sheets → Email уведомление
```
**Время настройки:** 5 минут  
**Платформа:** Zapier / n8n

---

### Сценарий 2: Средний (CRM + Slack)
```
Webhook → Filter (> 100 сотрудников) 
  ├→ Да: Slack #vip-leads + CRM (VIP)
  └→ Нет: CRM (обычный лид)
```
**Время настройки:** 15 минут  
**Платформа:** Make / n8n

---

### Сценарий 3: Продвинутый (Multi-channel)
```
Webhook 
  ↓
Parse & Validate
  ↓
Router по размеру компании
  ├→ VIP (500+ чел): Slack VIP + Notion + Email CEO
  ├→ Средние (50-500): Google Sheets + Email менеджера
  └→ Малые (<50): Airtable + Auto-reply email
```
**Время настройки:** 30 минут  
**Платформа:** n8n / Pipedream

---

## 📝 Чеклист интеграции

- [ ] Выбрал платформу
- [ ] Создал webhook endpoint
- [ ] Вставил URL в `/config/webhooks.ts`
- [ ] Отправил тестовую заявку
- [ ] Проверил, что данные приходят
- [ ] Настроил обработку (Sheets/Email/CRM)
- [ ] Протестировал весь flow
- [ ] Настроил уведомления команде

---

**Готово! Выберите платформу и начните получать заявки! 🚀**
