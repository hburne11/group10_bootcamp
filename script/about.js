(() => {

const answerOne = document.querySelector(".answer1");
const answerTwo = document.querySelector(".answer2");
const answerThree = document.querySelector(".answer3");
const answerFour = document.querySelector(".answer4");
const answerFive = document.querySelector(".answer5");
const toggle1 = document.querySelector("#show-hide1");
const toggle2 = document.querySelector("#show-hide2");
const toggle3 = document.querySelector("#show-hide3");
const toggle4 = document.querySelector("#show-hide4");
const toggle5 = document.querySelector("#show-hide5");

    toggle1.addEventListener("click", () => {
        answerOne.classList.toggle("question");
      });

      toggle2.addEventListener("click", () => {
        answerTwo.classList.toggle("question");
      });

      toggle3.addEventListener("click", () => {
        answerThree.classList.toggle("question");
      });

      toggle4.addEventListener("click", () => {
        answerFour.classList.toggle("question");
      });

      toggle5.addEventListener("click", () => {
        answerFive.classList.toggle("question");
      });

      function resetToggle() {

      }

    })();