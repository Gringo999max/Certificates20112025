<?php
/**
 * Контроллер страницы подарочных сертификатов
 * Файл: catalog/controller/information/certificates.php
 */
class ControllerInformationCertificates extends Controller {

    public function index() {
        // Загрузка языкового файла
        $this->load->language('information/certificates');

        // Установка заголовка страницы
        $this->document->setTitle('Подарочные сертификаты на глэмпинги | Глэмпинги.рф');

        // Meta теги для SEO
        $this->document->setDescription('Подарочные сертификаты на отдых в 500+ глэмпингах по всей России. Идеальный подарок на любой случай. Срок действия 2 года. Получатель сам выбирает место и дату отдыха.');
        $this->document->setKeywords('подарочный сертификат, глэмпинг, подарок, отдых на природе, эко-отель');

        // Open Graph для соцсетей
        $this->document->addMetaProperty('og:title', 'Подарочные сертификаты на глэмпинги');
        $this->document->addMetaProperty('og:description', 'Подарите незабываемый отдых в 500+ глэмпингах по России');
        $this->document->addMetaProperty('og:image', HTTP_SERVER . 'image/catalog/certificates/og-image.jpg');
        $this->document->addMetaProperty('og:url', $this->url->link('information/certificates'));

        // Breadcrumbs (хлебные крошки)
        $data['breadcrumbs'] = array();

        $data['breadcrumbs'][] = array(
            'text' => 'Главная',
            'href' => $this->url->link('common/home')
        );

        $data['breadcrumbs'][] = array(
            'text' => 'Подарочные сертификаты',
            'href' => $this->url->link('information/certificates')
        );

        // Загрузка модели сертификатов
        $this->load->model('catalog/certificate');

        // Получение списка сертификатов
        $data['certificates'] = $this->model_catalog_certificate->getCertificates();

        // Если модели нет, используем тестовые данные
        if (empty($data['certificates'])) {
            $data['certificates'] = $this->getDefaultCertificates();
        }

        // Загрузка header и footer
        $data['header'] = $this->load->controller('common/header');
        $data['footer'] = $this->load->controller('common/footer');

        // Рендеринг шаблона
        $this->response->setOutput($this->load->view('information/certificates', $data));
    }

    /**
     * Обработка заказа сертификата (AJAX)
     */
    public function order() {
        $this->load->language('information/certificates');

        $json = array();

        // Проверка метода запроса
        if ($this->request->server['REQUEST_METHOD'] == 'POST') {

            // Валидация данных
            if (!isset($this->request->post['amount']) || $this->request->post['amount'] < 5000) {
                $json['error']['amount'] = 'Минимальная сумма сертификата 5000 рублей';
            }

            if (!isset($this->request->post['firstname']) || (utf8_strlen(trim($this->request->post['firstname'])) < 1)) {
                $json['error']['firstname'] = 'Имя должно быть от 1 до 32 символов!';
            }

            if (!isset($this->request->post['email']) || !filter_var($this->request->post['email'], FILTER_VALIDATE_EMAIL)) {
                $json['error']['email'] = 'Введите корректный E-Mail!';
            }

            if (!isset($this->request->post['telephone'])) {
                $json['error']['telephone'] = 'Номер телефона обязателен!';
            }

            if (!isset($this->request->post['agree'])) {
                $json['error']['agree'] = 'Необходимо согласие с политикой конфиденциальности!';
            }

            // Если нет ошибок, создаем заказ
            if (!$json) {
                $this->load->model('catalog/certificate');

                $order_data = array(
                    'certificate_id' => $this->request->post['certificate_id'],
                    'certificate_name' => $this->request->post['certificate_name'],
                    'amount' => $this->request->post['amount'],
                    'type' => $this->request->post['type'], // 0 - электронный, 1 - печатный
                    'firstname' => $this->request->post['firstname'],
                    'lastname' => isset($this->request->post['lastname']) ? $this->request->post['lastname'] : '',
                    'email' => $this->request->post['email'],
                    'telephone' => $this->request->post['telephone'],
                    'wishes' => isset($this->request->post['wishes']) ? $this->request->post['wishes'] : '',
                    'comment' => isset($this->request->post['comment']) ? $this->request->post['comment'] : '',
                    'date_added' => date('Y-m-d H:i:s')
                );

                // Если выбрана доставка, добавляем адрес
                if ($this->request->post['type'] == '1') {
                    $order_data['address'] = $this->request->post['address'];
                    $order_data['number'] = isset($this->request->post['number']) ? $this->request->post['number'] : '';
                }

                // Создаем заказ
                $order_id = $this->model_catalog_certificate->createOrder($order_data);

                if ($order_id) {
                    // Генерируем ссылку на оплату Тинькофф
                    $payment_url = $this->generatePaymentUrl($order_id, $order_data['amount']);

                    $json['success'] = 'Заказ успешно создан!';
                    $json['order_id'] = $order_id;
                    $json['payment_url'] = $payment_url;

                    // Отправляем email с подтверждением
                    $this->sendConfirmationEmail($order_data, $order_id);
                } else {
                    $json['error']['warning'] = 'Ошибка создания заказа. Попробуйте позже.';
                }
            }
        }

        $this->response->addHeader('Content-Type: application/json');
        $this->response->setOutput(json_encode($json));
    }

