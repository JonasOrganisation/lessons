const isGitHubPages =
  window.location.hostname === "jonasorganisation.github.io";

const base = isGitHubPages ? "/lessons/" : "/";

const pagefindBase = `${base}pagefind/`;

// CSS
const css = document.createElement("link");
css.rel = "stylesheet";
css.href = `${pagefindBase}pagefind-component-ui.css`;
document.head.appendChild(css);

// JS Pagefind
const script = document.createElement("script");
script.type = "module";
script.src = `${pagefindBase}pagefind-component-ui.js`;
document.head.appendChild(script);

// Config recherche header
const headerConfig = document.createElement("pagefind-config");
headerConfig.setAttribute("instance", "header-search");
headerConfig.setAttribute("bundle-path", pagefindBase);
headerConfig.setAttribute("base-url", base);
document.body.prepend(headerConfig);

// Config recherche page
const pageConfig = document.createElement("pagefind-config");
pageConfig.setAttribute("instance", "page-search");
pageConfig.setAttribute("bundle-path", pagefindBase);
pageConfig.setAttribute("base-url", base);
document.body.prepend(pageConfig);
