## We'll be taking a series of albums and displaying all of the photos 

### Create separate .html, .js, and .css files for this single page and have it do the following:
* Overall Layout
    * The Page should have two distinct sections
        *  The Top section of the page should list the users with their name, username, and email. These should be in a grid format with each one having a button to show the albums associated with that user
        *   Bottom Section
            * The bottom part of the page will be blank at the beginning. When you click one of the buttons in the top part to "show this users albums" all of the albums for that user should populate as bootstrap cards that have a button to see the photos in that album.
            * If an album is clicked, the bottom part of the page should be replaced with a bootstrap carousel of all of the photos from that album complete with the title. There should also be a button to close the carousel and reshow the active users albums.
* Fetch Requests
    1. Pull all of the albums from [here](https://jsonplaceholder.typicode.com/albums).
    2. Pull all of the users from [here](https://jsonplaceholder.typicode.com/users).
    3. Pull all of the photos form [here](https://jsonplaceholder.typicode.com/photos) .
