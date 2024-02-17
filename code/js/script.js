const list__universidad = document.querySelector('#list__universidad');
const link__universidad = document.querySelector('#link__universidad');

link__universidad.addEventListener('mouseover', ()=>{
    list__universidad.classList.remove('h-0')
    list__universidad.classList.add('h-72', 'border-b', 'border-color-naranja')
})

link__universidad.addEventListener('mouseout', ()=>{
    list__universidad.classList.remove('h-72', 'border-b', 'border-color-naranja')
    list__universidad.classList.add('h-0')
})

const list__admision = document.querySelector('#list__admision');
const link__admision = document.querySelector('#link__admision');

link__admision.addEventListener('mouseover', ()=>{
    list__admision.classList.remove('h-0', 'overflow-hidden')
    list__admision.classList.add('h-62', 'border-b', 'border-color-naranja')
})

link__admision.addEventListener('mouseout', ()=>{
    list__admision.classList.remove('h-62', 'border-b', 'border-color-naranja')
    list__admision.classList.add('h-0', 'overflow-hidden')
})

const link__estudia__nosotros = document.querySelector('#link__estudia__nosotros');
const list__estudia__nosotros = document.querySelector('#list__estudia__nosotros');

link__estudia__nosotros.addEventListener('mouseover', ()=>{
    list__estudia__nosotros.classList.remove('h-0')
    list__estudia__nosotros.classList.add('h-36', 'border-b', 'border-color-naranja')
})

link__estudia__nosotros.addEventListener('mouseout', ()=>{
    list__estudia__nosotros.classList.remove('h-36', 'border-b', 'border-color-naranja')
    list__estudia__nosotros.classList.add('h-0')
})

const link__servicios = document.querySelector('#link__servicios');
const list__servicios = document.querySelector('#list__servicios');

link__servicios.addEventListener('mouseover', ()=>{
    list__servicios.classList.remove('h-0')
    list__servicios.classList.add('h-300', 'border-b', 'border-color-naranja', 'p-2')
})

link__servicios.addEventListener('mouseout', ()=>{
    list__servicios.classList.remove('h-300', 'border-b', 'border-color-naranja', 'p-2')
    list__servicios.classList.add('h-0')
})

const link__centro__investigacion = document.querySelector('#link__centro__investigacion');
const list__centro__investigacion = document.querySelector('#list__centro__investigacion');

link__centro__investigacion.addEventListener('mouseover', ()=>{
    list__centro__investigacion.classList.remove('h-0')
    list__centro__investigacion.classList.add('h-28', 'border-b', 'border-color-naranja', 'p-2', 'shadow-lg')
})

link__centro__investigacion.addEventListener('mouseout', ()=>{
    list__centro__investigacion.classList.remove('h-28', 'border-b', 'border-color-naranja', 'p-2', 'shadow-lg')
    list__centro__investigacion.classList.add('h-0')
})

const link__investigacion = document.querySelector('#link__investigacion');
const list__investigacion = document.querySelector('#list__investigacion');

link__investigacion.addEventListener('mouseover', ()=>{
    list__investigacion.classList.remove('h-0', 'overflow-hidden')
    list__investigacion.classList.add('h-52', 'border-b', 'border-color-naranja', 'p-2')
})

link__investigacion.addEventListener('mouseout', ()=>{
    list__investigacion.classList.remove('h-52', 'border-b', 'border-color-naranja', 'p-2')
    list__investigacion.classList.add('h-0', 'overflow-hidden')
})

const link__extension = document.querySelector('#link__extension');
const list__extension = document.querySelector('#list__extension');

link__extension.addEventListener('mouseover', ()=>{
    list__extension.classList.remove('h-0')
    list__extension.classList.add('h-28', 'border-b', 'border-color-naranja', 'p-2')
})

link__extension.addEventListener('mouseout', ()=>{
    list__extension.classList.remove('h-28', 'border-b', 'border-color-naranja', 'p-2')
    list__extension.classList.add('h-0')
})

const link__cultura = document.querySelector('#link__cultura');
const list__cultura = document.querySelector('#list__cultura');

link__cultura.addEventListener('mouseover', ()=>{
    list__cultura.classList.remove('h-0')
    list__cultura.classList.add('h-8', 'border-b', 'border-color-naranja', 'p-2')
})

link__cultura.addEventListener('mouseout', ()=>{
    list__cultura.classList.remove('h-8', 'border-b', 'border-color-naranja', 'p-2')
    list__cultura.classList.add('h-0')
})

/* FACULTADES */
const container__ci_ing = document.querySelector('#container__ci_ing');
const list__container__ci_ing = document.querySelector('#list__container__ci_ing');
const container__cc_ec_fin = document.querySelector('#container__cc_ec_fin');
const list__container__cc_ec_fin = document.querySelector('#list__container__cc_ec_fin');
const container__hu_cs = document.querySelector('#container__hu_cs');
const list__container__hu_cs = document.querySelector('#list__container__hu_cs');
const container__salud = document.querySelector('#container__salud');
const list__container__salud = document.querySelector('#list__container__salud');

container__ci_ing.addEventListener('mouseover', ()=>{
    list__container__ci_ing.classList.add('h-152', 'mt-4')
    list__container__ci_ing.classList.remove('h-0')
})

container__ci_ing.addEventListener('mouseout', ()=>{
    list__container__ci_ing.classList.remove('h-152', 'mt-4')
    list__container__ci_ing.classList.add('h-0')
})

container__cc_ec_fin.addEventListener('mouseover', ()=>{
    list__container__cc_ec_fin.classList.add('h-28', 'mt-4')
    list__container__cc_ec_fin.classList.remove('h-0')
})

container__cc_ec_fin.addEventListener('mouseout', ()=>{
    list__container__cc_ec_fin.classList.remove('h-28', 'mt-4')
    list__container__cc_ec_fin.classList.add('h-0')
})

container__hu_cs.addEventListener('mouseover', ()=>{
    list__container__hu_cs.classList.add('h-32', 'mt-4')
    list__container__hu_cs.classList.remove('h-0')
})

container__hu_cs.addEventListener('mouseout', ()=>{
    list__container__hu_cs.classList.remove('h-32', 'mt-4')
    list__container__hu_cs.classList.add('h-0')
})

container__salud.addEventListener('mouseover', ()=>{
    list__container__salud.classList.add('h-32', 'mt-4')
    list__container__salud.classList.remove('h-0')
})

container__salud.addEventListener('mouseout', ()=>{
    list__container__salud.classList.remove('h-32', 'mt-4')
    list__container__salud.classList.add('h-0')
})