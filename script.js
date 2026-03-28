document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    if (link.getAttribute('data-page') === path) link.classList.add('active');
  });

  const menuToggle = document.querySelector('.menu-toggle');
  const navWrap = document.querySelector('.nav-wrap');
  if (menuToggle && navWrap) {
    menuToggle.addEventListener('click', () => navWrap.classList.toggle('open'));
    document.querySelectorAll('.nav-wrap a').forEach(link => {
      link.addEventListener('click', () => navWrap.classList.remove('open'));
    });
  }

  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const end = parseInt(el.dataset.count, 10);
      let start = 0;
      const duration = 1200;
      const step = Math.max(1, Math.ceil(end / (duration / 16)));
      const tick = () => {
        start += step;
        if (start >= end) {
          el.textContent = end.toLocaleString();
          return;
        }
        el.textContent = start.toLocaleString();
        requestAnimationFrame(tick);
      };
      tick();
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.35 });
  counters.forEach(el => counterObserver.observe(el));

  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObserver.observe(el));
});
