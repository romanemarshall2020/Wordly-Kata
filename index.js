const Wordle = require("./wordle");
const input = require("readline-sync")

initialize()
function initialize() {
    let wordle = new Wordle
    console.log("Welcome to Wordle! In this game you will have 6 tries to guess the word")
    let userInput = input.question("Please choose an option")
    let startGame = "1";
    let endGame = "2"
    
    if(userInput === startGame) {
        wordle.displayRandomWord()
        wordle.turnToUnderscore()
        wordle.playerGuess()
    } else if(userInput === endGame){
        console.log("Game Over")
    }


}



