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

console.log(currentPlayer)

const changePlayers = () => {
    if (currentPlayer = Players.player1){
        currentPlayer = Players.player2
        displayPlayer.textContent = "Player Two";
    }else if (currentPlayer = Players.player2)
        {currentPlayer = Player.player1
        displayPlayer.textContent = "Player One";
    }}


changePlayers()

console.log(currentPlayer)

changePlayers();

console.log(currentPlayer);

// if (currentPlayer = Players.player1){
//     displayPlayer.textContent = "Player One"
// } else {
//     displayPlayer.textContent = "Player Two"
// }


//***************Begin Play*******************/

let card = document.getElementsByClassName("card")
let input = document.getElementById("user-input").value
let cardSelected = false
// let answer


for (let i = 0; i < card.length; i++){
    
    card[i].addEventListener("click", (e) => {
        //captures point value of selected question and parses to number
        let possiblePoints = Number(card[i].innerHTML)
        console.log(possiblePoints)
        if (!cardSelected){ // set to false will allow user to select a card
          
            //will loop through each question in relationships to the card selected
        card[i].textContent = placeholderQuestions[i].question;
        console.log(`Question ${i} was clicked`);
          
          //new cards can't be selected until either guess or pass buttons are clicked. They can now enabled
        cardSelected = true;
        guessBtn.disabled = false;
        passBtn.disabled = false;
          
          //will loop through each answer and be the same as the corresponding card
        guessBtn.addEventListener("click", e =>{
        if(placeholderQuestions[i].answer === input){
            currentPlayer.points += possiblePoints
            console.log(currentPlayer.points)
        }})
          
        }
    })
}
    


// for (let i = 0; i < placeholderQuestions.length; i++){
// guessBtn.addEventListener("click", e =>{
//     console.log(placeholderQuestions[i].answer)
//     console.log(input)
//     console.log(placeholderQuestions[i].answer === input)
//     cardSelected = false
// })
// }