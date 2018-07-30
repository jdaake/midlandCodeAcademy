# Users Page

## Goal

This page should be the section where the user can search for Gifs and view the options based off their search preference.

## Basic Technical Goals

### Page Layout
* The page itself should be separated into two distinct sections. One will be the search options, the other will be the area that the gifs themselves will be populated.
* The Search Section:
  * There should be a dropdown to allow a user to select one of three endpoints for the Giphy API. When a user changes their endpoint selection, the inputs they can fill in should change (see [the API explorer](https://developers.giphy.com/explorer/) for an example in practice).
  * If a required field is empty, ensure you do not actually send the request to the API and that the user gets some form of error message on the DOM to instruct them that they are missing a required field.
  * The possible endpoints and their parameters are as follows:
    * Search:
      * Search string: Required
      * Limit: you can have this be a set number, or a slider, or a dropdown with several options.
      * Offest: This will be a default of `0`.
      * Rating: Dropdown defaulting to PG with at LEAST 2 of the following options (in addition to PG): [`Y`, `G`, `PG-13`, `R`]
      * Language: This should default to `en` for now.
    * Translate: 
      * The word they are searching for: Required
    * Random:
      * The tag to search for a random gif: Required
      * Rating: Dropdown defaulting to PG with at the following options (in addition to PG): [`Y`, `G`, `PG-13`, `R`]
* The Results Section:
 * If for some reason no results are returned, have a message stating that fact and nothing else in this section. Similarly have a message if your response returned something other that a `200` level response (i.e. the server is unavailable etc.).
 * Have all of the results portrayed in a grid format with all items centered. Each grid element (the gif and pertinent information) should have the following:
    1. The Gif as an actual moving GIF not just a still frame of the Gif
    2. The title of the gif
    3. The Date (in a standard format) that the gif was uploaded
    4. The url for the gif. As an added challenge try putting a button next to the URL that says `Copy Link` that will copy the link to the clipboard of the user when clicked.
* BONUS GOAL: Add sort buttons so that the user can sort the gifs by `Rating`, `Date Added`, or `Title`(Alphabetically or Reverse Alphabetically)


### Javascript
* If a user is not logged in then the page should automatically redirect `location.href` to the `login.html` page before any thing else is done.
* Whenever a user changes their endpoint for the API (`Search`, `Translate`, or `Random`), update the form with the appropriate inputs. Reuse assets whenever possible i.e. don't just have 3 separate divs for each possibility. Find which inputs overlap and keep those while hiding and ignoring the ones that don't pertain to the active endpoint.
* Ensure that nothing is loaded until a user fills the required fields and ignore any fields that might be empty. 
* Make sure that you remove any trailing spaces at the end of the search string.
* When a user clicks the submit button for an API call, use `$.getJSON()` as opposed to `fetch` or other alternatives to retrieve the information and then pass it to the DOM. 
  * Separate the work into appropriate sized and DRY functions. 
  * Make sure that all items (or just the one in the case of `Random`) are centered on the page and that everything scales appropriately on multiple different screen sizes.
* As described above, ensure that you're handling bad responses as well as the possibilty of no data returned based off the inputs.