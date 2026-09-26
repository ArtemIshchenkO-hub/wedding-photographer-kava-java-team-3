import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const wrapper = document.getElementById('feedback-wrapper');

if (wrapper) {
  const mockFeedbacks = [
    {
      text: 'Maria is a true professional! She managed to capture every single emotion of our wedding day. Looking through the photos, we get to relive that special day all over again. Thank you for the incredible memories!',
      author: 'Olena & David',
    },
    {
      text: 'We are so happy we chose Maria as our wedding photographer. Her personal approach and ability to see beauty in the details turned our photos into a true work of art. We recommend her to everyone!',
      author: 'Ann & Ian',
    },
    {
      text: 'The photoshoot with Maria was so easy and relaxed. She knows how to create a comfortable atmosphere, which made the photos come out incredibly lively and emotional. We are absolutely thrilled with the result!',
      author: 'Julia & Mark',
    },
  ];

  wrapper.innerHTML = mockFeedbacks
    .map(
      item => `
    <li class="feedbacks-card swiper-slide">
      <p class="feedback-text">${item.text}</p>
      <h3 class="feedback-author">${item.author}</h3>
    </li>
  `
    )
    .join('');

  new Swiper('.feedbacks-slider', {
    slidesPerView: 1,
    spaceBetween: 16,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}
