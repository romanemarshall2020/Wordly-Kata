import Wordle from "./wordle.js";
// import { question } from "readline-sync";
let wordle 

endGameButton.addEventListener("click", function() {
    alert("game has ended")
    document.getElementById("gameStarted").style.visibility="hidden"
    document.getElementById("startGameButton").style.visibility="visible"
    initialize()
})


startGameButton.addEventListener("click", function() {
    
    // let startGame = getElementById("startGame").value
   
    // if(playerChoice = startGame) {

        console.log("game started!")
        document.getElementById("gameStarted").style.visibility="visible"
        document.getElementById("startGameButton").style.visibility="hidden"
        initialize()
    // }
});

guessButton.addEventListener("click", function() {
    

        console.log("got the guess")
        playGame();
});


function initialize() {
    wordle = new Wordle
    console.log("Welcome to Wordle! In this game you will have 6 tries to guess the word")
        console.log(wordle.randomlyChosenWord)
        wordle.turnToUnderscore(wordle.randomlyChosenWord)
        // playGame()
}


function playGame() {
    console.log("inside playe game ")
    let isGameOver = false;
        //while(!isGameOver){
        let guess = document.getElementById("myInput").value
        document.getElementById("myInput").value = null
         guess = wordle.checkInput(guess)
        if(guess !== 0){
            isGameOver = wordle.isGameWon(guess)
        
            if(!isGameOver){
            if(wordle.guessesRemaining() === 0){
                alert("You have no more guesses. You lose!")
                isGameOver = true
                initialize()
            } else {   
            wordle.guessesRemaining()
            wordle.revealLetter(guess)

            }
        } else {
            alert("Congratulations you WON!!") 
            initialize()}
        }
        
}
export {playGame}



