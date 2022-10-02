
var swiper = new Swiper(".mySwiper", {
    // spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var width = window.innerWidth;
if (width <= 992) {
    var swiper = new Swiper(".mySlider", {
        slidesPerView: 2,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    var swiper = new Swiper('.myFeedback', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

} else {
    // SLIDER
    var swiper = new Swiper(".mySlider", {
        slidesPerView: 4,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });


    // FEEDBACK
    var swiper = new Swiper('.myFeedback', {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

}


