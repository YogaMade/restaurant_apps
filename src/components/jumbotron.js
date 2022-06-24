import hero from '../public/images/heros/hero-image_1.jpg';
import heroSmall from '../public/images/heros/hero-image_1_small.jpg';

class jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="jumbotron">
        <picture>
        <source media="(max-width: 600px)" srcset="${heroSmall}">
          <img class="lazyload" data-src="${hero}" alt="hero-image_1">
        </picture>
        </div>`;
  }
}
customElements.define('nav-jumbotron', jumbotron);