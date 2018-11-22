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
        var scrollDistance = $(window).scrollTop();

        $(".page-section").each(function (i) {
            if ($(this).position().top <= scrollDistance && $(this).position().top + $(this).height() > scrollDistance) {
                $('#main-nav li a').removeClass('activeMenu');
                $('#main-nav li a').eq(i).addClass('activeMenu');
            }
            else {
                $('main-nav li a').removeClass('activeMenu');
            }
        });
    }).scroll();

    //        probe 1:
    //        $(".nav-item").each(function () {
    //            var target = $(this).offset().top;
    //            var id = $(this).attr('id');
    //
    //            if (position >= target) {
    //                $("#main-nav ul li a").removeClass('activeMenu');
    //
    //                $("#main-nav ul li a[href=#]").addClass('activeMenu');
    //            }
    //        });
    //        probe 2:
    //        var Scroll = $(document).scrollTop();
    //        $("#main-nav li a").each(function () {
    //            var currentLink = $(this);
    //            var refElement = $(currentLink.attr("href"));
    //            if (refElement.position().top  <= Scroll && refElement.position().top + refElement.height() > Scroll) {
    //                $(".nav-item").removeClass('activeMenu');
    //                currentLink.addClass('activeMenu');
    //            } else {
    //                currentLink.removeClass('activeMenu');
    //                console.log('works');
    //            }
    //
    //        });

//
//    $(".nav-item").click(function () {
//        $(".nav-item").removeClass('activeMenu');
//        $(this).addClass('activeMenu');
//    });

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
});
