$(document).ready(function () {
    $('.column').owlCarousel({
        margin: 10,
        navText: ['<img class="arrow-left" src="../Images/left-white-arrow.png"/>', '<img class="arrow-right" src="../Images/right-white-arrow.png" />'],
        //navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,

            },
            1000: {
                items: 1,

            }
        }
    })
    $('.activity-select').dropkick();
});