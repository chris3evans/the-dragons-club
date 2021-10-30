const projectSection = document.querySelector(".section-project");
const navigationSection = document.querySelector(".section-menu");
const navigationMenu = document.querySelector(".menu__navigation");

const coords = projectSection.getBoundingClientRect();

window.addEventListener("scroll", function () {
  if (window.scrollY >= coords.top) {
    navigationSection.classList.add("sticky");
  } else {
    navigationSection.classList.remove("sticky");
  }
});
