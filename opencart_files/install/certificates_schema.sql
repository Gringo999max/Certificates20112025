-- =====================================================
-- База данных для подарочных сертификатов
-- OpenCart версия 2.x/3.x
-- =====================================================

-- ============= ТАБЛИЦА СЕРТИФИКАТОВ =============
-- Хранит информацию о типах сертификатов

CREATE TABLE IF NOT EXISTS `oc_certificate` (
    `certificate_id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL COMMENT 'Название сертификата',
    `description` text COMMENT 'Описание сертификата',
    `price` decimal(15,4) NOT NULL DEFAULT 0.0000 COMMENT 'Базовая цена',
    `image` varchar(255) DEFAULT NULL COMMENT 'Путь к изображению',
    `sort_order` int(3) NOT NULL DEFAULT 0 COMMENT 'Порядок сортировки',
    `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1 - активен, 0 - неактивен',
    `date_added` datetime NOT NULL COMMENT 'Дата добавления',
    `date_modified` datetime DEFAULT NULL COMMENT 'Дата изменения',
    PRIMARY KEY (`certificate_id`),
    KEY `idx_status` (`status`),
    KEY `idx_sort_order` (`sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Типы подарочных сертификатов';

-- ============= ТАБЛИЦА ЗАКАЗОВ СЕРТИФИКАТОВ =============
-- Хранит заказы на покупку сертификатов

CREATE TABLE IF NOT EXISTS `oc_certificate_order` (
    `order_id` int(11) NOT NULL AUTO_INCREMENT,
    `certificate_id` int(11) NOT NULL COMMENT 'ID типа сертификата',
    `certificate_name` varchar(255) NOT NULL COMMENT 'Название сертификата',
    `amount` decimal(15,4) NOT NULL COMMENT 'Сумма сертификата',
    `type` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 - электронный, 1 - печатный с доставкой',
    `firstname` varchar(32) NOT NULL COMMENT 'Имя покупателя',
    `lastname` varchar(32) DEFAULT NULL COMMENT 'Фамилия покупателя',
    `email` varchar(96) NOT NULL COMMENT 'Email покупателя',
    `telephone` varchar(32) NOT NULL COMMENT 'Телефон покупателя',
    `address` text DEFAULT NULL COMMENT 'Адрес доставки (для печатных)',
    `number` varchar(32) DEFAULT NULL COMMENT 'Номер квартиры/офиса',
    `wishes` text DEFAULT NULL COMMENT 'Пожелания получателю',
    `comment` text DEFAULT NULL COMMENT 'Комментарий к заказу',
    `payment_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 - не оплачен, 1 - оплачен, 2 - отменен',
    `payment_method` varchar(64) DEFAULT NULL COMMENT 'Способ оплаты',
    `payment_transaction_id` varchar(255) DEFAULT NULL COMMENT 'ID транзакции оплаты',
    `order_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 - новый, 1 - в обработке, 2 - отправлен, 3 - завершен, 4 - отменен',
    `certificate_code` varchar(64) DEFAULT NULL COMMENT 'Уникальный код сертификата',
    `date_added` datetime NOT NULL COMMENT 'Дата создания заказа',
    `date_modified` datetime DEFAULT NULL COMMENT 'Дата изменения',
    `date_paid` datetime DEFAULT NULL COMMENT 'Дата оплаты',
    `date_sent` datetime DEFAULT NULL COMMENT 'Дата отправки',
    PRIMARY KEY (`order_id`),
    KEY `idx_certificate_id` (`certificate_id`),
    KEY `idx_email` (`email`),
    KEY `idx_payment_status` (`payment_status`),
    KEY `idx_order_status` (`order_status`),
    KEY `idx_certificate_code` (`certificate_code`),
    KEY `idx_date_added` (`date_added`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Заказы подарочных сертификатов';

-- ============= ТАБЛИЦА FAQ =============
-- Часто задаваемые вопросы о сертификатах

CREATE TABLE IF NOT EXISTS `oc_certificate_faq` (
    `faq_id` int(11) NOT NULL AUTO_INCREMENT,
    `question` text NOT NULL COMMENT 'Вопрос',
    `answer` text NOT NULL COMMENT 'Ответ',
    `sort_order` int(3) NOT NULL DEFAULT 0 COMMENT 'Порядок сортировки',
    `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1 - активен, 0 - неактивен',
    `date_added` datetime NOT NULL COMMENT 'Дата добавления',
    `date_modified` datetime DEFAULT NULL COMMENT 'Дата изменения',
    PRIMARY KEY (`faq_id`),
    KEY `idx_status` (`status`),
    KEY `idx_sort_order` (`sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='FAQ по сертификатам';

-- ============= ВСТАВКА ТЕСТОВЫХ ДАННЫХ =============

-- Типы сертификатов
INSERT INTO `oc_certificate` (`certificate_id`, `name`, `description`, `price`, `image`, `sort_order`, `status`, `date_added`) VALUES
(1, 'Романтический уикенд', '2 ночи для двоих в романтической атмосфере', 15000.0000, '/image/catalog/certificates/romantic.webp', 1, 1, NOW()),
(2, 'Семейный отдых', '3 ночи для семьи с детьми', 25000.0000, '/image/catalog/certificates/family.webp', 2, 1, NOW()),
(3, 'Приключение', '5 ночей активного отдыха на природе', 40000.0000, '/image/catalog/certificates/adventure.webp', 3, 1, NOW()),
(4, 'Зимняя сказка', 'Уютный зимний отдых с видом на горы', 20000.0000, '/image/catalog/certificates/winter.webp', 4, 1, NOW()),
(5, 'Летний релакс', 'Отдых у воды в теплый сезон', 18000.0000, '/image/catalog/certificates/summer.webp', 5, 1, NOW()),
(6, 'Luxury глэмпинг', 'Премиум размещение с максимальным комфортом', 50000.0000, '/image/catalog/certificates/luxury.webp', 6, 1, NOW());

-- FAQ
INSERT INTO `oc_certificate_faq` (`question`, `answer`, `sort_order`, `status`, `date_added`) VALUES
('Как работает подарочный сертификат?', 'После покупки сертификата получатель может выбрать любой глэмпинг из 500+ вариантов по всей России, забронировать удобные даты и оплатить проживание сертификатом полностью или частично.', 1, 1, NOW()),
('Какой срок действия сертификата?', 'Все наши подарочные сертификаты действительны в течение 2 лет с даты покупки. Это дает получателю достаточно времени для выбора идеального места и дат для отдыха.', 2, 1, NOW()),
('Можно ли использовать сертификат частями?', 'Да! Если стоимость выбранного глэмпинга меньше номинала сертификата, остаток можно использовать для следующего бронирования или доплатить за дополнительные услуги.', 3, 1, NOW()),
('Как получить сертификат?', 'Электронный сертификат приходит на email сразу после оплаты. Печатный сертификат доставляется курьером или почтой России в красивой подарочной упаковке в течение 3-5 дней.', 4, 1, NOW()),
('Можно ли вернуть или обменять сертификат?', 'Если сертификат не был активирован, мы можем вернуть деньги в течение 14 дней с момента покупки или обменять на сертификат другого номинала.', 5, 1, NOW()),
('На сколько человек рассчитан сертификат?', 'Сертификат не привязан к количеству гостей. Получатель сам выбирает размещение: для пары, семьи или компании друзей. Главное - уложиться в номинал сертификата.', 6, 1, NOW()),
('Можно ли доплатить к сертификату?', 'Конечно! Если выбранный глэмпинг дороже номинала сертификата, получатель может доплатить разницу любым удобным способом при бронировании.', 7, 1, NOW()),
('Как забронировать глэмпинг по сертификату?', 'Получатель сертификата связывается с нами по телефону или через форму на сайте, выбирает глэмпинг и даты, указывает код сертификата - и бронь готова!', 8, 1, NOW()),
('Можно ли подарить электронный сертификат?', 'Да! При оформлении электронного сертификата вы можете указать email получателя, и мы отправим красиво оформленный сертификат прямо ему с вашими поздравлениями.', 9, 1, NOW()),
('Какие глэмпинги доступны по сертификату?', 'По сертификату доступны все 500+ глэмпингов в нашем каталоге: от уютных домиков в лесу до роскошных шатров на берегу моря, от Калининграда до Камчатки.', 10, 1, NOW()),
('Можно ли купить сертификат на любую сумму?', 'Минимальный номинал сертификата - 5000 рублей. Максимальная сумма не ограничена. Вы можете выбрать один из готовых номиналов или указать свою сумму.', 11, 1, NOW()),
('Что делать, если потерял сертификат?', 'Не волнуйтесь! Все данные о сертификате хранятся в нашей системе. Свяжитесь с нами, назовите email или номер заказа - мы восстановим доступ к сертификату.', 12, 1, NOW());

-- ============= ПРАВА ДОСТУПА (если требуется) =============
-- GRANT SELECT, INSERT, UPDATE ON oc_certificate TO 'opencart_user'@'localhost';
-- GRANT SELECT, INSERT, UPDATE ON oc_certificate_order TO 'opencart_user'@'localhost';
-- GRANT SELECT ON oc_certificate_faq TO 'opencart_user'@'localhost';

-- ============= ИНДЕКСЫ ДЛЯ ОПТИМИЗАЦИИ (уже созданы выше) =============
-- Все необходимые индексы созданы при создании таблиц

-- ============= ТРИГГЕРЫ (опционально) =============

-- Генерация уникального кода сертификата при создании заказа
DELIMITER $$

CREATE TRIGGER `generate_certificate_code` BEFORE INSERT ON `oc_certificate_order`
FOR EACH ROW
BEGIN
    IF NEW.certificate_code IS NULL OR NEW.certificate_code = '' THEN
        SET NEW.certificate_code = CONCAT('CERT-', DATE_FORMAT(NOW(), '%Y%m%d'), '-', LPAD(NEW.order_id, 6, '0'));
    END IF;
END$$

DELIMITER ;

-- Автоматическое обновление date_modified при изменении заказа
DELIMITER $$

CREATE TRIGGER `update_certificate_order_modified` BEFORE UPDATE ON `oc_certificate_order`
FOR EACH ROW
BEGIN
    SET NEW.date_modified = NOW();

    -- Если статус оплаты изменился на "оплачен", установить date_paid
    IF NEW.payment_status = 1 AND OLD.payment_status != 1 THEN
        SET NEW.date_paid = NOW();
    END IF;

    -- Если статус заказа изменился на "отправлен", установить date_sent
    IF NEW.order_status = 2 AND OLD.order_status != 2 THEN
        SET NEW.date_sent = NOW();
    END IF;
END$$

DELIMITER ;

-- ============= ПРЕДСТАВЛЕНИЯ (VIEWS) ДЛЯ УДОБСТВА =============

-- Представление для активных сертификатов
CREATE OR REPLACE VIEW `v_active_certificates` AS
SELECT
    `certificate_id`,
    `name`,
    `description`,
    `price`,
    `image`,
    `sort_order`
FROM `oc_certificate`
WHERE `status` = 1
ORDER BY `sort_order` ASC;

-- Представление для статистики заказов
CREATE OR REPLACE VIEW `v_certificate_orders_stats` AS
SELECT
    COUNT(*) as total_orders,
    SUM(CASE WHEN payment_status = 1 THEN 1 ELSE 0 END) as paid_orders,
    SUM(CASE WHEN payment_status = 1 THEN amount ELSE 0 END) as total_revenue,
    AVG(CASE WHEN payment_status = 1 THEN amount ELSE NULL END) as avg_order_amount,
    SUM(CASE WHEN type = 0 THEN 1 ELSE 0 END) as electronic_orders,
    SUM(CASE WHEN type = 1 THEN 1 ELSE 0 END) as printed_orders,
    DATE(date_added) as order_date
FROM `oc_certificate_order`
GROUP BY DATE(date_added)
ORDER BY order_date DESC;

-- ============= ПРОЦЕДУРЫ (опционально) =============

-- Процедура для получения статистики по сертификату
DELIMITER $$

CREATE PROCEDURE `sp_get_certificate_stats`(IN cert_id INT)
BEGIN
    SELECT
        c.name,
        c.price as base_price,
        COUNT(o.order_id) as total_orders,
        SUM(CASE WHEN o.payment_status = 1 THEN 1 ELSE 0 END) as paid_orders,
        SUM(CASE WHEN o.payment_status = 1 THEN o.amount ELSE 0 END) as total_revenue,
        AVG(CASE WHEN o.payment_status = 1 THEN o.amount ELSE NULL END) as avg_amount,
        MIN(o.date_added) as first_order_date,
        MAX(o.date_added) as last_order_date
    FROM `oc_certificate` c
    LEFT JOIN `oc_certificate_order` o ON c.certificate_id = o.certificate_id
    WHERE c.certificate_id = cert_id
    GROUP BY c.certificate_id;
END$$

DELIMITER ;

-- ============= ЗАВЕРШЕНИЕ =============

-- Вывести информацию об установке
SELECT 'Таблицы успешно созданы:' as message;
SELECT TABLE_NAME, TABLE_ROWS
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = DATABASE()
  AND TABLE_NAME LIKE 'oc_certificate%';

-- Конец скрипта
