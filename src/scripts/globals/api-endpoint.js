import CONFIG from './config';

const API_ENDPOINT = {
  listCafe: `${CONFIG.BASE_URL}list`,
  detail: (id) => { return `${CONFIG.BASE_URL}detail/${id}`; },
};

export default API_ENDPOINT;
