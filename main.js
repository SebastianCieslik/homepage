

const menus = document.querySelector('.menu--js');
const nav = document.querySelector('.navigation--js');

menus.addEventListener('click', () =>{ 
    nav.classList.toggle('navigation__open');
    console.log("Klik");
})