    /**
     * Генерация ссылки на оплату Тинькофф
     */
    private function generatePaymentUrl($order_id, $amount) {
        // Здесь интеграция с API Тинькофф
        // Пример возврата URL
        return $this->url->link('information/certificates/payment', 'order_id=' . $order_id);
    }

    /**
     * Отправка email с подтверждением заказа
     */
    private function sendConfirmationEmail($data, $order_id) {
        $this->load->model('setting/setting');

        $store_name = $this->config->get('config_name');
        $store_email = $this->config->get('config_email');

        // Email клиенту
        $subject = 'Подтверждение заказа сертификата №' . $order_id . ' | ' . $store_name;

        $message = "Здравствуйте, " . $data['firstname'] . "!\n\n";
        $message .= "Спасибо за заказ подарочного сертификата!\n\n";
        $message .= "Номер заказа: " . $order_id . "\n";
        $message .= "Сумма: " . $data['amount'] . " ₽\n";
        $message .= "Тип: " . ($data['type'] == '0' ? 'Электронный' : 'С доставкой') . "\n\n";
        $message .= "После оплаты сертификат будет отправлен на указанный email.\n\n";
        $message .= "С уважением,\nКоманда " . $store_name;

        $mail = new Mail();
        $mail->protocol = $this->config->get('config_mail_protocol');
        $mail->parameter = $this->config->get('config_mail_parameter');
        $mail->smtp_hostname = $this->config->get('config_mail_smtp_hostname');
        $mail->smtp_username = $this->config->get('config_mail_smtp_username');
        $mail->smtp_password = html_entity_decode($this->config->get('config_mail_smtp_password'), ENT_QUOTES, 'UTF-8');
        $mail->smtp_port = $this->config->get('config_mail_smtp_port');
        $mail->smtp_timeout = $this->config->get('config_mail_smtp_timeout');

        $mail->setTo($data['email']);
        $mail->setFrom($store_email);
        $mail->setSender($store_name);
        $mail->setSubject($subject);
        $mail->setText($message);
        $mail->send();
    }

    /**
     * Получение сертификатов по умолчанию (если нет в БД)
     */
    private function getDefaultCertificates() {
        return array(
            array(
                'certificate_id' => 1,
                'name' => 'Романтический уикенд',
                'description' => '2 ночи для двоих в романтической атмосфере',
                'price' => 15000,
                'image' => '/image/catalog/certificates/romantic.webp',
                'sort_order' => 1
            ),
            array(
                'certificate_id' => 2,
                'name' => 'Семейный отдых',
                'description' => '3 ночи для семьи с детьми',
                'price' => 25000,
                'image' => '/image/catalog/certificates/family.webp',
                'sort_order' => 2
            ),
            array(
                'certificate_id' => 3,
                'name' => 'Приключение',
                'description' => '5 ночей активного отдыха на природе',
                'price' => 40000,
                'image' => '/image/catalog/certificates/adventure.webp',
                'sort_order' => 3
            ),
            array(
                'certificate_id' => 4,
                'name' => 'Зимняя сказка',
                'description' => 'Уютный зимний отдых с видом на горы',
                'price' => 20000,
                'image' => '/image/catalog/certificates/winter.webp',
                'sort_order' => 4
            ),
            array(
                'certificate_id' => 5,
                'name' => 'Летний релакс',
                'description' => 'Отдых у воды в теплый сезон',
                'price' => 18000,
                'image' => '/image/catalog/certificates/summer.webp',
                'sort_order' => 5
            ),
            array(
                'certificate_id' => 6,
                'name' => 'Luxury глэмпинг',
                'description' => 'Премиум размещение с максимальным комфортом',
                'price' => 50000,
                'image' => '/image/catalog/certificates/luxury.webp',
                'sort_order' => 6
            )
        );
    }
}
?>
