import './js/components/header.js';
import { initSuccessModal } from './js/components/success-modal.js';
import {
  getPortfolioCategories,
  handlePortfolioCategoryClick,
  handleShowMoreClick,
  initGallery,
  initAccordion,
  scrollUp,
  scrollFunction,
  initFeedbacksSwiper,
  handleFormSubmit,
} from './js/handlers.js';
import { refs } from './js/refs.js';

initSuccessModal();
initAccordion();
initFeedbacksSwiper();
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
