const isLocal =
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname === "localhost";

const base = isLocal ? "/" : "/lessons/";

const css = document.createElement("link");
css.rel = "stylesheet";
css.href = `${base}pagefind/pagefind-component-ui.css`;
document.head.appendChild(css);

const script = document.createElement("script");
script.type = "module";
script.src = `${base}pagefind/pagefind-component-ui.js`;
document.head.appendChild(script);
