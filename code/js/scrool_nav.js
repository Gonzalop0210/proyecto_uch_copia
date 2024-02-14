window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    const distancia = nav.getBoundingClientRect().top;

    if (distancia <= 0 && window.scrollY > 100) {
        nav.classList.add('fixed', 'top-0', 'items-center', 'bg-opacity-85', 'w-full');
        nav.classList.remove('items-end', 'w-1152');
    } else {
        nav.classList.remove('fixed', 'top-0', 'items-center', 'bg-opacity-85', 'w-full');
        nav.classList.add('items-end', 'w-1152');
    }
})