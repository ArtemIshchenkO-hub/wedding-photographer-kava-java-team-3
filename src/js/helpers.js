import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from './refs';

export function initActivePortfolioCategory() {
  const allPhotosCategoryBtn = document.querySelector(
    '.portfolio-category-button'
  );
  allPhotosCategoryBtn.classList.add('is-active');
}

export function toggleActiveClass(btn) {
  const currentButton = document.querySelector(
    '.portfolio-category-button.is-active'
  );
  currentButton.classList.remove('is-active');
  btn.classList.add('is-active');
}

export function addLoadingState(element) {
  element.classList.add('is-loading');
}

export function removeLoadingState(element) {
  element.classList.remove('is-loading');
}

export function showError(message) {
  iziToast.error({
    message,
    backgroundColor: '#EF4040',
    messageColor: '#fff',
    position: 'topRight',
    pauseOnHover: false,
    close: false,
  });
}

export function showNotification(message) {
  iziToast.info({
    message,
    position: 'topRight',
    pauseOnHover: false,
  });
}

export function toggleShowMoreBtn(totalItems) {
  if (totalItems <= 9) {
    refs.portfolioShowMoreBtn.style.display = 'none';
  } else {
    refs.portfolioShowMoreBtn.style.display = 'block';
  }
}

export function clearGallery() {
  refs.portfolioGalleryList.innerHTML = '';
}
