import './js/header.js';
import './js/success-modal.js';
import { scrollUpBtn, scrollUp, scrollFunction } from './js/scroll-up.js';
import {
  getPortfolioCategories,
  handlePortfolioCategoryClick,
  handleShowMoreClick,
  initGallery,
  handleFormSubmit,
} from './js/handlers.js';
import { refs } from './js/refs.js';

getPortfolioCategories();
initGallery();
refs.portfolioCategoryList.addEventListener(
  'click',
  handlePortfolioCategoryClick
);
refs.portfolioShowMoreBtn.addEventListener('click', handleShowMoreClick);

window.onscroll = function () {
  scrollFunction();
};
scrollUpBtn.addEventListener('click', scrollUp);
refs.contactsForm.addEventListener('submit', handleFormSubmit);
