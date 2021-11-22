//selectors

let header = document.querySelector('.header');
let hambugerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', function(){
        let windowPosition = window.scrollY > 0;
        header.classList.toggle('active', windowPosition)
})


hambugerMenu.addEventListener('click',function(){
        header.classList.toggle('menu-open');
})
