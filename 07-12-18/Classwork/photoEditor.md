# Photo Editor

## Goal

Make a 'photo editor' that allows a user to load up any photo by URL and adjust the specific photo properties of the image.

## Requirements
* Your project should be in a single folder with 3 files** `index.html`, javascript file and a stylesheet
* The page should be broken up into two halves vertically** a left and right hand side
  * Left side should be all of the controls for the app
  * Right side should be the image that is being edited
* You should use HTML `input`s to allow the user these options:
  * HTML inputs are used like so: `<input type=[TYPE]>`
  * Source URL for picture to load (`<input type='text'>`)
  * width of photo (`<input type='number'>`)
  * height of photo (`<input type='number'>`)
  * a button to execute the changes (`<button></button>`)
* Place an empty image tag on the right hand side like this: `<img src=''>`
* Each form element should have a unique `id` so that you can get the forms current value with jQuery
* Your jQuery code should be all wrapped in a block of code that makes sure the DOM is ready to be manipulated
* First thing to do in your jQuery is get reference to ALL of the form elements by their `id`s and save them into variables
* Attach a click event listener to the button and make it run a function called `updatePicture`
* The `updatePicture()` function will take the current values for the form fields and update the image properties
  * The image source attribute will be updated
  * The image height will be changed to form field value
  * The image width will be changed to form field value

## Bonus Goals
#### Add a filter for any images
  * The following filters should be offered
    * Sepia
    * Grayscale
    * Brightness
    * Contrast
    * Invert
    * Saturate
  * All of these filters take a `%` as a unit, don't forget it
* The percentage of change for the filter (type='range')
* Allow the users to accept Hue Rotate & Blur filters
* Display the current range value and units next to the HTML form element

## Extra Bonus Goals
* Add the following filter options with appropriate units
  * Blur
  * Hue*rotate
* Allow user to download newly edited image
