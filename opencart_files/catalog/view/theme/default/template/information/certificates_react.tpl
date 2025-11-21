<?php echo $header; ?>

<!-- SEO Content Layer - Visible to search engines, hidden when React loads -->
<div id="seo-content" class="seo-layer" style="min-height: 100vh;">

    <!-- Breadcrumbs for SEO -->
    <?php if (!empty($breadcrumbs)): ?>
    <div class="container">
        <ul class="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">
            <?php $position = 1; ?>
            <?php foreach ($breadcrumbs as $breadcrumb): ?>
                <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <a href="<?php echo $breadcrumb['href']; ?>" itemprop="item">
                        <span itemprop="name"><?php echo $breadcrumb['text']; ?></span>
                    </a>
                    <meta itemprop="position" content="<?php echo $position++; ?>" />
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
    <?php endif; ?>

    <div class="container" style="padding: 40px 20px;">

        <!-- Main heading for SEO -->
        <h1 style="font-size: 2.5rem; font-weight: bold; color: #1a202c; margin-bottom: 20px;">
            <?php echo $title; ?>
        </h1>

        <!-- Meta description for SEO -->
        <?php if (!empty($description)): ?>
        <p style="font-size: 1.125rem; color: #4a5568; margin-bottom: 40px; line-height: 1.75;">
            <?php echo $description; ?>
        </p>
        <?php endif; ?>

        <!-- Page-specific SEO content -->
        <?php if ($page == 'index'): ?>

            <!-- Hero Section SEO Content -->
            <section style="margin-bottom: 60px; padding: 40px; background-color: #047857; color: white; border-radius: 20px;">
                <h2 style="font-size: 2rem; margin-bottom: 20px;">Подарите близким отдых на природе</h2>
                <p style="font-size: 1.25rem; margin-bottom: 20px;">
                    Получатель сертификата сам выберет отель и дату
                </p>
                <p style="background-color: #fef3c7; color: #78350f; padding: 15px 30px; border-radius: 10px; display: inline-block;">
                    500+ объектов в 40 регионах России
                </p>
            </section>

            <!-- Certificates Grid for SEO -->
            <?php if (!empty($certificates)): ?>
            <section style="margin-bottom: 60px;">
                <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 30px; text-align: center;">
                    Выберите подарочный сертификат
                </h2>
                <p style="text-align: center; color: #4a5568; margin-bottom: 40px; font-size: 1.125rem;">
                    Получатель сам выберет место и дату отдыха
                </p>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                    <?php foreach ($certificates as $cert): ?>
                    <article itemscope itemtype="http://schema.org/Product" style="background: white; border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
                        <?php if (!empty($cert['image'])): ?>
                        <img itemprop="image" src="<?php echo $cert['image']; ?>" alt="<?php echo $cert['name']; ?>" style="width: 100%; height: 250px; object-fit: cover;">
                        <?php endif; ?>

                        <div style="padding: 25px;">
                            <h3 itemprop="name" style="font-size: 1.5rem; font-weight: bold; margin-bottom: 10px; color: #1a202c;">
                                <?php echo $cert['name']; ?>
                            </h3>

                            <p itemprop="description" style="color: #4a5568; margin-bottom: 20px; line-height: 1.6;">
                                <?php echo $cert['description']; ?>
                            </p>

                            <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                                <meta itemprop="priceCurrency" content="RUB" />
                                <p style="font-size: 1.5rem; font-weight: bold; color: #047857;">
                                    от <span itemprop="price"><?php echo number_format($cert['price'], 0, ',', ' '); ?></span> ₽
                                </p>
                                <link itemprop="availability" href="http://schema.org/InStock" />
                            </div>
                        </div>
                    </article>
                    <?php endforeach; ?>
                </div>
            </section>
            <?php endif; ?>

            <!-- How It Works Section -->
            <?php if (!empty($how_it_works)): ?>
            <section style="margin-bottom: 60px; background-color: #f7fafc; padding: 40px; border-radius: 15px;">
                <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 30px; text-align: center;">
                    Как это работает?
                </h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
                    <?php foreach ($how_it_works as $step): ?>
                    <div style="text-align: center;">
                        <div style="background-color: #047857; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 1.5rem; font-weight: bold;">
                            <?php echo $step['step']; ?>
                        </div>
                        <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 10px;">
                            <?php echo $step['title']; ?>
                        </h3>
                        <p style="color: #4a5568; line-height: 1.6;">
                            <?php echo $step['description']; ?>
                        </p>
                    </div>
                    <?php endforeach; ?>
                </div>
            </section>
            <?php endif; ?>

            <!-- FAQ Section -->
            <?php if (!empty($faq)): ?>
            <section style="margin-bottom: 60px;">
                <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 30px; text-align: center;">
                    Часто задаваемые вопросы
                </h2>
                <div itemscope itemtype="https://schema.org/FAQPage">
                    <?php foreach ($faq as $item): ?>
                    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="background: white; padding: 25px; margin-bottom: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <h3 itemprop="name" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 15px; color: #1a202c;">
                            <?php echo $item['question']; ?>
                        </h3>
                        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <p itemprop="text" style="color: #4a5568; line-height: 1.75;">
                                <?php echo $item['answer']; ?>
                            </p>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </section>
            <?php endif; ?>

        <?php elseif ($page == 'delivery'): ?>

            <!-- Delivery & Payment SEO Content -->
            <section style="margin-bottom: 40px;">
                <h2 style="font-size: 1.875rem; font-weight: bold; margin-bottom: 20px;">Доставка сертификатов</h2>
                <?php if (!empty($delivery_methods)): ?>
                <div style="display: grid; gap: 20px;">
                    <?php foreach ($delivery_methods as $method): ?>
                    <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 10px;"><?php echo $method['name']; ?></h3>
                        <p style="color: #4a5568; margin-bottom: 10px;"><?php echo $method['description']; ?></p>
                        <p style="font-weight: bold; color: #047857;">Срок: <?php echo $method['time']; ?></p>
                        <?php if ($method['price'] > 0): ?>
                        <p style="font-weight: bold;">Стоимость: <?php echo number_format($method['price'], 0, ',', ' '); ?> ₽</p>
                        <?php else: ?>
                        <p style="font-weight: bold; color: #047857;">Бесплатно</p>
                        <?php endif; ?>
                    </div>
                    <?php endforeach; ?>
                </div>
                <?php endif; ?>
            </section>

            <section style="margin-bottom: 40px;">
                <h2 style="font-size: 1.875rem; font-weight: bold; margin-bottom: 20px;">Способы оплаты</h2>
                <?php if (!empty($payment_methods)): ?>
                <div style="display: grid; gap: 20px;">
                    <?php foreach ($payment_methods as $method): ?>
                    <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                        <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 10px;"><?php echo $method['name']; ?></h3>
                        <p style="color: #4a5568;"><?php echo $method['description']; ?></p>
                    </div>
                    <?php endforeach; ?>
                </div>
                <?php endif; ?>
            </section>

        <?php elseif ($page == 'corporate'): ?>

            <!-- Corporate B2B SEO Content -->
            <section style="margin-bottom: 40px;">
                <h2 style="font-size: 1.875rem; font-weight: bold; margin-bottom: 20px;">Корпоративные предложения</h2>
                <p style="font-size: 1.125rem; color: #4a5568; line-height: 1.75; margin-bottom: 30px;">
                    Подарочные сертификаты на глэмпинги - идеальное решение для корпоративных подарков, мотивации сотрудников и благодарности партнерам.
                </p>

                <?php if (!empty($corporate_benefits)): ?>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; margin-bottom: 40px;">
                    <?php foreach ($corporate_benefits as $benefit): ?>
                    <div style="background: #f0fdf4; padding: 25px; border-radius: 10px; border-left: 4px solid #047857;">
                        <h3 style="font-size: 1.125rem; font-weight: bold; margin-bottom: 10px; color: #047857;">
                            <?php echo $benefit['title']; ?>
                        </h3>
                        <p style="color: #4a5568; line-height: 1.6;">
                            <?php echo $benefit['description']; ?>
                        </p>
                    </div>
                    <?php endforeach; ?>
                </div>
                <?php endif; ?>
            </section>

        <?php elseif ($page == 'reviews'): ?>

            <!-- Reviews SEO Content -->
            <section style="margin-bottom: 40px;">
                <h2 style="font-size: 1.875rem; font-weight: bold; margin-bottom: 30px; text-align: center;">Отзывы наших клиентов</h2>

                <?php if (!empty($reviews)): ?>
                <div style="display: grid; gap: 30px;">
                    <?php foreach ($reviews as $review): ?>
                    <article itemscope itemtype="http://schema.org/Review" style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <div style="flex: 1;">
                                <h3 itemprop="author" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 5px;">
                                    <?php echo $review['author']; ?>
                                </h3>
                                <meta itemprop="datePublished" content="<?php echo date('Y-m-d', strtotime($review['date'])); ?>">
                                <p style="color: #6b7280; font-size: 0.875rem;">
                                    <?php echo date('d.m.Y', strtotime($review['date'])); ?>
                                </p>
                            </div>
                            <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
                                <meta itemprop="ratingValue" content="<?php echo $review['rating']; ?>">
                                <meta itemprop="bestRating" content="5">
                                <div style="color: #f59e0b; font-size: 1.25rem;">
                                    <?php echo str_repeat('★', $review['rating']) . str_repeat('☆', 5 - $review['rating']); ?>
                                </div>
                            </div>
                        </div>
                        <p itemprop="reviewBody" style="color: #4a5568; line-height: 1.75; font-size: 1rem;">
                            <?php echo $review['text']; ?>
                        </p>
                        <?php if (!empty($review['certificate_name'])): ?>
                        <p style="margin-top: 15px; color: #047857; font-weight: 500;">
                            Сертификат: <?php echo $review['certificate_name']; ?>
                        </p>
                        <?php endif; ?>
                    </article>
                    <?php endforeach; ?>
                </div>
                <?php endif; ?>
            </section>

        <?php elseif ($page == 'about'): ?>

            <!-- About Us SEO Content -->
            <section style="margin-bottom: 40px;">
                <p style="font-size: 1.125rem; color: #4a5568; line-height: 1.75; margin-bottom: 30px;">
                    Глэмпинги.рф - крупнейшая площадка подарочных сертификатов на отдых в глэмпингах по всей России.
                    Мы объединили более 500 объектов в 40 регионах страны, чтобы предложить вам лучший выбор для незабываемого отдыха на природе.
                </p>

                <?php if (!empty($stats)): ?>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; margin-bottom: 40px; text-align: center;">
                    <?php foreach ($stats as $stat): ?>
                    <div style="background: #f0fdf4; padding: 30px; border-radius: 15px;">
                        <p style="font-size: 3rem; font-weight: bold; color: #047857; margin-bottom: 10px;">
                            <?php echo $stat['value']; ?>
                        </p>
                        <p style="color: #4a5568; font-size: 1.125rem;">
                            <?php echo $stat['label']; ?>
                        </p>
                    </div>
                    <?php endforeach; ?>
                </div>
                <?php endif; ?>
            </section>

        <?php elseif ($page == 'activation'): ?>

            <!-- Certificate Activation SEO Content -->
            <section style="margin-bottom: 40px;">
                <h2 style="font-size: 1.875rem; font-weight: bold; margin-bottom: 20px;">Активация подарочного сертификата</h2>
                <p style="font-size: 1.125rem; color: #4a5568; line-height: 1.75; margin-bottom: 30px;">
                    Введите код вашего сертификата в форму ниже, чтобы активировать его и начать выбирать место для отдыха.
                </p>

                <div style="background: #f0fdf4; padding: 30px; border-radius: 15px; margin-bottom: 30px;">
                    <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 15px; color: #047857;">
                        Как активировать сертификат:
                    </h3>
                    <ol style="color: #4a5568; line-height: 2; padding-left: 20px;">
                        <li>Введите код сертификата из письма или с открытки</li>
                        <li>Нажмите кнопку "Проверить сертификат"</li>
                        <li>Выберите глэмпинг из нашего каталога</li>
                        <li>Укажите желаемые даты бронирования</li>
                        <li>Подтвердите бронирование</li>
                    </ol>
                </div>
            </section>

        <?php endif; ?>

        <!-- Additional SEO content -->
        <?php if (!empty($seo_content)): ?>
        <section style="margin-top: 60px; padding-top: 40px; border-top: 2px solid #e5e7eb;">
            <?php echo $seo_content; ?>
        </section>
        <?php endif; ?>

    </div>
