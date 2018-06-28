# It's time to go back to basic JavaScript and some JQuery for a memory game
*  This is the game where you flip over tiles and try to find an identical match. If they match, remove the tiles otherwise

## Instructions
* Have an initial page where the user selects any where between 4 and 10 items to match.
* These items can be anything you choose, images, words, etc.
* After they select the number to match, generate an array housing 2 of each item.
* Randomly populate the 8-20 items to the screen.
* When a user clicks an item show the picture or word and then: 
    * If it is the first item clicked, do nothing.
    * If it is the second item clicked, see if it is the same as the first item clicked.
        * If they match, remove the elements from the board
        * If the do not match, hide them both and allow the user to click two new items.
* Once all items are matched, show a win message to the user and allow them to start a new game.

### BONUS
* Have the tiles flip over as an added visual effect
* Have a timer that the user can set. If time runs out before they finish, the game is over.