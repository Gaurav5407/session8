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
    $('#activity').dropkick();
    $('#age').dropkick();
    $('.dropkick-day').dropkick();
    $('.dropkick-month').dropkick();
    if ($(window).width() >= 768 && $(window).width() <= 1023) {
        $("#filter").html("...");

    }

    var mySlider = new rSlider({
        target: '#sampleSlider',
        values: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
        range: true,
        tooltip: true,
        scale: true,
        labels: true,
        set: [2010, 2013]
    });

  

});
function myFunction() {
    document.getElementById("myForm").reset();
}
