const projectSection=document.querySelector(".section-project"),navigationSection=document.querySelector(".section-menu"),navigationMenu=document.querySelector(".menu__navigation"),coords=projectSection.getBoundingClientRect();window.addEventListener("scroll",(function(){window.scrollY>=coords.top?navigationSection.classList.add("sticky"):navigationSection.classList.remove("sticky")}));
//# sourceMappingURL=index.7153ab93.js.map
