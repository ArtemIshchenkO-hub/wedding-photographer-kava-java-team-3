import axios from 'axios';
import { BASE_URL, ENDPOINTS, portfolioPhotosParams } from './constants';

axios.defaults.baseURL = BASE_URL;

export async function fetchPortfolioCategories() {
  const { data } = await axios.get(ENDPOINTS.categoties);

  return data;
}

export async function fetchPortfolioPhotos(isFirstRender = false) {
  const limit = isFirstRender
    ? portfolioPhotosParams.startLimit
    : portfolioPhotosParams.onClickLimit;

  const params = {
    page: portfolioPhotosParams.page,
    limit: limit,
  };

  if (portfolioPhotosParams.categoryId) {
    params.categoryId = portfolioPhotosParams.categoryId;
  }

  const { data } = await axios.get(ENDPOINTS.photos, { params });
  return data;
}
export function createOrder(orderData) {
  return axios.post('/orders', orderData);
}

export async function fetchFeedbaks() {
  const { data } = await axios.get(ENDPOINTS.feedbacks);
  return data;
}
