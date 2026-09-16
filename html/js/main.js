// (function ($) {
//     "use strict";
//     // preloader
//     var loader = function () {
//         setTimeout(function () {
//             if ($('.preloader').length > 0) {
//                 $('.preloader').removeClass('show');
//             }
//         }, 1);
//     };
//     loader();
//     // sticky
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 110) {
//             $('header').addClass('fixed-top');
//         } else {
//             $('header').removeClass('fixed-top');
//         }
//     });
//     // navigation-active-link
//     $('nav ul li:first-child').addClass('active');
//     // smooth-scrolling
//     var scrollLink = $('nav ul li a, .slider-btn .btn');
//     // scrollLink.click(function (e) {
//     //     e.preventDefault();
//     //     $('body,html').animate({
//     //         scrollTop: $(this.hash).offset().top - 110
//     //     }, 500);
//     scrollLink.click(function (e) {
//     var href = $(this).attr('href');
//     if (href.startsWith('#')) {
//         e.preventDefault();
//         if ($(href).length) {
//             $('body,html').animate({
//                 scrollTop: $(href).offset().top - 110
//             }, 500);
//         }
//     }
// });

//     });
//     // active-link-switching
//     $(window).scroll(function () {
//         var scrollbarLocation = $(this).scrollTop();
//         scrollLink.each(function () {
//             var sectionOffset = $(this.hash).offset().top - 111;
//             if (sectionOffset <= scrollbarLocation) {
//                 $(this).parent().addClass('active');
//                 $(this).parent().siblings().removeClass('active');
//             }
//         })
//     });
//     // slicknav
//     $('nav > ul').slicknav({
//         label: '',
//         prependTo: '.mobile-menu',
//         closeOnClick: true
//     });
//     // offcanvas
//     $('.offcanvas-bars').on('click', function () {
//         $('.offcanvas, .offcanvas-overlay').addClass('show');
//         return false;
//     });
//     $('.offcanvas-times, .offcanvas-overlay').on('click', function () {
//         $('.offcanvas, .offcanvas-overlay').removeClass('show');
//         return false;
//     });
//     // data-background
//     $('[data-background]').each(function () {
//         $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')')
//     });
//     // slider-carousel
//     $('.slider-carousel').owlCarousel({
//         loop: true,
//         margin: 0,
//         nav: false,
//         autoplay: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 1
//             },
//             1000: {
//                 items: 1
//             }
//         }
//     });
//     // magnificPopup
//     $('.popup-video').magnificPopup({
//         type: 'iframe'
//     });
//     // wow
//     new WOW().init();
//     // magnificPopup
//     $('.popup-img').magnificPopup({
//         type: 'image',
//         gallery: {
//             enabled: true
//         }
//     });
//     // Isotope
//     $('.portfolio-filter li:first-child').addClass('active');
//     // init Isotope
//     var $grid = $('.portfolio-list').imagesLoaded(function () {
//         // init Isotope after all images have loaded
//         $grid.isotope({
//             // options...
//             itemSelector: '.col-lg-4',
//             percentPosition: true,
//             masonry: {
//                 // use element for option
//                 columnWidth: '.col-lg-4'
//             }
//         });
//         // filter items on button click
//         $('.portfolio-filter').on('click', 'li', function () {
//             var filterValue = $(this).attr('data-filter');
//             $grid.isotope({ filter: filterValue });
//             $('li').removeClass('active');
//             $(this).addClass('active');
//         });
//     });
//     // parallax
//     $('.cta').parallax("50%", 0.4);
//     // counterUp
//     $('.single-counter span').counterUp({
//         delay: 10,
//         time: 1000
//     });
//     // testimonials-carousel
//     $('.testimonials-carousel').owlCarousel({
//         loop: true,
//         margin: 30,
//         nav: false,
//         autoplay: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 1
//             },
//             768: {
//                 items: 2
//             },
//             1000: {
//                 items: 3
//             }
//         }
//     });
//     // scrollUp
//     $.scrollUp({
//         scrollName: 'scrollUp',      // Element ID
//         scrollDistance: 300,         // Distance from top/bottom before showing element (px)
//         scrollFrom: 'top',           // 'top' or 'bottom'
//         scrollSpeed: 300,            // Speed back to top (ms)
//         easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
//         animation: 'fade',           // Fade, slide, none
//         animationSpeed: 200,         // Animation speed (ms)
//         scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
//         scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
//         scrollText: '<i class="far fa-chevron-up"></i>', // Text for element, can contain HTML
//         scrollTitle: false,          // Set a custom <a> title if required.
//         scrollImg: false,            // Set true to use image
//         activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
//         zIndex: 2147483647           // Z-Index for the overlay
//     });
//     // snazzy-maps
//     // When the window has finished loading create our google map below
//     google.maps.event.addDomListener(window, 'load', init);

//     function init() {
//         // Basic options for a simple Google Map
//         // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//         var mapOptions = {
//             // How zoomed in you want the map to start at (always required)
//             zoom: 11,

//             // The latitude and longitude to center the map (always required)
//             center: new google.maps.LatLng(40.6700, -73.9400), // New York

//             // How you would like to style the map. 
//             // This is where you would paste any style found on Snazzy Maps.
//             styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
//         };

//         // Get the HTML DOM element that will contain your map 
//         // We are using a div with id="map" seen below in the <body>
//         var mapElement = document.getElementById('map');

//         // Create the Google Map using our element and options defined above
//         var map = new google.maps.Map(mapElement, mapOptions);

//         // Let's also add a marker while we're at it
//         var marker = new google.maps.Marker({
//             position: new google.maps.LatLng(40.6700, -73.9400),
//             map: map,
//             title: 'Snazzy!'
//         });
//     };
// }(jQuery));
(function ($) {
    "use strict";

    // preloader
    var loader = function () {
        setTimeout(function () {
            if ($('.preloader').length > 0) {
                $('.preloader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // sticky
    $(window).scroll(function () {
        if ($(this).scrollTop() > 110) {
            $('header').addClass('fixed-top');
        } else {
            $('header').removeClass('fixed-top');
        }
    });

    // navigation-active-link
    $('nav ul li:first-child').addClass('active');

    // smooth-scrolling (✅ FIXED)
    var scrollLink = $('nav ul li a, .slider-btn .btn');
    scrollLink.on('click', function (e) {
        var href = $(this).attr('href');
        if (href.startsWith('#') && $(href).length) {
            e.preventDefault();
            $('body,html').animate({
                scrollTop: $(href).offset().top - 110
            }, 500);
        }
    });

    // active-link-switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            var href = $(this).attr('href');
            if (href.startsWith('#') && $(href).length) {
                var sectionOffset = $(href).offset().top - 111;
                if (sectionOffset <= scrollbarLocation) {
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active');
                }
            }
        });
    });

    // slicknav
    $('nav > ul').slicknav({
        label: '',
        prependTo: '.mobile-menu',
        closeOnClick: true
    });

    // offcanvas
    $('.offcanvas-bars').on('click', function () {
        $('.offcanvas, .offcanvas-overlay').addClass('show');
        return false;
    });
    $('.offcanvas-times, .offcanvas-overlay').on('click', function () {
        $('.offcanvas, .offcanvas-overlay').removeClass('show');
        return false;
    });

    // data-background
    $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });

    // slider-carousel
    $('.slider-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });

    // magnificPopup
    $('.popup-video').magnificPopup({ type: 'iframe' });

    // wow
    new WOW().init();

    // magnificPopup (for images)
    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    // Isotope
    $('.portfolio-filter li:first-child').addClass('active');

    var $grid = $('.portfolio-list').imagesLoaded(function () {
        $grid.isotope({
            itemSelector: '.col-lg-4',
            percentPosition: true,
            masonry: { columnWidth: '.col-lg-4' }
        });

        $('.portfolio-filter').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            $('li').removeClass('active');
            $(this).addClass('active');
        });
    });

    // parallax
    $('.cta').parallax("50%", 0.4);

    // counterUp
    $('.single-counter span').counterUp({
        delay: 10,
        time: 1000
    });

    // testimonials-carousel
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            768: { items: 2 },
            1000: { items: 3 }
        }
    });

    // scrollUp
    $.scrollUp({
        scrollName: 'scrollUp',
        scrollDistance: 300,
        scrollFrom: 'top',
        scrollSpeed: 300,
        easingType: 'linear',
        animation: 'fade',
        animationSpeed: 200,
        scrollTrigger: false,
        scrollTarget: false,
        scrollText: '<i class="far fa-chevron-up"></i>',
        scrollTitle: false,
        scrollImg: false,
        activeOverlay: false,
        zIndex: 2147483647
    });

    // snazzy-maps
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(40.6700, -73.9400), // New York
            styles: [
                { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] },
                { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] },
                { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] },
                { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] },
                { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] },
                { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] },
                { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] },
                { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] },
                { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] },
                { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] },
                { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
                { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] },
                { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] },
                { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }
            ]
        };

        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!'
        });
    }

}(jQuery));
