$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#main-nav').addClass('changeColor');
        }
        if ($(this).scrollTop() < 50) {
            $('#main-nav').removeClass('changeColor');
        }
    });

});

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 40
            }, 800);
        }
    });

    $('a[href^="#"]').click(function () {
        $('#main-nav').slideUp("fast", function () {
            $(this).slideDown("slow");
        });
    });

    $(".nav-item").click(function () {
        $(".nav-item").removeClass('activeMenu');
        $(this).addClass('activeMenu');
    });

    $(".language-select").click(function () {
        e.preventDefault();
        i18next.changeLanguage = $(this).data('localize');
        //                $(".language-select").removeClass('i18next.changeLanguage');
        //                $(this).addClass('i18next.changeLanguage');
    });
});
