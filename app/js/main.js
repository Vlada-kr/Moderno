$(function () {
    //сортировка
    var mixer = mixitup('.products__inner-box');

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

});