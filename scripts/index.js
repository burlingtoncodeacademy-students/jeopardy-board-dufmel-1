// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

//****************ROUND ONE JS****************************/

//Button Set-up
let guessBtn = document.getElementById("guess-btn")
let passBtn = document.getElementById("pass-btn")
let roundTwoBtn = document.getElementById("round-two-btn")

guessBtn.disabled = true
passBtn.disabled = false
roundTwoBtn.disabled = false

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
    player1: new Player(
        "player1",
        0
    ),

    player2: new Player(
        "player2",
        0
    ),

    changePlayers (p) {
        if (p === this.player1){
            currentPlayer = this.player2;
            displayPlayer.textContent = "Player Two";
            
        }else if (p === this.player2)
            {currentPlayer = this.player1;
            displayPlayer.textContent = "Player One";
        }
}
}
let currentPlayer = Players.player1

console.log(currentPlayer.player)

passBtn.addEventListener("click", (e) => {
    e.preventDefault()
  if (!passBtn.disabled) {
      console.log(currentPlayer)
    Players.changePlayers(currentPlayer);
      console.log(currentPlayer);
  }
});

if (currentPlayer = Players.player1){
    displayPlayer.textContent = "Player One"
} else {
    displayPlayer.textContent = "Player Two"
}


//***************Begin Play*******************/

let card = document.getElementsByClassName("card")
let input = document.getElementById("user-input")
let cardSelected = false
// let answer

//**************************************www.toptal.com/javascript/10-most-common-javascript-mistakes*****************************************/


// let elements = card
// let n = elements.length; // Assume we have 10 elements for this example
// let makeHandler = function (num) {
//   // Outer function
//   return function () {
//     // Inner function
//     let possiblePoints = Number(card[num].innerHTML);
//     console.log(possiblePoints)
//   };
// };
// for (let i = 0; i < n; i++) {
//   elements[i].onclick = makeHandler(i);
// }









//*************************First Try for Code******************************** */
let answer = []
let possiblePoints = []
for (let i = 0; i < card.length; i++){
    
    card[i].addEventListener("click", (e) => {
        //captures point value of selected question and parses to number
        possiblePoints.push(card[i].innerHTML)
        if (!cardSelected){ // set to false will allow user to select a card

            //will loop through each question in relationships to the card selected
        card[i].textContent = placeholderQuestions[i].question;
        answer.push(placeholderQuestions[i].answer)

          //new cards can't be selected until either guess or pass buttons are clicked. They can now enabled
        // cardSelected = true;
        guessBtn.disabled = false;
        passBtn.disabled = false;

          //will loop through each answer and be the same as the corresponding card
        }})
    }    

    guessBtn.addEventListener("click", e =>{
            e.preventDefault()
            possiblePoints = possiblePoints.toString()
            console.log(answer.toString())
            console.log(typeof Number(possiblePoints))
            if(answer === input.value){
            return currentPlayer.points += Number(possiblePoints)

        }
        console.log(typeof currentPlayer.points)
        input.value = ""
    })

console.log(answer)

// for (let i = 0; i < placeholderQuestions.length; i++){
// guessBtn.addEventListener("click", e =>{
//     console.log(placeholderQuestions[i].answer)
//     console.log(input)
//     console.log(placeholderQuestions[i].answer === input)
//     cardSelected = false
// })
// }