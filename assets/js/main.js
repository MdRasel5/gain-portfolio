// Hero Banner Slider
$(document).ready(function(){
 $('.hero-slider-active').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow:"<i class='fa-solid fa-angle-left arrow-left' aria-hidden='true'></i>",
        nextArrow:"<i class='fa-solid fa-angle-right arrow-right' aria-hidden='true'></i>"
    });
});