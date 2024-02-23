const bg_acceso_directo_item = document.querySelectorAll('#bg_acceso_directo_item');
const item_acceso_directo = document.querySelectorAll('.item_acceso_directo');

for (let i = 0; i < item_acceso_directo.length; i++) {
    item_acceso_directo[i].addEventListener('mouseover', ()=>{
        bg_acceso_directo_item[i].classList.add('bg-color-azul', 'opacity-80')
        bg_acceso_directo_item[i].classList.remove('bg-black', 'opacity-60')
    })

    item_acceso_directo[i].addEventListener('mouseout', ()=>{
        bg_acceso_directo_item[i].classList.remove('bg-color-azul', 'opacity-80')
        bg_acceso_directo_item[i].classList.add('bg-black', 'opacity-60')
    })
}