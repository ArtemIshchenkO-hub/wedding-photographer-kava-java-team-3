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
            <img src="${img}" alt="${title}" class="gallery-image" width="335" height="335" loading="lazy" />
        </li>
        `
    )
    .join('');

  refs.portfolioGalleryList.insertAdjacentHTML('beforeend', markup);
}

export function renderFeedbacks(feedbacks) {
  const markup = feedbacks
    .map(
      ({ descr, name }) => `<li class="feedbacks-card swiper-slide">
          <p class="feedback-text">${descr}</p>
          <h3 class="feedback-author">${name}</h3>
        </li>
      `
    )
    .join('');

  refs.feedbacksWraper.innerHTML = markup;
}
