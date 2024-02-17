const slider_principal = new Swiper('#slider_principal', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.sp_next',
        prevEl: '.sp_prev',
    },
    pagination: {
        el: '.paginacion',
        clickable: true,
    },
    on: {
        slideChange: function () {
            const span_pagination = document.querySelector('.paginacion').children;
            for (const span of span_pagination) {
                if (span.classList.contains('swiper-pagination-bullet')) {
                    span.style.setProperty('background-color', '#333', 'important')
                    span.style.setProperty('opacity', '1', 'important')
                    span.style.setProperty('margin', '0 5px 0 5px')
                }
                if (span.classList.contains('swiper-pagination-bullet-active')) {
                    span.style.setProperty('background-color', 'rgb(239,65,54,1)', 'important')
                }
            }
        }
    }
});

const slider_noticias = new Swiper('#slider_noticias', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 3,
    spaceBetween: 25,
    speed: 2000,
    navigation: {
        nextEl: '.sp_next_noticias',
        prevEl: '.sp_prev_noticias',
    },
    pagination: {
        el: '.paginacion_noticias',
        clickable: true,
    },
    on: {
        slideChange: function () {
            const span_pagination = document.querySelector('.paginacion_noticias').children;
            for (const span of span_pagination) {
                if (span.classList.contains('swiper-pagination-bullet')) {
                    span.style.setProperty('background-color', '#333', 'important')
                    span.style.setProperty('opacity', '1', 'important')
                    span.style.setProperty('margin', '0 10px 0 10px')
                }
                if (span.classList.contains('swiper-pagination-bullet-active')) {
                    span.style.setProperty('background-color', 'rgb(239,65,54,1)', 'important')
                }
            }
        }
    }
});