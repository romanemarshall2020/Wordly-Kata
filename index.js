import Wordle from "./wordle.js";
// import { question } from "readline-sync";


startGame.addEventListener("click", function() {
    
    // let startGame = getElementById("startGame").value
   
    // if(playerChoice = startGame) {

        console.log("game started!")
        document.getElementById("gameStarted").style.visibility="visible"
        initialize()
    // }
});

// function playerSelection(element, visibility) {

//     let startGame = getElementById("startGame").value
   
//     if(playerChoice === startGame) {

//         console.log("game started!")
//         getElementById("gameSatrt").style.visibility = visibility
//         initialize()
//     }
// }

function initialize() {
    let wordle = new Wordle
    console.log("Welcome to Wordle! In this game you will have 6 tries to guess the word")
    // let userInput = question("Please choose an option")
   
    
   

        // document.getElementById("gameStarted").style.visibility="visible";

        console.log(wordle.randomlyChosenWord)
        wordle.turnToUnderscore(wordle.randomlyChosenWord)
 

        let isGameOver = false;
        while(!isGameOver){
        let guess = wordle.playerGuess()
        
         guess = wordle.checkInput(guess)
        
         isGameOver = wordle.isGameWon(guess)
        
         if(!isGameOver){
         wordle.revealLetter(guess)
         }
         
        
 
       














    }

    // } else if(userInput === endGame){
    //     console.log("Game Over")
    // }


}



