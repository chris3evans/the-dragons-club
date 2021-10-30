const mintBtn = document.getElementById("mint");
const projectBtn = document.getElementById("project");
const roadmapBtn = document.getElementById("roadmap");
const aboutBtn = document.getElementById("about");
const faqBtn = document.getElementById("faq");
const contactBtn = document.getElementById("contact");

const sectionMint = document.querySelector(".section-mint");
const sectionProject = document.querySelector(".section-project");
const sectionRoadmap = document.querySelector(".section-roadmap");
const sectionAbout = document.querySelector(".section-about");
const sectionFaq = document.querySelector(".section-faq");
const sectionContact = document.querySelector(".section-contact");

mintBtn.addEventListener("click", function () {
  sectionMint.scrollIntoView({ behavior: "smooth" });
});
projectBtn.addEventListener("click", function () {
  sectionProject.scrollIntoView({ behavior: "smooth" });
});
roadmapBtn.addEventListener("click", function () {
  sectionRoadmap.scrollIntoView({ behavior: "smooth" });
});
aboutBtn.addEventListener("click", function () {
  sectionAbout.scrollIntoView({ behavior: "smooth" });
});
faqBtn.addEventListener("click", function () {
  sectionFaq.scrollIntoView({ behavior: "smooth" });
});
contactBtn.addEventListener("click", function () {
  sectionContact.scrollIntoView({ behavior: "smooth" });
});
