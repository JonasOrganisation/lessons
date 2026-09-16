document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".hamburger");
  const nav = document.querySelector(".header-wrapper");

  const mq = window.matchMedia("(min-width: 769px)");

  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("active");

    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Ouvrir le menu");
  };

  const sync = () => {
    closeMenu();
  };

  toggle.addEventListener("click", () => {
    if (mq.matches) return;

    const isOpen = nav.classList.toggle("is-open");

    toggle.classList.toggle("active", isOpen);

    toggle.setAttribute("aria-expanded", String(isOpen));

    toggle.setAttribute(
      "aria-label",
      isOpen ? "Fermer le menu" : "Ouvrir le menu",
    );
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || mq.matches) return;

    closeMenu();
    toggle.focus();
  });

  mq.addEventListener("change", sync);

  sync();
});
