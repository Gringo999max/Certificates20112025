<?php
/**
 * Главный контроллер для React интеграции
 * Файл: catalog/controller/information/certificates.php
 *
 * Этот контроллер загружает React приложение и передает данные из OpenCart
 */
class ControllerInformationCertificates extends Controller {

    /**
     * Главная страница - index (home)
     */
    public function index() {
        $this->load->language('information/certificates');
        $this->load->model('catalog/certificate');

        $data['page'] = 'home';
        $data['title'] = $this->language->get('heading_title');
        $data['description'] = 'Подарочные сертификаты на глэмпинги - 500+ локаций по всей России';

        // Загружаем сертификаты из БД
        $certificates = $this->model_catalog_certificate->getCertificates();

        // Форматируем для React и SEO
        $data['certificates'] = array();
        foreach ($certificates as $certificate) {
            $data['certificates'][] = array(
                'id' => $certificate['certificate_id'],
                'name' => $certificate['name'],
                'description' => $certificate['description'],
                'price' => $certificate['price'],
                'image' => $certificate['image']
            );
        }

        // FAQ
        $data['faq'] = $this->model_catalog_certificate->getFAQs();

        // SEO
        $this->document->setTitle($data['title']);
        $this->document->setDescription($data['description']);
        $this->document->addLink($this->url->link('information/certificates'), 'canonical');

        // Open Graph для соцсетей
        $this->document->addMeta('property', 'og:title', $data['title']);
        $this->document->addMeta('property', 'og:description', $data['description']);
        $this->document->addMeta('property', 'og:type', 'website');
        $this->document->addMeta('property', 'og:url', $this->url->link('information/certificates'));

        // Breadcrumbs
        $data['breadcrumbs'] = array();
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_home'),
            'href' => $this->url->link('common/home')
        );
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('heading_title'),
            'href' => $this->url->link('information/certificates')
        );

        // Настройки для React
        $data['react_settings'] = array(
            'api_url' => $this->url->link('information/certificates/api'),
            'cart_url' => $this->url->link('checkout/cart'),
            'language' => $this->config->get('config_language'),
            'currency' => $this->session->data['currency']
        );

        // Подключаем React build файлы
        $data['react_css'] = '/Certificates20112025/assets/index-CT3lHhnO.css';
        $data['react_js'] = '/Certificates20112025/assets/index-GKQx7YZW.js';

        // Рендерим шаблон
        $data['column_left'] = $this->load->controller('common/column_left');
        $data['column_right'] = $this->load->controller('common/column_right');
        $data['content_top'] = $this->load->controller('common/content_top');
        $data['content_bottom'] = $this->load->controller('common/content_bottom');
        $data['footer'] = $this->load->controller('common/footer');
        $data['header'] = $this->load->controller('common/header');

        $this->response->setOutput($this->load->view('information/certificates_react', $data));
    }

    /**
     * Страница "Доставка и оплата"
     */
    public function delivery() {
        $this->load->language('information/certificates');

        $data['page'] = 'delivery';
        $data['title'] = 'Доставка и оплата';
        $data['description'] = 'Информация о доставке сертификатов и способах оплаты';

        $this->document->setTitle($data['title']);
        $this->document->setDescription($data['description']);

        // SEO контент для страницы доставки
        $data['seo_content'] = array(
            'heading' => 'Доставка и оплата',
            'text' => 'Электронные сертификаты доставляются мгновенно на email. Печатные сертификаты доставляются курьером или почтой России в течение 2-5 дней.',
            'sections' => array(
                array(
                    'title' => 'Способы доставки',
                    'items' => array(
                        'Электронная доставка - мгновенно на email',
                        'Курьерская доставка по Москве - от 2 часов',
                        'Почта России - 3-5 дней'
                    )
                ),
                array(
                    'title' => 'Способы оплаты',
                    'items' => array(
                        'Банковские карты (Visa, MasterCard, МИР)',
                        'Электронные кошельки',
                        'Банковский перевод для юридических лиц'
                    )
                )
            )
        );

        $data['certificates'] = array(); // Не нужны на этой странице
        $data['faq'] = array();
        $data['react_settings'] = array(
            'api_url' => $this->url->link('information/certificates/api')
        );

        $data['react_css'] = '/Certificates20112025/assets/index-CT3lHhnO.css';
        $data['react_js'] = '/Certificates20112025/assets/index-GKQx7YZW.js';

        $data['breadcrumbs'] = array();
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_home'),
            'href' => $this->url->link('common/home')
        );
        $data['breadcrumbs'][] = array(
            'text' => 'Сертификаты',
            'href' => $this->url->link('information/certificates')
        );
        $data['breadcrumbs'][] = array(
            'text' => 'Доставка и оплата',
            'href' => $this->url->link('information/certificates/delivery')
        );

        $data['column_left'] = $this->load->controller('common/column_left');
        $data['column_right'] = $this->load->controller('common/column_right');
        $data['content_top'] = $this->load->controller('common/content_top');
        $data['content_bottom'] = $this->load->controller('common/content_bottom');
        $data['footer'] = $this->load->controller('common/footer');
        $data['header'] = $this->load->controller('common/header');

        $this->response->setOutput($this->load->view('information/certificates_react', $data));
    }

    /**
     * Страница "Корпоративным клиентам"
     */
    public function corporate() {
        $this->load->language('information/certificates');

        $data['page'] = 'corporate';
        $data['title'] = 'Корпоративным клиентам';
        $data['description'] = 'Подарочные сертификаты для сотрудников и партнеров';

        $this->document->setTitle($data['title']);
        $this->document->setDescription($data['description']);

        $data['seo_content'] = array(
            'heading' => 'Корпоративным клиентам',
            'text' => 'Порадуйте сотрудников и партнеров подарочными сертификатами на отдых в глэмпингах. Индивидуальный подход, скидки от 10%, работа по договору.',
            'sections' => array(
                array(
                    'title' => 'Преимущества для бизнеса',
                    'items' => array(
                        'Скидки от 10% при заказе от 10 сертификатов',
                        'Персональный менеджер',
                        'Брендирование сертификатов вашим логотипом',
                        'Работа по договору с отсрочкой платежа',
                        'Отчетные документы для бухгалтерии'
                    )
                )
            )
        );

        $data['certificates'] = array();
        $data['faq'] = array();
        $data['react_settings'] = array(
            'api_url' => $this->url->link('information/certificates/api')
        );

        $data['react_css'] = '/Certificates20112025/assets/index-CT3lHhnO.css';
        $data['react_js'] = '/Certificates20112025/assets/index-GKQx7YZW.js';

        $data['breadcrumbs'] = array();
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_home'),
            'href' => $this->url->link('common/home')
        );
        $data['breadcrumbs'][] = array(
            'text' => 'Сертификаты',
            'href' => $this->url->link('information/certificates')
        );
        $data['breadcrumbs'][] = array(
            'text' => 'Корпоративным клиентам',
            'href' => $this->url->link('information/certificates/corporate')
        );

        $data['column_left'] = $this->load->controller('common/column_left');
        $data['column_right'] = $this->load->controller('common/column_right');
        $data['content_top'] = $this->load->controller('common/content_top');
        $data['content_bottom'] = $this->load->controller('common/content_bottom');
        $data['footer'] = $this->load->controller('common/footer');
        $data['header'] = $this->load->controller('common/header');

        $this->response->setOutput($this->load->view('information/certificates_react', $data));
    }

    /**
     * Страница "Отзывы"
     */
    public function reviews() {
        $this->load->language('information/certificates');

        $data['page'] = 'reviews';
        $data['title'] = 'Отзывы';
        $data['description'] = 'Отзывы клиентов о подарочных сертификатах';

        $this->document->setTitle($data['title']);
        $this->document->setDescription($data['description']);

        // Загружаем отзывы (если есть такая модель)
        // $this->load->model('catalog/review');
        // $data['reviews'] = $this->model_catalog_review->getReviews();

        $data['seo_content'] = array(
            'heading' => 'Отзывы наших клиентов',
            'text' => 'Более 15,000 довольных клиентов уже подарили незабываемый отдых своим близким.',
            'sections' => array()
        );

        $data['certificates'] = array();
        $data['faq'] = array();
        $data['react_settings'] = array(
            'api_url' => $this->url->link('information/certificates/api')
        );

        $data['react_css'] = '/Certificates20112025/assets/index-CT3lHhnO.css';
        $data['react_js'] = '/Certificates20112025/assets/index-GKQx7YZW.js';

        $data['breadcrumbs'] = array();
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_home'),
            'href' => $this->url->link('common/home')
        );
        $data['breadcrumbs'][] = array(
            'text' => 'Сертификаты',
            'href' => $this->url->link('information/certificates')
        );
        $data['breadcrumbs'][] = array(
            'text' => 'Отзывы',
            'href' => $this->url->link('information/certificates/reviews')
        );

        $data['column_left'] = $this->load->controller('common/column_left');
        $data['column_right'] = $this->load->controller('common/column_right');
        $data['content_top'] = $this->load->controller('common/content_top');
        $data['content_bottom'] = $this->load->controller('common/content_bottom');
        $data['footer'] = $this->load->controller('common/footer');
        $data['header'] = $this->load->controller('common/header');

        $this->response->setOutput($this->load->view('information/certificates_react', $data));
    }

    /**
     * Страница "О нас"
     */
    public function about() {
        $this->load->language('information/certificates');

        $data['page'] = 'about';
        $data['title'] = 'О нас';
        $data['description'] = 'О платформе Глэмпинги.рф и подарочных сертификатах';

        $this->document->setTitle($data['title']);
        $this->document->setDescription($data['description']);

        $data['seo_content'] = array(
            'heading' => 'О платформе Глэмпинги.рф',
            'text' => 'Мы - крупнейшая онлайн платформа бронирования глэмпингов в России. Более 500 проверенных объектов по всей стране.',
            'sections' => array()
        );

        $data['certificates'] = array();
        $data['faq'] = array();
        $data['react_settings'] = array(
            'api_url' => $this->url->link('information/certificates/api')
        );

        $data['react_css'] = '/Certificates20112025/assets/index-CT3lHhnO.css';
        $data['react_js'] = '/Certificates20112025/assets/index-GKQx7YZW.js';

        $data['breadcrumbs'] = array();
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_home'),
            'href' => $this->url->link('common/home')
        );
        $data['breadcrumbs'][] = array(
            'text' => 'О нас',
            'href' => $this->url->link('information/certificates/about')
        );

        $data['column_left'] = $this->load->controller('common/column_left');
        $data['column_right'] = $this->load->controller('common/column_right');
        $data['content_top'] = $this->load->controller('common/content_top');
        $data['content_bottom'] = $this->load->controller('common/content_bottom');
        $data['footer'] = $this->load->controller('common/footer');
        $data['header'] = $this->load->controller('common/header');

        $this->response->setOutput($this->load->view('information/certificates_react', $data));
    }

    /**
     * Страница "Активация сертификата"
     */
    public function activation() {
        $this->load->language('information/certificates');

        $data['page'] = 'activation';
        $data['title'] = 'Активация сертификата';
        $data['description'] = 'Активируйте ваш подарочный сертификат';

        $this->document->setTitle($data['title']);
        $this->document->setDescription($data['description']);

        $data['seo_content'] = array(
            'heading' => 'Активация подарочного сертификата',
            'text' => 'Введите код вашего сертификата для активации и бронирования глэмпинга.',
            'sections' => array()
        );

        $data['certificates'] = array();
        $data['faq'] = array();
        $data['react_settings'] = array(
            'api_url' => $this->url->link('information/certificates/api')
        );

        $data['react_css'] = '/Certificates20112025/assets/index-CT3lHhnO.css';
        $data['react_js'] = '/Certificates20112025/assets/index-GKQx7YZW.js';

        $data['breadcrumbs'] = array();
        $data['breadcrumbs'][] = array(
            'text' => $this->language->get('text_home'),
            'href' => $this->url->link('common/home')
        );
        $data['breadcrumbs'][] = array(
            'text' => 'Сертификаты',
            'href' => $this->url->link('information/certificates')
        );
        $data['breadcrumbs'][] = array(
            'text' => 'Активация',
            'href' => $this->url->link('information/certificates/activation')
        );

        $data['column_left'] = $this->load->controller('common/column_left');
        $data['column_right'] = $this->load->controller('common/column_right');
        $data['content_top'] = $this->load->controller('common/content_top');
        $data['content_bottom'] = $this->load->controller('common/content_bottom');
        $data['footer'] = $this->load->controller('common/footer');
        $data['header'] = $this->load->controller('common/header');

        $this->response->setOutput($this->load->view('information/certificates_react', $data));
    }

    /**
     * API endpoint для React
     * Обрабатывает запросы от React приложения
     */
    public function api() {
        $this->load->model('catalog/certificate');

        $json = array();

        if ($this->request->server['REQUEST_METHOD'] == 'POST') {
            // Обработка POST запросов от React
            $post_data = json_decode(file_get_contents('php://input'), true);

            if (isset($post_data['action'])) {
                switch ($post_data['action']) {
                    case 'add_to_cart':
                        // Добавление в корзину
                        $json['success'] = true;
                        $json['message'] = 'Сертификат добавлен в корзину';
                        break;

                    case 'create_order':
                        // Создание заказа
                        $order_id = $this->model_catalog_certificate->createOrder($post_data['order']);
                        $json['success'] = true;
                        $json['order_id'] = $order_id;
                        break;

                    default:
                        $json['error'] = 'Unknown action';
                }
            }
        } else {
            // GET запросы
            if (isset($this->request->get['certificates'])) {
                $json['certificates'] = $this->model_catalog_certificate->getCertificates();
            }

            if (isset($this->request->get['faq'])) {
                $json['faq'] = $this->model_catalog_certificate->getFAQs();
            }
        }

        $this->response->addHeader('Content-Type: application/json');
        $this->response->setOutput(json_encode($json));
    }
}
?>
