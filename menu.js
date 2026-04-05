
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const backdrop = document.getElementById('menu-backdrop');

function closeMenu() {
  menu.classList.remove('open');
  backdrop.classList.remove('show');
  btn.setAttribute('aria-label', 'Open menu');
}

btn.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  backdrop.classList.toggle('show', isOpen);
  btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

backdrop.addEventListener('click', closeMenu);

document.querySelectorAll('#mobile-menu a').forEach(a => {
  a.addEventListener('click', closeMenu);
});

const current = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === current) {
    link.classList.add('active');
  }
});
