<?php echo $header; ?>

<!-- Подключение стилей и скриптов -->
<link href="catalog/view/stylesheet/certificates.min.css?v=2.0" rel="stylesheet">
<script src="catalog/view/javascript/certificates.min.js?v=2.0"></script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">

<div class="prod-baner">
    <div class="content">
        <ul class="breadcrumbs">
            <?php foreach ($breadcrumbs as $breadcrumb) { ?>
                <li>
                    <?php if (isset($breadcrumb['href'])) { ?>
                        <a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
                    <?php } else { ?>
                        <?php echo $breadcrumb['text']; ?>
                    <?php } ?>
                </li>
            <?php } ?>
        </ul>
    </div>
</div>

<!-- Hero секция -->
<?php include 'blocks/hero.tpl'; ?>

<!-- Каталог сертификатов -->
<div class="content">
    <div id="certificates-section" class="certificates-section">
        <h2>Выберите подарочный сертификат</h2>
        <p class="section-subtitle">Идеальный подарок для любого случая — получатель сам выберет глэмпинг и дату отдыха</p>

        <div class="certificates-grid">
            <?php foreach ($certificates as $cert) { ?>
                <div class="certificate-card">
                    <div class="certificate-image">
                        <img src="<?php echo $cert['image']; ?>" alt="<?php echo $cert['name']; ?>">
                    </div>
                    <div class="certificate-content">
                        <h3><?php echo $cert['name']; ?></h3>
                        <p class="certificate-description"><?php echo $cert['description']; ?></p>
                        <div class="certificate-footer">
                            <p class="certificate-price">от <?php echo $cert['price']; ?> ₽</p>
                            <button class="btn-buy acc-name popup" data-certificate-id="<?php echo $cert['certificate_id']; ?>" onclick="selectCertificate(<?php echo $cert['certificate_id']; ?>, '<?php echo $cert['name']; ?>', <?php echo $cert['price']; ?>)">
                                Выбрать
                            </button>
                        </div>
                    </div>
                </div>
            <?php } ?>

            <!-- Карточка "Любая сумма" -->
            <div class="certificate-card certificate-custom">
                <div class="certificate-image">
                    <img src="/image/catalog/certificates/custom-amount.webp" alt="Любая сумма">
                </div>
                <div class="certificate-content">
                    <h3>Любая сумма</h3>
                    <p class="certificate-description">Укажите свою сумму от 5 000 ₽</p>
                    <div class="certificate-footer">
                        <p class="certificate-price">от 5 000 ₽</p>
                        <button class="btn-buy acc-name popup" onclick="selectCertificate(0, 'Индивидуальный сертификат', 5000)">
                            Выбрать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Как это работает -->
<?php include 'blocks/how_it_works.tpl'; ?>

<!-- Блок преимуществ -->
<div class="content">
    <div class="benefits-section">
        <h2>Почему сертификат Глэмпинги.рф — отличный подарок</h2>
        <div class="benefits-grid">
            <div class="benefit-card">
                <div class="benefit-icon">
                    <img src="/image/icons/sert/home.png" alt="Большой выбор">
                </div>
                <h3>Большой выбор глэмпингов</h3>
                <p>более 500+ объектов размещения по всей России</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">
                    <img src="/image/icons/sert/gift.png" alt="Идеальный подарок">
                </div>
                <h3>Идеальный подарок для любого случая</h3>
                <p>Не нужно ломать голову — мы все уже придумали за вас</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">
                    <img src="/image/icons/sert/clock.png" alt="Срок действия">
                </div>
                <h3>Есть время подумать</h3>
                <p>Сертификат действует 2 года с момента покупки</p>
            </div>
            <div class="benefit-card">
                <div class="benefit-icon">
                    <img src="/image/icons/sert/wallet.png" alt="Любой номинал">
                </div>
                <h3>Номинал под ваш запрос</h3>
                <p>Вы можете указать любую сумму от 5 000 ₽</p>
            </div>
        </div>
    </div>
</div>

<!-- Отзывы -->
<!-- TODO: Добавить reviews.tpl если необходимо -->
<?php // include 'blocks/reviews.tpl'; ?>

<!-- FAQ -->
<?php include 'blocks/faq.tpl'; ?>

