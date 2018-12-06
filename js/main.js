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
                scrollTop: target.offset().top - 30
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
        var outerHight = $("#main-nav").outerHeight();
        var topMenuHeight = outerHight + 15;


        $(".page-section").each(function (i) {
            if ($(this).hasClass("contact")) {
                topMenuHeight = outerHight + 150;

            }
            var scrollDistance = $(window).scrollTop() + topMenuHeight;
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

    var mainHeader = $('#headerh1');
    var mainHeaderSplit = $('#headerh1').html().split("");
    $('#headerh1').text("");
    jQuery.each(mainHeaderSplit, function (index, element) {

        var newEl = $("<span />").text(element).css({
            opacity: 0
        });
        newEl.appendTo($('#headerh1'));
        newEl.delay(index * 100);
        newEl.animate({
            opacity: 1
        }, 1000);
        console.log('works');
    });

    $(window).scroll(function () {
        $('.fadeLeft').each(function (i) {

            var bottomOfObject = $(this).position().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > bottomOfObject) {
                $(this).addClass('fadeInLeft');
                $('#skills-header').addClass('opacity-1');
//                $(this).addClass('opacity-1');

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




});
