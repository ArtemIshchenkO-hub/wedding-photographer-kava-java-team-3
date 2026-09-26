export const scrollUpBtn = document.querySelector('.scroll-up');
export function scrollUp() {
  const pageTop = document.querySelector('.header');
  pageTop.getBoundingClientRect().top;
  window.scrollTo({ top: pageTop });
}
