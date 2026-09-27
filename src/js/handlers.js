import { openSuccessModal } from './success-modal';

import {
  fetchPortfolioCategories,
  fetchPortfolioPhotos,
  createOrder,
} from './api-functions';
import {
  addLoadingState,
  clearGallery,
  initActivePortfolioCategory,
  removeLoadingState,
  showError,
  showNotification,
  toggleActiveClass,
  toggleShowMoreBtn,
  validateOrderData,
} from './helpers';
import {
  renderPortfolioCategories,
  renderPortfolioPhotos,
} from './render-functions';
import { portfolioPhotosParams } from './constants';
import { refs } from './refs';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const galleryState = {
  totalItems: null,
};

export async function getPortfolioCategories() {
  try {
    const categories = await fetchPortfolioCategories();
    renderPortfolioCategories([
      { _id: 1, category: 'All Photos' },
      ...categories,
    ]);
    initActivePortfolioCategory();
  } catch (error) {
    console.log(error.message);
  }
}

export async function initGallery() {
  try {
    const { weddingPhotos, totalItems } = await fetchPortfolioPhotos(true);
    galleryState.totalItems = totalItems;
    renderPortfolioPhotos(weddingPhotos);
    toggleShowMoreBtn(galleryState.totalItems);
    portfolioPhotosParams.page = 3;
  } catch (error) {
    showError(error.message);
  }
}

export async function handlePortfolioCategoryClick({ target }) {
  const id = target.closest('.portfolio-category-item').id;

  if (Number(id) === 1) {
    portfolioPhotosParams.categoryId = '';
  } else {
    portfolioPhotosParams.categoryId = id;
  }

  portfolioPhotosParams.page = 1;

  try {
    addLoadingState(target);
    const { weddingPhotos, totalItems } = await fetchPortfolioPhotos(true);

    if (!totalItems || totalItems === 0) {
      showNotification('Don`t have images for this category');
      clearGallery();
      toggleActiveClass(target);
      toggleShowMoreBtn(totalItems);
      return;
    }

    galleryState.totalItems = totalItems;
    clearGallery();
    toggleActiveClass(target);
    toggleShowMoreBtn(totalItems);
    renderPortfolioPhotos(weddingPhotos);

    portfolioPhotosParams.page = 3;
  } catch (error) {
    showError(error.message);
  } finally {
    removeLoadingState(target);
  }
}

export async function handleShowMoreClick() {
  portfolioPhotosParams.page += 1;

  try {
    addLoadingState(refs.portfolioShowMoreBtn);

    const { weddingPhotos } = await fetchPortfolioPhotos(false);

    renderPortfolioPhotos(weddingPhotos);

    const renderedCardsCount = refs.portfolioGalleryList.children.length;

    if (
      renderedCardsCount >= galleryState.totalItems ||
      weddingPhotos.length === 0
    ) {
      showNotification('No more images');
      refs.portfolioShowMoreBtn.style.display = 'none';
    }
  } catch (error) {
    showError(error.message);
  } finally {
    removeLoadingState(refs.portfolioShowMoreBtn);
  }
}
export async function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const orderData = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  };
  const isValid = validateOrderData(orderData);
  if (isValid) {
    try {
      addLoadingState(refs.contactsBtn);
      await createOrder(orderData);
      openSuccessModal();
      event.target.reset();
    } catch (error) {
      showError(error.message);
    } finally {
      removeLoadingState(refs.contactsBtn);
    }
  } else {
    showError('Заповніть поля коректно');
  }
}


export function initAccordion() {
  new Accordion('.faq-list', {
    duration: 300,
    showMultiple: false,
    elementClass: 'faq-item',
    triggerClass: 'faq-question-btn',
    panelClass: 'faq-answer',
  });
}