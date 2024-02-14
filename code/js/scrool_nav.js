window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    const distancia = nav.getBoundingClientRect().top;

    if (distancia <= 0 && window.scrollY > 100) {
        nav.classList.add('fixed', 'top-0', 'items-center', 'bg-opacity-85');
        nav.classList.remove('items-end');
    } else {
        nav.classList.remove('fixed', 'top-0', 'items-center', 'bg-opacity-85');
        nav.classList.add('items-end');
    }

    console.log(window.scrollY);
})