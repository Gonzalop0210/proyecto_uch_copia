const slider_principal = new Swiper('#slider_principal', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.sp_next',
        prevEl: '.sp_prev',
    },
});