$(document).ready(function () {
    $('#icon').click(function () {
        $('.menu').toggleClass('show');
    });
});
const navbar = document.querySelector('.navbar');
function handleScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', handleScroll);