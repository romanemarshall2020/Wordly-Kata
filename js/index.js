import Wordle from "./wordle.js";
let wordle;
let currentBoxNum = 0
endGameButton.addEventListener("click", function () {
  alert("game has ended");
  document.getElementById("gameStarted").style.visibility = "hidden";
  document.getElementById("startGameButton").style.visibility = "visible";
  initialize();
});

startGameButton.addEventListener("click", function () {
  console.log("game started!");
  document.getElementById("gameStarted").style.visibility = "visible";
  document.getElementById("startGameButton").style.visibility = "hidden";
  initialize();
});

guessButton.addEventListener("click", function () {
  console.log("got the guess");
  playGame();
});

function initialize() {
  wordle = new Wordle();
  console.log(
    "Welcome to Wordle! In this game you will have 6 tries to guess the word"
  );
  wordle.turnToUnderscore(wordle.randomlyChosenWord);
  
}

function playGame() {
  console.log("inside playe game ");
  let isGameOver = false;
  let guess = document.getElementById("myInput").value;
  // let boxes = document.getElementById("box1")
  let row = document.getElementsByClassName("rows")
  
  for(let i = 0; i < guess.length; i++) {

    // for(let j = 0; j < 5; j++){

    let boxNum = 'box' + currentBoxNum
    currentBoxNum++

    // console.log(s)

    document.getElementById(boxNum).append(guess[i])

    // }

  }
  document.getElementById("myInput").value = null;
  guess = wordle.checkInput(guess);
  if (guess !== 0) {
    isGameOver = wordle.isGameWon(guess);

    if (!isGameOver) {
      if (wordle.guessesRemaining() === 0) {
        alert("You have no more guesses. You lose!");
        isGameOver = true;
        initialize();
      } else {
        wordle.guessesRemaining();
        wordle.revealLetter(guess);
      }
    } else {
      alert("Congratulations you WON!!");
      initialize();
    }
  }
}


// document.getElementById("box1")




// function drawBox(container, row, col, letter = "") {
//     console.log("inside of drawbox")
//     const box = document.createElement("div");
//     box.className = "boxes";
//     box.id = `boxes${row}${col}`;
//     box.textContent = letter;
//     container.appendChild(box);
    
//     return box
// }

// function drawGrid(container) {
//     console.log("inside of drawgrid")
//     const grid = document.createElement("div");
//     grid.className = "rows";
//     for(let i = 0; i < 6; i++) {
//         for(let j = 0; j < 5; j++) {
//             drawBox(grid, i, j)
//         }
//     }
//     container.appendChild(grid)
// }
//     function startup() {
//         const wordContainer = document.getElementById("wordContainer")
//         drawGrid(wordContainer)
    
//     }
    


export { playGame };
