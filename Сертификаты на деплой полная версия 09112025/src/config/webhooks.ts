/**
 * Конфигурация Webhooks для отправки заявок
 * 
 * Для изменения адреса webhook просто замените URL в переменной ниже
 */

// URL для отправки корпоративных заявок
export const CORPORATE_REQUEST_WEBHOOK_URL = 'https://your-webhook-url.com/api/corporate-requests';

// Альтернативные варианты для разных окружений (если нужно)
export const WEBHOOK_URLS = {
  production: 'https://your-webhook-url.com/api/corporate-requests',
  staging: 'https://staging-webhook-url.com/api/corporate-requests',
  development: 'https://dev-webhook-url.com/api/corporate-requests',
};

// Выбор окружения (можно менять в зависимости от режима работы)
const ENVIRONMENT: 'production' | 'staging' | 'development' = 'production';

// Экспортируемый URL (автоматически выбирается в зависимости от окружения)
export const getWebhookUrl = () => WEBHOOK_URLS[ENVIRONMENT];
