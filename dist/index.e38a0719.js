const projectSection=document.querySelector(".section-project"),menuSection=document.querySelector(".section-menu"),navigationSection=document.querySelector(".section-menu"),navigationMenu=document.querySelector(".menu__navigation"),coords=menuSection.getBoundingClientRect();window.addEventListener("scroll",(function(){window.scrollY>=coords.bottom?navigationSection.classList.add("sticky"):navigationSection.classList.remove("sticky")}));
//# sourceMappingURL=index.e38a0719.js.map
