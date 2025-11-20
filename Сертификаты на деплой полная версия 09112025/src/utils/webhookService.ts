import { CORPORATE_REQUEST_WEBHOOK_URL } from '../config/webhooks';

/**
 * Интерфейс данных корпоративной заявки
 */
export interface CorporateRequestData {
  // Основная информация о заявителе
  name: string;           // Имя контактного лица
  company: string;        // Название компании
  email: string;          // Email для связи
  phone: string;          // Телефон в формате +7 (xxx) xxx-xx-xx
  
  // Дополнительная информация
  employees?: string;     // Количество сотрудников (необязательно)
  message?: string;       // Пожелания и детали заказа (необязательно)
  
  // Метаданные
  timestamp: string;      // Дата и время отправки заявки (ISO 8601)
  source: string;         // Источник заявки (например, "corporate_b2b_page")
  userAgent?: string;     // User-agent браузера
  pageUrl?: string;       // URL страницы, с которой отправлена заявка
}

/**
 * ПРИМЕР ФОРМАТА ДАННЫХ, который будет отправляться на webhook:
 * 
 * {
 *   "name": "Иван Петров",
 *   "company": "ООО Рога и Копыта",
 *   "email": "ivan.petrov@company.ru",
 *   "phone": "+7 (912) 345-67-89",
 *   "employees": "150",
 *   "message": "Интересуют сертификаты для команды на новогодние корпоративы. Нужно 150 штук с брендированием.",
 *   "timestamp": "2025-11-07T14:30:00.000Z",
 *   "source": "corporate_b2b_page",
 *   "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
 *   "pageUrl": "https://глэмпинги.рф/corporate"
 * }
 */

/**
 * Отправка корпоративной заявки на webhook
 * 
 * @param formData - Данные формы
 * @param source - Источник заявки (по умолчанию "corporate_b2b_page")
 * @returns Promise с результатом отправки
 */
export async function sendCorporateRequest(
  formData: {
    name: string;
    company: string;
    email: string;
    phone: string;
    employees?: string;
    message?: string;
  },
  source: string = 'corporate_b2b_page'
): Promise<{ success: boolean; error?: string }> {
  try {
    // Формируем данные для отправки
    const requestData: CorporateRequestData = {
      ...formData,
      timestamp: new Date().toISOString(),
      source,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
    };

    // Логируем данные перед отправкой (для отладки)
    console.log('📤 Отправка корпоративной заявки на webhook:', {
      url: CORPORATE_REQUEST_WEBHOOK_URL,
      data: requestData,
    });

    // Отправляем POST запрос на webhook
    const response = await fetch(CORPORATE_REQUEST_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    // Проверяем ответ
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('✅ Заявка успешно отправлена:', result);

    return { success: true };
  } catch (error) {
    console.error('❌ Ошибка при отправке заявки:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Неизвестная ошибка',
    };
  }
}

/**
 * Создание тестовой заявки (для отладки)
 */
export function createTestRequest(): CorporateRequestData {
  return {
    name: 'Тестовый Пользователь',
    company: 'ООО Тестовая Компания',
    email: 'test@example.com',
    phone: '+7 (999) 123-45-67',
    employees: '50',
    message: 'Это тестовая заявка для проверки webhook',
    timestamp: new Date().toISOString(),
    source: 'test',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Test User Agent',
    pageUrl: typeof window !== 'undefined' ? window.location.href : 'https://test.com',
  };
}
