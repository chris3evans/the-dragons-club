const allQuestions=document.querySelectorAll(".accordian__question"),allAnswers=document.querySelectorAll(".accordian__answer");document.addEventListener("click",(function(e){const n=e.target.closest(".accordian__question").id;Array.from(allAnswers).find((function(e){return e.id===n})).classList.toggle("active")}));
//# sourceMappingURL=index.182064f3.js.map
