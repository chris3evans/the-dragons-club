const allQuestions = document.querySelectorAll(".accordian__question");
const allAnswers = document.querySelectorAll(".accordian__answer");

const accordianQuestion = document.querySelector(".accordian__question");
const accordianAnswer = document.querySelector(".accordian__answer");

document.addEventListener("click", function (e) {
  // ID of question to help find correct answer
  const targetQID = e.target.closest(".accordian__question").id;

  const answers = Array.from(allAnswers);

  // DOM element of the answer to be revealed
  const answer = answers.find(function (answer) {
    return answer.id === targetQID;
  });

  answer.classList.toggle("active");
});