</div>

<!-- React Application Mount Point -->
<div id="root"></div>

<!-- Data Bridge: OpenCart PHP → React JavaScript -->
<script>
// Pass data from OpenCart to React
window.OPENCART_DATA = {
    // Current page identifier
    page: '<?php echo isset($page) ? $page : 'index'; ?>',

    // Certificates data
    certificates: <?php echo !empty($certificates) ? json_encode($certificates) : '[]'; ?>,

    // FAQ data
    faq: <?php echo !empty($faq) ? json_encode($faq) : '[]'; ?>,

    // How it works steps
    howItWorks: <?php echo !empty($how_it_works) ? json_encode($how_it_works) : '[]'; ?>,

    // Reviews
    reviews: <?php echo !empty($reviews) ? json_encode($reviews) : '[]'; ?>,

    // Delivery methods
    deliveryMethods: <?php echo !empty($delivery_methods) ? json_encode($delivery_methods) : '[]'; ?>,

    // Payment methods
    paymentMethods: <?php echo !empty($payment_methods) ? json_encode($payment_methods) : '[]'; ?>,

    // Corporate benefits
    corporateBenefits: <?php echo !empty($corporate_benefits) ? json_encode($corporate_benefits) : '[]'; ?>,

    // Statistics
    stats: <?php echo !empty($stats) ? json_encode($stats) : '[]'; ?>,

    // React settings (API URLs, cart URL, etc.)
    settings: <?php echo !empty($react_settings) ? json_encode($react_settings) : '{}'; ?>,

    // User data if logged in
    customer: {
        logged: <?php echo $this->customer->isLogged() ? 'true' : 'false'; ?>,
        firstname: '<?php echo $this->customer->isLogged() ? $this->customer->getFirstName() : ''; ?>',
        email: '<?php echo $this->customer->isLogged() ? $this->customer->getEmail() : ''; ?>'
    },

    // OpenCart URLs
    urls: {
        cart: '<?php echo $this->url->link('checkout/cart'); ?>',
        checkout: '<?php echo $this->url->link('checkout/checkout'); ?>',
        login: '<?php echo $this->url->link('account/login'); ?>',
        register: '<?php echo $this->url->link('account/register'); ?>'
    }
};
</script>

