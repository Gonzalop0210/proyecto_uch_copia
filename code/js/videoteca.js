const slide_videoteca = document.querySelectorAll('.slide-videoteca');
const texto_slide_videoteca = document.querySelectorAll('#text_slide_videoteca')
const bg_slide_videoteca = document.querySelectorAll('#bg_slide_videoteca')
const img_videoteca = document.querySelectorAll('#img_videoteca')

for (const slide of slide_videoteca) {
    slide.style.setProperty('height', '230px', 'important');
}

for (let i = 0; i < slide_videoteca.length; i++) {
    slide_videoteca[i].addEventListener('mouseover', ()=>{
        texto_slide_videoteca[i].classList.remove('opacity-0');
        texto_slide_videoteca[i].classList.add('opacity-100');
        bg_slide_videoteca[i].classList.add('bg-color-azul', 'opacity-80')
        img_videoteca[i].classList.add('transform', 'scale-110')
    })

    slide_videoteca[i].addEventListener('mouseout', ()=>{
        texto_slide_videoteca[i].classList.add('opacity-0');
        texto_slide_videoteca[i].classList.remove('opacity-100');
        bg_slide_videoteca[i].classList.remove('bg-color-azul', 'opacity-80')
        img_videoteca[i].classList.remove('transform', 'scale-110')
    })
}
