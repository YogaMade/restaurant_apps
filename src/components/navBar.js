import Logo from '../Logo/restaurant.png';

class navBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="navbar">
                <button id="hamburger">☰</button>
                <div class="d-flex space-between margin-navbar p-1" id="desktop">
                    <div class="logo">
                        <img class="lazyload" data-src="${Logo}" alt="Logo">
                    </div>
                    <div class="list-nav d-flex align-center">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/#/favorite">Favorite</a></li>
                            <li><a href="https://www.linkedin.com/in/made-yoga-adhitya-a75438181/" 
                            target="_blank">About Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav id="draw">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/#/favorite">Favorite</a></li>
                    <li><a href="https://www.linkedin.com/in/made-yoga-adhitya-a75438181/" 
                    target="_blank">About Us</a></li>
                </ul>
            </nav>
            `;
  }
}
customElements.define('nav-bar', navBar);
