$(function () {
    // Adjust header size
    var theHeader = $("header");
    theHeader.height($(window).height());
    $(window).resize(function () {
        theHeader.height($(window).height());
        $(".slider").each(function () {
            $(this).css("padding-top", $(".bx-wrapper").height() / 3);
        });
    });
    // Add class active to the li on click
    var theList = $("header .container ul");
    $("nav ul li a").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).parent().data("section")).offset().top + 1
        }, 100);
        $(this).parent().addClass("active").siblings().removeClass("active");
        theList.animate({right: "-400px"}, 500, function () {theList.removeClass("show-menu")});
    });
    // Move active class to the section tag by scroll top
    $(window).scroll(function () {
        $(".section").each(function () {
            var sectionId = $(this).attr("id");
            if($(window).scrollTop() > $(this).offset().top) {
                $("nav li[data-section='" + sectionId + "']").addClass("active");
                $("nav li[data-section='" + sectionId + "']").siblings().removeClass("active");
            }
        });
    });
    // Show heddin menu
    $("header .toggle-menu").click(function () {
        if (! theList.hasClass("show-menu")) {
            theList.addClass("show-menu").animate({right: "0"}, 500);
        } else {
            theList.animate({right: "-400px"}, 500, function () {theList.removeClass("show-menu")});
        }
    });
    // Add Bxslider
    $('.slider').bxSlider();
    $(".slider").each(function () {
        $(this).css("padding-top", $(".bx-wrapper").height() / 3);
    });
    // Hover on our team
    var theImage = $(".image");
        theImage.each(function () {
        $(this).on("mouseenter", function () {
            $(this).children(".overlay").removeClass("hide");
        });
    });
    theImage.each(function () {
        $(this).on("mouseleave", function () {
            $(this).children(".overlay").addClass("hide");
        });
    });
    // Our slider
    (function ourSlider() {
        $(".our-slider .says.active").each(function () {
            if (! $(this).is(":last-child")) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active").next().addClass("active").fadeIn(1000);
                    ourSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active").parent().children().eq(0).addClass("active").fadeIn(1000);
                    ourSlider();
                });
            }
        });
    })();
    // Rate the project
    var rateIcon = $(".projects .rate i");
    rateIcon.each(function () {
        var rateNumberSpan = $(this).next("span"),
            rateNumber = parseInt(rateNumberSpan.html());
        $(this).click(function () {
            if (! $(this).hasClass("active")) {
                $(this).addClass("active");
                rateNumberSpan.html(rateNumber += 1);
            } else {
                $(this).removeClass("active");
                rateNumberSpan.html(rateNumber -= 1);
            }
        });
    });
    // Shuffle class active
    $(".portfolio li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    // Mixitup
    var mixer = mixitup('.projects');
});