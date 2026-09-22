console.log("nav-details.js chargé");

function closeNavDetails() {
  document
    .querySelectorAll(".header-wrapper details[open]")
    .forEach((detail) => {
      detail.open = false;
    });
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest(".header-wrapper nav");

  if (nav) return;

  closeNavDetails();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNavDetails();
  }
});
