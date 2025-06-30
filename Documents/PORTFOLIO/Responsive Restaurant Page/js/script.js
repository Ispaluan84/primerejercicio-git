const navbar = document.querySelector('.navbar');
const menuSection = document.getElementById('menu');
window.addEventListener('scroll', () => {
    const menuTop = menuSection.getBoundingClientRect().top;
    if (menuTop <= 60) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled');
    }
});