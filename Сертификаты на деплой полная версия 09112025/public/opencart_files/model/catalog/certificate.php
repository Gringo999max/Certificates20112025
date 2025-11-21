<?php
/**
 * Модель для работы с подарочными сертификатами
 * Файл: catalog/model/catalog/certificate.php
 */
class ModelCatalogCertificate extends Model {

    /**
     * Получить все активные сертификаты
     *
     * @return array Массив сертификатов
     */
    public function getCertificates() {
        $query = $this->db->query("
            SELECT
                certificate_id,
                name,
                description,
                price,
                image,
                sort_order
            FROM " . DB_PREFIX . "certificate
            WHERE status = 1
            ORDER BY sort_order ASC
        ");

        return $query->rows;
    }

    /**
     * Получить сертификат по ID
     *
     * @param int $certificate_id ID сертификата
     * @return array|false Данные сертификата или false
     */
    public function getCertificate($certificate_id) {
        $query = $this->db->query("
            SELECT *
            FROM " . DB_PREFIX . "certificate
            WHERE certificate_id = '" . (int)$certificate_id . "'
            AND status = 1
        ");

        if ($query->num_rows) {
            return $query->row;
        }

        return false;
    }

    /**
     * Создать заказ сертификата
     *
     * @param array $data Данные заказа
     * @return int|false ID созданного заказа или false
     */
    public function createOrder($data) {
        try {
            $this->db->query("
                INSERT INTO " . DB_PREFIX . "certificate_order
                SET
                    certificate_id = '" . (int)$data['certificate_id'] . "',
                    certificate_name = '" . $this->db->escape($data['certificate_name']) . "',
                    amount = '" . (float)$data['amount'] . "',
                    type = '" . (int)$data['type'] . "',
                    firstname = '" . $this->db->escape($data['firstname']) . "',
                    lastname = '" . $this->db->escape(isset($data['lastname']) ? $data['lastname'] : '') . "',
                    email = '" . $this->db->escape($data['email']) . "',
                    telephone = '" . $this->db->escape($data['telephone']) . "',
                    address = '" . $this->db->escape(isset($data['address']) ? $data['address'] : '') . "',
                    number = '" . $this->db->escape(isset($data['number']) ? $data['number'] : '') . "',
                    wishes = '" . $this->db->escape(isset($data['wishes']) ? $data['wishes'] : '') . "',
                    comment = '" . $this->db->escape(isset($data['comment']) ? $data['comment'] : '') . "',
                    payment_status = 0,
                    order_status = 0,
                    date_added = NOW()
            ");

            $order_id = $this->db->getLastId();

            // Генерация уникального кода сертификата
            $certificate_code = $this->generateCertificateCode($order_id);

            $this->db->query("
                UPDATE " . DB_PREFIX . "certificate_order
                SET certificate_code = '" . $this->db->escape($certificate_code) . "'
                WHERE order_id = '" . (int)$order_id . "'
            ");

            return $order_id;

        } catch (Exception $e) {
            $this->log->write('Certificate Order Error: ' . $e->getMessage());
            return false;
        }
    }

    /**
     * Обновить статус заказа
     *
     * @param int $order_id ID заказа
     * @param int $status Новый статус (0-4)
     * @return bool Успех операции
     */
    public function updateOrderStatus($order_id, $status) {
        $this->db->query("
            UPDATE " . DB_PREFIX . "certificate_order
            SET
                order_status = '" . (int)$status . "',
                date_modified = NOW()
            WHERE order_id = '" . (int)$order_id . "'
        ");

        return true;
    }

    /**
     * Обновить статус оплаты
     *
     * @param int $order_id ID заказа
     * @param int $payment_status Статус оплаты (0-2)
     * @param string $transaction_id ID транзакции
     * @return bool Успех операции
     */
    public function updatePaymentStatus($order_id, $payment_status, $transaction_id = '') {
        $sql = "
            UPDATE " . DB_PREFIX . "certificate_order
            SET
                payment_status = '" . (int)$payment_status . "',
                date_modified = NOW()
        ";

        if ($payment_status == 1) {
            $sql .= ", date_paid = NOW()";
        }

        if ($transaction_id) {
            $sql .= ", payment_transaction_id = '" . $this->db->escape($transaction_id) . "'";
        }

        $sql .= " WHERE order_id = '" . (int)$order_id . "'";

        $this->db->query($sql);

        return true;
    }

    /**
     * Получить заказ по ID
     *
     * @param int $order_id ID заказа
     * @return array|false Данные заказа или false
     */
    public function getOrder($order_id) {
        $query = $this->db->query("
            SELECT *
            FROM " . DB_PREFIX . "certificate_order
            WHERE order_id = '" . (int)$order_id . "'
        ");

        if ($query->num_rows) {
            return $query->row;
        }

        return false;
    }

    /**
     * Получить заказ по коду сертификата
     *
     * @param string $certificate_code Код сертификата
     * @return array|false Данные заказа или false
     */
    public function getOrderByCode($certificate_code) {
        $query = $this->db->query("
            SELECT *
            FROM " . DB_PREFIX . "certificate_order
            WHERE certificate_code = '" . $this->db->escape($certificate_code) . "'
        ");

        if ($query->num_rows) {
            return $query->row;
        }

        return false;
    }

    /**
     * Получить все FAQ
     *
     * @return array Массив FAQ
     */
    public function getFAQs() {
        $query = $this->db->query("
            SELECT
                faq_id,
                question,
                answer,
                sort_order
            FROM " . DB_PREFIX . "certificate_faq
            WHERE status = 1
            ORDER BY sort_order ASC
        ");

        return $query->rows;
    }

    /**
     * Получить статистику по сертификатам
     *
     * @return array Статистика
     */
    public function getStatistics() {
        $query = $this->db->query("
            SELECT
                COUNT(*) as total_orders,
                SUM(CASE WHEN payment_status = 1 THEN 1 ELSE 0 END) as paid_orders,
                SUM(CASE WHEN payment_status = 1 THEN amount ELSE 0 END) as total_revenue,
                AVG(CASE WHEN payment_status = 1 THEN amount ELSE NULL END) as avg_order_amount,
                SUM(CASE WHEN type = 0 THEN 1 ELSE 0 END) as electronic_orders,
                SUM(CASE WHEN type = 1 THEN 1 ELSE 0 END) as printed_orders
            FROM " . DB_PREFIX . "certificate_order
        ");

        if ($query->num_rows) {
            return $query->row;
        }

        return array(
            'total_orders' => 0,
            'paid_orders' => 0,
            'total_revenue' => 0,
            'avg_order_amount' => 0,
            'electronic_orders' => 0,
            'printed_orders' => 0
        );
    }

    /**
     * Получить заказы клиента по email
     *
     * @param string $email Email клиента
     * @return array Массив заказов
     */
    public function getOrdersByEmail($email) {
        $query = $this->db->query("
            SELECT *
            FROM " . DB_PREFIX . "certificate_order
            WHERE email = '" . $this->db->escape($email) . "'
            ORDER BY date_added DESC
        ");

        return $query->rows;
    }

    /**
     * Проверить, оплачен ли заказ
     *
     * @param int $order_id ID заказа
     * @return bool Оплачен или нет
     */
    public function isOrderPaid($order_id) {
        $query = $this->db->query("
            SELECT payment_status
            FROM " . DB_PREFIX . "certificate_order
            WHERE order_id = '" . (int)$order_id . "'
        ");

        if ($query->num_rows && $query->row['payment_status'] == 1) {
            return true;
        }

        return false;
    }

    /**
     * Генерация уникального кода сертификата
     *
     * @param int $order_id ID заказа
     * @return string Уникальный код
     */
    private function generateCertificateCode($order_id) {
        $date = date('Ymd');
        $random = strtoupper(substr(md5(uniqid(mt_rand(), true)), 0, 6));
        $code = 'CERT-' . $date . '-' . str_pad($order_id, 6, '0', STR_PAD_LEFT) . '-' . $random;

        // Проверка на уникальность
        $query = $this->db->query("
            SELECT COUNT(*) as total
            FROM " . DB_PREFIX . "certificate_order
            WHERE certificate_code = '" . $this->db->escape($code) . "'
        ");

        if ($query->row['total'] > 0) {
            // Если код существует, генерируем новый (рекурсивно)
            return $this->generateCertificateCode($order_id);
        }

        return $code;
    }

    /**
     * Проверить доступность сертификата (не истек ли срок)
     *
     * @param int $order_id ID заказа
     * @param int $validity_years Срок действия в годах (по умолчанию 2)
     * @return bool Действителен или нет
     */
    public function isCertificateValid($order_id, $validity_years = 2) {
        $query = $this->db->query("
            SELECT
                date_paid,
                TIMESTAMPDIFF(YEAR, date_paid, NOW()) as years_passed
            FROM " . DB_PREFIX . "certificate_order
            WHERE order_id = '" . (int)$order_id . "'
            AND payment_status = 1
        ");

        if ($query->num_rows) {
            if ($query->row['years_passed'] < $validity_years) {
                return true;
            }
        }

        return false;
    }

    /**
     * Получить самые популярные сертификаты
     *
     * @param int $limit Количество результатов
     * @return array Массив популярных сертификатов
     */
    public function getPopularCertificates($limit = 5) {
        $query = $this->db->query("
            SELECT
                c.certificate_id,
                c.name,
                c.description,
                c.price,
                c.image,
                COUNT(o.order_id) as order_count,
                SUM(CASE WHEN o.payment_status = 1 THEN o.amount ELSE 0 END) as total_revenue
            FROM " . DB_PREFIX . "certificate c
            LEFT JOIN " . DB_PREFIX . "certificate_order o ON c.certificate_id = o.certificate_id
            WHERE c.status = 1
            GROUP BY c.certificate_id
            ORDER BY order_count DESC, total_revenue DESC
            LIMIT " . (int)$limit . "
        ");

        return $query->rows;
    }

    /**
     * Отметить сертификат как использованный
     *
     * @param int $order_id ID заказа
     * @param string $used_for Для чего использован
     * @return bool Успех операции
     */
    public function markAsUsed($order_id, $used_for = '') {
        $this->db->query("
            UPDATE " . DB_PREFIX . "certificate_order
            SET
                order_status = 3,
                comment = CONCAT(comment, '\n\nИспользован: " . $this->db->escape($used_for) . " (" . date('Y-m-d H:i:s') . ")'),
                date_modified = NOW()
            WHERE order_id = '" . (int)$order_id . "'
        ");

        return true;
    }

    /**
     * Получить заказы за период
     *
     * @param string $date_from Дата начала (Y-m-d)
     * @param string $date_to Дата окончания (Y-m-d)
     * @return array Массив заказов
     */
    public function getOrdersByDateRange($date_from, $date_to) {
        $query = $this->db->query("
            SELECT *
            FROM " . DB_PREFIX . "certificate_order
            WHERE DATE(date_added) >= '" . $this->db->escape($date_from) . "'
            AND DATE(date_added) <= '" . $this->db->escape($date_to) . "'
            ORDER BY date_added DESC
        ");

        return $query->rows;
    }

    /**
     * Добавить новый сертификат (для админки)
     *
     * @param array $data Данные сертификата
     * @return int ID созданного сертификата
     */
    public function addCertificate($data) {
        $this->db->query("
            INSERT INTO " . DB_PREFIX . "certificate
            SET
                name = '" . $this->db->escape($data['name']) . "',
                description = '" . $this->db->escape($data['description']) . "',
                price = '" . (float)$data['price'] . "',
                image = '" . $this->db->escape($data['image']) . "',
                sort_order = '" . (int)$data['sort_order'] . "',
                status = '" . (int)$data['status'] . "',
                date_added = NOW()
        ");

        return $this->db->getLastId();
    }

    /**
     * Обновить сертификат (для админки)
     *
     * @param int $certificate_id ID сертификата
     * @param array $data Данные для обновления
     * @return bool Успех операции
     */
    public function updateCertificate($certificate_id, $data) {
        $this->db->query("
            UPDATE " . DB_PREFIX . "certificate
            SET
                name = '" . $this->db->escape($data['name']) . "',
                description = '" . $this->db->escape($data['description']) . "',
                price = '" . (float)$data['price'] . "',
                image = '" . $this->db->escape($data['image']) . "',
                sort_order = '" . (int)$data['sort_order'] . "',
                status = '" . (int)$data['status'] . "',
                date_modified = NOW()
            WHERE certificate_id = '" . (int)$certificate_id . "'
        ");

        return true;
    }

    /**
     * Удалить сертификат (для админки)
     *
     * @param int $certificate_id ID сертификата
     * @return bool Успех операции
     */
    public function deleteCertificate($certificate_id) {
        // Не удаляем физически, а деактивируем
        $this->db->query("
            UPDATE " . DB_PREFIX . "certificate
            SET
                status = 0,
                date_modified = NOW()
            WHERE certificate_id = '" . (int)$certificate_id . "'
        ");

        return true;
    }
}
?>
