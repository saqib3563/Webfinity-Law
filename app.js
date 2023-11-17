$(".slider1").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

mobileOnlySlider(".autoplay2", true, false, 768);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
    var slider = $($slidername);
    var settings = {
        mobileFirst: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        arrows: $arrows,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: $breakpoint,
                settings: "unslick",
            },
        ],
    };

    slider.slick(settings);

    $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
            return;
        }
        if (!slider.hasClass("slick-initialized")) {
            return slider.slick(settings);
        }
    });
}

mobileOnlySlider(".working-slider", true, false, 768);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
    var slider = $($slidername);
    var settings = {
        mobileFirst: true,
        dots: false,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: $arrows,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: $breakpoint,
                settings: "unslick",
            },
        ],
    };

    slider.slick(settings);

    $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
            return;
        }
        if (!slider.hasClass("slick-initialized")) {
            return slider.slick(settings);
        }
    });
}

mobileOnlySlider(".benifit-box-slider", true, false, 991);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
    var slider = $($slidername);
    var settings = {
        mobileFirst: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: $arrows,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: $breakpoint,
                settings: "unslick",
            },
        ],
    };

    slider.slick(settings);

    $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
            return;
        }
        if (!slider.hasClass("slick-initialized")) {
            return slider.slick(settings);
        }
    });
}

mobileOnlySlider(".testimonial-slider", true, false, 991);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
    var slider = $($slidername);
    var settings = {
        mobileFirst: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: $arrows,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: $breakpoint,
                settings: "unslick",
            },
        ],
    };

    slider.slick(settings);

    $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
            return;
        }
        if (!slider.hasClass("slick-initialized")) {
            return slider.slick(settings);
        }
    });
}
