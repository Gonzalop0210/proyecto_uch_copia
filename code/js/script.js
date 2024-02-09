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

const span = document.querySelector('span')
span.textContent = 'Iván Galarza'