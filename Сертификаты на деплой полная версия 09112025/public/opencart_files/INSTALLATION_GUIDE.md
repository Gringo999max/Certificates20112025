# 📦 ИНСТРУКЦИЯ ПО УСТАНОВКЕ МОДУЛЯ "ПОДАРОЧНЫЕ СЕРТИФИКАТЫ"

**Версия:** 1.0
**Дата:** 21 ноября 2025
**OpenCart:** 2.x / 3.x
**Разработчик:** Конвертировано из React в OpenCart PHP

---

## 📋 СОДЕРЖАНИЕ

1. [Предварительные требования](#предварительные-требования)
2. [Структура файлов](#структура-файлов)
3. [Установка](#установка)
4. [Настройка базы данных](#настройка-базы-данных)
5. [Интеграция с темой](#интеграция-с-темой)
6. [Настройка роутинга](#настройка-роутинга)
7. [Интеграция с Тинькофф](#интеграция-с-тинькофф)
8. [Тестирование](#тестирование)
9. [Возможные проблемы](#возможные-проблемы)
10. [Дополнительная настройка](#дополнительная-настройка)

---

## 🔧 ПРЕДВАРИТЕЛЬНЫЕ ТРЕБОВАНИЯ

### Системные требования:
- ✅ OpenCart 2.3+ или 3.x
- ✅ PHP 7.0+
- ✅ MySQL 5.6+ или MariaDB 10.1+
- ✅ jQuery 1.11+ (обычно уже есть в OpenCart)
- ✅ Magnific Popup (для модальных окон)

### Необходимые библиотеки:
```html
<!-- Magnific Popup CSS (если еще не подключен) -->
<link rel="stylesheet" href="catalog/view/javascript/jquery/magnific/magnific-popup.css">

<!-- Magnific Popup JS (если еще не подключен) -->
<script src="catalog/view/javascript/jquery/magnific/jquery.magnific-popup.min.js"></script>
```

---

## 📁 СТРУКТУРА ФАЙЛОВ

Модуль состоит из следующих файлов:

```
opencart_files/
│
├── controller/
│   └── information/
│       └── certificates.php                    ← PHP контроллер
│
├── model/
│   └── catalog/
│       └── certificate.php                     ← Модель для работы с БД
│
├── view/
│   ├── template/
│   │   └── information/
│   │       ├── certificates.tpl                ← Главный шаблон
│   │       └── blocks/
│   │           ├── hero.tpl                    ← Hero секция
│   │           ├── how_it_works.tpl            ← Как это работает
│   │           └── faq.tpl                     ← FAQ секция
│   │
│   └── stylesheet/
│       └── certificates.css                    ← Стили модуля
│
├── javascript/
│   └── certificates.js                         ← JavaScript функционал
│
└── install/
    └── certificates_schema.sql                 ← SQL схема базы данных
```

---

## 🚀 УСТАНОВКА

### ШАГ 1: Загрузка файлов на сервер

Скопируйте файлы модуля в соответствующие директории OpenCart:

#### 1.1. Контроллер
```bash
# Скопировать контроллер
cp opencart_files/controller/information/certificates.php \
   /path/to/opencart/catalog/controller/information/

# Права доступа
chmod 644 /path/to/opencart/catalog/controller/information/certificates.php
```

#### 1.2. Модель
```bash
# Скопировать модель
cp opencart_files/model/catalog/certificate.php \
   /path/to/opencart/catalog/model/catalog/

# Права доступа
chmod 644 /path/to/opencart/catalog/model/catalog/certificate.php
```

#### 1.3. Шаблоны
```bash
# Определить имя текущей темы (например, "default" или название вашей темы)
THEME_NAME="default"

# Создать директорию если нужно
mkdir -p /path/to/opencart/catalog/view/theme/$THEME_NAME/template/information/blocks

# Скопировать главный шаблон
cp opencart_files/view/template/information/certificates.tpl \
   /path/to/opencart/catalog/view/theme/$THEME_NAME/template/information/

# Скопировать блоки
cp opencart_files/view/template/blocks/hero.tpl \
   /path/to/opencart/catalog/view/theme/$THEME_NAME/template/information/blocks/

cp opencart_files/view/template/blocks/how_it_works.tpl \
   /path/to/opencart/catalog/view/theme/$THEME_NAME/template/information/blocks/

cp opencart_files/view/template/blocks/faq.tpl \
   /path/to/opencart/catalog/view/theme/$THEME_NAME/template/information/blocks/

# Права доступа
chmod -R 644 /path/to/opencart/catalog/view/theme/$THEME_NAME/template/information/
```

#### 1.4. Стили
```bash
# Скопировать CSS
cp opencart_files/view/stylesheet/certificates.css \
   /path/to/opencart/catalog/view/theme/$THEME_NAME/stylesheet/

# Права доступа
chmod 644 /path/to/opencart/catalog/view/theme/$THEME_NAME/stylesheet/certificates.css
```

#### 1.5. JavaScript
```bash
# Скопировать JavaScript
cp opencart_files/javascript/certificates.js \
   /path/to/opencart/catalog/view/javascript/

# Права доступа
chmod 644 /path/to/opencart/catalog/view/javascript/certificates.js
```

---

## 🗄️ НАСТРОЙКА БАЗЫ ДАННЫХ

### ШАГ 2: Создание таблиц

#### 2.1. Через phpMyAdmin:
1. Откройте phpMyAdmin
2. Выберите базу данных OpenCart
3. Перейдите на вкладку "SQL"
4. Скопируйте содержимое файла `install/certificates_schema.sql`
5. Вставьте в поле SQL и нажмите "Вперед"

#### 2.2. Через командную строку:
```bash
# Войдите в MySQL
mysql -u YOUR_DB_USER -p YOUR_DB_NAME

# Выполните SQL скрипт
source /path/to/opencart_files/install/certificates_schema.sql

# Или одной командой
mysql -u YOUR_DB_USER -p YOUR_DB_NAME < /path/to/opencart_files/install/certificates_schema.sql
```

#### 2.3. Проверка создания таблиц:
```sql
-- Проверьте, что таблицы созданы
SHOW TABLES LIKE 'oc_certificate%';

-- Должны быть:
-- oc_certificate
-- oc_certificate_order
-- oc_certificate_faq

-- Проверьте данные
SELECT * FROM oc_certificate;
SELECT * FROM oc_certificate_faq;
```

---

## 🎨 ИНТЕГРАЦИЯ С ТЕМОЙ

### ШАГ 3: Подключение стилей и скриптов

#### 3.1. Редактируем главный шаблон (certificates.tpl)

Убедитесь, что в `certificates.tpl` подключены стили и скрипты:

```php
<?php echo $header; ?>

<!-- Подключение стилей -->
<link rel="stylesheet" href="catalog/view/theme/<?php echo $theme_name; ?>/stylesheet/certificates.css">

<!-- ВАЖНО: Проверьте наличие Magnific Popup -->
<link rel="stylesheet" href="catalog/view/javascript/jquery/magnific/magnific-popup.css">

<!-- Ваш контент здесь -->

<!-- Подключение скриптов ПЕРЕД закрывающим </body> -->
<script src="catalog/view/javascript/jquery/magnific/jquery.magnific-popup.min.js"></script>
<script src="catalog/view/javascript/certificates.js"></script>

<?php echo $footer; ?>
```

#### 3.2. Альтернатива: Подключение через контроллер

В `controller/information/certificates.php` в методе `index()`:

```php
// Добавить стили
$this->document->addStyle('catalog/view/theme/default/stylesheet/certificates.css');

// Добавить скрипты
$this->document->addScript('catalog/view/javascript/jquery/magnific/jquery.magnific-popup.min.js');
$this->document->addScript('catalog/view/javascript/certificates.js');
```

---

## 🔗 НАСТРОЙКА РОУТИНГА

### ШАГ 4: Добавление ссылки в меню

#### 4.1. Через административную панель:

1. Войдите в админку OpenCart
2. Перейдите: **Дизайн → Меню** (или **System → Design → Layouts**)
3. Добавьте новый пункт меню:
   - **Название:** "Подарочные сертификаты"
   - **Ссылка:** `index.php?route=information/certificates`
   - **Сортировка:** по вашему усмотрению

#### 4.2. Добавление в header.tpl (вручную):

Откройте `catalog/view/theme/YOUR_THEME/template/common/header.tpl`:

```html
<!-- Где-то в меню добавьте: -->
<li>
    <a href="<?php echo $certificates_url; ?>">
        Подарочные сертификаты
    </a>
</li>
```

И в контроллере header (`catalog/controller/common/header.php`):

```php
$data['certificates_url'] = $this->url->link('information/certificates');
```

#### 4.3. Проверка URL:

После установки страница должна быть доступна по адресу:
```
https://глэмпинги.рф/index.php?route=information/certificates
```

Или с ЧПУ (SEO URL):
```
https://глэмпинги.рф/certificates
```

---

## 💳 ИНТЕГРАЦИЯ С ТИНЬКОФФ

### ШАГ 5: Настройка оплаты

#### 5.1. API Тинькофф

В контроллере `certificates.php` метод `generatePaymentUrl()` требует настройки:

```php
private function generatePaymentUrl($order_id, $amount) {
    // Параметры API Тинькофф
    $terminal_key = $this->config->get('tinkoff_terminal_key'); // Из настроек
    $secret_key = $this->config->get('tinkoff_secret_key');     // Из настроек

    // API endpoint
    $api_url = 'https://securepay.tinkoff.ru/v2/Init';

    // Данные запроса
    $request_data = array(
        'TerminalKey' => $terminal_key,
        'Amount' => $amount * 100, // в копейках
        'OrderId' => $order_id,
        'Description' => 'Оплата подарочного сертификата №' . $order_id,
        'SuccessURL' => $this->url->link('information/certificates/success', 'order_id=' . $order_id),
        'FailURL' => $this->url->link('information/certificates/fail', 'order_id=' . $order_id)
    );

    // Добавить токен (см. документацию Тинькофф)
    $request_data['Token'] = $this->generateTinkoffToken($request_data, $secret_key);

    // Отправить запрос
    $response = $this->sendTinkoffRequest($api_url, $request_data);

    if ($response && isset($response['PaymentURL'])) {
        return $response['PaymentURL'];
    }

    // Fallback
    return $this->url->link('information/certificates/payment', 'order_id=' . $order_id);
}

// Генерация токена для Тинькофф
private function generateTinkoffToken($data, $secret_key) {
    $data['Password'] = $secret_key;
    ksort($data);

    $values = '';
    foreach ($data as $key => $value) {
        if (!is_array($value) && $key != 'Token') {
            $values .= $value;
        }
    }

    return hash('sha256', $values);
}

// Отправка запроса к API
private function sendTinkoffRequest($url, $data) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

    $response = curl_exec($ch);
    curl_close($ch);

    return json_decode($response, true);
}
```

#### 5.2. Добавление методов успеха и неудачи

В `certificates.php` добавьте методы:

```php
/**
 * Успешная оплата
 */
public function success() {
    $this->load->language('information/certificates');

    $order_id = isset($this->request->get['order_id']) ? $this->request->get['order_id'] : 0;

    // Обновить статус заказа
    $this->load->model('catalog/certificate');
    $this->model_catalog_certificate->updateOrderStatus($order_id, 1); // Оплачен

    // Отправить сертификат на email
    $this->sendCertificate($order_id);

    // Показать страницу успеха
    $data['heading_title'] = 'Спасибо за заказ!';
    $data['text_message'] = 'Ваш заказ №' . $order_id . ' успешно оплачен. Сертификат отправлен на указанный email.';

    $this->response->setOutput($this->load->view('common/success', $data));
}

/**
 * Неудачная оплата
 */
public function fail() {
    $this->load->language('information/certificates');

    $order_id = isset($this->request->get['order_id']) ? $this->request->get['order_id'] : 0;

    // Показать страницу ошибки
    $data['heading_title'] = 'Ошибка оплаты';
    $data['text_message'] = 'К сожалению, платеж не прошел. Попробуйте еще раз или свяжитесь с нами.';

    $this->response->setOutput($this->load->view('common/success', $data));
}
```

---

## ✅ ТЕСТИРОВАНИЕ

### ШАГ 6: Проверка работоспособности

#### 6.1. Проверка страницы сертификатов:
1. Откройте: `https://глэмпинги.рф/index.php?route=information/certificates`
2. Убедитесь, что:
   - ✅ Страница загружается без ошибок
   - ✅ Отображаются все секции (Hero, каталог, How it works, FAQ)
   - ✅ Стили применяются корректно
   - ✅ Все изображения загружаются

#### 6.2. Проверка каталога сертификатов:
1. Убедитесь, что отображаются 6 сертификатов из БД
2. Проверьте, что цены и описания корректны
3. Нажмите на кнопку "Выбрать" у любого сертификата

#### 6.3. Проверка модального окна:
1. Должно открыться модальное окно с формой заказа
2. Проверьте автозаполнение суммы
3. Проверьте работу кнопок выбора суммы
4. Проверьте переключение электронный/печатный сертификат
5. При выборе "печатный" должны появиться поля адреса

#### 6.4. Проверка формы:
1. Попробуйте отправить пустую форму - должны показаться ошибки
2. Заполните все поля корректно
3. Отметьте чекбокс согласия
4. Нажмите "Оформить заказ"
5. Проверьте, что форма отправляется через AJAX
6. Проверьте, что приходит email с подтверждением

#### 6.5. Проверка FAQ:
1. Нажмите на любой вопрос в секции FAQ
2. Убедитесь, что ответ открывается плавно
3. При открытии нового вопроса предыдущий должен закрываться

#### 6.6. Проверка мобильной версии:
1. Откройте сайт на мобильном устройстве
2. Проверьте адаптивность всех секций
3. Убедитесь, что модальное окно отображается корректно
4. Проверьте работу форм на touch-устройствах

---

## 🐛 ВОЗМОЖНЫЕ ПРОБЛЕМЫ

### Проблема 1: Страница 404 Not Found

**Решение:**
1. Убедитесь, что файл контроллера находится в правильной директории:
   ```
   catalog/controller/information/certificates.php
   ```
2. Проверьте права доступа к файлу (должно быть 644)
3. Очистите кэш OpenCart:
   ```bash
   rm -rf system/storage/cache/*
   ```

### Проблема 2: Стили не применяются

**Решение:**
1. Проверьте, что CSS файл скопирован в правильную директорию темы
2. Проверьте путь к CSS в шаблоне certificates.tpl
3. Откройте DevTools браузера и проверьте, загружается ли CSS (вкладка Network)
4. Убедитесь, что нет конфликта с другими стилями

### Проблема 3: Модальное окно не открывается

**Решение:**
1. Убедитесь, что подключена библиотека Magnific Popup:
   ```html
   <script src="catalog/view/javascript/jquery/magnific/jquery.magnific-popup.min.js"></script>
   ```
2. Откройте консоль браузера (F12) и проверьте наличие ошибок JavaScript
3. Проверьте, что jQuery загружается перед Magnific Popup
4. Если Magnific Popup не установлен, скачайте:
   https://dimsemenov.com/plugins/magnific-popup/

### Проблема 4: Форма не отправляется

**Решение:**
1. Откройте консоль браузера и проверьте ошибки
2. Проверьте, что метод `order()` существует в контроллере
3. Проверьте URL AJAX запроса в certificates.js:
   ```javascript
   url: 'index.php?route=information/certificates/order'
   ```
4. Убедитесь, что модель certificate.php создана и метод `createOrder()` существует

### Проблема 5: Не приходят email

**Решение:**
1. Проверьте настройки SMTP в админке OpenCart:
   - System → Settings → Edit → Mail
2. Убедитесь, что указаны корректные данные SMTP
3. Проверьте, что email не попадает в спам
4. Проверьте логи почтового сервера

### Проблема 6: Сертификаты не отображаются

**Решение:**
1. Проверьте, что SQL скрипт выполнен успешно:
   ```sql
   SELECT * FROM oc_certificate;
   ```
2. Проверьте, что модель certificate.php создана
3. Проверьте метод `getCertificates()` в модели
4. Если таблица пуста, выполните INSERT запросы из SQL скрипта

---

## ⚙️ ДОПОЛНИТЕЛЬНАЯ НАСТРОЙКА

### Настройка SEO URL (ЧПУ)

Чтобы сделать красивый URL `глэмпинги.рф/certificates`:

#### 1. Через админ-панель:
1. Перейдите: **System → Settings → Edit → Server → SEO URLs → Yes**
2. Перейдите: **Design → SEO URL → Add New**
3. Заполните:
   - **Query:** `information/certificates`
   - **Keyword:** `certificates` (или `sertifikaty`)

#### 2. Через базу данных:
```sql
INSERT INTO oc_seo_url (store_id, language_id, query, keyword)
VALUES (0, 1, 'information/certificates', 'certificates');
```

### Изменение изображений сертификатов

Замените изображения в директории:
```
catalog/image/catalog/certificates/
```

Файлы должны называться:
- `romantic.webp` (романтический уикенд)
- `family.webp` (семейный отдых)
- `adventure.webp` (приключение)
- `winter.webp` (зимняя сказка)
- `summer.webp` (летний релакс)
- `luxury.webp` (luxury глэмпинг)

Рекомендуемые размеры: 640x480px, формат WebP или JPG.

### Добавление новых сертификатов

Через базу данных:
```sql
INSERT INTO oc_certificate (name, description, price, image, sort_order, status, date_added)
VALUES (
    'Название сертификата',
    'Описание сертификата',
    30000.0000,
    '/image/catalog/certificates/new.webp',
    7,
    1,
    NOW()
);
```

Или создайте админ-панель для управления сертификатами (требует дополнительной разработки).

### Настройка FAQ

Добавить новые вопросы:
```sql
INSERT INTO oc_certificate_faq (question, answer, sort_order, status, date_added)
VALUES (
    'Ваш вопрос?',
    'Ответ на вопрос',
    13,
    1,
    NOW()
);
```

### Интеграция с существующими блоками

Если у вас уже есть блоки `reviews.tpl` и `glampings.tpl`, подключите их в `certificates.tpl`:

```php
<!-- После FAQ добавьте -->
<?php if (isset($reviews_html)) { ?>
    <?php echo $reviews_html; ?>
<?php } ?>

<?php if (isset($glampings_html)) { ?>
    <?php echo $glampings_html; ?>
<?php } ?>
```

И в контроллере:
```php
// Загрузить блок отзывов
$data['reviews_html'] = $this->load->controller('extension/module/reviews');

// Загрузить блок глэмпингов
$data['glampings_html'] = $this->load->controller('extension/module/glampings');
```

---

## 📊 МОНИТОРИНГ И АНАЛИТИКА

### Отслеживание заказов

Просмотр всех заказов:
```sql
SELECT
    order_id,
    certificate_name,
    amount,
    CASE WHEN type = 0 THEN 'Электронный' ELSE 'Печатный' END as type,
    CONCAT(firstname, ' ', lastname) as customer,
    email,
    CASE payment_status
        WHEN 0 THEN 'Не оплачен'
        WHEN 1 THEN 'Оплачен'
        WHEN 2 THEN 'Отменен'
    END as payment_status,
    date_added
FROM oc_certificate_order
ORDER BY order_id DESC
LIMIT 50;
```

### Статистика продаж:
```sql
-- Использовать созданное представление
SELECT * FROM v_certificate_orders_stats;

-- Или запрос напрямую
SELECT
    COUNT(*) as total_orders,
    SUM(CASE WHEN payment_status = 1 THEN amount ELSE 0 END) as total_revenue,
    AVG(CASE WHEN payment_status = 1 THEN amount ELSE NULL END) as avg_order
FROM oc_certificate_order;
```

---

## 📞 ПОДДЕРЖКА

Если возникли вопросы или проблемы:

1. **Проверьте логи ошибок:**
   - OpenCart: `system/storage/logs/error.log`
   - PHP: `/var/log/php_errors.log`
   - Веб-сервер: `/var/log/nginx/error.log` или `/var/log/apache2/error.log`

2. **Включите режим отладки** в OpenCart:
   В файле `config.php` и `admin/config.php`:
   ```php
   define('DEBUG', true);
   ```

3. **Проверьте консоль браузера** (F12) на наличие JavaScript ошибок

4. **Свяжитесь с разработчиком** для дополнительной помощи

---

## ✨ ГОТОВО!

После выполнения всех шагов страница подарочных сертификатов должна работать по адресу:

**https://глэмпинги.рф/certificates**

Проверьте все функции и наслаждайтесь новым модулем! 🎉

---

**Дата создания:** 21 ноября 2025
**Версия:** 1.0
**Лицензия:** Proprietary
