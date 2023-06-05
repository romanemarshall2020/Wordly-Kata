const input = require("readline-sync");

class Wordle {
  constructor() {
    this.randomWords = [
      "About",
      "Alert",
      "Argue",
      "Beach",
      "Forth",
      "Extra",
      "Night",
      "Giant",
      "Spare",
      "Style",
      "Vital"
    ];
    this.randomlyChosenWord = this.displayRandomWord();
    this.maxGuess = 6;
    this.guess = ""
    this.incorrectGuesses = 0;
    
  }

  displayRandomWord() {
    let randomlyChosenWord =
      this.randomWords[Math.floor(Math.random() * this.randomWords.length)];
    console.log(randomlyChosenWord);
    return randomlyChosenWord;
  }

  turnToUnderscore(randomlyChosenWord) {
    let wordArray = randomlyChosenWord.split("");
    for (let i = 0; i < wordArray.length; i++) {
      wordArray[i] = "_";
    }
    return wordArray;
  }



  playerGuess(guess) {
    guess = input.question("Please guess a five letter word: ");
    // this.incorrectGuesses++;
    // // console.log(`Incorrect guess! You have ${this.maxGuesses - this.incorrectGuesses} attempts left.`);

    // if (this.incorrectGuesses === this.maxGuesses) {
    //   console.log('Game over! You lost.');
    //   isGameOver = true;
    // }
    return guess;
   
  }

  
//   checkInput(guess) {
//     let isValidLetter = false;
//     while (!isValidLetter) {
//       if (guess.length === 5 && guess.match(/[a-z]/i)) {
//         isValidLetter = true;
//       } else if (guess === "") {
//         console.log("Nothing was entered");
//         return "Nothing was entered";
//       } else {
//         guess = readline.question("Error: Please guess a valid letter.");
//       }
//     }
//     return guess.toUpperCase();
//   }
}

module.exports = Wordle;
