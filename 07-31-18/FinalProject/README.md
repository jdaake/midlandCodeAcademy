# Final Project
# GIF Library Website

## Goal
The goal of this project is to bring together everything we've talked about in this class so far. We'll use our knowledge of HTML, classes/ids, CSS selectors, the Bootstrap and jQuery libraries and general JavaScript knowledge to build a mock-up for a site that will look and feel functional. The expectation is that all usable code will be as DRY as possible. The final project should also be visually appealing. 

We'll be using just about EVERYTHING we have learned thus far. There are probably examples of how some of this stuff works already out there but it would behoove you to build it without referring to any how-tos outside of the standard library / API / Bootstrap documents.

## READMEs
There are 4 different `README` files for this final project.

* The [README-index.md](./README-index.md) is for the main structure of the site and layout of the main index page. This section of the final will not include much JavaScript. It will mostly be utilizing HTML and CSS and the Bootstrap library. 

* The [README-about.md](./README-about.md") file is for the about section of the site. It should have a simple explanation about the company as well as a series of reviews that can be sorted by location and rating.

* The [README-login.md](./README-login.md) is for the login page. This page should let the user enter an email address and password and then validate the info. If the info is bad, there should be proper error messages. If the info is valid, it should redirect the user to the users page. This will be a good mix of jQuery/JavaScript and HTML/CSS/Bootstrap.


* The [README-library.md](./README-library.md) is the 'members only' page. This page should display a series of options as layed out in the readme file. Once the options / inputs are submitted it should make an API call and pull the appropriate Gif/Gifs from the [Giphy Api](https://developers.giphy.com/). These should then be displayed depending on the search made as described in the readme. If a user is NOT logged in and they try to access this page, they should automatically be redirected to the login page.

## All Pages
* You'll need to find sample images, a color scheme to use, custom fonts, etc.
*  All of the copy (text) should be related to your product/service. This can be simple explanations and wordings but NO filler text/lorem ipsum should be used.
*  No filler images should be used either. 
* There should be at least one commonality between all pages: the nav bar. This should be FIXED so it stays at the top even as the user scrolls down.
    * We should use the Bootstrap navbar. It should have 3-5 options visible as outlined below: 
        1. A 'Home' link that goes back to the `index.html` page (always visible)
        2. An 'About' link `about.html` link (always visible)
        3. A 'Login' link that goes to `login.html`. This should only be visible if a user is NOT logged in.
        4. A 'Logout' button that 'logs out' the current user and brings you to the `login.html` page. This should be visible ONLY if a user is logged in.
        5. A 'Library' link that brings you to `library.html`  this should ONLY be visible if a user is logged in.
    * Check out the [bootstrap documentation](https://getbootstrap.com/docs/4.0/components/navbar/) for the navbar for directions.
    * The link to the login page should be floated to the right hand side of the navbar (hint: look up `float-right` in the bootstrap documentation).
* Every page will need to import the Bootstrap CSS, the Bootstrap javascript files (all 3 of them) and your custom JS file for that specific page.

## Recommended Order of Attack 
### If it's easier for you, feel free to go in a different order.

1. Start with the index and about sections and just add a login button to each for now.
2. Then attack the login screen and the ability to store a logged in user. 
3. After that, refactor the index and about pages to allow for the button to say login or logout and change functionality depending on if there is a user or not.
4. Finally focus on the beast that is the library page as this will take the most time and you'll be on the home stretch at that point.


## Final Thoughts

* All of us are here to support each other so don't be afraid to ask me or any other students questions as long as it's not just a "hey give me the code you got for X page".
* You should utilize bootstrap and one or more shareable css files across all the pages (instead of one css file per page with repeated information). If there is custom styling that ONLY pertains to one page then you can have an extra css file for that page with ONLY the custom styling. 
* The layout has to be clean and visually pleasing but the colors are not set in stone. If you want to adjust them you're welcome to as long as it looks good.
* All the CSS and JS should be outside of the `.html` files with no inline scripts or styling.
* Comment any code for its functionality so that if you had to pick it back up after a while you could easily see what you were doing with the code.
* File Structure Layout Options: 
    1. Subpage directories
        * :clipboard: index.html
        * :page_facing_up: index.js
        * :file_folder: assets
            * :file_folder: styles
                * :page_with_curl: main.css
                * :page_with_curl: secondary.css
                * :page_with_curl: tertiary.css
            * :file_folder: img
                * :file_folder: icons
                    * :art: icon1.jpg (should be a clearer name)
                    * :art: icon2.jpg
                    * :art: icon3.jpg
                * :file_folder: backgrounds
                    * :art: background1.jpg
                    * :art: background2.jpg
                    * :art: background3.jpg
        * :file_folder: about
            * :page_facing_up: about.js
            * :clipboard: about.html
        * :file_folder: login
            * :page_facing_up: login.js
            * :clipboard: login.html
        * :file_folder: library
            * :page_facing_up: library.js
            * :clipboard: library.html
    2. Top Folder with assets/js folder 
        * :clipboard: index.html
        * :clipboard: about.html
        * :clipboard: login.html
        * :clipboard: library.html  
        * :file_folder: assets
            * :file_folder: styles
                * :page_with_curl: main.css
                * :page_with_curl: secondary.css
                * :page_with_curl: tertiary.css
            * :file_folder: img
                * :file_folder: icons
                    * :art: icon1.jpg (should be a clearer name)
                    * :art: icon2.jpg
                    * :art: icon3.jpg
                * :file_folder: backgrounds
                    * :art: background1.jpg
                    * :art: background2.jpg
                    * :art: background3.jpg
            * :file_folder: js
                * :page_facing_up: index.js
                * :page_facing_up: about.js
                * :page_facing_up: login.js
                * :page_facing_up: library.js
    3. Any other structure you prefer is fine, but files should be neatly and logically organized.

## Useful Links
* [Coolors](https://coolors.co/) color scheme generation tool
* MDN Documents
    * [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    * [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    * [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* jQuery
    * [Documentation](https://api.jquery.com/)
    * CDN Links
        ```html
        Minified Code
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
        ```
        ```html
         Slim Minified (Missing some jQuery utilites you may or may not use depending on approach)
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E=" crossorigin="anonymous"></script>
        ```
* Bootstrap: 
    * [Documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
    * CDN Links 
        ```html
        CSS 
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        ```
        ```html
        Popper.js (needed for dropdown)
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        ```
        ```html
        Bootstrap JavaScript
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        ```
* Giphy - [API Docs](https://developers.giphy.com/)


## Bonus Goals
#### See the file marked [README-bonus.md](./README-bonus.md) for extra goals. 
##### While these are intended to be extra functionality in the event you complete the initial expectations, I highly encourage everyone to attempt some or all of them.