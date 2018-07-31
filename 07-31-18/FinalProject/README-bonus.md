# Final Project
## Bonus Goals

### Login Page Bonus Goals
* Create a '2 factor authentication' input and simulates a text message to the user and has them enter it in on that Page
  * actually generate a random 6 digit number
  * display in the console to simulate 'getting a text'
  * Ensure that the number that was generated matches the number in the 2factor auth input.

### Library Page Bonus Goals
* If a user is under 18 years old, don't allow them to search for `R` rated gifs. 
    * Remove the `R` option from the dropdown
    * Replace it with `PG-13` in the query string if they add an `R` option through the chrome inspection tool.
* Remove the `Translate` endpoint option for any user that is only a `basic` role, example: 
    ``` javascript
     { email: "steveg@example.com", 
       password: "PaSsWoRd", 
       birthday: "2000-09-30 00:00:00",
       role: "basic" } 
    ``` 
* Ensure that the `Translate` endpoint is still an option for non basic users. Also ensure you handle the case if a user manually adds the input information for `Translate` to the DOM.

### Signup Page
* Add a signup page styled and structured however you prefer. 
    * This should have a link at the top menu if no user is logged in.
    * Should have a link from the `login` page as well under the login form.
    * If a user is logged in, you should automatically be redirected to the `library` page.
* The signup form should have the following (feel free to change the text for the `label` as you see fit for each):
    * Email input
    * Password
    * Confirm Password
    * Account type (have a brief description of the cost and usage for basic and advanced users). If you want an extra challenge, add this to a tooltip for the Account type `label`
    * Date of Birth
* Copy and paste the `USERS` const from the login readme (also found [here](./assets/users.json)). This will function as your "database" to check against. When a user submits the signup form, verify the following.
    * The user must have a valid email address (can be fake, it just has to have the right format). If you're lost look online for options.
    * The password in the `Password` and `Verify Password` fields must match.
    * The password must be at least 6 characters long and have at least one uppercase and one lowercase letter.
    * They must be at least 16 years old. (Use one or more inputs for birthdate)
    * The role must be either `basic` or `advanced` if it's anything else, it's invalid.
    * No user exists with that email address. 
* If one or more of the above errors exist, add the error message(s) to the DOM and remove them on each signup attempt so you can populate new errors.
* If no errors were found, show a "Thanks for signing up! Once you've verified your email address you can go here (link to `login.html`) to login!" message.
    * Log the new user to the console to make sure it follows the same pattern as the others.
    * Since we're not working with a database or a server they obviously won't get an email and their login information won't be saved. 

### Admin Page
#### Add an admin section with styling and functionality you prefer.  This is a lot more freeform than the others as this will give you a chance to flex your creative muscles a little bit more. The minimum requirements are as follows: 
* If no user is logged in or the logged in user is NOT `role: "admin"` redirect them automatically to `login.html`
* Have a link on the menu if user is logged in AND has `role: "admin"`
* Display pertinent information in table form from the [users.json](./assets/users.json) file in assets.
* When you click on each table header, have the data in the table sort by that key.