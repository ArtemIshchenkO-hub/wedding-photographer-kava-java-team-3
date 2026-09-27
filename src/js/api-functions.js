import axios from 'axios';
import { BASE_URL } from './constants';

axios.defaults.baseURL = BASE_URL;

export function createOrder(orderData) {
  return axios.post('/orders', orderData);
}
