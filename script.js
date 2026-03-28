const toggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
if (toggle && navMenu) {
  toggle.addEventListener('click', () => navMenu.classList.toggle('open'));
}

document.querySelectorAll('.reveal').forEach((el) => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  io.observe(el);
});

const yearEl = document.querySelector('[data-year]');
if (yearEl) yearEl.textContent = new Date().getFullYear();
