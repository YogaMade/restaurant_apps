import API_ENDPOINT from '../globals/api-endpoint';

class restaurantSource {
  static async favorite() {
    const response = await fetch(API_ENDPOINT.favorite);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async listCafe() {
    const response = await fetch(API_ENDPOINT.listCafe);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    return response.json();
  }
}

export default restaurantSource;
