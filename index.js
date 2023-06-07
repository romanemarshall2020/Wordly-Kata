import Wordle from "./wordle.js";
// import { question } from "readline-sync";
let wordle 

endGameButton.addEventListener("click", function() {
    alert("Game has ended Select start game if you wish to play again")
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
    console.log("The rules are simple. After you guess a word letters will fill the blanks if they exist in the answer.")
    console.log("If the letter is in the right spot, it'll be capitalized. If it's not in the right spot, it'll remain lowercase.")
    console.log("If the letter doesn't appear in the answer, it won't be displayed. Have fun!")
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



