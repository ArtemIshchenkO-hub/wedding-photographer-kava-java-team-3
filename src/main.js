import './js/feedback.js';
import './js/header.js';
import { initSuccessModal } from './js/success-modal.js';
import { scrollUpBtn, scrollUp, scrollFunction } from './js/scroll-up.js';
import {
  getPortfolioCategories,
  handleFormSubmit,
  handlePortfolioCategoryClick,
  handleShowMoreClick,
  initGallery,
} from './js/handlers.js';
import { refs } from './js/refs.js';
import './js/accordion.js';

initSuccessModal();
getPortfolioCategories();
initGallery();
refs.portfolioCategoryList.addEventListener(
  'click',
  handlePortfolioCategoryClick
);
refs.portfolioShowMoreBtn.addEventListener('click', handleShowMoreClick);
refs.contactsForm.addEventListener('submit', handleFormSubmit);

window.onscroll = function () {
  scrollFunction();
};
scrollUpBtn.addEventListener('click', scrollUp);
