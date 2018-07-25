# Working with more JavaScript functions.

## We're going to be building some fun things with the expectation of fully DRY programming.

### On to something harder
#### We're going to build a calculator
* Have a div that functions as the input for the calculator.
* Set up number buttons for 0-9
* Set up action buttons for +, -, *, /, power, C, CE, and =
* When a user clicks a number, add that to the screen (like a calculator!).
* When a user clicks an action button, check for the following:
    * If there's nothing in memory and they didn't press =, store the current value in memory and then clear the screen to allow them to input the next number.
    * If something is in memory, perform the previous action and display that value on the screen. When they press a new button, clear the screen to allow them to start typing a new number.
    * If '=' is pressed, show the value of the last action pressed.
    * If 'CE' is pressed, clear out the div but keep the chain of actions in memory.
    * If 'C' is pressed, clear out memory and start from scratch.

### And now something harder still!
#### Time to build a very simple draw poker

* Starting off, we'll only have two players and won't bother with hiding one of the two sets of 5.
* Build a deck of cards, and at the beginning of the game, shuffle all the cards.
* Deal 5 cards to each player.
* Show the 5 cards for player 1 as 5 divs side by side and the 5 cards for player 2 as five divs side by side.
* Allow the user to click on any cards they want to KEEP. and then have them click a button to redraw. 
    * There should be a button for each player.
    * The player can only draw up to 4 cards.
* On clicking the redraw button, remove the cards they clicked on and give them enough cards to get them back to 5 total.
* After both players redraw, have a button appear to allow them to deal again, which starts the whole process over.

