// Do not change the import statement
// import placeholderQuestions from "./placeholder-questions.js";
// console.log({ placeholderQuestions });


let params = new URLSearchParams(window.location.search)

//
let playerOneName = params.get("nameOne")
let playerTwoName = params.get("nameTwo")
let playerOneScore = params.get("scoreOne");
let playerTwoScore = params.get("scoreTwo");

//Retrieve stringified ata and parse for 
let natureArray = JSON.parse(params.get("natureArray"))
let animalArray = JSON.parse(params.get("animalArray"))
let computerArray = JSON.parse(params.get("computerArray"))
let mythArray = JSON.parse(params.get("mythArray"))
let historyArray = JSON.parse(params.get("historyArray"))
let generalArray = JSON.parse(params.get("generalArray"))


//runs once at each html page load. This will set round 1 to 0 and round 2 to the previous rounds value
let player1Score = document.getElementById("player-1-score");
let player2Score = document.getElementById("player-2-score");

player1Score.textContent = `${playerOneName}'s Score: ${playerOneScore}`;
player2Score.textContent = `${playerTwoName}'s Score: ${playerTwoScore}`;


//****************ROUND ONE JS****************************/

//Button Set-up
let guessBtn = document.getElementById("guess-btn")
let passBtn = document.getElementById("pass-btn")
let roundTwoBtn = document.getElementById("round-two-btn")
let finalRoundBtn = document.getElementById("final-round-btn")

guessBtn.disabled = true
passBtn.disabled = true
roundTwoBtn.disabled = true
finalRoundBtn.disabled = true

//player objects 
let displayPlayer = document.getElementById("display-player")

class Player {
    constructor(player, points){
        this.player = player,
        this.points = points
    }
    
}

//Dictionary of Players will give easy access to players and their properties
const Players = {
  player1: new Player(playerOneName, playerOneScore),

  player2: new Player(playerTwoName, playerTwoScore),

  changePlayers(p) {
    if (p === this.player1) {
      currentPlayer = this.player2;
      displayPlayer.textContent = `${playerTwoName}'s Turn`;
    } else if (p === this.player2) {
      currentPlayer = this.player1;
      displayPlayer.textContent = `${playerOneName}'s Turn`;
    }
  },

  addPoints(points) {
    if ((currentPlayer === Players.player1)) {
      playerOneScore = Number(playerOneScore);
      playerOneScore += points;
      console.log(playerOneScore);
      this.player1.points = playerOneScore
      player1Score.textContent = `${playerOneName}'s Score: ${playerOneScore}`;
    } else if ((currentPlayer === Players.player2)) {
      playerTwoScore = Number(playerTwoScore);
      playerTwoScore += points;
      console.log(playerTwoScore);
      this.player2.points = playerTwoScore
      player2Score.textContent = `${playerTwoName}'s Score: ${playerTwoScore}`;
    }
  },

  subtractPoints(points) {
    if ((currentPlayer === Players.player1)) {
      playerOneScore = Number(playerOneScore);
      playerOneScore -= points;
      console.log(playerOneScore);
      player1Score.textContent = `${playerOneName}'s Score: ${playerOneScore}`;
    } else if ((currentPlayer === Players.player2)) {
      playerTwoScore = Number(playerTwoScore);
      playerTwoScore -= points;
      console.log(playerTwoScore);
      player2Score.textContent = `${playerTwoName}'s Score: ${playerTwoScore}`;
    }
  },
};
        console.log(Players)
        let currentPlayer = Players.player1

if (currentPlayer = Players.player1){
    displayPlayer.textContent = `${playerOneName}'s Turn`
    } else {
    displayPlayer.textContent = `${playerTwoName}'s Turn`;
}


//Grabbing DOM elements
        
        let nature = document.getElementsByClassName("nature")
        let animal = document.getElementsByClassName("animal")
        let computers = document.getElementsByClassName("computers")
        let myth = document.getElementsByClassName("mythology")
        let history = document.getElementsByClassName("history")
        let general = document.getElementsByClassName("general")
        let cards = document.getElementsByClassName("card")
        let cards2 = document.getElementsByClassName("card2")
        let input = document.getElementById("user-input")
        let cardSelected = false
        



//Declaring global array variables to use objects outside of function scope

let answer = []
let possiblePoints = []
let temporaryArray = []
let currentCard = []
let currentCategory = []
let clickedElement = null


//REMOVE RANDOM ITEM FROM ARRAY
// Source for code logic: www.toptal.com/javascript/10-most-common-javascript-mistakes