<!-- Load React Application CSS -->
<link rel="stylesheet" href="<?php echo !empty($react_css) ? $react_css : '/Certificates20112025/assets/index-CT3lHhnO.css'; ?>">

<!-- Load React Application JavaScript -->
<script type="module" src="<?php echo !empty($react_js) ? $react_js : '/Certificates20112025/assets/index-GKQx7YZW.js'; ?>"></script>

<!-- SEO Content Hide Script - Hide SEO layer when React loads -->
<script>
(function() {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initReactMonitor);
    } else {
        initReactMonitor();
    }

    function initReactMonitor() {
        const seoContent = document.getElementById('seo-content');
        const root = document.getElementById('root');

        if (!seoContent || !root) {
            console.warn('SEO content or React root not found');
            return;
        }

        let checkCount = 0;
        const maxChecks = 50; // Check for 5 seconds (50 * 100ms)

        // Monitor React mounting
        const checkReactMounted = setInterval(function() {
            checkCount++;

            // Check if React has rendered content
            if (root.children.length > 0) {
                // React has mounted - hide SEO content
                seoContent.style.display = 'none';
                clearInterval(checkReactMounted);
                console.log('React mounted successfully - SEO content hidden');
                return;
            }

            // Stop checking after max attempts
            if (checkCount >= maxChecks) {
                clearInterval(checkReactMounted);
                console.warn('React did not mount within 5 seconds - keeping SEO content visible');
                // Keep SEO content visible as fallback
            }
        }, 100);
    }
})();
</script>

<!-- Fallback styles for SEO content -->
<style>
.seo-layer {
    /* Basic styling for SEO content when React doesn't load */
    max-width: 1200px;
    margin: 0 auto;
}

.seo-layer img {
    max-width: 100%;
    height: auto;
}

/* Hide React root initially to prevent flash of empty content */
#root:empty {
    display: none;
}

/* Show React root when it has content */
#root:not(:empty) {
    display: block;
}
</style>

<?php echo $footer; ?>
