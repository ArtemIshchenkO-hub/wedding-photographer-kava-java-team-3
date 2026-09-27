const wrapper = document.getElementById('feedback-wrapper');

if (wrapper) {
  const renderFeedbacks = async () => {
    try {
      const response = await fetch(
        'https://wedding-photographer.b.goit.study/api/feedbacks'
      );

      if (!response.ok) {
        throw new Error('Помилка завантаження даних');
      }

      const data = await response.json();

      const feedbacks = data.feedbacks;

      wrapper.innerHTML = feedbacks
        .map(
          item => `
        <li class="feedbacks-card swiper-slide">
          <p class="feedback-text">${item.descr}</p>
          <h3 class="feedback-author">${item.name}</h3>
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
    } catch (error) {
      console.error('Помилка:', error);
      wrapper.innerHTML = `<li class="feedbacks-card swiper-slide"><p>Не вдалося завантажити відгуки.</p></li>`;
    }
  };

  renderFeedbacks();
}
