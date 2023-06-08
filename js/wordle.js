// import { question } from "readline-sync";
import { playGame } from "./index.js";

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
      "vital",
    ];
    this.maxGuess = 6;
    this.guess = "";
    this.incorrectGuesses = 0;
    this.randomlyChosenWord = this.displayRandomWord();
    this.hiddenWord = ["_", "_", "_", "_", "_"];
  }
  revealLetter(guess) {
    let result = "";

    for (let i = 0; i < guess.length; i++) {
      if (guess.charAt(i) === this.randomlyChosenWord.charAt(i)) {
        result += guess.charAt(i).toUpperCase();
      } else if (this.randomlyChosenWord.includes(guess.charAt(i))) {
        result += guess.charAt(i).toLowerCase();
      } else {
        result += "_";
      }
    }
    console.log(result);
    return result;
  }
  turnToUnderscore(randomlyChosenWord) {
    if (typeof randomlyChosenWord === "string") {
      let wordArray = randomlyChosenWord.split("");
      for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = "_";
      }
      console.log(wordArray);
      return wordArray;
    }
  }

  displayRandomWord() {
    let randomlyChosenWord = this.randomWords[
      Math.floor(Math.random() * this.randomWords.length)
    ];
    let max = this.maxGuess;
    let incorrect = this.incorrectGuesses;
    console.log(`You have ${max - incorrect} attempts left.`);
    this.turnToUnderscore(randomlyChosenWord);
    return randomlyChosenWord;
  }

  guessesRemaining() {
    console.log(
      `You have ${this.maxGuess - this.incorrectGuesses} attempts left.`
    );
    return this.maxGuess - this.incorrectGuesses;
  }

  playerGuess() {
    let guess = document.getElementById("myInput").value;
    guess = this.checkInput(guess);
    console.log(this.incorrectGuesses);
    return guess;
  }

  isGameWon(guess) {
    if (guess === this.randomlyChosenWord) {
      console.log("game over you won");
      return true;
    } else {
      return false;
    }
  }

  checkInput(guess) {
    let isValidWord = false;
    while (!isValidWord) {
      if (typeof guess === "string") {
        if (guess.length === 5 && guess.match(/[a-z]/i)) {
          this.incorrectGuesses++;
          isValidWord = true;
        } else if (guess === "") {
          console.log("Nothing was entered");
          alert("Nothing was entered please");
          return 0;
        } else {
          alert("Error: Please guess a valid letter.");
          return 0
        }
      }
    }
    // console.log("assigning guess");
    // console.log("This is guess111: " + guess);
    // console.log("This is random word: " + this.randomlyChosenWord);

    // console.log("assigned guess");
    // console.log(`guess: ${guess}`);
    return guess;
  }
}

export default Wordle;
