import './js/header.js';
import './js/success-modal.js';
import {
  getPortfolioCategories,
  handlePortfolioCategoryClick,
  handleShowMoreClick,
  initGallery,
  initAccordion,
  scrollUp,
  scrollFunction,
} from './js/handlers.js';
import { refs } from './js/refs.js';

initSuccessModal();
initAccordion();
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
refs.scrollUpBtn.addEventListener('click', scrollUp);
refs.contactsForm.addEventListener('submit', handleFormSubmit);
