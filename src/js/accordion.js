const faqButtons = document.querySelectorAll('.faq-question-btn');

faqButtons.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    const parent = event.currentTarget.closest('.faq-item');
    const isOpen = parent.classList.contains('is-open');
    const openItem = document.querySelector('.faq-item.is-open');

    if (openItem) {
      openItem.classList.remove('is-open');
      const openBtn = openItem.querySelector('.faq-question-btn');
      if (openBtn) {
        openBtn.setAttribute('aria-expanded', 'false');
      }
    }
    
    if (!isOpen) {
      parent.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});