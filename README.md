Sodu Code:

First thing first we will need to create a list of Randomly generated 5 letter words.

once the game begins:
Step 1: One of the randomly generated words will be presented to the player but instead of the words we will show 5 empty spaces and hide tha value of each letter in the random selected word. 

Step 2: the player will then be given information on how many attempts they have and how many attempts remianing. 

Step 3:
player is asked to guess the 5 letter word chosen at random. but they can only enter chars and nothing else.

Step 4:
player enters their guess. and soon after our checkGuess function will be called. 

(this functions takes in the players guess as a parameter and then loops through it to check if the guess is a valid string with only chars)

if player did not enter a valid guess then it will ask player to re-enter a valid guess. thier 6 chance does not decrement it stays the same until a valid guess is made.

if player enters a valid guess then we call our check for correct guess function.


step 5: we call our check correctGuess function and check to see if the randomly chosen word matches the players guess.

    if this is true then the game is over and the player wins.

    if it is not true we loop though the valid string of chars and check to find if any letters from the players guess is present within or randomly chosen word.

        if so then we check if the position/index of the matching letters are similiar.
            if so, then we highlight said letter as GREEN

            if not in the same position it is highlighted as YELLOW. 
        
        if not present in the word it then left un-highlighted to show player the word is not present 

    after checking all letters and validating what green or yellow or if the guessed letter is not within the random chosen word:

        we decrament the remaining chances to guess by 1.

        check to see if player has any more turns.
            if so, then the player returns to being asked to guess again. while displaying the correctly guessed letters(Green ones) in their correct position amongst the hidden letters in chosen word.We will also show their previously guessed words and there highlighted letters/un-highlighted letters.

            if not, then player loses game. and chosen word is revealed tp player

