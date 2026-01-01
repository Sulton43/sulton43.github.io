const menuBtn = document.getElementById('mobile-menu');
const nav = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});