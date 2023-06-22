// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

let playBtn = document.getElementById("play-btn");

let playerOneName = document.getElementById("playerOneName");
let playerTwoName = document.getElementById("playerTwoName");

        //Add questions from placeholder questions to array by category
        
let natureArray=placeholderQuestions.filter((obj) => obj.category === "Nature")
let natureString = encodeURIComponent(JSON.stringify(natureArray))

let animalArray = placeholderQuestions.filter((obj) => obj.category === "Animals")
let animalString = encodeURIComponent(JSON.stringify(animalArray))
console.log(animalString)

let computerArray = placeholderQuestions.filter((obj) => obj.category === "Computers")
let computerString =encodeURIComponent(JSON.stringify(computerArray))

let mythArray = placeholderQuestions.filter((obj) => obj.category === "Mythology");
let mythString = encodeURIComponent(JSON.stringify(mythArray))

let historyArray = placeholderQuestions.filter((obj) => obj.category === "History");
let historyString = encodeURIComponent(JSON.stringify(historyArray))

let generalArray = placeholderQuestions.filter((obj) => obj.category === "General");
let generalString = encodeURIComponent(JSON.stringify(generalArray))

console.log(natureArray)

playBtn.addEventListener("click", (e) => {
  e.preventDefault();

  window.location = `http://localhost:5500/round-1.html?nameOne=${playerOneName.value}
  &nameTwo=${playerTwoName.value}
  &scoreOne=0
  &scoreTwo=0
  &natureArray=${natureString}
  &animalArray=${animalString}
  &computerArray=${computerString}
  &mythArray=${mythString}
  &historyArray=${historyString}
  &generalArray=${generalString}`;
});
