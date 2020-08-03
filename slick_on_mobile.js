$(document).ready(function() {
    $slick_slider = $('.class');
    settings_slider = {
        centerMode: true,
        dots: true,
        variableWidth: true,
        infinite: false,
        centerPadding: '70px',
        slidesToShow: 1,
        initialSlide: 1,
    }

    slick_on_mobile($slick_slider, settings_slider);
})

function slick_on_mobile(slider, settings) {
    $(window).on('load resize', function() {
        if ($(window).width() > 992) {
            if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
            }
            return
        }
        if (!slider.hasClass('slick-initialized')) {
            return slider.slick(settings);
        }
    });
};