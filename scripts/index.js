// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });




//****************ROUND ONE JS****************************/

//Button Set-up
let guessBtn = document.getElementById("guess-btn")
let passBtn = document.getElementById("pass-btn")
let roundTwoBtn = document.getElementById("next-round-btn")

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
        
        let nature = document.getElementsByClassName("nature")
        let animal = document.getElementsByClassName("animal")
        let computers = document.getElementsByClassName("computers")
        let myth = document.getElementsByClassName("mythology")
        let history = document.getElementsByClassName("history")
        let general = document.getElementsByClassName("general")
        let card = document.getElementsByClassName("card")
        let input = document.getElementById("user-input")
        let modal = document.getElementById("myModal");
        let cardSelected = false
        
        //Add questions from placeholder questions to array by category
        
let natureArray=placeholderQuestions.filter((obj) => obj.category === "Nature")
let animalArray = placeholderQuestions.filter((obj) => obj.category === "Animals")
let computerArray = placeholderQuestions.filter((obj) => obj.category === "Computers")
let mythArray = placeholderQuestions.filter((obj) => obj.category === "Mythology");
let historyArray = placeholderQuestions.filter((obj) => obj.category === "History");
let generalArray = placeholderQuestions.filter((obj) => obj.category === "General");



//**************************************www.toptal.com/javascript/10-most-common-javascript-mistakes*****************************************/

//Declaring global array variables to use objects outside of function scope

let answer = []
let possiblePoints = []
let temporaryArray = []
let currentCard = []
let currentCategory = []
let clickedElement = null


//REMOVE RANDOM ITEM FROM ARRAY


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
        console.log(clickedElement)

        if (!cardSelected && clickedElement.textContent !== ""){ // set to false will allow user to select a card
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
        
        
        elementArray[cardIndex].textContent = temporaryArray.question;
        currentCategory.push(temporaryArray.category)
        console.log(currentCategory)
        answer.push(temporaryArray.answer.toLowerCase())
    
        //new cards can't be selected until either guess or pass buttons are clicked. They can now enabled
        cardSelected = true;
        guessBtn.disabled = false;
        passBtn.disabled = false;
}}}


//Function to handle click on span elements
function handleClick(elementArray, dataArray){
    for (let i = 0; i < elementArray.length; i++){
    elementArray[i].onclick=flipOver(dataArray, elementArray)
}
}

handleClick(nature, natureArray)
handleClick(animal, animalArray)
handleClick(computers, computerArray)
handleClick(myth, mythArray)
handleClick(history, historyArray)
handleClick(general, generalArray)



//*************************Animal Questions******************************** */
let player1Score = document.getElementById("player-1-score")
let player2Score = document.getElementById("player-2-score")


let attempts = 0

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
            // console.log(cardIndex)
             if (answer.includes(input.value.toLowerCase())) {
              Players.addPoints(Number(pointValue));
              console.log(currentPlayer.points);
              player1Score.textContent = `Player 1 Score: ${Players.player1.points}`;
              player2Score.textContent = `Player 2 Score: ${Players.player2.points}`;
              clearText();
              guessBtn.disabled = true;
              cardSelected = false;
              input.value = "";
            } else if (!answer.includes(input.value.toLowerCase()) && attempts === 1) {
              Players.subtractPoints(pointValue);
              Players.changePlayers(currentPlayer);
              player1Score.textContent = `Player 1 Score: ${Players.player1.points}`;
              player2Score.textContent = `Player 2 Score: ${Players.player2.points}`;
              input.value = "";
              attempts++;
              console.log(attempts);
              clearText()
                guessBtn.disabled = true;
               cardSelected = false;
            } else if (!answer.includes(input.value.toLowerCase())) {
              Players.subtractPoints(pointValue);
              Players.changePlayers(currentPlayer);
              player1Score.textContent = `Player 1 Score: ${Players.player1.points}`;
              player2Score.textContent = `Player 2 Score: ${Players.player2.points}`;
              input.value = "";
              attempts++;
              console.log(attempts);
            }
            
        })
        
        