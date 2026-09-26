import './js/header.js';
import './js/success-modal.js';
import { scrollUpBtn, scrollUp, scrollFunction } from './js/scroll-up.js';
import './js/category-portfolio.js';


window.onscroll = function () {
  scrollFunction();
};
scrollUpBtn.addEventListener('click', scrollUp);

