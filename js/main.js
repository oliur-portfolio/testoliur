// Animated Hamburger Icon & Sticky Header
$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $('.navbar-toggler').toggleClass('change');
    }),
        $('.blue-sticky-area').sticky({ topSpacing: 0, zIndex: 999 });
});

// Mobile Menu Toggle Effect
$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $('.mobile-menu').toggleClass('menu-visible');
        $('.navbar').toggleClass('navbar-shadow');
        $('main').toggleClass('main-hidden');
        $('footer').toggleClass('menu-overflow1');
    });
});

// Mobile & Tablet Property Slider
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        margin: 10,
        autoplay: true,
        smartSpeed: 800,
        responsive: {
            600: {
                items: 2,
                margin: 30,
            },
            300: {
                items: 1.35,
                margin: 15,
            },
        },
    });
});

// Divider Slider

// You can change the values like (0-100), Now I just set 80 for 80% as you Mention.
// Only change Id Names For Each Section Image

// Basic Image
new BeerSlider(document.querySelector('#beer-slider1'), { start: 80 });

// Nearby Image
new BeerSlider(document.querySelector('#beer-slider2'), { start: 80 });

// Last Divider Image Image
new BeerSlider(document.querySelector('#beer-slider3'), { start: 80 });
