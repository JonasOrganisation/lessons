// Animation au scroll (IntersectionObserver)
// - Déclenche les animations (.fade-up, .fade-in, .zoom-in) quand les éléments entrent dans le viewport
// - Ajoute la classe .animation-is-visible pour lancer les transitions CSS
// - Stoppe l'observation après apparition pour optimiser les performances

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".fade-up, .fade-in, .zoom-in, .fade-down",
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animation-is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  elements.forEach((el) => observer.observe(el));
});
