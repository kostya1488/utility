$(document).ready(function() {

    btnUp = $('#button_up_link')

    // smooth scrolling
    $(".nav_link").on("click", function(e) {
        e.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 900);
    });

    // toggle bg color of menu items
    $('.menu_item').click(function(e) {
        e.preventDefault();
        $('.menu_item').removeClass('active');
        $(this).addClass('active');
    });

    // toggle class menu_active
    $('.toggle_button, .dark_layer, .menu_item').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('menu_active')
    });

});