const Wordle = require("./wordle");
const input = require("readline-sync")

initialize()
function initialize() {
    let wordle = new Wordle
    console.log("Welcome to Wordle! In this game you will have 6 tries to guess the word")
    console.log("The rules are simple. After you guess a word letters will fill the blanks if they exist in the answer.")
    console.log("If the letter is in the right spot, it'll be capitalized. If it's not in the right spot, it'll remain lowercase.")
    console.log("If the letter doesn't appear in the answer, it won't be displayed. Have fun!")
    let userInput = input.question("Please choose an option (1 or 2): ")
    let startGame = "1";
    let endGame = "2"
    
    if(userInput === startGame) {



        // console.log(wordle.randomlyChosenWord)
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