<!-- Доставка и оплата -->
<div class="content">
    <div class="delivery-payment-section">
        <div id="delivery" class="delivery-block">
            <h2>Доставка и получение</h2>
            <div class="delivery-options">
                <div class="delivery-option">
                    <h3>Электронная почта</h3>
                    <ul>
                        <li>Сертификат придёт на вашу электронную почту моментально после оплаты</li>
                        <li>Можно распечатать или переслать получателю</li>
                        <li>Доставка бесплатная</li>
                    </ul>
                </div>
                <div class="delivery-option">
                    <h3>Курьерская доставка</h3>
                    <ul>
                        <li>Сроки доставки: от 1 до 3 дней</li>
                        <li>Доставка по Москве бесплатная</li>
                        <li>Сертификат в фирменном конверте</li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="payment" class="payment-block">
            <h2>Способы оплаты</h2>
            <p>Оплата происходит через АО «ТБАНК» с использованием банковских карт следующих платёжных систем:</p>
            <div class="payment-logos">
                <img src="/image/icons/sert/logos.png" alt="Способы оплаты">
            </div>
            <p class="payment-security">
                Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается АО «ТБАНК».
            </p>
        </div>
    </div>
</div>

<!-- Плавающая кнопка -->
<div class="fixed-btn-block" style="display: none">
    <button class="btn-buy-fixed acc-name popup" onclick="$('html, body').animate({ scrollTop: $('#certificates-section').offset().top }, 400);">
        Выбрать сертификат
    </button>
</div>

<!-- Модальное окно заказа (из существующего gift_certificate.tpl) -->
<form id="buy_form" class="acc-modal zoom-anim-dialog mfp-hide">
    <h2>Оформление сертификата</h2>

    <input type="hidden" name="certificate_id" id="certificate-id" value="0">
    <input type="hidden" name="certificate_name" id="certificate-name" value="">

    <div class="form-group">
        <label class="control-label" for="input-amount">Укажите сумму сертификата:</label>
        <small>Минимальная сумма: 5000 рублей</small>
        <input type="number" min="5000" required name="amount" value="" placeholder="Сумма сертификата" id="input-amount" class="form-control">
    </div>

    <div class="type-period">
        <div class="type">
            <p class="title">Выберите тип сертификата:</p>
            <div class="radio">
                <label>
                    <input type="radio" name="type" value="0" checked="checked">
                    <span>Электронный сертификат</span>
                </label>
            </div>
            <div class="radio">
                <label>
                    <input type="radio" name="type" value="1">
                    <span>Печатный сертификат с доставкой</span>
                </label>
            </div>
        </div>
    </div>

    <div id="delivery-form" style="display: none">
        <div class="form-group">
            <label class="control-label">Адрес доставки:</label>
            <input type="text" name="address" placeholder="Улица, дом, корпус" class="form-control">
            <input type="text" name="number" placeholder="Квартира/офис" class="form-control">
        </div>
    </div>

    <div class="form-group">
        <label class="control-label" for="input-wishes">Хотите написать пожелание?</label>
        <small>Мы добавим его на сертификат</small>
        <textarea name="wishes" maxlength="300" placeholder="Добавьте несколько добрых слов" id="input-wishes" class="form-control"></textarea>
    </div>

    <div class="contact form-group">
        <label class="control-label">Ваши данные:</label>
        <small>Мы отправим сертификат на указанный email</small>
        <div class="inputs-group">
            <input type="text" required name="firstname" placeholder="Имя" class="form-control">
            <input type="text" name="lastname" placeholder="Фамилия" class="form-control">
            <input type="tel" required name="telephone" placeholder="+7 (999) 999-99-99" class="form-control phone-mask">
            <input type="email" required name="email" placeholder="example@mail.com" class="form-control">
        </div>
        <input type="text" name="comment" placeholder="Комментарий к заказу" class="form-control">

        <div class="radio">
            <label>
                <input type="radio" name="agree" value="1" checked="checked" required>
                <span>Согласен с условиями <a href="/privacy" target="_blank">Политики обработки персональных данных</a> и даю <a href="/person_data_agreement" target="_blank">Согласие на обработку персональных данных</a></span>
            </label>
        </div>
    </div>

    <button class="btn-submit" type="submit">
        Купить сертификат
    </button>
</form>

<script>
$(document).ready(function() {
    // Маска для телефона
    $('.phone-mask').inputmask('+7 (999) 999-99-99');

    // Показать/скрыть форму доставки
    $('input[name="type"]').change(function() {
        if ($(this).val() == '1') {
            $('#delivery-form').slideDown();
        } else {
            $('#delivery-form').slideUp();
        }
    });

    // Плавающая кнопка при скролле
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.fixed-btn-block').fadeIn();
        } else {
            $('.fixed-btn-block').fadeOut();
        }
    });
});

// Функция выбора сертификата
function selectCertificate(id, name, price) {
    $('#certificate-id').val(id);
    $('#certificate-name').val(name);
    $('#input-amount').val(price).attr('min', price);

    // Открыть модальное окно
    $.magnificPopup.open({
        items: { src: '#buy_form' },
        type: 'inline',
        closeOnBgClick: false
    });
}
</script>

<?php echo $footer; ?>
