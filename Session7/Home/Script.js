$(document).ready(function () {
    $('.trending-carousel').owlCarousel({
        margin: 10,
        navText: ['<img class="arrow-left" src="../Images/arrow-toggle.png"/>', '<img class="arrow-right" src="../Images/arrow-toggle.png" />'],
        //navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 4,

            }
        }
    })

    $('.feature-carousel').owlCarousel({
        margin: 10,
        //navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        navText: ['<img class="arrow-left" src="../Images/arrow-toggle.png"/>', '<img class="arrow-right" src="../Images/arrow-toggle.png" />'],
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 6,

            }
        }
    })
    $('.affordable-carousel').owlCarousel({
        margin: 10,
        //navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        navText: ['<img class="arrow-left" src="../Images/arrow-toggle.png"/>', '<img class="arrow-right" src="../Images/arrow-toggle.png" />'],
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 5,

            }
        }
    })
    $('.abroad').dropkick();


});