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



        console.log(wordle.randomlyChosenWord)
        wordle.turnToUnderscore(wordle.randomlyChosenWord)
        // let guess = input.question("Please guess a five letter word: ");

        let isGameOver = false;
        while(!isGameOver){
        let guess = wordle.playerGuess()
        
         guess = wordle.checkInput(guess)
        
         isGameOver = wordle.isGameWon(guess)
        
         if(!isGameOver){
         wordle.revealLetter(guess)
         }
        }
        //while !gameIsOver

            //playerguess
            //checkinput on playerguess
            //isGameWon?
                //if this is true, set gameIsOver to true to break loop
            //reveal letter

       
















    } else if(userInput === endGame){
        console.log("Game Over")
    }


}



