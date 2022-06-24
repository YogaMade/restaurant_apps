/* eslint-disable no-console */
import restaurantSource from '../../data/restaurant-source';
import { listCafe } from '../templates/template-creator';

const Cafelist = {
  async render() {
    return `
    <h1 class="text-center t-s-xl my-5">
    Explore Cafe
    </h1>
    <div class="list-item" id="cafe"></div>
      `;
  },

  async afterRender() {
    const restaurants = await restaurantSource.listCafe();
    const restaurantContainer = document.querySelector('#cafe');
    restaurants.forEach((data) => {
      restaurantContainer.innerHTML += listCafe(data);
    });
  },
};

export default Cafelist;
