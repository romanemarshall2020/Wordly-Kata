const input = require("readline-sync");

class Wordle {
  constructor() {
    this.randomWords = [
      "about",
      "alert",
      "argue",
      "beach",
      "forth",
      "extra",
      "night",
      "giant",
      "spare",
      "style",
      "vital"
    ];
    this.maxGuess = 12;
    this.guess = ""
    this.incorrectGuesses = 0;
    this.randomlyChosenWord = this.displayRandomWord();
    this.hiddenWord = [ '_', '_', '_', '_', '_' ];
  }

  revealLetter( guess ){
    let result = "";
    let guessArray = guess.split("");
   
      for(let i = 0; i < guess.length; i++){
        if(guess.charAt(i) === this.randomlyChosenWord.charAt(i)){
          result += guess.charAt(i).toUpperCase()
        }
        else if (this.randomlyChosenWord.includes(guess.charAt(i))){
          result += guess.charAt(i).toLowerCase()
        } else {
          result += "_"
        }
        
      }
      console.log(result)
      return result
  }

  turnToUnderscore(randomlyChosenWord) {
    if(typeof randomlyChosenWord === "string") {
      let wordArray = randomlyChosenWord.split("");
      for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = "_";
       
      }
      console.log(wordArray)
    return wordArray;
    } 
  }

  displayRandomWord() {
    let randomlyChosenWord = this.randomWords[Math.floor(Math.random() * this.randomWords.length)];
    let max = this.maxGuess
    let incorrect = this.incorrectGuesses
      console.log(`You have ${(max - incorrect)/2} attempts left.`);
    // console.log(randomlyChosenWord);
    this.turnToUnderscore(randomlyChosenWord)
    return randomlyChosenWord;
  }

  playerGuess() {
    let guess = input.question("Please guess a five letter word: ");
    guess = this.checkInput(guess)
    return guess;  
  }
 
  isGameWon(guess){
    let attempt = this.maxGuess - this.incorrectGuesses
    if (attempt === 0 && guess !== this.randomlyChosenWord){
      console.log('Game over. You lose.')
      console.log(`Answer: ${this.randomlyChosenWord.toUpperCase()}`)
      return true
    }    
     else if(guess === this.randomlyChosenWord){
          console.log("Game over! You win!")
          return true
        } else {
          return false
        }
  }

  checkInput(guess) {
    let isValidWord = false;
    while (!isValidWord) {
      
      if(typeof guess === "string"){
      if (guess.length === 5 && guess.match(/[a-z]/i)) {
          this.incorrectGuesses++
        isValidWord = true;
      } else if (guess === "") {
        console.log("Nothing was entered: ");
        return "Nothing was entered";
      } else {
        guess = input.question("Error: Please guess a valid letter: ");
      }
    }
    }
    console.log("Assigning guess...")
    console.log(`Guess: ${guess}`)
    return guess
  }
}

module.exports = Wordle;
