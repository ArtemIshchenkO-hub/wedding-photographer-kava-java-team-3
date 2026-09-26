export const scrollUpBtn = document.querySelector('.scroll-up');
export function scrollUp() {
  const pageTop = document.querySelector('.header');
  pageTop.getBoundingClientRect().top;
  window.scrollTo({ top: pageTop });
}

export function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = 'block';
  } else {
    scrollUpBtn.style.display = 'none';
  }
}
