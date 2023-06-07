import Wordle from "./wordle.js";
// import { question } from "readline-sync";
let wordle = new Wordle

startGameButton.addEventListener("click", function() {
    
    // let startGame = getElementById("startGame").value
   
    // if(playerChoice = startGame) {

        console.log("game started!")
        document.getElementById("gameStarted").style.visibility="visible"
        document.getElementById("startGameButton").style.visibility="hidden"
        //initialize()
    // }
});

guessButton.addEventListener("click", function() {
    

        console.log("got the guess")
        initialize();
});


function initialize() {
    
    console.log("Welcome to Wordle! In this game you will have 6 tries to guess the word")
        console.log(wordle.randomlyChosenWord)
        wordle.turnToUnderscore(wordle.randomlyChosenWord)
        playGame()
}


function playGame() {
    let isGameOver = false;
        //while(!isGameOver){
        let guess = document.getElementById("myInput").value
        document.getElementById("myInput").value = null
         guess = wordle.checkInput(guess)
        
         isGameOver = wordle.isGameWon(guess)
        
         if(!isGameOver){
         wordle.revealLetter(guess)
         }
}



