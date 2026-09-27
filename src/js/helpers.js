export function validateOrderData({ name, phone, message }) {
  const isNameValid = name.length >= 2 && name.length <= 64;
  const isPhoneValid = /^[0-9]{12}$/.test(phone);
  const isMessageValid = message.length >= 5 && message.length <= 256;
  return isNameValid && isPhoneValid && isMessageValid;
}
