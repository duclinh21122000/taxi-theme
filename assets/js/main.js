jQuery(document).ready(function() {
    $('.header ul.header__main-menu-list').append($('.header__logo'));

    $('.header__btn-menu').click(function() {
        $('.header__main-menu').addClass('show');
    });
    $('.header__btn-close').click(function() {
        $('.header__main-menu').removeClass('show');
    });

    $('.btn-booking-vr a').click(function(e) {
        e.preventDefault();
        $('.modal__booking').addClass('open')
    });
    $('.btn-booking-vr-bar').click(function() {
        $('.modal__booking').addClass('open')
    });
    $('.modal__booking-btn-close').click(function() {
        $('.modal__booking').removeClass('open')
    });
    $('.modal__booking-body').click(function(event) {
        if($(event.target).hasClass('modal__booking-body')) {
            $('.modal__booking').removeClass('open')
        }
    })

    $('.slider-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 900,
        arrows: false,
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear'
    });
})