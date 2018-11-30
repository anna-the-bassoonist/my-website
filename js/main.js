'use strict';
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
                scrollTop: target.offset().top
            }, 800);
        }
    });

    $('a[href^="#"]').click(function () {
        $('#main-nav').slideUp("fast", function () {
            $(this).slideDown("slow");
        });
    });


    $(window).scroll(function () {
        var topMenuHeight = $("#main-nav").outerHeight() + 15;
        var scrollDistance = $(window).scrollTop() + topMenuHeight;

        $(".page-section").each(function (i) {
            if ($(this).position().top <= scrollDistance && $(this).position().top + $(this).height() > scrollDistance) {
                $('#main-nav li a').removeClass('activeMenu');
                $('#main-nav li a').eq(i).addClass('activeMenu');

            } else {
                $('main-nav li a').removeClass('activeMenu');
            }
        });
    });
  
    $(".nav-item").click(function () {
        $(".nav-item").removeClass('activeMenu');
        $(this).addClass('activeMenu');
    });

    $(".language-select").click(function () {
        i18next.changeLanguage($(this).attr('id'), function () {
            $('.menu-lng').localize();
            $('.header-lng').localize();
            $('.aboutme').localize();
            $('.skills').localize();
            $('.contact').localize();
        });

    });

    $(".english").html("english");
    $(".deutsch").html("deutsch");
    $(".polski").html("polski");


    $("#skills-click").click(function () {
        $("#skills-header").fadeTo(600, 1);
        $(".line-under").fadeTo(600, 1);

        $(".skills-about").fadeIn(800, "swing")
        $("#html").fadeIn(1600, "swing");
        $("#css").fadeIn(2000, "swing");
        $("#js").fadeIn(2400, "swing");
        $("#jquery").fadeIn(2800, "swing");
        $("#sass").fadeIn(3200, "swing");
        $("#gulp").fadeIn(3600, "swing");
        $("#git").fadeIn(4000, "swing");
        $("#rwd").fadeIn(4400, "swing");
        $("#skills-subheader").fadeTo(600, 1);
        $("#react").fadeIn(4200, "swing");
        $("#ajax").fadeIn(4300, "swing");
        $("#wordpress").fadeIn(4400, "swing");

        console.log('dziala');
    });
});

