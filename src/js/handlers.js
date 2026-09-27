import iziToast from 'izitoast';
import { createOrder } from './api-functions';
import { validateOrderData } from './helpers';
import { contactsForm } from './refs';
import { openSuccessModal } from './success-modal';
contactsForm.addEventListener('submit', handleFormSubmit);
async function handleFormSubmit(event) {
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
      addLoadingState();
      await createOrder(orderData);
      openSuccessModal();
    } catch (error) {
      showError(error.message);
    } finally {
      removeLoadingState();
    }
  } else {
    showError('Заповніть поля коректно');
  }
}
