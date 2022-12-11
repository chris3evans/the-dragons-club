const allQuestions = document.querySelectorAll(".accordian__question");
const allAnswers = document.querySelectorAll(".accordian__answer");

document.addEventListener("click", function (e) {
  const targetQID = e.target.closest(".accordian__question").id;

  const answers = Array.from(allAnswers);

  const answer = answers.find(function (answer) {
    return answer.id === targetQID;
  });

  answer.classList.toggle("active");
});
