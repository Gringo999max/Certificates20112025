<section class="hero-section">
    <div class="content">
        <div class="hero-wrapper">
            <!-- Левая часть - зеленый блок с текстом -->
            <div class="hero-content">
                <div class="hero-decorations">
                    <!-- Декоративные элементы природы (листья, горы, деревья) -->
                    <span class="deco-leaf deco-leaf-1"></span>
                    <span class="deco-leaf deco-leaf-2"></span>
                    <span class="deco-leaf deco-leaf-3"></span>
                    <span class="deco-mountain deco-mountain-1"></span>
                    <span class="deco-mountain deco-mountain-2"></span>
                    <span class="deco-tree deco-tree-1"></span>
                    <span class="deco-star deco-star-1"></span>
                    <span class="deco-cloud"></span>
                </div>

                <div class="hero-text">
                    <h1>Подарочные сертификаты на отдых в 500+ глэмпингах</h1>
                    <p class="hero-description">
                        Идеальный подарок для тех, у кого есть всё — получатель сертификата сам выберет подходящий глэмпинг и дату отдыха
                    </p>

                    <div class="hero-features">
                        <div class="feature-item">
                            <svg class="feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>500+ локаций</span>
                        </div>
                        <div class="feature-item">
                            <svg class="feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            <span>Срок действия 2 года</span>
                        </div>
                        <div class="feature-item">
                            <svg class="feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                            </svg>
                            <span>Получатель выбирает сам</span>
                        </div>
                    </div>

                    <div class="hero-buttons">
                        <a href="#certificates-section" class="btn-primary btn-select-certificate">
                            Выбрать сертификат
                        </a>
                        <a href="#how-it-works" class="btn-secondary">
                            Как это работает?
                        </a>
                    </div>
                </div>
            </div>

            <!-- Правая часть - изображение -->
            <div class="hero-image">
                <img src="/image/catalog/certificates/hero-glamping.webp" alt="Глэмпинг" loading="eager">
                <div class="hero-image-overlay"></div>
            </div>
        </div>
    </div>
</section>

<script>
$(document).ready(function() {
    // Плавный скролл к секции сертификатов
    $('.btn-select-certificate').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#certificates-section').offset().top - 80
        }, 800);
    });

    // Плавный скролл к "Как это работает"
    $('a[href="#how-it-works"]').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#how-it-works').offset().top - 80
        }, 800);
    });
});
</script>
