import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

let params = new URLSearchParams(window.location.search);
//Bring in data from Rounds 1 and 2
let playerOneName = params.get("nameOne");
let playerTwoName = params.get("nameTwo");
let playerOneScore = params.get("scoreOne");
let playerTwoScore = params.get("scoreTwo");

let displayPlayer = document.getElementById("display-player");

class Player {
  constructor(player, points) {
    (this.player = player), (this.points = points);
  }
}

//Dictionary of Players will give easy access to players and their properties
const Players = {
  player1: new Player(playerOneName, Number(playerOneScore)),

  player2: new Player(playerTwoName, Number(playerTwoScore)),

  changePlayers(p) {
    if (p === this.player1) {
      currentPlayer = this.player2;
      } else if (p === this.player2) {
      currentPlayer = this.player1;
      
    }
  },

  addPoints(points) {
    return (currentPlayer.points += points);
  },

  subtractPoints(points) {
    return (currentPlayer.points -= points);
  },
};
console.log(Players);
let currentPlayer = Players.player1;


displayPlayer.textContent = `${currentPlayer.player} - Bet up to \$${currentPlayer.points}`;


//Bet inputs and buttons
let playerOneBet = [];
let playerTwoBet = [];
let playerOneAnswer = []
let playerTwoAnswer = []
let turns = 0;

let betBtn = document.getElementById("bet-btn");
let betInput = document.getElementById("bet-input");
let finalQuestion = document.getElementById("final-question")
let answerBtn = document.getElementById("answer-btn")
let answerInput = document.getElementById("final-answer-input")
let timer = document.getElementById("timer-btn")


//Hiding buttons ensures user will use correct input and button
answerBtn.style.display="none"
answerInput.style.display="none"

//Find the final round question
let finalArray=placeholderQuestions.filter((obj) => obj.category === "Final")

//access question as object
let finalQuestionObject = finalArray.splice(-1)[0]
console.log(finalQuestionObject)


//Bet button
betBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //Will only allow to uses and will switch to answer button
  if (turns === 1) {
    playerTwoBet.push(betInput.value);
    finalQuestion.textContent = finalQuestionObject.question
    Players.changePlayers(currentPlayer)
    console.log(currentPlayer)
    displayPlayer.textContent = `${currentPlayer.player} - Write your answer`
    betBtn.style.display="none"
    answerBtn.style.display="inline"
    answerInput.style.display="inline"
    betInput.style.display="none"
    turns = 0
    
  }
  //will run first by default since final round begins with player 1
  else if ((currentPlayer === Players.player1)) {
    playerOneBet.push(betInput.value);
    betInput.value = "";
    turns++;
    Players.changePlayers(currentPlayer)
    displayPlayer.textContent = `${currentPlayer.player} - Bet up to \$${currentPlayer.points}`;
  }
});

//placing this above to avoid hoisting
//called by declareWinner function
//checks for winner and displays name
function announceWinner(){
        if (Players.player1.points > Players.player2.points) {
          finalQuestion.textContent = `${Players.player1.player} wins! You won \$${Players.player1.points}`;
        } else if (Players.player2.points > Players.player1.points) {
          finalQuestion.textContent = `${Players.player2.player} wins! You won \$${Players.player2.points}`;
        } else if (Players.player2.points === Players.player1.points) {
          finalQuestion.textContent = `It's a tie! You each won \$${Players.player2.points}`;}
        displayPlayer.textContent = ""
}


//placing this above to avoid hoisting
//called by answerBtn event listener
//checks user input from array againts the placeholder answer and adds or substracts bet against curent ponts
function declareWinner(){
    let santizedAnswerOne = playerOneAnswer.toString().toLowerCase().trim()
    let santizedAnswerTwo = playerTwoAnswer.toString().toLowerCase().trim();
console.log (santizedAnswerOne, santizedAnswerTwo)
    let sanitizedBetOne = Number(playerOneBet)
    let sanitizedBetTwo = Number(playerTwoBet);
    
console.log(sanitizedBetOne, typeof sanitizedBetTwo)

    if (santizedAnswerOne === finalQuestionObject.answer.toLowerCase().trim()) {
      console.log("I worked");
      Players.player1.points = Players.player1.points + sanitizedBetOne;
      console.log(Players.player1.points);
    } else if (
      santizedAnswerOne !== finalQuestionObject.answer.toLowerCase().trim()
    ) {
      console.log("I worked");
      Players.player1.points = Players.player1.points - sanitizedBetOne;
      console.log(Players.player1.points);
    }

    if (santizedAnswerTwo === finalQuestionObject.answer.toLowerCase().trim()) {
      console.log("I also worked");
      Players.player2.points = Players.player2.points + sanitizedBetTwo;
      console.log(Players.player2.points);
    } else if (
      santizedAnswerTwo === finalQuestionObject.answer.toLowerCase().trim()
    ) {
      console.log("I also worked");
      Players.player2.points = Players.player2.points + sanitizedBetTwo;
      console.log(Players.player2.points);
    }

    announceWinner()
}


//Accepts user inputs
answerBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if(turns === 1){
        //after player one inputs answer, player two inputs answer is pushed to an array
        //Answer button and input disappear so that playing stops
        //declareWinner function called
        playerTwoAnswer.push(answerInput.value)
        answerInput.style.display="none"
        answerBtn.style.display="none"
        declareWinner()
    }else {
        //will rull first
        playerOneAnswer.push(answerInput.value)
        turns++
        Players.changePlayers(currentPlayer)
        displayPlayer.textContent = `${currentPlayer.player} - Write your answer`;
    } 
    
})


//This is for fun. I'd like to add a set timeout() for submissions, but that's beyond what I have time for
timer.addEventListener("click", function(){
    const audio = new Audio()
    audio.src = audio.src = "../attributes/jeopardy-theme-song.mp3";
    audio.play()
    console.log("I was clicked")
})
