const menuButton = document.querySelector('.menu');
const closeButton = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');

const header = document.querySelector('.header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', updateHeaderOnScroll);

function updateHeaderOnScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > header.offsetHeight) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
}

const mobileLinks = document.querySelectorAll(
  '.mobile-nav a, .mobile-book-btn'
);

if (menuButton && closeButton && mobileMenu) {
  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
    menuButton.setAttribute('aria-expanded', 'false');
  };

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    menuButton.setAttribute('aria-expanded', 'true');
  });

  closeButton.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}
