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
    $('.btn-header').click(function (event) {
        var target = $('#contact');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800);


    })

    $(window).scroll(function () {
        var topMenuHeight = $("#main-nav").outerHeight() + 50;
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

    $(window).scroll(function () {
        $('.fadeLeft').each(function (i) {
            var bottomOfObject = $(this).position().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > bottomOfObject) {
                $(this).addClass('fadeInLeft');
            }
        });

    });

    $(window).scroll(function () {
        $('.fadeRight').each(function (i) {
            var bottomOfObject = $(this).position().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > bottomOfObject) {
                $(this).addClass('fadeInRight');
            }
        });

    });

    $(window).scroll(function () {
        $('.fade-in').each(function (i) {
            var bottomOfObject = $(this).position().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > bottomOfObject) {
                $(this).addClass('fadeIn');
            }
        });

    });

    $(window).scroll(function () {
        $('.fadeDown').each(function (i) {
            var bottomOfObject = $(this).position().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > bottomOfObject) {
                $(this).addClass('fadeInDown');
            }
        });

    });

    $(window).scroll(function () {
        $('.fadeUp').each(function (i) {
            var bottomOfObject = $(this).position().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > bottomOfObject) {
                $(this).addClass('fadeInUp');
            }
        });

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

    //    $(function () {
    //        var mainHeader = $('#headerh1');
    //        var mainHeaderSplit = $('#headerh1').html().split("");
    //        $({
    //            s: 0
    //        }).animate({
    //            s: 1
    //        }, {
    //            duration: 500,
    //            step: function (now) {
    //                mainHeader.css('transform', 'scale(' + now + ',' + now + ')');
    //                console.log('dziala');
    //            }
    //        });
    //        

    //        var mainHeaderSplit = $('#headerh1').html().split("");
    //        console.log(mainHeaderSplit);
    //        for (var i = 0; i < mainHeaderSplit.length; i++) {
    //            console.log('works')
    //    
    ////            $(this).fadeIn('slow');
    //        }


    //    $('#headerh1').html();


    var mainHeaderSplit = $('#headerh1').html().split("");
    console.log(mainHeaderSplit);
    jQuery.each(mainHeaderSplit, function (index, element) {
        $('#headerh1' + element).delay(100).fadeTo(1000, 1);
//        $('#headerh1' + index).delay(1000);


        console.log(index + ' ' + element);
        //

    });

});
//})
