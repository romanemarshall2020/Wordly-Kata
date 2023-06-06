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
    this.randomlyChosenWord = this.displayRandomWord();
    this.maxGuess = 6;
    this.guess = ""
    this.incorrectGuesses = 0;
    
  }

  displayRandomWord() {
    let randomlyChosenWord =
      this.randomWords[Math.floor(Math.random() * this.randomWords.length)];
    // console.log(randomlyChosenWord);
    return randomlyChosenWord;
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



  playerGuess() {
    let guess = input.question("Please guess a five letter word: ");
    guess = this.checkInput(guess)
    // this.incorrectGuesses++;
    // // console.log(`Incorrect guess! You have ${this.maxGuesses - this.incorrectGuesses} attempts left.`);

    // if (this.incorrectGuesses === this.maxGuesses) {
    //   console.log('Game over! You lost.');
    //   isGameOver = true;
    // }
    //  console.log(`You have ${this.maxGuesses - this.incorrectGuesses} attempts left.`);

    console.log(this.incorrectGuesses)
    return guess;
   
  }

  
  checkInput(guess) {
    let isValidWord = false;
    while (!isValidWord) {
      if(guess.length === 5 && guess.match(/[a-z]/i) && guess === this.randomlyChosenWord){
        console.log("game over you won")
      }
      else if (guess.length === 5 && guess.match(/[a-z]/i)) {
          this.incorrectGuesses++
        isValidWord = true;
      } else if (guess === "") {
        console.log("Nothing was entered");
        return "Nothing was entered";
      } else {
        guess = input.question("Error: Please guess a valid letter.");
      }
    }
    return guess.toLowerCase();
  }
}

module.exports = Wordle;
