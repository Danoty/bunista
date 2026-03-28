const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
if (toggle && navMenu) {
  toggle.addEventListener('click', () => navMenu.classList.toggle('open'));
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 860 && navMenu) navMenu.classList.remove('open');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:0.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const yearNode = document.querySelector('[data-year]');
if (yearNode) yearNode.textContent = new Date().getFullYear();
