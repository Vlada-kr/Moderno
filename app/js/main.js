$(function () {
    //диапазон цен
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function(){
        $('.products__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active')
        
    });
    $('.icon-th-large').on('click', function(){
        $('.products__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active')
    });
    //рейтинг
    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });

    //слайдер
    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });

    //сортировка
    var mixer = mixitup('.products__inner-box');
});