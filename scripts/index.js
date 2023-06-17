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
// roundTwoBtn.disabled = false

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
            },
            
            addPoints(points){
                return currentPlayer.points += points
            },
            
            subtractPoints(points){
                return currentPlayer.points -= points
            }
        }
        let currentPlayer = Players.player1
        
        // console.log(Players.addPoints(200))
        
        // console.log(currentPlayer.player)
        
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
        
        let category = document.getElementsByClassName("category-header")
        let animalCategory = document.getElementById("animal-category")
        let natureCategory = document.getElementById("nature-category")
        let nature = document.getElementsByClassName("nature")
        let animal = document.getElementsByClassName("animal")
        let card = document.getElementsByClassName("card")
        let input = document.getElementById("user-input")
        let modal = document.getElementById("myModal");
        let cardSelected = false
        
        //Add questions from placeholder questions to array by category
        
let natureArray=placeholderQuestions.filter((obj) => obj.category === "Nature")
let animalArray = placeholderQuestions.filter((obj) => obj.category === "Animals")



//**************************************www.toptal.com/javascript/10-most-common-javascript-mistakes*****************************************/
let answer = []
let possiblePoints = []


for (let i = 0; i < category.lenth; i++){
    category.textContent = placeholderQuestions.category.value
}

//REMOVE RANDOM ITEM FROM ARRAY

card.onclick = flipOver()

function flipOver(){
    answer.length > 0 ? answer.pop() : null
    possiblePoints.length > 0 ? possiblePoints.pop() : null
    if (!cardSelected){ // set to false will allow user to select a card
    const random = Math.floor(Math.random() * natureArray.length)
    const newArray = natureArray.splice(random, 1)[0]
    console.log(newArray)
    
    //captures point value of selected question and parses to number
    possiblePoints.push(nature[num].innerHTML)

            //will loop through each question in relationships to the card selected
            nature[num].textContent = natureArray[num].question;
            answer.push(natureArray[num].answer)

            //new cards can't be selected until either guess or pass buttons are clicked. They can now enabled
            // cardSelected = true;
            guessBtn.disabled = false;
            passBtn.disabled = false;
}






//*************************Nature Questions******************************** */

let makeHandler = function (num) {
  // Outer function
    
    return function () {
    // Inner function

            //Clear answer and possiblePoints arrays
            answer.length > 0 ? answer.pop() : null
            possiblePoints.length > 0 ? possiblePoints.pop() : null
            if (!cardSelected){ // set to false will allow user to select a card

            //captures point value of selected question and parses to number
            possiblePoints.push(nature[num].innerHTML)

            //will loop through each question in relationships to the card selected
            nature[num].textContent = natureArray[num].question;
            answer.push(natureArray[num].answer)

            //new cards can't be selected until either guess or pass buttons are clicked. They can now enabled
            // cardSelected = true;
            guessBtn.disabled = false;
            passBtn.disabled = false;
            }}
};

for (let i = 0; i < nature.length; i++) {
    nature[i].onclick = makeHandler(i);
}

//*************************Animal Questions******************************** */
let player1Score = document.getElementById("player-1-score")
let player2Score = document.getElementById("player-2-score")

    guessBtn.addEventListener("click", e =>{
            e.preventDefault()
            let pointValue = possiblePoints.toString()
            console.log(answer)
            console.log(pointValue)
            if(answer.includes(input.value)){
                Players.addPoints(Number(pointValue))
                console.log(currentPlayer.points);
                player1Score.textContent = `Player 1 Score: ${Players.player1.points}`
                player2Score.textContent = `Player 2 Score: ${Players.player2.points}`
                guessBtn.disabled = true
            } else if (!answer.includes(input.value)){
                Players.subtractPoints(pointValue)
                Players.changePlayers(currentPlayer)
                player1Score.textContent = `Player 1 Score: ${Players.player1.points}`;
                player2Score.textContent = `Player 2 Score: ${Players.player2.points}`;
                
            }
       
    })

