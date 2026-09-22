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
            <a href="./git.html">Git</a>
          </li>

          <li>
            <details name="nav-menu">
              <summary>Terminal</summary>

              <ul class="nav-subitem">
                <li>
                  <a href="./terminal.html#hero">Introduction</a>
                </li>
                <li>
                  <a href="./terminal.html#exemples">Actions</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details name="nav-menu">
              <summary>Mini-algorithmes</summary>

              <ul class="nav-subitem">
                <li>
                  <a href="./algo.html#hero">Introduction</a>
                </li>
                <li>
                  <a href="./algo.html#exemples">Exemples</a>
                </li>
              </ul>
            </details>
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
</header>
`;
  }
}

customElements.define("site-header", SiteHeader);
