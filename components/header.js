class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header class="padding">
<a class="logo" href="./index.html">
<img src="./assets/images/logo.png" alt="Logo" />
</a>
<div class="header-wrapper">
<nav>
    <ul>
    <li>
        <a href="#">Accueil</a>
    </li>
    <li>
        <a href="#">À propos</a>
    </li>
    <li>
        <a href="#">Contact</a>
    </li>
    </ul>
</nav>
</div>
<button
class="hamburger"
type="button"
aria-label="Ouvrir le menu"
aria-expanded="false"
aria-controls="menu-principal"
>
<div class="top-bun" aria-hidden="true"></div>
<div class="meat" aria-hidden="true"></div>
<div class="bottom-bun" aria-hidden="true"></div>
</button>
</header>;
`;
  }
}

customElements.define("site-header", SiteHeader);
