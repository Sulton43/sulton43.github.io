// 1. Mobil menyu (Hamburger menu) uchun skript
const menuBtn = document.getElementById('mobile-menu');
const nav = document.getElementById('nav-links');

if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// 2. Tungi rejim (Dark Mode) uchun skript
const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Sahifa yuklanganda foydalanuvchi tanlagan rejimni eslab qolish
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    if (toggleButton) toggleButton.textContent = '☀️';
}

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        if (htmlElement.getAttribute('data-theme') === 'dark') {
            htmlElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            toggleButton.textContent = '🌙';
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            toggleButton.textContent = '☀️';
        }
    });
}