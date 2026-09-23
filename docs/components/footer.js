class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <footer id="footer" class="padding">
      <p>&copy; 2026 MOREAU Jonas. Tous droits réservés.</p>
      <a class="linkedin" target="_blank" href="https://www.linkedin.com/in/jonas-moreau/" aria-label="click to open linkedin link"></a>
      <a href="#" class="footer_anchor" aria-label="top of page"><img loading="lazy" decoding="async" alt="anchor"  src="./assets/images/arrow.svg"  aria-hidden="true"></a>
    </footer>
     `;
  }
}

customElements.define("site-footer", SiteFooter);
