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