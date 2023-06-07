import Wordle from "../wordle";
import readline from "readline-sync";

describe('Wordle', () => {
    let wordle = new Wordle()
    it("Should display a random word from list of randomWords and test the length", () => {
      expect(wordle.randomlyChosenWord.length).toEqual(5)
    })
    it("Should check the length of words array", () => {
      expect(wordle.randomWords.length).toEqual(11)
    })

    it("should turn random word into underscores", () => {
      expect(wordle.turnToUnderscore('About')).toEqual(['_','_','_','_','_'])
    })

    it("should take players input and returns it ", () => {
      //let input = "forth"
      spyOn(readline, 'question').and.returnValue('forth');
      expect(wordle.playerGuess()).toEqual("forth")
      
    })


    it("should return invalid input if not five letter word", () => {
      spyOn(readline, 'question').and.returnValues('boom', 'forth');
      expect(wordle.playerGuess()).toEqual("forth")
    })

  });