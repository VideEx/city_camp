$(document).ready(() => {
    $(function () {
        $("#accordion").accordion();
    });

    (function () {
        var $lightbox = $("<div class='lightbox'></div>");
        var $img = $("<img>");
        var $caption = $("<p class='caption'></p>");

        // Add image and caption to lightbox

        $lightbox
            .append($img)
            .append($caption);

        // Add lighbox to document

        $('body').append($lightbox);

        $('.lightbox-gallery img').click(function (e) {
            e.preventDefault();

            // Get image link and description
            var src = $(this).attr("data-image-hd");
            var cap = $(this).attr("alt");

            // Add data to lighbox

            $img.attr('src', src);
            $caption.text(cap);

            // Show lightbox

            $lightbox.fadeIn('fast');

            $lightbox.click(function () {
                $lightbox.fadeOut('fast');
            });
        });

    }());

    let orderInfo = $('#order-info');
    let orderGratitude = $('#order-gratitude');
    let order = $('#order');
    let overlay = $('#overlay');

    let getOrder = $('#get-order-2, #get-order-1');

    let closeOrder = $('.order__close');

    let sendOrder = $('#send-order');


    console.log(sendOrder);

    closeOrder.on('click', () => {
        order.hide();
        overlay.hide();
    });

    getOrder.on('click', () => {
        order.show();
        overlay.show();
        orderGratitude.hide();
    });

    const token = "7330003681:AAGKuGqmyBYJmAG2QpBdSftViL_qS09IboU"
    const chatId = "-4238678546"

    let f_name = $('#user-name').val();
    let f_phone = $('#user-phone').val();
    let f_age = $('#user-age').val();
    let text = 'Новая заявка в лагерь:\n' + 'Имя - ' + f_name + '\n' + 'Номер телефона - ' + f_phone + '\n' + 'Возраст ребенка - ' + f_age;

    $('#send-order-form').on('click', function () {

        //вызываем функцию отправки в Telegram
        $.ajax({
            type: "POST",
            url: "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId,
            data: "parse_mode=HTML&text=" + encodeURIComponent(text),
            success: function (data) {

            }
                .done(function (msg) {
                    if (msg.success) {
                        orderGratitude.show();
                        orderInfo.hide();
                    } else {
                        alert('Приносим свои извинения, но возникли какие-то проблемы, свяжитесь, пожалуйста, с нами, любыми другими способами!');
                    }
                })
        });

    });

// Предварительно заполняем данные вашего чата и бота в переменных chatid и token
//     function send_tg(text) {
//         $.ajax({
//             type: "POST",
//             url: "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId,
//             data: "parse_mode=HTML&text=" + encodeURIComponent(text),
//         });
//     }

    // sendOrder.on('click', () => {
    //     let userName = $('#user-name');
    //     let userPhone = $('#user-phone');
    //     let userAge = $('#user-age');
    //     console.log('sdkfj')
    //     $.ajax({
    //         url: '',
    //         method: 'post',
    //         dataType: 'json',
    //         data: {name: userName.val(), phone: userPhone.val(), age: userAge.val()},
    //         success: function (data) {
    //
    //         }
    //     })
    //         .done(function (msg) {
    //             if (msg.success) {
    //                 orderGratitude.show();
    //                 orderInfo.hide();
    //             } else {
    //                 alert('Приносим свои извинения, но возникли какие-то проблемы, свяжитесь, пожалуйста, с нами, любыми другими способами!');
    //             }
    //         });
    // });
});

