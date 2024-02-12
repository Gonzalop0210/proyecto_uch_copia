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