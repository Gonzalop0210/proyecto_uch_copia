const hover__noticias = document.querySelectorAll('#hover__noticias');
const bg_azul_noticias = document.querySelectorAll('#bg_azul_noticias');
const img_noticias = document.querySelectorAll('#img_noticias');

for (let i = 0; i < hover__noticias.length; i++) {
    hover__noticias[i].addEventListener('mouseover',()=>{
        bg_azul_noticias[i].classList.remove('w-0', 'h-0')
        bg_azul_noticias[i].classList.add('w-full', 'h-full')
        hover__noticias[i].classList.remove('opacity-0')
        img_noticias[i].classList.add('transform', 'scale-110')
    })

    hover__noticias[i].addEventListener('mouseout',()=>{
        bg_azul_noticias[i].classList.add('w-0', 'h-0')
        bg_azul_noticias[i].classList.remove('w-full', 'h-full')
        hover__noticias[i].classList.add('opacity-0')
        img_noticias[i].classList.remove('transform', 'scale-110')
    })
}