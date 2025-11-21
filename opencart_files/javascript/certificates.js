/**
 * Подарочные сертификаты - JavaScript
 * Адаптировано из React-версии для OpenCart (jQuery)
 */

(function($) {
    'use strict';

    // Глобальные переменные
    var selectedCertificate = {
        id: null,
        name: '',
        price: null
    };

    // ===== ИНИЦИАЛИЗАЦИЯ ===== //
    $(document).ready(function() {
        initSmoothScroll();
        initFAQ();
        initCertificateSelection();
        initFormHandling();
        initAmountButtons();
        initTypeSelection();
        initScrollAnimations();
    });

    // ===== ПЛАВНАЯ ПРОКРУТКА ===== //
    function initSmoothScroll() {
        $('a[href^="#"]').on('click', function(e) {
            var target = $(this.getAttribute('href'));

            if(target.length) {
                e.preventDefault();

                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80
                }, 800, 'swing');
            }
        });

        // Специальные кнопки в Hero
        $('.btn-select-certificate').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#certificates-section').offset().top - 80
            }, 800);
        });

        $('.btn-how-it-works').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#how-it-works').offset().top - 80
            }, 800);
        });
    }

    // ===== FAQ АККОРДЕОН ===== //
    function initFAQ() {
        $('.faq-question').on('click', function() {
            var $item = $(this).closest('.faq-item');
            var $answer = $item.find('.faq-answer');
            var isActive = $item.hasClass('active');

            // Закрыть все другие
            $('.faq-item').not($item).removeClass('active').find('.faq-answer').slideUp(300);

            // Переключить текущий
            if (isActive) {
                $item.removeClass('active');
                $answer.slideUp(300);
            } else {
                $item.addClass('active');
                $answer.slideDown(300);
            }
        });
    }

    // ===== ВЫБОР СЕРТИФИКАТА ===== //
    function initCertificateSelection() {
        // Глобальная функция для вызова из inline onclick
        window.selectCertificate = function(id, name, price) {
            selectedCertificate = {
                id: id,
                name: name,
                price: price
            };

            // Обновить информацию в модальном окне
            $('#modal-certificate-name').text(name);
            $('#certificate_id').val(id);
            $('#certificate_name').val(name);

            // Установить минимальную сумму
            $('#amount').attr('min', price);
            $('#amount').val(price);

            // Обновить выбранную кнопку суммы
            $('.amount-btn').removeClass('selected');
            $('.amount-btn[data-amount="' + price + '"]').addClass('selected');

            // Открыть модальное окно
            $.magnificPopup.open({
                items: {
                    src: '#buy_form',
                    type: 'inline'
                },
                callbacks: {
                    open: function() {
                        // Сбросить форму при открытии
                        resetForm();
                    }
                }
            });
        };
    }

    // ===== КНОПКИ ВЫБОРА СУММЫ ===== //
    function initAmountButtons() {
        $('.amount-btn').on('click', function() {
            var amount = $(this).data('amount');

            $('.amount-btn').removeClass('selected');
            $(this).addClass('selected');

            $('#amount').val(amount);
        });

        // При ручном вводе снять выделение с кнопок
        $('#amount').on('input', function() {
            var enteredAmount = $(this).val();
            var matchingBtn = $('.amount-btn[data-amount="' + enteredAmount + '"]');

            $('.amount-btn').removeClass('selected');
            if (matchingBtn.length) {
                matchingBtn.addClass('selected');
            }
        });
    }

    // ===== ВЫБОР ТИПА СЕРТИФИКАТА ===== //
    function initTypeSelection() {
        $('.type-option').on('click', function() {
            var radio = $(this).find('input[type="radio"]');
            var type = radio.val();

            $('.type-option').removeClass('selected');
            $(this).addClass('selected');
            radio.prop('checked', true);

            // Показать/скрыть поля доставки
            if (type === '1') {
                $('.delivery-section').slideDown(300).addClass('show');
                $('#address').prop('required', true);
            } else {
                $('.delivery-section').slideUp(300).removeClass('show');
                $('#address').prop('required', false);
            }
        });
    }

    // ===== ОБРАБОТКА ФОРМЫ ===== //
    function initFormHandling() {
        $('#certificate-order-form').on('submit', function(e) {
            e.preventDefault();

            // Очистить предыдущие ошибки
            clearErrors();

            // Валидация
            if (!validateForm()) {
                return false;
            }

            // Отключить кнопку отправки
            var $submitBtn = $(this).find('button[type="submit"]');
            $submitBtn.prop('disabled', true).text('Отправка...');

            // Собрать данные формы
            var formData = {
                certificate_id: $('#certificate_id').val(),
                certificate_name: $('#certificate_name').val(),
                amount: $('#amount').val(),
                type: $('input[name="type"]:checked').val(),
                firstname: $('#firstname').val(),
                lastname: $('#lastname').val(),
                email: $('#email').val(),
                telephone: $('#telephone').val(),
                wishes: $('#wishes').val(),
                comment: $('#comment').val(),
                agree: $('#agree').prop('checked') ? 1 : 0
            };

            // Если доставка, добавить адрес
            if (formData.type === '1') {
                formData.address = $('#address').val();
                formData.number = $('#number').val();
            }

            // AJAX запрос
            $.ajax({
                url: 'index.php?route=information/certificates/order',
                type: 'POST',
                data: formData,
                dataType: 'json',
                success: function(response) {
                    if (response.error) {
                        // Показать ошибки
                        showErrors(response.error);
                        $submitBtn.prop('disabled', false).text('Оформить заказ');
                    } else if (response.success) {
                        // Успешный заказ
                        showSuccess(response);

                        // Перенаправление на оплату через 2 секунды
                        setTimeout(function() {
                            if (response.payment_url) {
                                window.location.href = response.payment_url;
                            } else {
                                $.magnificPopup.close();
                                resetForm();
                            }
                        }, 2000);
                    }
                },
                error: function(xhr, status, error) {
                    console.error('AJAX Error:', error);
                    showError('Произошла ошибка при отправке заказа. Попробуйте позже.');
                    $submitBtn.prop('disabled', false).text('Оформить заказ');
                }
            });

            return false;
        });
    }

    // ===== ВАЛИДАЦИЯ ФОРМЫ ===== //
    function validateForm() {
        var isValid = true;

        // Проверка суммы
        var amount = parseInt($('#amount').val());
        var minAmount = selectedCertificate.price || 5000;
        if (!amount || amount < minAmount) {
            showFieldError('amount', 'Минимальная сумма сертификата ' + minAmount + ' рублей');
            isValid = false;
        }

        // Проверка имени
        var firstname = $('#firstname').val().trim();
        if (!firstname || firstname.length < 1 || firstname.length > 32) {
            showFieldError('firstname', 'Имя должно быть от 1 до 32 символов');
            isValid = false;
        }

        // Проверка email
        var email = $('#email').val().trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            showFieldError('email', 'Введите корректный E-Mail');
            isValid = false;
        }

        // Проверка телефона
        var telephone = $('#telephone').val().trim();
        if (!telephone || telephone.length < 6) {
            showFieldError('telephone', 'Введите корректный номер телефона');
            isValid = false;
        }

        // Проверка адреса (если доставка)
        var type = $('input[name="type"]:checked').val();
        if (type === '1') {
            var address = $('#address').val().trim();
            if (!address || address.length < 10) {
                showFieldError('address', 'Введите полный адрес доставки');
                isValid = false;
            }
        }

        // Проверка согласия
        if (!$('#agree').prop('checked')) {
            showFieldError('agree', 'Необходимо согласие с политикой конфиденциальности');
            isValid = false;
        }

        return isValid;
    }

    // ===== ПОКАЗАТЬ ОШИБКУ ПОЛЯ ===== //
    function showFieldError(fieldName, message) {
        var $field = $('#' + fieldName);
        var $errorDiv = $field.siblings('.error-message');

        $field.addClass('error');

        if ($errorDiv.length) {
            $errorDiv.text(message).addClass('show');
        } else {
            $field.after('<div class="error-message show">' + message + '</div>');
        }
    }

    // ===== ПОКАЗАТЬ НЕСКОЛЬКО ОШИБОК ===== //
    function showErrors(errors) {
        $.each(errors, function(field, message) {
            if (field === 'warning') {
                showError(message);
            } else {
                showFieldError(field, message);
            }
        });
    }

    // ===== ПОКАЗАТЬ ОБЩУЮ ОШИБКУ ===== //
    function showError(message) {
        var errorHtml = '<div class="alert alert-danger" role="alert">' +
                       '<strong>Ошибка!</strong> ' + message +
                       '</div>';

        $('#certificate-order-form').prepend(errorHtml);

        // Прокрутить к форме
        $('.mfp-content').animate({ scrollTop: 0 }, 300);
    }

    // ===== ПОКАЗАТЬ УСПЕХ ===== //
    function showSuccess(response) {
        var successHtml = '<div class="alert alert-success" role="alert">' +
                         '<strong>Успешно!</strong> ' + response.success +
                         '<br>Номер заказа: <strong>#' + response.order_id + '</strong>' +
                         '<br>Сейчас вы будете перенаправлены на страницу оплаты...' +
                         '</div>';

        $('#certificate-order-form').prepend(successHtml);

        // Скрыть форму
        $('#certificate-order-form .form-content').slideUp(300);

        // Прокрутить к сообщению
        $('.mfp-content').animate({ scrollTop: 0 }, 300);
    }

    // ===== ОЧИСТИТЬ ОШИБКИ ===== //
    function clearErrors() {
        $('.form-control').removeClass('error');
        $('.error-message').removeClass('show');
        $('.alert').remove();
    }

    // ===== СБРОС ФОРМЫ ===== //
    function resetForm() {
        $('#certificate-order-form')[0].reset();
        clearErrors();
        $('.type-option').removeClass('selected');
        $('.type-option:first').addClass('selected').find('input').prop('checked', true);
        $('.delivery-section').hide().removeClass('show');
        $('.amount-btn').removeClass('selected');
        $('#certificate-order-form button[type="submit"]').prop('disabled', false).text('Оформить заказ');
        $('#certificate-order-form .form-content').show();
    }

    // ===== АНИМАЦИЯ ПРИ ПРОКРУТКЕ ===== //
    function initScrollAnimations() {
        // Intersection Observer для анимаций при появлении
        if ('IntersectionObserver' in window) {
            var observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        $(entry.target).addClass('fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Наблюдать за элементами
            $('.certificate-card, .step-card, .faq-item, .hero-feature').each(function() {
                observer.observe(this);
            });
        } else {
            // Fallback для старых браузеров
            $('.certificate-card, .step-card, .faq-item, .hero-feature').addClass('fade-in');
        }
    }

    // ===== ФОРМАТИРОВАНИЕ ТЕЛЕФОНА ===== //
    $('#telephone').on('input', function() {
        var value = $(this).val().replace(/\D/g, '');

        if (value.length > 0) {
            if (value[0] === '7' || value[0] === '8') {
                value = '+7' + value.slice(1);
            } else {
                value = '+7' + value;
            }

            // Форматирование +7 (XXX) XXX-XX-XX
            var formatted = value.slice(0, 2);
            if (value.length > 2) formatted += ' (' + value.slice(2, 5);
            if (value.length > 5) formatted += ') ' + value.slice(5, 8);
            if (value.length > 8) formatted += '-' + value.slice(8, 10);
            if (value.length > 10) formatted += '-' + value.slice(10, 12);

            $(this).val(formatted);
        }
    });

    // ===== ФОРМАТИРОВАНИЕ СУММЫ ===== //
    $('#amount').on('input', function() {
        var value = $(this).val().replace(/\D/g, '');
        $(this).val(value);
    });

    // ===== ПРЕДОТВРАЩЕНИЕ ДВОЙНОЙ ОТПРАВКИ ===== //
    var formSubmitting = false;
    $('#certificate-order-form').on('submit', function(e) {
        if (formSubmitting) {
            e.preventDefault();
            return false;
        }
        formSubmitting = true;

        // Сбросить флаг через 3 секунды на случай ошибки
        setTimeout(function() {
            formSubmitting = false;
        }, 3000);
    });

    // ===== ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ===== //
    $(document).on('click', '.mfp-close', function() {
        resetForm();
    });

    // ===== ДЕБАГ В КОНСОЛЬ (убрать в продакшн) ===== //
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Certificates JS loaded');
        console.log('jQuery version:', $.fn.jquery);
    }

})(jQuery);

