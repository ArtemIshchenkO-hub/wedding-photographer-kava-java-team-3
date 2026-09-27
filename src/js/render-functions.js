import { refs } from './refs';

export function renderPortfolioCategories(categories) {
  const markup = categories
    .map(
      ({ _id, category }) => `
        <li class="portfolio-category-item" id=${_id}>
            <button class="portfolio-category-button" type="button" >${category}</button>
        </li>
        `
    )
    .join('');

  refs.portfolioCategoryList.insertAdjacentHTML('beforeend', markup);
}

export function renderPortfolioPhotos(photos) {
  const markup = photos
    .map(
      ({ _id, img, title }) => `
        <li class="portfolio-gallery-item" id="${_id}">
            <img src="${img}" alt="${title}" class="gallery-image" width="335px" height="335px" loading="lazy" />
        </li>
        `
    )
    .join('');

  refs.portfolioGalleryList.insertAdjacentHTML('beforeend', markup);
}
