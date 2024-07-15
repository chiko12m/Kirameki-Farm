// ハンバーガーメニュー
var hamburger = $('.header__hamburger-menu');

$('.header__hamburger-button').on('click', function () {
    hamburger.toggleClass('header__hamburger-menu--open');
});

$(window).on('resize', function () {
    hamburger.removeClass('header__hamburger-menu--open');
});

$('.header__hamburger-item').on('click', function () {
    hamburger.removeClass('header__hamburger-menu--open');
});

// slick
$('.gallery__slide').slick({
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    touchMove: true,
});

// アコーディオン
$('.faq__question').click(function(){
    const answer = $(this).next('.faq__answer');
    const icon = $(this).find('.faq__icon');
    const container = $(this).closest('.faq__accordion');
    answer.slideToggle(300).toggleClass('faq__answer--open');
    icon.toggleClass('faq__icon--open');
    container.toggleClass('faq__accordion--open')
});
