class SiteHeader extends HTMLElement {
  connectedCallback() {
    const isLocal =
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === "localhost";
    const pagefindBase = isLocal ? "/pagefind/" : "/lessons/pagefind/";
    const base = isLocal ? "/" : "/lessons/";

    const pagesBase = isLocal ? `${base}pages/` : base;

    this.innerHTML = `
<header class="padding">
  <a class="logo" href="${base}index.html">
    <img src="${base}assets/images/logo.png" alt="Logo" />
  </a>

  <div class="header-wrapper">
    <pagefind-searchbox
      placeholder="Rechercher..."
      show-sub-results
      bundle-path="${pagefindBase}"
    ></pagefind-searchbox>

    <nav id="menu-principal">
      <ul>
        <li>
          <a href="${pagesBase}git.html">Git</a>
        </li>

        <li>
          <details name="nav-menu">
            <summary>Terminal</summary>

            <ul class="nav-subitem">
              <li>
                <a href="${pagesBase}terminal.html#hero">Introduction</a>
              </li>
              <li>
                <a href="${pagesBase}terminal.html#exemples">Actions</a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details name="nav-menu">
            <summary>Mini-algorithmes</summary>

            <ul class="nav-subitem">
              <li>
                <a href="${pagesBase}algo.html#hero">Introduction</a>
              </li>
              <li>
                <a href="${pagesBase}algo.html#exemples">Exemples</a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <a href="${pagesBase}search.html">Recherche</a>
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
