const hamburger = document.querySelector('.hamburger');
const headerNavLink = document.querySelector('.header__nav-link');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    headerNavLink.classList.toggle('active');
});


document.querySelectorAll('.header__nav-links').forEach(n => n.addEventListener('click',() => {
    hamburger.classList.remove('active');
    headerNavLink.classList.remove('active');
}))