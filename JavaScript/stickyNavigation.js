const projectSection = document.querySelector(".section-project");
const menuSection = document.querySelector(".section-menu");
const navigationSection = document.querySelector(".section-menu");
const navigationMenu = document.querySelector(".menu__navigation");

const coords = menuSection.getBoundingClientRect();

window.addEventListener("scroll", function () {
  if (window.scrollY >= coords.bottom) {
    navigationSection.classList.add("sticky");
  } else {
    navigationSection.classList.remove("sticky");
  }
});
