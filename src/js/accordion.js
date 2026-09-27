import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-list', {
  duration: 300,
  showMultiple: false,
  elementClass: 'faq-item',
  triggerClass: 'faq-question-btn',
  panelClass: 'faq-answer',
});