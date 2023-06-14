// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

//****************ROUND ONE JS****************************/

//Button Set-up
let guessBtn = document.getElementById("guess-btn")
let passBtn = document.getElementById("pass-btn")
let roundTwoBtn = document.getElementById("round-two-btn")

guessBtn.disabled = true
passBtn.disabled = true
roundTwoBtn.disabled = true

//player objects 
let displayPlayer = document.getElementById("display-player")

class Player {
constructor(player, points, isTurn){
        this.player = player,
        this.points = points,
        this.isTurn = isTurn
    }
    changePlayers(){
        //write code here
    }
}

//Dictionary of Players will give easy access to players and their properties
const Players = {
    player1: new Player(
        "player1",
        0,
        true
    ),

    player2: new Player(
        "player2",
        0,
        false
    )

}
let currentPlayer = Players.player1

console.log(displayPlayer)
console.log(currentPlayer)

if (currentPlayer = Players.player1){
    displayPlayer.textContent = "Player One"
} else {
    displayPlayer.textContent = "Player Two"
}

//***************Begin Play*******************/

let question = document.getElementsByClassName("question")

for (let i = 0; i < question.length; i++){
    question[i].addEventListener("click", (e) => {
        question[i].textContent = placeholderQuestions[i].question
        console.log(`Question ${i} was clicked`)
        guessBtn.disabled=false
        passBtn.disabled=false
        roundTwoBtn.disabled=false
    })
}