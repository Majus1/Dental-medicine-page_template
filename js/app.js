// Owl Carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                // nav: true
            },
            768: {
                items: 2,
                nav: false
            },
            992: {
                items: 3,
                // nav: true,
                loop: false
            }
        }
    });
});