function flipOver(dataArray, elementArray){

    return function()
{       
        //checks answer and possiblePoints array and removes items
        currentCard.length > 0 ? currentCard.pop() : null
        currentCategory.length > 0 ? currentCategory.pop() : null
        answer.length > 0 ? answer.pop() : null
        possiblePoints.length > 0 ? possiblePoints.pop() : null
        temporaryArray.length > 0 ? temporaryArray.pop() : null
        clickedElement = this
        

        if (!cardSelected && clickedElement.textContent !== ""){
        // set to false will allow user to select a card
        const cardIndex = Array.from(elementArray).indexOf(this)
        currentCard.push(cardIndex)
        console.log(currentCard)
        
        //Generates random number in order to splice object from array and temporarily store in temporaryArray. This will ensure that the user does not get the same question twice and that the game can be played with different questions each time.
        const num = Math.floor(Math.random() * dataArray.length)
        temporaryArray = dataArray.splice(num, 1)[0]
        console.log(num)
        console.log(temporaryArray)
        console.log(dataArray.length)
        

        //Uses information from card paramater
        possiblePoints.push(elementArray[cardIndex].innerHTML)
        console.log(possiblePoints)
        
        //updats text content for selected card with question from temporary array
        elementArray[cardIndex].textContent = temporaryArray.question;
        currentCategory.push(temporaryArray.category)
        console.log(currentCategory)
        //pushes answer from temporary array to answer array
        answer.push(temporaryArray.answer.toLowerCase())
    
        //new cards can't be selected until either guess or pass buttons are clicked. They can now enabled
        cardSelected = true;
        guessBtn.disabled = false;
        passBtn.disabled = false;
}}}

//Function to handle click on span elements
//will loop through the array of HTML elements and call the flip over function at the index of the clicked card
//handle click will take an elementArray(which is an HTML collection) and a dataArray (which are the placeholder arrays by category)
function handleClick(elementArray, dataArray){
    for (let i = 0; i < elementArray.length; i++){
    elementArray[i].onclick=flipOver(dataArray, elementArray)
}
}

//Arguments passed for each category
handleClick(nature, natureArray)
handleClick(animal, animalArray)
handleClick(computers, computerArray)
handleClick(myth, mythArray)
handleClick(history, historyArray)
handleClick(general, generalArray)

let roundOne = false

//runs on each click
function checkNextRound() {
  //spread operator gives access to HTML collection as array
cards = [...cards];
cards2 = [...cards2];
let roundOneBoardCleared = cards.every((card) => card.textContent === "");
let roundTwoBoardCleared = cards2.every((card) => card.textContent === "")
//checks conditions to move to next round
    if (
        (roundOneBoardCleared && roundOne) ||
        playerOneScore >= 15000 ||
        playerTwoScore >= 15000
    ) {
    roundTwoBtn.disabled = false;
    !roundOne
    alert("End of Round 1")
   }
    if (playerOneScore >= 30000 ||
        playerTwoScore >= 30000
    ) {
      finalRoundBtn.disabled = false;
      alert("End of Round 2")
    } else if (roundTwoBoardCleared){
      finalRoundBtn.disabled = false
    }
}

//Pass Button Functions
//Increases attempts so that only the new player has a chance
let attempts = 0

passBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (attempts === 1){ 
    passBtn.disabled=true
    guessBtn.disabled=true
    cardSelected=false
    attempts=0
    clearText()
    checkNextRound()}
    else{
        attempts++
    }

    console.log(currentPlayer);
    Players.changePlayers(currentPlayer);
    console.log(currentPlayer);
    
    
});


//Guess Button Functions

function clearText(){
    if(clickedElement){
        clickedElement.textContent = ""
        attempts = 0
    }
}

    guessBtn.addEventListener("click", e =>{
            e.preventDefault()
            let pointValue = possiblePoints.toString()
            console.log(answer)
            console.log(pointValue)
            
            if (answer.includes(input.value.toLowerCase())) {
                Players.addPoints(Number(pointValue));
                console.log(currentPlayer.points);
                console.log(playerOneScore, playerTwoScore);
                clearText();
                checkNextRound()
                guessBtn.disabled = true;
                passBtn.disabled = true;
                cardSelected = false;
                input.value = "";
                attempts = 0
            } else if (!answer.includes(input.value.toLowerCase()) && attempts === 1) {
                Players.subtractPoints(pointValue);
                input.value = "";
                attempts = 0;
                console.log(attempts);
                clearText()
                checkNextRound()
                passBtn.disabled = true
                guessBtn.disabled = true;
                cardSelected = false;
                
            } else if (!answer.includes(input.value.toLowerCase())) {
                Players.subtractPoints(pointValue);
                Players.changePlayers(currentPlayer);
                // player1Score.textContent = `Player 1 Score: ${Players.player1.points}`;
                // player2Score.textContent = `Player 2 Score: ${Players.player2.points}`;
                input.value = "";
                attempts++;
                console.log(attempts);
            }
            
        })

roundTwoBtn.addEventListener("click", e =>{
      
let natureString = encodeURIComponent(JSON.stringify(natureArray))

let animalString = encodeURIComponent(JSON.stringify(animalArray))


let computerString =encodeURIComponent(JSON.stringify(computerArray))

let mythString = encodeURIComponent(JSON.stringify(mythArray))

let historyString = encodeURIComponent(JSON.stringify(historyArray))

let generalString = encodeURIComponent(JSON.stringify(generalArray))  
          e.preventDefault()
            window.location = `http://localhost:5500/round-2.html?nameOne=${Players.player1.player}&nameTwo=${Players.player2.player}&scoreOne=${Players.player1.points}&scoreTwo=${Players.player2.points}
              &natureArray=${natureString}
              &animalArray=${animalString}
              &computerArray=${computerString}
              &mythArray=${mythString}
              &historyArray=${historyString}
              &generalArray=${generalString}`;
        })

        finalRoundBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.location = `http://localhost:5500/final-jeopardy.html?nameOne=
            ${Players.player1.player}
            &nameTwo=${Players.player2.player}
            &scoreOne=${Players.player1.points}
            &scoreTwo=${Players.player2.points}`
        });