// ===== ДОПОЛНИТЕЛЬНЫЕ УТИЛИТЫ ===== //

/**
 * Проверка доступности Magnific Popup
 */
(function($) {
    $(document).ready(function() {
        if (typeof $.magnificPopup === 'undefined') {
            console.error('Magnific Popup not loaded! Please include it in your template.');

            // Fallback: простой alert
            window.selectCertificate = function(id, name, price) {
                alert('Для оформления заказа необходимо подключить библиотеку Magnific Popup.\n\n' +
                      'Сертификат: ' + name + '\nЦена: ' + price + ' ₽');
            };
        } else {
            // Инициализация Magnific Popup с настройками
            $.magnificPopup.instance.defaults.closeOnBgClick = false;
            $.magnificPopup.instance.defaults.enableEscapeKey = true;
            $.magnificPopup.instance.defaults.closeBtnInside = true;
        }
    });
})(jQuery);

/**
 * Google Analytics / Яндекс.Метрика события (опционально)
 */
function trackCertificateSelection(certificateId, certificateName, price) {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'select_certificate', {
            'certificate_id': certificateId,
            'certificate_name': certificateName,
            'value': price,
            'currency': 'RUB'
        });
    }

    // Яндекс.Метрика
    if (typeof ym !== 'undefined') {
        ym(YANDEX_METRIKA_ID, 'reachGoal', 'select_certificate', {
            certificate_id: certificateId,
            certificate_name: certificateName,
            price: price
        });
    }
}

/**
 * Отслеживание отправки формы
 */
function trackCertificateOrder(orderId, amount) {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'purchase', {
            'transaction_id': orderId,
            'value': amount,
            'currency': 'RUB',
            'items': [{
                'item_id': 'certificate',
                'item_name': 'Gift Certificate',
                'price': amount,
                'quantity': 1
            }]
        });
    }

    // Яндекс.Метрика
    if (typeof ym !== 'undefined') {
        ym(YANDEX_METRIKA_ID, 'reachGoal', 'certificate_order', {
            order_id: orderId,
            amount: amount
        });
    }
}
